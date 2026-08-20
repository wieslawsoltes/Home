---
order: 91
project: cdp
name: Test Management Integrations
eyebrow: Publish test intent and evidence
status: Preview
description: A shared integration facade and focused providers connect Test Studio flows, cases, plans, runs, steps, statuses, folders, and reports to TestMo, TestRail, Xray, Zephyr Scale, and Qase.
statement: Keep native UI execution evidence connected to the team’s test-management system.
packages:
  - name: Chrome.DevTools.Integration.Core
    note: Provider contracts, configuration, result models, and scripting facade.
  - name: Chrome.DevTools.Integration.TestMo
    note: TestMo cases, runs, configuration, and step results.
  - name: Chrome.DevTools.Integration.TestRail
    note: TestRail cases, plans, entries, separated steps, and results.
  - name: Chrome.DevTools.Integration.Xray
    note: Xray test import and manual step workflows.
  - name: Chrome.DevTools.Integration.Zephyr
    note: Zephyr Scale cycles, folders, cases, and execution results.
  - name: Chrome.DevTools.Integration.Qase
    note: Qase run mappings, cases, and step statuses.
install: dotnet add package Chrome.DevTools.Integration.Core --prerelease
usageLanguage: javascript
usage: |-
  const run = await Integrations.createRun("release-smoke");
  await Integrations.publishResult(run.id, {
    caseId: "login",
    status: "passed"
  });
highlights:
  - TestMo and TestRail
  - Xray and Zephyr Scale
  - Qase
  - Test Studio UI and Jint scripting facade
layers:
  - label: Configure
    detail: Test Studio stores provider endpoints, projects, suites, credentials, and mapping policy.
  - label: Map
    detail: A common model normalizes cases, folders, cycles, plans, runs, steps, and statuses.
  - label: Execute
    detail: Visual, YAML, CLI, or scripted flows produce the same structured result evidence.
  - label: Publish
    detail: Focused adapters translate evidence into each provider’s API without leaking provider details into flow logic.
sourcePath: src/CDP.Integration.Core
docsPath: docs/test_studio/integrations.md
related:
  - cdp/test-studio
  - cdp/testing-ci
  - cdp/automation
---

## One provider-neutral facade lets Test Studio and scripted flows publish cases, steps, runs, and evidence while each adapter preserves the external system’s planning model.
