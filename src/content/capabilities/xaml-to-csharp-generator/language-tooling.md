---
order: 62
project: xaml-to-csharp-generator
name: Language & Preview Tooling
eyebrow: One semantic engine, many editors
status: Active
description: Completion, diagnostics, definitions, references, hover, inlay hints, rename, semantic highlighting, inline C# intelligence, and Avalonia preview power a VS Code extension, LSP tool, and embeddable editor control.
statement: Keep authoring behavior consistent from VS Code to an in-app XAML editor.
packages:
  - name: XamlToCSharpGenerator.LanguageService
    note: Shared semantic language-service core.
  - name: XamlToCSharpGenerator.Editor.Avalonia
    note: AvaloniaEdit-based AXAML editor.
  - name: XamlToCSharpGenerator.LanguageServer.Tool
    note: axsg-lsp global tool.
install: dotnet tool install --global XamlToCSharpGenerator.LanguageServer.Tool
usageLanguage: bash
usage: |-
  dotnet tool install --global XamlToCSharpGenerator.LanguageServer.Tool
  axsg-lsp

  # VS Code releases also include the AXSG extension
  # with source-generated live preview.
highlights:
  - Completion, diagnostics, navigation, and rename
  - Inline C# semantic tooling
  - VS Code and reusable Avalonia editor
  - Source-generated and XamlX preview modes
layers:
  - label: Workspace
    detail: Projects, documents, references, and generated context establish semantics.
  - label: Analyze
    detail: Shared services answer XAML and inline C# language queries.
  - label: Protocol
    detail: LSP carries editor-neutral requests and diagnostics.
  - label: Preview
    detail: A managed host renders saved or live source-generated markup.
sourcePath: src/XamlToCSharpGenerator.LanguageService
docsPath: tools/vscode/axsg-language-server/README.md
related:
  - xaml-to-csharp-generator/sourcegen-compiler
  - xaml-to-csharp-generator/typed-bindings-code
  - xaml-to-csharp-generator/hot-reload-mcp
---

## Completion, diagnostics, definitions, references, hover, inlay hints, rename, semantic highlighting, inline C# intelligence, and Avalonia preview power a VS Code extension, LSP tool, and embeddable editor control.
