---
order: 71
project: lottie
name: AnimationControl
eyebrow: Minimal custom frame loop
status: Maintained
description: A lightweight base control owns attachment, frame scheduling, delta time, invalidation, and rendering so custom animation logic only overrides the meaningful hooks.
statement: Build a custom Avalonia animation without rebuilding its lifecycle loop.
packages:
  - name: AnimationControl
    note: Overridable Avalonia animation base class.
install: dotnet add package AnimationControl
usageLanguage: csharp
usage: |-
  public sealed class PulseControl : AnimationControl
  {
      protected override void OnAnimationFrame(TimeSpan now, TimeSpan last)
          => Progress = (Progress + (now - last).TotalSeconds) % 1;

      public override void Render(DrawingContext context)
          => DrawPulse(context, Progress);
  }
highlights:
  - Automatic frame loop
  - Delta-time update hook
  - Automatic visual invalidation
  - Small subclassing surface
layers:
  - label: Attach
    detail: The base observes visual-tree lifetime.
  - label: Tick
    detail: Frame callbacks receive current and previous time.
  - label: Update
    detail: The subclass advances only its domain state.
  - label: Draw
    detail: Normal Avalonia rendering presents each invalidated frame.
sourcePath: src/AnimationControl
related:
  - lottie/lottie-player
  - lottie/composition-shaders
---

## A lightweight base control owns attachment, frame scheduling, delta time, invalidation, and rendering so custom animation logic only overrides the meaningful hooks.
