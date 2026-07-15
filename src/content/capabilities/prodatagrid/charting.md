---
order: 2
project: prodatagrid
name: Charting & ProCharts
eyebrow: Data visualization system
status: Active
description: Chart models, Skia rendering, Avalonia controls, and grid integration for turning tabular data into composable visual analysis.
statement: Move from cells to visual evidence without leaving the data stack.
packages:
  - name: ProDataGrid.Charting
    note: Chart definitions and grid-aware chart workflows.
  - name: ProCharts
    note: Framework-neutral chart model and layout.
  - name: ProCharts.Avalonia
    note: Avalonia chart controls and interaction.
  - name: ProCharts.Skia
    note: Skia chart renderer.
install: |-
  dotnet add package ProDataGrid.Charting
  dotnet add package ProCharts.Avalonia
usageLanguage: xml
usage: |-
  <charts:ChartView Series="{Binding RevenueSeries}"
                    LegendPosition="Right"
                    IsPointerTrackingEnabled="True" />
highlights:
  - Framework-neutral chart definitions
  - Skia rendering backend
  - Avalonia interaction and themes
  - Grid selection and data integration
layers:
  - label: Data
    detail: Series and axes describe values independently from a UI framework.
  - label: Layout
    detail: Scales, labels, legends, and plot geometry are measured deterministically.
  - label: Render
    detail: The Skia backend draws the resolved chart scene.
  - label: Interact
    detail: Avalonia controls add hit testing, selection, tooltips, and navigation.
sourcePath: src/ProDataGrid.Charting
related:
  - prodatagrid/data-grid
  - prodatagrid/formula-engine
  - prodatagrid/diagnostics
---

## Chart models, Skia rendering, Avalonia controls, and grid integration for turning tabular data into composable visual analysis.
