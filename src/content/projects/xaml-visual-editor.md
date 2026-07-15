---
order: 18
name: XamlVisualEditor
eyebrow: Live XAML tooling
category: Tools
repo: XamlVisualEditor
description: An extensible Avalonia XAML visual editor with a live designer, code editor, language services, debugging, and .NET extensions.
statement: Design, inspect, and extend XAML in one living workspace.
accent: "#a894ff"
status: Active
packages:
  - name: XamlVisualEditor
    note: Build and run the editor from source.
install: |-
  git clone https://github.com/wieslawsoltes/XamlVisualEditor.git
  cd XamlVisualEditor && dotnet run
usageLanguage: bash
usage: |-
  # Open a XAML document, edit markup, and inspect the live preview.
  dotnet run
highlights:
  - Live visual designer
  - Code editor
  - Language services
  - Extensible .NET tooling
tier: Maintained
audience:
  - Teams building tools software on .NET
  - Developers who need reusable, inspectable infrastructure
  - Open-source contributors looking for practical framework work
architecture:
  - label: Core
    detail: Reusable models and services contain the domain behavior.
  - label: Extensions
    detail: Packages add integrations without coupling the core to one host.
  - label: Application
    detail: Samples and desktop hosts compose the complete workflow.
compatibility:
  - label: .NET
    value: Current SDK
    state: ready
  - label: Avalonia / cross-platform
    value: Active
    state: ready
  - label: Source
    value: Open on GitHub
    state: ready
proof:
  - value: Active
    label: project status
  - value: "1"
    label: primary package
  - value: Open source
    label: issues and implementation
media:
  - src: https://opengraph.githubassets.com/portfolio-v2/wieslawsoltes/XamlVisualEditor
    alt: XamlVisualEditor GitHub repository preview
    caption: The XamlVisualEditor repository contains the current source, samples, releases, and issue history.
links:
  - label: Repository
    href: https://github.com/wieslawsoltes/XamlVisualEditor
  - label: Issues
    href: https://github.com/wieslawsoltes/XamlVisualEditor/issues
  - label: Releases
    href: https://github.com/wieslawsoltes/XamlVisualEditor/releases
related:
  - cdp
  - avalonia-development-plugin
---

XamlVisualEditor is maintained as a focused part of a wider open-source .NET UI ecosystem. Its boundaries are designed so applications can adopt the useful layer without taking the entire stack.
