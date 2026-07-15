---
order: 7
name: Svg.Skia
eyebrow: SVG rendering library
category: Graphics
repo: Svg.Skia
description: A robust SVG 1.1 and static SVG 2 rendering library for SkiaSharp, with Avalonia controls and source-generation support.
statement: Standards-minded SVG rendering across the .NET ecosystem.
accent: "#ffb45f"
featured: true
status: Active
packages:
  - name: Svg.Skia
    note: Core SVG parser and Skia renderer.
  - name: Svg.Controls.Skia.Avalonia
    note: Ready-to-use Avalonia SVG controls.
  - name: Svg.SourceGenerator.Skia
    note: Compile SVG resources into drawing code.
install: |-
  dotnet add package Svg.Skia
  dotnet add package Svg.Controls.Skia.Avalonia
usageLanguage: csharp
usage: |-
  using Svg.Skia;

  var svg = new SKSvg();
  svg.Load("icon.svg");
  canvas.DrawPicture(svg.Picture);
highlights:
  - SVG 1.1 support
  - SkiaSharp rendering
  - Avalonia controls
  - W3C and resvg parity lanes
tier: Flagship
audience:
  - Cross-platform .NET apps rendering SVG
  - Asset pipelines that need code generation
  - Avalonia apps using scalable icons and artwork
architecture:
  - label: Input
    detail: Portable data and framework resources enter through focused APIs.
  - label: Preparation
    detail: Geometry, text, images, or effects become renderer-ready operations.
  - label: Rendering
    detail: The backend records and submits deterministic drawing work.
compatibility:
  - label: SVG 1.1
    value: Broad support
    state: ready
  - label: Static SVG 2
    value: Partial
    state: partial
  - label: Avalonia
    value: Controls
    state: ready
  - label: Source generation
    value: Supported
    state: ready
proof:
  - value: W3C
    label: test suite lane
  - value: resvg
    label: parity comparison lane
  - value: SkiaSharp
    label: portable renderer
media:
  - src: https://raw.githubusercontent.com/wieslawsoltes/Svg.Skia/master/images/Demo.png
    alt: Svg.Skia demo rendering multiple SVG files
    caption: The desktop demo exercises real SVG documents through the same core renderer.
links:
  - label: Documentation
    href: https://wieslawsoltes.github.io/Svg.Skia/
  - label: Samples
    href: https://github.com/wieslawsoltes/Svg.Skia/tree/master/samples
related:
  - effector
  - progpu
  - protext
---

Svg.Skia parses SVG into a reusable drawing model and renders through SkiaSharp. Avalonia controls, source generators, converters, and extensive parity testing make it useful from runtime UI to asset pipelines.
