---
order: 39
name: ThemeManager.Avalonia
eyebrow: Runtime Avalonia themes
category: Avalonia
repo: ThemeManager.Avalonia
branch: master
description: A small runtime theme abstraction that initializes Avalonia Fluent or Simple themes and switches the application between light and dark variants.
statement: Choose a built-in Avalonia theme family and switch its active variant through one interface.
accent: "#e09cff"
showInIndex: false
tier: Maintained
status: Maintained
packages:
  - name: ThemeManager
    note: IThemeManager with Fluent and Simple theme implementations.
install: dotnet add package ThemeManager
usageLanguage: csharp
usage: |-
  IThemeManager themes = new FluentThemeManager();
  themes.Initialize(this);
  themes.Switch(1); // Dark
highlights:
  - Fluent and Simple implementations
  - Application-level initialization
  - Light and dark variant switching
  - Small replaceable interface
audience:
  - Avalonia applications with light and dark settings
  - Apps choosing between Fluent and Simple theme families
  - Developers wanting a replaceable theme bootstrap boundary
architecture:
  - label: Contract
    detail: IThemeManager exposes Initialize and Switch operations.
  - label: Fluent
    detail: FluentThemeManager inserts FluentTheme and switches its application variant.
  - label: Simple
    detail: SimpleThemeManager does the same for SimpleTheme.
  - label: Application
    detail: RequestedThemeVariant propagates light or dark state through Avalonia resources.
compatibility:
  - label: Avalonia
    value: Built-in themes
    state: ready
  - label: FluentTheme
    value: Supported
    state: ready
  - label: SimpleTheme
    value: Supported
    state: ready
  - label: Light / dark
    value: Runtime switch
    state: ready
proof:
  - value: 2 hosts
    label: Fluent and Simple
  - value: 2 variants
    label: light and dark
  - value: 1 interface
    label: application theme boundary
media:
  - src: https://opengraph.githubassets.com/portfolio-long-tail/wieslawsoltes/ThemeManager.Avalonia
    alt: ThemeManager.Avalonia GitHub repository preview
    caption: A focused abstraction initializes an Avalonia theme family and controls its application-wide variant.
links:
  - label: Repository
    href: https://github.com/wieslawsoltes/ThemeManager.Avalonia
  - label: NuGet
    href: https://www.nuget.org/packages/ThemeManager/
limitations: The current implementation intentionally covers built-in Fluent and Simple initialization plus light/dark switching. Application-owned custom theme catalogs and persistence remain outside this small package.
related:
  - colorpicker
  - xaml-behaviors
  - static-view-locator
archive:
  order: 8
  kind: Maintained
  tags:
    - Themes
    - Avalonia
    - Styling
---

ThemeManager.Avalonia provides one small IThemeManager abstraction over Avalonia’s built-in Fluent and Simple themes. Each implementation initializes its theme family and changes Application.RequestedThemeVariant between light and dark at runtime.
