---
order: 21
project: dock
name: Layout Persistence
eyebrow: Save and restore workspaces
status: Stable
description: Serializer packages preserve Dock layouts through System.Text.Json, Newtonsoft.Json, XML, YAML, and Protobuf while keeping persistence outside the UI layer.
statement: Let users return to the workspace they arranged.
packages:
  - name: Dock.Serializer.SystemTextJson
    note: System.Text.Json layout serialization.
  - name: Dock.Serializer.Newtonsoft
    note: Newtonsoft.Json layout serialization.
  - name: Dock.Serializer.Xml
    note: XML layout serialization.
  - name: Dock.Serializer.Yaml
    note: YAML layout serialization.
  - name: Dock.Serializer.Protobuf
    note: Protobuf layout serialization.
install: dotnet add package Dock.Serializer.SystemTextJson
usageLanguage: csharp
usage: |-
  var serializer = new DockSerializer();
  await using var stream = File.Create("layout.json");
  serializer.Save(stream, Layout);

  // Restore and reinitialize with the application factory.
highlights:
  - Five serializer choices
  - Model-only persistence boundary
  - User workspace restoration
  - Application-controlled rehydration
layers:
  - label: Capture
    detail: The current model tree supplies dockable identity and layout state.
  - label: Serialize
    detail: A selected package converts the graph to the chosen wire format.
  - label: Store
    detail: Applications own files, profiles, cloud state, and versioning.
  - label: Restore
    detail: The factory reconnects services, contexts, and runtime-only state.
sourcePath: src/Dock.Serializer.SystemTextJson
related:
  - dock/workspace
  - dock/models
---

## Serializer packages preserve Dock layouts through System.Text.Json, Newtonsoft.Json, XML, YAML, and Protobuf while keeping persistence outside the UI layer.
