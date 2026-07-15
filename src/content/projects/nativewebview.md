---
order: 25
name: NativeWebView
eyebrow: Native browser embedding
category: Controls
repo: NativeWebView
description: A cross-platform Avalonia WebView that uses each operating system’s browser engine, with embedded, GPU-surface, offscreen, dialog, and authentication workflows.
statement: Embed the platform browser without shipping another Chromium runtime.
accent: "#77cfff"
featured: true
tier: Flagship
status: Preview
packages:
  - name: NativeWebView
    note: Avalonia control and cross-platform public API.
  - name: NativeWebView.Core
    note: Backend contracts, navigation, scripting, and messaging.
  - name: NativeWebView.Platform.Windows
    note: Windows WebView2 platform backend.
  - name: NativeWebView.Auth
    note: System-browser authentication flows.
install: |-
  dotnet add package NativeWebView
  dotnet add package NativeWebView.Platform.Windows
usageLanguage: csharp
usage: |-
  NativeWebViewRuntime.EnsureCurrentPlatformRegistered();
  var backend = NativeWebViewRuntime.CreateBackend();
  var webView = new NativeWebView(backend);
  await webView.InitializeAsync();
  webView.Navigate(new Uri("https://example.com"));
highlights:
  - Native platform engines
  - Embedded and offscreen modes
  - JavaScript messaging
  - Desktop, mobile, and browser targets
audience:
  - Avalonia apps embedding trusted web content
  - OAuth and system-browser authentication flows
  - Hybrid desktop tools that need low distribution weight
architecture:
  - label: Control
    detail: The Avalonia surface owns lifecycle, navigation, events, and render mode.
  - label: Core
    detail: Portable contracts cover backends, messaging, scripts, permissions, and navigation.
  - label: Platform
    detail: Each package binds the native browser engine and capability set.
  - label: Modes
    detail: Embedded, GPU-surface, and offscreen presentation fit different composition needs.
compatibility:
  - label: Windows / macOS / Linux
    value: Control + dialog + auth
    state: ready
  - label: iOS / Android
    value: Control + auth
    state: partial
  - label: Browser
    value: Control + auth
    state: partial
  - label: Dialog on mobile/web
    value: Unsupported
    state: planned
proof:
  - value: 6 targets
    label: platform directions
  - value: 3 modes
    label: presentation choices
  - value: Native engine
    label: no bundled Chromium
media:
  - src: https://opengraph.githubassets.com/portfolio-v2/wieslawsoltes/NativeWebView
    alt: NativeWebView GitHub repository preview
    caption: The NativeWebView repository contains the current source, samples, releases, and issue history.
links:
  - label: Documentation
    href: https://wieslawsoltes.github.io/NativeWebView/
  - label: Samples
    href: https://github.com/wieslawsoltes/NativeWebView/tree/main/samples
limitations: Capabilities differ by operating system and render mode. Check the live support matrix before relying on proxy, dialog, or offscreen behavior.
related:
  - avalonia-silknet
  - cdp
  - xaml-playground
---

NativeWebView normalizes browser hosting without normalizing away platform capabilities. A common control selects a registered backend, while platform packages bind WebView2, WKWebView, WebKitGTK, mobile views, or browser hosting.
