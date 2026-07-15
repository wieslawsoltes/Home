---
order: 39
project: inspector
name: Properties & Value Sources
eyebrow: Explain live control state
status: Active
description: Property inspection reports names, owners, types, values, writability, and value sources for a selected Avalonia node, then exposes focused property changes through the same session.
statement: See the values that actually shape a control—and change them deliberately.
packages:
  - name: Inspector.AvaloniaAdapter
    note: Property discovery, normalization, metadata, and Avalonia mutation adapters.
install: dotnet add package Inspector.AvaloniaAdapter
usageLanguage: bash
usage: |-
  inspector node get-properties   --session-id sess-123   --node-id visual-button --json

  inspector node set-property   --session-id sess-123   --node-id visual-button   --property Width --value 320 --json
highlights:
  - Property names, owners, types, and values
  - Local and normalized value-source metadata
  - Writable property discovery
  - Session-aware live updates
layers:
  - label: Select
    detail: A stable tree node identifies the runtime object.
  - label: Inspect
    detail: The Avalonia adapter discovers framework and reflected properties.
  - label: Normalize
    detail: Values and sources become deterministic contract data.
  - label: Edit
    detail: Validated property changes flow back through the current session.
sourcePath: src/Inspector.AvaloniaAdapter
related:
  - inspector/runtime-trees
  - inspector/mutations
  - inspector/agent-cli
---

## Property inspection reports names, owners, types, values, writability, and value sources for a selected Avalonia node, then exposes focused property changes through the same session.
