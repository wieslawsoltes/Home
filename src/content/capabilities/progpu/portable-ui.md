---
order: 92
project: progpu
name: Portable WinUI
eyebrow: Controls, input, Fluent, and automation
status: Preview
description: A WinRT-shaped foundation and WinUI-shaped application model bring portable controls, layout, binding, input, gestures, automation, windowing, Fluent themes, charts, and designer surfaces onto ProGPU.
statement: Build a complete XAML application surface directly above the GPU substrate.
packages:
  - name: ProGPU.WinRT
    note: Portable WinRT-shaped foundation, storage, and value contracts.
  - name: ProGPU.WinUI
    note: App model, controls, layout, binding, input, windowing, media, and automation.
  - name: ProGPU.WinUI.Themes.Fluent
    note: Source-generated WinUI Fluent resources and templates.
  - name: ProGPU.WinUI.Charts
    note: GPU-native chart controls and interaction.
install: |-
  dotnet add package ProGPU.WinUI --prerelease
  dotnet add package ProGPU.WinUI.Themes.Fluent --prerelease
usageLanguage: xml
usage: |-
  <NavigationView PaneDisplayMode="Left">
    <Frame Content="{Binding CurrentPage}" />
  </NavigationView>
highlights:
  - WinUI-shaped controls and application model
  - Pointer, touch, gestures, drag/drop, focus, and automation
  - Source-generated Fluent theme resources
  - Virtualization, charts, media, hot reload, and designer surfaces
layers:
  - label: Foundation
    detail: WinRT-shaped values, storage, dispatching, windowing, and system contracts remain platform-neutral.
  - label: Controls
    detail: Layout, binding, input, automation, navigation, data, text, media, and charts form the public UI surface.
  - label: Theme
    detail: Source-generated Fluent resources retain inspectable XAML and typed template contracts.
  - label: Scene
    detail: Controls resolve into retained vector, text, image, media, and effect work on the shared compositor.
sourcePath: src/ProGPU.WinUI
related:
  - progpu/xaml-tooling
  - progpu/scene
  - progpu/framework-bridges
---

## Portable WinUI turns the rendering substrate into an application framework while keeping controls, themes, input, automation, media, and composition on explicit package boundaries.
