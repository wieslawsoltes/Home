---
order: 22
project: dock
name: Advanced Controls & Diagnostics
eyebrow: Scale complex workspaces
status: Preview
description: Recycling, deferred content, proportional layout, markup extensions, settings, and diagnostic packages address large and highly dynamic Dock applications.
statement: Tune lifetime, layout, and observability when a workspace grows.
packages:
  - name: Dock.Controls.Recycling
    note: Recycling content controls for docked views.
  - name: Dock.Controls.DeferredContentControl
    note: Deferred content creation.
  - name: Dock.Controls.ProportionalStackPanel
    note: Proportional split layout panel.
  - name: Dock.Avalonia.Diagnostics
    note: Dock runtime diagnostics.
  - name: Dock.Settings
    note: Workspace settings infrastructure.
install: dotnet add package Dock.Controls.Recycling --prerelease
usageLanguage: xml
usage: |-
  <dock:RecyclingContentControl
      Content="{Binding ActiveDockable}"
      ContentTemplate="{Binding DockableTemplate}" />
highlights:
  - Deferred view creation
  - Content recycling
  - Proportional layout
  - Runtime diagnostics and settings
layers:
  - label: Observe
    detail: Diagnostics identify model, presenter, and lifecycle behavior.
  - label: Defer
    detail: Content can be created only when a dockable becomes visible.
  - label: Recycle
    detail: Reusable hosts reduce churn in frequently switched workspaces.
  - label: Tune
    detail: Panels and settings refine sizing and application policy.
sourcePath: src/Dock.Controls.Recycling
related:
  - dock/workspace
  - dock/models
  - dock/themes
---

## Recycling, deferred content, proportional layout, markup extensions, settings, and diagnostic packages address large and highly dynamic Dock applications.
