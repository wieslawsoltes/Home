---
order: 40
name: SvgToXaml
eyebrow: SVG asset conversion
category: Graphics
repo: SvgToXaml
description: A desktop and build-time converter that turns SVG artwork into Avalonia XAML drawings, geometries, and resource dictionaries.
statement: Move vector assets into native XAML once—or regenerate them on every build.
accent: "#ffb56e"
showInIndex: false
tier: Maintained
status: Maintained
packages:
  - name: SvgToXamlConverter
    note: SVG parsing and XAML conversion engine.
  - name: SvgToXaml.Build
    note: MSBuild task for individual files or combined resource dictionaries.
install: |-
  dotnet add package SvgToXamlConverter
  dotnet add package SvgToXaml.Build
usageLanguage: xml
usage: |-
  <ItemGroup>
    <SvgFiles Include="Assets/**/*.svg"
              OutputFile="Assets/Icons.axaml" />
  </ItemGroup>
highlights:
  - Desktop conversion workflow
  - MSBuild asset generation
  - Combined resource dictionaries
  - Geometry, resource, and compatibility options
audience:
  - Avalonia applications with vector icon pipelines
  - Design-system and asset-build maintainers
  - Developers converting SVG into inspectable XAML resources
architecture:
  - label: Model
    detail: SVG geometry, paint, resources, transforms, and containers become a conversion model.
  - label: Converter
    detail: Mapping rules emit Avalonia drawing and geometry structures.
  - label: Hosts
    detail: Desktop and browser tools support interactive inspection and export.
  - label: Build
    detail: MSBuild generates individual AXAML files or combined dictionaries.
compatibility:
  - label: Avalonia XAML
    value: Drawing output
    state: ready
  - label: MSBuild
    value: Integrated task
    state: ready
  - label: Resource dictionaries
    value: Combined output
    state: ready
  - label: Complex SVG effects
    value: Configurable handling
    state: partial
proof:
  - value: 2 modes
    label: interactive and build
  - value: 2 outputs
    label: individual or dictionary
  - value: 10+ settings
    label: conversion policy
media:
  - src: https://user-images.githubusercontent.com/2297442/130685251-185cc489-8724-408b-8965-955f9bc77177.png
    alt: SvgToXaml desktop converter
    caption: The desktop converter previews SVG input and the resulting Avalonia XAML drawing.
links:
  - label: Repository
    href: https://github.com/wieslawsoltes/SvgToXaml
  - label: Build package guide
    href: https://github.com/wieslawsoltes/SvgToXaml#msbuild-task
limitations: SVG and Avalonia drawing models are not identical. Filters, clips, masks, opacity, and geometry transforms may require project-specific conversion settings and visual review.
related:
  - svg-skia
  - proedit
  - lottie
archive:
  order: 9
  kind: Maintained
  tags:
    - SVG
    - XAML
    - Conversion
---

SvgToXaml converts SVG artwork into Avalonia-native XAML either interactively or as a deterministic MSBuild asset step. The model, converter, desktop and Web hosts, and build task expose resource reuse, geometry transforms, and compatibility controls.
