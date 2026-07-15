---
order: 47
project: nodeeditor
name: Node Editor Control
eyebrow: Graph editing surface
status: Stable
description: A templatable Avalonia control and portable model for nodes, sockets, connectors, selection, viewport interaction, and graph editing.
statement: Build visual graph tools without hard-coding the domain into the canvas.
packages:
  - name: NodeEditorAvalonia
    note: Avalonia node editor control and presenters.
  - name: NodeEditorAvalonia.Model
    note: Portable graph model and contracts.
install: |-
  dotnet add package NodeEditorAvalonia
  dotnet add package NodeEditorAvalonia.Model
usageLanguage: xml
usage: |-
  <nodes:NodeEditor Nodes="{Binding Nodes}"
                    Connections="{Binding Connections}"
                    SelectedItems="{Binding Selection}" />
highlights:
  - Nodes, ports, and connectors
  - Fully templatable presentation
  - Selection and viewport interaction
  - Portable graph model
layers:
  - label: Model
    detail: Nodes, sockets, and connections describe graph structure.
  - label: Template
    detail: XAML controls how every graph element looks.
  - label: Interaction
    detail: Pointer and keyboard workflows create, select, move, and connect.
  - label: Domain
    detail: Applications attach their own semantics and evaluation.
sourcePath: src/NodeEditorAvalonia
related:
  - nodeeditor/mvvm
  - nodeeditor/logiclab
---

## A templatable Avalonia control and portable model for nodes, sockets, connectors, selection, viewport interaction, and graph editing.
