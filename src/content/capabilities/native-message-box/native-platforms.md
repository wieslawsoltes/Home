---
order: 69
project: native-message-box
name: Native & Mobile Backends
eyebrow: Six operating-system implementations
status: Active
description: TaskDialog/MessageBoxW, NSAlert, GTK with Zenity fallback, UIAlertController, Android AlertDialog, and a WebAssembly overlay implement the shared managed and native C ABI.
statement: Ship native dialogs from desktop to mobile and browser through one versioned boundary.
packages:
  - name: NativeMessageBox
    note: Runtime-specific native libraries and managed resolver.
install: dotnet add package NativeMessageBox
usageLanguage: bash
usage: |-
  # Managed applications resolve the packaged runtime asset.
  dotnet add package NativeMessageBox

  # Native consumers include native_message_box.h and link
  # the nativemessagebox library for the target RID.
highlights:
  - Windows, macOS, and GTK desktop backends
  - iOS and Android bridges
  - WebAssembly overlay
  - Stable native C header and ABI
layers:
  - label: Package
    detail: RID assets, AAR, XCFramework, or WASM module carry the platform implementation.
  - label: Resolve
    detail: Managed or native callers initialize the versioned ABI.
  - label: Dispatch
    detail: Thread and lifecycle rules move work onto the platform UI context.
  - label: Fallback
    detail: Capability matrices and logging explain adaptations and unavailable features.
sourcePath: src/native
docsPath: site/articles/platforms/mobile-platforms.md
related:
  - native-message-box/managed-dialogs
  - native-message-box/advanced-content
---

## TaskDialog/MessageBoxW, NSAlert, GTK with Zenity fallback, UIAlertController, Android AlertDialog, and a WebAssembly overlay implement the shared managed and native C ABI.
