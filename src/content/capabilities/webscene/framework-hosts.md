---
order: 99
project: webscene
name: Avalonia & Uno Hosts
eyebrow: Native framework presentation
status: Preview
description: Framework SDK controls host the same native component lifecycle and immutable scene stream inside Avalonia and Uno Skia desktop applications.
statement: Compose a packaged web-authored surface inside a native XAML application lifecycle.
packages:
  - name: WebScene.Backend.Avalonia
    note: Reference native scene presenter and Avalonia integration.
  - name: WebScene.Sdk.Avalonia
    note: Reusable Avalonia component host.
  - name: WebScene.Backend.Uno
    note: Supported Uno Skia desktop presenter.
  - name: WebScene.Sdk.Uno
    note: Reusable Uno component host.
    url: https://github.com/wieslawsoltes/WebScene/tree/main/src/WebScene.Sdk.Uno
install: dotnet add package WebScene.Sdk.Avalonia --prerelease
usageLanguage: xml
usage: |-
  <webscene:WebSceneView
      Component="dashboard"
      HostCapabilities="{Binding Capabilities}" />
highlights:
  - Avalonia reference presenter
  - Uno Skia desktop presenter
  - Shared packaged component lifecycle
  - Native input and scene integration
layers:
  - label: Component
    detail: A trusted package supplies scripts, assets, manifest, and entry point.
  - label: Runtime
    detail: The native engine owns script, document, layout, and paint state.
  - label: Presenter
    detail: Framework-specific backends consume scene updates and route lifecycle and input.
  - label: Application
    detail: Avalonia or Uno owns the surrounding windows, navigation, services, and deployment.
sourcePath: src/WebScene.Sdk.Avalonia
docsPath: docfx/articles/avalonia.md
related:
  - webscene/native-runtime
  - webscene/components-interop
  - webscene/inspector-debugging
---

## Avalonia and Uno hosts expose the same packaged component model while retaining each framework’s application lifecycle and native composition boundary.
