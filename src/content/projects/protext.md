---
order: 14
name: ProText
eyebrow: Text controls
category: Controls
repo: ProText
description: High-performance text controls for Avalonia, powered by the Pretext layout engine and Skia rendering.
statement: Text surfaces designed for speed, scale, and rich layout.
accent: "#ffd56b"
status: Active
packages:
  - name: ProText
    note: Avalonia text controls and rendering integration.
install: dotnet add package ProText
usageLanguage: xml
usage: |-
  <pro:ProTextBlock Text="{Binding DocumentText}"
                    TextWrapping="Wrap" />
highlights:
  - High-performance layout
  - Avalonia integration
  - Skia rendering
  - Pretext-powered line breaking
tier: Maintained
audience:
  - Teams building controls software on .NET
  - Developers who need reusable, inspectable infrastructure
  - Open-source contributors looking for practical framework work
architecture:
  - label: Model
    detail: Application state stays in portable domain objects and view models.
  - label: Control
    detail: Avalonia controls expose focused properties, commands, and events.
  - label: Theme
    detail: Templates and styles make the surface adaptable to each application.
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
  - src: https://opengraph.githubassets.com/portfolio-v2/wieslawsoltes/ProText
    alt: ProText GitHub repository preview
    caption: The ProText repository contains the current source, samples, releases, and issue history.
links:
  - label: Repository
    href: https://github.com/wieslawsoltes/ProText
  - label: Issues
    href: https://github.com/wieslawsoltes/ProText/issues
  - label: Releases
    href: https://github.com/wieslawsoltes/ProText/releases
related:
  - dock
  - prodatagrid
  - treedatagrid
---

ProText is maintained as a focused part of a wider open-source .NET UI ecosystem. Its boundaries are designed so applications can adopt the useful layer without taking the entire stack.
