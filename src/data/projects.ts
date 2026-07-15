export type PackageLink = {
  name: string;
  note: string;
  url?: string;
};

export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  category: 'Graphics' | 'Frameworks' | 'Avalonia' | 'Uno Platform' | 'Controls' | 'Tools';
  repo: string;
  branch?: string;
  description: string;
  statement: string;
  accent: string;
  featured?: boolean;
  tier?: 'Flagship' | 'Maintained' | 'Experimental';
  status: 'Active' | 'Preview' | 'Maintained';
  packages: PackageLink[];
  install: string;
  usageLanguage: 'csharp' | 'xml' | 'bash' | 'javascript';
  usage: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: 'progpu',
    name: 'ProGPU',
    eyebrow: 'GPU-first UI substrate',
    category: 'Graphics',
    repo: 'ProGPU',
    description: 'Cross-platform rendering, composition, vector, text, compute, and framework interop built directly on WebGPU and Silk.NET.',
    statement: 'A lightweight GPU foundation for the next generation of .NET interfaces.',
    accent: '#8ea2ff',
    featured: true,
    status: 'Preview',
    packages: [
      { name: 'ProGPU.Backend', note: 'WebGPU device, swapchain, windowing, and platform services.' },
      { name: 'ProGPU.Vector', note: 'Paths, geometry, brushes, pens, and GPU-ready vector data.' },
      { name: 'ProGPU.Scene', note: 'Retained visuals, compositor commands, effects, and presentation.' },
      { name: 'ProGPU.Text', note: 'Text layout, glyph metrics, and GPU text rendering.' }
    ],
    install: 'dotnet add package ProGPU.Backend --prerelease\ndotnet add package ProGPU.Scene --prerelease',
    usageLanguage: 'csharp',
    usage: 'using ProGPU.Backend;\n\n// Create the platform host and render through a retained GPU scene.\n// See the Gallery sample for complete window and frame setup.\nvar options = new BackendOptions();',
    highlights: ['WebGPU-native pipelines', 'Retained scene composition', 'Vector, text, and compute', 'Avalonia, Uno, WPF, and WinForms bridges']
  },
  {
    slug: 'librewpf',
    name: 'LibreWPF',
    eyebrow: 'WPF, beyond Windows',
    category: 'Frameworks',
    repo: 'wpf',
    branch: 'progpu-rendering-port',
    description: 'A portable WPF runtime and SDK that retains familiar managed WPF source and XAML while rendering through ProGPU and Silk.NET.',
    statement: 'Keep the WPF programming model. Change the platform beneath it.',
    accent: '#75d8ff',
    featured: true,
    status: 'Preview',
    packages: [
      { name: 'LibreWPF.Sdk', note: 'MSBuild SDK that redirects WPF apps to the portable runtime.' },
      { name: 'LibreWPF.ProGPU', note: 'WPF host, input bridge, and ProGPU compositor adapter.' },
      { name: 'LibreWPF.Transport', note: 'Managed assemblies, themes, XAML tasks, and runtime metadata.' }
    ],
    install: '<Project Sdk="LibreWPF.Sdk/0.1.0-preview.15">\n  <PropertyGroup>\n    <OutputType>WinExe</OutputType>\n    <TargetFramework>net10.0-windows</TargetFramework>\n    <UseWPF>true</UseWPF>\n  </PropertyGroup>\n</Project>',
    usageLanguage: 'bash',
    usage: 'dotnet restore\ndotnet run',
    highlights: ['Source-compatible WPF XAML', 'macOS, Linux, and Windows', 'ProGPU/WebGPU composition', 'Portable SDK switch']
  },
  {
    slug: 'librewinforms',
    name: 'LibreWinForms',
    eyebrow: 'Portable WinForms APIs',
    category: 'Frameworks',
    repo: 'winforms',
    branch: 'librewinforms-progpu-port',
    description: 'Cross-platform WinForms-shaped APIs and SDK backed by ProGPU, Silk.NET, and the shared LibreWPF interop layer.',
    statement: 'Classic desktop APIs, carried onto a modern GPU stack.',
    accent: '#8be8c3',
    featured: true,
    status: 'Preview',
    packages: [
      { name: 'LibreWinForms.Sdk', note: 'Portable SDK for existing WinForms projects.' },
      { name: 'LibreWinForms.System.Windows.Forms', note: 'Managed WinForms API and runtime surface.' },
      { name: 'LibreWinForms.WindowsFormsIntegration', note: 'Bridge for hosting WinForms in LibreWPF.' }
    ],
    install: '<Project Sdk="LibreWinForms.Sdk/0.1.0-preview.11">\n  <PropertyGroup>\n    <OutputType>WinExe</OutputType>\n    <TargetFramework>net10.0</TargetFramework>\n    <UseWindowsForms>true</UseWindowsForms>\n  </PropertyGroup>\n</Project>',
    usageLanguage: 'csharp',
    usage: 'using System.Windows.Forms;\n\nApplicationConfiguration.Initialize();\nApplication.Run(new MainForm());',
    highlights: ['Familiar System.Windows.Forms', 'Portable managed controls', 'GPU-backed drawing', 'WPF/WinForms interop']
  },
  {
    slug: 'avalonia-progpu',
    name: 'Avalonia ProGPU',
    eyebrow: 'Rendering backend',
    category: 'Avalonia',
    repo: 'Avalonia',
    branch: 'feature/progpu',
    description: 'A GPU-first WebGPU rendering backend that preserves Avalonia rendering contracts while replacing the default Skia renderer.',
    statement: 'Avalonia rendering, rebuilt around a direct GPU composition path.',
    accent: '#d39cff',
    featured: true,
    status: 'Preview',
    packages: [{ name: 'ProGPU.Avalonia.Rendering', note: 'ProGPU, Silk.NET, and WebGPU rendering platform for Avalonia.' }],
    install: 'dotnet add package ProGPU.Avalonia.Rendering --prerelease',
    usageLanguage: 'csharp',
    usage: 'AppBuilder.Configure<App>()\n    .UseSilkNet()\n    .UseProGpu();',
    highlights: ['Skia-free render path', 'Custom vector operation lease', 'WebGPU shaders in-frame', 'Avalonia rendering contracts']
  },
  {
    slug: 'avalonia-silknet',
    name: 'Avalonia Silk.NET',
    eyebrow: 'Platform backend',
    category: 'Avalonia',
    repo: 'Avalonia',
    branch: 'feature/progpu',
    description: 'Cross-platform desktop windowing, input, surfaces, and WebGPU integration for Avalonia applications through Silk.NET.',
    statement: 'A lean platform layer between Avalonia and the desktop.',
    accent: '#ff9d78',
    featured: true,
    status: 'Preview',
    packages: [{ name: 'ProGPU.Avalonia.SilkNet', note: 'Silk.NET windowing and platform services for Avalonia.' }],
    install: 'dotnet add package ProGPU.Avalonia.SilkNet --prerelease',
    usageLanguage: 'csharp',
    usage: 'AppBuilder.Configure<App>()\n    .UseSilkNet()\n    .UseProGpu();',
    highlights: ['Silk.NET windowing', 'Cross-platform input', 'WebGPU surfaces', 'Renderer-independent host design']
  },
  {
    slug: 'dock',
    name: 'Dock',
    eyebrow: 'Docking workspace system',
    category: 'Controls',
    repo: 'Dock',
    description: 'A complete docking layout system for Avalonia with floating windows, serialization, theming, and multiple MVVM integrations.',
    statement: 'Composable workspaces for serious desktop applications.',
    accent: '#7dc7ff',
    featured: true,
    status: 'Active',
    packages: [
      { name: 'Dock.Avalonia', note: 'Avalonia controls and docking host.' },
      { name: 'Dock.Model.Mvvm', note: 'Framework-neutral MVVM model implementation.' },
      { name: 'Dock.Avalonia.Themes.Fluent', note: 'Fluent theme for Dock controls.' }
    ],
    install: 'dotnet add package Dock.Avalonia\ndotnet add package Dock.Model.Mvvm\ndotnet add package Dock.Avalonia.Themes.Fluent',
    usageLanguage: 'xml',
    usage: '<dock:DockControl Layout="{Binding Layout}"\n                  Factory="{Binding Factory}" />',
    highlights: ['Documents and tool panes', 'Floating windows', 'JSON, XML, YAML, and Protobuf layouts', 'MVVM, ReactiveUI, and Prism']
  },
  {
    slug: 'xaml-behaviors',
    name: 'XAML Behaviors',
    eyebrow: 'Composable interaction',
    category: 'Avalonia',
    repo: 'Xaml.Behaviors',
    description: 'Reusable actions, triggers, and behaviors for Avalonia, including strongly typed source-generated options for AOT-friendly apps.',
    statement: 'Add interaction in XAML without turning views into code-behind.',
    accent: '#bd9bff',
    featured: true,
    status: 'Active',
    packages: [
      { name: 'Xaml.Behaviors', note: 'Complete behavior, action, and trigger library.' },
      { name: 'Xaml.Behaviors.Interactivity', note: 'Foundation types for custom behaviors.' },
      { name: 'Xaml.Behaviors.Interactions', note: 'Common built-in triggers and actions.' }
    ],
    install: 'dotnet add package Xaml.Behaviors',
    usageLanguage: 'xml',
    usage: '<Button Content="Save">\n  <Interaction.Behaviors>\n    <EventTriggerBehavior EventName="Click">\n      <InvokeCommandAction Command="{Binding SaveCommand}" />\n    </EventTriggerBehavior>\n  </Interaction.Behaviors>\n</Button>',
    highlights: ['Actions and triggers', 'Drag and drop behaviors', 'ReactiveUI integrations', 'AOT-friendly source generators']
  },
  {
    slug: 'svg-skia',
    name: 'Svg.Skia',
    eyebrow: 'SVG rendering library',
    category: 'Graphics',
    repo: 'Svg.Skia',
    description: 'A robust SVG 1.1 and static SVG 2 rendering library for SkiaSharp, with Avalonia controls and source-generation support.',
    statement: 'Standards-minded SVG rendering across the .NET ecosystem.',
    accent: '#ffb45f',
    featured: true,
    status: 'Active',
    packages: [
      { name: 'Svg.Skia', note: 'Core SVG parser and Skia renderer.' },
      { name: 'Svg.Controls.Skia.Avalonia', note: 'Ready-to-use Avalonia SVG controls.' },
      { name: 'Svg.SourceGenerator.Skia', note: 'Compile SVG resources into drawing code.' }
    ],
    install: 'dotnet add package Svg.Skia\ndotnet add package Svg.Controls.Skia.Avalonia',
    usageLanguage: 'csharp',
    usage: 'using Svg.Skia;\n\nvar svg = new SKSvg();\nsvg.Load("icon.svg");\ncanvas.DrawPicture(svg.Picture);',
    highlights: ['SVG 1.1 support', 'SkiaSharp rendering', 'Avalonia controls', 'W3C and resvg parity lanes']
  },
  {
    slug: 'prodatagrid',
    name: 'ProDataGrid',
    eyebrow: 'High-performance data UI',
    category: 'Controls',
    repo: 'ProDataGrid',
    description: 'A high-performance Avalonia DataGrid family with charting, formulas, diagnostics, virtualization, and production-grade editing.',
    statement: 'Dense data workflows without compromising interaction or speed.',
    accent: '#5ce1b9',
    featured: true,
    status: 'Active',
    packages: [
      { name: 'ProDataGrid', note: 'The high-performance Avalonia grid control.' },
      { name: 'ProDataGrid.Charting', note: 'Grid and pivot integration for ProCharts.' },
      { name: 'ProDataGrid.FormulaEngine', note: 'Parsing, evaluation, and recalculation.' },
      { name: 'ProDiagnostics', note: 'Runtime visual tree and property inspection.' }
    ],
    install: 'dotnet add package ProDataGrid',
    usageLanguage: 'xml',
    usage: '<DataGrid ItemsSource="{Binding People}" AutoGenerateColumns="False">\n  <DataGrid.Columns>\n    <DataGridTextColumn Header="Name" Binding="{Binding Name}" Width="*" />\n    <DataGridCheckBoxColumn Header="Active" Binding="{Binding IsActive}" />\n  </DataGrid.Columns>\n</DataGrid>',
    highlights: ['Row and column virtualization', 'Formula engine and charting', 'Fluent and Simple themes', 'Built-in developer diagnostics']
  },
  {
    slug: 'treedatagrid',
    name: 'TreeDataGrid',
    eyebrow: 'Hierarchical data control',
    category: 'Controls',
    repo: 'TreeDataGrid',
    description: 'An Avalonia control that presents hierarchical and tabular data together, with both tree and flat operating modes.',
    statement: 'A tree and a table, resolved into one efficient control.',
    accent: '#a6d76b',
    featured: true,
    status: 'Maintained',
    packages: [{ name: 'TreeDataGrid', note: 'Control, models, column types, and themes.' }],
    install: 'dotnet add package TreeDataGrid',
    usageLanguage: 'xml',
    usage: '<TreeDataGrid ItemsSource="{Binding People}">\n  <TreeDataGridTextColumn Header="Name" Binding="{Binding Name}" />\n  <TreeDataGridTextColumn Header="Role" Binding="{Binding Role}" />\n</TreeDataGrid>',
    highlights: ['Hierarchical and flat modes', 'Code or XAML columns', 'Selection models', 'Virtualized data presentation']
  },
  {
    slug: 'core2d',
    name: 'Core2D',
    eyebrow: 'Diagram editor engine',
    category: 'Tools',
    repo: 'Core2D',
    description: 'A multi-platform, data-driven 2D diagram editor with a portable model, rendering backends, and extensible tooling.',
    statement: 'A complete foundation for technical drawing and diagramming.',
    accent: '#ff8177',
    status: 'Maintained',
    packages: [{ name: 'Core2D', note: 'Core diagram model and editor primitives.' }],
    install: 'git clone https://github.com/wieslawsoltes/Core2D.git\ncd Core2D && dotnet build',
    usageLanguage: 'csharp',
    usage: 'var project = new Project();\n// Compose shapes, layers, and editor tools against the portable model.',
    highlights: ['Data-driven diagrams', 'Multiple rendering backends', 'Extensible editor tools', 'Cross-platform architecture']
  },
  {
    slug: 'dxf-parser',
    name: 'DxfParser',
    eyebrow: 'DXF inspection and rendering workbench',
    category: 'Tools',
    repo: 'DxfParser',
    description: 'A browser-native DXF parser, tree inspector, comparison workspace, diagnostics engine, renderer, and lightweight editor for detailed AutoCAD drawing analysis.',
    statement: 'Open the DXF structure, inspect every code, compare drawings, and render the geometry.',
    accent: '#72d6ff',
    tier: 'Maintained',
    status: 'Maintained',
    packages: [{ name: 'DxfParser', note: 'Standalone JavaScript parser, inspector, rendering stack, diagnostics, diff, and editor.', url: 'https://github.com/wieslawsoltes/DxfParser' }],
    install: 'git clone https://github.com/wieslawsoltes/DxfParser.git\ncd DxfParser\n# Serve this directory with any static web server.',
    usageLanguage: 'javascript',
    usage: 'const parser = new DxfParser();\nconst document = parser.parse(dxfText);\n\nconst serialized = parser.serializeTree(document);',
    highlights: ['Hierarchical DXF tag and entity tree', 'Canvas and WebGL rendering', 'Drawing comparison and diagnostics', 'Round-trip editing and DXF export']
  },
  {
    slug: 'proedit',
    name: 'ProEdit',
    eyebrow: 'Document engineering platform',
    category: 'Uno Platform',
    repo: 'ProEdit',
    description: 'A modular .NET 10 platform for document editing, layout, rendering, reporting, printing, conversion, automation, and real-time collaboration.',
    statement: 'Build complete document workflows from one composable, cross-platform stack.',
    accent: '#ee8fff',
    featured: true,
    tier: 'Flagship',
    status: 'Active',
    packages: [
      { name: 'ProEdit.Controls.Skia.Avalonia', note: 'Avalonia document viewer and editable control backed by the shared Skia host.' },
      { name: 'ProEdit.Controls.Skia.Uno', note: 'Uno Platform document viewer and editable control backed by the same shared Skia host.' },
      { name: 'ProEdit.RichText.Avalonia', note: 'Editable Avalonia rich-text control with selection, formatting, and command infrastructure.' },
      { name: 'ProEdit.OpenXml', note: 'Open XML and DOCX import and export for the core document model.' },
      { name: 'ProEdit.Reporting.Avalonia.Designer', note: 'Avalonia report authoring surface for the modular reporting stack.' },
      { name: 'ProEdit.Collaboration', note: 'Operation model, synchronization engine, persistence, and snapshots.' }
    ],
    install: 'dotnet add package ProEdit.Controls.Skia.Avalonia',
    usageLanguage: 'xml',
    usage: '<controls:ProEditDocumentEditor\n    Document="{Binding Document}"\n    Zoom="{Binding Zoom, Mode=TwoWay}"\n    UsePagination="True"\n    AcceptsReturn="True" />',
    highlights: ['Rich document editing and pagination', 'DOCX, RTF, HTML, Markdown, PDF, PS, and XPS', 'Avalonia, Uno Platform, and .NET MAUI controls', 'Reporting, printing, collaboration, macros, and MCP']
  },
  {
    slug: 'protext',
    name: 'ProText',
    eyebrow: 'Text controls',
    category: 'Controls',
    repo: 'ProText',
    description: 'High-performance text controls for Avalonia, powered by the Pretext layout engine and Skia rendering.',
    statement: 'Text surfaces designed for speed, scale, and rich layout.',
    accent: '#ffd56b',
    status: 'Active',
    packages: [{ name: 'ProText', note: 'Avalonia text controls and rendering integration.' }],
    install: 'dotnet add package ProText',
    usageLanguage: 'xml',
    usage: '<pro:ProTextBlock Text="{Binding DocumentText}"\n                  TextWrapping="Wrap" />',
    highlights: ['High-performance layout', 'Avalonia integration', 'Skia rendering', 'Pretext-powered line breaking']
  },
  {
    slug: 'pretext',
    name: 'Pretext',
    eyebrow: 'Universal text preparation',
    category: 'Graphics',
    repo: 'PretextSharp',
    description: 'Universal text preparation and line layout with grapheme-aware wrapping, locale segmentation, bidi, and streaming line walking.',
    statement: 'Predictable, allocation-conscious text layout for any SkiaSharp UI.',
    accent: '#ffce8a',
    status: 'Active',
    packages: [
      { name: 'Pretext', note: 'Core preparation and line layout engine.' },
      { name: 'Pretext.SkiaSharp', note: 'Portable SkiaSharp measurement backend.' }
    ],
    install: 'dotnet add package Pretext\ndotnet add package Pretext.SkiaSharp',
    usageLanguage: 'csharp',
    usage: 'var prepared = PretextLayout.PrepareWithSegments(text, "16px Inter");\nvar lines = PretextLayout.LayoutWithLines(prepared, 320, 22);\n\nforeach (var line in lines.Lines)\n    Console.WriteLine(line.Text);',
    highlights: ['Unicode-aware wrapping', 'Locale-sensitive segmentation', 'Bidirectional text', 'Streaming, allocation-light APIs']
  },
  {
    slug: 'protranslate',
    name: 'ProTranslate',
    eyebrow: 'XAML globalization',
    category: 'Frameworks',
    repo: 'ProTranslate',
    description: 'Translation and globalization infrastructure for Avalonia, WPF, MAUI, WinUI, and Uno with generated bindings and analyzers.',
    statement: 'One translation model across the modern XAML ecosystem.',
    accent: '#67dbc6',
    status: 'Active',
    packages: [
      { name: 'ProTranslate.Core', note: 'Culture, provider, formatting, and fallback services.' },
      { name: 'ProTranslate.Avalonia', note: 'Avalonia markup extensions and binding refresh.' },
      { name: 'ProTranslate.SourceGenerator', note: 'Strongly typed keys and compiled-binding surfaces.' }
    ],
    install: 'dotnet add package ProTranslate.Core\ndotnet add package ProTranslate.Avalonia',
    usageLanguage: 'xml',
    usage: '<StackPanel Translation.AutoFlowDirection="True">\n  <TextBlock Text="{Translate Shell.FileMenu}" />\n</StackPanel>',
    highlights: ['Five XAML frameworks', 'Runtime culture switching', 'Source generators and analyzers', 'XLIFF, PO, RESX, ARB, and more']
  },
  {
    slug: 'effector',
    name: 'Effector',
    eyebrow: 'Custom visual effects',
    category: 'Graphics',
    repo: 'Effector',
    description: 'Extensible Skia-backed custom effects for Avalonia, built for reusable image and control processing pipelines.',
    statement: 'A focused effects layer for expressive Avalonia rendering.',
    accent: '#ff759f',
    status: 'Active',
    packages: [{ name: 'Effector', note: 'Effects primitives and Avalonia integration.' }],
    install: 'dotnet add package Effector',
    usageLanguage: 'csharp',
    usage: '// Attach an Effector pipeline to an Avalonia visual.\n// The repository samples cover custom Skia-backed effects.',
    highlights: ['Skia-backed effects', 'Composable pipelines', 'Avalonia integration', 'Extensible effect model']
  },
  {
    slug: 'xaml-visual-editor',
    name: 'XamlVisualEditor',
    eyebrow: 'Live XAML tooling',
    category: 'Tools',
    repo: 'XamlVisualEditor',
    description: 'An extensible Avalonia XAML visual editor with a live designer, code editor, language services, debugging, and .NET extensions.',
    statement: 'Design, inspect, and extend XAML in one living workspace.',
    accent: '#a894ff',
    status: 'Active',
    packages: [{ name: 'XamlVisualEditor', note: 'Build and run the editor from source.' }],
    install: 'git clone https://github.com/wieslawsoltes/XamlVisualEditor.git\ncd XamlVisualEditor && dotnet run',
    usageLanguage: 'bash',
    usage: '# Open a XAML document, edit markup, and inspect the live preview.\ndotnet run',
    highlights: ['Live visual designer', 'Code editor', 'Language services', 'Extensible .NET tooling']
  },
  {
    slug: 'panandzoom',
    name: 'PanAndZoom',
    eyebrow: 'Spatial navigation control',
    category: 'Controls',
    repo: 'PanAndZoom',
    branch: 'master',
    description: 'A focused Avalonia control for smooth zoom-to-point, panning, constraints, animations, and programmable viewport navigation.',
    statement: 'A precise, reusable viewport for diagrams, maps, editors, and infinite canvases.',
    accent: '#72d4ff',
    tier: 'Maintained',
    status: 'Active',
    packages: [{ name: 'PanAndZoom', note: 'ZoomBorder, viewport state, gestures, animation, and constraints.' }],
    install: 'dotnet add package PanAndZoom --prerelease',
    usageLanguage: 'xml',
    usage: '<paz:ZoomBorder ZoomSpeed="1.2"\n                MinZoom="0.1" MaxZoom="10">\n  <Canvas Width="2400" Height="1600" />\n</paz:ZoomBorder>',
    highlights: ['Pointer-centered zoom', 'Pan and viewport constraints', 'Animated navigation', 'Double-click zoom modes']
  },
  {
    slug: 'nodeeditor',
    name: 'NodeEditor',
    eyebrow: 'Visual graph authoring',
    category: 'Controls',
    repo: 'NodeEditor',
    description: 'A templatable Avalonia node-and-connector editor with portable models, MVVM integrations, graph logic, and browser-ready samples.',
    statement: 'Build visual programming tools without rebuilding graph interaction from scratch.',
    accent: '#d69bff',
    tier: 'Maintained',
    status: 'Active',
    packages: [
      { name: 'NodeEditorAvalonia', note: 'Avalonia editor controls, templates, and interaction.' },
      { name: 'NodeEditor.Model', note: 'Portable node, port, and connector model.' },
      { name: 'NodeEditor.Mvvm', note: 'MVVM-oriented graph authoring surface.' }
    ],
    install: 'dotnet add package NodeEditorAvalonia',
    usageLanguage: 'xml',
    usage: '<nodeEditor:NodeEditor\n    Nodes="{Binding Nodes}"\n    Connectors="{Binding Connectors}" />',
    highlights: ['Nodes, ports, and connectors', 'XAML-driven templates', 'MVVM and ReactiveUI', 'LogicLab and browser samples']
  },
  {
    slug: 'nxui',
    name: 'NXUI',
    eyebrow: 'C# UI composition',
    category: 'Frameworks',
    repo: 'NXUI',
    description: 'A fluent, code-first UI layer for Avalonia that composes applications entirely in C# and keeps iteration fast with hot reload.',
    statement: 'Avalonia applications expressed as compact, composable C#.',
    accent: '#8ea2ff',
    tier: 'Experimental',
    status: 'Active',
    packages: [
      { name: 'NXUI', note: 'Fluent controls, properties, bindings, and composition.' },
      { name: 'NXUI.Desktop', note: 'Desktop host and hot-reload integration.' }
    ],
    install: 'dotnet add package NXUI\ndotnet add package NXUI.Desktop',
    usageLanguage: 'csharp',
    usage: 'object Build() =>\n  Window()\n    .Title("NXUI")\n    .Content(Label().Content("Hello from C#"));\n\nreturn HotReloadHost.Run(Build, "NXUI", args);',
    highlights: ['Code-first Avalonia UI', 'Fluent composition', 'Hot reload host', 'No XAML required']
  },
  {
    slug: 'colorpicker',
    name: 'ColorPicker',
    eyebrow: 'Color and theme tooling',
    category: 'Controls',
    repo: 'ColorPicker',
    branch: 'master',
    description: 'A reusable Avalonia color picker and theme editor surface with spectrum, component, palette, and alpha editing workflows.',
    statement: 'Production-ready color selection for creative and theming tools.',
    accent: '#ff85b6',
    tier: 'Maintained',
    status: 'Maintained',
    packages: [{ name: 'ThemeEditor.Controls.ColorPicker', note: 'Color picker controls, styles, and theme editor primitives.' }],
    install: 'dotnet add package ThemeEditor.Controls.ColorPicker',
    usageLanguage: 'xml',
    usage: '<Application.Styles>\n  <StyleInclude Source="avares://ThemeEditor.Controls.ColorPicker/ColorPicker.axaml" />\n</Application.Styles>\n\n<cp:ColorPicker Color="Red" />',
    highlights: ['Spectrum and channel editing', 'Palette workflows', 'Alpha support', 'Reusable Avalonia styles']
  },
  {
    slug: 'htmlml',
    name: 'HtmlML',
    eyebrow: 'HTML semantics for native Avalonia UI',
    category: 'Avalonia',
    repo: 'HtmlML',
    description: 'An HTML-inspired markup system for native Avalonia controls, paired with a reusable JavaScript and TypeScript runtime, DOM-style APIs, events, styling, and Canvas rendering.',
    statement: 'Write familiar HTML-shaped markup and script native Avalonia controls—without embedding a browser.',
    accent: '#ff8f72',
    featured: true,
    tier: 'Flagship',
    status: 'Preview',
    packages: [
      { name: 'HtmlML', note: 'HTML-like Avalonia elements, styling, document structure, scripts, and Canvas.', url: 'https://github.com/wieslawsoltes/HtmlML/tree/main/src/HtmlML' },
      { name: 'JavaScript.Avalonia', note: 'Standalone Jint host, DOM bridge, events, TypeScript, timers, modules, and Canvas APIs.', url: 'https://github.com/wieslawsoltes/HtmlML/tree/main/src/JavaScript.Avalonia' }
    ],
    install: 'git clone https://github.com/wieslawsoltes/HtmlML.git\n# Reference src/HtmlML and, optionally, src/JavaScript.Avalonia.',
    usageLanguage: 'xml',
    usage: '<html xmlns="https://github.com/avaloniaui"\n      xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">\n  <body class="app-body">\n    <section class="card">\n      <h1>Hello HtmlML</h1>\n      <canvas id="draw" width="400" height="200" />\n    </section>\n  </body>\n</html>',
    highlights: ['Native HTML-like Avalonia elements', 'CSS-inspired classes and inline styles', 'JavaScript, TypeScript, DOM, and events', 'Canvas 2D and WebGL-oriented scripting']
  },
  {
    slug: 'cdp',
    name: 'CDP',
    eyebrow: 'DevTools protocol for native UI',
    category: 'Tools',
    repo: 'CDP',
    description: 'A native UI testing and diagnostics platform built on Chrome DevTools Protocol, with Test Studio, YAML flows, recording, headless CI, Playwright, Selenium, Appium, inspectors, and framework adapters.',
    statement: 'Design, record, run, and diagnose serious native UI tests through one open protocol.',
    accent: '#5ee1c0',
    featured: true,
    tier: 'Flagship',
    status: 'Preview',
    packages: [
      { name: 'Chrome.DevTools.Protocol', note: 'Protocol server, sessions, transports, and domain dispatch.' },
      { name: 'Chrome.DevTools.Avalonia', note: 'Avalonia DOM, CSS, input, page, overlay, and runtime domains.' },
      { name: 'Chrome.DevTools.Inspector', note: 'Desktop inspector and Test Studio global tool.' },
      { name: 'Chrome.DevTools.Automation.Headless', note: 'Headless test driver and CI helpers.' },
      { name: 'Chrome.DevTools.Runner', note: 'Headless .flow.yaml test runner global tool.' }
    ],
    install: 'dotnet add package Chrome.DevTools.Avalonia --prerelease',
    usageLanguage: 'csharp',
    usage: '// Register the Avalonia adapter and start the CDP endpoint.\n// Connect Chrome DevTools, Playwright, or Puppeteer\n// to the exposed HTTP/WebSocket discovery URL.',
    highlights: ['Visual Test Studio and YAML flows', 'Recorder, assertions, telemetry, and reports', 'Headless CI, Playwright, Selenium, and Appium', 'Avalonia, WPF, WinUI, Uno, and OS adapters']
  },
  {
    slug: 'nativewebview',
    name: 'NativeWebView',
    eyebrow: 'Native browser embedding',
    category: 'Controls',
    repo: 'NativeWebView',
    description: 'A cross-platform Avalonia WebView that uses each operating system’s browser engine, with embedded, GPU-surface, offscreen, dialog, and authentication workflows.',
    statement: 'Embed the platform browser without shipping another Chromium runtime.',
    accent: '#77cfff',
    featured: true,
    tier: 'Flagship',
    status: 'Preview',
    packages: [
      { name: 'NativeWebView', note: 'Avalonia control and cross-platform public API.' },
      { name: 'NativeWebView.Core', note: 'Backend contracts, navigation, scripting, and messaging.' },
      { name: 'NativeWebView.Platform.Windows', note: 'Windows WebView2 platform backend.' },
      { name: 'NativeWebView.Auth', note: 'System-browser authentication flows.' }
    ],
    install: 'dotnet add package NativeWebView\ndotnet add package NativeWebView.Platform.Windows',
    usageLanguage: 'csharp',
    usage: 'NativeWebViewRuntime.EnsureCurrentPlatformRegistered();\nvar backend = NativeWebViewRuntime.CreateBackend();\nvar webView = new NativeWebView(backend);\nawait webView.InitializeAsync();\nwebView.Navigate(new Uri("https://example.com"));',
    highlights: ['Native platform engines', 'Embedded and offscreen modes', 'JavaScript messaging', 'Desktop, mobile, and browser targets']
  },
  {
    slug: 'avalonia-development-plugin',
    name: 'Avalonia Development Plugin',
    eyebrow: 'Agent-ready framework expertise',
    category: 'Tools',
    repo: 'development-plugin-for-avalonia',
    description: 'A Codex plugin that packages focused Avalonia implementation and migration skills for controls, rendering, XAML, accessibility, testing, performance, and platform integration.',
    statement: 'Turn framework knowledge into repeatable, source-grounded development workflows.',
    accent: '#b394ff',
    featured: true,
    tier: 'Flagship',
    status: 'Active',
    packages: [{ name: 'development-plugin-for-avalonia', note: 'Plugin manifest, focused skills, references, and reusable workflows.', url: 'https://github.com/wieslawsoltes/development-plugin-for-avalonia' }],
    install: 'git clone https://github.com/wieslawsoltes/development-plugin-for-avalonia.git\n# Add the repository as a Codex plugin or copy the skills you need.',
    usageLanguage: 'bash',
    usage: '# Invoke a focused skill from Codex, for example:\n$avalonia-rendering-and-graphics\n$avalonia-bindings-and-xaml\n$avalonia-12-migration',
    highlights: ['Focused Avalonia skills', 'Source-grounded guidance', 'Avalonia 12 migration lane', 'Repo-local and plugin discovery']
  },
  {
    slug: 'procad',
    name: 'ProCad',
    eyebrow: 'Open CAD platform',
    category: 'Tools',
    repo: 'ProCad',
    description: 'A modular .NET CAD platform for DWG and DXF inspection, rendering, editing, scripting, and collaboration across desktop and browser hosts.',
    statement: 'A modern, extensible CAD stack built openly on .NET.',
    accent: '#ffb66f',
    tier: 'Experimental',
    status: 'Preview',
    packages: [
      { name: 'ProCadSharp.Core', note: 'CAD document model and shared primitives.' },
      { name: 'ProCadSharp.IO', note: 'DWG and DXF loading and persistence.' },
      { name: 'ProCadSharp.Controls.Avalonia', note: 'Avalonia viewer and editing controls.' },
      { name: 'ProCadSharp.Scripting', note: 'Programmable CAD workflows.' }
    ],
    install: 'dotnet add package ProCadSharp.Controls.Avalonia --prerelease',
    usageLanguage: 'csharp',
    usage: '// Load a CAD document, create a renderer, and host the\n// Avalonia control. See the repository samples for the current API.',
    highlights: ['DWG and DXF workflows', 'Rendering and editing', 'Scripting and collaboration', 'Avalonia, Uno, and MAUI controls']
  },
  {
    slug: 'codexgui',
    name: 'CodexGui',
    eyebrow: 'Native Codex workspace',
    category: 'Uno Platform',
    repo: 'CodexGui',
    description: 'A native Avalonia desktop client for Codex app-server with threads, approvals, rich Markdown, stdio and WebSocket transports, and extensible plugin surfaces.',
    statement: 'A focused native workspace for long-running Codex collaboration.',
    accent: '#89e2bf',
    tier: 'Experimental',
    status: 'Preview',
    packages: [
      { name: 'CodexGui.App', note: 'Desktop application and global .NET tool.' },
      { name: 'CodexGui.AppServer', note: 'Typed app-server protocol client and transports.' },
      { name: 'CodexGui.Markdown', note: 'Rich Markdown rendering for Avalonia.' }
    ],
    install: 'dotnet tool install --global CodexGui.App --prerelease',
    usageLanguage: 'bash',
    usage: 'codexgui',
    highlights: ['Native Avalonia client', 'Threads and approvals', 'stdio and WebSocket transports', 'Rich Markdown and plugins']
  },
  {
    slug: 'devtools-uno',
    name: 'DevToolsUno',
    eyebrow: 'In-app Uno diagnostics',
    category: 'Uno Platform',
    repo: 'DevToolsUno',
    description: 'An in-app diagnostics suite for Uno Platform applications with live tree, property, binding, resource, style, event, asset, screenshot, and memory inspection.',
    statement: 'Inspect the running Uno interface without leaving the application.',
    accent: '#74d7f7',
    featured: true,
    tier: 'Flagship',
    status: 'Active',
    packages: [{ name: 'DevToolsUno', note: 'Complete diagnostics surface and attachable Uno Platform runtime tooling.' }],
    install: 'dotnet add package DevToolsUno',
    usageLanguage: 'csharp',
    usage: 'using DevToolsUno;\nusing DevToolsUno.Diagnostics;\n\n_devTools = window.AttachDevTools(new DevToolsOptions\n{\n    LaunchView = DevToolsViewKind.VisualTree,\n    ShowAsChildWindow = false\n});',
    highlights: ['Logical and visual trees', 'Bindings, resources, and styles', 'Events, assets, and memory', 'Screenshots and keyboard inspection']
  },
  {
    slug: 'xaml-playground',
    name: 'XamlPlayground',
    eyebrow: 'Interactive XAML design',
    category: 'Tools',
    repo: 'XamlPlayground',
    description: 'An interactive Avalonia XAML editor, live previewer, and WYSIWYG designer with synchronized structure, properties, toolbox, diagnostics, and shareable gists.',
    statement: 'Write, run, and visually reshape Avalonia XAML in one immediate workspace.',
    accent: '#a98cff',
    featured: true,
    tier: 'Flagship',
    status: 'Active',
    packages: [
      { name: 'XamlPlayground', note: 'Core Avalonia XAML editor, previewer, and visual designer.' },
      { name: 'XamlPlayground.AvaloniaEdit.Minimap', note: 'Minimap and inline editor extension controls for AvaloniaEdit.' }
    ],
    install: 'dotnet add package XamlPlayground',
    usageLanguage: 'xml',
    usage: '<playground:XamlEditor\n    Xaml="{Binding Document}"\n    IsDesignMode="True" />',
    highlights: ['Live XAML preview', 'WYSIWYG canvas editing', 'Toolbox, structure, and properties', 'Headless designer coverage']
  }
];

for (const project of projects) {
  project.tier ??= project.featured ? 'Flagship' : project.status === 'Preview' ? 'Experimental' : 'Maintained';
}

const cdpIndex = projects.findIndex((project) => project.slug === 'cdp');
const svgIndex = projects.findIndex((project) => project.slug === 'svg-skia');
if (cdpIndex >= 0 && svgIndex >= 0 && cdpIndex !== svgIndex + 1) {
  const [cdp] = projects.splice(cdpIndex, 1);
  const currentSvgIndex = projects.findIndex((project) => project.slug === 'svg-skia');
  projects.splice(currentSvgIndex + 1, 0, cdp);
}

export const featuredProjects = projects.filter((project) => project.featured);

export function projectUrl(project: Project, base = '/') {
  return `${base}projects/${project.slug}/`;
}

export function githubUrl(project: Project) {
  const root = `https://github.com/wieslawsoltes/${project.repo}`;
  return project.branch ? `${root}/tree/${project.branch}` : root;
}

export function nugetUrl(packageName: string) {
  return `https://www.nuget.org/packages/${packageName}`;
}
