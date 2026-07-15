---
order: 5
project: proedit
name: Document Formats
eyebrow: Import, export, and interchange
status: Active
description: Format-focused modules connect the shared document model to DOCX/Open XML, RTF, HTML, Markdown, PDF, PostScript, and XPS workflows.
statement: Keep the editor model portable while formats stay replaceable.
packages:
  - name: ProEdit.OpenXml
    note: Open XML and DOCX document interchange.
  - name: ProEdit.Documents.Rtf
    note: RTF document reader and writer.
  - name: ProEdit.Html
    note: HTML conversion pipeline.
  - name: ProEdit.Markdown
    note: Markdown import and export.
install: dotnet add package ProEdit.OpenXml
usageLanguage: csharp
usage: |-
  await using var input = File.OpenRead("contract.docx");
  var document = await OpenXmlDocumentReader.ReadAsync(input);

  await using var output = File.Create("contract.pdf");
  await PdfDocumentWriter.WriteAsync(document, output);
highlights:
  - DOCX and Open XML
  - RTF, HTML, and Markdown
  - PDF, PostScript, and XPS output
  - Shared document model between formats
layers:
  - label: Read
    detail: A format adapter parses source content and resources.
  - label: Normalize
    detail: Format-specific constructs map into the common document model.
  - label: Edit
    detail: Applications work with one model regardless of origin.
  - label: Write
    detail: Exporters materialize the model for delivery, print, or interchange.
sourcePath: src/ProEdit.OpenXml
related:
  - proedit/document-editor
  - proedit/printing
  - proedit/reporting
---

## Format-focused modules connect the shared document model to DOCX/Open XML, RTF, HTML, Markdown, PDF, PostScript, and XPS workflows.
