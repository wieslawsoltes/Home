---
order: 61
project: xaml-to-csharp-generator
name: Typed Bindings & Inline C#
eyebrow: Semantic expressions inside markup
status: Active
description: Compiled binding, x:Bind, C# expressions, interpolation, inline code blocks, event lambdas, bind-back, and dependency analysis share Roslyn-backed semantics.
statement: Let markup express typed application logic without falling back to opaque runtime reflection.
packages:
  - name: XamlToCSharpGenerator.ExpressionSemantics
    note: Roslyn expression rewriting and dependency analysis.
  - name: XamlToCSharpGenerator.MiniLanguageParsing
    note: Low-allocation binding and markup parsers.
install: dotnet add package XamlToCSharpGenerator
usageLanguage: xml
usage: |-
  <TextBlock Text="{x:Bind ViewModel.DisplayName}" />
  <Button Click="{CSharp Code=ViewModel.Save()}" Content="Save" />
  <TextBlock>
    <CSharp><![CDATA[$"{ViewModel.Count:N0} items"]]></CSharp>
  </TextBlock>
highlights:
  - Typed x:Bind with bind-back
  - C# expression and interpolation forms
  - Inline event handlers and code blocks
  - Roslyn dependency and type analysis
layers:
  - label: Extract
    detail: Markup extensions and code blocks preserve expression source.
  - label: Analyze
    detail: Roslyn resolves types, members, dependencies, conversions, and diagnostics.
  - label: Generate
    detail: Typed getters, setters, handlers, and lifecycle helpers join emitted code.
  - label: Update
    detail: Dependency paths drive efficient binding refresh and bind-back.
sourcePath: src/XamlToCSharpGenerator.ExpressionSemantics
docsPath: site/articles/xaml/xbind.md
related:
  - xaml-to-csharp-generator/sourcegen-compiler
  - xaml-to-csharp-generator/language-tooling
---

## Compiled binding, x:Bind, C# expressions, interpolation, inline code blocks, event lambdas, bind-back, and dependency analysis share Roslyn-backed semantics.
