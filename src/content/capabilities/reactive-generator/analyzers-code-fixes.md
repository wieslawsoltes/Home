---
order: 57
project: reactive-generator
name: Analyzers & Code Fixes
eyebrow: Convert boilerplate at design time
status: Maintained
description: Roslyn diagnostics recognize convertible property patterns and offer focused or bulk refactorings while validating partial declarations, accessors, generics, and inheritance.
statement: Move existing view models toward generated reactivity with IDE-guided changes.
packages:
  - name: ReactiveGenerator
    note: Analyzer, code-fix provider, generator diagnostics, and snapshot-tested output.
install: dotnet add package ReactiveGenerator
usageLanguage: csharp
usage: |-
  // Analyzer suggestion:
  private string _query;
  public string Query
  {
      get => _query;
      set => this.RaiseAndSetIfChanged(ref _query, value);
  }

  // Code fix:
  [Reactive] public partial string Query { get; set; }
highlights:
  - Convertible property detection
  - File, project, and solution-wide fixes
  - Design-time validation
  - Deterministic generated-source snapshots
layers:
  - label: Inspect
    detail: Semantic analysis recognizes notification and ReactiveUI property patterns.
  - label: Report
    detail: Diagnostics explain declarations that can be generated or must be corrected.
  - label: Rewrite
    detail: Code fixes create partial attributed properties.
  - label: Verify
    detail: Generator and integration tests compare deterministic output and runtime behavior.
sourcePath: ReactiveGenerator/ReactivePropertyAnalyzer.cs
related:
  - reactive-generator/reactive-properties
  - reactive-generator/computed-properties
---

## Roslyn diagnostics recognize convertible property patterns and offer focused or bulk refactorings while validating partial declarations, accessors, generics, and inheritance.
