---
order: 22
name: ColorPicker
eyebrow: Color and theme tooling
category: Controls
repo: ColorPicker
branch: master
description: A reusable Avalonia color picker and theme editor surface with spectrum, component, palette, and alpha editing workflows.
statement: Production-ready color selection for creative and theming tools.
accent: "#ff85b6"
tier: Maintained
status: Maintained
packages:
  - name: ThemeEditor.Controls.ColorPicker
    note: Color picker controls, styles, and theme editor primitives.
install: dotnet add package ThemeEditor.Controls.ColorPicker
usageLanguage: xml
usage: |-
  <Application.Styles>
    <StyleInclude Source="avares://ThemeEditor.Controls.ColorPicker/ColorPicker.axaml" />
  </Application.Styles>

  <cp:ColorPicker Color="Red" />
highlights:
  - Spectrum and channel editing
  - Palette workflows
  - Alpha support
  - Reusable Avalonia styles
audience:
  - Theme and design-tool authors
  - Image, vector, and diagram editors
  - Applications with rich color input
architecture:
  - label: Model
    detail: Application state stays in portable domain objects and view models.
  - label: Control
    detail: Avalonia controls expose focused properties, commands, and events.
  - label: Theme
    detail: Templates and styles make the surface adaptable to each application.
compatibility:
  - label: Avalonia
    value: Supported
    state: ready
  - label: Alpha
    value: Supported
    state: ready
  - label: Palettes
    value: Supported
    state: ready
  - label: Theme editor
    value: Included
    state: ready
proof:
  - value: Spectrum
    label: direct color selection
  - value: RGBA
    label: component editing
  - value: Theme-ready
    label: packaged styles
media:
  - src: https://raw.githubusercontent.com/wieslawsoltes/ColorPicker/master/images/ColorPicker.png
    alt: Avalonia ColorPicker control
    caption: The primary control combines spectrum, channels, alpha, and preview.
  - src: https://raw.githubusercontent.com/wieslawsoltes/ColorPicker/master/images/ThemeEditor.png
    alt: Theme editor using ColorPicker
    caption: The controls compose into larger theme-authoring workflows.
links:
  - label: Repository
    href: https://github.com/wieslawsoltes/ColorPicker
  - label: Issues
    href: https://github.com/wieslawsoltes/ColorPicker/issues
  - label: Releases
    href: https://github.com/wieslawsoltes/ColorPicker/releases
related:
  - effector
  - svg-skia
  - core2d
---

ColorPicker packages the dense interaction required by design tools: direct spectrum selection, channels, alpha, palettes, previews, and reusable styles that integrate cleanly with Avalonia themes.
