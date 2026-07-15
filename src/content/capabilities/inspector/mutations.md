---
order: 40
project: inspector
name: Live Tree Mutation
eyebrow: Edit the running interface
status: Active
description: Property and structural mutations can set values, insert controls, remove nodes, move siblings, reparent branches, or batch several changes, with dry-run validation available before applying edits.
statement: Move from observing the interface to safely reshaping it in place.
packages:
  - name: Inspector.Host
    note: Mutation engine, validation, diagnostics, and runtime orchestration.
  - name: Inspector.Contracts
    note: Portable mutation commands and results.
install: |-
  dotnet add package Inspector.Host
  dotnet add package Inspector.Contracts
usageLanguage: bash
usage: inspector tree mutate   --session-id sess-123   --target-node-id visual-root   --operation insert   --payload '{"typeName":"Avalonia.Controls.TextBox","name":"EmailInput","properties":{"Watermark":"Email"}}'   --dry-run --json
highlights:
  - Set, insert, remove, move, and reparent
  - Dry-run validation
  - Batch mutation in one command
  - Structured diagnostics and operation identifiers
layers:
  - label: Describe
    detail: A command identifies the target, operation, payload, and operation id.
  - label: Validate
    detail: Dry-run and schema checks reject unsupported nodes, properties, or structure.
  - label: Apply
    detail: The host or live process mutation lane updates Avalonia state.
  - label: Verify
    detail: A fresh tree or property query proves the resulting runtime shape.
sourcePath: src/Inspector.Host/Mutation
related:
  - inspector/properties
  - inspector/runtime-trees
  - inspector/agent-cli
---

## Property and structural mutations can set values, insert controls, remove nodes, move siblings, reparent branches, or batch several changes, with dry-run validation available before applying edits.
