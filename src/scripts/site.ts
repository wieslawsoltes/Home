import type { SearchIndex, SearchIndexItem } from '@/lib/search';
import { preparePagefind, searchPagefind, type FullTextSearchMatch } from '@/lib/pagefind-search';
import { featuredSearchItems, scoreSearchItem, searchItems } from '@/lib/search-ranking';
import type { TransitionBeforePreparationEvent, TransitionBeforeSwapEvent } from 'astro:transitions/client';

interface SiteMetadata {
  repositories?: Record<string, {
    stars?: number;
    language?: string | null;
    pushedAt?: string | null;
  }>;
  packages?: Record<string, { version?: string | null }>;
}

let activeBody: HTMLElement | null = null;
let pageController: AbortController | undefined;
let revealObserver: IntersectionObserver | undefined;
let metadataPromise: Promise<SiteMetadata> | undefined;
let searchIndexPromise: Promise<SearchIndex> | undefined;
let searchIndexItems: SearchIndexItem[] = [];
let pendingTransitionTitle: string | undefined;
let transitionTitleTimeout: number | undefined;

const siteBase = () => document.documentElement.dataset.base ?? '/';

function cleanupPage() {
  pageController?.abort();
  pageController = undefined;
  revealObserver?.disconnect();
  revealObserver = undefined;
  activeBody = null;
}

function flashButton(button: HTMLButtonElement, label: string, signal: AbortSignal) {
  const previous = button.textContent ?? '';
  button.textContent = label;
  const timeout = window.setTimeout(() => {
    if (!signal.aborted) button.textContent = previous;
  }, 1400);
  signal.addEventListener('abort', () => window.clearTimeout(timeout), { once: true });
}

async function copyText(button: HTMLButtonElement, text: string, signal: AbortSignal) {
  try {
    await navigator.clipboard.writeText(text);
    flashButton(button, 'Copied', signal);
  } catch {
    flashButton(button, 'Copy failed', signal);
  }
}

function initNavigation(signal: AbortSignal) {
  const menu = document.querySelector<HTMLButtonElement>('.menu-toggle');
  const nav = document.querySelector<HTMLElement>('.site-nav');

  menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!open));
    nav?.toggleAttribute('data-open', !open);
  }, { signal });

  nav?.querySelectorAll('a, [data-search-open]').forEach((link) => {
    link.addEventListener('click', () => {
      menu?.setAttribute('aria-expanded', 'false');
      nav.removeAttribute('data-open');
    }, { signal });
  });

  const header = document.querySelector<HTMLElement>('[data-header]');
  const updateHeader = () => header?.toggleAttribute('data-scrolled', window.scrollY > 24);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true, signal });
}

function initReveals() {
  const items = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.setAttribute('data-visible', ''));
    return;
  }

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.setAttribute('data-visible', '');
      revealObserver?.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -48px' });
  items.forEach((item) => revealObserver?.observe(item));
}

function initAmbientGlow(signal: AbortSignal) {
  const glow = document.querySelector<HTMLElement>('.ambient-glow');
  window.addEventListener('pointermove', (event) => {
    glow?.style.setProperty('--pointer-x', `${event.clientX}px`);
    glow?.style.setProperty('--pointer-y', `${event.clientY}px`);
  }, { passive: true, signal });
}

function initCodeControls(signal: AbortSignal) {
  document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((button) => {
    button.addEventListener('click', () => {
      const target = document.getElementById(button.dataset.copy ?? '');
      if (target) void copyText(button, target.textContent ?? '', signal);
    }, { signal });
  });

  document.querySelectorAll<HTMLElement>('[data-code-tabs]').forEach((group) => {
    const tabs = [...group.querySelectorAll<HTMLButtonElement>('[data-code-tab]')];
    const panes = [...group.querySelectorAll<HTMLElement>('[data-code-pane]')];
    const activateTab = (tab: HTMLButtonElement, focus = false) => {
      const selected = tab.dataset.codeTab;
      tabs.forEach((candidate) => {
        const active = candidate === tab;
        candidate.setAttribute('aria-selected', String(active));
        candidate.tabIndex = active ? 0 : -1;
      });
      panes.forEach((pane) => { pane.hidden = pane.dataset.codePane !== selected; });
      if (focus) tab.focus();
    };
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => activateTab(tab), { signal });
      tab.addEventListener('keydown', (event) => {
        const current = tabs.indexOf(tab);
        const next = event.key === 'ArrowRight'
          ? (current + 1) % tabs.length
          : event.key === 'ArrowLeft'
            ? (current - 1 + tabs.length) % tabs.length
            : event.key === 'Home'
              ? 0
              : event.key === 'End'
                ? tabs.length - 1
                : -1;
        if (next < 0) return;
        event.preventDefault();
        activateTab(tabs[next], true);
      }, { signal });
    });
  });
}

