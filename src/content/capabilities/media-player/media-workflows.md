---
order: 75
project: media-player
name: Media Workflows
eyebrow: Reusable editing and export services
status: Active
description: A workflow service layer models trim, split, combine, export, transform, recording, and audio/video stream removal independently from the demo application.
statement: Reuse production media operations beyond the player window.
packages:
  - name: MediaPlayer.Controls
    note: Workflow contracts, registration, orchestration, and UI integration.
install: dotnet add package MediaPlayer.Controls
usageLanguage: csharp
usage: |-
  services.AddMediaPlayerWorkflows(options =>
  {
      options.PreferNativePlatformServices = true;
  });

  await workflow.TrimAsync(source, destination, range);
highlights:
  - Trim, split, and combine
  - Export and transform
  - Recording and stream removal
  - Dependency-injection registration
layers:
  - label: Describe
    detail: A portable request captures source, destination, range, and operation options.
  - label: Select
    detail: Workflow policy chooses a native or compatible provider.
  - label: Execute
    detail: The service coordinates progress, cancellation, and output.
  - label: Present
    detail: Applications can compose dialogs and history over the same service.
sourcePath: src/MediaPlayer.Controls/Workflows
related:
  - media-player/gpu-playback
  - media-player/playback-backends
---

## A workflow service layer models trim, split, combine, export, transform, recording, and audio/video stream removal independently from the demo application.
