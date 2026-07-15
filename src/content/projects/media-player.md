---
order: 37
name: MediaPlayer
eyebrow: No-airspace Avalonia video
category: Controls
repo: MediaPlayer
description: GPU-composited media playback for Avalonia with native platform backends, FFmpeg and LibVLC fallbacks, track/device APIs, and reusable editing workflows.
statement: Keep video inside the Avalonia compositor and media operations inside reusable services.
accent: "#6ac6ff"
showInIndex: false
tier: Maintained
status: Active
packages:
  - name: MediaPlayer.Controls
    note: GPU player control, rendering, orchestration, and workflows.
  - name: MediaPlayer.Native.Abstractions
    note: Backend-neutral playback and capability contracts.
  - name: MediaPlayer.Native.Interop
    note: Native provider catalog and selection helpers.
install: dotnet add package MediaPlayer.Controls
usageLanguage: xml
usage: |-
  <media:GpuMediaPlayer Source="{Binding CurrentSource}"
                        AutoPlay="True"
                        PreferDirectGpuTextureUpload="True" />
highlights:
  - GPU composition without airspace gaps
  - Native, FFmpeg, and LibVLC backends
  - Audio, subtitle, device, and route APIs
  - Trim, split, combine, export, and record
audience:
  - Avalonia media applications
  - Desktop tools requiring video overlays and transforms
  - Products with playback plus trim, export, or recording workflows
architecture:
  - label: Control
    detail: GpuMediaPlayer owns playback state, rendering, tracks, devices, routes, and shell behavior.
  - label: Contracts
    detail: Backend-neutral models describe capabilities, providers, diagnostics, and workflows.
  - label: Interop
    detail: Native provider catalogs select platform playback and media services.
  - label: Workflows
    detail: Trim, split, combine, export, transform, record, and stream removal remain reusable.
compatibility:
  - label: macOS
    value: AVFoundation direction
    state: ready
  - label: Windows
    value: Media Foundation direction
    state: ready
  - label: FFmpeg / LibVLC
    value: Fallback modes
    state: ready
  - label: Avalonia composition
    value: No airspace
    state: ready
proof:
  - value: GPU
    label: direct texture composition
  - value: 4 backends
    label: native and fallback directions
  - value: 7 workflows
    label: edit and export operations
media:
  - src: https://github.com/user-attachments/assets/75d0bfb4-f85e-4c40-a5a1-b98e9e9e8a43
    width: 3510
    height: 2034
    alt: MediaPlayer QuickTime-inspired Avalonia application
    caption: The demo shows no-airspace video, floating transport controls, native menus, diagnostics, and workflow entry points.
links:
  - label: Documentation
    href: https://wieslawsoltes.github.io/MediaPlayer/
  - label: Demo source
    href: https://github.com/wieslawsoltes/MediaPlayer/tree/main/src/MediaPlayer.Demo
limitations: Playback capability and native dependencies vary by platform and selected backend. Keep fallback modes available and expose diagnostics when shipping across heterogeneous GPU and codec environments.
related:
  - lottie
  - nativewebview
  - progpu
archive:
  order: 6
  kind: Maintained
  tags:
    - Media
    - Avalonia
    - Controls
---

MediaPlayer keeps decoded video inside Avalonia composition rather than a native child window. Native and fallback providers, direct GPU upload, audio and subtitle state, diagnostics, and media-editing workflows sit behind reusable control and service boundaries.
