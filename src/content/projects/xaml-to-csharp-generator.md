---
order: 33
name: XamlToCSharpGenerator
eyebrow: Source-generated XAML stack
category: Tools
repo: XamlToCSharpGenerator
description: An Avalonia XAML compiler stack with typed bindings, runtime loading, hot reload and design, language services, editor controls, LSP, MCP, preview, and VS Code tooling.
statement: Make XAML compilation, semantics, editing, preview, and automation one coherent source-generated system.
accent: "#b08cff"
showInIndex: false
tier: Maintained
status: Active
packages:
  - name: XamlToCSharpGenerator
    note: Recommended compiler, build, and runtime umbrella package.
  - name: XamlToCSharpGenerator.LanguageService
    note: Reusable XAML and inline C# semantic services.
  - name: XamlToCSharpGenerator.McpServer.Tool
    note: Workspace MCP server global tool.
install: dotnet add package XamlToCSharpGenerator
usageLanguage: csharp
usage: |-
  AppBuilder.Configure<App>()
      .UsePlatformDetect()
      .UseAvaloniaSourceGeneratedXaml();
highlights:
  - Source-generated Avalonia XAML
  - x:Bind and inline C# semantics
  - VS Code, LSP, editor, and preview
  - Hot reload, hot design, and MCP hosts
audience:
  - Avalonia application and framework authors
  - IDE, editor, and language-tool developers
  - Teams building agent-driven XAML workflows
architecture:
  - label: Compiler
    detail: Framework-neutral parsing and semantics feed Avalonia binding and C# emission.
  - label: Runtime
    detail: URI registries, loaders, hot reload, and migration weaving connect generated views to applications.
  - label: Language tools
    detail: One semantic engine powers VS Code, LSP, preview, and an embeddable Avalonia editor.
  - label: Live protocol
    detail: Workspace, runtime, and preview MCP hosts expose structured authoring and design state.
compatibility:
  - label: Avalonia
    value: SourceGen backend
    state: ready
  - label: x:Bind / compiled binding
    value: Typed semantics
    state: ready
  - label: Hot reload / design
    value: Integrated
    state: ready
  - label: VS Code / LSP / MCP
    value: Shipped
    state: ready
proof:
  - value: 18+ packages
    label: compiler-to-tooling stack
  - value: 3 MCP modes
    label: workspace, runtime, preview
  - value: 1 engine
    label: shared XAML semantics
media:
  - src: https://github.com/user-attachments/assets/74951ae9-4866-4911-be11-be890f99dc31
    width: 3494
    height: 1750
    alt: AXSG XAML language and preview tooling
    caption: The AXSG workspace combines source-generated XAML, diagnostics, navigation, inline C# semantics, and live preview.
links:
  - label: Documentation
    href: https://github.com/wieslawsoltes/XamlToCSharpGenerator/tree/main/site/articles
  - label: VS Code tooling
    href: https://github.com/wieslawsoltes/XamlToCSharpGenerator/tree/main/tools/vscode/axsg-language-server
  - label: Samples
    href: https://github.com/wieslawsoltes/XamlToCSharpGenerator/tree/main/samples
limitations: This is an advanced compiler and tooling stack with many integration surfaces. Pin package versions together and validate the SourceGen backend, runtime bootstrap, and editor extension as one tested set.
related:
  - xaml-playground
  - xaml-visual-editor
  - avalonia-development-plugin
  - inspector
archive:
  order: 2
  kind: Maintained
  tags:
    - XAML
    - Roslyn
    - Tooling
---

XamlToCSharpGenerator is a complete source-generated XAML platform rather than a single emitter. Compiler, runtime, semantic tooling, preview, hot reload, hot design, LSP, MCP, editor, and VS Code layers share the same view of Avalonia markup and inline C#.
