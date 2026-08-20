---
order: 37
project: cdp
name: Authoring Toolkits
eyebrow: Editors, language services, and layout
status: Preview
description: Standalone HTML, Markdown, document, PDF, graph, split-layout, minimap, XAML compiler, JavaScript/TypeScript language-service, and source-debugger packages extract reusable tooling from the inspector workspace.
statement: Build serious .NET authoring tools from focused, reusable subsystems.
packages:
  - name: Chrome.DevTools.Markdown.Editor
    note: Interactive Markdown editor canvas.
  - name: Chrome.DevTools.Document.Editor
    note: Rich document editor for office formats.
  - name: Chrome.DevTools.Pdf.Editor
    note: Interactive PDF editor canvas built with PdfPig and SkiaSharp.
  - name: Chrome.DevTools.Html.Renderer
    note: Low-allocation HTML/CSS parsing, layout, and SkiaSharp rendering.
  - name: Chrome.DevTools.Editor.Nodes
    note: Generic graph node editor.
  - name: Chrome.DevTools.Editor.Splits
    note: Dynamic binary split layout.
  - name: Xaml.Compiler
    note: Lossless XAML AST and mutation engine.
install: dotnet add package Chrome.DevTools.Markdown.Editor --prerelease
usageLanguage: xml
usage: |-
  <markdown:MarkdownEditor
      Document="{Binding Document}"
      Selection="{Binding Selection}" />
highlights:
  - HTML, Markdown, document, and PDF surfaces
  - JavaScript and TypeScript language services
  - Node editor and split layouts
  - XAML, C#, V8, source-map, and WebAssembly tooling
layers:
  - label: Model
    detail: Purpose-built ASTs preserve document or language structure.
  - label: Engine
    detail: Layout, render, parse, or graph services remain UI-independent.
  - label: Control
    detail: Avalonia surfaces add selection, caret, navigation, and editing.
  - label: Workspace
    detail: Split, minimap, and language services compose full tools.
sourcePath: src/CDP.Markdown.Editor
related:
  - cdp/test-studio
  - cdp/inspector
  - cdp/automation
---

## Standalone HTML, Markdown, document, PDF, graph, split-layout, minimap, XAML, JavaScript, TypeScript, and debugger packages extract reusable tooling from the inspector workspace.
