---
order: 65
project: printing-tools
name: Platform Print Adapters
eyebrow: Native queues and dialogs
status: Active
description: Windows Win32/XPS, macOS AppKit/Quartz, and Linux CUPS/GTK adapters discover queues, inspect capabilities, coordinate native dialogs, and respect sandbox or portal constraints.
statement: Keep one print API while honoring each desktop printing system.
packages:
  - name: PrintingTools.Windows
    note: Win32 queues, XPS/PDF, dialogs, and job monitoring.
  - name: PrintingTools.MacOS
    note: AppKit, Quartz PDF, native preview, and sandbox tickets.
  - name: PrintingTools.Linux
    note: CUPS/IPP, GTK, portals, and managed submission.
install: dotnet add package PrintingTools.Windows
usageLanguage: csharp
usage: |-
  AppBuilder.Configure<App>()
      .UsePlatformDetect()
      .UsePrintingTools(options =>
      {
          options.EnablePreview = true;
          options.DiagnosticSink = Console.WriteLine;
      });
highlights:
  - Win32 spooler and XPS flows
  - AppKit and Quartz integration
  - CUPS, GTK, Flatpak, and Snap portals
  - Runtime adapter selection
layers:
  - label: Select
    detail: The Avalonia bootstrap chooses the platform adapter at startup.
  - label: Discover
    detail: Native services report queues, capabilities, defaults, and constraints.
  - label: Dialog
    detail: Platform UI gathers user ticket and destination choices.
  - label: Submit
    detail: The adapter renders and monitors the native print job.
sourcePath: src/PrintingTools
docsPath: docs/platform-support-matrix.md
related:
  - printing-tools/pagination-preview
  - printing-tools/pdf-jobs
---

## Windows Win32/XPS, macOS AppKit/Quartz, and Linux CUPS/GTK adapters discover queues, inspect capabilities, coordinate native dialogs, and respect sandbox or portal constraints.
