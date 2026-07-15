---
order: 24
project: htmlml
name: CSS-inspired Styling
eyebrow: Web-shaped values, Avalonia properties
status: Preview
description: Stylesheet links, style elements, classes, inline declarations, selectors, and value converters translate familiar CSS-oriented authoring into Avalonia styling and properties.
statement: Keep the vocabulary familiar while preserving the native styling system underneath.
packages:
  - name: HtmlML
    note: CSS converter, runtime style applier, classes, links, style tags, and inline declarations.
    url: https://github.com/wieslawsoltes/HtmlML/tree/main/src/HtmlML/Css
install: |-
  git clone https://github.com/wieslawsoltes/HtmlML.git
  # Reference src/HtmlML/HtmlML.csproj and add a stylesheet asset.
usageLanguage: xml
usage: |-
  <head>
    <link rel="stylesheet"
          href="avares://Demo/Assets/site.css"
          type="text/css" />
  </head>
  <body class="app-body">
    <section class="card" style="padding: 24px">
      <h2>Styled through familiar values</h2>
    </section>
  </body>
highlights:
  - Stylesheet and style elements
  - Classes and inline declarations
  - CSS-to-Avalonia value conversion
  - Runtime style application
layers:
  - label: Load
    detail: Link and style elements resolve external or inline declarations.
  - label: Match
    detail: Element names, classes, and document structure determine applicable rules.
  - label: Convert
    detail: CSS-inspired values map into Avalonia property types.
  - label: Apply
    detail: The runtime updates native control classes and properties.
sourcePath: src/HtmlML/Css
related:
  - htmlml/native-markup
  - htmlml/javascript-runtime
---

## Stylesheet links, style elements, classes, inline declarations, selectors, and value converters translate familiar CSS-oriented authoring into Avalonia styling and properties.
