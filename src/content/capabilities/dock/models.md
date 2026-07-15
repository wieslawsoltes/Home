---
order: 19
project: dock
name: Model Integrations
eyebrow: Choose the application architecture
status: Stable
description: A framework-neutral model plus MVVM, ReactiveUI, Prism, INPC, ReactiveProperty, and Caliburn.Micro implementations lets applications adopt Dock without changing architecture.
statement: Keep docking behavior consistent while choosing the notification and composition model.
packages:
  - name: Dock.Model
    note: Core interfaces and model contracts.
  - name: Dock.Model.Mvvm
    note: General-purpose MVVM implementation.
  - name: Dock.Model.ReactiveUI
    note: ReactiveUI implementation and services.
  - name: Dock.Model.Prism
    note: Prism-oriented model implementation.
  - name: Dock.Model.Inpc
    note: INPC model implementation.
install: dotnet add package Dock.Model.Mvvm
usageLanguage: csharp
usage: |-
  var factory = new DockFactory();
  var layout = factory.CreateLayout();

  factory.InitLayout(layout);
  Layout = layout;
highlights:
  - Framework-neutral contracts
  - MVVM and INPC implementations
  - ReactiveUI and Prism integrations
  - Replaceable factory policy
layers:
  - label: Contracts
    detail: Interfaces define docks, dockables, factories, commands, and lifecycle.
  - label: Implementation
    detail: A chosen package supplies notification and base classes.
  - label: Application
    detail: The factory creates domain-specific documents and tools.
  - label: View
    detail: Dock.Avalonia consumes the common contracts.
sourcePath: src/Dock.Model
related:
  - dock/workspace
  - dock/persistence
  - dock/advanced-controls
---

## A framework-neutral model plus MVVM, ReactiveUI, Prism, INPC, ReactiveProperty, and Caliburn.Micro implementations lets applications adopt Dock without changing architecture.
