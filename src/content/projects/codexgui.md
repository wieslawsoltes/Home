---
order: 28
name: CodexGui
eyebrow: Native Codex workspace
category: Uno Platform
repo: CodexGui
description: A native Avalonia desktop client for Codex app-server with threads, approvals, rich Markdown, stdio and WebSocket transports, and extensible plugin surfaces.
statement: A focused native workspace for long-running Codex collaboration.
accent: "#89e2bf"
tier: Experimental
status: Preview
packages:
  - name: CodexGui.App
    note: Desktop application and global .NET tool.
  - name: CodexGui.AppServer
    note: Typed app-server protocol client and transports.
  - name: CodexGui.Markdown
    note: Rich Markdown rendering for Avalonia.
install: dotnet tool install --global CodexGui.App --prerelease
usageLanguage: bash
usage: codexgui
highlights:
  - Native Avalonia client
  - Threads and approvals
  - stdio and WebSocket transports
  - Rich Markdown and plugins
audience:
  - Developers who want a native Codex client
  - App-server integration authors
  - Avalonia and Uno teams exploring extensible agent workspaces
architecture:
  - label: Application
    detail: WinUI-compatible XAML and C# compose the cross-platform application.
  - label: Tooling
    detail: Focused packages add diagnostics, protocol, and workspace capabilities.
  - label: Targets
    detail: Uno carries the experience across desktop, mobile, and WebAssembly.
compatibility:
  - label: Avalonia desktop
    value: Current host
    state: ready
  - label: Uno Platform
    value: Platform direction
    state: partial
  - label: stdio / WebSocket
    value: Supported
    state: ready
  - label: Protocol changes
    value: Tracked
    state: partial
proof:
  - value: 2 transports
    label: stdio and WebSocket
  - value: Typed client
    label: app-server protocol
  - value: .NET tool
    label: single-command install
media:
  - src: https://opengraph.githubassets.com/portfolio-v2/wieslawsoltes/CodexGui
    alt: CodexGui GitHub repository preview
    caption: The CodexGui repository contains the current source, samples, releases, and issue history.
links:
  - label: Documentation
    href: https://wieslawsoltes.github.io/CodexGui/
limitations: CodexGui follows an evolving app-server protocol and is under active development. Expect frequent updates and pin a known working version.
related:
  - avalonia-development-plugin
  - cdp
  - xaml-visual-editor
---

CodexGui turns the Codex app-server protocol into a native cross-platform workflow. Its typed transport and modular Markdown stack stay reusable while the application adds thread navigation, approvals, rich output, terminal context, and plugin UI, with an Uno Platform direction alongside the current Avalonia host.