function loadMetadata() {
  if (!metadataPromise) {
    metadataPromise = fetch(`${siteBase()}data/metadata.json`)
      .then((response) => {
        if (!response.ok) throw new Error(`Metadata returned ${response.status}`);
        return response.json() as Promise<SiteMetadata>;
      })
      .catch((error) => {
        metadataPromise = undefined;
        throw error;
      });
  }
  return metadataPromise;
}

async function hydrateMetadata(signal: AbortSignal) {
  try {
    const metadata = await loadMetadata();
    if (signal.aborted) return;

    document.querySelectorAll<HTMLElement>('[data-repo-stats]').forEach((element) => {
      const data = metadata.repositories?.[element.dataset.repoStats ?? ''];
      if (!data) return;
      const stars = Number(data.stars ?? 0).toLocaleString();
      const updated = data.pushedAt
        ? new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' }).format(new Date(data.pushedAt))
        : 'Recently updated';
      const starsLabel = document.createElement('span');
      const detailLabel = document.createElement('span');
      starsLabel.textContent = `★ ${stars}`;
      detailLabel.textContent = `${data.language ?? '.NET'} · ${updated}`;
      element.replaceChildren(starsLabel, detailLabel);
    });

    document.querySelectorAll<HTMLElement>('[data-package]').forEach((element) => {
      const data = metadata.packages?.[element.dataset.package ?? ''];
      const target = element.querySelector<HTMLElement>('[data-package-version]');
      if (data?.version && target) target.textContent = `v${data.version}`;
    });

    const project = document.querySelector<HTMLElement>('[data-primary-package]');
    const version = metadata.packages?.[project?.dataset.primaryPackage ?? '']?.version;
    if (!version || !project) return;
    project.querySelectorAll<HTMLElement>('.code-example').forEach((example) => {
      const walker = document.createTreeWalker(example, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        const node = walker.currentNode;
        if (node.nodeValue?.includes('VERSION')) node.nodeValue = node.nodeValue.replaceAll('VERSION', version);
      }
      example.querySelectorAll<HTMLButtonElement>('.expressive-code .copy button[data-code]').forEach((button) => {
        if (button.dataset.code?.includes('VERSION')) {
          button.dataset.code = button.dataset.code.replaceAll('VERSION', version);
        }
      });
    });
  } catch {
    // Every page remains complete when live metadata is temporarily unavailable.
  }
}

function initProjectIndex(signal: AbortSignal) {
  const index = document.querySelector<HTMLElement>('[data-project-index]');
  if (!index) return;
  const buttons = [...index.querySelectorAll<HTMLButtonElement>('[data-filter]')];
  const search = index.querySelector<HTMLInputElement>('[data-project-search]');
  const items = [...index.querySelectorAll<HTMLElement>('[data-project]')];
  const empty = index.querySelector<HTMLElement>('[data-empty]');
  let selected = 'All';

  const filterProjects = () => {
    const query = search?.value.trim().toLowerCase() ?? '';
    let visible = 0;
    items.forEach((item) => {
      const categoryMatch = selected === 'All' || item.dataset.category === selected;
      const searchMatch = !query || item.dataset.search?.includes(query);
      const show = categoryMatch && searchMatch;
      item.hidden = !show;
      if (show) visible++;
    });
    if (empty) empty.hidden = visible !== 0;
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      selected = button.dataset.filter ?? 'All';
      buttons.forEach((candidate) => candidate.setAttribute('aria-pressed', String(candidate === button)));
      filterProjects();
    }, { signal });
  });
  search?.addEventListener('input', filterProjects, { signal });
}

