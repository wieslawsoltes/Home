---
order: 42
name: ChatGPT
eyebrow: Earlier cross-platform AI client
category: Tools
repo: ChatGPT
description: An earlier Avalonia ChatGPT client spanning desktop, mobile, and browser, with reusable API, UI, CLI batch-processing, and Windows COM integration packages.
statement: An early experiment in carrying one conversational AI workflow across every Avalonia target.
accent: "#75d7ad"
showInIndex: false
tier: Maintained
status: Maintained
packages:
  - name: ChatGPT
    note: OpenAI API client library.
  - name: ChatGPT.Core
    note: Models, services, and application state.
  - name: ChatGPT.UI
    note: Reusable Avalonia chat UI.
  - name: ChatGPT.CLI
    note: Batch file-processing global tool.
  - name: ChatGptCom
    note: Windows COM automation bridge.
install: dotnet tool install --global ChatGPT.CLI
usageLanguage: bash
usage: |-
  chatgpt -d ./src -p "*.cs" -e md \
    --directions "Write concise API documentation for this source file."
highlights:
  - Desktop, mobile, and browser clients
  - Reusable API and Avalonia UI layers
  - Parallel batch-processing CLI
  - Office/VBA COM automation
audience:
  - Developers studying an earlier multi-target Avalonia application
  - Teams interested in file-oriented AI batch tools
  - Maintainers of legacy Office and COM automation
architecture:
  - label: API + core
    detail: Client, models, services, settings, and view models own conversation behavior.
  - label: UI
    detail: Reusable Avalonia controls render and edit messages across hosts.
  - label: CLI
    detail: A global tool processes file sets through configurable chat-completion prompts.
  - label: COM
    detail: A .NET Framework bridge exposes async chat and events to VBA.
compatibility:
  - label: Desktop
    value: macOS / Windows / Linux
    state: ready
  - label: Mobile / browser
    value: Avalonia hosts
    state: partial
  - label: CLI
    value: .NET tool
    state: ready
  - label: COM / VBA
    value: Windows bridge
    state: ready
proof:
  - value: 6 targets
    label: desktop, mobile, browser
  - value: 5 packages
    label: API to COM
  - value: Earlier work
    label: historical portfolio status
media:
  - src: https://user-images.githubusercontent.com/2297442/224843834-a58190df-3bdb-4722-b737-94e7adc87805.png
    alt: Earlier Avalonia ChatGPT client
    caption: The application carried one conversation interface across desktop, mobile, and browser targets.
links:
  - label: Repository
    href: https://github.com/wieslawsoltes/ChatGPT
  - label: Browser build
    href: https://wieslawsoltes.github.io/ChatGPT/
  - label: CLI guide
    href: https://github.com/wieslawsoltes/ChatGPT#net-tool
limitations: This page documents earlier work and its historical API integration. The upstream OpenAI API, model names, authentication guidance, and target framework versions have changed; use current official APIs for new applications.
related:
  - codexgui
  - nativewebview
  - protranslate
archive:
  order: 11
  kind: Earlier work
  tags:
    - Avalonia
    - AI
    - Desktop
---

The earlier ChatGPT project explored one reusable conversational client across Avalonia desktop, Android, iOS, and browser targets, then extended the same API into file-oriented CLI processing and Windows COM/VBA automation.
