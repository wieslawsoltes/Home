---
order: 98
project: webscene
name: Components & Typed Interop
eyebrow: Explicit host capabilities
status: Preview
description: Custom Elements, an initial Shadow DOM and slotting slice, component manifests, and generated TypeScript-to-.NET bridges package reusable UI while keeping host authority explicit.
statement: Treat JavaScript components as bounded application modules, not arbitrary web pages.
packages:
  - name: WebScene.JavaScript.Interop
    note: Typed host capability contracts and generated JavaScript bindings.
  - name: WebScene.Sdk
    note: Component manifests, assets, lifecycle, and host-bridge coordination.
install: dotnet add package WebScene.JavaScript.Interop --prerelease
usageLanguage: javascript
usage: |-
  class StatusCard extends HTMLElement {
    connectedCallback() {
      this.textContent = "Connected";
    }
  }

  customElements.define("status-card", StatusCard);
highlights:
  - Autonomous Custom Elements
  - Open and closed Shadow DOM roots
  - Default and named slot projection
  - Generated typed host capabilities
layers:
  - label: Package
    detail: Manifests bind trusted scripts, assets, entry points, and required capabilities.
  - label: Component
    detail: Registry, upgrade, lifecycle callbacks, attributes, cloning, and connection transitions define reusable elements.
  - label: Encapsulate
    detail: Shadow roots, scoped styles, inheritance, and slot projection form the current component boundary.
  - label: Bridge
    detail: Generated interfaces expose only typed application services approved by the native host.
sourcePath: src/WebScene.JavaScript.Interop
related:
  - webscene/native-runtime
  - webscene/framework-hosts
---

## WebScene’s component profile is intentionally versioned and narrower than a browser claim; the boundary stays useful because supported lifecycle, projection, styling, and host calls are explicit and testable.
