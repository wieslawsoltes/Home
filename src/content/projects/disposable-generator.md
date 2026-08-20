---
order: 44
name: DisposableGenerator
eyebrow: Explicit lifetime source generation
category: Tools
repo: DisposableGenerator
description: An incremental C# source generator for explicit IDisposable and IAsyncDisposable ownership, inheritance-safe cleanup, dynamic registration, diagnostics, and optional unmanaged finalization.
statement: Keep ownership visible in handwritten code and generate the repetitive lifetime machinery.
accent: "#ffa66f"
tier: Maintained
status: Active
packages:
  - name: DisposableGenerator
    note: Compile-time-only generator, attributes, configuration, and ownership diagnostics.
install: dotnet add package DisposableGenerator
usageLanguage: csharp
usage: |-
  [GenerateDisposable]
  public sealed partial class EditorViewModel
  {
      [DisposeMember]
      private readonly IDisposable _subscription;

      [BorrowedMember]
      private readonly IDisposable _service;
  }
highlights:
  - Explicit owned and borrowed members
  - Sync, async, and inheritance-safe disposal
  - Dynamic lifetime registration
  - Diagnostics, hooks, and configurable ordering
audience:
  - .NET libraries with non-trivial resource ownership
  - MVVM applications managing subscriptions and child view models
  - Native and interop code that needs deterministic cleanup contracts
architecture:
  - label: Declare
    detail: Attributes record owned members, borrowed members, and the required sync or async contract.
  - label: Analyze
    detail: Diagnostics reject conflicting lifetimes, unsafe inheritance, and unsupported finalizer shapes.
  - label: Generate
    detail: Thread-safe entry points, hooks, ordering, registration, and base chaining are emitted at compile time.
  - label: Dispose
    detail: Idempotent cleanup follows the selected failure policy and suppresses finalization when appropriate.
compatibility:
  - label: .NET
    value: 8.0–10.0 consumers
    state: ready
  - label: IDisposable
    value: Generated
    state: ready
  - label: IAsyncDisposable
    value: Optional
    state: ready
  - label: NativeAOT
    value: Compile-time only
    state: ready
proof:
  - value: "26"
    label: ownership diagnostics
  - value: 3 OS × 3 TFMs
    label: package integration matrix
  - value: Zero
    label: runtime dependencies
media:
  - src: https://opengraph.githubassets.com/portfolio-2026/wieslawsoltes/DisposableGenerator
    width: 1200
    height: 600
    alt: DisposableGenerator GitHub repository preview
    caption: The repository includes generator sources, ownership guidance, a complete diagnostic catalog, integration consumers, and Avalonia/ReactiveUI samples.
links:
  - label: Design rationale
    href: https://github.com/wieslawsoltes/DisposableGenerator/blob/main/docs/design-rationale.md
  - label: Migration guide
    href: https://github.com/wieslawsoltes/DisposableGenerator/blob/main/docs/migration.md
limitations: Ownership is never inferred from a member type. Types with handwritten or non-generated base disposal contracts require an explicit integration boundary, and raw unmanaged resources still demand careful finalizer-safe code.
related:
  - promvvm
  - reactive-generator
  - static-view-locator
---

DisposableGenerator separates the lifetime decision from its mechanical implementation. The developer marks what is owned, what is borrowed, and whether cleanup is synchronous or asynchronous; generated code then makes ordering, concurrency, inheritance, and failure behavior consistent.
