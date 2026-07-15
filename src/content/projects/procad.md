---
order: 27
name: ProCad
eyebrow: Open CAD platform
category: Tools
repo: ProCad
description: A modular .NET CAD platform for DWG and DXF inspection, rendering, editing, scripting, and collaboration across desktop and browser hosts.
statement: A modern, extensible CAD stack built openly on .NET.
accent: "#ffb66f"
tier: Experimental
status: Preview
packages:
  - name: ProCadSharp.Core
    note: CAD document model and shared primitives.
  - name: ProCadSharp.IO
    note: DWG and DXF loading and persistence.
  - name: ProCadSharp.Controls.Avalonia
    note: Avalonia viewer and editing controls.
  - name: ProCadSharp.Scripting
    note: Programmable CAD workflows.
install: dotnet add package ProCadSharp.Controls.Avalonia --prerelease
usageLanguage: csharp
usage: |-
  // Load a CAD document, create a renderer, and host the
  // Avalonia control. See the repository samples for the current API.
highlights:
  - DWG and DXF workflows
  - Rendering and editing
  - Scripting and collaboration
  - Avalonia, Uno, and MAUI controls
audience:
  - CAD viewers and vertical engineering tools
  - DWG/DXF inspection and automation
  - Teams needing an extensible .NET CAD core
architecture:
  - label: Core + IO
    detail: Document entities and DWG/DXF persistence form the portable base.
  - label: Rendering
    detail: Renderer-neutral preparation feeds Skia and UI-specific surfaces.
  - label: Editing
    detail: Commands, tools, snapping, and selection implement authoring workflows.
  - label: Apps
    detail: Avalonia, browser, Uno, and MAUI hosts compose the reusable packages.
compatibility:
  - label: .NET
    value: "10"
    state: ready
  - label: DWG / DXF
    value: Active development
    state: partial
  - label: Avalonia / Browser
    value: Hosts
    state: partial
  - label: Uno / MAUI
    value: Control packages
    state: partial
proof:
  - value: 10+ packages
    label: modular surface
  - value: DWG + DXF
    label: format direction
  - value: 4 UI hosts
    label: cross-platform reach
media:
  - src: https://raw.githubusercontent.com/wieslawsoltes/ProCad/main/ProCad.Tests/Assets/Render/baseline_scene.png
    alt: ProCad rendered CAD baseline scene
    caption: A deterministic render baseline from ProCad’s test assets.
links:
  - label: Documentation
    href: https://wieslawsoltes.github.io/ProCad/
limitations: ProCad is early-stage. Format coverage, editing commands, and package APIs are changing quickly; use current samples as the contract.
related:
  - core2d
  - panandzoom
  - progpu
---

ProCad divides CAD concerns into document, IO, rendering, editing, scripting, collaboration, and UI packages. That keeps file formats and geometry independent from any particular desktop or browser host.
