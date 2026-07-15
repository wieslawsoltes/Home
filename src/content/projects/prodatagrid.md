---
order: 9
name: ProDataGrid
eyebrow: High-performance data UI
category: Controls
repo: ProDataGrid
description: A high-performance Avalonia DataGrid family with charting, formulas, diagnostics, virtualization, and production-grade editing.
statement: Dense data workflows without compromising interaction or speed.
accent: "#5ce1b9"
featured: true
status: Active
packages:
  - name: ProDataGrid
    note: The high-performance Avalonia grid control.
  - name: ProDataGrid.Charting
    note: Grid and pivot integration for ProCharts.
  - name: ProDataGrid.FormulaEngine
    note: Parsing, evaluation, and recalculation.
  - name: ProDiagnostics
    note: Runtime visual tree and property inspection.
install: dotnet add package ProDataGrid
usageLanguage: xml
usage: |-
  <DataGrid ItemsSource="{Binding People}" AutoGenerateColumns="False">
    <DataGrid.Columns>
      <DataGridTextColumn Header="Name" Binding="{Binding Name}" Width="*" />
      <DataGridCheckBoxColumn Header="Active" Binding="{Binding IsActive}" />
    </DataGrid.Columns>
  </DataGrid>
highlights:
  - Row and column virtualization
  - Formula engine and charting
  - Fluent and Simple themes
  - Built-in developer diagnostics
tier: Flagship
audience:
  - Business and engineering desktop applications
  - Large, editable data sets
  - Teams needing formulas, charts, and runtime diagnostics
architecture:
  - label: Model
    detail: Application state stays in portable domain objects and view models.
  - label: Control
    detail: Avalonia controls expose focused properties, commands, and events.
  - label: Theme
    detail: Templates and styles make the surface adaptable to each application.
compatibility:
  - label: Avalonia
    value: Supported
    state: ready
  - label: Virtualization
    value: Rows + columns
    state: ready
  - label: Fluent / Simple
    value: Themes
    state: ready
  - label: NativeAOT
    value: Tracked
    state: partial
proof:
  - value: 2-axis
    label: virtualization
  - value: Formula
    label: calculation engine
  - value: Diagnostics
    label: built-in inspection
media:
  - src: https://opengraph.githubassets.com/portfolio-v2/wieslawsoltes/ProDataGrid
    alt: ProDataGrid GitHub repository preview
    caption: The ProDataGrid repository contains the current source, samples, releases, and issue history.
links:
  - label: Documentation
    href: https://wieslawsoltes.github.io/ProDataGrid/
  - label: Samples
    href: https://github.com/wieslawsoltes/ProDataGrid/tree/main/samples
related:
  - treedatagrid
  - dock
  - protext
---

ProDataGrid is an expanded data-workbench family rather than a single table. Its packages cover the grid, formulas, charting, diagnostics, themes, data sources, and editing workflows while retaining a familiar Avalonia API.
