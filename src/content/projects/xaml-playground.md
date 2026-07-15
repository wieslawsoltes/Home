---
order: 30
name: XamlPlayground
eyebrow: Interactive XAML design
category: Tools
repo: XamlPlayground
description: An interactive Avalonia XAML editor, live previewer, and WYSIWYG designer with synchronized structure, properties, toolbox, diagnostics, and shareable gists.
statement: Write, run, and visually reshape Avalonia XAML in one immediate workspace.
accent: "#a98cff"
featured: true
tier: Flagship
status: Active
packages:
  - name: XamlPlayground
    note: Core Avalonia XAML editor, previewer, and visual designer.
  - name: XamlPlayground.AvaloniaEdit.Minimap
    note: Minimap and inline editor extension controls for AvaloniaEdit.
install: dotnet add package XamlPlayground
usageLanguage: xml
usage: |-
  <playground:XamlEditor
      Xaml="{Binding Document}"
      IsDesignMode="True" />
highlights:
  - Live XAML preview
  - WYSIWYG canvas editing
  - Toolbox, structure, and properties
  - Headless designer coverage
audience:
  - Avalonia developers learning or prototyping XAML
  - Tool authors embedding live XAML editing
  - Design-system teams testing controls and themes
architecture:
  - label: Editor
    detail: AvaloniaEdit provides source editing, diagnostics, selection, and optional minimap extensions.
  - label: Runtime
    detail: The preview loads XAML and preserves normal control interaction in run mode.
  - label: Designer
    detail: Visual hit testing, overlays, drag/resize, guides, and toolbox insertion operate in design mode.
  - label: Synchronization
    detail: Structural XAML paths keep source, preview, tree, and property selection aligned.
compatibility:
  - label: Avalonia desktop
    value: Supported
    state: ready
  - label: Avalonia browser
    value: Live site
    state: ready
  - label: Run / design modes
    value: Explicit
    state: ready
  - label: Headless tests
    value: Designer coverage
    state: ready
proof:
  - value: 2 modes
    label: runtime and WYSIWYG design
  - value: 4-way sync
    label: source, preview, tree, properties
  - value: Headless
    label: interaction screenshot coverage
media:
  - src: https://raw.githubusercontent.com/wieslawsoltes/XamlPlayground/main/src/XamlPlayground/Assets/Logo.png
    alt: XamlPlayground logo
    caption: A complete XAML authoring and visual design workspace for Avalonia.
links:
  - label: Open playground
    href: https://wieslawsoltes.github.io/XamlPlayground/
  - label: Repository
    href: https://github.com/wieslawsoltes/XamlPlayground
  - label: Headless tests
    href: https://github.com/wieslawsoltes/XamlPlayground/search?q=headless&type=code
related:
  - xaml-visual-editor
  - prodatagrid
  - avalonia-development-plugin
---

XamlPlayground keeps source, runtime preview, and visual design synchronized. Run mode behaves like the real application; design mode adds structural hit testing, selection, movement, resizing, insertion, property editing, and XAML mutation.
