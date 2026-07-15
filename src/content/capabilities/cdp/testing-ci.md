---
order: 32
project: cdp
name: Testing & CI
eyebrow: Headless and repeatable native UI tests
status: Preview
description: Headless Avalonia execution, a global flow runner, Playwright and Puppeteer compatibility, Selenium and Appium orchestration, OS accessibility automation, screenshots, selectors, waits, assertions, and GitHub Actions support cover local through CI test lanes.
statement: Run the same native UI intent interactively, headlessly, or through established automation ecosystems.
packages:
  - name: Chrome.DevTools.Automation.Headless
    note: Avalonia.Headless driver and test helpers.
  - name: Chrome.DevTools.Runner
    note: Global .flow.yaml headless runner.
  - name: Chrome.DevTools.Automation.Selenium
    note: Selenium fixture and orchestration.
  - name: Chrome.DevTools.Automation.Appium
    note: Appium fixture and orchestration.
  - name: Chrome.DevTools.Automation.OS
    note: macOS, Windows, and Linux accessibility automation.
install: |-
  dotnet tool install --global Chrome.DevTools.Runner --prerelease
  dotnet add package Chrome.DevTools.Automation.Headless --prerelease
usageLanguage: bash
usage: |-
  # Execute a Test Studio flow without the desktop editor.
  cdp-runner tests/login.flow.yaml   --app "dotnet run --project src/MyApp -- --headless"   --report artifacts/test-report.html
highlights:
  - Zero-display Avalonia.Headless execution
  - Test Studio flow runner
  - Playwright, Selenium, Appium, and Puppeteer
  - CI screenshots, telemetry, and reports
layers:
  - label: Launch
    detail: The runner starts a headless or visible application and waits for CDP discovery.
  - label: Drive
    detail: Flows or external clients query selectors and dispatch input through protocol domains.
  - label: Assert
    detail: Visibility, text, state, properties, scripts, waits, and screenshots verify behavior.
  - label: Publish
    detail: CI retains logs, images, telemetry, and machine- or human-readable reports.
sourcePath: src/CDP.Automation.Headless
docsPath: docs/articles/headless-cdp-testing.md
related:
  - cdp/test-studio
  - cdp/automation
  - cdp/framework-adapters
---

## Headless Avalonia execution, a global flow runner, Playwright and Puppeteer compatibility, Selenium and Appium orchestration, OS accessibility automation, screenshots, selectors, waits, assertions, and GitHub Actions support cover local through CI test lanes.
