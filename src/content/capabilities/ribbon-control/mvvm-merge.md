---
order: 84
project: ribbon-control
name: MVVM & Runtime Merging
eyebrow: Data-driven command systems
status: Active
description: Definition and view-model types, command catalogs, two-way runtime state, and merge policies let modules contribute or reorder tabs, groups, and items without owning the ribbon shell.
statement: Let features contribute commands while the application retains one coherent ribbon.
packages:
  - name: RibbonControl.Core
    note: Models, view models, command catalog, source collections, and merge services.
install: dotnet add package RibbonControl.Core
usageLanguage: xml
usage: |-
  <ribbon:Ribbon
      TabsSource="{CompiledBinding Ribbon.Tabs}"
      CommandCatalog="{CompiledBinding CommandCatalog}"
      SelectedTabId="{CompiledBinding Ribbon.SelectedTabId, Mode=TwoWay}"
      QuickAccessItems="{CompiledBinding QuickAccessItems}" />
highlights:
  - XAML, MVVM, and hybrid composition
  - Command catalog abstraction
  - TabsSource, GroupsSource, and ItemsSource
  - Pluggable merge policies and ordering
layers:
  - label: Contribute
    detail: Application modules publish definitions or view-model collections.
  - label: Merge
    detail: Stable ids, order, and policy reconcile contributions.
  - label: Bind
    detail: The control observes command and two-way state services.
  - label: Present
    detail: One adaptive ribbon materializes the merged runtime model.
sourcePath: src/RibbonControl.Core/ViewModels
related:
  - ribbon-control/ribbon-primitives
  - ribbon-control/customization-state
---

## Definition and view-model types, command catalogs, two-way runtime state, and merge policies let modules contribute or reorder tabs, groups, and items without owning the ribbon shell.
