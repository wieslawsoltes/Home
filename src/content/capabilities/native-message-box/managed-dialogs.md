---
order: 67
project: native-message-box
name: Managed Dialog API
eyebrow: One async result contract
status: Active
description: A .NET client models titles, messages, icons, custom buttons, defaults, cancellation, input, verification, secondary content, help links, timeouts, and structured results.
statement: Express a complete native decision dialog without platform-specific application code.
packages:
  - name: NativeMessageBox
    note: Managed options, client, results, logging, and native runtime host.
install: dotnet add package NativeMessageBox
usageLanguage: csharp
usage: |-
  var result = await NativeMessageBoxClient.ShowAsync(
      new MessageBoxOptions(
          message: "Export completed. Open the file?",
          buttons: new[]
          {
              new MessageBoxButton(1, "Open", isDefault: true),
              new MessageBoxButton(0, "Close", isCancel: true)
          },
          title: "Export"));
highlights:
  - Async managed client
  - Custom button identities and roles
  - Structured outcome, input, and timeout result
  - Logging and exception-oriented variants
layers:
  - label: Describe
    detail: Portable options capture message, actions, content, and policy.
  - label: Marshal
    detail: The managed host transfers validated data to the active native implementation.
  - label: Present
    detail: The operating system renders a native dialog on its required thread.
  - label: Return
    detail: One result reports outcome, button, input, checkbox, and timeout state.
sourcePath: src/dotnet/NativeMessageBox
docsPath: site/articles/getting-started/quickstart-dotnet.md
related:
  - native-message-box/advanced-content
  - native-message-box/native-platforms
---

## A .NET client models titles, messages, icons, custom buttons, defaults, cancellation, input, verification, secondary content, help links, timeouts, and structured results.
