---
order: 49
project: nodeeditor
name: LogicLab
eyebrow: Digital logic system
status: Active
description: A reusable logic core and editor layer turns NodeEditor into a digital circuit authoring and simulation environment with components, ports, and evaluation.
statement: A complete domain system built on the reusable graph foundation.
packages:
  - name: NodeEditorLogic.Core
    note: Logic primitives, components, signals, and evaluation.
  - name: NodeEditorLogic.Editor
    note: Logic editor view models and services.
install: dotnet add package NodeEditorLogic.Core --prerelease
usageLanguage: csharp
usage: |-
  var circuit = new Circuit();
  var input = circuit.Add(new InputGate());
  var output = circuit.Add(new OutputGate());
  circuit.Connect(input.Output, output.Input);

  circuit.Evaluate();
highlights:
  - Digital logic primitives
  - Component library
  - Graph-backed circuit editor
  - Interactive signal evaluation
layers:
  - label: Primitive
    detail: Signals, ports, and gates define logic behavior.
  - label: Circuit
    detail: Connections form an evaluable dependency graph.
  - label: Editor
    detail: NodeEditor view models expose components and wiring.
  - label: Simulation
    detail: Evaluation updates signals and visible graph state.
sourcePath: src/NodeEditorLogic.Core
related:
  - nodeeditor/control-model
  - nodeeditor/mvvm
---

## A reusable logic core and editor layer turns NodeEditor into a digital circuit authoring and simulation environment with components, ports, and evaluation.
