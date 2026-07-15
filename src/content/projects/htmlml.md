---
order: 23
name: HtmlML
eyebrow: HTML semantics for native Avalonia UI
category: Avalonia
repo: HtmlML
description: An HTML-inspired markup system for native Avalonia controls, paired with a reusable JavaScript and TypeScript runtime, DOM-style APIs, events, styling, and Canvas rendering.
statement: Write familiar HTML-shaped markup and script native Avalonia controls—without embedding a browser.
accent: "#ff8f72"
featured: true
tier: Flagship
status: Preview
packages:
  - name: HtmlML
    note: HTML-like Avalonia elements, styling, document structure, scripts, and Canvas.
    url: https://github.com/wieslawsoltes/HtmlML/tree/main/src/HtmlML
  - name: JavaScript.Avalonia
    note: Standalone Jint host, DOM bridge, events, TypeScript, timers, modules, and Canvas APIs.
    url: https://github.com/wieslawsoltes/HtmlML/tree/main/src/JavaScript.Avalonia
install: |-
  git clone https://github.com/wieslawsoltes/HtmlML.git
  # Reference src/HtmlML and, optionally, src/JavaScript.Avalonia.
usageLanguage: xml
usage: |-
  <html xmlns="https://github.com/avaloniaui"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
    <body class="app-body">
      <section class="card">
        <h1>Hello HtmlML</h1>
        <canvas id="draw" width="400" height="200" />
      </section>
    </body>
  </html>
highlights:
  - Native HTML-like Avalonia elements
  - CSS-inspired classes and inline styles
  - JavaScript, TypeScript, DOM, and events
  - Canvas 2D and WebGL-oriented scripting
audience:
  - Avalonia teams bringing web markup concepts into native applications
  - Tool authors embedding scriptable native UI surfaces
  - Developers building hybrid C#/JavaScript or TypeScript workflows without a WebView
architecture:
  - label: Markup
    detail: HTML-like XAML tags map to concrete Avalonia controls and document structure.
  - label: Style
    detail: Classes, inline declarations, stylesheets, and converters apply CSS-inspired values through Avalonia properties.
  - label: DOM + events
    detail: JavaScript.Avalonia exposes visual-tree queries, mutation, event propagation, timers, modules, and native object access.
  - label: Canvas
    detail: 2D and WebGL-oriented contexts record drawing commands against Avalonia rendering surfaces.
compatibility:
  - label: Avalonia
    value: Native desktop targets
    state: ready
  - label: JavaScript
    value: Embedded Jint runtime
    state: ready
  - label: TypeScript
    value: Embedded transpilation
    state: ready
  - label: NuGet
    value: Publication planned
    state: planned
proof:
  - value: 30+ tags
    label: HTML-shaped element set
  - value: DOM-style
    label: queries, mutation, and events
  - value: 2D + WebGL
    label: Canvas directions
media:
  - src: https://opengraph.githubassets.com/portfolio-htmlml/wieslawsoltes/HtmlML
    alt: HtmlML GitHub repository preview
    caption: The repository combines the markup system, JavaScript runtime, website sample, native host sample, and interactive playground.
links:
  - label: HtmlML guide
    href: https://github.com/wieslawsoltes/HtmlML/blob/main/src/HtmlML/README.md
  - label: JavaScript.Avalonia guide
    href: https://github.com/wieslawsoltes/HtmlML/blob/main/src/JavaScript.Avalonia/README.md
  - label: Samples
    href: https://github.com/wieslawsoltes/HtmlML/tree/main/samples
limitations: HtmlML and JavaScript.Avalonia are source-consumed previews. Element and CSS coverage is intentionally smaller than a browser, and official package publication remains on the roadmap.
related:
  - xaml-playground
  - nativewebview
  - nxui
---

HtmlML maps familiar HTML-shaped elements onto native Avalonia controls. Its companion JavaScript.Avalonia runtime adds a Jint engine, DOM traversal and mutation, routed-event bridging, modules, timers, animation frames, TypeScript transpilation, and Canvas APIs without hosting a browser engine.
