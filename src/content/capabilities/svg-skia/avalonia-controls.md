---
order: 12
project: svg-skia
name: Avalonia SVG Controls
eyebrow: SVG in Avalonia XAML
status: Stable
description: Ready-to-use Avalonia controls load SVG sources, participate in layout and styling, and render through the Svg.Skia pipeline.
statement: Use SVG assets like first-class Avalonia content.
packages:
  - name: Svg.Controls.Skia.Avalonia
    note: Skia-backed SVG controls for Avalonia.
  - name: Svg.Controls.Avalonia
    note: Avalonia SVG image control.
  - name: Skia.Controls.Avalonia
    note: Reusable Skia drawing controls.
install: dotnet add package Svg.Controls.Skia.Avalonia
usageLanguage: xml
usage: |-
  <svg:Svg Source="avares://MyApp/Assets/logo.svg"
           Width="160"
           Stretch="Uniform" />
highlights:
  - Asset and file URI sources
  - Normal Avalonia layout behavior
  - Themeable XAML usage
  - Shared renderer underneath
layers:
  - label: Source
    detail: Properties accept application assets, files, streams, or prepared SVG objects.
  - label: Load
    detail: The control owns source changes and document lifetime.
  - label: Layout
    detail: Stretch, alignment, and viewport rules map SVG bounds into Avalonia layout.
  - label: Draw
    detail: Svg.Skia records and paints the final picture.
sourcePath: src/Svg.Controls.Skia.Avalonia
related:
  - svg-skia/renderer
  - svg-skia/svgml
  - svg-skia/editor
---

## Ready-to-use Avalonia controls load SVG sources, participate in layout and styling, and render through the Svg.Skia pipeline.
