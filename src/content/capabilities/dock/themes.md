---
order: 20
project: dock
name: Themes
eyebrow: Fluent, Simple, and browser styling
status: Stable
description: Dedicated theme packages supply complete control themes, resources, indicators, floating windows, and density choices for different application shells.
statement: Change the workspace language without changing its layout model.
packages:
  - name: Dock.Avalonia.Themes.Fluent
    note: Fluent Dock theme.
  - name: Dock.Avalonia.Themes.Simple
    note: Simple Avalonia theme integration.
  - name: Dock.Avalonia.Themes.Browser
    note: Browser-oriented Dock theme.
install: dotnet add package Dock.Avalonia.Themes.Fluent
usageLanguage: xml
usage: |-
  <Application.Styles>
    <FluentTheme />
    <dock:DockFluentTheme />
  </Application.Styles>
highlights:
  - Complete control themes
  - Fluent and Simple variants
  - Drag indicator styling
  - Application-level resource composition
layers:
  - label: Tokens
    detail: Theme resources define color, spacing, typography, and state.
  - label: Controls
    detail: Templates cover tabs, presenters, splitters, indicators, and windows.
  - label: Host
    detail: The application includes one Dock theme beside its Avalonia theme.
  - label: Override
    detail: Normal resource and selector rules support product-specific styling.
sourcePath: src/Dock.Avalonia.Themes.Fluent
related:
  - dock/workspace
  - dock/advanced-controls
---

## Dedicated theme packages supply complete control themes, resources, indicators, floating windows, and density choices for different application shells.
