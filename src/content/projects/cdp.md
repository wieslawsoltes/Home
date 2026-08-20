---
order: 8
name: CDP
eyebrow: DevTools protocol for native UI
category: Tools
repo: CDP
description: A native UI testing, debugging, and authoring platform built on Chrome DevTools Protocol, with Test Studio, headless CI, framework adapters, V8 source debugging, RDP, reusable editors, and test-management integrations.
statement: Design, run, debug, and connect serious native software workflows through one open protocol platform.
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
  - name: Chrome.DevTools.Rdp
    note: Managed RDP protocol client, security, virtual channels, input, and frame updates.
  - name: Chrome.DevTools.Integration.Core
    note: Test-management contracts and scripting facade for TestMo, TestRail, Xray, Zephyr, and Qase.
install: dotnet add package Chrome.DevTools.Avalonia --prerelease
usageLanguage: csharp
usage: |-
  // Register the Avalonia adapter and start the CDP endpoint.
  // Connect Chrome DevTools, Playwright, or Puppeteer
  // to the exposed HTTP/WebSocket discovery URL.
highlights:
  - Test Studio, YAML flows, integrations, and reports
  - IDE-style V8, TypeScript, source-map, and WebAssembly debugging
  - Headless, browser-driver, OS automation, and RDP lanes
  - Avalonia, WPF, WinUI, Uno, HTML, Markdown, document, and PDF tooling
audience:
  - Desktop teams building repeatable end-to-end and regression suites
  - QA engineers authoring visual and YAML-native test flows with external test-management systems
  - Framework, runtime, tooling, and agent authors needing inspectable native UI or V8 sessions
architecture:
  - label: Author
    detail: Test Studio, recorder, YAML, node flows, HTML/Markdown/document/PDF editors, and language services define intent.
  - label: Run
    detail: Desktop, CLI, headless, Playwright, Selenium, Appium, and OS automation drivers execute the same UI operations.
  - label: Observe
    detail: Screenshots, assertions, network events, CPU, memory, FPS, V8 pause state, source maps, and reports capture evidence.
  - label: Protocol
    detail: CDP domains, raw V8 Inspector sessions, XAML adapters, OS automation, and RDP translate actions into the target runtime.
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
    value: Framework parity lane
    state: ready
  - label: V8 / WebAssembly
    value: Debugger + live edit
    state: ready
  - label: RDP
    value: Managed preview client
    state: partial
proof:
  - value: 50+ commands
    label: flow action catalog
  - value: 5 providers
    label: test-management integrations
  - value: 4 frameworks
    label: native XAML adapters
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
  - label: V8 debugging
    href: https://github.com/wieslawsoltes/CDP/blob/main/docs/articles/v8-inspector-language-service-validation.md
  - label: Test integrations
    href: https://github.com/wieslawsoltes/CDP/blob/main/docs/test_studio/integrations.md
  - label: Documentation
    href: https://wieslawsoltes.github.io/CDP/
limitations: CDP and Test Studio are active previews. Framework-domain coverage and OS automation permissions vary by target; pin prerelease versions and validate flows in the intended CI environment.
related:
  - avalonia-development-plugin
  - codexgui
  - xaml-playground
  - webscene
---

CDP has grown from a framework adapter into a protocol-centered developer platform. Native UI inspection and Test Studio share infrastructure with V8 and WebAssembly debugging, source-map-aware live editing, managed RDP, operating-system automation, reusable authoring controls, and external test-management providers.
