---
order: 29
project: dxf-parser
name: DXF Rendering
eyebrow: Scene graph to Canvas and WebGL
status: Preview
description: Document builders, entity adapters, tessellation, text layout, materials, plot styles, layers, blocks, hatches, dimensions, overlays, and retained scene nodes drive Canvas and WebGL-oriented rendering surfaces.
statement: Connect file structure to deterministic visible geometry.
packages:
  - name: DxfRendering
    note: Document builder, scene graph, entities, renderer, text, tessellation, overlays, Canvas, and WebGL surfaces.
    url: https://github.com/wieslawsoltes/DxfParser/tree/main/components
install: |-
  git clone https://github.com/wieslawsoltes/DxfParser.git
  # Load dist/dxf-rendering.global.js after the parser.
usageLanguage: javascript
usage: |-
  const document = DxfRendering.buildDocument(nodes);
  const scene = DxfRendering.buildScene(document);

  const renderer = new DxfRendering.Renderer(canvas);
  renderer.setScene(scene);
  renderer.render();
highlights:
  - Retained rendering scene graph
  - Canvas and WebGL-oriented surfaces
  - Text, hatches, dimensions, blocks, and layers
  - SVG and JSON frame regression baselines
layers:
  - label: Build
    detail: Parsed sections, tables, blocks, and entities become a normalized rendering document.
  - label: Scene
    detail: Retained nodes carry geometry, styles, text, materials, ordering, and pick metadata.
  - label: Surface
    detail: Canvas or WebGL-oriented adapters draw the resolved scene.
  - label: Verify
    detail: Frame JSON and SVG outputs compare against checked-in baselines.
sourcePath: components/rendering-renderer.js
docsPath: docs/dxf-rendering-plan.md
related:
  - dxf-parser/parser-tree
  - dxf-parser/inspection-diff
  - dxf-parser/editor-export
---

## Document builders, entity adapters, tessellation, text layout, materials, plot styles, layers, blocks, hatches, dimensions, overlays, and retained scene nodes drive Canvas and WebGL-oriented rendering surfaces.
