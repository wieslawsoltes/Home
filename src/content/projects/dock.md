---
order: 5
name: Dock
eyebrow: Docking workspace system
category: Controls
repo: Dock
description: A complete docking layout system for Avalonia with floating windows, serialization, theming, and multiple MVVM integrations.
statement: Composable workspaces for serious desktop applications.
accent: "#7dc7ff"
featured: true
status: Active
packages:
  - name: Dock.Avalonia
    note: Avalonia controls and docking host.
  - name: Dock.Model.Mvvm
    note: Framework-neutral MVVM model implementation.
  - name: Dock.Avalonia.Themes.Fluent
    note: Fluent theme for Dock controls.
install: |-
  dotnet add package Dock.Avalonia
  dotnet add package Dock.Model.Mvvm
  dotnet add package Dock.Avalonia.Themes.Fluent
usageLanguage: xml
usage: |-
  <dock:DockControl Layout="{Binding Layout}"
                    Factory="{Binding Factory}" />
highlights:
  - Documents and tool panes
  - Floating windows
  - JSON, XML, YAML, and Protobuf layouts
  - MVVM, ReactiveUI, and Prism
tier: Flagship
audience:
  - IDE and engineering-tool authors
  - Desktop apps with document/tool workspaces
  - MVVM teams needing serializable layouts
architecture:
  - label: Model
    detail: Framework-neutral docks, documents, tools, factories, and commands.
  - label: View
    detail: Avalonia controls, presenters, drag indicators, and floating windows.
  - label: Theme
    detail: Fluent, Simple, and community styling packages.
  - label: Persistence
    detail: JSON, XML, YAML, and Protobuf layout serialization.
compatibility:
  - label: Avalonia
    value: Supported
    state: ready
  - label: MVVM
    value: Supported
    state: ready
  - label: ReactiveUI / Prism
    value: Integrations
    state: ready
  - label: AOT
    value: Model dependent
    state: partial
proof:
  - value: 7 models
    label: integration choices
  - value: 4 formats
    label: layout serialization
  - value: Floating
    label: native tool windows
media:
  - src: https://raw.githubusercontent.com/wieslawsoltes/Dock/master/images/Dock.png
    alt: Dock sample application with documents and tool panes
    caption: A complete Dock workspace with documents, tools, tabs, and split regions.
  - src: https://raw.githubusercontent.com/wieslawsoltes/Dock/master/images/GUI.png
    alt: Dock GUI sample
    caption: Workspace composition is model-driven and themeable.
links:
  - label: Documentation
    href: https://wieslawsoltes.github.io/Dock/
  - label: Samples
    href: https://github.com/wieslawsoltes/Dock/tree/master/samples
related:
  - xaml-behaviors
  - prodatagrid
  - xaml-visual-editor
---

Dock separates workspace models from Avalonia presentation. Factories create document and tool layouts, themes render them, and serializers preserve them across sessions and application architectures.
