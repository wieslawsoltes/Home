---
order: 4
name: Avalonia Silk.NET
eyebrow: Platform backend
category: Avalonia
repo: Avalonia
branch: feature/progpu
description: Cross-platform desktop windowing, input, surfaces, and WebGPU integration for Avalonia applications through Silk.NET.
statement: A lean platform layer between Avalonia and the desktop.
accent: "#ff9d78"
featured: true
status: Preview
packages:
  - name: ProGPU.Avalonia.SilkNet
    note: Silk.NET windowing and platform services for Avalonia.
install: dotnet add package ProGPU.Avalonia.SilkNet --prerelease
usageLanguage: csharp
usage: |-
  AppBuilder.Configure<App>()
      .UseSilkNet()
      .UseProGpu();
highlights:
  - Silk.NET windowing
  - Cross-platform input
  - WebGPU surfaces
  - Renderer-independent host design
tier: Flagship
audience:
  - Avalonia platform backend authors
  - Silk.NET and WebGPU integrators
  - Teams investigating portable native windowing
architecture:
  - label: XAML / C#
    detail: Applications compose reusable behavior through normal Avalonia APIs.
  - label: Integration
    detail: Focused packages connect to Avalonia properties, input, and rendering.
  - label: Platform
    detail: The implementation remains portable across Avalonia targets where supported.
compatibility:
  - label: Windowing
    value: Preview
    state: partial
  - label: Input
    value: Preview
    state: partial
  - label: WebGPU surfaces
    value: Integrated
    state: ready
  - label: Renderer choice
    value: Decoupled
    state: ready
proof:
  - value: Silk.NET
    label: native platform layer
  - value: Cross-platform
    label: host direction
  - value: Decoupled
    label: renderer boundary
media:
  - src: https://opengraph.githubassets.com/portfolio-v2/wieslawsoltes/Avalonia
    alt: Avalonia Silk.NET GitHub repository preview
    caption: The Avalonia Silk.NET repository contains the current source, samples, releases, and issue history.
links:
  - label: Repository
    href: https://github.com/wieslawsoltes/Avalonia
  - label: Issues
    href: https://github.com/wieslawsoltes/Avalonia/issues
  - label: Releases
    href: https://github.com/wieslawsoltes/Avalonia/releases
limitations: The backend is evolving alongside the ProGPU Avalonia branch and does not yet cover every production platform service.
related:
  - avalonia-progpu
  - progpu
  - nativewebview
---

The Silk.NET backend supplies windows, input, surfaces, and platform glue independently from the renderer. Keeping that seam explicit makes it possible to test Avalonia with an alternative desktop host.
