---
order: 100
project: webscene
name: V8 Inspector Debugging
eyebrow: Raw CDP sessions
status: Preview
description: Dedicated V8 isolates expose authenticated raw Inspector WebSockets and optional Chrome discovery endpoints for source debugging, pause state, live edits, and agent tooling.
statement: Debug the native JavaScript runtime with the protocol ecosystem developers already know.
packages:
  - name: WebScene.NativeEngine.Runtime.osx-arm64
    note: Native isolate and Inspector transport implementation, with matching Linux x64 and Windows x64 runtime packages.
  - name: Chrome.DevTools.Protocol
    note: Optional raw discovery host and inspector client integration.
install: dotnet add package Chrome.DevTools.Protocol --prerelease
usageLanguage: bash
usage: |-
  # Start the host with V8 Inspector enabled, then discover targets.
  curl http://127.0.0.1:9229/json/list
highlights:
  - Raw V8 Inspector WebSockets
  - Chrome-compatible target discovery
  - Source navigation and pause inspection
  - Live-edit and CDP tooling integration
layers:
  - label: Isolate
    detail: Each native V8 runtime owns its Inspector session and debug state.
  - label: Transport
    detail: Authenticated raw WebSockets preserve V8 protocol messages without semantic redispatch.
  - label: Discover
    detail: Optional HTTP endpoints publish Chrome-compatible target metadata.
  - label: Inspect
    detail: DevTools, CDP Inspector, or an agent can navigate sources, pause, evaluate, and preview live edits.
sourcePath: experiments/WebScene.NativeEngine.Probe
docsPath: docs/v8-inspector-debugging.md
related:
  - webscene/native-runtime
  - webscene/framework-hosts
---

## Raw Inspector sessions keep WebScene’s V8 runtime compatible with established debugging clients while allowing the application to control discovery and authentication.
