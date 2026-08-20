---
order: 47
name: Parallels CLI Skill
eyebrow: Safe virtual-machine automation
category: Tools
repo: ParallelsSkill
description: A Codex skill for deterministic Parallels Desktop automation through prlctl and prlsrvctl, covering VM lifecycle, configuration, guest execution, screenshots, snapshots, networks, and recovery workflows.
statement: Operate Linux and Windows virtual machines from a Mac with exact targets, explicit safety checks, and CLI-verifiable state.
accent: "#7eb6ff"
tier: Maintained
status: Active
packages:
  - name: parallels-cli
    note: Installable Codex skill, focused references, and a read-only host/VM diagnostics helper.
    url: https://github.com/wieslawsoltes/ParallelsSkill/tree/main/parallels-cli
install: |-
  git clone https://github.com/wieslawsoltes/ParallelsSkill.git
  cp -R ParallelsSkill/parallels-cli /path/to/codex/skills/
usageLanguage: bash
usage: |-
  $parallels-cli Start my Linux development VM,
  verify Parallels Tools, and report its IP addresses.
highlights:
  - VM lifecycle and configuration
  - Guest Linux and Windows execution
  - Screenshots, snapshots, clones, and archives
  - Networks, shared folders, devices, and HiDPI
audience:
  - Codex users automating Parallels Desktop on macOS
  - Cross-platform teams maintaining Linux and Windows test VMs
  - Developers who need repeatable VM diagnostics and screenshot workflows
architecture:
  - label: Discover
    detail: Read-only inventory resolves exact VM, network, device, snapshot, and host state before action.
  - label: Validate
    detail: Installed CLI help remains the syntax authority for the active Parallels release.
  - label: Operate
    detail: Focused workflows compose lifecycle, guest, storage, network, device, and screenshot commands.
  - label: Verify
    detail: Resulting VM state, guest output, or captured display is checked after every material operation.
compatibility:
  - label: Host
    value: macOS + Parallels Desktop
    state: ready
  - label: Linux guests
    value: Supported
    state: ready
  - label: Windows guests
    value: Supported
    state: ready
  - label: Guest operations
    value: Parallels Tools required
    state: ready
proof:
  - value: Read-only
    label: doctor workflow
  - value: 10 guides
    label: focused reference set
  - value: Exact target
    label: safety model
media:
  - src: https://opengraph.githubassets.com/portfolio-2026/wieslawsoltes/ParallelsSkill
    width: 1200
    height: 600
    alt: Parallels CLI Skill GitHub repository preview
    caption: The repository packages an installable skill, official-source references, safety guidance, platform examples, and a reusable diagnostics script.
links:
  - label: Skill
    href: https://github.com/wieslawsoltes/ParallelsSkill/blob/main/parallels-cli/SKILL.md
  - label: Safety model
    href: https://github.com/wieslawsoltes/ParallelsSkill/blob/main/parallels-cli/references/safety.md
limitations: Parallels Desktop and its command-line tools must run on macOS. Guest execution and most integration features require Parallels Tools, while destructive, security-sensitive, or licensing operations remain explicit approval boundaries.
related:
  - linux-computer-use
  - performance-skill
  - avalonia-development-plugin
---

Parallels CLI Skill turns a broad, version-sensitive virtualization CLI into a discover-first workflow. It keeps inventory and verification close to every operation and routes consequential storage, security, network, and lifecycle changes through explicit safety checks.
