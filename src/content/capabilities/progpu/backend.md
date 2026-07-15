---
order: 50
project: progpu
name: GPU Backend
eyebrow: WebGPU device and presentation
status: Preview
description: The backend owns adapter and device creation, surfaces, swapchains, command submission, resources, synchronization, and cross-platform window presentation.
statement: A thin, explicit foundation between .NET applications and WebGPU.
packages:
  - name: ProGPU.Backend
    note: WebGPU device, resource, command, surface, and platform foundation.
install: dotnet add package ProGPU.Backend --prerelease
usageLanguage: csharp
usage: |-
  await using var backend = await GpuBackend.CreateAsync();
  using var frame = backend.BeginFrame(surface);

  frame.CommandEncoder.Clear(frame.ColorTarget, clearColor);
  frame.Present();
highlights:
  - WebGPU adapter and device
  - Surfaces and frame presentation
  - Explicit GPU resource lifetime
  - Cross-platform Silk.NET foundation
layers:
  - label: Adapter
    detail: Capability discovery selects a suitable physical backend.
  - label: Device
    detail: Resources, queues, pipelines, and commands share an owned lifetime.
  - label: Surface
    detail: Native windows provide presentation targets.
  - label: Frame
    detail: Applications encode, submit, and present work explicitly.
sourcePath: src/ProGPU.Backend
related:
  - progpu/vector-text
  - progpu/scene
  - progpu/framework-bridges
---

## The backend owns adapter and device creation, surfaces, swapchains, command submission, resources, synchronization, and cross-platform window presentation.
