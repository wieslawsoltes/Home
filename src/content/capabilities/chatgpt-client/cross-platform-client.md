---
order: 86
project: chatgpt-client
name: Cross-platform Chat Client
eyebrow: Earlier Avalonia AI application
status: Maintained
description: Reusable core and UI layers power desktop, Android, iOS, and browser hosts with conversation history, editing, Markdown/HTML rendering, API endpoint configuration, settings, and imported web-chat backups.
statement: Carry one conversational client model across the full Avalonia target set.
packages:
  - name: ChatGPT
    note: OpenAI chat API client.
  - name: ChatGPT.Core
    note: Models, services, and application view models.
  - name: ChatGPT.UI
    note: Reusable Avalonia conversation UI.
install: |-
  dotnet add package ChatGPT
  dotnet add package ChatGPT.UI
usageLanguage: bash
usage: |-
  export OPENAI_API_KEY="your-key"
  dotnet run --project src/ChatGPT.UI.Desktop

  # The earlier client also includes Android, iOS,
  # and browser application hosts.
highlights:
  - Desktop, Android, iOS, and browser hosts
  - Reusable API, core, and UI packages
  - Conversation editing and backup import
  - Configurable API URL and model settings
layers:
  - label: Configure
    detail: Environment or settings provide API credentials, endpoint, and generation options.
  - label: Model
    detail: Core services manage conversations, messages, and requests.
  - label: Present
    detail: Reusable Avalonia UI renders and edits the chat history.
  - label: Host
    detail: Desktop, mobile, and browser projects supply platform lifecycle.
sourcePath: src/ChatGPT.UI
related:
  - chatgpt-client/batch-cli
  - chatgpt-client/com-automation
---

## Reusable core and UI layers power desktop, Android, iOS, and browser hosts with conversation history, editing, Markdown/HTML rendering, API endpoint configuration, settings, and imported web-chat backups.
