---
order: 35
name: NativeMessageBox
eyebrow: Native dialogs everywhere
category: Frameworks
repo: NativeMessageBox
description: A managed and native ABI for advanced message dialogs across Windows, macOS, Linux, iOS, Android, and WebAssembly.
statement: Ask a native question through one contract while preserving each platform’s strengths.
accent: "#ff9c7d"
showInIndex: false
tier: Maintained
status: Active
packages:
  - name: NativeMessageBox
    note: Managed client, options, results, native host, and runtime assets.
install: dotnet add package NativeMessageBox
usageLanguage: csharp
usage: |-
  var result = await NativeMessageBoxClient.ShowAsync(
      new MessageBoxOptions(
          message: "Save changes?",
          buttons: MessageBoxButtons.YesNoCancel,
          title: "Document"));
highlights:
  - Six platform implementations
  - Custom buttons, input, and verification
  - Timeouts and secondary content
  - Managed .NET and native C APIs
audience:
  - Cross-platform desktop and mobile applications
  - Native C/C++ and managed .NET hosts
  - Apps that need richer native prompts than OK/Cancel
architecture:
  - label: Contracts
    detail: Portable options and results describe buttons, content, input, policy, and outcomes.
  - label: Managed host
    detail: The .NET client resolves runtime assets, logging, threading, and errors.
  - label: Native ABI
    detail: A versioned header and marshaling boundary serve native and managed callers.
  - label: Platforms
    detail: Windows, macOS, GTK, iOS, Android, and Web implementations preserve native behavior.
compatibility:
  - label: Windows / macOS / Linux
    value: Advanced dialogs
    state: ready
  - label: iOS / Android
    value: Native mobile dialogs
    state: partial
  - label: WebAssembly
    value: Async overlay
    state: partial
  - label: C / C++
    value: Versioned ABI
    state: ready
proof:
  - value: 6 platforms
    label: native implementations
  - value: 2 APIs
    label: .NET and native C
  - value: Structured
    label: buttons, input, timeout result
media:
  - src: https://opengraph.githubassets.com/portfolio-long-tail/wieslawsoltes/NativeMessageBox
    alt: NativeMessageBox GitHub repository preview
    caption: The project packages managed, native, mobile, WebAssembly, sample, and documentation layers around one dialog contract.
links:
  - label: Documentation
    href: https://wieslawsoltes.github.io/NativeMessageBox/
  - label: Cross-platform sample
    href: https://github.com/wieslawsoltes/NativeMessageBox/tree/main/samples/CrossPlatformSample
  - label: Public headers
    href: https://github.com/wieslawsoltes/NativeMessageBox/tree/main/include
limitations: "Feature parity is intentionally platform-specific: mobile and Web backends omit some desktop accessory content, and callers must respect each platform’s UI-thread or activity requirements."
related:
  - printing-tools
  - nativewebview
  - librewinforms
archive:
  order: 4
  kind: Maintained
  tags:
    - Desktop
    - Native
    - Interop
---

NativeMessageBox provides one managed contract and one native C ABI over six platform implementations. Advanced buttons, input, verification, secondary content, links, timeouts, thread rules, packaging, and fallback behavior remain explicit instead of being flattened to the lowest common denominator.
