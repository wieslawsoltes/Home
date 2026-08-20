---
order: 90
project: cdp
name: Managed RDP Client
eyebrow: Remote desktop protocol and control
status: Preview
description: Managed RDP protocol, security, virtual-channel, frame, input, and Avalonia control packages connect remote Windows sessions to the same testing and inspection ecosystem.
statement: Treat a remote Windows desktop as another inspectable, automatable target surface.
packages:
  - name: Chrome.DevTools.Rdp
    note: RDP negotiation, security, activation, channels, input, frames, and session contracts.
  - name: Chrome.DevTools.Rdp.Rendering
    note: SkiaSharp framebuffer composition and dirty-region rendering.
  - name: Chrome.DevTools.Avalonia.Rdp
    note: Avalonia RDP control, view, and input mapping.
install: dotnet add package Chrome.DevTools.Avalonia.Rdp --prerelease
usageLanguage: csharp
usage: |-
  var client = new RdpClient(new RdpSessionOptions
  {
      Host = "windows-vm",
      Port = 3389
  });

  await client.ConnectAsync(cancellationToken);
highlights:
  - Managed RDP negotiation and session state
  - TLS and CredSSP security transports
  - Static and dynamic virtual channels
  - Avalonia control, input mapping, and Skia frame rendering
layers:
  - label: Connect
    detail: Negotiation, security, licensing, activation, and session state establish the remote desktop.
  - label: Channel
    detail: Static and dynamic virtual channels carry negotiated capabilities and auxiliary data.
  - label: Present
    detail: Bitmap updates and dirty regions compose into an Avalonia-hosted Skia framebuffer.
  - label: Drive
    detail: Pointer and keyboard mapping feeds remote input while CDP workflows record and verify the surface.
sourcePath: src/CDP.Rdp
related:
  - cdp/automation
  - cdp/testing-ci
  - cdp/inspector
---

## The RDP lane keeps protocol, security, rendering, hosting, and automation separable, allowing the remote desktop surface to participate in visual tests without hiding its transport boundary.
