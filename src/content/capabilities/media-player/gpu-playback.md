---
order: 73
project: media-player
name: GPU Media Playback
eyebrow: Video inside Avalonia composition
status: Active
description: GpuMediaPlayer renders decoded video through Avalonia-hosted GPU composition with direct texture upload and compatibility copy paths, avoiding NativeControlHost airspace gaps.
statement: Keep video, overlays, transforms, and application chrome in one compositor.
packages:
  - name: MediaPlayer.Controls
    note: GpuMediaPlayer, rendering, transport controls, and playback shell components.
install: dotnet add package MediaPlayer.Controls
usageLanguage: xml
usage: |-
  <media:GpuMediaPlayer
      Source="{Binding CurrentSource}"
      AutoPlay="True"
      LayoutMode="Uniform"
      Volume="100"
      PreferDirectGpuTextureUpload="True" />
highlights:
  - No NativeControlHost airspace
  - Direct GPU texture upload
  - Compatibility copy-upload fallback
  - QuickTime-style overlay and chrome patterns
layers:
  - label: Open
    detail: Source and backend policy establish a playback session.
  - label: Decode
    detail: The selected native or fallback provider produces video frames.
  - label: Upload
    detail: Direct or compatibility paths move frames into GPU resources.
  - label: Compose
    detail: Avalonia draws video beside normal controls and overlays.
sourcePath: src/MediaPlayer.Controls/Rendering
related:
  - media-player/playback-backends
  - media-player/media-workflows
---

## GpuMediaPlayer renders decoded video through Avalonia-hosted GPU composition with direct texture upload and compatibility copy paths, avoiding NativeControlHost airspace gaps.
