---
order: 17
name: Effector
eyebrow: Custom visual effects
category: Graphics
repo: Effector
description: Extensible Skia-backed custom effects for Avalonia, built for reusable image and control processing pipelines.
statement: A focused effects layer for expressive Avalonia rendering.
accent: "#ff759f"
status: Active
packages:
  - name: Effector
    note: Effects primitives and Avalonia integration.
install: dotnet add package Effector
usageLanguage: csharp
usage: |-
  // Attach an Effector pipeline to an Avalonia visual.
  // The repository samples cover custom Skia-backed effects.
highlights:
  - Skia-backed effects
  - Composable pipelines
  - Avalonia integration
  - Extensible effect model
tier: Maintained
audience:
  - Teams building graphics software on .NET
  - Developers who need reusable, inspectable infrastructure
  - Open-source contributors looking for practical framework work
architecture:
  - label: Input
    detail: Portable data and framework resources enter through focused APIs.
  - label: Preparation
    detail: Geometry, text, images, or effects become renderer-ready operations.
  - label: Rendering
    detail: The backend records and submits deterministic drawing work.
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
  - src: https://opengraph.githubassets.com/portfolio-v2/wieslawsoltes/Effector
    alt: Effector GitHub repository preview
    caption: The Effector repository contains the current source, samples, releases, and issue history.
links:
  - label: Repository
    href: https://github.com/wieslawsoltes/Effector
  - label: Issues
    href: https://github.com/wieslawsoltes/Effector/issues
  - label: Releases
    href: https://github.com/wieslawsoltes/Effector/releases
related:
  - progpu
  - svg-skia
  - pretext
---

Effector is maintained as a focused part of a wider open-source .NET UI ecosystem. Its boundaries are designed so applications can adopt the useful layer without taking the entire stack.
