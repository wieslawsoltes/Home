---
order: 97
project: webscene
name: Native Scene Runtime
eyebrow: V8, DOM, CSS, layout, Canvas, and SVG
status: Preview
description: A dedicated native V8 engine executes a bounded web-component profile and publishes immutable DOM, layout, Canvas, SVG, and paint state through a scene-oriented ABI.
statement: Keep web-authored hot paths native and publish a compact scene to the host.
packages:
  - name: WebScene.Core
    note: Portable runtime, scene, lifecycle, and component contracts.
  - name: WebScene.NativeEngine.Runtime.osx-arm64
    note: Native V8 and scene engine assets for macOS arm64, with matching Linux x64 and Windows x64 packages.
install: |-
  git clone --recurse-submodules https://github.com/wieslawsoltes/WebScene.git
  dotnet run --project samples/NativeRuntimeShowcase.Avalonia
usageLanguage: javascript
usage: |-
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  context.fillStyle = "#8ea2ff";
  context.fillRect(24, 24, 160, 80);
highlights:
  - Dedicated V8 isolates
  - DOM, CSS, layout, Canvas, and SVG
  - Immutable native scene publication
  - Deterministic compatibility runner
layers:
  - label: Script
    detail: V8 executes trusted packaged JavaScript and TypeScript output in a dedicated isolate.
  - label: Platform
    detail: The bounded DOM, CSS, events, layout, Canvas, and SVG surface implements the supported profile.
  - label: Scene
    detail: Native layout and paint produce immutable updates instead of chatty object-level interop.
  - label: Validate
    detail: Curated WPT cases and product-scale fixtures measure declared compatibility.
sourcePath: experiments/WebScene.NativeEngine.Probe
related:
  - webscene/components-interop
  - webscene/framework-hosts
  - webscene/inspector-debugging
---

## The native engine owns script, document state, layout, and paint together so high-frequency component work does not bounce through the managed UI thread.
