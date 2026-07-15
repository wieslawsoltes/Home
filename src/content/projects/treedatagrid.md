---
order: 10
name: TreeDataGrid
eyebrow: Hierarchical data control
category: Controls
repo: TreeDataGrid
description: An Avalonia control that presents hierarchical and tabular data together, with both tree and flat operating modes.
statement: A tree and a table, resolved into one efficient control.
accent: "#a6d76b"
featured: true
status: Maintained
packages:
  - name: TreeDataGrid
    note: Control, models, column types, and themes.
install: dotnet add package TreeDataGrid
usageLanguage: xml
usage: |-
  <TreeDataGrid ItemsSource="{Binding People}">
    <TreeDataGridTextColumn Header="Name" Binding="{Binding Name}" />
    <TreeDataGridTextColumn Header="Role" Binding="{Binding Role}" />
  </TreeDataGrid>
highlights:
  - Hierarchical and flat modes
  - Code or XAML columns
  - Selection models
  - Virtualized data presentation
tier: Flagship
audience:
  - File explorers and object browsers
  - Hierarchical business data
  - Apps that need tree semantics with table density
architecture:
  - label: Model
    detail: Application state stays in portable domain objects and view models.
  - label: Control
    detail: Avalonia controls expose focused properties, commands, and events.
  - label: Theme
    detail: Templates and styles make the surface adaptable to each application.
compatibility:
  - label: Hierarchical source
    value: Supported
    state: ready
  - label: Flat source
    value: Supported
    state: ready
  - label: Virtualization
    value: Supported
    state: ready
  - label: XAML columns
    value: Supported
    state: ready
proof:
  - value: 2 modes
    label: flat and hierarchical
  - value: Virtualized
    label: data presentation
  - value: Typed
    label: column models
media:
  - src: https://raw.githubusercontent.com/wieslawsoltes/TreeDataGrid/master/site/images/files.png
    alt: TreeDataGrid file explorer sample
    caption: Hierarchical rows and table columns share one virtualized surface.
  - src: https://raw.githubusercontent.com/wieslawsoltes/TreeDataGrid/master/site/images/countries.png
    alt: TreeDataGrid countries sample
    caption: The same control also operates as a flat tabular grid.
links:
  - label: Documentation
    href: https://wieslawsoltes.github.io/TreeDataGrid/
  - label: Samples
    href: https://github.com/wieslawsoltes/TreeDataGrid/tree/master/samples
related:
  - prodatagrid
  - dock
  - nodeeditor
---

TreeDataGrid combines hierarchical expansion with tabular columns and virtualized presentation. The model layer supports both flat and hierarchical sources, typed columns, sorting, and selection.
