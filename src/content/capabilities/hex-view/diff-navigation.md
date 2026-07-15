---
order: 78
project: hex-view
name: Diff & Navigation
eyebrow: Find meaningful binary locations
status: Maintained
description: Side-by-side synchronized views, difference providers, highlight brushes, next/previous difference, address jumps, bookmarks, history, caret events, selection services, and keyboard commands turn raw offsets into an inspection workflow.
statement: Move through large binary evidence without losing context.
packages:
  - name: HexView
    note: Difference, navigation, bookmark, selection, and event services.
install: dotnet add package HexView
usageLanguage: csharp
usage: |-
  LeftHexView.DifferencesProvider = () => differences;
  RightHexView.DifferencesProvider = () => differences;

  navigation.AddBookmark(0x1000, "Header table");
  navigation.Visit(LeftHexView.CaretOffset);
  LeftHexView.MoveCaretTo(0x2000);
highlights:
  - Side-by-side diff highlighting
  - Synchronized scrolling
  - Address history and bookmarks
  - Comprehensive keyboard and event surface
layers:
  - label: Compare
    detail: A provider reports changed ranges between two data sources.
  - label: Highlight
    detail: Both controls mark differences and synchronize context.
  - label: Navigate
    detail: Offsets, history, bookmarks, and difference commands move the caret.
  - label: Integrate
    detail: Events expose caret, selection, and byte changes to the host application.
sourcePath: src/HexView/Controls
related:
  - hex-view/large-file-viewing
  - hex-view/binary-editing
---

## Side-by-side synchronized views, difference providers, highlight brushes, next/previous difference, address jumps, bookmarks, history, caret events, selection services, and keyboard commands turn raw offsets into an inspection workflow.
