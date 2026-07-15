---
order: 66
project: printing-tools
name: PDF, Jobs & Diagnostics
eyebrow: Headless and observable output
status: Active
description: Skia vector/PDF rendering, managed fallbacks, job history, diagnostic events, and cross-platform harnesses support visible applications, sandboxed hosts, headless automation, and CI verification.
statement: Produce inspectable print artifacts even when no native dialog or physical printer is available.
packages:
  - name: PrintingTools.Core
    note: Rendering, diagnostics, metrics, tickets, and job abstractions.
install: dotnet add package PrintingTools.Core
usageLanguage: csharp
usage: |-
  PrintServiceRegistry.Configure(new PrintingToolsOptions
  {
      DiagnosticSink = e => logger.LogInformation(
          "{Category}: {Message}", e.Category, e.Message)
  });
  await manager.PrintAsync(session);
highlights:
  - Skia vector and PDF output
  - Headless managed fallbacks
  - Job monitoring and diagnostic hooks
  - Windows, macOS, and Linux CI harnesses
layers:
  - label: Render
    detail: Portable page content becomes vector or PDF output.
  - label: Submit
    detail: Native or managed lanes deliver the artifact.
  - label: Observe
    detail: Job events and diagnostics expose capabilities, timing, and failure.
  - label: Verify
    detail: Harnesses retain output and metrics for cross-platform CI.
sourcePath: src/PrintingTools.Core/Rendering
docsPath: docs/printing-sample-walkthroughs.md
related:
  - printing-tools/pagination-preview
  - printing-tools/platform-adapters
---

## Skia vector/PDF rendering, managed fallbacks, job history, diagnostic events, and cross-platform harnesses support visible applications, sandboxed hosts, headless automation, and CI verification.
