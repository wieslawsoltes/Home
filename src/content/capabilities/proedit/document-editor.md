---
order: 4
project: proedit
name: Document Editor
eyebrow: Paginated rich editing
status: Active
description: A Skia-backed editor surface with pagination, selection, caret navigation, rich text formatting, document commands, and Avalonia integration.
statement: A real document workspace, not a multiline text box.
packages:
  - name: ProEdit.Controls.Skia.Avalonia
    note: Avalonia host for the Skia document editor.
  - name: ProEdit.RichText.Avalonia
    note: Rich-text controls, commands, and editor integration.
install: |-
  dotnet add package ProEdit.Controls.Skia.Avalonia
  dotnet add package ProEdit.RichText.Avalonia
usageLanguage: xml
usage: |-
  <proedit:ProEditDocumentEditor
      Document="{Binding Document}"
      Zoom="1.0"
      IsReadOnly="False" />
highlights:
  - Paginated document canvas
  - Caret, selection, and navigation
  - Paragraph and character formatting
  - Undoable editing commands
layers:
  - label: Document
    detail: Blocks, inlines, styles, sections, and resources hold editable content.
  - label: Layout
    detail: Text and document elements resolve into pages and positioned fragments.
  - label: Render
    detail: Skia paints the resolved document consistently across hosts.
  - label: Edit
    detail: Selection, commands, input, and undo mutate the document model.
sourcePath: src/ProEdit.Controls.Skia.Avalonia
docsPath: docfx/articles/architecture.md
related:
  - proedit/document-formats
  - proedit/reporting
  - proedit/collaboration
---

## A Skia-backed editor surface with pagination, selection, caret navigation, rich text formatting, document commands, and Avalonia integration.