function initSystemsMaps(signal: AbortSignal) {
  document.querySelectorAll<HTMLElement>('[data-system-map]').forEach((map) => {
    const nodes = [...map.querySelectorAll<HTMLElement>('[data-map-node]')];
    const reset = () => nodes.forEach((node) => node.removeAttribute('data-map-state'));
    const activate = (source: HTMLElement) => {
      const active = source.dataset.mapNode;
      const related = new Set((source.dataset.relations ?? '').split(',').filter(Boolean));
      nodes.forEach((node) => {
        const slug = node.dataset.mapNode ?? '';
        node.dataset.mapState = slug === active ? 'active' : related.has(slug) ? 'related' : 'dim';
      });
    };
    nodes.forEach((node) => {
      node.addEventListener('mouseenter', () => activate(node), { signal });
      node.addEventListener('focus', () => activate(node), { signal });
      node.addEventListener('mouseleave', reset, { signal });
      node.addEventListener('blur', reset, { signal });
    });
  });
}

function loadSearchIndex() {
  if (!searchIndexPromise) {
    searchIndexPromise = fetch(`${siteBase()}search.json`)
      .then((response) => {
        if (!response.ok) throw new Error(`Search index returned ${response.status}`);
        return response.json() as Promise<SearchIndex>;
      })
      .catch((error) => {
        searchIndexPromise = undefined;
        throw error;
      });
  }
  return searchIndexPromise;
}

function resultMeta(item: SearchIndexItem) {
  if (item.kind === 'capability') return `${item.parent} · ${item.category}`;
  if (item.kind === 'project') return `${item.category} · ${item.status}`;
  return item.eyebrow;
}

function searchItemTransitionTitle(item: SearchIndexItem) {
  if (item.kind === 'project') return `project-title-${item.id.replace(/^project:/, '')}`;
  if (item.kind === 'capability') return `capability-title-${item.id.replace(/^capability:/, '').replaceAll('/', '-')}`;
  return undefined;
}

type DisplaySearchResult = {
  item: SearchIndexItem;
  excerpt?: string;
};

function setSearchExcerpt(target: HTMLElement, excerpt: string) {
  const template = document.createElement('template');
  template.innerHTML = excerpt;
  const nodes = [...template.content.childNodes].map((node) => {
    if (node instanceof HTMLElement && node.tagName === 'MARK') {
      const mark = document.createElement('mark');
      mark.textContent = node.textContent;
      return mark;
    }
    return document.createTextNode(node.textContent ?? '');
  });
  target.replaceChildren(...nodes);
}

function createSearchResult(result: DisplaySearchResult, index: number) {
  const { item, excerpt } = result;
  const row = document.createElement('li');
  const link = document.createElement('a');
  const number = document.createElement('span');
  const copy = document.createElement('span');
  const kind = document.createElement('small');
  const title = document.createElement('strong');
  const description = document.createElement('p');
  const arrow = document.createElement('i');
  link.href = item.url;
  link.dataset.searchResult = '';
  number.className = 'site-search-number';
  number.textContent = String(index + 1).padStart(2, '0');
  copy.className = 'site-search-result-copy';
  kind.textContent = `${item.kind} · ${resultMeta(item)}`;
  title.textContent = item.title;
  const transitionTitle = searchItemTransitionTitle(item);
  if (transitionTitle) title.dataset.transitionTitle = transitionTitle;
  if (excerpt) {
    description.className = 'site-search-excerpt';
    setSearchExcerpt(description, excerpt);
  } else {
    description.textContent = item.description;
  }
  arrow.textContent = '→';
  copy.append(kind, title, description);
  link.append(number, copy, arrow);
  row.append(link);
  return row;
}

function mergeSearchResults(query: string, fullTextMatches: FullTextSearchMatch[], limit = 12) {
  const ranked = new Map<string, DisplaySearchResult & { score: number }>();
  searchIndexItems.forEach((item) => {
    const score = scoreSearchItem(item, query);
    if (score > 0) ranked.set(item.id, { item, score });
  });
  fullTextMatches.forEach((match) => {
    const fullTextScore = Math.max(24, 84 - match.rank * 4);
    const existing = ranked.get(match.item.id);
    if (existing) {
      existing.score += fullTextScore;
      existing.excerpt = match.excerpt;
    } else {
      ranked.set(match.item.id, { item: match.item, excerpt: match.excerpt, score: fullTextScore });
    }
  });
  return [...ranked.values()]
    .sort((left, right) => right.score - left.score)
    .slice(0, limit);
}

