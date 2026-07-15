---
order: 1
name: LibreWPF
eyebrow: WPF, beyond Windows
category: Frameworks
repo: wpf
branch: progpu-rendering-port
description: A portable WPF runtime and SDK that retains familiar managed WPF source and XAML while rendering through ProGPU and Silk.NET.
statement: Keep the WPF programming model. Change the platform beneath it.
accent: "#75d8ff"
featured: true
status: Preview
packages:
  - name: LibreWPF.Sdk
    note: MSBuild SDK that redirects WPF apps to the portable runtime.
  - name: LibreWPF.ProGPU
    note: WPF host, input bridge, and ProGPU compositor adapter.
  - name: LibreWPF.Transport
    note: Managed assemblies, themes, XAML tasks, and runtime metadata.
install: |-
  <Project Sdk="LibreWPF.Sdk/0.1.0-preview.15">
    <PropertyGroup>
      <OutputType>WinExe</OutputType>
      <TargetFramework>net10.0-windows</TargetFramework>
      <UseWPF>true</UseWPF>
    </PropertyGroup>
  </Project>
usageLanguage: bash
usage: |-
  dotnet restore
  dotnet run
highlights:
  - Source-compatible WPF XAML
  - macOS, Linux, and Windows
  - ProGPU/WebGPU composition
  - Portable SDK switch
tier: Flagship
audience:
  - WPF maintainers evaluating a portable future
  - Framework engineers studying compatibility layers
  - Desktop teams with deep WPF domain investment
architecture:
  - label: Application
    detail: A familiar public programming model defines the app.
  - label: Framework
    detail: Managed services coordinate layout, input, resources, and lifecycle.
  - label: Platform
    detail: Portable adapters connect rendering and operating-system services.
compatibility:
  - label: WPF source/XAML
    value: Primary goal
    state: partial
  - label: Windows
    value: Preview
    state: partial
  - label: macOS
    value: Preview
    state: partial
  - label: Linux
    value: Preview
    state: partial
proof:
  - value: SDK switch
    label: migration entry point
  - value: Managed WPF
    label: familiar programming model
  - value: ProGPU
    label: portable compositor
media:
  - src: https://opengraph.githubassets.com/portfolio-v2/wieslawsoltes/wpf
    alt: LibreWPF GitHub repository preview
    caption: The LibreWPF repository contains the current source, samples, releases, and issue history.
links:
  - label: Repository
    href: https://github.com/wieslawsoltes/wpf
  - label: Issues
    href: https://github.com/wieslawsoltes/wpf/issues
  - label: Releases
    href: https://github.com/wieslawsoltes/wpf/releases
limitations: This is an experimental compatibility effort, not a drop-in production replacement for Microsoft WPF. Platform services, control coverage, and rendering parity are still evolving.
related:
  - progpu
  - librewinforms
  - avalonia-progpu
---

LibreWPF keeps the WPF application model and redirects the platform below it. The work combines transported managed WPF sources, a portable SDK, and a ProGPU compositor so existing XAML knowledge remains useful beyond Windows.
