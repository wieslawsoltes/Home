---
order: 23
name: WebScene
eyebrow: Native web-component runtime
category: Frameworks
repo: WebScene
description: A native V8, DOM, CSS, layout, Canvas, and SVG runtime for trusted packaged web components, publishing immutable scene updates into Avalonia and Uno hosts without a WebView.
statement: Run application-owned web components through a native scene pipeline instead of an embedded browser.
accent: "#ff8f72"
featured: true
tier: Flagship
status: Preview
packages:
  - name: WebScene.Core
    note: Portable component lifecycle, scene, and runtime contracts.
  - name: WebScene.Sdk.Avalonia
    note: Reusable native component host for Avalonia applications.
  - name: WebScene.Sdk.Uno
    note: Reusable native component host for Uno Skia desktop applications.
    url: https://github.com/wieslawsoltes/WebScene/tree/main/src/WebScene.Sdk.Uno
  - name: WebScene.JavaScript.Interop
    note: Typed TypeScript-to-.NET host capability generation and runtime bridge.
  - name: WebScene.NativeEngine.Runtime.osx-arm64
    note: Native V8 and scene engine assets for macOS arm64; matching Linux x64 and Windows x64 packages are also published.
install: |-
  git clone --recurse-submodules https://github.com/wieslawsoltes/WebScene.git
  # Build a native runtime sample for the target RID.
usageLanguage: bash
usage: dotnet run --project samples/NativeRuntimeShowcase.Avalonia
highlights:
  - Native V8, DOM, CSS, layout, Canvas, and SVG
  - Packaged components without WebView or Chromium hosting
  - Avalonia and Uno native presenters
  - Custom Elements, Shadow DOM, typed interop, and CDP
audience:
  - .NET products shipping trusted JavaScript or TypeScript component surfaces
  - Avalonia and Uno teams embedding charts, editors, dashboards, or plug-ins
  - Runtime authors exploring a bounded native web-compatibility profile
architecture:
  - label: Runtime
    detail: A dedicated native V8 isolate owns JavaScript, DOM, CSS, layout, Canvas, SVG, and component execution.
  - label: Scene
    detail: Immutable updates cross the native ABI instead of issuing fine-grained UI-thread calls.
  - label: Host
    detail: Avalonia and Uno presenters integrate the scene with framework lifecycle, input, and composition.
  - label: Capability
    detail: Generated typed interop exposes only application-approved .NET services to packaged components.
compatibility:
  - label: Avalonia
    value: Reference presenter
    state: ready
  - label: Uno Platform
    value: Skia desktop presenter
    state: ready
  - label: Native runtimes
    value: macOS arm64, Linux x64, Windows x64
    state: ready
  - label: Web compatibility
    value: Versioned component profile
    state: partial
proof:
  - value: 3 workloads
    label: Monaco, TradingView, showcase
  - value: 2 hosts
    label: Avalonia and Uno
  - value: WPT subset
    label: compatibility evidence
media:
  - src: https://raw.githubusercontent.com/wieslawsoltes/WebScene/main/docs/assets/webscene-logo.jpg
    alt: WebScene project logo
    caption: WebScene is a bounded native web-component runtime for application-owned content.
  - src: https://raw.githubusercontent.com/wieslawsoltes/WebScene/main/docs/assets/screenshots/monaco-editor.png
    alt: Monaco Editor running inside the WebScene native runtime
    caption: Monaco exercises editing, DOM, CSS, events, typed interop, and native scene publication without an embedded browser.
links:
  - label: Avalonia host
    href: https://github.com/wieslawsoltes/WebScene/blob/main/docfx/articles/avalonia.md
  - label: Uno host
    href: https://github.com/wieslawsoltes/WebScene/blob/main/docfx/articles/uno.md
  - label: V8 Inspector debugging
    href: https://github.com/wieslawsoltes/WebScene/blob/main/docs/v8-inspector-debugging.md
limitations: WebScene is pre-production and intentionally does not implement the complete web platform or run arbitrary websites. Supported components must stay within the documented compatibility and security profile for the published native RIDs.
related:
  - xaml-playground
  - nativewebview
  - progpu
  - cdp
---

WebScene keeps hot DOM, CSS, layout, Canvas, SVG, and JavaScript work inside a dedicated native engine. The application UI thread consumes immutable scene state, while typed host capabilities and framework SDK controls keep the security and lifecycle boundary explicit.
