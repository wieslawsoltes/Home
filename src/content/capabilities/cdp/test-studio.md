---
order: 31
project: cdp
name: Test Studio
eyebrow: Visual native UI test authoring
status: Preview
description: A complete test-design workspace records interactions, synchronizes step lists with YAML, offers live selector IntelliSense and assertion inference, composes visual node flows, launches apps, runs suites, and presents screenshots, logs, telemetry, and reports.
statement: Author serious native UI tests visually, declaratively, or both.
packages:
  - name: Chrome.DevTools.Inspector
    note: Desktop inspector and integrated Test Studio global tool.
  - name: Chrome.DevTools.Inspector.Shared
    note: Test Studio models, flow execution, recorder, telemetry, and workspace composition.
  - name: Chrome.DevTools.Inspector.Controls
    note: Reusable editor, chart, diff, overlay, and diagnostics controls.
install: |-
  dotnet tool install --global Chrome.DevTools.Inspector --prerelease
  cdp-inspector
usageLanguage: bash
usage: |-
  # Connect Test Studio to the target CDP endpoint.
  cdp-inspector --url http://127.0.0.1:9222

  # Record a flow, infer assertions, then run it
  # interactively or export the .flow.yaml file.
highlights:
  - Recording and visual node flows
  - Synchronized YAML with 50+ commands
  - Live selectors and assertion inference
  - Screenshots, telemetry, suites, and reports
layers:
  - label: Record
    detail: Pointer and focus events become stable selector-driven steps.
  - label: Author
    detail: Step list, YAML editor, IntelliSense, environments, and node graph stay synchronized.
  - label: Execute
    detail: Play, pause, stop, step, reusable flows, loops, scripts, and app launch drive the target.
  - label: Evidence
    detail: Assertions, screenshots, logs, CPU, memory, FPS, network, timing, and reports explain every result.
sourcePath: samples/CdpInspectorApp
docsPath: docs/articles/test-studio.md
related:
  - cdp/testing-ci
  - cdp/automation
  - cdp/inspector
---

## A complete test-design workspace records interactions, synchronizes step lists with YAML, offers live selector IntelliSense and assertion inference, composes visual node flows, launches apps, runs suites, and presents screenshots, logs, telemetry, and reports.
