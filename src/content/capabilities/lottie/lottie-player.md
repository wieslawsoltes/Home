---
order: 70
project: lottie
name: Lottie Player
eyebrow: Skottie animation assets
status: Maintained
description: An Avalonia control loads Lottie JSON assets and renders their vector animation through SkiaSharp Skottie inside the normal control tree.
statement: Place production motion assets in XAML with one focused control.
packages:
  - name: Lottie
    note: Avalonia Lottie/Skottie player control.
install: dotnet add package Lottie
usageLanguage: xml
usage: <Lottie Path="/Assets/Loading.json" />
highlights:
  - Lottie JSON assets
  - SkiaSharp Skottie renderer
  - Native Avalonia layout
  - Simple XAML integration
layers:
  - label: Load
    detail: The control resolves a packaged Lottie JSON asset.
  - label: Parse
    detail: Skottie creates the vector animation model and timeline.
  - label: Schedule
    detail: The control advances time while attached and active.
  - label: Render
    detail: Skia draws the current animation frame inside Avalonia.
sourcePath: src/Lottie
related:
  - lottie/animation-control
  - lottie/composition-shaders
---

## An Avalonia control loads Lottie JSON assets and renders their vector animation through SkiaSharp Skottie inside the normal control tree.
