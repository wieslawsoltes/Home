---
order: 80
project: theme-manager-avalonia
name: Theme Variant Switching
eyebrow: Application-wide light and dark state
status: Maintained
description: Both managers translate a compact numeric selection into Application.RequestedThemeVariant, switching the entire application between Avalonia light and dark variants at runtime.
statement: Change application appearance through one small runtime operation.
packages:
  - name: ThemeManager
    note: Runtime light and dark RequestedThemeVariant switching.
install: dotnet add package ThemeManager
usageLanguage: csharp
usage: |-
  IThemeManager themes = new FluentThemeManager();
  themes.Initialize(Application.Current!);

  themes.Switch(0); // ThemeVariant.Light
  themes.Switch(1); // ThemeVariant.Dark
highlights:
  - Application.RequestedThemeVariant integration
  - Light and dark selection
  - Same behavior for Fluent and Simple
  - No per-window theme plumbing
layers:
  - label: Select
    detail: The application maps a setting or command to the supported index.
  - label: Switch
    detail: The manager resolves light or dark ThemeVariant.
  - label: Request
    detail: Application.RequestedThemeVariant changes once for the app.
  - label: Propagate
    detail: Avalonia updates resources and controls throughout the visual tree.
sourcePath: src/ThemeManager
related:
  - theme-manager-avalonia/theme-hosts
---

## Both managers translate a compact numeric selection into Application.RequestedThemeVariant, switching the entire application between Avalonia light and dark variants at runtime.
