---
order: 27
project: dxf-parser
name: DXF Parser & Tree
eyebrow: Group codes into stable structure
status: Active
description: An iterative parser converts DXF code/value pairs into a hierarchical entity tree with handles, parent metadata, container boundaries, preserved ordering, synthetic end markers, and round-trip serialization.
statement: See the drawing as explicit, navigable file structure.
packages:
  - name: DxfParser
    note: Standalone parser, tree grouping, lookup, and serialization component.
    url: https://github.com/wieslawsoltes/DxfParser/blob/main/components/dxf-parser.js
install: |-
  git clone https://github.com/wieslawsoltes/DxfParser.git
  # Load components/utils.js and components/dxf-parser.js.
usageLanguage: javascript
usage: |-
  const parser = new DxfParser();
  const nodes = parser.parse(dxfText);

  const layerTable = parser.findNodeByIdIterative(nodes, nodeId);
  const roundTrip = parser.serializeTree(nodes);
highlights:
  - Iterative O(n) grouping
  - Handles and parent metadata
  - Malformed-container recovery
  - Round-trip DXF serialization
layers:
  - label: Tokenize
    detail: Alternating code and value lines become ordered DXF tags.
  - label: Group
    detail: An explicit stack builds sections, tables, blocks, objects, and entity children.
  - label: Repair
    detail: Missing container terminators produce traceable synthetic end nodes.
  - label: Serialize
    detail: The stored order and hierarchy emit back into DXF text.
sourcePath: components/dxf-parser.js
docsPath: docs/dxf-parser.md
related:
  - dxf-parser/inspection-diff
  - dxf-parser/rendering
  - dxf-parser/editor-export
---

## An iterative parser converts DXF code/value pairs into a hierarchical entity tree with handles, parent metadata, container boundaries, preserved ordering, synthetic end markers, and round-trip serialization.