function initSiteSearch(signal: AbortSignal) {
  const dialog = document.querySelector<HTMLDialogElement>('[data-site-search]');
  if (!dialog) return;
  const openers = [...document.querySelectorAll<HTMLButtonElement>('[data-search-open]')];
  const closeButton = dialog.querySelector<HTMLButtonElement>('[data-search-close]');
  const form = dialog.querySelector<HTMLFormElement>('[data-search-form]');
  const input = dialog.querySelector<HTMLInputElement>('[data-search-input]');
  const results = dialog.querySelector<HTMLOListElement>('[data-search-results]');
  const summary = dialog.querySelector<HTMLElement>('[data-search-summary]');
  const message = dialog.querySelector<HTMLElement>('[data-search-message]');
  let lastOpener: HTMLElement | null = null;
  let searchRequest = 0;

  const showResults = (matches: DisplaySearchResult[], query: string, pending = false) => {
    if (!results || !summary || !message) return;
    results.replaceChildren(...matches.map(createSearchResult));
    message.hidden = matches.length > 0;
    results.setAttribute('aria-busy', String(pending));
    if (pending) {
      summary.textContent = matches.length
        ? `${matches.length} metadata ${matches.length === 1 ? 'match' : 'matches'} · searching full page text`
        : 'Searching full page text';
      message.textContent = 'Searching full page text…';
    } else if (!matches.length) {
      message.textContent = `No result for “${query.trim()}”. Try a project, capability, package, or technology.`;
      summary.textContent = 'No matching destinations';
    }
  };

  const render = async (query = '') => {
    if (!results || !summary || !message) return;
    const request = ++searchRequest;
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      const featured = featuredSearchItems(searchIndexItems).map((item) => ({ item }));
      showResults(featured, '');
      summary.textContent = `Featured projects · ${searchIndexItems.length} destinations indexed`;
      return;
    }

    const curated = searchItems(searchIndexItems, trimmedQuery).map((item) => ({ item }));
    if (trimmedQuery.length < 2) {
      showResults(curated, trimmedQuery);
      summary.textContent = curated.length
        ? `${curated.length} metadata ${curated.length === 1 ? 'match' : 'matches'} · type another character for full text`
        : 'Type another character for full-text search';
      return;
    }

    showResults(curated, trimmedQuery, true);
    const fullText = await searchPagefind(trimmedQuery, searchIndexItems, siteBase());
    if (request !== searchRequest || signal.aborted) return;
    const merged = fullText.available
      ? mergeSearchResults(trimmedQuery, fullText.matches)
      : curated;
    showResults(merged, trimmedQuery);
    summary.textContent = fullText.available
      ? `${merged.length} best ${merged.length === 1 ? 'result' : 'results'} · metadata + full page text`
      : `${merged.length} best ${merged.length === 1 ? 'result' : 'results'} · metadata index`;
  };

  const openSearch = async (opener?: HTMLElement | null) => {
    if (!input || dialog.open || signal.aborted) return;
    lastOpener = opener ?? document.activeElement as HTMLElement;
    dialog.showModal();
    void preparePagefind(siteBase());
    requestAnimationFrame(() => {
      if (!signal.aborted) input.focus();
    });
    try {
      const index = await loadSearchIndex();
      if (signal.aborted) return;
      searchIndexItems = index.items;
      void render(input.value);
    } catch {
      if (signal.aborted) return;
      if (summary) summary.textContent = 'Search unavailable';
      if (message) {
        message.hidden = false;
        message.textContent = 'The search index could not be loaded. Project navigation remains available from the home page.';
      }
    }
  };

  if (searchIndexItems.length) void render();
  openers.forEach((opener) => opener.addEventListener('click', () => void openSearch(opener), { signal }));
  closeButton?.addEventListener('click', () => dialog.close(), { signal });
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    dialog.querySelector<HTMLAnchorElement>('[data-search-result]')?.click();
  }, { signal });
  input?.addEventListener('input', () => void render(input.value), { signal });
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  }, { signal });
  dialog.addEventListener('close', () => {
    searchRequest += 1;
    if (input) input.value = '';
    if (!signal.aborted && lastOpener?.isConnected) lastOpener.focus();
    lastOpener = null;
  }, { signal });
  dialog.addEventListener('keydown', (event) => {
    const links = [...dialog.querySelectorAll<HTMLAnchorElement>('[data-search-result]')];
    if (!links.length || !['ArrowDown', 'ArrowUp'].includes(event.key)) return;
    event.preventDefault();
    const current = links.indexOf(document.activeElement as HTMLAnchorElement);
    const direction = event.key === 'ArrowDown' ? 1 : -1;
    const next = current < 0 ? (direction > 0 ? 0 : links.length - 1) : (current + direction + links.length) % links.length;
    links[next].focus();
  }, { signal });

  document.addEventListener('keydown', (event) => {
    const target = event.target as HTMLElement;
    const editing = target.matches('input, textarea, select') || target.isContentEditable;
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      void openSearch();
    } else if (event.key === '/' && !editing && !dialog.open) {
      event.preventDefault();
      void openSearch();
    }
  }, { signal });

  const shortcut = /Mac|iPhone|iPad/.test(navigator.platform) ? '⌘K' : 'Ctrl K';
  document.querySelectorAll<HTMLElement>('[data-search-shortcut]').forEach((hint) => { hint.textContent = shortcut; });
  signal.addEventListener('abort', () => {
    lastOpener = null;
    if (dialog.open) dialog.close();
  }, { once: true });
}

