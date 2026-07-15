---
order: 85
project: ribbon-control
name: Customization & Persistence
eyebrow: Remember the user’s ribbon
status: Active
description: Customization services export, reset, load, and save minimized state, selected tab, quick access items and placement, with a JSON state store, schema versions, and migration hooks.
statement: Preserve user command layout without freezing the application schema.
packages:
  - name: RibbonControl.Persistence.Json
    note: File-backed IRibbonStateStore with schema versioning and migrations.
  - name: RibbonControl.Core
    note: Runtime state and customization services.
install: dotnet add package RibbonControl.Persistence.Json
usageLanguage: csharp
usage: |-
  var store = new JsonRibbonStateStore(
      "ribbon-state.json",
      new JsonRibbonStateStoreOptions
      {
          CurrentSchemaVersion = 2,
          Migrations = { new Schema1To2QuickAccessPlacementMigration() }
      });
highlights:
  - Load, save, export, and reset flows
  - Quick access and minimized state
  - Versioned JSON schema
  - Pluggable migration chain
layers:
  - label: Capture
    detail: Runtime ribbon state records selection, placement, and customization.
  - label: Version
    detail: The store writes a schema identity beside state.
  - label: Migrate
    detail: Ordered hooks update older persisted shapes.
  - label: Restore
    detail: Built-in commands apply or reset state through the control.
sourcePath: src/RibbonControl.Persistence.Json
related:
  - ribbon-control/ribbon-primitives
  - ribbon-control/mvvm-merge
---

## Customization services export, reset, load, and save minimized state, selected tab, quick access items and placement, with a JSON state store, schema versions, and migration hooks.
