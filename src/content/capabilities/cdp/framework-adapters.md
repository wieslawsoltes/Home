---
order: 34
project: cdp
name: Framework Adapters
eyebrow: Native UI inspection
status: Preview
description: Avalonia, Uno Platform, WPF, and WinUI adapters map visual trees, properties, styles, input, screenshots, and runtime state into CDP domains.
statement: Inspect native XAML applications with browser-grade tooling concepts.
packages:
  - name: Chrome.DevTools.Avalonia
    note: Avalonia diagnostics server adapter.
  - name: Chrome.DevTools.Uno
    note: Uno Platform diagnostics server adapter.
  - name: Chrome.DevTools.Wpf
    note: WPF diagnostics server adapter.
  - name: Chrome.DevTools.WinUI
    note: WinUI diagnostics server adapter.
install: dotnet add package Chrome.DevTools.Avalonia --prerelease
usageLanguage: csharp
usage: |-
  AppBuilder.Configure<App>()
      .UsePlatformDetect()
      .UseCdpDiagnostics(options => options.Port = 9222);
highlights:
  - Avalonia visual and logical trees
  - Uno, WPF, and WinUI adapters
  - Property and style inspection
  - Input, overlays, and screenshots
layers:
  - label: Tree
    detail: Native elements receive stable protocol identities and hierarchy.
  - label: Property
    detail: Framework properties, bindings, styles, and resources map to inspectable data.
  - label: Action
    detail: Input, highlighting, edits, and captures call native services.
  - label: Protocol
    detail: Results return through standard CDP commands and events.
sourcePath: src/Avalonia.Diagnostics.Cdp
related:
  - cdp/testing-ci
  - cdp/test-studio
  - cdp/protocol-server
---

## Avalonia, Uno Platform, WPF, and WinUI adapters map visual trees, properties, styles, input, screenshots, and runtime state into CDP domains.
