---
order: 26
name: Avalonia Development Plugin
eyebrow: Agent-ready framework expertise
category: Tools
repo: development-plugin-for-avalonia
description: A Codex plugin that packages focused Avalonia implementation and migration skills for controls, rendering, XAML, accessibility, testing, performance, and platform integration.
statement: Turn framework knowledge into repeatable, source-grounded development workflows.
accent: "#b394ff"
featured: true
tier: Flagship
status: Active
packages:
  - name: development-plugin-for-avalonia
    note: Plugin manifest, focused skills, references, and reusable workflows.
    url: https://github.com/wieslawsoltes/development-plugin-for-avalonia
install: |-
  git clone https://github.com/wieslawsoltes/development-plugin-for-avalonia.git
  # Add the repository as a Codex plugin or copy the skills you need.
usageLanguage: bash
usage: |-
  # Invoke a focused skill from Codex, for example:
  $avalonia-rendering-and-graphics
  $avalonia-bindings-and-xaml
  $avalonia-12-migration
highlights:
  - Focused Avalonia skills
  - Source-grounded guidance
  - Avalonia 12 migration lane
  - Repo-local and plugin discovery
audience:
  - Codex users building Avalonia applications
  - Teams standardizing framework guidance
  - Maintainers performing source-backed migrations and reviews
architecture:
  - label: Plugin
    detail: A manifest makes the capability discoverable by Codex.
  - label: Router
    detail: Skill descriptions send a task to the narrowest relevant workflow.
  - label: Skill
    detail: Each workflow defines required references, constraints, and verification.
  - label: Sources
    detail: Pinned documentation and repository evidence ground implementation advice.
compatibility:
  - label: Avalonia 11.3.12
    value: Pinned default
    state: ready
  - label: Avalonia 12
    value: Migration lane
    state: partial
  - label: Repo-local skills
    value: Supported
    state: ready
  - label: Codex plugin
    value: Supported
    state: ready
proof:
  - value: 20+ skills
    label: focused workflows
  - value: Primary sources
    label: evidence model
  - value: Migration lane
    label: Avalonia 12
media:
  - src: https://raw.githubusercontent.com/wieslawsoltes/development-plugin-for-avalonia/main/assets/development-plugin-for-avalonia-logo.png
    alt: Development plugin for Avalonia logo
    caption: A skill library built to make Avalonia work repeatable and source-grounded.
links:
  - label: Skill catalog
    href: https://github.com/wieslawsoltes/development-plugin-for-avalonia/tree/main/skills
related:
  - cdp
  - xaml-visual-editor
  - codexgui
---

The plugin breaks Avalonia development into focused skills, each with routing rules and primary-source references. It covers everyday implementation as well as rendering, accessibility, performance, migration, and framework-porting work.
