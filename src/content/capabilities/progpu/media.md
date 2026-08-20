---
order: 94
project: progpu
name: Cross-platform Media
eyebrow: Playback, composition, effects, and export
status: Preview
description: Provider-neutral playback, timing, tracks, audio, diagnostics, retained 2D/3D presentation, GPU effects, non-destructive editing, thumbnails, and export connect native media stacks to the ProGPU scene.
statement: Keep decoded frames, timed state, effects, editing, and presentation on one typed GPU path.
packages:
  - name: ProGPU.Media
    note: Playback state, timing, tracks, audio, diagnostics, and provider contracts.
  - name: ProGPU.Media.Scene
    note: Retained 2D/3D WebGPU presentation and fused effects.
  - name: ProGPU.Media.Editing
    note: Non-destructive compositions, overlays, serialization, and export coordination.
  - name: ProGPU.Windows.Media
    note: Media Foundation, D3D11/DXGI, and Windows audio provider.
  - name: ProGPU.Linux.Media
    note: V4L2, DMA-BUF, Vulkan Video, and PipeWire provider.
  - name: ProGPU.Apple.Media
    note: AVFoundation, IOSurface, audio, and composition export for macOS and iOS.
install: |-
  dotnet add package ProGPU.Media --prerelease
  dotnet add package ProGPU.Media.Scene --prerelease
usageLanguage: csharp
usage: |-
  var player = new MediaPlayer(provider);
  player.Source = MediaSource.CreateFromUri(source);
  await player.PlayAsync();

  scene.Attach(player, effects);
highlights:
  - Typed playback, timing, tracks, cues, and diagnostics
  - Native Windows, Linux, Apple, Android, and browser providers
  - WebGPU effects, thumbnails, 2D/3D scenes, and audio processing
  - Non-destructive editing, project serialization, and native export
layers:
  - label: Provider
    detail: Native decode, capture, audio, texture-sharing, and export implementations stay behind typed contracts.
  - label: Session
    detail: Playback, playlist, track, cue, timing, diagnostics, and audio state remain framework-neutral.
  - label: Compose
    detail: Decoded surfaces flow through retained 2D/3D scenes, fused WebGPU effects, overlays, and thumbnails.
  - label: Deliver
    detail: WinUI controls, native hosts, editing projects, and export coordination reuse the same media graph.
sourcePath: src/ProGPU.Media
related:
  - progpu/scene
  - progpu/backend
  - progpu/framework-bridges
---

## Media packages make timing, provider ownership, GPU surface sharing, effects, editing, and delivery explicit so playback can remain portable without flattening every platform into the same implementation.
