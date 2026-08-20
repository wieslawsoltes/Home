---
order: 15
name: Pretext
eyebrow: Universal text preparation
category: Graphics
repo: PretextSharp
description: Universal text preparation and line layout with grapheme-aware wrapping, locale segmentation, bidi, streaming line walking, and glyph-aware output for rendering pipelines.
statement: Predictable, allocation-conscious text layout for any SkiaSharp UI.
accent: "#ffce8a"
status: Active
packages:
  - name: Pretext
    note: Core preparation and line layout engine.
  - name: Pretext.SkiaSharp
    note: Portable SkiaSharp measurement backend.
install: |-
  dotnet add package Pretext
  dotnet add package Pretext.SkiaSharp
usageLanguage: csharp
usage: |-
  var prepared = PretextLayout.PrepareWithSegments(text, "16px Inter");
  var lines = PretextLayout.LayoutWithLines(prepared, 320, 22);

  foreach (var line in lines.Lines)
      Console.WriteLine(line.Text);
highlights:
  - Unicode-aware wrapping
  - Locale-sensitive segmentation
  - Bidirectional text
  - Streaming, allocation-light and glyph-output APIs
tier: Maintained
audience:
  - Teams building graphics software on .NET
  - Developers who need reusable, inspectable infrastructure
  - Open-source contributors looking for practical framework work
architecture:
  - label: Input
    detail: Portable data and framework resources enter through focused APIs.
  - label: Preparation
    detail: Geometry, text, images, or effects become renderer-ready operations.
  - label: Rendering
    detail: The backend records and submits deterministic drawing work.
compatibility:
  - label: .NET
    value: Current SDK
    state: ready
  - label: Avalonia / cross-platform
    value: Active
    state: ready
  - label: Source
    value: Open on GitHub
    state: ready
proof:
  - value: Active
    label: project status
  - value: "2"
    label: composable packages
  - value: Open source
    label: issues and implementation
media:
  - src: https://opengraph.githubassets.com/portfolio-v2/wieslawsoltes/PretextSharp
    width: 1200
    height: 600
    alt: Pretext GitHub repository preview
    caption: The Pretext repository contains the current source, samples, releases, and issue history.
links:
  - label: Repository
    href: https://github.com/wieslawsoltes/PretextSharp
  - label: Issues
    href: https://github.com/wieslawsoltes/PretextSharp/issues
  - label: Releases
    href: https://github.com/wieslawsoltes/PretextSharp/releases
related:
  - progpu
  - svg-skia
---

Pretext keeps segmentation, bidi preparation, wrapping, line walking, and glyph-oriented output behind focused APIs so renderers and controls can adopt text preparation without taking a complete UI stack.
