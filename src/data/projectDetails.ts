import type { Project } from './projects';

export type ProjectMedia = {
  src: string;
  alt: string;
  caption: string;
};

export type CompatibilityItem = {
  label: string;
  value: string;
  state?: 'ready' | 'partial' | 'planned';
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectDetail = {
  introduction: string;
  audience: string[];
  architecture: { label: string; detail: string }[];
  compatibility: CompatibilityItem[];
  proof: { value: string; label: string }[];
  media: ProjectMedia[];
  links: ProjectLink[];
  limitations?: string;
  related: string[];
};

const raw = (repo: string, branch: string, path: string) =>
  `https://raw.githubusercontent.com/wieslawsoltes/${repo}/${branch}/${path}`;

const docs = (repo: string) => `https://wieslawsoltes.github.io/${repo}/`;
const repo = (name: string, path = '') => `https://github.com/wieslawsoltes/${name}${path}`;

const overrides: Record<string, Partial<ProjectDetail>> = {
  progpu: {
    introduction: 'ProGPU owns the path from device creation to presentation. Its layers separate platform services, retained composition, vector geometry, text, and compute so framework integrations can adopt only the pieces they need.',
    audience: ['UI framework authors replacing a renderer', 'Graphics tools that need WebGPU-native primitives', 'Teams exploring portable GPU composition in .NET'],
    architecture: [
      { label: 'Backend', detail: 'Creates devices, surfaces, swapchains, queues, and platform services through WebGPU and Silk.NET.' },
      { label: 'Primitives', detail: 'Vector, text, image, and compute packages prepare GPU-ready resources.' },
      { label: 'Scene', detail: 'A retained visual tree records composition commands and effects.' },
      { label: 'Interop', detail: 'Avalonia, Uno, WPF, and WinForms bridges connect existing UI contracts.' }
    ],
    compatibility: [
      { label: 'Windows', value: 'Preview', state: 'partial' },
      { label: 'macOS', value: 'Preview', state: 'partial' },
      { label: 'Linux', value: 'Preview', state: 'partial' },
      { label: 'NativeAOT', value: 'Design target', state: 'planned' }
    ],
    proof: [{ value: 'WebGPU', label: 'native rendering API' }, { value: '5 layers', label: 'backend to scene composition' }, { value: '4 bridges', label: 'framework integration directions' }],
    media: [{ src: raw('ProGPU', 'main', 'eng/Assets/ProGpuIcon.png'), alt: 'ProGPU project mark', caption: 'ProGPU’s visual identity reflects a low-level GPU foundation.' }],
    links: [{ label: 'Repository', href: repo('ProGPU') }, { label: 'Samples', href: repo('ProGPU', '/tree/main/samples') }],
    limitations: 'ProGPU is an active preview. APIs and backend behavior can change between prerelease packages; validate the current samples before adopting it in production.',
    related: ['avalonia-progpu', 'avalonia-silknet', 'librewpf', 'librewinforms']
  },
  librewpf: {
    introduction: 'LibreWPF keeps the WPF application model and redirects the platform below it. The work combines transported managed WPF sources, a portable SDK, and a ProGPU compositor so existing XAML knowledge remains useful beyond Windows.',
    audience: ['WPF maintainers evaluating a portable future', 'Framework engineers studying compatibility layers', 'Desktop teams with deep WPF domain investment'],
    compatibility: [{ label: 'WPF source/XAML', value: 'Primary goal', state: 'partial' }, { label: 'Windows', value: 'Preview', state: 'partial' }, { label: 'macOS', value: 'Preview', state: 'partial' }, { label: 'Linux', value: 'Preview', state: 'partial' }],
    proof: [{ value: 'SDK switch', label: 'migration entry point' }, { value: 'Managed WPF', label: 'familiar programming model' }, { value: 'ProGPU', label: 'portable compositor' }],
    limitations: 'This is an experimental compatibility effort, not a drop-in production replacement for Microsoft WPF. Platform services, control coverage, and rendering parity are still evolving.',
    related: ['progpu', 'librewinforms', 'avalonia-progpu']
  },
  librewinforms: {
    introduction: 'LibreWinForms explores how the established System.Windows.Forms surface can run over portable managed controls and a modern GPU renderer while retaining the application entry points developers already know.',
    audience: ['WinForms teams researching cross-platform options', 'Tool vendors with classic desktop APIs', 'Framework authors studying managed compatibility'],
    compatibility: [{ label: 'WinForms API', value: 'In progress', state: 'partial' }, { label: 'Windows', value: 'Preview', state: 'partial' }, { label: 'macOS', value: 'Preview', state: 'partial' }, { label: 'Linux', value: 'Preview', state: 'partial' }],
    proof: [{ value: 'System.Windows.Forms', label: 'familiar API shape' }, { value: 'SDK switch', label: 'project-level adoption' }, { value: 'GPU-backed', label: 'drawing direction' }],
    limitations: 'LibreWinForms is a research-grade preview. Control, accessibility, platform service, and behavioral parity are incomplete.',
    related: ['progpu', 'librewpf', 'avalonia-silknet']
  },
  'avalonia-progpu': {
    introduction: 'The ProGPU backend implements Avalonia rendering contracts directly over a WebGPU-oriented scene and resource model. It is the renderer half of an alternative Avalonia desktop stack.',
    audience: ['Avalonia contributors and renderer authors', 'Apps exploring a Skia-independent pipeline', 'GPU-heavy UI and visualization tools'],
    compatibility: [{ label: 'Avalonia', value: 'Feature branch', state: 'partial' }, { label: 'WebGPU', value: 'Core path', state: 'ready' }, { label: 'Custom shaders', value: 'In-frame', state: 'partial' }, { label: 'Production', value: 'Not yet', state: 'planned' }],
    proof: [{ value: 'Skia-free', label: 'rendering path' }, { value: 'WebGPU', label: 'device and command model' }, { value: 'Leases', label: 'custom vector operations' }],
    limitations: 'This backend lives on an Avalonia feature branch and is intended for evaluation and framework development.',
    related: ['progpu', 'avalonia-silknet', 'librewpf']
  },
  'avalonia-silknet': {
    introduction: 'The Silk.NET backend supplies windows, input, surfaces, and platform glue independently from the renderer. Keeping that seam explicit makes it possible to test Avalonia with an alternative desktop host.',
    audience: ['Avalonia platform backend authors', 'Silk.NET and WebGPU integrators', 'Teams investigating portable native windowing'],
    compatibility: [{ label: 'Windowing', value: 'Preview', state: 'partial' }, { label: 'Input', value: 'Preview', state: 'partial' }, { label: 'WebGPU surfaces', value: 'Integrated', state: 'ready' }, { label: 'Renderer choice', value: 'Decoupled', state: 'ready' }],
    proof: [{ value: 'Silk.NET', label: 'native platform layer' }, { value: 'Cross-platform', label: 'host direction' }, { value: 'Decoupled', label: 'renderer boundary' }],
    limitations: 'The backend is evolving alongside the ProGPU Avalonia branch and does not yet cover every production platform service.',
    related: ['avalonia-progpu', 'progpu', 'nativewebview']
  },
  dock: {
    introduction: 'Dock separates workspace models from Avalonia presentation. Factories create document and tool layouts, themes render them, and serializers preserve them across sessions and application architectures.',
    audience: ['IDE and engineering-tool authors', 'Desktop apps with document/tool workspaces', 'MVVM teams needing serializable layouts'],
    architecture: [{ label: 'Model', detail: 'Framework-neutral docks, documents, tools, factories, and commands.' }, { label: 'View', detail: 'Avalonia controls, presenters, drag indicators, and floating windows.' }, { label: 'Theme', detail: 'Fluent, Simple, and community styling packages.' }, { label: 'Persistence', detail: 'JSON, XML, YAML, and Protobuf layout serialization.' }],
    compatibility: [{ label: 'Avalonia', value: 'Supported', state: 'ready' }, { label: 'MVVM', value: 'Supported', state: 'ready' }, { label: 'ReactiveUI / Prism', value: 'Integrations', state: 'ready' }, { label: 'AOT', value: 'Model dependent', state: 'partial' }],
    proof: [{ value: '7 models', label: 'integration choices' }, { value: '4 formats', label: 'layout serialization' }, { value: 'Floating', label: 'native tool windows' }],
    media: [{ src: raw('Dock', 'master', 'images/Dock.png'), alt: 'Dock sample application with documents and tool panes', caption: 'A complete Dock workspace with documents, tools, tabs, and split regions.' }, { src: raw('Dock', 'master', 'images/GUI.png'), alt: 'Dock GUI sample', caption: 'Workspace composition is model-driven and themeable.' }],
    links: [{ label: 'Documentation', href: docs('Dock') }, { label: 'Samples', href: repo('Dock', '/tree/master/samples') }],
    related: ['xaml-behaviors', 'prodatagrid', 'xaml-visual-editor']
  },
  'xaml-behaviors': {
    introduction: 'XAML Behaviors turns routed events and observable state into reusable actions. The library ranges from small interaction primitives to drag-and-drop, viewport, responsive, and strongly typed generated behaviors.',
    audience: ['Avalonia MVVM applications', 'Control authors packaging reusable interaction', 'AOT-conscious teams avoiding reflection-heavy wiring'],
    compatibility: [{ label: 'Avalonia', value: 'Supported', state: 'ready' }, { label: 'MVVM', value: 'First-class', state: 'ready' }, { label: 'ReactiveUI', value: 'Integration', state: 'ready' }, { label: 'NativeAOT', value: 'Generated options', state: 'ready' }],
    proof: [{ value: 'Actions', label: 'declarative operations' }, { value: 'Triggers', label: 'event and state activation' }, { value: 'Generators', label: 'typed AOT surfaces' }],
    media: [{ src: raw('Xaml.Behaviors', 'master', 'logo.png'), alt: 'XAML Behaviors project logo', caption: 'A broad library of composable interaction primitives for Avalonia.' }],
    links: [{ label: 'Documentation', href: docs('Xaml.Behaviors') }, { label: 'Samples', href: repo('Xaml.Behaviors', '/tree/master/samples') }],
    related: ['dock', 'panandzoom', 'nodeeditor']
  },
  'svg-skia': {
    introduction: 'Svg.Skia parses SVG into a reusable drawing model and renders through SkiaSharp. Avalonia controls, source generators, converters, and extensive parity testing make it useful from runtime UI to asset pipelines.',
    audience: ['Cross-platform .NET apps rendering SVG', 'Asset pipelines that need code generation', 'Avalonia apps using scalable icons and artwork'],
    compatibility: [{ label: 'SVG 1.1', value: 'Broad support', state: 'ready' }, { label: 'Static SVG 2', value: 'Partial', state: 'partial' }, { label: 'Avalonia', value: 'Controls', state: 'ready' }, { label: 'Source generation', value: 'Supported', state: 'ready' }],
    proof: [{ value: 'W3C', label: 'test suite lane' }, { value: 'resvg', label: 'parity comparison lane' }, { value: 'SkiaSharp', label: 'portable renderer' }],
    media: [{ src: raw('Svg.Skia', 'master', 'images/Demo.png'), alt: 'Svg.Skia demo rendering multiple SVG files', caption: 'The desktop demo exercises real SVG documents through the same core renderer.' }],
    links: [{ label: 'Documentation', href: docs('Svg.Skia') }, { label: 'Samples', href: repo('Svg.Skia', '/tree/master/samples') }],
    related: ['effector', 'progpu', 'protext']
  },
  prodatagrid: {
    introduction: 'ProDataGrid is an expanded data-workbench family rather than a single table. Its packages cover the grid, formulas, charting, diagnostics, themes, data sources, and editing workflows while retaining a familiar Avalonia API.',
    audience: ['Business and engineering desktop applications', 'Large, editable data sets', 'Teams needing formulas, charts, and runtime diagnostics'],
    compatibility: [{ label: 'Avalonia', value: 'Supported', state: 'ready' }, { label: 'Virtualization', value: 'Rows + columns', state: 'ready' }, { label: 'Fluent / Simple', value: 'Themes', state: 'ready' }, { label: 'NativeAOT', value: 'Tracked', state: 'partial' }],
    proof: [{ value: '2-axis', label: 'virtualization' }, { value: 'Formula', label: 'calculation engine' }, { value: 'Diagnostics', label: 'built-in inspection' }],
    links: [{ label: 'Documentation', href: docs('ProDataGrid') }, { label: 'Samples', href: repo('ProDataGrid', '/tree/main/samples') }],
    related: ['treedatagrid', 'dock', 'protext']
  },
  treedatagrid: {
    introduction: 'TreeDataGrid combines hierarchical expansion with tabular columns and virtualized presentation. The model layer supports both flat and hierarchical sources, typed columns, sorting, and selection.',
    audience: ['File explorers and object browsers', 'Hierarchical business data', 'Apps that need tree semantics with table density'],
    compatibility: [{ label: 'Hierarchical source', value: 'Supported', state: 'ready' }, { label: 'Flat source', value: 'Supported', state: 'ready' }, { label: 'Virtualization', value: 'Supported', state: 'ready' }, { label: 'XAML columns', value: 'Supported', state: 'ready' }],
    proof: [{ value: '2 modes', label: 'flat and hierarchical' }, { value: 'Virtualized', label: 'data presentation' }, { value: 'Typed', label: 'column models' }],
    media: [{ src: raw('TreeDataGrid', 'master', 'site/images/files.png'), alt: 'TreeDataGrid file explorer sample', caption: 'Hierarchical rows and table columns share one virtualized surface.' }, { src: raw('TreeDataGrid', 'master', 'site/images/countries.png'), alt: 'TreeDataGrid countries sample', caption: 'The same control also operates as a flat tabular grid.' }],
    links: [{ label: 'Documentation', href: docs('TreeDataGrid') }, { label: 'Samples', href: repo('TreeDataGrid', '/tree/master/samples') }],
    related: ['prodatagrid', 'dock', 'nodeeditor']
  },
  core2d: {
    media: [{ src: 'https://user-images.githubusercontent.com/2297442/131457859-94a2c5c3-f85c-4ac0-a7b0-ec07e86595b7.png', alt: 'Core2D diagram editor interface', caption: 'Core2D’s data-driven editor hosts technical diagrams across multiple front ends.' }],
    related: ['procad', 'nodeeditor', 'panandzoom']
  },
  proedit: {
    introduction: 'ProEdit is a package-oriented document platform rather than a single editor. Applications can adopt the document model, layout and Skia renderer, FlowDocument and rich-text controls, Word-style shell, reporting stack, printing services, format converters, collaboration engine, or automation integrations independently.',
    audience: ['Teams building word processors, document viewers, or reporting products', 'Desktop and embedded applications that need reusable document infrastructure', 'Avalonia, Uno Platform, and .NET MAUI developers sharing one document engine'],
    architecture: [
      { label: 'Document', detail: 'Sections, paragraphs, runs, tables, lists, styles, shapes, fields, comments, citations, metadata, and revisions form the portable model.' },
      { label: 'Layout + render', detail: 'Pagination, line breaking, tables, floating objects, shapes, and proofing decorations feed renderer-neutral records and Skia output.' },
      { label: 'Workflows', detail: 'Editing, reporting, printing, conversion, collaboration, proofing, macros, and MCP compose around the same document core.' },
      { label: 'Controls', detail: 'Avalonia, Uno Platform, and .NET MAUI packages host shared read-only and editable document surfaces.' }
    ],
    compatibility: [
      { label: '.NET', value: '10.0', state: 'ready' },
      { label: 'Avalonia', value: 'Editor, viewer, reporting, print UI', state: 'ready' },
      { label: 'Uno Platform', value: 'Shared Skia controls + compatibility', state: 'ready' },
      { label: '.NET MAUI', value: 'Shared control package', state: 'partial' }
    ],
    proof: [
      { value: '8+ formats', label: 'document import and export' },
      { value: '3 UI stacks', label: 'Avalonia, Uno, and MAUI' },
      { value: 'Tests + benchmarks', label: 'headless UI and layout lanes' }
    ],
    media: [
      { src: raw('ProEdit', 'main', 'build/Assets/Icon.png'), alt: 'ProEdit document platform mark', caption: 'ProEdit brings the document model, rendering, editing, reporting, and collaboration layers under one package-oriented identity.' },
      { src: 'https://opengraph.githubassets.com/portfolio-v3/wieslawsoltes/ProEdit', alt: 'ProEdit GitHub repository preview', caption: 'The active repository contains the complete source, cross-framework samples, tests, benchmarks, documentation, and release automation.' }
    ],
    links: [
      { label: 'Documentation', href: docs('ProEdit') },
      { label: 'Samples', href: repo('ProEdit', '/tree/main/samples') },
      { label: 'Architecture', href: repo('ProEdit', '/blob/main/docfx/articles/architecture.md') },
      { label: 'Benchmarks', href: repo('ProEdit', '/tree/main/benchmarks') }
    ],
    limitations: 'ProEdit is broad and actively evolving. Adopt the smallest package set that matches the workflow, pin package versions, and use the current samples as the integration contract for advanced editing, conversion, and collaboration features.',
    related: ['protext', 'prodatagrid', 'protranslate']
  },
  protranslate: {
    media: [{ src: 'https://github.com/user-attachments/assets/ef612d49-4a2f-4001-a6c0-544197f9fd65', alt: 'ProTranslate localization workflow', caption: 'Generated keys and live culture switching connect resources to XAML applications.' }],
    compatibility: [{ label: 'Avalonia', value: 'Supported', state: 'ready' }, { label: 'WPF / WinUI', value: 'Supported', state: 'ready' }, { label: 'Uno / MAUI', value: 'Supported', state: 'ready' }, { label: 'Resource formats', value: 'XLIFF, PO, RESX, ARB+', state: 'ready' }],
    related: ['xaml-behaviors', 'nxui', 'librewpf']
  },
  panandzoom: {
    introduction: 'PanAndZoom concentrates the geometry and input details of an infinite-canvas viewport into one control. Pointer-centered zoom, constraints, animation, and programmable navigation remain independent from the content inside.',
    audience: ['Diagram and node editor authors', 'Map, image, and document viewers', 'Any Avalonia app with a large spatial surface'],
    compatibility: [{ label: 'Avalonia', value: 'Supported', state: 'ready' }, { label: 'Pointer / wheel', value: 'Supported', state: 'ready' }, { label: 'Animated zoom', value: 'Supported', state: 'ready' }, { label: 'Touch gestures', value: 'Platform dependent', state: 'partial' }],
    proof: [{ value: 'Zoom-to-point', label: 'cursor-stable navigation' }, { value: 'Constraints', label: 'bounded viewport' }, { value: 'Animations', label: 'programmable transitions' }],
    media: [{ src: raw('PanAndZoom', 'master', 'images/PanAndZoom.png'), alt: 'PanAndZoom sample application', caption: 'The sample exposes zoom, pan, constraints, and viewport behavior.' }],
    links: [{ label: 'Documentation', href: docs('PanAndZoom') }, { label: 'Samples', href: repo('PanAndZoom', '/tree/master/samples') }],
    related: ['nodeeditor', 'core2d', 'procad']
  },
  nodeeditor: {
    introduction: 'NodeEditor provides the interaction grammar of a graph editor—selection, ports, connectors, dragging, and templating—while keeping domain logic in portable models and view models.',
    audience: ['Visual programming and workflow tools', 'Signal, shader, and logic graph editors', 'Avalonia apps needing a custom node canvas'],
    architecture: [{ label: 'Model', detail: 'Portable nodes, sockets, connections, and graph state.' }, { label: 'View model', detail: 'MVVM and ReactiveUI adapters expose graph commands and selection.' }, { label: 'Control', detail: 'Avalonia presenters route pointer interaction and connection drawing.' }, { label: 'Template', detail: 'XAML defines each node, port, connector, and editor surface.' }],
    compatibility: [{ label: 'Avalonia desktop', value: 'Supported', state: 'ready' }, { label: 'Avalonia browser', value: 'Sample', state: 'ready' }, { label: 'MVVM / ReactiveUI', value: 'Integrations', state: 'ready' }, { label: 'Graph logic', value: 'Optional packages', state: 'ready' }],
    proof: [{ value: 'Templated', label: 'visual graph surface' }, { value: 'Portable', label: 'model layer' }, { value: 'LogicLab', label: 'complete sample' }],
    media: [{ src: 'https://user-images.githubusercontent.com/2297442/201498448-cd76b29f-ea87-4f0b-9dd5-071c9e49b7c2.png', alt: 'NodeEditor sample showing a connected node graph', caption: 'Nodes and connectors are fully templatable while interaction stays reusable.' }],
    links: [{ label: 'Samples', href: repo('NodeEditor', '/tree/main/samples') }],
    related: ['panandzoom', 'xaml-behaviors', 'core2d']
  },
  nxui: {
    introduction: 'NXUI maps Avalonia controls, properties, bindings, and application composition into fluent C#. It is especially useful when code generation, functional composition, or one-language workflows matter more than XAML tooling.',
    audience: ['Developers who prefer code-first UI', 'Generated and highly compositional interfaces', 'Teams experimenting with functional Avalonia patterns'],
    compatibility: [{ label: 'Avalonia', value: 'Supported', state: 'ready' }, { label: 'Desktop host', value: 'Supported', state: 'ready' }, { label: 'Hot reload', value: 'Included', state: 'ready' }, { label: 'XAML designer', value: 'Not applicable', state: 'planned' }],
    proof: [{ value: '100% C#', label: 'UI composition' }, { value: 'Hot reload', label: 'iteration loop' }, { value: 'Fluent', label: 'control builders' }],
    media: [{ src: 'https://github.com/user-attachments/assets/33f7f915-13a2-4c45-b9e3-ecd5dfdfd353', alt: 'NXUI desktop application built in C#', caption: 'NXUI expresses the complete Avalonia visual tree in composable C#.' }],
    related: ['xaml-behaviors', 'avalonia-development-plugin', 'codexgui']
  },
  colorpicker: {
    introduction: 'ColorPicker packages the dense interaction required by design tools: direct spectrum selection, channels, alpha, palettes, previews, and reusable styles that integrate cleanly with Avalonia themes.',
    audience: ['Theme and design-tool authors', 'Image, vector, and diagram editors', 'Applications with rich color input'],
    compatibility: [{ label: 'Avalonia', value: 'Supported', state: 'ready' }, { label: 'Alpha', value: 'Supported', state: 'ready' }, { label: 'Palettes', value: 'Supported', state: 'ready' }, { label: 'Theme editor', value: 'Included', state: 'ready' }],
    proof: [{ value: 'Spectrum', label: 'direct color selection' }, { value: 'RGBA', label: 'component editing' }, { value: 'Theme-ready', label: 'packaged styles' }],
    media: [{ src: raw('ColorPicker', 'master', 'images/ColorPicker.png'), alt: 'Avalonia ColorPicker control', caption: 'The primary control combines spectrum, channels, alpha, and preview.' }, { src: raw('ColorPicker', 'master', 'images/ThemeEditor.png'), alt: 'Theme editor using ColorPicker', caption: 'The controls compose into larger theme-authoring workflows.' }],
    related: ['effector', 'svg-skia', 'core2d']
  },
  cdp: {
    introduction: 'CDP models a native visual tree as a browser-like document and exposes it through the standard Chrome DevTools Protocol. Existing inspection and automation clients can then query, highlight, edit, input, capture, and script a .NET UI.',
    audience: ['UI framework and tooling authors', 'Automated testing and agent workflows', 'Teams needing live native UI diagnostics'],
    architecture: [{ label: 'Client', detail: 'Chrome DevTools, Playwright, Puppeteer, or any CDP-compatible client.' }, { label: 'Transport', detail: 'HTTP discovery and WebSocket sessions use the standard protocol shape.' }, { label: 'Server', detail: 'CdpServer and CdpSession route commands, events, targets, and lifecycle.' }, { label: 'Adapter', detail: 'Framework packages map native visual trees, styling, input, and runtime state to domains.' }],
    compatibility: [{ label: 'Avalonia', value: 'Primary adapter', state: 'ready' }, { label: 'WPF / WinUI / Uno', value: 'Adapters', state: 'partial' }, { label: 'Playwright', value: 'Compatible', state: 'ready' }, { label: 'Chrome DevTools', value: 'Compatible', state: 'ready' }],
    proof: [{ value: '10+ domains', label: 'inspection surface' }, { value: 'WebSocket', label: 'standard transport' }, { value: '3 clients', label: 'DevTools, Playwright, Puppeteer' }],
    media: [{ src: 'https://github.com/user-attachments/assets/3b9d860d-fc57-421c-b947-742c0f9f70e9', alt: 'Chrome DevTools inspecting an Avalonia application through CDP', caption: 'A native Avalonia visual tree exposed inside familiar Chrome DevTools.' }],
    limitations: 'CDP is a preview and domain coverage varies by framework adapter. Treat automation compatibility as active work and pin prerelease versions.',
    related: ['avalonia-development-plugin', 'codexgui', 'xaml-visual-editor']
  },
  nativewebview: {
    introduction: 'NativeWebView normalizes browser hosting without normalizing away platform capabilities. A common control selects a registered backend, while platform packages bind WebView2, WKWebView, WebKitGTK, mobile views, or browser hosting.',
    audience: ['Avalonia apps embedding trusted web content', 'OAuth and system-browser authentication flows', 'Hybrid desktop tools that need low distribution weight'],
    architecture: [{ label: 'Control', detail: 'The Avalonia surface owns lifecycle, navigation, events, and render mode.' }, { label: 'Core', detail: 'Portable contracts cover backends, messaging, scripts, permissions, and navigation.' }, { label: 'Platform', detail: 'Each package binds the native browser engine and capability set.' }, { label: 'Modes', detail: 'Embedded, GPU-surface, and offscreen presentation fit different composition needs.' }],
    compatibility: [{ label: 'Windows / macOS / Linux', value: 'Control + dialog + auth', state: 'ready' }, { label: 'iOS / Android', value: 'Control + auth', state: 'partial' }, { label: 'Browser', value: 'Control + auth', state: 'partial' }, { label: 'Dialog on mobile/web', value: 'Unsupported', state: 'planned' }],
    proof: [{ value: '6 targets', label: 'platform directions' }, { value: '3 modes', label: 'presentation choices' }, { value: 'Native engine', label: 'no bundled Chromium' }],
    links: [{ label: 'Documentation', href: docs('NativeWebView') }, { label: 'Samples', href: repo('NativeWebView', '/tree/main/samples') }],
    limitations: 'Capabilities differ by operating system and render mode. Check the live support matrix before relying on proxy, dialog, or offscreen behavior.',
    related: ['avalonia-silknet', 'cdp', 'xaml-playground']
  },
  'avalonia-development-plugin': {
    introduction: 'The plugin breaks Avalonia development into focused skills, each with routing rules and primary-source references. It covers everyday implementation as well as rendering, accessibility, performance, migration, and framework-porting work.',
    audience: ['Codex users building Avalonia applications', 'Teams standardizing framework guidance', 'Maintainers performing source-backed migrations and reviews'],
    architecture: [{ label: 'Plugin', detail: 'A manifest makes the capability discoverable by Codex.' }, { label: 'Router', detail: 'Skill descriptions send a task to the narrowest relevant workflow.' }, { label: 'Skill', detail: 'Each workflow defines required references, constraints, and verification.' }, { label: 'Sources', detail: 'Pinned documentation and repository evidence ground implementation advice.' }],
    compatibility: [{ label: 'Avalonia 11.3.12', value: 'Pinned default', state: 'ready' }, { label: 'Avalonia 12', value: 'Migration lane', state: 'partial' }, { label: 'Repo-local skills', value: 'Supported', state: 'ready' }, { label: 'Codex plugin', value: 'Supported', state: 'ready' }],
    proof: [{ value: '20+ skills', label: 'focused workflows' }, { value: 'Primary sources', label: 'evidence model' }, { value: 'Migration lane', label: 'Avalonia 12' }],
    media: [{ src: raw('development-plugin-for-avalonia', 'main', 'assets/development-plugin-for-avalonia-logo.png'), alt: 'Development plugin for Avalonia logo', caption: 'A skill library built to make Avalonia work repeatable and source-grounded.' }],
    links: [{ label: 'Skill catalog', href: repo('development-plugin-for-avalonia', '/tree/main/skills') }],
    related: ['cdp', 'xaml-visual-editor', 'codexgui']
  },
  procad: {
    introduction: 'ProCad divides CAD concerns into document, IO, rendering, editing, scripting, collaboration, and UI packages. That keeps file formats and geometry independent from any particular desktop or browser host.',
    audience: ['CAD viewers and vertical engineering tools', 'DWG/DXF inspection and automation', 'Teams needing an extensible .NET CAD core'],
    architecture: [{ label: 'Core + IO', detail: 'Document entities and DWG/DXF persistence form the portable base.' }, { label: 'Rendering', detail: 'Renderer-neutral preparation feeds Skia and UI-specific surfaces.' }, { label: 'Editing', detail: 'Commands, tools, snapping, and selection implement authoring workflows.' }, { label: 'Apps', detail: 'Avalonia, browser, Uno, and MAUI hosts compose the reusable packages.' }],
    compatibility: [{ label: '.NET', value: '10', state: 'ready' }, { label: 'DWG / DXF', value: 'Active development', state: 'partial' }, { label: 'Avalonia / Browser', value: 'Hosts', state: 'partial' }, { label: 'Uno / MAUI', value: 'Control packages', state: 'partial' }],
    proof: [{ value: '10+ packages', label: 'modular surface' }, { value: 'DWG + DXF', label: 'format direction' }, { value: '4 UI hosts', label: 'cross-platform reach' }],
    media: [{ src: raw('ProCad', 'main', 'ProCad.Tests/Assets/Render/baseline_scene.png'), alt: 'ProCad rendered CAD baseline scene', caption: 'A deterministic render baseline from ProCad’s test assets.' }],
    links: [{ label: 'Documentation', href: docs('ProCad') }],
    limitations: 'ProCad is early-stage. Format coverage, editing commands, and package APIs are changing quickly; use current samples as the contract.',
    related: ['core2d', 'panandzoom', 'progpu']
  },
  codexgui: {
    introduction: 'CodexGui turns the Codex app-server protocol into a native cross-platform workflow. Its typed transport and modular Markdown stack stay reusable while the application adds thread navigation, approvals, rich output, terminal context, and plugin UI, with an Uno Platform direction alongside the current Avalonia host.',
    audience: ['Developers who want a native Codex client', 'App-server integration authors', 'Avalonia and Uno teams exploring extensible agent workspaces'],
    compatibility: [{ label: 'Avalonia desktop', value: 'Current host', state: 'ready' }, { label: 'Uno Platform', value: 'Platform direction', state: 'partial' }, { label: 'stdio / WebSocket', value: 'Supported', state: 'ready' }, { label: 'Protocol changes', value: 'Tracked', state: 'partial' }],
    proof: [{ value: '2 transports', label: 'stdio and WebSocket' }, { value: 'Typed client', label: 'app-server protocol' }, { value: '.NET tool', label: 'single-command install' }],
    links: [{ label: 'Documentation', href: docs('CodexGui') }],
    limitations: 'CodexGui follows an evolving app-server protocol and is under active development. Expect frequent updates and pin a known working version.',
    related: ['avalonia-development-plugin', 'cdp', 'xaml-visual-editor']
  },
  'devtools-uno': {
    introduction: 'DevToolsUno attaches to an Uno Application, Window, or FrameworkElement and opens a dedicated diagnostics shell inside the running app. It brings visual-tree inspection, binding analysis, resource and style exploration, event routes, assets, screenshots, and memory tracking into one keyboard-driven surface.',
    audience: ['Uno Platform application teams', 'Control and design-system authors', 'Developers diagnosing bindings, styles, events, or retained objects'],
    architecture: [{ label: 'Attach', detail: 'Extension methods connect diagnostics to an Application, Window, or root FrameworkElement.' }, { label: 'Observe', detail: 'Adapters capture logical and visual trees, properties, bindings, events, resources, and assets.' }, { label: 'Inspect', detail: 'A dedicated Uno diagnostics window provides filtering, pinning, source views, and pointer inspection.' }, { label: 'Act', detail: 'Configurable hotkeys select hovered controls, freeze popups, and capture screenshots.' }],
    compatibility: [{ label: '.NET', value: '9.0', state: 'ready' }, { label: 'Uno.WinUI', value: '6.5.x', state: 'ready' }, { label: 'Desktop targets', value: 'Primary', state: 'ready' }, { label: 'Screenshot saving', value: 'Pluggable', state: 'ready' }],
    proof: [{ value: '9 views', label: 'diagnostics surfaces' }, { value: 'F12', label: 'default launch gesture' }, { value: 'In app', label: 'no external inspector required' }],
    media: [{ src: 'https://github.com/user-attachments/assets/eb8ef241-79fb-4b1f-81f2-cdd3b0694b97', alt: 'DevToolsUno inspecting a running Uno Platform application', caption: 'The diagnostics shell inspects the live Uno tree, properties, bindings, resources, events, and memory.' }],
    links: [{ label: 'Sample', href: repo('DevToolsUno', '/tree/main/samples/DevToolsUno.Sample') }, { label: 'Repository', href: repo('DevToolsUno') }],
    related: ['codexgui', 'prodatagrid', 'cdp']
  },
  'xaml-playground': {
    introduction: 'XamlPlayground keeps source, runtime preview, and visual design synchronized. Run mode behaves like the real application; design mode adds structural hit testing, selection, movement, resizing, insertion, property editing, and XAML mutation.',
    audience: ['Avalonia developers learning or prototyping XAML', 'Tool authors embedding live XAML editing', 'Design-system teams testing controls and themes'],
    architecture: [{ label: 'Editor', detail: 'AvaloniaEdit provides source editing, diagnostics, selection, and optional minimap extensions.' }, { label: 'Runtime', detail: 'The preview loads XAML and preserves normal control interaction in run mode.' }, { label: 'Designer', detail: 'Visual hit testing, overlays, drag/resize, guides, and toolbox insertion operate in design mode.' }, { label: 'Synchronization', detail: 'Structural XAML paths keep source, preview, tree, and property selection aligned.' }],
    compatibility: [{ label: 'Avalonia desktop', value: 'Supported', state: 'ready' }, { label: 'Avalonia browser', value: 'Live site', state: 'ready' }, { label: 'Run / design modes', value: 'Explicit', state: 'ready' }, { label: 'Headless tests', value: 'Designer coverage', state: 'ready' }],
    proof: [{ value: '2 modes', label: 'runtime and WYSIWYG design' }, { value: '4-way sync', label: 'source, preview, tree, properties' }, { value: 'Headless', label: 'interaction screenshot coverage' }],
    media: [{ src: raw('XamlPlayground', 'main', 'src/XamlPlayground/Assets/Logo.png'), alt: 'XamlPlayground logo', caption: 'A complete XAML authoring and visual design workspace for Avalonia.' }],
    links: [{ label: 'Open playground', href: docs('XamlPlayground') }, { label: 'Repository', href: repo('XamlPlayground') }, { label: 'Headless tests', href: repo('XamlPlayground', '/search?q=headless&type=code') }],
    related: ['xaml-visual-editor', 'prodatagrid', 'avalonia-development-plugin']
  }
};

const categoryArchitecture: Record<Project['category'], ProjectDetail['architecture']> = {
  Graphics: [{ label: 'Input', detail: 'Portable data and framework resources enter through focused APIs.' }, { label: 'Preparation', detail: 'Geometry, text, images, or effects become renderer-ready operations.' }, { label: 'Rendering', detail: 'The backend records and submits deterministic drawing work.' }],
  Frameworks: [{ label: 'Application', detail: 'A familiar public programming model defines the app.' }, { label: 'Framework', detail: 'Managed services coordinate layout, input, resources, and lifecycle.' }, { label: 'Platform', detail: 'Portable adapters connect rendering and operating-system services.' }],
  Avalonia: [{ label: 'XAML / C#', detail: 'Applications compose reusable behavior through normal Avalonia APIs.' }, { label: 'Integration', detail: 'Focused packages connect to Avalonia properties, input, and rendering.' }, { label: 'Platform', detail: 'The implementation remains portable across Avalonia targets where supported.' }],
  Controls: [{ label: 'Model', detail: 'Application state stays in portable domain objects and view models.' }, { label: 'Control', detail: 'Avalonia controls expose focused properties, commands, and events.' }, { label: 'Theme', detail: 'Templates and styles make the surface adaptable to each application.' }],
  Tools: [{ label: 'Core', detail: 'Reusable models and services contain the domain behavior.' }, { label: 'Extensions', detail: 'Packages add integrations without coupling the core to one host.' }, { label: 'Application', detail: 'Samples and desktop hosts compose the complete workflow.' }],
  'Uno Platform': [{ label: 'Application', detail: 'WinUI-compatible XAML and C# compose the cross-platform application.' }, { label: 'Tooling', detail: 'Focused packages add diagnostics, protocol, and workspace capabilities.' }, { label: 'Targets', detail: 'Uno carries the experience across desktop, mobile, and WebAssembly.' }]
};

export function projectDetail(project: Project): ProjectDetail {
  const custom = overrides[project.slug] ?? {};
  const github = repo(project.repo);
  return {
    introduction: custom.introduction ?? `${project.name} is maintained as a focused part of a wider open-source .NET UI ecosystem. Its boundaries are designed so applications can adopt the useful layer without taking the entire stack.`,
    audience: custom.audience ?? [`Teams building ${project.category.toLowerCase()} software on .NET`, 'Developers who need reusable, inspectable infrastructure', 'Open-source contributors looking for practical framework work'],
    architecture: custom.architecture ?? categoryArchitecture[project.category],
    compatibility: custom.compatibility ?? [{ label: '.NET', value: 'Current SDK', state: 'ready' }, { label: project.category === 'Frameworks' ? 'XAML ecosystem' : 'Avalonia / cross-platform', value: project.status, state: project.status === 'Preview' ? 'partial' : 'ready' }, { label: 'Source', value: 'Open on GitHub', state: 'ready' }],
    proof: custom.proof ?? [{ value: project.status, label: 'project status' }, { value: `${project.packages.length}`, label: project.packages.length === 1 ? 'primary package' : 'composable packages' }, { value: 'Open source', label: 'issues and implementation' }],
    media: custom.media ?? [{ src: `https://opengraph.githubassets.com/portfolio-v2/wieslawsoltes/${project.repo}`, alt: `${project.name} GitHub repository preview`, caption: `The ${project.name} repository contains the current source, samples, releases, and issue history.` }],
    links: custom.links ?? [{ label: 'Repository', href: github }, { label: 'Issues', href: `${github}/issues` }, { label: 'Releases', href: `${github}/releases` }],
    limitations: custom.limitations,
    related: custom.related ?? projectsForCategory(project)
  };
}

function projectsForCategory(project: Project): string[] {
  const byCategory: Record<Project['category'], string[]> = {
    Graphics: ['progpu', 'svg-skia', 'pretext'],
    Frameworks: ['librewpf', 'librewinforms', 'nxui'],
    Avalonia: ['avalonia-progpu', 'avalonia-silknet', 'xaml-behaviors'],
    Controls: ['dock', 'prodatagrid', 'treedatagrid'],
    Tools: ['xaml-visual-editor', 'cdp', 'avalonia-development-plugin'],
    'Uno Platform': ['devtools-uno', 'codexgui', 'protranslate']
  };
  return byCategory[project.category].filter((slug) => slug !== project.slug).slice(0, 3);
}
