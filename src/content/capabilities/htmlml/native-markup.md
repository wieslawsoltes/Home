---
order: 23
project: htmlml
name: Native HTML Markup
eyebrow: HTML semantics mapped to Avalonia
status: Preview
description: HtmlML provides HTML-shaped XAML elements for headings, text, lists, navigation, sections, media, links, scripts, styles, and Canvas while creating normal native Avalonia controls.
statement: Use familiar document semantics without putting a browser inside the application.
packages:
  - name: HtmlML
    note: HTML-like Avalonia elements, document structure, styling, scripts, and Canvas.
    url: https://github.com/wieslawsoltes/HtmlML/tree/main/src/HtmlML
install: |-
  git clone https://github.com/wieslawsoltes/HtmlML.git
  # Add a ProjectReference to src/HtmlML/HtmlML.csproj.
usageLanguage: xml
usage: |-
  <html xmlns="https://github.com/avaloniaui"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
    <body class="app-body">
      <nav><a href="#work">Work</a></nav>
      <section class="hero">
        <h1>Native Avalonia. Familiar markup.</h1>
        <p>No embedded browser required.</p>
      </section>
    </body>
  </html>
highlights:
  - 30+ HTML-shaped elements
  - Native Avalonia control output
  - Document, semantic, and media tags
  - Extensible element base classes
layers:
  - label: Declare
    detail: HTML-shaped tags express document and application structure in XAML.
  - label: Create
    detail: Each element maps to an Avalonia control with normal properties and layout.
  - label: Compose
    detail: Elements participate in native trees, resources, input, and lifecycle.
  - label: Extend
    detail: Applications derive new elements or register domain-specific tags.
sourcePath: src/HtmlML
docsPath: src/HtmlML/README.md
related:
  - htmlml/css-styling
  - htmlml/javascript-runtime
  - htmlml/canvas-playground
---

## HtmlML provides HTML-shaped XAML elements for headings, text, lists, navigation, sections, media, links, scripts, styles, and Canvas while creating normal native Avalonia controls.
