---
order: 28
name: CodexGui
eyebrow: Native Codex workspace
category: Uno Platform
repo: CodexGui
description: A native Avalonia desktop client for Codex app-server with thread and approval workflows, typed stdio/WebSocket transports, and ProMarkdown-powered rich conversation rendering including Mermaid diagrams.
statement: A focused native workspace for long-running Codex collaboration.
accent: "#89e2bf"
tier: Experimental
status: Preview
packages:
  - name: CodexGui.App
    note: Desktop application and global .NET tool.
  - name: CodexGui.AppServer
    note: Typed app-server protocol client and transports.
  - name: ProMarkdown
    note: Pinned source dependency for native Markdown, selection, links, syntax, and Mermaid rendering.
install: dotnet tool install --global CodexGui.App --prerelease
usageLanguage: bash
usage: codexgui
highlights:
  - Native Avalonia client
  - Threads and approvals
  - stdio and WebSocket transports
  - ProMarkdown rendering with Mermaid diagrams
audience:
  - Developers who want a native Codex client
  - App-server integration authors
  - Avalonia teams exploring extensible agent workspaces
architecture:
  - label: Application
    detail: Avalonia XAML and C# compose the native desktop application.
  - label: Tooling
    detail: Focused packages add diagnostics, protocol, and workspace capabilities.
  - label: Targets
    detail: Local app-server processes and remote WebSocket endpoints feed the same workspace.
compatibility:
  - label: Avalonia desktop
    value: Current host
    state: ready
  - label: ProMarkdown
    value: Pinned source dependency
    state: ready
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
    width: 1200
    height: 600
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
  - promarkdown
---

CodexGui turns the Codex app-server protocol into a native desktop workflow. Its typed transports keep local process and remote WebSocket sessions consistent, while the pinned ProMarkdown stack adds native rich conversation rendering and complete Mermaid support beside thread, approval, detail, and terminal surfaces.
