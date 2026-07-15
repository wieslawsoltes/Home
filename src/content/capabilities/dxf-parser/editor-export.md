---
order: 30
project: dxf-parser
name: Editor & Export
eyebrow: Change and round-trip drawings
status: Preview
description: A lightweight browser editor composes selection, geometry mutation, viewport tools, property editing, file opening, drag/drop, history, save, and DXF serialization around the shared parser and rendering stack.
statement: Move from forensic inspection into controlled drawing changes.
packages:
  - name: DxfEditor
    note: Browser-native editing adapter, application shell, and export workflow.
    url: https://github.com/wieslawsoltes/DxfParser/tree/main/editor
install: |-
  git clone https://github.com/wieslawsoltes/DxfParser.git
  cd DxfParser
  # Serve editor/index.html from a local static web server.
usageLanguage: javascript
usage: |-
  const editor = await DxfEditor.open(file);
  editor.selection.set(activeEntity);
  editor.commands.move(activeEntity, { x: 20, y: -8 });

  const output = editor.serialize();
  download('edited.dxf', output);
highlights:
  - Shared parser and renderer
  - Selection and geometry commands
  - Properties, history, and file workflows
  - DXF serialization and download
layers:
  - label: Open
    detail: Files and drag/drop feed the shared parse and render pipeline.
  - label: Select
    detail: Scene hit testing resolves visible geometry back to document entities.
  - label: Edit
    detail: Commands mutate geometry and properties with history tracking.
  - label: Export
    detail: Scene changes reconcile with the document tree and serialize to DXF.
sourcePath: editor
related:
  - dxf-parser/parser-tree
  - dxf-parser/rendering
  - dxf-parser/inspection-diff
---

## A lightweight browser editor composes selection, geometry mutation, viewport tools, property editing, file opening, drag/drop, history, save, and DXF serialization around the shared parser and rendering stack.
