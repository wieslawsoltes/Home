---
order: 12
name: DxfParser
eyebrow: DXF inspection and rendering workbench
category: Tools
repo: DxfParser
description: A browser-native DXF parser, tree inspector, comparison workspace, diagnostics engine, renderer, and lightweight editor for detailed AutoCAD drawing analysis.
statement: Open the DXF structure, inspect every code, compare drawings, and render the geometry.
accent: "#72d6ff"
tier: Maintained
status: Maintained
packages:
  - name: DxfParser
    note: Standalone JavaScript parser, inspector, rendering stack, diagnostics, diff, and editor.
    url: https://github.com/wieslawsoltes/DxfParser
install: |-
  git clone https://github.com/wieslawsoltes/DxfParser.git
  cd DxfParser
  # Serve this directory with any static web server.
usageLanguage: javascript
usage: |-
  const parser = new DxfParser();
  const document = parser.parse(dxfText);

  const serialized = parser.serializeTree(document);
highlights:
  - Hierarchical DXF tag and entity tree
  - Canvas and WebGL rendering
  - Drawing comparison and diagnostics
  - Round-trip editing and DXF export
audience:
  - CAD and DXF implementers validating file structure
  - Engineering teams comparing or diagnosing drawings
  - Developers needing a browser-native DXF inspection and rendering reference
architecture:
  - label: Parse
    detail: Group-code and value pairs become typed tags, entities, containers, handles, and a stable hierarchical tree.
  - label: Inspect
    detail: Virtualized tree grids, statistics, handle navigation, diagnostics, filters, and document comparison expose the drawing structure.
  - label: Render
    detail: A document builder and retained scene graph feed Canvas and WebGL-oriented surfaces with text, layers, styles, and overlays.
  - label: Edit + export
    detail: The editor adapter mutates scene state and serializes the drawing back into DXF text.
compatibility:
  - label: Runtime
    value: Modern browser / JavaScript
    state: ready
  - label: DXF 2018
    value: Broad, actively tracked coverage
    state: partial
  - label: Canvas / WebGL
    value: Rendering paths
    state: ready
  - label: NuGet
    value: Not applicable
    state: planned
proof:
  - value: O(n)
    label: iterative tag and tree parsing
  - value: 2 surfaces
    label: Canvas and WebGL rendering
  - value: 7 baselines
    label: drawing regression fixtures
media:
  - src: https://raw.githubusercontent.com/wieslawsoltes/DxfParser/main/tests/outputs/complex-model.frame.svg
    outputFormat: svg
    alt: DxfParser rendered complex DXF model baseline
    caption: A deterministic frame generated from the complex DXF regression fixture.
  - src: https://raw.githubusercontent.com/wieslawsoltes/DxfParser/main/tests/outputs/advanced-geometry.frame.svg
    outputFormat: svg
    alt: DxfParser advanced geometry rendering baseline
    caption: Advanced geometry exercises the parser, scene builder, and rendering surface together.
links:
  - label: Parser guide
    href: https://github.com/wieslawsoltes/DxfParser/blob/main/docs/dxf-parser.md
  - label: Rendering plan
    href: https://github.com/wieslawsoltes/DxfParser/blob/main/docs/dxf-rendering-plan.md
  - label: Test strategy
    href: https://github.com/wieslawsoltes/DxfParser/blob/main/TESTING_STRATEGY.md
limitations: DxfParser is a browser-native engineering workbench rather than a packaged JavaScript or NuGet library. DXF 2018 coverage and TrueView parity are actively tracked, with some advanced entities still partial.
related:
  - procad
  - core2d
  - svg-skia
---

DxfParser treats a DXF drawing as both structured data and visible geometry. It parses group-code pairs into a stable hierarchical tree, preserves malformed-container diagnostics, compares documents, builds a render scene, and supports inspection, editing, and round-trip export in a browser-native workbench.
