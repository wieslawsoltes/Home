---
order: 44
project: protranslate
name: XAML Framework Adapters
eyebrow: Five UI stacks
status: Active
description: Avalonia, WPF, WinUI, Uno Platform, and .NET MAUI packages map dynamic translation and culture state into each framework’s binding and XAML model.
statement: Share translation policy while keeping framework-native markup.
packages:
  - name: ProTranslate.Avalonia
    note: Avalonia XAML adapter.
  - name: ProTranslate.Wpf
    note: WPF XAML adapter.
  - name: ProTranslate.WinUI
    note: WinUI XAML adapter.
  - name: ProTranslate.Uno
    note: Uno Platform XAML adapter.
  - name: ProTranslate.Maui
    note: .NET MAUI XAML adapter.
install: dotnet add package ProTranslate.Avalonia
usageLanguage: xml
usage: <TextBlock Text="{pt:Translate Shell.Title}" />
highlights:
  - Avalonia and WPF
  - WinUI and Uno Platform
  - .NET MAUI
  - Live culture and flow-direction updates
layers:
  - label: Core
    detail: One service resolves cultures, keys, and formatted values.
  - label: Adapter
    detail: Each package maps notifications into its property and binding system.
  - label: Markup
    detail: Framework-native markup extensions or helpers keep XAML concise.
  - label: View
    detail: Visible content and flow direction update without rebuilding the application.
sourcePath: src/ProTranslate.Avalonia
related:
  - protranslate/globalization-core
  - protranslate/formats-resources
  - protranslate/compile-time-tooling
---

## Avalonia, WPF, WinUI, Uno Platform, and .NET MAUI packages map dynamic translation and culture state into each framework’s binding and XAML model.
