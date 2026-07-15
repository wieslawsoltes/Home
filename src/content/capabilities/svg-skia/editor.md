---
order: 16
project: svg-skia
name: SVG Editor
eyebrow: Reusable authoring stack
status: Preview
description: Editor core, SVG mutation services, Skia interaction, Avalonia views, and workspace composition form a reusable visual SVG authoring system.
statement: Inspect and reshape the SVG document through a modular editor stack.
packages:
  - name: Svg.Editor.Core
    note: Editor sessions, state, commands, and selection.
  - name: Svg.Editor.Svg
    note: SVG document mutation services.
  - name: Svg.Editor.Skia
    note: Rendering, hit testing, and interaction.
  - name: Svg.Editor.Avalonia
    note: Reusable Avalonia editor views.
  - name: Svg.Editor.Skia.Avalonia
    note: Composed Avalonia editor workspace.
install: dotnet add package Svg.Editor.Skia.Avalonia --prerelease
usageLanguage: xml
usage: |-
  <editor:SvgEditorView
      Document="{Binding Document}"
      SelectedElement="{Binding Selection}" />
highlights:
  - Command-based document mutation
  - Visual selection and hit testing
  - Reusable Avalonia views
  - Layered editor architecture
layers:
  - label: Session
    detail: Editor state, selection, history, and commands are framework neutral.
  - label: Document
    detail: Mutation services edit the SVG model without string surgery.
  - label: Interaction
    detail: Skia helpers map geometry to hit tests and handles.
  - label: Workspace
    detail: Avalonia views compose canvas, tools, properties, and structure.
sourcePath: src/Svg.Editor.Core
related:
  - svg-skia/renderer
  - svg-skia/avalonia-controls
  - svg-skia/scene-animation
---

## Editor core, SVG mutation services, Skia interaction, Avalonia views, and workspace composition form a reusable visual SVG authoring system.
