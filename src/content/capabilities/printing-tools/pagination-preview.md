---
order: 64
project: printing-tools
name: Pagination & Preview
eyebrow: Portable print composition
status: Active
description: Documents become page sequences through standard, N-up, booklet, or poster layout, then feed reusable Avalonia page setup and preview windows before submission.
statement: Make page structure and preview independent from the eventual printer backend.
packages:
  - name: PrintingTools.Core
    note: Document, ticket, pagination, layout, preview, and rendering models.
  - name: PrintingTools.UI
    note: Avalonia page setup and preview UI.
install: |-
  dotnet add package PrintingTools.Core
  dotnet add package PrintingTools.UI
usageLanguage: csharp
usage: |-
  var request = new PrintRequest(PrintDocument.FromVisual(report))
  {
      Ticket = PrintTicketModel.CreateDefault(),
      Description = "Quarterly report"
  };
  var session = await manager.RequestSessionAsync(request);
  var preview = await manager.CreatePreviewAsync(session);
highlights:
  - Standard, N-up, booklet, and poster layout
  - Page setup and preview models
  - Avalonia preview windows
  - Vector-aware deterministic pagination
layers:
  - label: Capture
    detail: A visual or document becomes a portable print document.
  - label: Paginate
    detail: Ticket and layout rules resolve page boundaries and placement.
  - label: Preview
    detail: Reusable UI presents pages, options, and navigation.
  - label: Commit
    detail: The same session proceeds to export or platform submission.
sourcePath: src/PrintingTools.Core/Pagination
docsPath: docs/printing-api-reference.md
related:
  - printing-tools/platform-adapters
  - printing-tools/pdf-jobs
---

## Documents become page sequences through standard, N-up, booklet, or poster layout, then feed reusable Avalonia page setup and preview windows before submission.
