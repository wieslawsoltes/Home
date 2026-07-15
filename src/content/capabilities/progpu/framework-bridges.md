---
order: 53
project: progpu
name: Framework Bridges
eyebrow: Avalonia, Uno, WinUI, and WPF
status: Preview
description: Framework packages connect ProGPU presentation, controls, charts, and interop to Avalonia, Uno Platform, WinUI, and the LibreWPF compatibility effort.
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
install: dotnet add package ProGPU.Uno --prerelease
usageLanguage: xml
usage: <progpu:GpuView Render="{x:Bind ViewModel.Render}" />
highlights:
  - Avalonia integration
  - Uno and WinUI controls
  - WPF compositor interop
  - Shared GPU backend underneath
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

## Framework packages connect ProGPU presentation, controls, charts, and interop to Avalonia, Uno Platform, WinUI, and the LibreWPF compatibility effort.
