---
order: 68
project: native-message-box
name: Advanced Dialog Content
eyebrow: Beyond OK and Cancel
status: Active
description: Text or password input, combo choices, verification and suppression checkboxes, informative and expanded text, footers, help links, custom icons, auto-close, and ESC policy compose richer native prompts where supported.
statement: Use the strongest native dialog features while keeping limitations explicit.
packages:
  - name: NativeMessageBox
    note: Advanced content models and per-platform capability handling.
install: dotnet add package NativeMessageBox
usageLanguage: csharp
usage: |-
  var input = new MessageBoxInputOptions(
      MessageBoxInputMode.Text,
      prompt: "File name:",
      placeholder: "report.pdf");

  var options = new MessageBoxOptions(
      "Choose export settings", buttons, inputOptions: input,
      verificationText: "Remember my choice",
      timeout: TimeSpan.FromSeconds(30));
highlights:
  - Text, password, and combo input
  - Verification and suppression state
  - Expanded content, footers, and links
  - Timeout and close-policy control
layers:
  - label: Model
    detail: Optional content stays separate from the primary message and action list.
  - label: Negotiate
    detail: Platform capability rules accept, adapt, or log unsupported features.
  - label: Interact
    detail: Native accessory controls capture input and verification state.
  - label: Report
    detail: The unified result preserves the user choice and available content values.
sourcePath: src/shared
related:
  - native-message-box/managed-dialogs
  - native-message-box/native-platforms
---

## Text or password input, combo choices, verification and suppression checkboxes, informative and expanded text, footers, help links, custom icons, auto-close, and ESC policy compose richer native prompts where supported.
