---
order: 53
project: progpu
name: Framework Bridges
eyebrow: Avalonia, Uno, WinUI, and WPF
status: Preview
description: Framework and platform packages connect ProGPU presentation, controls, charts, media, and interop to Avalonia, Uno Platform, portable WinUI, LibreWPF, LibreWinForms, Android, iOS, and the browser.
statement: Bring the GPU substrate into an existing XAML application model.
packages:
  - name: ProGPU.Avalonia
    note: Avalonia integration and control hosting.
  - name: ProGPU.Uno
    note: Uno Platform integration.
  - name: ProGPU.WinUI
    note: WinUI controls and presentation.
  - name: LibreWPF.Interop
    note: WPF-compatible compositor interop.
  - name: ProGPU.Android
    note: Native Android SurfaceView and Vulkan/WebGPU host.
  - name: ProGPU.iOS
    note: Native UIKit, CAMetalLayer, and Metal/WebGPU host.
  - name: ProGPU.Browser
    note: Batched WebAssembly dispatcher and navigator.gpu host.
install: dotnet add package ProGPU.Uno --prerelease
usageLanguage: xml
usage: <progpu:GpuView Render="{x:Bind ViewModel.Render}" />
highlights:
  - Avalonia 11/12 and Uno integration
  - Portable WinUI, WPF, and WinForms compatibility
  - Android Vulkan, iOS Metal, and browser WebGPU hosts
  - Shared typed GPU backend underneath
layers:
  - label: Framework
    detail: XAML, properties, input, and lifecycle remain native to the host.
  - label: Adapter
    detail: Integration packages translate framework state into ProGPU resources and visuals.
  - label: Scene
    detail: Shared vector, text, scene, and compute packages prepare work.
  - label: Backend
    detail: WebGPU presents through the selected platform surface.
sourcePath: src/ProGPU.Uno
related:
  - progpu/backend
  - progpu/scene
  - progpu/compatibility
---

## Framework and platform packages connect ProGPU presentation, controls, charts, media, and interop to Avalonia, Uno Platform, portable WinUI, LibreWPF, LibreWinForms, Android, iOS, and the browser.
