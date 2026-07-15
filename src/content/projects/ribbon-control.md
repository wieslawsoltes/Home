---
order: 41
name: RibbonControl
eyebrow: Adaptive Avalonia commands
category: Controls
repo: RibbonControl
description: An Avalonia ribbon toolkit with XAML and MVVM composition, tabs, groups, galleries, backstage, key tips, adaptive layout, merging, customization, and JSON persistence.
statement: Compose dense desktop command systems without hard-wiring their structure or user state.
accent: "#7fd9ff"
showInIndex: false
tier: Maintained
status: Active
packages:
  - name: RibbonControl.Core
    note: Controls, themes, models, automation, merge, key tips, and services.
  - name: RibbonControl.Persistence.Json
    note: Versioned JSON runtime state and migrations.
install: |-
  dotnet add package RibbonControl.Core
  dotnet add package RibbonControl.Persistence.Json
usageLanguage: xml
usage: |-
  <ribbon:Ribbon TabsSource="{CompiledBinding Ribbon.Tabs}"
                 CommandCatalog="{CompiledBinding CommandCatalog}"
                 StateStore="{CompiledBinding StateStore}" />
highlights:
  - XAML-first and MVVM-first composition
  - Rich ribbon primitives and backstage
  - Merge, key tips, and adaptive layout
  - Versioned customization persistence
audience:
  - Document, engineering, and enterprise desktop applications
  - Modular applications contributing commands at runtime
  - Teams requiring accessible keyboard-driven command surfaces
architecture:
  - label: Primitives
    detail: Tabs, groups, items, galleries, backstage, and quick access form the visual vocabulary.
  - label: Composition
    detail: XAML, MVVM, or hybrid definitions feed stable-id runtime models.
  - label: Services
    detail: Commands, merging, key tips, layout, automation, and customization coordinate behavior.
  - label: Persistence
    detail: A versioned JSON store saves user ribbon state through migration hooks.
compatibility:
  - label: Avalonia
    value: "12.0"
    state: ready
  - label: XAML / MVVM
    value: Both first-class
    state: ready
  - label: Automation
    value: Peers and tests
    state: ready
  - label: Persistence
    value: Versioned JSON
    state: ready
proof:
  - value: 3 models
    label: XAML, MVVM, hybrid
  - value: Adaptive
    label: layout and key tips
  - value: Versioned
    label: customization state
media:
  - src: https://opengraph.githubassets.com/portfolio-long-tail/wieslawsoltes/RibbonControl
    alt: RibbonControl GitHub repository preview
    caption: The repository includes XAML-only, MVVM-only, and hybrid samples plus headless, visual, performance, and automation coverage.
links:
  - label: Documentation
    href: https://wieslawsoltes.github.io/RibbonControl/
  - label: Samples
    href: https://github.com/wieslawsoltes/RibbonControl/tree/main/src
limitations: Ribbon density and customization require an application command taxonomy with stable identifiers. Establish ids and persistence migration policy before exposing user customization broadly.
related:
  - dock
  - xaml-behaviors
  - proedit
archive:
  order: 10
  kind: Maintained
  tags:
    - Controls
    - Desktop
    - Commands
---

RibbonControl composes traditional desktop command density through Avalonia-native controls, themes, models, view models, command catalogs, merge policies, key tips, automation, adaptive layout, quick access, backstage, customization, and versioned state persistence.
