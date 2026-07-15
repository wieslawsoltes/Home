---
order: 32
name: StaticViewLocator
eyebrow: Reflection-free Avalonia views
category: Avalonia
repo: StaticViewLocator
description: A compile-time Avalonia view locator with convention mapping, generic, base-class, and interface fallbacks, and configurable MSBuild rules.
statement: Resolve view models to views at compile time and keep runtime discovery AOT-friendly.
accent: "#6fc9ff"
showInIndex: false
tier: Maintained
status: Maintained
packages:
  - name: StaticViewLocator
    note: Source generator, attribute, and transitive MSBuild configuration.
install: dotnet add package StaticViewLocator
usageLanguage: csharp
usage: |-
  [StaticViewLocator]
  public partial class ViewLocator : IDataTemplate
  {
      public Control? Build(object? data) =>
          data is null ? null : TryGetFactory(data.GetType())?.Invoke();
  }
highlights:
  - Compile-time factory tables
  - Generic and inheritance fallback
  - Configurable naming conventions
  - Optional referenced-assembly scanning
audience:
  - Avalonia MVVM applications
  - NativeAOT-conscious desktop teams
  - Modular applications with inherited or interface view models
architecture:
  - label: Discovery
    detail: The generator scans eligible view models and accessible Avalonia view types.
  - label: Convention
    detail: Namespace, suffix, generic, and interface transforms derive candidate views.
  - label: Index
    detail: Resolved types become static factories; misses remain useful fallback metadata.
  - label: Lookup
    detail: Exact, generic, base, and interface helpers resolve runtime view-model types.
compatibility:
  - label: Avalonia
    value: IDataTemplate
    state: ready
  - label: NativeAOT
    value: Reflection-free path
    state: ready
  - label: Referenced assemblies
    value: Opt-in scan
    state: ready
  - label: Open generics
    value: Supported
    state: ready
proof:
  - value: 4 steps
    label: exact to interface fallback
  - value: MSBuild
    label: compiler-visible configuration
  - value: Static
    label: direct view factories
media:
  - src: https://opengraph.githubassets.com/portfolio-long-tail/wieslawsoltes/StaticViewLocator
    alt: StaticViewLocator GitHub repository preview
    caption: The repository pairs the generator with runtime, snapshot, generic, inheritance, and interface-resolution tests.
links:
  - label: Repository
    href: https://github.com/wieslawsoltes/StaticViewLocator
  - label: Issues
    href: https://github.com/wieslawsoltes/StaticViewLocator/issues
  - label: Releases
    href: https://github.com/wieslawsoltes/StaticViewLocator/releases
limitations: Candidate discovery starts from ViewModel naming unless configuration changes the convention. Referenced internal types also require explicit opt-in and InternalsVisibleTo access.
related:
  - reactive-generator
  - xaml-to-csharp-generator
  - avalonia-development-plugin
archive:
  order: 1
  kind: Maintained
  tags:
    - Avalonia
    - AOT
    - Source generation
---

StaticViewLocator resolves Avalonia view-model-to-view conventions during compilation and emits direct factories plus deterministic fallback helpers. It removes reflection-heavy discovery while still supporting generic, inherited, interface-based, and modular application models.
