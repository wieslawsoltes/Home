---
order: 28
project: dxf-parser
name: Inspection, Diagnostics & Diff
eyebrow: Understand and compare drawings
status: Active
description: Virtualized tree and batch grids expose tags, codes, sizes, handles, classes, blocks, materials, fonts, proxy objects, diagnostics, statistics, filters, history, and side-by-side structural differences.
statement: Turn opaque CAD files into inspectable engineering evidence.
packages:
  - name: DXF Inspection Workbench
    note: Tree grids, diagnostics, statistics, navigation, batch data, and comparison UI.
    url: https://github.com/wieslawsoltes/DxfParser/tree/main/components
install: |-
  git clone https://github.com/wieslawsoltes/DxfParser.git
  cd DxfParser
  # Serve index.html from a local static web server.
usageLanguage: javascript
usage: |-
  const left = parser.parse(leftDxf);
  const right = parser.parse(rightDxf);

  const diff = TreeDiffEngine.compare(left, right);
  renderTreeDiff(diff, leftPanel, rightPanel);
highlights:
  - Virtualized hierarchical tree grids
  - Handle, dependency, and object diagnostics
  - Side-by-side structural diff
  - Batch processing and exports
layers:
  - label: Index
    detail: Handles, types, tables, objects, and dependencies become searchable indexes.
  - label: Diagnose
    detail: Rules surface malformed structure, unsupported content, and drawing metadata.
  - label: Compare
    detail: Two trees align additions, removals, and changed values.
  - label: Present
    detail: Virtualized grids, overlays, navigation, and exports make results actionable.
sourcePath: components/tree-diff-engine.js
related:
  - dxf-parser/parser-tree
  - dxf-parser/rendering
  - dxf-parser/editor-export
---

## Virtualized tree and batch grids expose tags, codes, sizes, handles, classes, blocks, materials, fonts, proxy objects, diagnostics, statistics, filters, history, and side-by-side structural differences.
