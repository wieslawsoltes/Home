---
order: 42
project: inspector
name: Host & Process Sessions
eyebrow: Choose the right attachment model
status: Active
description: Host mode targets an instrumented local runtime; process mode resolves an existing application by PID or name and consumes published live snapshots; stub mode supplies deterministic fixtures for workflow validation.
statement: Use one session model from isolated command testing to a running Avalonia process.
packages:
  - name: Inspector.Host
    note: In-process runtime and endpoint abstractions.
  - name: Inspector.Transport
    note: Session state, local transport, authorization, and connection contracts.
install: |-
  dotnet add package Inspector.Host
  dotnet add package Inspector.Transport
usageLanguage: bash
usage: |-
  # Instrumented application endpoint
  inspector connect --mode host --address local://inspector --json

  # Already-running application
  inspector connect --mode process --name Inspector.SampleApp --json

  # Deterministic command-flow fixture
  inspector connect --mode stub --client-id tests --json
highlights:
  - Instrumented host endpoints
  - PID or process-name targeting
  - Live snapshot availability signal
  - Deterministic stub fixtures
layers:
  - label: Resolve
    detail: Mode-specific arguments select a host endpoint, running process, or fixture.
  - label: Authorize
    detail: Client identity, version, secret, and requested scopes establish boundaries.
  - label: Persist
    detail: The returned session id survives across CLI invocations.
  - label: Fallback
    detail: Process mode reports whether live UI snapshots exist and otherwise exposes process metadata honestly.
sourcePath: src/Inspector.Transport
related:
  - inspector/agent-cli
  - inspector/runtime-trees
  - inspector/mutations
---

## Host mode targets an instrumented local runtime; process mode resolves an existing application by PID or name and consumes published live snapshots; stub mode supplies deterministic fixtures for workflow validation.
