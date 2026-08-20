---
order: 19
name: PanAndZoom
eyebrow: Spatial navigation control
category: Controls
repo: PanAndZoom
branch: master
description: A focused Avalonia control for smooth zoom-to-point, panning, built-in or custom content bounds, resize policies, keyboard and multi-touch navigation, history, rotation, state, and animation.
statement: A precise, reusable viewport for diagrams, maps, editors, and infinite canvases.
accent: "#72d4ff"
tier: Maintained
status: Active
packages:
  - name: PanAndZoom
    note: ZoomBorder, viewport state, gestures, animation, and constraints.
install: dotnet add package PanAndZoom --prerelease
usageLanguage: xml
usage: |-
  <paz:ZoomBorder ZoomSpeed="1.2"
                  MinZoom="0.1" MaxZoom="10">
    <Canvas Width="2400" Height="1600" />
  </paz:ZoomBorder>
highlights:
  - Pointer-centered zoom
  - Built-in and overridable content bounds
  - Resize policies, animation, history, and saved views
  - Keyboard, wheel, multi-touch, rotation, grid, and accessibility
audience:
  - Diagram and node editor authors
  - Map, image, and document viewers
  - Any Avalonia app with a large spatial surface
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
  - label: Pointer / wheel
    value: Supported
    state: ready
  - label: Animated zoom
    value: Supported
    state: ready
  - label: Touch gestures
    value: Platform dependent
    state: partial
proof:
  - value: Zoom-to-point
    label: cursor-stable navigation
  - value: 5 modes
    label: content bounds policies
  - value: Animations
    label: programmable transitions
media:
  - src: https://raw.githubusercontent.com/wieslawsoltes/PanAndZoom/master/images/PanAndZoom.png
    alt: PanAndZoom sample application
    caption: The sample exposes zoom, pan, constraints, and viewport behavior.
links:
  - label: Documentation
    href: https://wieslawsoltes.github.io/PanAndZoom/
  - label: Samples
    href: https://github.com/wieslawsoltes/PanAndZoom/tree/master/samples
related:
  - nodeeditor
  - core2d
  - procad
---

PanAndZoom concentrates the geometry and input details of an infinite-canvas viewport into one control. Pointer-centered zoom, five content-bounds policies, custom validation hooks, resize behavior, history, keyboard and touch input, rotation, snapping, state serialization, and animation remain independent from the content inside.
