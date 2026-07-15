---
order: 46
project: protranslate
name: Generators & Analyzers
eyebrow: Typed localization contracts
status: Active
description: An incremental generator creates strongly typed keys and provider manifests while Roslyn analyzers catch missing keys, placeholder mismatches, and catalog gaps.
statement: Move localization mistakes from runtime into the build.
packages:
  - name: ProTranslate.SourceGenerator
    note: Typed keys, bindable strings, providers, and manifests.
  - name: ProTranslate.Analyzers
    note: Translation key, placeholder, and catalog diagnostics.
  - name: ProTranslate.MicrosoftExtensions
    note: Dependency injection and IStringLocalizer integration.
install: |-
  dotnet add package ProTranslate.SourceGenerator
  dotnet add package ProTranslate.Analyzers
usageLanguage: csharp
usage: |-
  var title = Translations.Shell.Title;
  var greeting = Translations.Account.Greeting(user.DisplayName);
highlights:
  - Strongly typed keys
  - Incremental generation
  - Placeholder diagnostics
  - IStringLocalizer and DI integration
layers:
  - label: Scan
    detail: The build discovers catalogs and declared translation keys.
  - label: Generate
    detail: Typed APIs and provider metadata join the compilation.
  - label: Analyze
    detail: Roslyn diagnostics compare usage, placeholders, and coverage.
  - label: Integrate
    detail: DI and IStringLocalizer adapters expose generated services to applications.
sourcePath: src/ProTranslate.SourceGenerator
related:
  - protranslate/globalization-core
  - protranslate/framework-adapters
  - protranslate/formats-resources
---

## An incremental generator creates strongly typed keys and provider manifests while Roslyn analyzers catch missing keys, placeholder mismatches, and catalog gaps.
