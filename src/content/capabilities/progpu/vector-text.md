---
order: 51
project: progpu
name: Vector & Text
eyebrow: GPU-ready 2D primitives
status: Preview
description: Vector geometry, brushes, strokes, an AOT-safe OpenType shaping engine, generated Unicode data, font fallback, glyph atlases, metrics, and layout packages prepare reusable 2D content for the GPU pipeline.
statement: Build precise interface graphics above the device layer.
packages:
  - name: ProGPU.Vector
    note: Paths, geometry, brushes, pens, tessellation, and vector resources.
  - name: ProGPU.Text
    note: Text layout, shaping, glyph metrics, and GPU text rendering.
  - name: ProGPU.Text.Shaping
    note: Standalone AOT-safe OpenType shaping contracts and execution.
  - name: ProGPU.Fonts.Noto
    note: Deterministic CJK, symbol, and fallback font assets.
install: |-
  dotnet add package ProGPU.Vector --prerelease
  dotnet add package ProGPU.Text --prerelease
usageLanguage: csharp
usage: |-
  var path = new PathBuilder()
      .MoveTo(12, 12)
      .LineTo(92, 48)
      .LineTo(12, 84)
      .Close();

  scene.AddPath(path, brush);
highlights:
  - Paths and geometry
  - Brushes, pens, and fills
  - OpenType shaping across complex scripts
  - Retained glyph fragments and GPU-ready atlases
layers:
  - label: Describe
    detail: Managed paths and text runs capture application intent.
  - label: Layout
    detail: Geometry and glyph placement resolve CPU-side constraints.
  - label: Prepare
    detail: Buffers, atlases, and paint data become GPU-ready resources.
  - label: Draw
    detail: Scene or immediate commands submit prepared content.
sourcePath: src/ProGPU.Vector
related:
  - progpu/backend
  - progpu/scene
  - progpu/compatibility
---

## Vector geometry, brushes, strokes, AOT-safe OpenType shaping, complex-script processing, font fallback, glyph atlases, metrics, and layout packages prepare reusable 2D content for the GPU pipeline.
