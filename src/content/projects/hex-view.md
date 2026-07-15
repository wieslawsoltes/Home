---
order: 38
name: HexView
eyebrow: Virtualized binary workbench
category: Controls
repo: HexView
description: An Avalonia hexadecimal viewer and editor with memory-mapped large files, piece-table edits, search and replace, diff, navigation, bookmarks, and patch export.
statement: Inspect and edit very large binary data without loading the whole file into memory.
accent: "#a6d36f"
showInIndex: false
tier: Maintained
status: Maintained
packages:
  - name: HexView
    note: Avalonia control, readers, formatters, editing, search, diff, and navigation services.
install: dotnet add package HexView
usageLanguage: xml
usage: |-
  <hexView:HexViewControl LineReader="{Binding Reader}"
                              HexFormatter="{Binding Formatter}" />
highlights:
  - Memory-mapped virtual scrolling
  - Hex, decimal, octal, and binary views
  - Piece-table editing with undo/redo
  - Search, diff, bookmarks, and patches
audience:
  - Binary analysis and reverse-engineering tools
  - Firmware, file-format, and protocol editors
  - Applications embedding large-data inspection
architecture:
  - label: Source
    detail: Memory-mapped or custom readers expose byte ranges without loading the entire file.
  - label: Overlay
    detail: Piece-table-style edits and a journal preserve source data and reversible history.
  - label: Services
    detail: Search, selection, navigation, save, and diff logic remain reusable.
  - label: Control
    detail: Virtual rendering presents addresses, formats, text, caret, selection, edits, and differences.
compatibility:
  - label: Avalonia desktop
    value: Control and sample
    state: ready
  - label: Console
    value: Sample host
    state: ready
  - label: Large files
    value: Memory mapped
    state: ready
  - label: Custom sources
    value: ILineReader
    state: ready
proof:
  - value: 4 bases
    label: hex, decimal, octal, binary
  - value: 4 encodings
    label: ASCII and UTF variants
  - value: Virtual
    label: file-scale scrolling
media:
  - src: https://github.com/user-attachments/assets/07511c4f-812d-4b35-85b0-4170881b15c5
    width: 1650
    height: 887
    outputFormat: gif
    alt: HexView desktop binary editor
    caption: The desktop workbench combines virtualized bytes, text, caret, selection, editing, navigation, and diagnostics.
links:
  - label: Usage guide
    href: https://github.com/wieslawsoltes/HexView#quick-start
  - label: Source
    href: https://github.com/wieslawsoltes/HexView/tree/main/src/HexView
limitations: Host applications supply domain-specific parsers and, for advanced comparison workflows, the difference provider. The control focuses on bytes, offsets, editing, and navigation.
related:
  - proedit
  - prodatagrid
  - inspector
archive:
  order: 7
  kind: Maintained
  tags:
    - Binary
    - Editor
    - Avalonia
---

HexView combines a virtualized Avalonia control with file-scale readers, formatters, non-destructive overlays, edit journals, search, selection, diff, navigation, bookmarks, saving, and patch export. Interfaces allow custom data sources and comparison providers.
