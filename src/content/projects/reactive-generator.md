---
order: 31
name: ReactiveGenerator
eyebrow: Generated reactive state
category: Tools
repo: ReactiveGenerator
description: A Roslyn source generator, analyzer, and code-fix package for reactive properties, computed observable properties, and change notification.
statement: Keep reactive view models expressive while generated code carries the ceremony.
accent: "#9b8cff"
showInIndex: false
tier: Maintained
status: Maintained
packages:
  - name: ReactiveGenerator
    note: Source generator, attributes, analyzer, code fixes, and build integration.
install: dotnet add package ReactiveGenerator
usageLanguage: csharp
usage: |-
  [Reactive]
  public partial class SearchViewModel : ReactiveObject
  {
      public partial string SearchTerm { get; set; }

      [ObservableAsProperty]
      public partial bool HasQuery { get; }
  }
highlights:
  - INotifyPropertyChanged and ReactiveUI patterns
  - ObservableAsProperty generation
  - Analyzers and bulk code fixes
  - Deterministic design-time output
audience:
  - ReactiveUI and MVVM application teams
  - Codebases migrating hand-written notification properties
  - Roslyn users studying production source generation
architecture:
  - label: Attributes
    detail: Class and property annotations declare reactive and computed intent.
  - label: Analysis
    detail: Roslyn validates partial declarations, inheritance, accessors, generics, and nullability.
  - label: Generation
    detail: Incremental generators emit notification, helpers, and cached event infrastructure.
  - label: Migration
    detail: Analyzers and code fixes convert existing boilerplate at file, project, or solution scope.
compatibility:
  - label: .NET
    value: 9.0+
    state: ready
  - label: C#
    value: 13 partial properties
    state: ready
  - label: ReactiveUI
    value: Supported
    state: ready
  - label: INotifyPropertyChanged
    value: Supported
    state: ready
proof:
  - value: 3 lanes
    label: generate, analyze, fix
  - value: 2 models
    label: standard and ReactiveUI
  - value: Deterministic
    label: snapshot-tested output
media:
  - src: https://opengraph.githubassets.com/portfolio-long-tail/wieslawsoltes/ReactiveGenerator
    alt: ReactiveGenerator GitHub repository preview
    caption: The repository includes generators, analyzers, code fixes, demos, integration tests, and verified generated-source snapshots.
links:
  - label: Usage guide
    href: https://github.com/wieslawsoltes/ReactiveGenerator#quick-start-samples
  - label: Demo
    href: https://github.com/wieslawsoltes/ReactiveGenerator/tree/main/ReactiveGeneratorDemo
limitations: The modern partial-property workflow requires current C# language support. Types and generated properties must be partial, and custom implementations should opt out explicitly.
related:
  - static-view-locator
  - xaml-to-csharp-generator
  - xaml-behaviors
archive:
  order: 0
  kind: Maintained
  tags:
    - Roslyn
    - Reactive
    - Source generation
---

ReactiveGenerator moves property notification, ReactiveUI helpers, and migration diagnostics into a Roslyn pipeline. Application code keeps readable partial properties while analyzers, code fixes, and deterministic generation provide the repetitive implementation.
