---
order: 46
name: Performance Skill
eyebrow: Evidence-first .NET profiling
category: Tools
repo: Performance-Skill
description: A modular coding-agent skill for cross-platform .NET performance engineering across runtime, memory, latency, startup, production, benchmarking, and GPU/rendering investigations.
statement: Turn performance work into a reproducible evidence trail across managed, native, operating-system, and GPU layers.
accent: "#62e7a5"
tier: Maintained
status: Active
packages:
  - name: dotnet-performance
    note: Installable skill, domain routers, platform guides, command audit, and validation scripts.
    url: https://github.com/wieslawsoltes/Performance-Skill
install: |-
  git clone https://github.com/wieslawsoltes/Performance-Skill.git
  # Copy SKILL.md and references into your agent skills directory.
usageLanguage: bash
usage: |-
  $dotnet-performance Profile this application and prove
  whether CPU, allocation, I/O, driver, GPU, or presentation
  is the dominant bottleneck.
highlights:
  - Runtime, memory, latency, and startup
  - Benchmarking and production diagnostics
  - macOS, Windows, and Linux toolchains
  - GPU, compositor, and presentation analysis
audience:
  - Coding-agent users investigating .NET performance
  - Application teams building repeatable profiling playbooks
  - Graphics engineers tracing CPU-to-display bottlenecks
architecture:
  - label: Route
    detail: Compact indexes load only the domain and platform guidance required by the investigation.
  - label: Capture
    detail: Version-checked commands collect bounded evidence with workloads and raw artifacts preserved.
  - label: Analyze
    detail: Procedures assign ownership across runtime, native, kernel, I/O, driver, GPU, compositor, and display layers.
  - label: Validate
    detail: Equivalent before/after workloads, tail metrics, variance, and real-application checks prove the result.
compatibility:
  - label: macOS
    value: Instruments / xctrace
    state: ready
  - label: Windows
    value: WPR, WPA, ETW, WinDbg
    state: ready
  - label: Linux
    value: perf, eBPF, procfs
    state: ready
  - label: .NET diagnostics
    value: Runtime tool suite
    state: ready
proof:
  - value: 8 domains
    label: routed investigation guides
  - value: 3 platforms
    label: native profiler lanes
  - value: Validator
    label: structure and command audit
media:
  - src: https://opengraph.githubassets.com/portfolio-2026/wieslawsoltes/Performance-Skill
    width: 1200
    height: 600
    alt: Performance Skill GitHub repository preview
    caption: The skill keeps operational procedures, platform guidance, command references, validation, and primary documentation together.
links:
  - label: Skill entry point
    href: https://github.com/wieslawsoltes/Performance-Skill/blob/main/SKILL.md
  - label: Command reference
    href: https://github.com/wieslawsoltes/Performance-Skill/blob/main/references/command-reference.md
limitations: The skill provides investigation workflow and command guidance, not a universal profiler abstraction. Tool availability, permissions, workloads, and command syntax still need verification on the target machine.
related:
  - avalonia-development-plugin
  - cdp
  - progpu
---

Performance Skill treats optimization as an evidence problem. It routes an agent from a measurable symptom to the narrowest appropriate capture, makes command and tool versions explicit, and requires before/after validation in the real application context.
