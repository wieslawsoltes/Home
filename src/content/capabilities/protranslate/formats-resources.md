---
order: 45
project: protranslate
name: Formats & Resources
eyebrow: Translation interchange
status: Active
description: ResourceManager integration and format converters connect ProTranslate catalogs to RESX satellites and common localization interchange formats.
statement: Move translation data between applications, translators, and build systems.
packages:
  - name: ProTranslate.Formats
    note: XLIFF, PO, RESX, ARB, JSON, and related format import/export.
  - name: ProTranslate.ResourceManager
    note: ResourceManager and satellite assembly provider.
install: dotnet add package ProTranslate.Formats
usageLanguage: csharp
usage: |-
  await using var stream = File.OpenRead("messages.xlf");
  var catalog = await TranslationFormats.ReadXliffAsync(stream);

  provider.AddCatalog(catalog);
highlights:
  - XLIFF and PO interchange
  - RESX and satellite assemblies
  - ARB and JSON-oriented catalogs
  - Import and export services
layers:
  - label: Read
    detail: A format adapter parses external translation assets.
  - label: Normalize
    detail: Entries become a common catalog with culture and metadata.
  - label: Serve
    detail: Providers expose the catalog to the translation core.
  - label: Write
    detail: Updated catalogs export into translator or platform formats.
sourcePath: src/ProTranslate.Formats
related:
  - protranslate/globalization-core
  - protranslate/compile-time-tooling
---

## ResourceManager integration and format converters connect ProTranslate catalogs to RESX satellites and common localization interchange formats.
