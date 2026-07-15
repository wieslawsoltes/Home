---
order: 3
name: Avalonia ProGPU
eyebrow: Rendering backend
category: Avalonia
repo: Avalonia
branch: feature/progpu
description: A GPU-first WebGPU rendering backend that preserves Avalonia rendering contracts while replacing the default Skia renderer.
statement: Avalonia rendering, rebuilt around a direct GPU composition path.
accent: "#d39cff"
featured: true
status: Preview
packages:
  - name: ProGPU.Avalonia.Rendering
    note: ProGPU, Silk.NET, and WebGPU rendering platform for Avalonia.
install: dotnet add package ProGPU.Avalonia.Rendering --prerelease
usageLanguage: csharp
usage: |-
  AppBuilder.Configure<App>()
      .UseSilkNet()
      .UseProGpu();
highlights:
  - Skia-free render path
  - Custom vector operation lease
  - WebGPU shaders in-frame
  - Avalonia rendering contracts
tier: Flagship
audience:
  - Avalonia contributors and renderer authors
  - Apps exploring a Skia-independent pipeline
  - GPU-heavy UI and visualization tools
architecture:
  - label: XAML / C#
    detail: Applications compose reusable behavior through normal Avalonia APIs.
  - label: Integration
    detail: Focused packages connect to Avalonia properties, input, and rendering.
  - label: Platform
    detail: The implementation remains portable across Avalonia targets where supported.
compatibility:
  - label: Avalonia
    value: Feature branch
    state: partial
  - label: WebGPU
    value: Core path
    state: ready
  - label: Custom shaders
    value: In-frame
    state: partial
  - label: Production
    value: Not yet
    state: planned
proof:
  - value: Skia-free
    label: rendering path
  - value: WebGPU
    label: device and command model
  - value: Leases
    label: custom vector operations
media:
  - src: https://opengraph.githubassets.com/portfolio-v2/wieslawsoltes/Avalonia
    alt: Avalonia ProGPU GitHub repository preview
    caption: The Avalonia ProGPU repository contains the current source, samples, releases, and issue history.
links:
  - label: Repository
    href: https://github.com/wieslawsoltes/Avalonia
  - label: Issues
    href: https://github.com/wieslawsoltes/Avalonia/issues
  - label: Releases
    href: https://github.com/wieslawsoltes/Avalonia/releases
limitations: This backend lives on an Avalonia feature branch and is intended for evaluation and framework development.
related:
  - progpu
  - avalonia-silknet
  - librewpf
---

The ProGPU backend implements Avalonia rendering contracts directly over a WebGPU-oriented scene and resource model. It is the renderer half of an alternative Avalonia desktop stack.