function initPage() {
  if (activeBody === document.body) return;
  cleanupPage();
  activeBody = document.body;
  pageController = new AbortController();
  const { signal } = pageController;

  initNavigation(signal);
  initReveals();
  initAmbientGlow(signal);
  initCodeControls(signal);
  initProjectIndex(signal);
  initSystemsMaps(signal);
  initSiteSearch(signal);
  document.querySelectorAll<HTMLElement>('[data-year]').forEach((year) => {
    year.textContent = String(new Date().getFullYear());
  });
  void hydrateMetadata(signal);
}

function findTransitionTitle(root: ParentNode, name: string) {
  return [...root.querySelectorAll<HTMLElement>('[data-transition-title]')]
    .find((element) => element.dataset.transitionTitle === name);
}

function beginNavigation(rawEvent: Event) {
  const event = rawEvent as TransitionBeforePreparationEvent;
  document.documentElement.setAttribute('data-navigating', '');
  if (transitionTitleTimeout) window.clearTimeout(transitionTitleTimeout);
  document.querySelectorAll<HTMLElement>('[data-transition-title]').forEach((element) => {
    element.style.removeProperty('view-transition-name');
  });
  const sourceTitle = event.sourceElement?.querySelector<HTMLElement>('[data-transition-title]');
  pendingTransitionTitle = sourceTitle?.dataset.transitionTitle;
  if (!sourceTitle || !pendingTransitionTitle) return;
  sourceTitle.style.setProperty('view-transition-name', pendingTransitionTitle);
  event.signal.addEventListener('abort', () => {
    sourceTitle.style.removeProperty('view-transition-name');
    pendingTransitionTitle = undefined;
  }, { once: true });
}

function prepareSwap(rawEvent: Event) {
  const event = rawEvent as TransitionBeforeSwapEvent;
  cleanupPage();
  if (!pendingTransitionTitle) return;
  findTransitionTitle(event.newDocument, pendingTransitionTitle)
    ?.style.setProperty('view-transition-name', pendingTransitionTitle);
}

function clearTransitionTitle() {
  const completedTitle = pendingTransitionTitle;
  pendingTransitionTitle = undefined;
  if (!completedTitle) return;
  transitionTitleTimeout = window.setTimeout(() => {
    findTransitionTitle(document, completedTitle)?.style.removeProperty('view-transition-name');
    transitionTitleTimeout = undefined;
  }, 360);
}

const endNavigation = () => document.documentElement.removeAttribute('data-navigating');

document.addEventListener('astro:before-preparation', beginNavigation);
document.addEventListener('astro:after-preparation', endNavigation);
document.addEventListener('astro:before-swap', prepareSwap);
document.addEventListener('astro:page-load', () => {
  endNavigation();
  initPage();
  clearTransitionTitle();
});

initPage();
