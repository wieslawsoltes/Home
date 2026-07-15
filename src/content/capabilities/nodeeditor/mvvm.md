---
order: 48
project: nodeeditor
name: MVVM Integration
eyebrow: View-model driven graphs
status: Stable
description: MVVM packages expose graph state, commands, selection, and connection workflows through bindable models suitable for application architecture and testing.
statement: Keep graph behavior in view models and visual composition in XAML.
packages:
  - name: NodeEditorAvalonia.Mvvm
    note: MVVM graph models, commands, and control adapters.
install: dotnet add package NodeEditorAvalonia.Mvvm
usageLanguage: csharp
usage: |-
  Nodes.Add(new NodeViewModel
  {
      Title = "Transform",
      Position = new Point(320, 180)
  });
highlights:
  - Bindable graph collections
  - Command-oriented editing
  - Testable selection and connection logic
  - XAML templates remain replaceable
layers:
  - label: Domain
    detail: Application models own graph meaning and data.
  - label: View model
    detail: Adapters expose position, sockets, commands, and notifications.
  - label: Binding
    detail: The editor binds to collections and selection state.
  - label: Template
    detail: Views render domain-specific nodes without changing the control.
sourcePath: src/NodeEditorAvalonia.Mvvm
related:
  - nodeeditor/control-model
  - nodeeditor/logiclab
---

## MVVM packages expose graph state, commands, selection, and connection workflows through bindable models suitable for application architecture and testing.
