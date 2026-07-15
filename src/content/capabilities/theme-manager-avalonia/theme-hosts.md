---
order: 79
project: theme-manager-avalonia
name: Fluent & Simple Theme Hosts
eyebrow: Initialize the built-in theme family
status: Maintained
description: FluentThemeManager and SimpleThemeManager implement one IThemeManager contract and insert the corresponding Avalonia theme into the application style collection.
statement: Select the built-in theme family without coupling application startup to its concrete type.
packages:
  - name: ThemeManager
    note: IThemeManager plus FluentThemeManager and SimpleThemeManager.
install: dotnet add package ThemeManager
usageLanguage: csharp
usage: |-
  IThemeManager themes = new FluentThemeManager();
  themes.Initialize(this);

  // Or use SimpleThemeManager for Avalonia SimpleTheme.
highlights:
  - Shared IThemeManager contract
  - FluentTheme initialization
  - SimpleTheme initialization
  - Application style insertion
layers:
  - label: Choose
    detail: Application composition selects Fluent or Simple implementation.
  - label: Create
    detail: The manager owns the matching Avalonia theme instance.
  - label: Initialize
    detail: The theme is inserted at the front of Application.Styles.
  - label: Use
    detail: Normal Avalonia resources and controls consume the active family.
sourcePath: src/ThemeManager
related:
  - theme-manager-avalonia/theme-switching
---

## FluentThemeManager and SimpleThemeManager implement one IThemeManager contract and insert the corresponding Avalonia theme into the application style collection.
