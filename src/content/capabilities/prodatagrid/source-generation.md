---
order: 95
project: prodatagrid
name: Source-generated Data Apps
eyebrow: Schemas, operations, views, and NativeAOT
status: Active
description: An incremental generator turns annotated row models and view models into reflection-free schemas, typed columns, fast accessors, operation controllers, data pipelines, code-only views, diagnostics, and NativeAOT-ready integration.
statement: Move grid structure and repetitive application plumbing from runtime reflection into validated compile-time output.
packages:
  - name: ProDataGrid.SourceGenerators
    note: Incremental row schema, column, operation, pipeline, view, and diagnostics generator.
  - name: ProDataGrid
    note: Runtime grid contracts consumed by generated schemas and fast paths.
install: |-
  dotnet add package ProDataGrid
  dotnet add package ProDataGrid.SourceGenerators
usageLanguage: csharp
usage: |-
  [GenerateDataGridColumns(ProviderName = "TradeGrid", Strict = true)]
  public sealed class Trade
  {
      [DataGridKey]
      public int Id { get; init; }

      [DataGridColumn(Header = "Symbol", Order = 0)]
      public string Symbol { get; init; } = string.Empty;
  }
highlights:
  - Reflection-free schemas and typed columns
  - Generated operations, pipelines, and remote-query prefetch
  - Code-only Avalonia and ReactiveUI views
  - Diagnostics, benchmarks, and NativeAOT smoke gates
layers:
  - label: Discover
    detail: Attributes and symbols define keys, columns, formats, hierarchy, data operations, and view requirements.
  - label: Validate
    detail: Compile-time diagnostics reject ambiguous, inaccessible, or inconsistent configurations.
  - label: Generate
    detail: Typed accessors, columns, controllers, projections, registries, and views become ordinary source.
  - label: Bind
    detail: Generated definitions feed retained, drawn, hierarchical, and virtual surfaces without runtime schema discovery.
sourcePath: src/ProDataGrid.SourceGenerators
docsPath: docfx/articles/source-generators-feature-spec.md
related:
  - prodatagrid/data-grid
  - prodatagrid/virtual-surfaces
  - prodatagrid/charting
---

## Source generation covers the path from a domain model to typed grid structure, operations, pipelines, and views while keeping invalid configurations visible at build time.
