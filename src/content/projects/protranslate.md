---
order: 16
name: ProTranslate
eyebrow: XAML globalization
category: Frameworks
repo: ProTranslate
description: Translation and globalization infrastructure for Avalonia, WPF, MAUI, WinUI, and Uno with generated bindings and analyzers.
statement: One translation model across the modern XAML ecosystem.
accent: "#67dbc6"
status: Active
packages:
  - name: ProTranslate.Core
    note: Culture, provider, formatting, and fallback services.
  - name: ProTranslate.Avalonia
    note: Avalonia markup extensions and binding refresh.
  - name: ProTranslate.SourceGenerator
    note: Strongly typed keys and compiled-binding surfaces.
install: |-
  dotnet add package ProTranslate.Core
  dotnet add package ProTranslate.Avalonia
usageLanguage: xml
usage: |-
  <StackPanel Translation.AutoFlowDirection="True">
    <TextBlock Text="{Translate Shell.FileMenu}" />
  </StackPanel>
highlights:
  - Five XAML frameworks
  - Runtime culture switching
  - Source generators and analyzers
  - XLIFF, PO, RESX, ARB, and more
tier: Maintained
audience:
  - Teams building frameworks software on .NET
  - Developers who need reusable, inspectable infrastructure
  - Open-source contributors looking for practical framework work
architecture:
  - label: Application
    detail: A familiar public programming model defines the app.
  - label: Framework
    detail: Managed services coordinate layout, input, resources, and lifecycle.
  - label: Platform
    detail: Portable adapters connect rendering and operating-system services.
compatibility:
  - label: Avalonia
    value: Supported
    state: ready
  - label: WPF / WinUI
    value: Supported
    state: ready
  - label: Uno / MAUI
    value: Supported
    state: ready
  - label: Resource formats
    value: XLIFF, PO, RESX, ARB+
    state: ready
proof:
  - value: Active
    label: project status
  - value: "3"
    label: composable packages
  - value: Open source
    label: issues and implementation
media:
  - src: https://github.com/user-attachments/assets/ef612d49-4a2f-4001-a6c0-544197f9fd65
    alt: ProTranslate localization workflow
    caption: Generated keys and live culture switching connect resources to XAML applications.
links:
  - label: Repository
    href: https://github.com/wieslawsoltes/ProTranslate
  - label: Issues
    href: https://github.com/wieslawsoltes/ProTranslate/issues
  - label: Releases
    href: https://github.com/wieslawsoltes/ProTranslate/releases
related:
  - xaml-behaviors
  - nxui
  - librewpf
---

ProTranslate is maintained as a focused part of a wider open-source .NET UI ecosystem. Its boundaries are designed so applications can adopt the useful layer without taking the entire stack.
