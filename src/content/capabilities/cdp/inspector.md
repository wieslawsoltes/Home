---
order: 36
project: cdp
name: Inspector & CLI
eyebrow: Human and scripted diagnostics
status: Preview
description: Inspector controls, shared view models, WYSIWYG tools, a desktop client, in-process diagnostics, and CLI commands provide multiple ways to work with CDP targets.
statement: Use the same diagnostics surface from a visual tool or a terminal.
packages:
  - name: Chrome.DevTools.Inspector.Controls
    note: Reusable inspector client controls.
  - name: Chrome.DevTools.Inspector.Shared
    note: Shared inspector models and UI composition.
  - name: Chrome.DevTools.Inspector.Wysiwyg
    note: Visual designer and overlay tools.
  - name: Chrome.DevTools.Cli
    note: CDP inspector command-line client.
  - name: Chrome.DevTools.DiagnosticTools
    note: In-process diagnostic inspector integration.
install: dotnet tool install --global Chrome.DevTools.Cli --prerelease
usageLanguage: bash
usage: |-
  cdp-inspector targets --url http://localhost:9222
  cdp-inspector tree --target 0
  cdp-inspector screenshot --target 0 --output app.png
highlights:
  - Desktop inspector composition
  - WYSIWYG overlays and editing
  - In-process diagnostic tools
  - Scriptable CLI client
layers:
  - label: Connect
    detail: Clients discover targets and create a protocol session.
  - label: Model
    detail: Shared view models normalize trees, properties, events, and commands.
  - label: Present
    detail: Controls and WYSIWYG packages compose a visual inspector.
  - label: Script
    detail: CLI commands expose the same session to terminals and agents.
sourcePath: src/CDP.Inspector.Shared
related:
  - cdp/test-studio
  - cdp/testing-ci
  - cdp/authoring-tools
---

## Inspector controls, shared view models, WYSIWYG tools, a desktop client, in-process diagnostics, and CLI commands provide multiple ways to work with CDP targets.
