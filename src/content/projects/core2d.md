---
order: 11
name: Core2D
eyebrow: Diagram editor engine
category: Tools
repo: Core2D
description: A multi-platform, data-driven 2D diagram editor with a portable model, rendering backends, and extensible tooling.
statement: A complete foundation for technical drawing and diagramming.
accent: "#ff8177"
status: Maintained
packages:
  - name: Core2D
    note: Core diagram model and editor primitives.
install: |-
  git clone https://github.com/wieslawsoltes/Core2D.git
  cd Core2D && dotnet build
usageLanguage: csharp
usage: |-
  var project = new Project();
  // Compose shapes, layers, and editor tools against the portable model.
highlights:
  - Data-driven diagrams
  - Multiple rendering backends
  - Extensible editor tools
  - Cross-platform architecture
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
    value: Maintained
    state: ready
  - label: Source
    value: Open on GitHub
    state: ready
proof:
  - value: Maintained
    label: project status
  - value: "1"
    label: primary package
  - value: Open source
    label: issues and implementation
media:
  - src: https://user-images.githubusercontent.com/2297442/131457859-94a2c5c3-f85c-4ac0-a7b0-ec07e86595b7.png
    alt: Core2D diagram editor interface
    caption: Core2D’s data-driven editor hosts technical diagrams across multiple front ends.
links:
  - label: Repository
    href: https://github.com/wieslawsoltes/Core2D
  - label: Issues
    href: https://github.com/wieslawsoltes/Core2D/issues
  - label: Releases
    href: https://github.com/wieslawsoltes/Core2D/releases
related:
  - procad
  - nodeeditor
  - panandzoom
---

Core2D is maintained as a focused part of a wider open-source .NET UI ecosystem. Its boundaries are designed so applications can adopt the useful layer without taking the entire stack.
