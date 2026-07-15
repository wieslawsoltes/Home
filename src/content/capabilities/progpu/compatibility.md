---
order: 54
project: progpu
name: Compatibility Shims
eyebrow: Portable classic drawing APIs
status: Preview
description: ProGPU-backed SkiaSharp and System.Drawing.Common compatibility shims let existing drawing-oriented code target the modern GPU substrate during migration.
statement: Preserve familiar drawing shapes while changing the implementation below them.
packages:
  - name: ProGPU.SkiaSharp
    note: Portable SkiaSharp-compatible API backed by ProGPU.
  - name: ProGPU.System.Drawing.Common
    note: Portable System.Drawing.Common-compatible API backed by ProGPU.
install: dotnet add package ProGPU.SkiaSharp --prerelease
usageLanguage: csharp
usage: |-
  using var paint = new SKPaint { Color = SKColors.CornflowerBlue };
  canvas.DrawRoundRect(new SKRect(20, 20, 220, 100), 16, 16, paint);
highlights:
  - SkiaSharp-shaped API
  - System.Drawing-shaped API
  - ProGPU-backed implementation
  - Migration and portability bridge
layers:
  - label: Call site
    detail: Application code uses a familiar drawing API.
  - label: Shim
    detail: Compatibility types preserve the expected object model.
  - label: Translate
    detail: Operations map into ProGPU geometry, paint, text, and resources.
  - label: GPU
    detail: The backend executes through WebGPU rather than the original native stack.
sourcePath: src/SkiaSharp
related:
  - progpu/vector-text
  - progpu/backend
  - progpu/framework-bridges
---

## ProGPU-backed SkiaSharp and System.Drawing.Common compatibility shims let existing drawing-oriented code target the modern GPU substrate during migration.
