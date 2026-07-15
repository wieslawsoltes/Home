---
order: 72
project: lottie
name: Composition & Shader Animation
eyebrow: Skia and SKSL motion surfaces
status: Maintained
description: CompositionAnimatedControl supplies stretch-aware Skia rendering, elapsed normalization, repeat counts, per-frame updates, and static redraw; ShaderAnimatedControl adds URI-loaded SKSL runtime effects and uniform binding.
statement: Own the render loop when packaged animation assets are not enough.
packages:
  - name: CompositionAnimatedControl
    note: Composition-backed Skia base control.
  - name: ShaderAnimatedControl
    note: Animated SKSL runtime-effect control.
install: |-
  dotnet add package CompositionAnimatedControl
  dotnet add package ShaderAnimatedControl
usageLanguage: xml
usage: |-
  <ShaderAnimatedControl
      ShaderUri="/Assets/Gradient.sksl"
      ShaderWidth="512"
      ShaderHeight="512"
      IsShaderFillCanvas="True" />
highlights:
  - Composition scheduler integration
  - Animated and static redraw modes
  - Stretch and repeat control
  - SKSL assets and custom uniforms
layers:
  - label: Measure
    detail: Logical source size and stretch define destination geometry.
  - label: Normalize
    detail: Elapsed time maps to loops and repeat policy.
  - label: Update
    detail: Frame state or shader uniforms evolve with delta time.
  - label: Render
    detail: Skia or SKSL draws directly into the composition-backed surface.
sourcePath: src/CompositionAnimatedControl
related:
  - lottie/animation-control
  - lottie/lottie-player
---

## CompositionAnimatedControl supplies stretch-aware Skia rendering, elapsed normalization, repeat counts, per-frame updates, and static redraw; ShaderAnimatedControl adds URI-loaded SKSL runtime effects and uniform binding.
