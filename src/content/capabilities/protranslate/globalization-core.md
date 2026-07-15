---
order: 43
project: protranslate
name: Globalization Core
eyebrow: Framework-neutral localization
status: Active
description: Translation lookup, culture switching, fallback, formatting, regions, measurements, and flow direction live in a portable service layer.
statement: Keep globalization policy independent from any one UI framework.
packages:
  - name: ProTranslate.Abstractions
    note: Portable translation and globalization contracts.
  - name: ProTranslate.Core
    note: Catalogs, fallback, formatting, culture, region, and direction services.
install: dotnet add package ProTranslate.Core
usageLanguage: csharp
usage: |-
  var translations = new TranslationService(provider);
  translations.SetCulture(CultureInfo.GetCultureInfo("pl-PL"));

  var title = translations["Shell.Title"];
highlights:
  - Runtime culture switching
  - Fallback chains
  - Formatting and plural-ready values
  - Region, measurement, and flow direction
layers:
  - label: Catalog
    detail: Providers expose keys and localized values.
  - label: Resolve
    detail: Culture and fallback policy choose the best match.
  - label: Format
    detail: Arguments, numbers, dates, and regional rules materialize text.
  - label: Notify
    detail: Applications react to culture and direction changes.
sourcePath: src/ProTranslate.Core
related:
  - protranslate/framework-adapters
  - protranslate/formats-resources
  - protranslate/compile-time-tooling
---

## Translation lookup, culture switching, fallback, formatting, regions, measurements, and flow direction live in a portable service layer.
