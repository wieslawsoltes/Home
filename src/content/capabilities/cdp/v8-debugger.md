---
order: 89
project: cdp
name: V8 Source Debugger
eyebrow: JavaScript, TypeScript, and WebAssembly
status: Preview
description: An IDE-style Sources workspace connects to raw V8 Inspector targets with hierarchical variables, rich breakpoints, source maps, run-to-cursor, live-edit previews, TypeScript navigation, refactoring, and WebAssembly disassembly.
statement: Debug the original source while preserving the runtime’s exact V8 protocol behavior.
packages:
  - name: Chrome.DevTools.Protocol
    note: Raw V8 Inspector client, source maps, mutation previews, WebAssembly disassembly, and transport contracts.
  - name: Chrome.DevTools.Inspector.Shared
    note: Sources workspace, debugger state, language services, and regeneration adapters.
install: dotnet tool install --global Chrome.DevTools.Inspector --prerelease
usageLanguage: bash
usage: |-
  cdp-inspector --url http://127.0.0.1:9229
  # Open Sources, select the V8 target, and debug mapped code.
highlights:
  - Original-source and indexed source maps
  - Persistent, conditional, function, and instrumentation breakpoints
  - Live-edit preview and source regeneration
  - TypeScript navigation, refactoring, and WebAssembly disassembly
layers:
  - label: Connect
    detail: The client preserves raw V8 messages and target capabilities across the Inspector session.
  - label: Map
    detail: Indexed and ordinary source maps connect generated code, original sources, breakpoints, and edits.
  - label: Debug
    detail: Pause state, lazy variables, scopes, return values, run-to-cursor, blackboxing, and breakpoints stay synchronized.
  - label: Edit
    detail: Validation and regeneration adapters preview safe live edits before mutating the running target.
sourcePath: src/Chrome.DevTools.Protocol/Inspector
docsPath: docs/articles/v8-inspector-language-service-validation.md
related:
  - cdp/inspector
  - cdp/protocol-server
  - cdp/authoring-tools
---

## The Sources workspace combines raw protocol fidelity with original-source mapping and embedded language services, so navigation, refactoring, debugging, and live editing operate on one coherent project view.
