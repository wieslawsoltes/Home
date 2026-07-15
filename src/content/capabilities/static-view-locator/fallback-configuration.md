---
order: 59
project: static-view-locator
name: Fallback & Configuration
eyebrow: Map real application hierarchies
status: Maintained
description: Exact types, generic definitions, base classes, and interfaces participate in a deterministic fallback order controlled by compiler-visible MSBuild properties.
statement: Keep modular and inherited view models resolvable without giving up compile-time safety.
packages:
  - name: StaticViewLocator
    note: Fallback helpers and transitive compiler-visible configuration.
install: dotnet add package StaticViewLocator
usageLanguage: xml
usage: |-
  <PropertyGroup>
    <StaticViewLocatorViewModelNamespacePrefixes>MyApp.ViewModels;MyApp.Modules</StaticViewLocatorViewModelNamespacePrefixes>
    <StaticViewLocatorIncludeReferencedAssemblies>true</StaticViewLocatorIncludeReferencedAssemblies>
    <StaticViewLocatorTypeNameReplacementRules>ViewModel=View;Vm=Page</StaticViewLocatorTypeNameReplacementRules>
  </PropertyGroup>
highlights:
  - Exact, generic, base, and interface lookup
  - Referenced-assembly opt-in
  - Custom namespace and type transforms
  - Additional view base types and accessibility rules
layers:
  - label: Configure
    detail: MSBuild exports conventions and assembly scope to the generator.
  - label: Index
    detail: Factories are grouped by exact and generalized type identity.
  - label: Fallback
    detail: Runtime lookup follows exact, generic, base, then reverse-interface order.
  - label: Explain
    detail: Unresolved candidates remain available for useful missing-view output.
sourcePath: StaticViewLocator/buildTransitive/StaticViewLocator.props
related:
  - static-view-locator/convention-mapping
---

## Exact types, generic definitions, base classes, and interfaces participate in a deterministic fallback order controlled by compiler-visible MSBuild properties.
