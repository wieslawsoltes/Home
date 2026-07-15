---
order: 25
project: htmlml
name: JavaScript.Avalonia
eyebrow: Script native UI without a WebView
status: Preview
description: A standalone Jint-powered runtime exposes window, document, DOM queries and mutation, routed events, timers, animation frames, CommonJS modules, HTTP/assets, and embedded TypeScript transpilation to any Avalonia TopLevel.
statement: Give native Avalonia controls a browser-like scripting model while keeping the host fully managed.
packages:
  - name: JavaScript.Avalonia
    note: Jint host, DOM bridge, event propagation, modules, TypeScript, timers, animation, and Canvas.
    url: https://github.com/wieslawsoltes/HtmlML/tree/main/src/JavaScript.Avalonia
install: |-
  git clone https://github.com/wieslawsoltes/HtmlML.git
  # Add a ProjectReference to src/JavaScript.Avalonia/JavaScript.Avalonia.csproj.
usageLanguage: csharp
usage: |-
  var host = new JintAvaloniaHost(this);
  host.ExecuteScriptText("""
  const button = document.getElementById('RunButton');
  const output = document.getElementById('OutputText');

  button.addEventListener('click', () => {
    output.textContent = 'Handled from JavaScript';
  });
  """);
highlights:
  - DOM queries and native tree mutation
  - Capture, target, and bubble event phases
  - TypeScript and CommonJS modules
  - Timers and requestAnimationFrame
layers:
  - label: Host
    detail: JintAvaloniaHost owns engine lifetime and binds an Avalonia TopLevel.
  - label: Document
    detail: DOM wrappers traverse, create, mutate, and identify native controls.
  - label: Events
    detail: Avalonia routed events become DOM-style capture, target, and bubble callbacks.
  - label: Runtime
    detail: Modules, assets, TypeScript, timers, animation, and host functions support complete scripts.
sourcePath: src/JavaScript.Avalonia
docsPath: src/JavaScript.Avalonia/README.md
related:
  - htmlml/native-markup
  - htmlml/canvas-playground
  - htmlml/css-styling
---

## A standalone Jint-powered runtime exposes window, document, DOM queries and mutation, routed events, timers, animation frames, CommonJS modules, HTTP/assets, and embedded TypeScript transpilation to any Avalonia TopLevel.
