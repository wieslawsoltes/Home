---
order: 34
name: PrintingTools
eyebrow: Cross-platform print pipeline
category: Avalonia
repo: PrintingTools
description: A .NET printing toolkit with discovery, dialogs, preview, pagination, layout, PDF/vector rendering, job submission, and Windows, macOS, and Linux adapters.
statement: Treat print layout, preview, and platform submission as one portable application service.
accent: "#6fd9bd"
showInIndex: false
tier: Maintained
status: Active
packages:
  - name: PrintingTools
    note: Avalonia bootstrap and automatic platform registration.
  - name: PrintingTools.Core
    note: Portable contracts, pagination, rendering, options, and diagnostics.
  - name: PrintingTools.UI
    note: Avalonia page setup and preview surfaces.
install: |-
  dotnet add package PrintingTools
  dotnet add package PrintingTools.UI
usageLanguage: csharp
usage: |-
  AppBuilder.Configure<App>()
      .UsePlatformDetect()
      .UsePrintingTools(options => options.EnablePreview = true);
highlights:
  - Preview and print sessions
  - N-up, booklet, and poster layout
  - Windows, macOS, and Linux adapters
  - Managed PDF and headless fallbacks
audience:
  - Avalonia applications with print and preview workflows
  - Reporting and document tools
  - Teams needing headless PDF and cross-platform print diagnostics
architecture:
  - label: Core
    detail: Portable documents, tickets, layout, pagination, preview, rendering, and diagnostics.
  - label: UI
    detail: Avalonia page setup and preview windows consume portable models.
  - label: Adapters
    detail: Windows, macOS, and Linux packages bind native queues, dialogs, and submission.
  - label: Harnesses
    detail: Headless and sandbox samples retain PDFs and metrics for CI.
compatibility:
  - label: Windows
    value: Win32 / XPS
    state: ready
  - label: macOS
    value: AppKit / Quartz
    state: ready
  - label: Linux
    value: CUPS / GTK / portals
    state: ready
  - label: Headless
    value: Managed PDF fallback
    state: ready
proof:
  - value: 6 packages
    label: core, UI, and platforms
  - value: 4 layouts
    label: standard, N-up, booklet, poster
  - value: 3 harnesses
    label: cross-platform CI
media:
  - src: https://opengraph.githubassets.com/portfolio-long-tail/wieslawsoltes/PrintingTools
    alt: PrintingTools GitHub repository preview
    caption: The repository includes the portable API, Avalonia preview UI, native adapters, documentation, and platform-specific verification harnesses.
links:
  - label: Documentation
    href: https://wieslawsoltes.github.io/PrintingTools/
  - label: API reference
    href: https://github.com/wieslawsoltes/PrintingTools/blob/main/docs/printing-api-reference.md
  - label: Samples
    href: https://github.com/wieslawsoltes/PrintingTools/tree/main/samples
limitations: Native printer features and sandbox permissions vary by operating system. Use the support matrix and platform harness for the exact deployment environment.
related:
  - proedit
  - svg-to-xaml
  - native-message-box
archive:
  order: 3
  kind: Maintained
  tags:
    - Avalonia
    - Printing
    - Controls
---

PrintingTools separates portable print documents, tickets, pagination, layout, preview, rendering, diagnostics, and jobs from operating-system adapters. Avalonia applications can opt into ready-made UI or drive the same services headlessly.
