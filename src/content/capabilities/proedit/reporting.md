---
order: 6
project: proedit
name: Reporting
eyebrow: Report design and materialization
status: Active
description: A modular reporting stack with RDL parsing, data binding, expressions, document composition, export, service hosting, viewer, and visual designer packages.
statement: Design reports, bind data, materialize pages, and export through one pipeline.
packages:
  - name: ProEdit.Reporting.Avalonia.Designer
    note: Visual Avalonia report designer.
  - name: ProEdit.Reporting.Avalonia.Viewer
    note: Report preview and navigation controls.
  - name: ProEdit.Reporting.Core
    note: Framework-neutral report contracts and definitions.
install: dotnet add package ProEdit.Reporting.Avalonia.Designer
usageLanguage: xml
usage: |-
  <reporting:ReportDesigner
      Report="{Binding Report}"
      DataSources="{Binding DataSources}" />
highlights:
  - RDL report definitions
  - Expressions and data sources
  - Visual designer and viewer
  - Document and export pipeline
layers:
  - label: Define
    detail: RDL and programmatic models describe sections, data, expressions, and visual items.
  - label: Bind
    detail: Data sources and parameters create an evaluation context.
  - label: Materialize
    detail: The report becomes a paginated document with resolved values.
  - label: Deliver
    detail: Viewer, printing, and export packages present the result.
sourcePath: src/ProEdit.Reporting.Core
related:
  - proedit/document-editor
  - proedit/document-formats
  - proedit/printing
---

## A modular reporting stack with RDL parsing, data binding, expressions, document composition, export, service hosting, viewer, and visual designer packages.
