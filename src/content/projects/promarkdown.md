---
order: 45
name: ProMarkdown
eyebrow: Native Markdown workbench
category: Controls
repo: ProMarkdown
description: Reusable Avalonia Markdown rendering and editing libraries with source-aware selection, hit testing, URI handling, and focused plugins for diagrams, math, syntax, and extended block formats.
statement: Compose native Markdown reading and editing from a focused core and optional extensions.
accent: "#d18cff"
tier: Maintained
status: Active
packages:
  - name: ProMarkdown
    note: Core parsing, rendering, editing, layout, selection, and theme services.
  - name: ProMarkdown.Plugin.Mermaid
    note: Mermaid diagram rendering.
  - name: ProMarkdown.Plugin.Math
    note: Inline and block math support.
  - name: ProMarkdown.Plugin.TextMate
    note: TextMate-backed highlighting and editor integration.
  - name: ProMarkdown.Plugin.SyntaxHighlighting
    note: Built-in code-block syntax highlighting.
install: |-
  dotnet add package ProMarkdown
  dotnet add package ProMarkdown.Plugin.Mermaid
usageLanguage: xml
usage: |-
  <markdown:MarkdownView
      Markdown="{Binding Document}"
      EnableSelection="True" />
highlights:
  - Native Avalonia rendering and editing
  - Source-aware selection and hit testing
  - Mermaid, math, and syntax plugins
  - Alerts, containers, definitions, figures, and footers
audience:
  - Avalonia apps displaying rich Markdown documents
  - Editor and agent-client authors needing native selection and navigation
  - Products that want an extensible Markdown stack without a browser surface
architecture:
  - label: Parse
    detail: Markdig produces a source-aware document model for the core and registered extensions.
  - label: Layout
    detail: Native measurement and theme services resolve blocks, inlines, selection, and hit targets.
  - label: Edit
    detail: Source positions connect rendered content to caret, selection, and document updates.
  - label: Extend
    detail: Focused plugins add syntax, TextMate, Mermaid, math, alerts, containers, figures, and metadata blocks.
compatibility:
  - label: .NET
    value: "10.0"
    state: ready
  - label: Avalonia
    value: Native controls
    state: ready
  - label: Headless
    value: Rendering tests
    state: ready
  - label: Plugin set
    value: Optional packages
    state: ready
proof:
  - value: "10"
    label: published package lanes
  - value: "9"
    label: optional plugin packages
  - value: Headless
    label: render and Mermaid coverage
media:
  - src: https://opengraph.githubassets.com/portfolio-2026/wieslawsoltes/ProMarkdown
    width: 1200
    height: 600
    alt: ProMarkdown GitHub repository preview
    caption: ProMarkdown keeps its native renderer, editor, plugins, sample workbench, tests, and documentation in one package-oriented repository.
links:
  - label: Documentation
    href: https://wieslawsoltes.github.io/ProMarkdown/
  - label: Sample application
    href: https://github.com/wieslawsoltes/ProMarkdown/tree/main/src/ProMarkdown.Sample
limitations: ProMarkdown targets native Avalonia document workflows rather than browser-perfect HTML/CSS layout. Add only the plugin packages a product needs and validate advanced extension behavior against the current sample.
related:
  - codexgui
  - protext
  - cdp
---

ProMarkdown provides a native document surface rather than a WebView wrapper. The core owns source-aware layout, editing, selection, navigation, and themes; optional packages add richer Markdown dialects without forcing every application to ship the entire extension set.
