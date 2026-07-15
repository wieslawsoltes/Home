---
order: 7
project: proedit
name: Printing
eyebrow: Preview and platform output
status: Active
description: Document printing abstractions, Skia rasterization, Avalonia preview, and system adapters for taking paginated content to platform print services.
statement: Carry the same page model from editor preview to physical output.
packages:
  - name: ProEdit.Printing.Avalonia
    note: Avalonia preview and print workflow UI.
  - name: ProEdit.Printing.Skia
    note: Skia page rendering for print pipelines.
  - name: ProEdit.Printing.System
    note: System print integration.
install: dotnet add package ProEdit.Printing.Avalonia
usageLanguage: csharp
usage: |-
  var job = new PrintJob(document)
  {
      Settings = new PrintSettings { Copies = 1 }
  };

  await printService.PrintAsync(job);
highlights:
  - Shared paginated source
  - Avalonia print preview
  - Skia page rendering
  - Replaceable platform services
layers:
  - label: Document
    detail: A paginated source supplies stable page geometry.
  - label: Settings
    detail: Paper, margins, range, copies, and destination form a print job.
  - label: Render
    detail: Skia creates device-ready page output.
  - label: Dispatch
    detail: Platform adapters hand the job to a system or custom destination.
sourcePath: src/ProEdit.Printing
related:
  - proedit/document-editor
  - proedit/document-formats
  - proedit/reporting
---

## Document printing abstractions, Skia rasterization, Avalonia preview, and system adapters for taking paginated content to platform print services.
