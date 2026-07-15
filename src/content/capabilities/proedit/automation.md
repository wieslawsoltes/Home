---
order: 10
project: proedit
name: Macros & MCP
eyebrow: Programmable document workflows
status: Preview
description: VBA-compatible macro runtime and Model Context Protocol tools expose document and reporting operations to scripts, automation, and AI agents.
statement: Make document capabilities callable beyond the editor surface.
packages:
  - name: ProEdit.Vba.Runtime
    note: Macro runtime and document automation bridge.
  - name: ProEdit.Mcp.Documents
    note: MCP tools for document operations.
  - name: ProEdit.Mcp.Reporting
    note: MCP tools for reporting workflows.
install: dotnet add package ProEdit.Mcp.Documents --prerelease
usageLanguage: csharp
usage: |-
  services.AddProEditDocuments();
  services.AddProEditMcpDocuments();

  // Expose scoped document commands through the MCP host.
  await app.RunAsync();
highlights:
  - Document macro runtime
  - VBA compatibility direction
  - MCP document tools
  - MCP reporting tools
layers:
  - label: Command
    detail: Document and report operations expose a controlled automation surface.
  - label: Runtime
    detail: Macros or MCP handlers resolve commands against scoped services.
  - label: Document
    detail: Automation operates on the same model used by editors and reports.
  - label: Policy
    detail: Hosts control files, tools, permissions, and execution boundaries.
sourcePath: src/ProEdit.Mcp
related:
  - proedit/document-editor
  - proedit/reporting
  - proedit/collaboration
---

## VBA-compatible macro runtime and Model Context Protocol tools expose document and reporting operations to scripts, automation, and AI agents.
