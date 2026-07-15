---
order: 8
project: proedit
name: Collaboration
eyebrow: Shared editing sessions
status: Preview
description: Protocol, transport, server, editor, and UI modules for synchronizing document operations, presence, and collaborative editing workflows.
statement: Treat collaboration as a composable document service, not an editor-specific afterthought.
packages:
  - name: ProEdit.Collaboration
    note: Collaboration model, operations, sessions, and synchronization.
  - name: ProEdit.Collaboration.Transports
    note: Transport implementations and connection contracts.
  - name: ProEdit.Collaboration.Server
    note: Server-side session coordination.
  - name: ProEdit.Collaboration.UI
    note: Presence and collaboration UI components.
install: dotnet add package ProEdit.Collaboration --prerelease
usageLanguage: csharp
usage: |-
  var session = await collaboration.ConnectAsync(
      documentId: "proposal-42",
      user: currentUser,
      cancellationToken);

  editor.AttachCollaboration(session);
highlights:
  - Operation-based synchronization
  - Presence and participant state
  - Transport-neutral sessions
  - Server and UI packages
layers:
  - label: Operation
    detail: Document changes are represented as explicit collaboration messages.
  - label: Session
    detail: Participants, presence, versions, and local state are coordinated.
  - label: Transport
    detail: Connections move protocol messages without owning editor logic.
  - label: Experience
    detail: Editor and UI packages surface remote changes and presence.
sourcePath: src/ProEdit.Collaboration
related:
  - proedit/document-editor
  - proedit/cross-platform-controls
  - proedit/automation
---

## Protocol, transport, server, editor, and UI modules for synchronizing document operations, presence, and collaborative editing workflows.
