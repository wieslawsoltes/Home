---
order: 13
name: ProEdit
eyebrow: Document engineering platform
category: Uno Platform
repo: ProEdit
description: A modular .NET 10 platform for document editing, layout, rendering, reporting, printing, conversion, automation, and real-time collaboration.
statement: Build complete document workflows from one composable, cross-platform stack.
accent: "#ee8fff"
featured: true
tier: Flagship
status: Active
packages:
  - name: ProEdit.Controls.Skia.Avalonia
    note: Avalonia document viewer and editable control backed by the shared Skia host.
  - name: ProEdit.Controls.Skia.Uno
    note: Uno Platform document viewer and editable control backed by the same shared Skia host.
  - name: ProEdit.RichText.Avalonia
    note: Editable Avalonia rich-text control with selection, formatting, and command infrastructure.
  - name: ProEdit.OpenXml
    note: Open XML and DOCX import and export for the core document model.
  - name: ProEdit.Reporting.Avalonia.Designer
    note: Avalonia report authoring surface for the modular reporting stack.
  - name: ProEdit.Collaboration
    note: Operation model, synchronization engine, persistence, and snapshots.
install: dotnet add package ProEdit.Controls.Skia.Avalonia
usageLanguage: xml
usage: |-
  <controls:ProEditDocumentEditor
      Document="{Binding Document}"
      Zoom="{Binding Zoom, Mode=TwoWay}"
      UsePagination="True"
      AcceptsReturn="True" />
highlights:
  - Rich document editing and pagination
  - DOCX, RTF, HTML, Markdown, PDF, PS, and XPS
  - Avalonia, Uno Platform, and .NET MAUI controls
  - Reporting, printing, collaboration, macros, and MCP
audience:
  - Teams building word processors, document viewers, or reporting products
  - Desktop and embedded applications that need reusable document infrastructure
  - Avalonia, Uno Platform, and .NET MAUI developers sharing one document engine
architecture:
  - label: Document
    detail: Sections, paragraphs, runs, tables, lists, styles, shapes, fields, comments, citations, metadata, and revisions form the portable model.
  - label: Layout + render
    detail: Pagination, line breaking, tables, floating objects, shapes, and proofing decorations feed renderer-neutral records and Skia output.
  - label: Workflows
    detail: Editing, reporting, printing, conversion, collaboration, proofing, macros, and MCP compose around the same document core.
  - label: Controls
    detail: Avalonia, Uno Platform, and .NET MAUI packages host shared read-only and editable document surfaces.
compatibility:
  - label: .NET
    value: "10.0"
    state: ready
  - label: Avalonia
    value: Editor, viewer, reporting, print UI
    state: ready
  - label: Uno Platform
    value: Shared Skia controls + compatibility
    state: ready
  - label: .NET MAUI
    value: Shared control package
    state: partial
proof:
  - value: 8+ formats
    label: document import and export
  - value: 3 UI stacks
    label: Avalonia, Uno, and MAUI
  - value: Tests + benchmarks
    label: headless UI and layout lanes
media:
  - src: https://raw.githubusercontent.com/wieslawsoltes/ProEdit/main/build/Assets/Icon.png
    alt: ProEdit document platform mark
    caption: ProEdit brings the document model, rendering, editing, reporting, and collaboration layers under one package-oriented identity.
  - src: https://opengraph.githubassets.com/portfolio-v3/wieslawsoltes/ProEdit
    alt: ProEdit GitHub repository preview
    caption: The active repository contains the complete source, cross-framework samples, tests, benchmarks, documentation, and release automation.
links:
  - label: Documentation
    href: https://wieslawsoltes.github.io/ProEdit/
  - label: Samples
    href: https://github.com/wieslawsoltes/ProEdit/tree/main/samples
  - label: Architecture
    href: https://github.com/wieslawsoltes/ProEdit/blob/main/docfx/articles/architecture.md
  - label: Benchmarks
    href: https://github.com/wieslawsoltes/ProEdit/tree/main/benchmarks
limitations: ProEdit is broad and actively evolving. Adopt the smallest package set that matches the workflow, pin package versions, and use the current samples as the integration contract for advanced editing, conversion, and collaboration features.
related:
  - protext
  - prodatagrid
  - protranslate
---

ProEdit is a package-oriented document platform rather than a single editor. Applications can adopt the document model, layout and Skia renderer, FlowDocument and rich-text controls, Word-style shell, reporting stack, printing services, format converters, collaboration engine, or automation integrations independently.
