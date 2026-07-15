---
order: 3
project: prodatagrid
name: ProDiagnostics
eyebrow: Runtime inspection
status: Preview
description: In-process diagnostics and transport packages for inspecting data controls, application state, and live runtime behavior.
statement: Make complex controls observable while they are running.
packages:
  - name: ProDiagnostics
    note: Diagnostics surface and Avalonia integration.
  - name: ProDiagnostics.Transport
    note: Transport contracts for remote and embedded diagnostic clients.
install: dotnet add package ProDiagnostics --prerelease
usageLanguage: csharp
usageTitle: Program.cs
usageMark:
  - range: "1-3"
    label: Enable diagnostics
usage: |-
  AppBuilder.Configure<App>()
      .UsePlatformDetect()
      .UseProDiagnostics();
highlights:
  - Live control inspection
  - Transport-separated architecture
  - Developer-oriented overlays
  - Designed for extensible providers
layers:
  - label: Provider
    detail: Runtime adapters expose inspectable state and commands.
  - label: Model
    detail: Diagnostics data is normalized into portable messages.
  - label: Transport
    detail: Clients can remain in-process or connect across a transport boundary.
  - label: Surface
    detail: Developer tools present trees, properties, events, and measurements.
sourcePath: src/ProDiagnostics
related:
  - prodatagrid/data-grid
  - prodatagrid/charting
---

## In-process diagnostics and transport packages for inspecting data controls, application state, and live runtime behavior.
