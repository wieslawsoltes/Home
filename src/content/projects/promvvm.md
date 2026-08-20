---
order: 43
name: ProMvvm
eyebrow: AOT-first property observation
category: Frameworks
repo: ProMvvm
description: A high-performance .NET MVVM property-observation library with generated typed paths, nested rewiring, ReactiveUI-compatible WhenAnyValue APIs, and no required reactive runtime.
statement: Observe changing view-model state without making reflection the default architecture.
accent: "#72d6ff"
tier: Maintained
status: Active
packages:
  - name: ProMvvm
    note: Runtime, typed property paths, observation sinks, adapters, and the automatically installed generator.
  - name: ProMvvm.SourceGenerators
    note: Compile-time generation of reflection-free property descriptors.
install: dotnet add package ProMvvm
usageLanguage: csharp
usage: |-
  [GeneratePropertyPaths]
  public partial class SearchViewModel : ObservableObject
  {
      [ObservableProperty]
      private string _searchText = string.Empty;
  }

  using var subscription = viewModel
      .WhenAnyValue(SearchViewModelPropertyPaths.SearchText)
      .Subscribe(Console.WriteLine);
highlights:
  - Generated, reflection-free property paths
  - Nested observation and automatic rewiring
  - ReactiveUI-compatible migration APIs
  - Trim-safe and NativeAOT-safe typed path
audience:
  - MVVM applications that need lightweight observable property streams
  - ReactiveUI or CommunityToolkit.Mvvm teams adopting NativeAOT
  - Library authors avoiding global service locators and runtime reflection
architecture:
  - label: Describe
    detail: Generated or handwritten property paths capture strongly typed getters and notification names.
  - label: Subscribe
    detail: Cold observable sinks attach directly to INotifyPropertyChanged or an explicit local adapter.
  - label: Rewire
    detail: Nested paths detach and reconnect when an intermediate object changes.
  - label: Compose
    detail: BCL IObservable results work directly or compose with optional System.Reactive operators.
compatibility:
  - label: .NET
    value: "10.0"
    state: ready
  - label: NativeAOT / trimming
    value: Typed APIs
    state: ready
  - label: ReactiveUI 24
    value: Models + migration API
    state: ready
  - label: CommunityToolkit.Mvvm
    value: Generated properties
    state: ready
proof:
  - value: 12 values
    label: multi-source overload arity
  - value: Zero
    label: required reactive dependencies
  - value: Typed
    label: NativeAOT observation path
media:
  - src: https://opengraph.githubassets.com/portfolio-2026/wieslawsoltes/ProMvvm
    width: 1200
    height: 600
    alt: ProMvvm GitHub repository preview
    caption: ProMvvm packages the runtime, generator, samples, benchmarks, architecture notes, and release gates for AOT-first property observation.
links:
  - label: Architecture
    href: https://github.com/wieslawsoltes/ProMvvm/blob/main/docs/ARCHITECTURE.md
  - label: Samples
    href: https://github.com/wieslawsoltes/ProMvvm/tree/main/samples
limitations: ProMvvm is deliberately focused on property observation and WhenAnyValue workflows; it does not replace commands, routing, activation, binding, or the rest of a full MVVM framework.
related:
  - reactive-generator
  - static-view-locator
  - prodatagrid
---

ProMvvm makes typed property descriptors the fast path while retaining familiar expression APIs for incremental migration. Each subscription owns its notification chain, current-value emission, equality policy, and cleanup without requiring a global provider registry.
