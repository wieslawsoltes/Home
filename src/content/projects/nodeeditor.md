---
order: 20
name: NodeEditor
eyebrow: Visual graph authoring
category: Controls
repo: NodeEditor
description: A templatable Avalonia node-and-connector editor with portable models, MVVM integrations, graph logic, and browser-ready samples.
statement: Build visual programming tools without rebuilding graph interaction from scratch.
accent: "#d69bff"
tier: Maintained
status: Active
packages:
  - name: NodeEditorAvalonia
    note: Avalonia editor controls, templates, and interaction.
  - name: NodeEditor.Model
    note: Portable node, port, and connector model.
  - name: NodeEditor.Mvvm
    note: MVVM-oriented graph authoring surface.
install: dotnet add package NodeEditorAvalonia
usageLanguage: xml
usage: |-
  <nodeEditor:NodeEditor
      Nodes="{Binding Nodes}"
      Connectors="{Binding Connectors}" />
highlights:
  - Nodes, ports, and connectors
  - XAML-driven templates
  - MVVM and ReactiveUI
  - LogicLab and browser samples
audience:
  - Visual programming and workflow tools
  - Signal, shader, and logic graph editors
  - Avalonia apps needing a custom node canvas
architecture:
  - label: Model
    detail: Portable nodes, sockets, connections, and graph state.
  - label: View model
    detail: MVVM and ReactiveUI adapters expose graph commands and selection.
  - label: Control
    detail: Avalonia presenters route pointer interaction and connection drawing.
  - label: Template
    detail: XAML defines each node, port, connector, and editor surface.
compatibility:
  - label: Avalonia desktop
    value: Supported
    state: ready
  - label: Avalonia browser
    value: Sample
    state: ready
  - label: MVVM / ReactiveUI
    value: Integrations
    state: ready
  - label: Graph logic
    value: Optional packages
    state: ready
proof:
  - value: Templated
    label: visual graph surface
  - value: Portable
    label: model layer
  - value: LogicLab
    label: complete sample
media:
  - src: https://user-images.githubusercontent.com/2297442/201498448-cd76b29f-ea87-4f0b-9dd5-071c9e49b7c2.png
    alt: NodeEditor sample showing a connected node graph
    caption: Nodes and connectors are fully templatable while interaction stays reusable.
links:
  - label: Samples
    href: https://github.com/wieslawsoltes/NodeEditor/tree/main/samples
related:
  - panandzoom
  - xaml-behaviors
  - core2d
---

NodeEditor provides the interaction grammar of a graph editor—selection, ports, connectors, dragging, and templating—while keeping domain logic in portable models and view models.
