---
order: 48
name: Linux Computer Use
eyebrow: Screenshot-driven desktop automation
category: Tools
repo: LinuxComputerUse
description: A portable Codex skill and deterministic driver for inspecting, operating, and visually verifying Linux X11 or XWayland desktop applications locally or through a Parallels VM.
statement: Give coding agents a controlled screenshot–act–verify loop for Linux desktop software.
accent: "#f0cf6b"
tier: Maintained
status: Active
packages:
  - name: linux-computer-use
    note: Installable skill, local and Parallels backends, desktop-control driver, safety guidance, and troubleshooting references.
    url: https://github.com/wieslawsoltes/LinuxComputerUse/tree/main/linux-computer-use
install: |-
  git clone https://github.com/wieslawsoltes/LinuxComputerUse.git
  cd LinuxComputerUse
  ./install.sh
usageLanguage: bash
usage: |-
  $linux-computer-use Launch the application in my Linux VM,
  exercise its primary workflow, and visually verify the result.
highlights:
  - Local X11 and XWayland operation
  - Parallels-hosted Linux VM backend
  - Screenshots, windows, focus, keyboard, and mouse
  - Screenshot-backed smoke tests and UI QA
audience:
  - Coding-agent users testing Linux desktop applications
  - Cross-platform UI teams without native Computer Use integration
  - Maintainers reproducing and visually verifying GUI behavior in VMs
architecture:
  - label: Target
    detail: The driver selects a local graphical session or a named Parallels Linux guest.
  - label: Observe
    detail: Screenshots, visible windows, active-window state, and geometry establish the current desktop.
  - label: Act
    detail: Focus, keyboard, pointer, click, and scroll commands perform one deterministic interaction at a time.
  - label: Verify
    detail: A follow-up screenshot proves visible state instead of treating a successful process exit as UI evidence.
compatibility:
  - label: X11
    value: Local control
    state: ready
  - label: XWayland
    value: Application windows
    state: ready
  - label: Native Wayland
    value: Limited input control
    state: partial
  - label: Parallels Linux
    value: macOS host backend
    state: ready
proof:
  - value: 2 backends
    label: local and Parallels
  - value: 12 commands
    label: deterministic desktop driver
  - value: Before + after
    label: visual verification loop
media:
  - src: https://opengraph.githubassets.com/portfolio-2026/wieslawsoltes/LinuxComputerUse
    width: 1200
    height: 600
    alt: Linux Computer Use GitHub repository preview
    caption: Linux Computer Use packages the installable skill, portable driver, installer, backend guidance, safety model, and troubleshooting workflow.
links:
  - label: Skill
    href: https://github.com/wieslawsoltes/LinuxComputerUse/blob/main/linux-computer-use/SKILL.md
  - label: Driver reference
    href: https://github.com/wieslawsoltes/LinuxComputerUse#command-reference
limitations: Input and window discovery rely on X11 tools. Native Wayland-only applications may require application test APIs, accessibility interfaces, browser automation, or a future privileged input backend.
related:
  - parallels-skill
  - cdp
  - avalonia-development-plugin
---

Linux Computer Use supplies the mechanical desktop-control layer for a coding agent while keeping visual reasoning and safety explicit. Each meaningful action begins from a known window and screenshot and ends with new visible evidence.
