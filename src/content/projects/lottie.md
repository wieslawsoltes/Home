---
order: 36
name: Lottie
eyebrow: Avalonia animation controls
category: Graphics
repo: Lottie
description: Lottie playback plus reusable frame-loop, composition-backed Skia, and animated shader controls for Avalonia.
statement: Move from packaged motion assets to custom composition and shader animation with the same control vocabulary.
accent: "#ff80ae"
showInIndex: false
tier: Maintained
status: Maintained
packages:
  - name: Lottie
    note: Skottie-backed Lottie animation player.
  - name: AnimationControl
    note: Lightweight overridable animation frame loop.
  - name: CompositionAnimatedControl
    note: Composition-backed Skia animation surface.
  - name: ShaderAnimatedControl
    note: SKSL shader animation control.
install: dotnet add package Lottie
usageLanguage: xml
usage: <Lottie Path="/Assets/Success.json" />
highlights:
  - Lottie/Skottie playback
  - Custom frame-loop control
  - Composition-backed Skia rendering
  - Animated SKSL shaders
audience:
  - Avalonia applications using Lottie motion assets
  - Control authors building custom animation
  - Skia and shader-driven visualization tools
architecture:
  - label: Asset player
    detail: Lottie JSON becomes Skottie vector animation.
  - label: Frame loop
    detail: AnimationControl supplies lifecycle, timing, and invalidation.
  - label: Composition
    detail: A Skia surface adds stretch, loop normalization, repeat, and static redraw.
  - label: Shader
    detail: SKSL runtime effects bind time and custom uniforms.
compatibility:
  - label: Avalonia
    value: Controls
    state: ready
  - label: SkiaSharp / Skottie
    value: Rendering
    state: ready
  - label: SKSL
    value: Runtime effects
    state: ready
  - label: Static redraw
    value: Supported
    state: ready
proof:
  - value: 4 packages
    label: asset to shader control
  - value: 2 modes
    label: animated and static
  - value: Composition
    label: frame scheduling
media:
  - src: https://opengraph.githubassets.com/portfolio-long-tail/wieslawsoltes/Lottie
    alt: Lottie Avalonia controls repository preview
    caption: Four focused packages cover packaged Lottie assets, custom animation loops, composition-backed Skia, and SKSL effects.
links:
  - label: Documentation
    href: https://wieslawsoltes.github.io/Lottie/
  - label: Repository
    href: https://github.com/wieslawsoltes/Lottie
related:
  - effector
  - svg-skia
  - media-player
archive:
  order: 5
  kind: Maintained
  tags:
    - Animation
    - Skia
    - Avalonia
---

Lottie is a compact family of Avalonia animation controls: a Skottie-backed asset player, a minimal frame-loop base, a composition-backed Skia surface, and a runtime SKSL shader control. Applications can start with design assets and progressively own more of the render loop.
