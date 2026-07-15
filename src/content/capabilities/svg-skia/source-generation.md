---
order: 14
project: svg-skia
name: Source Generation
eyebrow: Compile SVG into code
status: Stable
description: Code generation packages transform SVG assets into strongly referenced Skia drawing code at build time, reducing runtime parsing and asset lookup.
statement: Turn artwork into generated drawing code before the application starts.
packages:
  - name: Svg.SourceGenerator.Skia
    note: Roslyn source generator for SVG assets.
  - name: Svg.CodeGen.Skia
    note: Reusable SVG-to-C# code generation engine.
install: dotnet add package Svg.SourceGenerator.Skia
usageLanguage: xml
usage: |-
  <ItemGroup>
    <AdditionalFiles Include="Assets/**/*.svg" />
  </ItemGroup>
highlights:
  - Build-time SVG processing
  - Generated C# drawing code
  - Strong asset identity
  - No runtime XML parse for generated assets
layers:
  - label: Discover
    detail: MSBuild AdditionalFiles identify SVG assets.
  - label: Convert
    detail: The code generator resolves SVG features into Skia operations.
  - label: Emit
    detail: The source generator adds typed C# to the compilation.
  - label: Draw
    detail: Application code invokes the generated picture path directly.
sourcePath: src/Svg.SourceGenerator.Skia
related:
  - svg-skia/renderer
  - svg-skia/avalonia-controls
---

## Code generation packages transform SVG assets into strongly referenced Skia drawing code at build time, reducing runtime parsing and asset lookup.
