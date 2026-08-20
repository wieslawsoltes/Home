---
order: 33
project: cdp
name: Protocol Server
eyebrow: Chrome DevTools Protocol core
status: Preview
description: A lightweight framework-neutral CDP server, session router, domain model, discovery endpoint, WebSocket transport, and raw V8 Inspector host for exposing native application and JavaScript runtime targets.
statement: Speak a standard diagnostics protocol before choosing a UI framework.
packages:
  - name: Chrome.DevTools.Protocol
    note: CDP server, targets, sessions, domains, events, transports, and raw V8 Inspector client/host contracts.
install: dotnet add package Chrome.DevTools.Protocol --prerelease
usageLanguage: csharp
usage: |-
  var server = new CdpServer(new CdpServerOptions
  {
      Port = 9222
  });

  await server.StartAsync(cancellationToken);
highlights:
  - HTTP target discovery
  - WebSocket sessions
  - Commands and domain events
  - Framework-neutral server core
  - Raw V8 Inspector discovery and WebSockets
layers:
  - label: Target
    detail: Applications publish inspectable runtime targets.
  - label: Session
    detail: WebSocket connections isolate command and event streams.
  - label: Domain
    detail: Handlers implement DOM, Runtime, CSS, Input, Page, and related protocol areas.
  - label: Adapter
    detail: Framework packages translate domain operations into native UI behavior.
sourcePath: src/Chrome.DevTools.Protocol
related:
  - cdp/test-studio
  - cdp/testing-ci
  - cdp/framework-adapters
---

## A lightweight framework-neutral CDP server, session router, domain model, HTTP discovery endpoint, WebSocket transport, and raw V8 Inspector host expose native application and JavaScript runtime targets.
