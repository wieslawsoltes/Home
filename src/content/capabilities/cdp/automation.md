---
order: 35
project: cdp
name: Automation Drivers
eyebrow: Headless, Selenium, and Appium
status: Preview
description: Automation packages connect CDP-aware applications to headless tests, Selenium, Appium, and cross-platform operating-system accessibility workflows.
statement: Drive native UI through reusable automation boundaries.
packages:
  - name: Chrome.DevTools.Automation.Headless
    note: Headless driver and test helpers.
  - name: Chrome.DevTools.Automation.Selenium
    note: Selenium orchestration support.
  - name: Chrome.DevTools.Automation.Appium
    note: Appium driver and setup support.
  - name: Chrome.DevTools.Automation.OS
    note: Operating-system automation and accessibility provider.
install: dotnet add package Chrome.DevTools.Automation.Headless --prerelease
usageLanguage: csharp
usage: |-
  await using var app = await CdpHeadlessApp.StartAsync<App>();
  var page = await app.ConnectAsync();

  await page.ClickAsync("button[name=Save]");
  await page.ScreenshotAsync("saved.png");
highlights:
  - Headless application runner
  - Selenium integration
  - Appium integration
  - OS accessibility automation
layers:
  - label: Launch
    detail: A driver starts or attaches to the application under test.
  - label: Discover
    detail: The CDP target describes available sessions and UI state.
  - label: Drive
    detail: Selectors, input, evaluation, and waits express test intent.
  - label: Assert
    detail: Snapshots, properties, screenshots, and events provide evidence.
sourcePath: src/CDP.Automation.Headless
related:
  - cdp/test-studio
  - cdp/testing-ci
  - cdp/framework-adapters
---

## Automation packages connect CDP-aware applications to headless tests, Selenium, Appium, and cross-platform operating-system accessibility workflows.
