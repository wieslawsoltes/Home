---
order: 21
name: NXUI
eyebrow: C# UI composition
category: Frameworks
repo: NXUI
description: A fluent, code-first UI layer for Avalonia that composes applications entirely in C# and keeps iteration fast with hot reload.
statement: Avalonia applications expressed as compact, composable C#.
accent: "#8ea2ff"
tier: Experimental
status: Active
packages:
  - name: NXUI
    note: Fluent controls, properties, bindings, and composition.
  - name: NXUI.Desktop
    note: Desktop host and hot-reload integration.
install: |-
  dotnet add package NXUI
  dotnet add package NXUI.Desktop
usageLanguage: csharp
usage: |-
  object Build() =>
    Window()
      .Title("NXUI")
      .Content(Label().Content("Hello from C#"));

  return HotReloadHost.Run(Build, "NXUI", args);
highlights:
  - Code-first Avalonia UI
  - Fluent composition
  - Hot reload host
  - No XAML required
audience:
  - Developers who prefer code-first UI
  - Generated and highly compositional interfaces
  - Teams experimenting with functional Avalonia patterns
architecture:
  - label: Application
    detail: A familiar public programming model defines the app.
  - label: Framework
    detail: Managed services coordinate layout, input, resources, and lifecycle.
  - label: Platform
    detail: Portable adapters connect rendering and operating-system services.
compatibility:
  - label: Avalonia
    value: Supported
    state: ready
  - label: Desktop host
    value: Supported
    state: ready
  - label: Hot reload
    value: Included
    state: ready
  - label: XAML designer
    value: Not applicable
    state: planned
proof:
  - value: 100% C#
    label: UI composition
  - value: Hot reload
    label: iteration loop
  - value: Fluent
    label: control builders
media:
  - src: https://github.com/user-attachments/assets/33f7f915-13a2-4c45-b9e3-ecd5dfdfd353
    alt: NXUI desktop application built in C#
    caption: NXUI expresses the complete Avalonia visual tree in composable C#.
links:
  - label: Repository
    href: https://github.com/wieslawsoltes/NXUI
  - label: Issues
    href: https://github.com/wieslawsoltes/NXUI/issues
  - label: Releases
    href: https://github.com/wieslawsoltes/NXUI/releases
related:
  - xaml-behaviors
  - avalonia-development-plugin
  - codexgui
---

NXUI maps Avalonia controls, properties, bindings, and application composition into fluent C#. It is especially useful when code generation, functional composition, or one-language workflows matter more than XAML tooling.
