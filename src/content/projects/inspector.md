---
order: 24
name: Inspector
eyebrow: Agent-ready Avalonia inspection
category: Tools
repo: Inspector
description: A .NET CLI and runtime infrastructure for inspecting and manipulating live Avalonia visual and logical trees through host, process, and deterministic automation workflows.
statement: Inspect, understand, and reshape a running Avalonia interface from the terminal or an agent.
accent: "#72d6ff"
featured: true
tier: Flagship
status: Active
packages:
  - name: Inspector.Cli.Tool
    note: Global .NET tool with deterministic text and JSON commands.
  - name: Inspector.AvaloniaAdapter
    note: Visual and logical tree, property, and mutation adapters for Avalonia.
  - name: Inspector.Host
    note: In-process host runtime and mutation services.
  - name: Inspector.Transport
    note: Local transport, sessions, and authorization models.
  - name: Inspector.Contracts
    note: Shared tree, property, mutation, schema, and diagnostic contracts.
install: dotnet tool install --global Inspector.Cli.Tool
usageLanguage: bash
usage: |-
  inspector connect --mode process --name MyAvaloniaApp --json
  inspector tree get --session-id <session-id> --kind visual --json
  inspector node get-properties --session-id <session-id> --node-id <node-id> --json
highlights:
  - Visual and logical tree inspection
  - Live properties and structural mutation
  - Host, process, and deterministic stub modes
  - Stable JSON for tools and coding agents
audience:
  - Avalonia developers debugging live tree and property state
  - Tool authors building inspection or preview workflows
  - Coding agents that need deterministic, scriptable UI feedback
architecture:
  - label: Contracts
    detail: Shared DTOs describe capabilities, sessions, visual and logical trees, properties, mutations, errors, and diagnostics.
  - label: Host + transport
    detail: An in-process runtime exposes authorized, session-based inspection through a local endpoint.
  - label: Avalonia adapter
    detail: Tree traversal, property normalization, and mutation services translate runtime controls into portable contracts.
  - label: CLI
    detail: Human-readable and deterministic JSON commands connect, inspect, edit, validate, and report stable exit codes.
compatibility:
  - label: .NET
    value: "10.0"
    state: ready
  - label: Avalonia
    value: Host and adapter
    state: ready
  - label: Host / process
    value: Connection modes
    state: ready
  - label: Agent automation
    value: Deterministic JSON
    state: ready
proof:
  - value: 2 trees
    label: visual and logical topology
  - value: 3 modes
    label: stub, host, and process
  - value: 5 operations
    label: set, insert, remove, move, reparent
media:
  - src: https://opengraph.githubassets.com/portfolio-inspector/wieslawsoltes/Inspector
    alt: Inspector GitHub repository preview
    caption: Inspector combines Avalonia runtime adapters, session infrastructure, a command-line tool, tests, and an instrumented sample application.
links:
  - label: CLI guide
    href: https://github.com/wieslawsoltes/Inspector/blob/main/README.md#cli-usage-examples
  - label: Sample application
    href: https://github.com/wieslawsoltes/Inspector/tree/main/samples/Inspector.SampleApp
  - label: Agent skill
    href: https://github.com/wieslawsoltes/Inspector/blob/main/SKILL/inspector-avalonia-cli/SKILL.md
  - label: Repository
    href: https://github.com/wieslawsoltes/Inspector
limitations: Full process-mode UI inspection requires the target application to publish live Inspector snapshots. Without that integration, process mode deliberately falls back to process metadata rather than claiming a live Avalonia tree.
related:
  - cdp
  - avalonia-development-plugin
  - xaml-playground
  - devtools-uno
---

Inspector makes a running Avalonia interface available as a stable, session-based engineering surface. Its contracts, transport, host runtime, Avalonia adapter, and CLI expose visual and logical trees, property metadata, live edits, structural mutations, diagnostics, and deterministic JSON for both developers and coding agents.
