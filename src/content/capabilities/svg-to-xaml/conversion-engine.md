---
order: 81
project: svg-to-xaml
name: SVG Conversion Engine
eyebrow: Vector artwork becomes Avalonia resources
status: Maintained
description: The converter parses SVG content into an intermediate drawing model and emits Avalonia XAML geometry, drawing, brush, transform, clip, mask, filter, and resource structures for desktop or browser workflows.
statement: Convert design-time SVG assets into native XAML that tools and applications can inspect.
packages:
  - name: SvgToXamlConverter
    note: SVG model, conversion engine, and XAML writer.
install: dotnet add package SvgToXamlConverter
usageLanguage: bash
usage: |-
  # Run the desktop converter from source.
  dotnet run --project src/SvgToXaml.Desktop

  # Open SVG artwork, inspect the generated drawing,
  # then save the Avalonia XAML output.
highlights:
  - Intermediate drawing and resource model
  - Geometry, paint, transform, and container conversion
  - Desktop and browser hosts
  - Compatibility and cleanup options
layers:
  - label: Parse
    detail: SVG elements and paint data become a structured source model.
  - label: Translate
    detail: Shapes, transforms, resources, clips, and effects map to XAML concepts.
  - label: Optimize
    detail: Compatibility and resource-reuse settings shape output.
  - label: Write
    detail: The converter produces standalone XAML or resource content.
sourcePath: src/SvgToXaml.Converter
related:
  - svg-to-xaml/msbuild-assets
---

## The converter parses SVG content into an intermediate drawing model and emits Avalonia XAML geometry, drawing, brush, transform, clip, mask, filter, and resource structures for desktop or browser workflows.
