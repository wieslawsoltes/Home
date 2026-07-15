---
order: 26
project: htmlml
name: Canvas & Playground
eyebrow: Scriptable drawing and live experiments
status: Preview
description: Canvas 2D, WebGL-oriented rendering, pointer events, animation frames, editable scripts, XAML preview, file bridges, console output, and TypeScript demos form an immediate native scripting laboratory.
statement: Sketch, animate, and iterate on native scripted UI in one feedback loop.
packages:
  - name: HtmlML Canvas
    note: HTML-shaped canvas element and scripting bridge.
    url: https://github.com/wieslawsoltes/HtmlML/tree/main/src/HtmlML/Html/canvas.cs
  - name: JavaScript Playground
    note: Interactive Avalonia host with source, preview, scripts, and console.
    url: https://github.com/wieslawsoltes/HtmlML/tree/main/samples/JavaScriptPlayground
install: |-
  git clone https://github.com/wieslawsoltes/HtmlML.git
  cd HtmlML
  dotnet run --project samples/JavaScriptPlayground/JavaScriptPlayground.csproj
usageLanguage: javascript
usage: |-
  const canvas = document.getElementById('draw');
  const ctx = canvas.getContext('2d');

  ctx.strokeStyle = '#ff8f72';
  canvas.addEventListener('pointermove', event => {
    ctx.lineTo(event.x, event.y);
    ctx.stroke();
  });
highlights:
  - Canvas 2D drawing surface
  - WebGL-oriented rendering context
  - Live JavaScript and TypeScript demos
  - XAML preview, files, and console bridges
layers:
  - label: Edit
    detail: The playground loads JavaScript, TypeScript, XAML, and supporting assets.
  - label: Execute
    detail: The embedded runtime transpiles modules and runs them against the live TopLevel.
  - label: Draw
    detail: Canvas contexts record paths, paint, text, transforms, or GPU-oriented frames.
  - label: Inspect
    detail: Preview and console surfaces expose visible output and runtime diagnostics.
sourcePath: samples/JavaScriptPlayground
related:
  - htmlml/javascript-runtime
  - htmlml/native-markup
---

## Canvas 2D, WebGL-oriented rendering, pointer events, animation frames, editable scripts, XAML preview, file bridges, console output, and TypeScript demos form an immediate native scripting laboratory.
