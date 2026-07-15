---
order: 88
project: chatgpt-client
name: COM & Office Automation
eyebrow: Chat completions from VBA
status: Maintained
description: A .NET Framework COM-visible bridge exposes asynchronous chat operations and completion events to Windows automation clients, including Word and VBA translation, drafting, and form workflows.
statement: Bring the same chat client into legacy Windows automation environments.
packages:
  - name: ChatGptCom
    note: COM-visible OpenAI client bridge for .NET Framework and VBA.
install: dotnet add package ChatGptCom
usageLanguage: csharp
usage: |-
  // Register the COM assembly, reference its type library,
  // then create ChatGptCom.Chat from VBA or another COM client.
  var chat = new ChatGptCom.Chat();
  chat.Create("You are a helpful assistant", 2000, "gpt-3.5-turbo");
  chat.AskAsync("Translate to English", sourceText);
highlights:
  - COM-visible Chat API
  - Asynchronous completion events
  - Word and VBA integration examples
  - .NET Framework automation bridge
layers:
  - label: Register
    detail: The assembly and type library become available to COM clients.
  - label: Create
    detail: Automation code initializes a chat session and settings.
  - label: Send
    detail: Async methods submit prompts without blocking the host UI.
  - label: Handle
    detail: COM events return output to documents, forms, or macros.
sourcePath: src/ChatGptCom
related:
  - chatgpt-client/cross-platform-client
  - chatgpt-client/batch-cli
---

## A .NET Framework COM-visible bridge exposes asynchronous chat operations and completion events to Windows automation clients, including Word and VBA translation, drafting, and form workflows.
