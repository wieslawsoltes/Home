---
order: 38
project: inspector
name: Runtime Trees
eyebrow: Live Avalonia topology
status: Active
description: Inspector enumerates both visual and logical Avalonia trees with stable node identities, hierarchy, type, name, classes, bounds, visibility, and schema-aware metadata.
statement: Turn the running interface into explicit, queryable structure.
packages:
  - name: Inspector.AvaloniaAdapter
    note: Avalonia visual and logical tree traversal and node adapters.
  - name: Inspector.Contracts
    note: Portable tree, node, and schema contracts.
install: |-
  dotnet add package Inspector.AvaloniaAdapter
  dotnet add package Inspector.Contracts
usageLanguage: bash
usage: |-
  inspector connect --mode process --pid 12345 --json
  # Capture data.sessionId from the response.
  inspector tree get --session-id sess-123 --kind visual --json
  inspector tree get --session-id sess-123 --kind logical --json
highlights:
  - Visual and logical tree snapshots
  - Stable node identifiers
  - Type, name, classes, bounds, and visibility
  - Portable contracts for custom clients
layers:
  - label: Connect
    detail: A host or process target creates a reusable Inspector session.
  - label: Traverse
    detail: Avalonia adapters walk visual or logical children from the active root.
  - label: Normalize
    detail: Runtime controls become stable node DTOs with portable metadata.
  - label: Query
    detail: CLI and custom clients retrieve complete trees as text or deterministic JSON.
sourcePath: src/Inspector.AvaloniaAdapter/TreeIntrospection
related:
  - inspector/properties
  - inspector/sessions
  - inspector/agent-cli
---

## Inspector enumerates both visual and logical Avalonia trees with stable node identities, hierarchy, type, name, classes, bounds, visibility, and schema-aware metadata.
