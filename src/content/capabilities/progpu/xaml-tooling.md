---
order: 93
project: progpu
name: Roslyn-first XAML
eyebrow: Compiler, source generation, and workspaces
status: Preview
description: Lossless syntax, schema, diagnostics, binding, construction IR, Roslyn emission, source generation, workspace editing, project watch, reverse projection, preview, and hot reload form a complete XAML toolchain.
statement: Make XAML compilation and editing one versioned, inspectable pipeline.
packages:
  - name: ProGPU.Xaml
    note: Syntax, schema, binding, diagnostics, editing, formatting, serialization, and construction IR.
  - name: ProGPU.Xaml.Roslyn
    note: Roslyn symbol type system and structured C# emission.
  - name: ProGPU.Xaml.SourceGenerator
    note: Incremental compiler and transitive MSBuild integration.
  - name: ProGPU.Xaml.Workspaces
    note: Workspace editing, project watch, previews, reverse projection, and metadata edit sessions.
  - name: ProGPU.Xaml.Cli
    note: Standalone compiler and Roslyn/MSBuild workspace command-line tool.
install: dotnet add package ProGPU.Xaml.SourceGenerator --prerelease
usageLanguage: xml
usage: |-
  <Page
      x:Class="Sample.MainPage"
      x:DataType="vm:MainViewModel">
    <TextBlock Text="{x:Bind Title}" />
  </Page>
highlights:
  - Lossless syntax, schema, and diagnostics
  - Typed bindings and construction IR
  - Incremental Roslyn source generation
  - Project watch, reverse projection, preview, and hot reload
layers:
  - label: Parse
    detail: A lossless lexer and parser preserve syntax, markup extensions, names, resources, and source coordinates.
  - label: Bind
    detail: Schema and Roslyn symbols resolve types, members, resources, data contexts, and typed binding paths.
  - label: Generate
    detail: Validated construction IR emits deterministic C# through incremental source generation or the CLI.
  - label: Round trip
    detail: Workspace services watch projects, project metadata, preview changes, reverse semantic edits, and coordinate hot reload.
sourcePath: src/ProGPU.Xaml
related:
  - progpu/portable-ui
  - progpu/framework-bridges
---

## One semantic XAML model powers compilation, diagnostics, editing, preview, reverse projection, and hot reload instead of treating each tool as a separate parser.
