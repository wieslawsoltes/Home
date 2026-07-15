---
order: 87
project: chatgpt-client
name: Batch-processing CLI
eyebrow: Prompt files in parallel
status: Maintained
description: The ChatGPT.CLI global tool accepts files or recursive directory patterns, configurable output paths and extensions, generation settings, directions, model, endpoint, verbosity, and worker-thread count for repeatable batch transformations.
statement: Turn a prompt into a repeatable source and document processing pipeline.
packages:
  - name: ChatGPT.CLI
    note: Global .NET tool for file-oriented chat-completion jobs.
install: dotnet tool install --global ChatGPT.CLI
usageLanguage: bash
usage: chatgpt -d ./src   -p "*.cs" -r   -o ./docs -e md   --threads 4   --directions "Write concise API documentation."
highlights:
  - File and recursive directory inputs
  - Pattern, extension, and output mapping
  - Parallel worker threads
  - Configurable endpoint and generation settings
layers:
  - label: Discover
    detail: Files, directories, patterns, and recursion select inputs.
  - label: Prompt
    detail: Directions and per-file content form each request.
  - label: Process
    detail: A configurable worker pool executes jobs.
  - label: Write
    detail: Output paths and extensions preserve a repeatable artifact layout.
sourcePath: src/ChatGPT.CLI
related:
  - chatgpt-client/cross-platform-client
  - chatgpt-client/com-automation
---

## The ChatGPT.CLI global tool accepts files or recursive directory patterns, configurable output paths and extensions, generation settings, directions, model, endpoint, verbosity, and worker-thread count for repeatable batch transformations.
