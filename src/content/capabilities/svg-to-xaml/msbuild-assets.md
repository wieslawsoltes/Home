---
order: 82
project: svg-to-xaml
name: MSBuild Asset Pipeline
eyebrow: Regenerate XAML during build
status: Maintained
description: SvgToXaml.Build consumes SvgFiles items, combines many sources into one ResourceDictionary or emits individual AXAML files, and exposes conversion, compatibility, resource reuse, geometry, opacity, filter, clip, mask, and newline settings.
statement: Make vector asset conversion repeatable and reviewable in the normal build.
packages:
  - name: SvgToXaml.Build
    note: MSBuild targets and SVG conversion task.
install: dotnet add package SvgToXaml.Build
usageLanguage: xml
usage: |-
  <ItemGroup>
    <SvgFiles Include="Assets/**/*.svg"
              OutputFile="Assets/Icons.axaml"
              UseResources="true"
              ReuseExistingResources="true"
              TransformGeometry="true" />
  </ItemGroup>
highlights:
  - Combined ResourceDictionary output
  - Per-file AXAML output
  - Build item metadata configuration
  - Resource reuse and geometry transforms
layers:
  - label: Collect
    detail: MSBuild item globs identify SVG inputs and per-item settings.
  - label: Group
    detail: Output file or directory rules decide combined versus individual generation.
  - label: Convert
    detail: The shared engine maps each asset with requested compatibility options.
  - label: Emit
    detail: Generated AXAML joins the application build as a deterministic artifact.
sourcePath: src/SvgToXaml.Build
related:
  - svg-to-xaml/conversion-engine
---

## SvgToXaml.Build consumes SvgFiles items, combines many sources into one ResourceDictionary or emits individual AXAML files, and exposes conversion, compatibility, resource reuse, geometry, opacity, filter, clip, mask, and newline settings.
