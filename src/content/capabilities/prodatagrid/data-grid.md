---
order: 0
project: prodatagrid
name: ProDataGrid
eyebrow: Virtualized data workbench
status: Active
description: A production-oriented Avalonia grid with row and column virtualization, editing, sorting, filtering, grouping, selection, and extensible columns.
statement: The core table surface for dense, interactive application data.
packages:
  - name: ProDataGrid
    note: Grid control, columns, data sources, themes, and editing infrastructure.
install: dotnet add package ProDataGrid
usageLanguage: xml
usage: |-
  <DataGrid ItemsSource="{Binding Orders}"
            AutoGenerateColumns="False"
            IsReadOnly="False">
    <DataGrid.Columns>
      <DataGridTextColumn Header="Customer" Binding="{Binding Customer}" />
      <DataGridCheckBoxColumn Header="Paid" Binding="{Binding IsPaid}" />
    </DataGrid.Columns>
  </DataGrid>
highlights:
  - Rows and columns virtualize together
  - Built-in edit and validation pipeline
  - Sorting, filtering, grouping, and summaries
  - Fluent and Simple theme support
layers:
  - label: Source
    detail: Collection and hierarchical adapters expose rows without coupling business data to the control.
  - label: Columns
    detail: Text, checkbox, template, and custom columns own display and edit behavior.
  - label: Viewport
    detail: Recycling and virtualization keep dense data responsive.
  - label: Interaction
    detail: Selection, navigation, sorting, filtering, and validation compose around the viewport.
sourcePath: src/Avalonia.Controls.DataGrid
related:
  - prodatagrid/formula-engine
  - prodatagrid/charting
  - prodatagrid/diagnostics
---

## A production-oriented Avalonia grid with row and column virtualization, editing, sorting, filtering, grouping, selection, and extensible columns.
