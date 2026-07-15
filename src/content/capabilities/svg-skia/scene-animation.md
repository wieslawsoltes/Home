---
order: 15
project: svg-skia
name: Scene Graph & Animation
eyebrow: Retained and time-based SVG
status: Preview
description: A retained SVG scene graph and shared animation runtime separate document state, playback, invalidation, and host rendering.
statement: Move beyond static pictures into inspectable, time-varying SVG scenes.
packages:
  - name: Svg.SceneGraph
    note: Retained SVG scene nodes and traversal.
  - name: Svg.Animation
    note: Animation timeline, playback, and host contracts.
install: |-
  dotnet add package Svg.SceneGraph --prerelease
  dotnet add package Svg.Animation --prerelease
usageLanguage: csharp
usage: |-
  var scene = SvgScene.Load(document);
  var player = new SvgAnimationPlayer(scene);

  player.Seek(TimeSpan.FromSeconds(1.5));
  player.Render(canvas);
highlights:
  - Retained SVG node graph
  - Shared animation timeline
  - Host-controlled playback
  - Targeted invalidation and rendering
layers:
  - label: Scene
    detail: Document elements become retained, addressable nodes.
  - label: Timeline
    detail: Animation tracks resolve values at a requested time.
  - label: Invalidate
    detail: Changed nodes mark the minimum scene region for update.
  - label: Host
    detail: UI or headless hosts control clocks and presentation.
sourcePath: src/Svg.SceneGraph
related:
  - svg-skia/renderer
  - svg-skia/editor
  - svg-skia/svgml
---

## A retained SVG scene graph and shared animation runtime separate document state, playback, invalidation, and host rendering.
