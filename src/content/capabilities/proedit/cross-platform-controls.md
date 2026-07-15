---
order: 9
project: proedit
name: Cross-platform Controls
eyebrow: Avalonia, Uno, and MAUI hosts
status: Preview
description: Shared Skia controls project the same document, layout, rendering, and editing core into Avalonia, Uno Platform, and .NET MAUI applications.
statement: One document engine, hosted through the XAML stack that fits the application.
packages:
  - name: ProEdit.Controls.Skia.Avalonia
    note: Avalonia document controls.
  - name: ProEdit.Controls.Skia.Uno
    note: Uno Platform document controls.
  - name: ProEdit.Controls.Skia.Maui
    note: .NET MAUI document controls.
install: dotnet add package ProEdit.Controls.Skia.Uno --prerelease
usageLanguage: xml
usage: |-
  <controls:ProEditDocumentView
      Document="{x:Bind ViewModel.Document}"
      Zoom="1.0" />
highlights:
  - Shared Skia presentation core
  - Avalonia editor integration
  - Uno Platform controls
  - .NET MAUI controls
layers:
  - label: Core
    detail: Documents, layout, editing, and rendering remain UI-framework neutral.
  - label: Shared control
    detail: The Skia control layer centralizes viewport and document interaction.
  - label: Adapter
    detail: Framework packages map properties, input, lifecycle, and XAML.
  - label: Application
    detail: Each host composes platform navigation, storage, and services.
sourcePath: src/ProEdit.Controls.Skia
related:
  - proedit/document-editor
  - proedit/collaboration
  - proedit/automation
---

## Shared Skia controls project the same document, layout, rendering, and editing core into Avalonia, Uno Platform, and .NET MAUI applications.
