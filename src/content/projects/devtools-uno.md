---
order: 29
name: DevToolsUno
eyebrow: In-app Uno diagnostics
category: Uno Platform
repo: DevToolsUno
description: An in-app diagnostics suite for Uno Platform applications with live tree, property, binding, resource, style, event, asset, screenshot, and memory inspection.
statement: Inspect the running Uno interface without leaving the application.
accent: "#74d7f7"
featured: true
tier: Flagship
status: Active
packages:
  - name: DevToolsUno
    note: Complete diagnostics surface and attachable Uno Platform runtime tooling.
install: dotnet add package DevToolsUno
usageLanguage: csharp
usage: |-
  using DevToolsUno;
  using DevToolsUno.Diagnostics;

  _devTools = window.AttachDevTools(new DevToolsOptions
  {
      LaunchView = DevToolsViewKind.VisualTree,
      ShowAsChildWindow = false
  });
highlights:
  - Logical and visual trees
  - Bindings, resources, and styles
  - Events, assets, and memory
  - Screenshots and keyboard inspection
audience:
  - Uno Platform application teams
  - Control and design-system authors
  - Developers diagnosing bindings, styles, events, or retained objects
architecture:
  - label: Attach
    detail: Extension methods connect diagnostics to an Application, Window, or root FrameworkElement.
  - label: Observe
    detail: Adapters capture logical and visual trees, properties, bindings, events, resources, and assets.
  - label: Inspect
    detail: A dedicated Uno diagnostics window provides filtering, pinning, source views, and pointer inspection.
  - label: Act
    detail: Configurable hotkeys select hovered controls, freeze popups, and capture screenshots.
compatibility:
  - label: .NET
    value: "9.0"
    state: ready
  - label: Uno.WinUI
    value: 6.5.x
    state: ready
  - label: Desktop targets
    value: Primary
    state: ready
  - label: Screenshot saving
    value: Pluggable
    state: ready
proof:
  - value: 9 views
    label: diagnostics surfaces
  - value: F12
    label: default launch gesture
  - value: In app
    label: no external inspector required
media:
  - src: https://github.com/user-attachments/assets/eb8ef241-79fb-4b1f-81f2-cdd3b0694b97
    width: 3596
    height: 1994
    alt: DevToolsUno inspecting a running Uno Platform application
    caption: The diagnostics shell inspects the live Uno tree, properties, bindings, resources, events, and memory.
links:
  - label: Sample
    href: https://github.com/wieslawsoltes/DevToolsUno/tree/main/samples/DevToolsUno.Sample
  - label: Repository
    href: https://github.com/wieslawsoltes/DevToolsUno
related:
  - codexgui
  - prodatagrid
  - cdp
---

DevToolsUno attaches to an Uno Application, Window, or FrameworkElement and opens a dedicated diagnostics shell inside the running app. It brings visual-tree inspection, binding analysis, resource and style exploration, event routes, assets, screenshots, and memory tracking into one keyboard-driven surface.
