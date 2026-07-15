---
order: 60
project: xaml-to-csharp-generator
name: SourceGen XAML Compiler
eyebrow: XAML becomes inspectable C#
status: Active
description: A Roslyn incremental pipeline parses, binds, validates, and emits Avalonia XAML as generated C#, with framework-neutral compiler layers and an Avalonia semantic adapter.
statement: Bring XAML compilation into the source-generator model and make its output visible to normal tooling.
packages:
  - name: XamlToCSharpGenerator
    note: Recommended build and runtime integration.
  - name: XamlToCSharpGenerator.Compiler
    note: Incremental host orchestration.
  - name: XamlToCSharpGenerator.Avalonia
    note: Avalonia binder and emitter.
install: dotnet add package XamlToCSharpGenerator
usageLanguage: xml
usage: |-
  <PropertyGroup>
    <AvaloniaXamlCompilerBackend>SourceGen</AvaloniaXamlCompilerBackend>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="XamlToCSharpGenerator" Version="VERSION" />
  </ItemGroup>
highlights:
  - Incremental Roslyn generation
  - Framework-neutral semantic core
  - Avalonia binder and emitter
  - Runtime URI loading and migration weaving
layers:
  - label: Parse
    detail: Immutable models preserve XAML structure and source locations.
  - label: Bind
    detail: Framework semantics resolve types, members, markup, resources, and bindings.
  - label: Emit
    detail: Generated C# constructs and initializes the object graph.
  - label: Load
    detail: Build and runtime registries connect generated factories to application URIs.
sourcePath: src/XamlToCSharpGenerator.Compiler
docsPath: README.md
related:
  - xaml-to-csharp-generator/typed-bindings-code
  - xaml-to-csharp-generator/language-tooling
  - xaml-to-csharp-generator/hot-reload-mcp
---

## A Roslyn incremental pipeline parses, binds, validates, and emits Avalonia XAML as generated C#, with framework-neutral compiler layers and an Avalonia semantic adapter.
