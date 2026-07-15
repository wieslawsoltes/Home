---
order: 18
project: dock
name: Dock Workspace
eyebrow: Documents, tools, and floating windows
status: Stable
description: Avalonia controls present model-driven document and tool layouts with splits, tabs, drag/drop docking, floating windows, and active-item tracking.
statement: Compose an IDE-scale workspace from a serializable layout model.
packages:
  - name: Dock.Avalonia
    note: Dock controls, presenters, drag/drop, and window integration.
install: dotnet add package Dock.Avalonia
usageLanguage: xml
usage: |-
  <dock:DockControl Layout="{Binding Layout}"
                    Factory="{Binding Factory}" />
highlights:
  - Documents and tool panes
  - Split and tab layouts
  - Drag/drop and floating windows
  - Model-driven active item state
layers:
  - label: Layout
    detail: Docks, documents, and tools describe the workspace tree.
  - label: Factory
    detail: Application policy creates layouts, commands, windows, and contexts.
  - label: Presenter
    detail: Avalonia controls select templates for each model node.
  - label: Interaction
    detail: Drag, split, float, close, pin, and activate operations update the model.
sourcePath: src/Dock.Avalonia
related:
  - dock/models
  - dock/themes
  - dock/persistence
---

## Avalonia controls present model-driven document and tool layouts with splits, tabs, drag/drop docking, floating windows, and active-item tracking.
