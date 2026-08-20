---
order: 2
name: LibreWinForms
eyebrow: Portable WinForms APIs
category: Frameworks
repo: LibreWinForms
branch: librewinforms-progpu-port
description: Cross-platform WinForms-shaped APIs and SDK backed by ProGPU, Silk.NET, and LibreWPF interop, with familiar startup, managed controls, DataGridView validation, drawing, and WPF hosting.
statement: Classic desktop APIs, carried onto a modern GPU stack.
accent: "#8be8c3"
featured: true
status: Preview
packages:
  - name: LibreWinForms.Sdk
    note: Portable SDK for existing WinForms projects.
  - name: LibreWinForms.System.Windows.Forms
    note: Managed WinForms API and runtime surface.
  - name: LibreWinForms.WindowsFormsIntegration
    note: Bridge for hosting WinForms in LibreWPF.
install: |-
  <Project Sdk="LibreWinForms.Sdk/0.1.0-preview.43">
    <PropertyGroup>
      <OutputType>WinExe</OutputType>
      <TargetFramework>net10.0</TargetFramework>
      <UseWindowsForms>true</UseWindowsForms>
    </PropertyGroup>
  </Project>
usageLanguage: csharp
usage: |-
  using System.Windows.Forms;

  ApplicationConfiguration.Initialize();
  Application.Run(new MainForm());
highlights:
  - Familiar System.Windows.Forms
  - Portable managed controls and DataGridView samples
  - GPU-backed drawing
  - WPF/WinForms interop
tier: Flagship
audience:
  - WinForms teams researching cross-platform options
  - Tool vendors with classic desktop APIs
  - Framework authors studying managed compatibility
architecture:
  - label: Application
    detail: A familiar public programming model defines the app.
  - label: Framework
    detail: Managed services coordinate layout, input, resources, and lifecycle.
  - label: Platform
    detail: Portable adapters connect rendering and operating-system services.
compatibility:
  - label: WinForms API
    value: In progress
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
  - value: System.Windows.Forms
    label: familiar API shape
  - value: SDK switch
    label: project-level adoption
  - value: GPU-backed
    label: drawing direction
media:
  - src: https://opengraph.githubassets.com/portfolio-2026/wieslawsoltes/LibreWinForms
    width: 1200
    height: 600
    alt: LibreWinForms GitHub repository preview
    caption: The LibreWinForms repository contains the current source, samples, releases, and issue history.
links:
  - label: Repository
    href: https://github.com/wieslawsoltes/LibreWinForms
  - label: Issues
    href: https://github.com/wieslawsoltes/LibreWinForms/issues
  - label: Releases
    href: https://github.com/wieslawsoltes/LibreWinForms/releases
limitations: LibreWinForms is a research-grade preview. Control, accessibility, platform service, and behavioral parity are incomplete.
related:
  - progpu
  - librewpf
  - avalonia-silknet
---

LibreWinForms carries the established System.Windows.Forms surface onto portable managed controls and a modern GPU renderer while retaining familiar application startup, double-click behavior, drawing, DataGridView contracts, and LibreWPF WindowsFormsHost integration.
