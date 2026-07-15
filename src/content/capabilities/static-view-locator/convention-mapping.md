---
order: 58
project: static-view-locator
name: Convention Mapping
eyebrow: Compile-time view factories
status: Maintained
description: The source generator maps ViewModel namespaces and suffixes to Avalonia views and emits direct Type-to-factory lookup tables without runtime reflection.
statement: Make view discovery a compiler result instead of a runtime search.
packages:
  - name: StaticViewLocator
    note: Generator, StaticViewLocator attribute, and emitted factory tables.
install: dotnet add package StaticViewLocator
usageLanguage: csharp
usage: |-
  [StaticViewLocator]
  public partial class ViewLocator : IDataTemplate
  {
      public Control? Build(object? data) => data is null
          ? null
          : TryGetFactory(data.GetType())?.Invoke();
      public bool Match(object? data) => data is ViewModelBase;
  }
highlights:
  - ViewModels-to-Views namespace replacement
  - ViewModel-to-View suffix convention
  - Direct control factories
  - Missing-view metadata without blocking fallback
layers:
  - label: Scan
    detail: Compilation symbols identify eligible view models and Avalonia views.
  - label: Transform
    detail: Namespace, suffix, generic, and interface rules derive candidate view names.
  - label: Resolve
    detail: Accessible matches become direct factories; misses become diagnostic metadata.
  - label: Emit
    detail: The partial locator receives static lookup tables and helpers.
sourcePath: StaticViewLocator/StaticViewLocatorGenerator.cs
related:
  - static-view-locator/fallback-configuration
---

## The source generator maps ViewModel namespaces and suffixes to Avalonia views and emits direct Type-to-factory lookup tables without runtime reflection.
