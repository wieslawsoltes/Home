---
order: 13
project: svg-skia
name: Uno & MAUI Controls
eyebrow: Cross-platform XAML hosts
status: Preview
description: Uno Platform and .NET MAUI packages host Svg.Skia through native Skia canvas controls while preserving a familiar source-and-stretch API.
statement: Carry the same SVG rendering core into Uno and MAUI applications.
packages:
  - name: Svg.Controls.Skia.Uno
    note: Uno Platform controls backed by SKCanvasElement.
  - name: Svg.Controls.Skia.Maui
    note: .NET MAUI controls backed by SKCanvasView.
install: dotnet add package Svg.Controls.Skia.Uno --prerelease
usageLanguage: xml
usage: |-
  <svg:SvgView Source="ms-appx:///Assets/logo.svg"
               Stretch="Uniform"
               Width="160" />
highlights:
  - Uno Platform support
  - .NET MAUI support
  - Shared Svg.Skia renderer
  - Native XAML host integration
layers:
  - label: SVG core
    detail: Parsing and Skia recording stay shared.
  - label: Canvas
    detail: Each framework supplies its native Skia drawing surface.
  - label: Properties
    detail: Adapters map source, stretch, sizing, and invalidation.
  - label: Targets
    detail: Applications deploy through Uno or MAUI platform heads.
sourcePath: src/Svg.Controls.Skia.Uno
related:
  - svg-skia/renderer
  - svg-skia/svgml
  - svg-skia/avalonia-controls
---

## Uno Platform and .NET MAUI packages host Svg.Skia through native Skia canvas controls while preserving a familiar source-and-stretch API.
