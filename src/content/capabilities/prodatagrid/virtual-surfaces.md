---
order: 96
project: prodatagrid
name: Virtual Data Surfaces
eyebrow: Bounded layout for very large data
status: Active
description: Flat, retained-row, drawn-cell, and fully virtual layouts combine row retargeting, recycling, selection, sorting, editing, lifecycle events, and benchmarked fast paths for dense data workloads.
statement: Scale the viewport without throwing away interaction, automation, or measurable behavior.
packages:
  - name: ProDataGrid
    note: Virtual layouts, optimized themes, drawn display cells, recycling, selection, editing, and data operations.
install: dotnet add package ProDataGrid
usageLanguage: xml
usage: |-
  <DataGrid ItemsSource="{Binding Trades}"
            RowTheme="{StaticResource DataGridOptimizedFeatureUnfrozenRowTheme}"
            CellTheme="{StaticResource DataGridOptimizedCellTheme}"
            UseLightweightFiller="True" />
highlights:
  - Flat, retained, drawn, and fully virtual layouts
  - Row retargeting, recycling, and bounded extent calculation
  - Virtual selection, sorting, editing, and specialized cells
  - Scroll, layout, hierarchy, and sorting benchmarks
layers:
  - label: Source
    detail: Collections, hierarchy adapters, remote queries, and runtime-defined shapes expose rows incrementally.
  - label: Realize
    detail: Replaceable realization factories choose retained controls, drawn cells, or virtual row state for the viewport.
  - label: Retarget
    detail: Recycled rows update typed content, selection, editing, automation, and lifecycle state without rebuilding the full surface.
  - label: Measure
    detail: Dedicated benchmarks track scrolling, sorting, hierarchy, recycling, layout, and allocation trade-offs.
sourcePath: src/Avalonia.Controls.DataGrid
docsPath: docfx/articles/optimized-cell-paths.md
related:
  - prodatagrid/data-grid
  - prodatagrid/source-generation
  - prodatagrid/diagnostics
---

## ProDataGrid exposes several performance paths because virtualization is a product choice: retained controls preserve the broadest Avalonia behavior, while drawn and virtual surfaces trade template flexibility for tighter CPU and allocation budgets.
