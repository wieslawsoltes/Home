---
order: 8
name: CDP
eyebrow: DevTools protocol for native UI
category: Tools
repo: CDP
description: A native UI testing and diagnostics platform built on Chrome DevTools Protocol, with Test Studio, YAML flows, recording, headless CI, Playwright, Selenium, Appium, inspectors, and framework adapters.
statement: Design, record, run, and diagnose serious native UI tests through one open protocol.
accent: "#5ee1c0"
featured: true
tier: Flagship
status: Preview
packages:
  - name: Chrome.DevTools.Protocol
    note: Protocol server, sessions, transports, and domain dispatch.
  - name: Chrome.DevTools.Avalonia
    note: Avalonia DOM, CSS, input, page, overlay, and runtime domains.
  - name: Chrome.DevTools.Inspector
    note: Desktop inspector and Test Studio global tool.
  - name: Chrome.DevTools.Automation.Headless
    note: Headless test driver and CI helpers.
  - name: Chrome.DevTools.Runner
    note: Headless .flow.yaml test runner global tool.
install: dotnet add package Chrome.DevTools.Avalonia --prerelease
usageLanguage: csharp
usage: |-
  // Register the Avalonia adapter and start the CDP endpoint.
  // Connect Chrome DevTools, Playwright, or Puppeteer
  // to the exposed HTTP/WebSocket discovery URL.
highlights:
  - Visual Test Studio and YAML flows
  - Recorder, assertions, telemetry, and reports
  - Headless CI, Playwright, Selenium, and Appium
  - Avalonia, WPF, WinUI, Uno, and OS adapters
audience:
  - Desktop teams building repeatable end-to-end and regression suites
  - QA engineers authoring visual and YAML-native test flows
  - Framework, tooling, and agent authors needing inspectable native UI
architecture:
  - label: Author
    detail: Test Studio, recorder, visual node editor, YAML IntelliSense, selectors, environments, and reusable flows define intent.
  - label: Run
    detail: Desktop, CLI, headless, Playwright, Selenium, Appium, and OS automation drivers execute the same UI operations.
  - label: Observe
    detail: Screenshots, assertions, network events, CPU, memory, FPS, step timing, and reports capture evidence.
  - label: Protocol
    detail: CDP domains and Avalonia, WPF, WinUI, Uno, or OS adapters translate actions into native framework behavior.
compatibility:
  - label: Test Studio
    value: Visual + YAML flows
    state: ready
  - label: Headless CI
    value: Avalonia.Headless
    state: ready
  - label: Playwright / Selenium / Appium
    value: Drivers
    state: ready
  - label: Avalonia / WPF / WinUI / Uno
    value: Framework adapters
    state: partial
proof:
  - value: 50+ commands
    label: flow action catalog
  - value: 4 test lanes
    label: Studio, CLI, headless, external drivers
  - value: Per step
    label: screenshots and telemetry
media:
  - src: https://github.com/user-attachments/assets/3b9d860d-fc57-421c-b947-742c0f9f70e9
    width: 3824
    height: 2318
    alt: Chrome DevTools inspecting an Avalonia application through CDP
    caption: A native Avalonia visual tree exposed inside familiar Chrome DevTools.
links:
  - label: Test Studio guide
    href: https://github.com/wieslawsoltes/CDP/blob/main/docs/articles/test-studio.md
  - label: Headless testing
    href: https://github.com/wieslawsoltes/CDP/blob/main/docs/articles/headless-cdp-testing.md
  - label: Test scripting
    href: https://github.com/wieslawsoltes/CDP/blob/main/docs/articles/test-studio-scripting.md
  - label: Documentation
    href: https://wieslawsoltes.github.io/CDP/
limitations: CDP and Test Studio are active previews. Framework-domain coverage and OS automation permissions vary by target; pin prerelease versions and validate flows in the intended CI environment.
related:
  - avalonia-development-plugin
  - codexgui
  - xaml-playground
---

CDP is a complete native UI testing and diagnostics platform. Test Studio records interactions, authors synchronized YAML and visual flows, infers assertions, runs step-by-step, captures screenshots and telemetry, and produces reports. The same protocol surface supports headless CI, Playwright, Puppeteer, Selenium, Appium, CLI and agent workflows.
