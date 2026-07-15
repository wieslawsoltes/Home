---
order: 77
project: hex-view
name: Binary Editing & Search
eyebrow: Non-destructive byte operations
status: Maintained
description: A piece-table-inspired byte overlay tracks overwrite, insert, and delete operations over the original source, while an edit journal, selection services, wildcard search, replace, save, and patch export form a complete editing lane.
statement: Edit bytes efficiently while preserving the original file and a reversible history.
packages:
  - name: HexView
    note: ByteOverlay, EditJournal, search, selection, save, and patch services.
install: dotnet add package HexView
usageLanguage: csharp
usage: |-
  var source = new MemoryMappedLineReader("firmware.bin");
  var overlay = new ByteOverlay(source) { Journal = new EditJournal() };

  overlay.OverwriteByte(0x100, 0xFF);
  overlay.InsertBytes(0x200, new byte[] { 0xDE, 0xAD });

  await new SaveService().SaveAs(overlay, "patched.bin");
highlights:
  - Overwrite, insert, and delete overlay
  - Unlimited undo/redo and batches
  - Hex, wildcard, and text search/replace
  - Save As and portable patch export
layers:
  - label: Overlay
    detail: Edits reference the immutable source plus inserted and replaced ranges.
  - label: Journal
    detail: Operations become reversible single or batch history entries.
  - label: Search
    detail: Pattern, wildcard, text, and replacement services operate across the virtual data.
  - label: Save
    detail: The merged view writes a new file or a compact patch description.
sourcePath: src/HexView/Model
related:
  - hex-view/large-file-viewing
  - hex-view/diff-navigation
---

## A piece-table-inspired byte overlay tracks overwrite, insert, and delete operations over the original source, while an edit journal, selection services, wildcard search, replace, save, and patch export form a complete editing lane.
