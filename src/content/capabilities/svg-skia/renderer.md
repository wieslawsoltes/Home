---
order: 11
project: svg-skia
name: SVG Renderer
eyebrow: SVG to Skia pipeline
status: Stable
description: The core SVG parser and renderer turns standards-oriented SVG documents into reusable Skia pictures and exportable raster or vector output.
statement: Load once, render consistently, and keep the output independent from a UI framework.
packages:
  - name: Svg.Skia
    note: SVG loading, model conversion, Skia picture generation, and export.
install: dotnet add package Svg.Skia
usageLanguage: csharp
usage: |-
  using var svg = new SKSvg();
  svg.Load("artwork.svg");

  canvas.DrawPicture(svg.Picture);
highlights:
  - SVG 1.1 and static SVG 2 coverage
  - Reusable SKPicture output
  - Files, streams, and XML sources
  - PNG, PDF, and picture workflows
layers:
  - label: Parse
    detail: SVG XML becomes a typed document model.
  - label: Resolve
    detail: Styles, references, units, geometry, text, and paint are normalized.
  - label: Record
    detail: Skia commands are captured into a reusable picture.
  - label: Present
    detail: Applications draw, transform, cache, or export the picture.
sourcePath: src/Svg.Skia
related:
  - svg-skia/avalonia-controls
  - svg-skia/source-generation
  - svg-skia/scene-animation
---

## The core SVG parser and renderer turns standards-oriented SVG documents into reusable Skia pictures and exportable raster or vector output.
