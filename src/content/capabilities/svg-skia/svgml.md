---
order: 17
project: svg-skia
name: SvgML
eyebrow: Inline SVG in XAML
status: Preview
description: SvgML packages let applications author SVG elements directly in Avalonia, Uno Platform, and .NET MAUI XAML while rendering through Svg.Skia.
statement: Compose vector artwork as XAML elements instead of opaque asset files.
packages:
  - name: SvgML.Avalonia
    note: Inline SVG element authoring for Avalonia.
  - name: SvgML.Uno
    note: Inline SVG element authoring for Uno Platform.
  - name: SvgML.Maui
    note: Inline SVG element authoring for .NET MAUI.
install: dotnet add package SvgML.Avalonia --prerelease
usageLanguage: xml
usage: |-
  <svgml:Svg Width="120" Height="120" ViewBox="0 0 100 100">
    <svgml:Circle Cx="50" Cy="50" R="42" Fill="#8ea2ff" />
    <svgml:Path Data="M30,52 L45,67 L72,35" Stroke="White" />
  </svgml:Svg>
highlights:
  - Inline SVG element trees
  - Avalonia, Uno, and MAUI packages
  - Bindable XAML properties
  - Svg.Skia rendering backend
layers:
  - label: Markup
    detail: SVG elements and attributes are expressed through XAML objects.
  - label: Bind
    detail: Normal framework properties update vector content.
  - label: Model
    detail: The object tree maps into a shared SVG representation.
  - label: Render
    detail: Svg.Skia produces the final drawing.
sourcePath: src/SvgML.Avalonia
related:
  - svg-skia/renderer
  - svg-skia/avalonia-controls
  - svg-skia/cross-platform-controls
---

## SvgML packages let applications author SVG elements directly in Avalonia, Uno Platform, and .NET MAUI XAML while rendering through Svg.Skia.
