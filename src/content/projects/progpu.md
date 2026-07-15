---
order: 0
name: ProGPU
eyebrow: GPU-first UI substrate
category: Graphics
repo: ProGPU
description: Cross-platform rendering, composition, vector, text, compute, and framework interop built directly on WebGPU and Silk.NET.
statement: A lightweight GPU foundation for the next generation of .NET interfaces.
accent: "#8ea2ff"
featured: true
status: Preview
packages:
  - name: ProGPU.Backend
    note: WebGPU device, swapchain, windowing, and platform services.
  - name: ProGPU.Vector
    note: Paths, geometry, brushes, pens, and GPU-ready vector data.
  - name: ProGPU.Scene
    note: Retained visuals, compositor commands, effects, and presentation.
  - name: ProGPU.Text
    note: Text layout, glyph metrics, and GPU text rendering.
install: |-
  dotnet add package ProGPU.Backend --prerelease
  dotnet add package ProGPU.Scene --prerelease
usageLanguage: csharp
usage: |-
  using ProGPU.Backend;

  // Create the platform host and render through a retained GPU scene.
  // See the Gallery sample for complete window and frame setup.
  var options = new BackendOptions();
highlights:
  - WebGPU-native pipelines
  - Retained scene composition
  - Vector, text, and compute
  - Avalonia, Uno, WPF, and WinForms bridges
tier: Flagship
audience:
  - UI framework authors replacing a renderer
  - Graphics tools that need WebGPU-native primitives
  - Teams exploring portable GPU composition in .NET
architecture:
  - label: Backend
    detail: Creates devices, surfaces, swapchains, queues, and platform services through WebGPU and Silk.NET.
  - label: Primitives
    detail: Vector, text, image, and compute packages prepare GPU-ready resources.
  - label: Scene
    detail: A retained visual tree records composition commands and effects.
  - label: Interop
    detail: Avalonia, Uno, WPF, and WinForms bridges connect existing UI contracts.
compatibility:
  - label: Windows
    value: Preview
    state: partial
  - label: macOS
    value: Preview
    state: partial
  - label: Linux
    value: Preview
    state: partial
  - label: NativeAOT
    value: Design target
    state: planned
proof:
  - value: WebGPU
    label: native rendering API
  - value: 5 layers
    label: backend to scene composition
  - value: 4 bridges
    label: framework integration directions
media:
  - src: https://raw.githubusercontent.com/wieslawsoltes/ProGPU/main/eng/Assets/ProGpuIcon.png
    alt: ProGPU project mark
    caption: ProGPU’s visual identity reflects a low-level GPU foundation.
links:
  - label: Repository
    href: https://github.com/wieslawsoltes/ProGPU
  - label: Samples
    href: https://github.com/wieslawsoltes/ProGPU/tree/main/samples
limitations: ProGPU is an active preview. APIs and backend behavior can change between prerelease packages; validate the current samples before adopting it in production.
related:
  - avalonia-progpu
  - avalonia-silknet
  - librewpf
  - librewinforms
---

ProGPU owns the path from device creation to presentation. Its layers separate platform services, retained composition, vector geometry, text, and compute so framework integrations can adopt only the pieces they need.
