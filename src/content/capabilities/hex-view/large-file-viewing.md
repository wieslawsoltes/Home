---
order: 76
project: hex-view
name: Large-file Viewing
eyebrow: Virtual binary presentation
status: Maintained
description: Memory-mapped readers, virtual scrolling, chunked operations, configurable bytes per line, multiple numeric bases, and ASCII/UTF encodings keep very large binary files navigable.
statement: Browse binary data at file scale without loading it all into memory.
packages:
  - name: HexView
    note: Control, memory-mapped readers, formatters, and virtual presentation services.
install: dotnet add package HexView
usageLanguage: csharp
usage: |-
  var reader = new MemoryMappedLineReader("image.bin");
  var formatter = new HexFormatter(reader)
  {
      Base = 16,
      BytesWidth = 16,
      Encoding = Encoding.UTF8
  };
  HexView.LineReader = reader;
  HexView.HexFormatter = formatter;
highlights:
  - Memory-mapped file access
  - Virtual scrolling and chunked reads
  - Hex, decimal, octal, and binary formats
  - ASCII, UTF-8, and UTF-16 views
layers:
  - label: Map
    detail: The reader opens file-backed data without materializing the whole file.
  - label: Window
    detail: Viewport offsets request only visible byte ranges.
  - label: Format
    detail: Numeric base, grouping, width, and encoding shape each line.
  - label: Render
    detail: The Avalonia control draws addresses, bytes, text, caret, and selection.
sourcePath: src/HexView/Services
related:
  - hex-view/binary-editing
  - hex-view/diff-navigation
---

## Memory-mapped readers, virtual scrolling, chunked operations, configurable bytes per line, multiple numeric bases, and ASCII/UTF encodings keep very large binary files navigable.
