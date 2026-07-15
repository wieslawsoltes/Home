---
order: 55
project: reactive-generator
name: Reactive Properties
eyebrow: Generated change notification
status: Maintained
description: Class- or property-level attributes generate partial property implementations for standard INotifyPropertyChanged and ReactiveUI ReactiveObject patterns, including cached event arguments and inheritance-aware behavior.
statement: Declare reactive state as properties and let compilation produce the notification plumbing.
packages:
  - name: ReactiveGenerator
    note: Attributes, reactive property generator, build props, and runtime support.
install: dotnet add package ReactiveGenerator
usageLanguage: csharp
usage: |-
  [Reactive]
  public partial class ProfileViewModel : ReactiveObject
  {
      public partial string DisplayName { get; set; }
      public partial bool IsOnline { get; set; }
  }
highlights:
  - INotifyPropertyChanged and ReactiveObject support
  - Class-level or granular property attributes
  - Inheritance and nullable annotations
  - Cached, weak, thread-safe event infrastructure
layers:
  - label: Discover
    detail: The generator finds attributed partial types and properties.
  - label: Analyze
    detail: Type, inheritance, accessor, and notification requirements are validated.
  - label: Emit
    detail: Deterministic partial implementations raise the correct change events.
  - label: Bind
    detail: UI and reactive pipelines consume ordinary strongly typed properties.
sourcePath: ReactiveGenerator/ReactiveGenerator.cs
related:
  - reactive-generator/computed-properties
  - reactive-generator/analyzers-code-fixes
---

## Class- or property-level attributes generate partial property implementations for standard INotifyPropertyChanged and ReactiveUI ReactiveObject patterns, including cached event arguments and inheritance-aware behavior.
