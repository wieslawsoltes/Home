---
order: 63
project: xaml-to-csharp-generator
name: Hot Reload, Hot Design & MCP
eyebrow: Live tooling for humans and agents
status: Active
description: Workspace, runtime, and preview MCP hosts expose semantic queries, preview lifecycle, source-generated hot reload, hot design, studio state, and remote protocol contracts.
statement: Give editors and coding agents the same live, structured control over XAML workspaces.
packages:
  - name: XamlToCSharpGenerator.McpServer.Tool
    note: axsg-mcp workspace host.
  - name: XamlToCSharpGenerator.RemoteProtocol
    note: JSON-RPC, MCP, preview, and studio contracts.
  - name: XamlToCSharpGenerator.Runtime.Avalonia
    note: Avalonia hot-reload and runtime integration.
install: dotnet tool install --global XamlToCSharpGenerator.McpServer.Tool
usageLanguage: bash
usage: |-
  axsg-mcp --workspace /path/to/repo

  # Runtime hosts expose hot reload and hot design state.
  # Preview hosts support start, update, reload, and stop
  # through the shared remote protocol.
highlights:
  - Workspace, runtime, and preview hosts
  - Source-generated hot reload
  - Hot design and studio state
  - iOS and remote transport support
layers:
  - label: Host
    detail: The selected workspace, runtime, or preview process owns authoritative state.
  - label: Describe
    detail: Remote protocol contracts expose capabilities and structured resources.
  - label: Change
    detail: Clients update source, preview state, or running generated views.
  - label: Verify
    detail: Diagnostics, lifecycle, and runtime state close the feedback loop.
sourcePath: src/XamlToCSharpGenerator.RemoteProtocol
docsPath: site/articles/guides/mcp-servers-and-live-tooling.md
related:
  - xaml-to-csharp-generator/language-tooling
  - xaml-to-csharp-generator/sourcegen-compiler
---

## Workspace, runtime, and preview MCP hosts expose semantic queries, preview lifecycle, source-generated hot reload, hot design, studio state, and remote protocol contracts.
