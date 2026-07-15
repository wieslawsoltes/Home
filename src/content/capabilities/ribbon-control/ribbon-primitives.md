---
order: 83
project: ribbon-control
name: Ribbon Controls & Layout
eyebrow: Complete desktop command surface
status: Active
description: Tabs, groups, buttons, split buttons, combo boxes, toggle groups, galleries, backstage, quick access toolbar, key tips, automation peers, stable height, and adaptive layout compose a complete Avalonia ribbon.
statement: Build a dense command hierarchy from reusable, accessible primitives.
packages:
  - name: RibbonControl.Core
    note: Controls, themes, icons, layout, key tips, and automation peers.
install: dotnet add package RibbonControl.Core
usageLanguage: xml
usage: |-
  <ribbon:Ribbon>
    <ribbon:RibbonTab Id="home" Header="Home">
      <ribbon:RibbonGroup Id="clipboard" Header="Clipboard">
        <ribbon:RibbonItem Id="paste" Label="Paste"
                           Primitive="PasteSplitButton" />
      </ribbon:RibbonGroup>
    </ribbon:RibbonTab>
  </ribbon:Ribbon>
highlights:
  - Rich tabs, groups, items, gallery, and backstage
  - Quick access toolbar
  - Key-tip routing and automation peers
  - Adaptive layout and stable height
layers:
  - label: Declare
    detail: XAML or definitions describe tabs, groups, commands, and presentation.
  - label: Measure
    detail: Adaptive policies choose item sizes and group presentation.
  - label: Interact
    detail: Commands, key tips, galleries, backstage, and quick access route intent.
  - label: Automate
    detail: Peers and stable identifiers expose accessible testable structure.
sourcePath: src/RibbonControl.Core/Controls
related:
  - ribbon-control/mvvm-merge
  - ribbon-control/customization-state
---

## Tabs, groups, buttons, split buttons, combo boxes, toggle groups, galleries, backstage, quick access toolbar, key tips, automation peers, stable height, and adaptive layout compose a complete Avalonia ribbon.
