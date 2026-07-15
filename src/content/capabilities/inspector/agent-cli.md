---
order: 41
project: inspector
name: CLI & Agent Automation
eyebrow: Deterministic UI feedback loops
status: Active
description: The global .NET tool provides stub, host, and process connection modes, persistent sessions, deterministic JSON, explicit diagnostics, and stable exit codes for terminals, scripts, tests, and coding agents.
statement: Give automation a precise read–act–verify loop over Avalonia UI.
packages:
  - name: Inspector.Cli.Tool
    note: Command-line client and global .NET tool.
  - name: Inspector.Transport
    note: Local sessions, authorization, and request transport.
install: dotnet tool install --global Inspector.Cli.Tool
usageLanguage: bash
usage: |-
  inspector capabilities --json
  inspector connect --mode host   --address local://inspector   --client-id coding-agent --json

  # Reuse the returned session for tree, property,
  # mutation, and verification commands.
highlights:
  - Stub, host, and process modes
  - Persistent session identifiers
  - Deterministic JSON and explicit exit codes
  - Codex skill for repeatable workflows
layers:
  - label: Discover
    detail: Capabilities and schema metadata tell clients what the runtime supports.
  - label: Connect
    detail: Stub, host, or process targeting creates a persistent session.
  - label: Operate
    detail: Tree, property, and mutation commands share one predictable interface.
  - label: Diagnose
    detail: Structured errors, diagnostics, and exit codes make failures actionable.
sourcePath: src/Inspector.Cli
docsPath: README.md
related:
  - inspector/sessions
  - inspector/runtime-trees
  - inspector/mutations
---

## The global .NET tool provides stub, host, and process connection modes, persistent sessions, deterministic JSON, explicit diagnostics, and stable exit codes for terminals, scripts, tests, and coding agents.
