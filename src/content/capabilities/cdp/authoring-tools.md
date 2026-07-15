---
order: 37
project: cdp
name: Authoring Toolkits
eyebrow: Editors, language services, and layout
status: Preview
description: Standalone Markdown, document, graph, split-layout, minimap, XAML compiler, and language-server packages extract reusable tooling from the inspector workspace.
statement: Build serious .NET authoring tools from focused, reusable subsystems.
packages:
  - name: Chrome.DevTools.Markdown.Editor
    note: Interactive Markdown editor canvas.
  - name: Chrome.DevTools.Document.Editor
    note: Rich document editor for office formats.
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
  - Markdown parser, renderer, and editor
  - Office document renderer and editor
  - Node editor and split layouts
  - XAML and C# language tooling
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

## Standalone Markdown, document, graph, split-layout, minimap, XAML compiler, and language-server packages extract reusable tooling from the inspector workspace.
