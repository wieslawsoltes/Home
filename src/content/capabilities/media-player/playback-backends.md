---
order: 74
project: media-player
name: Playback Backends & Tracks
eyebrow: Native-first, fallback-ready
status: Active
description: Backend-neutral contracts select macOS AVFoundation or Windows Media Foundation paths where available while keeping FFmpeg and LibVLC modes, diagnostics, audio/subtitle tracks, devices, and routes accessible.
statement: Choose the strongest playback engine without changing the Avalonia control surface.
packages:
  - name: MediaPlayer.Native.Abstractions
    note: Provider, backend, track, device, route, and diagnostic contracts.
  - name: MediaPlayer.Native.Interop
    note: Provider catalog and native runtime selection.
install: |-
  dotnet add package MediaPlayer.Native.Abstractions
  dotnet add package MediaPlayer.Native.Interop
usageLanguage: csharp
usage: |-
  var player = new GpuMediaPlayer
  {
      Source = new Uri("file:///media/movie.mp4")
  };
  player.Play();
  player.Seek(TimeSpan.FromSeconds(30));
  var tracks = player.AudioTracks;
highlights:
  - AVFoundation and Media Foundation directions
  - FFmpeg and LibVLC fallbacks
  - Audio and subtitle track APIs
  - Input, output, route, and backend diagnostics
layers:
  - label: Probe
    detail: The runtime catalog reports providers and capabilities.
  - label: Select
    detail: Platform and user policy choose native or fallback playback.
  - label: Control
    detail: One API handles transport, seek, volume, tracks, devices, and routes.
  - label: Diagnose
    detail: Backend and upload state remain visible to the application.
sourcePath: src/MediaPlayer.Native.Abstractions
related:
  - media-player/gpu-playback
  - media-player/media-workflows
---

## Backend-neutral contracts select macOS AVFoundation or Windows Media Foundation paths where available while keeping FFmpeg and LibVLC modes, diagnostics, audio/subtitle tracks, devices, and routes accessible.
