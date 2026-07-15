---
order: 52
project: progpu
name: Scene & Composition
eyebrow: Retained visual system
status: Preview
description: A retained scene, visual tree, compositor command stream, effects, transforms, clipping, and presentation pipeline organize complex interfaces across frames.
statement: Retain intent, update selectively, and compose efficiently.
packages:
  - name: ProGPU.Scene
    note: Visuals, scene updates, compositor operations, effects, and retained presentation.
install: dotnet add package ProGPU.Scene --prerelease
usageLanguage: csharp
usage: |-
  var root = new ContainerVisual();
  root.Children.Add(new ShapeVisual
  {
      Geometry = logo,
      Fill = accentBrush
  });

  compositor.SetRoot(root);
highlights:
  - Retained visual tree
  - Incremental scene updates
  - Transforms, clipping, and opacity
  - Effects and compositor commands
layers:
  - label: Visual
    detail: Nodes retain geometry, paint, transform, clip, and child state.
  - label: Update
    detail: Property changes produce focused compositor operations.
  - label: Resolve
    detail: The scene computes ordering, bounds, effects, and dependencies.
  - label: Compose
    detail: GPU passes render the final frame into a presentation surface.
sourcePath: src/ProGPU.Scene
related:
  - progpu/backend
  - progpu/vector-text
  - progpu/framework-bridges
---

## A retained scene, visual tree, compositor command stream, effects, transforms, clipping, and presentation pipeline organize complex interfaces across frames.
