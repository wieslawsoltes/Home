import type { Project } from './projects';

export const longTailProjects: Project[] = [
  {
    slug: 'reactive-generator', name: 'ReactiveGenerator', eyebrow: 'Generated reactive state', category: 'Tools', repo: 'ReactiveGenerator',
    description: 'A Roslyn source generator, analyzer, and code-fix package for reactive properties, computed observable properties, and change notification.',
    statement: 'Keep reactive view models expressive while generated code carries the ceremony.', accent: '#9b8cff', showInIndex: false,
    tier: 'Maintained', status: 'Maintained',
    packages: [{ name: 'ReactiveGenerator', note: 'Source generator, attributes, analyzer, code fixes, and build integration.' }],
    install: 'dotnet add package ReactiveGenerator', usageLanguage: 'csharp',
    usage: '[Reactive]\npublic partial class SearchViewModel : ReactiveObject\n{\n    public partial string SearchTerm { get; set; }\n\n    [ObservableAsProperty]\n    public partial bool HasQuery { get; }\n}',
    highlights: ['INotifyPropertyChanged and ReactiveUI patterns', 'ObservableAsProperty generation', 'Analyzers and bulk code fixes', 'Deterministic design-time output']
  },
  {
    slug: 'static-view-locator', name: 'StaticViewLocator', eyebrow: 'Reflection-free Avalonia views', category: 'Avalonia', repo: 'StaticViewLocator',
    description: 'A compile-time Avalonia view locator with convention mapping, generic, base-class, and interface fallbacks, and configurable MSBuild rules.',
    statement: 'Resolve view models to views at compile time and keep runtime discovery AOT-friendly.', accent: '#6fc9ff', showInIndex: false,
    tier: 'Maintained', status: 'Maintained', packages: [{ name: 'StaticViewLocator', note: 'Source generator, attribute, and transitive MSBuild configuration.' }],
    install: 'dotnet add package StaticViewLocator', usageLanguage: 'csharp',
    usage: '[StaticViewLocator]\npublic partial class ViewLocator : IDataTemplate\n{\n    public Control? Build(object? data) =>\n        data is null ? null : TryGetFactory(data.GetType())?.Invoke();\n}',
    highlights: ['Compile-time factory tables', 'Generic and inheritance fallback', 'Configurable naming conventions', 'Optional referenced-assembly scanning']
  },
  {
    slug: 'xaml-to-csharp-generator', name: 'XamlToCSharpGenerator', eyebrow: 'Source-generated XAML stack', category: 'Tools', repo: 'XamlToCSharpGenerator',
    description: 'An Avalonia XAML compiler stack with typed bindings, runtime loading, hot reload and design, language services, editor controls, LSP, MCP, preview, and VS Code tooling.',
    statement: 'Make XAML compilation, semantics, editing, preview, and automation one coherent source-generated system.', accent: '#b08cff', showInIndex: false,
    tier: 'Maintained', status: 'Active',
    packages: [{ name: 'XamlToCSharpGenerator', note: 'Recommended compiler, build, and runtime umbrella package.' }, { name: 'XamlToCSharpGenerator.LanguageService', note: 'Reusable XAML and inline C# semantic services.' }, { name: 'XamlToCSharpGenerator.McpServer.Tool', note: 'Workspace MCP server global tool.' }],
    install: 'dotnet add package XamlToCSharpGenerator', usageLanguage: 'csharp',
    usage: 'AppBuilder.Configure<App>()\n    .UsePlatformDetect()\n    .UseAvaloniaSourceGeneratedXaml();',
    highlights: ['Source-generated Avalonia XAML', 'x:Bind and inline C# semantics', 'VS Code, LSP, editor, and preview', 'Hot reload, hot design, and MCP hosts']
  },
  {
    slug: 'printing-tools', name: 'PrintingTools', eyebrow: 'Cross-platform print pipeline', category: 'Avalonia', repo: 'PrintingTools',
    description: 'A .NET printing toolkit with discovery, dialogs, preview, pagination, layout, PDF/vector rendering, job submission, and Windows, macOS, and Linux adapters.',
    statement: 'Treat print layout, preview, and platform submission as one portable application service.', accent: '#6fd9bd', showInIndex: false,
    tier: 'Maintained', status: 'Active',
    packages: [{ name: 'PrintingTools', note: 'Avalonia bootstrap and automatic platform registration.' }, { name: 'PrintingTools.Core', note: 'Portable contracts, pagination, rendering, options, and diagnostics.' }, { name: 'PrintingTools.UI', note: 'Avalonia page setup and preview surfaces.' }],
    install: 'dotnet add package PrintingTools\ndotnet add package PrintingTools.UI', usageLanguage: 'csharp',
    usage: 'AppBuilder.Configure<App>()\n    .UsePlatformDetect()\n    .UsePrintingTools(options => options.EnablePreview = true);',
    highlights: ['Preview and print sessions', 'N-up, booklet, and poster layout', 'Windows, macOS, and Linux adapters', 'Managed PDF and headless fallbacks']
  },
  {
    slug: 'native-message-box', name: 'NativeMessageBox', eyebrow: 'Native dialogs everywhere', category: 'Frameworks', repo: 'NativeMessageBox',
    description: 'A managed and native ABI for advanced message dialogs across Windows, macOS, Linux, iOS, Android, and WebAssembly.',
    statement: 'Ask a native question through one contract while preserving each platform’s strengths.', accent: '#ff9c7d', showInIndex: false,
    tier: 'Maintained', status: 'Active', packages: [{ name: 'NativeMessageBox', note: 'Managed client, options, results, native host, and runtime assets.' }],
    install: 'dotnet add package NativeMessageBox', usageLanguage: 'csharp',
    usage: 'var result = await NativeMessageBoxClient.ShowAsync(\n    new MessageBoxOptions(\n        message: "Save changes?",\n        buttons: MessageBoxButtons.YesNoCancel,\n        title: "Document"));',
    highlights: ['Six platform implementations', 'Custom buttons, input, and verification', 'Timeouts and secondary content', 'Managed .NET and native C APIs']
  },
  {
    slug: 'lottie', name: 'Lottie', eyebrow: 'Avalonia animation controls', category: 'Graphics', repo: 'Lottie',
    description: 'Lottie playback plus reusable frame-loop, composition-backed Skia, and animated shader controls for Avalonia.',
    statement: 'Move from packaged motion assets to custom composition and shader animation with the same control vocabulary.', accent: '#ff80ae', showInIndex: false,
    tier: 'Maintained', status: 'Maintained',
    packages: [{ name: 'Lottie', note: 'Skottie-backed Lottie animation player.' }, { name: 'AnimationControl', note: 'Lightweight overridable animation frame loop.' }, { name: 'CompositionAnimatedControl', note: 'Composition-backed Skia animation surface.' }, { name: 'ShaderAnimatedControl', note: 'SKSL shader animation control.' }],
    install: 'dotnet add package Lottie', usageLanguage: 'xml', usage: '<Lottie Path="/Assets/Success.json" />',
    highlights: ['Lottie/Skottie playback', 'Custom frame-loop control', 'Composition-backed Skia rendering', 'Animated SKSL shaders']
  },
  {
    slug: 'media-player', name: 'MediaPlayer', eyebrow: 'No-airspace Avalonia video', category: 'Controls', repo: 'MediaPlayer',
    description: 'GPU-composited media playback for Avalonia with native platform backends, FFmpeg and LibVLC fallbacks, track/device APIs, and reusable editing workflows.',
    statement: 'Keep video inside the Avalonia compositor and media operations inside reusable services.', accent: '#6ac6ff', showInIndex: false,
    tier: 'Maintained', status: 'Active',
    packages: [{ name: 'MediaPlayer.Controls', note: 'GPU player control, rendering, orchestration, and workflows.' }, { name: 'MediaPlayer.Native.Abstractions', note: 'Backend-neutral playback and capability contracts.' }, { name: 'MediaPlayer.Native.Interop', note: 'Native provider catalog and selection helpers.' }],
    install: 'dotnet add package MediaPlayer.Controls', usageLanguage: 'xml',
    usage: '<media:GpuMediaPlayer Source="{Binding CurrentSource}"\n                      AutoPlay="True"\n                      PreferDirectGpuTextureUpload="True" />',
    highlights: ['GPU composition without airspace gaps', 'Native, FFmpeg, and LibVLC backends', 'Audio, subtitle, device, and route APIs', 'Trim, split, combine, export, and record']
  },
  {
    slug: 'hex-view', name: 'HexView', eyebrow: 'Virtualized binary workbench', category: 'Controls', repo: 'HexView',
    description: 'An Avalonia hexadecimal viewer and editor with memory-mapped large files, piece-table edits, search and replace, diff, navigation, bookmarks, and patch export.',
    statement: 'Inspect and edit very large binary data without loading the whole file into memory.', accent: '#a6d36f', showInIndex: false,
    tier: 'Maintained', status: 'Maintained', packages: [{ name: 'HexView', note: 'Avalonia control, readers, formatters, editing, search, diff, and navigation services.' }],
    install: 'dotnet add package HexView', usageLanguage: 'xml', usage: '<hexView:HexViewControl LineReader="{Binding Reader}"\n                            HexFormatter="{Binding Formatter}" />',
    highlights: ['Memory-mapped virtual scrolling', 'Hex, decimal, octal, and binary views', 'Piece-table editing with undo/redo', 'Search, diff, bookmarks, and patches']
  },
  {
    slug: 'theme-manager-avalonia', name: 'ThemeManager.Avalonia', eyebrow: 'Runtime Avalonia themes', category: 'Avalonia', repo: 'ThemeManager.Avalonia', branch: 'master',
    description: 'A small runtime theme abstraction that initializes Avalonia Fluent or Simple themes and switches the application between light and dark variants.',
    statement: 'Choose a built-in Avalonia theme family and switch its active variant through one interface.', accent: '#e09cff', showInIndex: false,
    tier: 'Maintained', status: 'Maintained', packages: [{ name: 'ThemeManager', note: 'IThemeManager with Fluent and Simple theme implementations.' }],
    install: 'dotnet add package ThemeManager', usageLanguage: 'csharp',
    usage: 'IThemeManager themes = new FluentThemeManager();\nthemes.Initialize(this);\nthemes.Switch(1); // Dark',
    highlights: ['Fluent and Simple implementations', 'Application-level initialization', 'Light and dark variant switching', 'Small replaceable interface']
  },
  {
    slug: 'svg-to-xaml', name: 'SvgToXaml', eyebrow: 'SVG asset conversion', category: 'Graphics', repo: 'SvgToXaml',
    description: 'A desktop and build-time converter that turns SVG artwork into Avalonia XAML drawings, geometries, and resource dictionaries.',
    statement: 'Move vector assets into native XAML once—or regenerate them on every build.', accent: '#ffb56e', showInIndex: false,
    tier: 'Maintained', status: 'Maintained',
    packages: [{ name: 'SvgToXamlConverter', note: 'SVG parsing and XAML conversion engine.' }, { name: 'SvgToXaml.Build', note: 'MSBuild task for individual files or combined resource dictionaries.' }],
    install: 'dotnet add package SvgToXamlConverter\ndotnet add package SvgToXaml.Build', usageLanguage: 'xml',
    usage: '<ItemGroup>\n  <SvgFiles Include="Assets/**/*.svg"\n            OutputFile="Assets/Icons.axaml" />\n</ItemGroup>',
    highlights: ['Desktop conversion workflow', 'MSBuild asset generation', 'Combined resource dictionaries', 'Geometry, resource, and compatibility options']
  },
  {
    slug: 'ribbon-control', name: 'RibbonControl', eyebrow: 'Adaptive Avalonia commands', category: 'Controls', repo: 'RibbonControl',
    description: 'An Avalonia ribbon toolkit with XAML and MVVM composition, tabs, groups, galleries, backstage, key tips, adaptive layout, merging, customization, and JSON persistence.',
    statement: 'Compose dense desktop command systems without hard-wiring their structure or user state.', accent: '#7fd9ff', showInIndex: false,
    tier: 'Maintained', status: 'Active',
    packages: [{ name: 'RibbonControl.Core', note: 'Controls, themes, models, automation, merge, key tips, and services.' }, { name: 'RibbonControl.Persistence.Json', note: 'Versioned JSON runtime state and migrations.' }],
    install: 'dotnet add package RibbonControl.Core\ndotnet add package RibbonControl.Persistence.Json', usageLanguage: 'xml',
    usage: '<ribbon:Ribbon TabsSource="{CompiledBinding Ribbon.Tabs}"\n               CommandCatalog="{CompiledBinding CommandCatalog}"\n               StateStore="{CompiledBinding StateStore}" />',
    highlights: ['XAML-first and MVVM-first composition', 'Rich ribbon primitives and backstage', 'Merge, key tips, and adaptive layout', 'Versioned customization persistence']
  },
  {
    slug: 'chatgpt-client', name: 'ChatGPT', eyebrow: 'Earlier cross-platform AI client', category: 'Tools', repo: 'ChatGPT',
    description: 'An earlier Avalonia ChatGPT client spanning desktop, mobile, and browser, with reusable API, UI, CLI batch-processing, and Windows COM integration packages.',
    statement: 'An early experiment in carrying one conversational AI workflow across every Avalonia target.', accent: '#75d7ad', showInIndex: false,
    tier: 'Maintained', status: 'Maintained',
    packages: [{ name: 'ChatGPT', note: 'OpenAI API client library.' }, { name: 'ChatGPT.Core', note: 'Models, services, and application state.' }, { name: 'ChatGPT.UI', note: 'Reusable Avalonia chat UI.' }, { name: 'ChatGPT.CLI', note: 'Batch file-processing global tool.' }, { name: 'ChatGptCom', note: 'Windows COM automation bridge.' }],
    install: 'dotnet tool install --global ChatGPT.CLI', usageLanguage: 'bash',
    usage: 'chatgpt -d ./src -p "*.cs" -e md \\\n  --directions "Write concise API documentation for this source file."',
    highlights: ['Desktop, mobile, and browser clients', 'Reusable API and Avalonia UI layers', 'Parallel batch-processing CLI', 'Office/VBA COM automation']
  }
];
