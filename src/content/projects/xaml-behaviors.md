---
order: 6
name: XAML Behaviors
eyebrow: Composable interaction
category: Avalonia
repo: Xaml.Behaviors
description: Reusable actions, triggers, and behaviors for Avalonia, including strongly typed source-generated options for AOT-friendly apps.
statement: Add interaction in XAML without turning views into code-behind.
accent: "#bd9bff"
featured: true
status: Active
packages:
  - name: Xaml.Behaviors
    note: Complete behavior, action, and trigger library.
  - name: Xaml.Behaviors.Interactivity
    note: Foundation types for custom behaviors.
  - name: Xaml.Behaviors.Interactions
    note: Common built-in triggers and actions.
install: dotnet add package Xaml.Behaviors
usageLanguage: xml
usage: |-
  <Button Content="Save">
    <Interaction.Behaviors>
      <EventTriggerBehavior EventName="Click">
        <InvokeCommandAction Command="{Binding SaveCommand}" />
      </EventTriggerBehavior>
    </Interaction.Behaviors>
  </Button>
highlights:
  - Actions and triggers
  - Drag and drop behaviors
  - ReactiveUI integrations
  - AOT-friendly source generators
tier: Flagship
audience:
  - Avalonia MVVM applications
  - Control authors packaging reusable interaction
  - AOT-conscious teams avoiding reflection-heavy wiring
architecture:
  - label: XAML / C#
    detail: Applications compose reusable behavior through normal Avalonia APIs.
  - label: Integration
    detail: Focused packages connect to Avalonia properties, input, and rendering.
  - label: Platform
    detail: The implementation remains portable across Avalonia targets where supported.
compatibility:
  - label: Avalonia
    value: Supported
    state: ready
  - label: MVVM
    value: First-class
    state: ready
  - label: ReactiveUI
    value: Integration
    state: ready
  - label: NativeAOT
    value: Generated options
    state: ready
proof:
  - value: Actions
    label: declarative operations
  - value: Triggers
    label: event and state activation
  - value: Generators
    label: typed AOT surfaces
media:
  - src: https://raw.githubusercontent.com/wieslawsoltes/Xaml.Behaviors/master/logo.png
    alt: XAML Behaviors project logo
    caption: A broad library of composable interaction primitives for Avalonia.
links:
  - label: Documentation
    href: https://wieslawsoltes.github.io/Xaml.Behaviors/
  - label: Samples
    href: https://github.com/wieslawsoltes/Xaml.Behaviors/tree/master/samples
related:
  - dock
  - panandzoom
  - nodeeditor
---

XAML Behaviors turns routed events and observable state into reusable actions. The library ranges from small interaction primitives to drag-and-drop, viewport, responsive, and strongly typed generated behaviors.
