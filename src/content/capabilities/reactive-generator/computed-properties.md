---
order: 56
project: reactive-generator
name: Computed Observable Properties
eyebrow: ObservableAsProperty without ceremony
status: Maintained
description: ObservableAsProperty attributes generate read-only computed properties and helpers, while generated WhenAny methods make reactive dependency pipelines concise and type-safe.
statement: Turn observable calculations into normal readable properties.
packages:
  - name: ReactiveGenerator
    note: ObservableAsPropertyHelper and WhenAnyValue source generation.
install: dotnet add package ReactiveGenerator
usageLanguage: csharp
usage: |-
  [ObservableAsProperty]
  public partial string FullName { get; }

  public ProfileViewModel() =>
      this.WhenAnyFirstName()
          .CombineLatest(this.WhenAnyLastName())
          .Select(x => $"{x.First} {x.Second}")
          .ToProperty(this, x => x.FullName);
highlights:
  - Generated ObservableAsPropertyHelper storage
  - Generated WhenAny extension methods
  - Computed validation and collection state
  - ReactiveUI-compatible pipelines
layers:
  - label: Declare
    detail: A read-only partial property marks the computed output.
  - label: Generate
    detail: The helper field, getter, and typed observable helpers join the type.
  - label: Compose
    detail: Reactive operators calculate values from source properties.
  - label: Notify
    detail: The generated property participates in normal binding updates.
sourcePath: ReactiveGenerator/ObservableAsPropertyHelperGenerator.cs
related:
  - reactive-generator/reactive-properties
  - reactive-generator/analyzers-code-fixes
---

## ObservableAsProperty attributes generate read-only computed properties and helpers, while generated WhenAny methods make reactive dependency pipelines concise and type-safe.
