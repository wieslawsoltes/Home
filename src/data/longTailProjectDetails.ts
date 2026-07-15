import type { ProjectDetail } from './projectDetails';

const github = (repo: string, path = '') => `https://github.com/wieslawsoltes/${repo}${path}`;
const preview = (repo: string) => `https://opengraph.githubassets.com/portfolio-long-tail/wieslawsoltes/${repo}`;

export const longTailProjectDetails: Record<string, Partial<ProjectDetail>> = {
  'reactive-generator': {
    introduction: 'ReactiveGenerator moves property notification, ReactiveUI helpers, and migration diagnostics into a Roslyn pipeline. Application code keeps readable partial properties while analyzers, code fixes, and deterministic generation provide the repetitive implementation.',
    audience: ['ReactiveUI and MVVM application teams', 'Codebases migrating hand-written notification properties', 'Roslyn users studying production source generation'],
    architecture: [{ label: 'Attributes', detail: 'Class and property annotations declare reactive and computed intent.' }, { label: 'Analysis', detail: 'Roslyn validates partial declarations, inheritance, accessors, generics, and nullability.' }, { label: 'Generation', detail: 'Incremental generators emit notification, helpers, and cached event infrastructure.' }, { label: 'Migration', detail: 'Analyzers and code fixes convert existing boilerplate at file, project, or solution scope.' }],
    compatibility: [{ label: '.NET', value: '9.0+', state: 'ready' }, { label: 'C#', value: '13 partial properties', state: 'ready' }, { label: 'ReactiveUI', value: 'Supported', state: 'ready' }, { label: 'INotifyPropertyChanged', value: 'Supported', state: 'ready' }],
    proof: [{ value: '3 lanes', label: 'generate, analyze, fix' }, { value: '2 models', label: 'standard and ReactiveUI' }, { value: 'Deterministic', label: 'snapshot-tested output' }],
    media: [{ src: preview('ReactiveGenerator'), alt: 'ReactiveGenerator GitHub repository preview', caption: 'The repository includes generators, analyzers, code fixes, demos, integration tests, and verified generated-source snapshots.' }],
    links: [{ label: 'Usage guide', href: github('ReactiveGenerator', '#quick-start-samples') }, { label: 'Demo', href: github('ReactiveGenerator', '/tree/main/ReactiveGeneratorDemo') }],
    limitations: 'The modern partial-property workflow requires current C# language support. Types and generated properties must be partial, and custom implementations should opt out explicitly.',
    related: ['static-view-locator', 'xaml-to-csharp-generator', 'xaml-behaviors']
  },
  'static-view-locator': {
    introduction: 'StaticViewLocator resolves Avalonia view-model-to-view conventions during compilation and emits direct factories plus deterministic fallback helpers. It removes reflection-heavy discovery while still supporting generic, inherited, interface-based, and modular application models.',
    audience: ['Avalonia MVVM applications', 'NativeAOT-conscious desktop teams', 'Modular applications with inherited or interface view models'],
    architecture: [{ label: 'Discovery', detail: 'The generator scans eligible view models and accessible Avalonia view types.' }, { label: 'Convention', detail: 'Namespace, suffix, generic, and interface transforms derive candidate views.' }, { label: 'Index', detail: 'Resolved types become static factories; misses remain useful fallback metadata.' }, { label: 'Lookup', detail: 'Exact, generic, base, and interface helpers resolve runtime view-model types.' }],
    compatibility: [{ label: 'Avalonia', value: 'IDataTemplate', state: 'ready' }, { label: 'NativeAOT', value: 'Reflection-free path', state: 'ready' }, { label: 'Referenced assemblies', value: 'Opt-in scan', state: 'ready' }, { label: 'Open generics', value: 'Supported', state: 'ready' }],
    proof: [{ value: '4 steps', label: 'exact to interface fallback' }, { value: 'MSBuild', label: 'compiler-visible configuration' }, { value: 'Static', label: 'direct view factories' }],
    media: [{ src: preview('StaticViewLocator'), alt: 'StaticViewLocator GitHub repository preview', caption: 'The repository pairs the generator with runtime, snapshot, generic, inheritance, and interface-resolution tests.' }],
    limitations: 'Candidate discovery starts from ViewModel naming unless configuration changes the convention. Referenced internal types also require explicit opt-in and InternalsVisibleTo access.',
    related: ['reactive-generator', 'xaml-to-csharp-generator', 'avalonia-development-plugin']
  },
  'xaml-to-csharp-generator': {
    introduction: 'XamlToCSharpGenerator is a complete source-generated XAML platform rather than a single emitter. Compiler, runtime, semantic tooling, preview, hot reload, hot design, LSP, MCP, editor, and VS Code layers share the same view of Avalonia markup and inline C#.',
    audience: ['Avalonia application and framework authors', 'IDE, editor, and language-tool developers', 'Teams building agent-driven XAML workflows'],
    architecture: [{ label: 'Compiler', detail: 'Framework-neutral parsing and semantics feed Avalonia binding and C# emission.' }, { label: 'Runtime', detail: 'URI registries, loaders, hot reload, and migration weaving connect generated views to applications.' }, { label: 'Language tools', detail: 'One semantic engine powers VS Code, LSP, preview, and an embeddable Avalonia editor.' }, { label: 'Live protocol', detail: 'Workspace, runtime, and preview MCP hosts expose structured authoring and design state.' }],
    compatibility: [{ label: 'Avalonia', value: 'SourceGen backend', state: 'ready' }, { label: 'x:Bind / compiled binding', value: 'Typed semantics', state: 'ready' }, { label: 'Hot reload / design', value: 'Integrated', state: 'ready' }, { label: 'VS Code / LSP / MCP', value: 'Shipped', state: 'ready' }],
    proof: [{ value: '18+ packages', label: 'compiler-to-tooling stack' }, { value: '3 MCP modes', label: 'workspace, runtime, preview' }, { value: '1 engine', label: 'shared XAML semantics' }],
    media: [{ src: 'https://github.com/user-attachments/assets/74951ae9-4866-4911-be11-be890f99dc31', alt: 'AXSG XAML language and preview tooling', caption: 'The AXSG workspace combines source-generated XAML, diagnostics, navigation, inline C# semantics, and live preview.' }],
    links: [{ label: 'Documentation', href: github('XamlToCSharpGenerator', '/tree/main/site/articles') }, { label: 'VS Code tooling', href: github('XamlToCSharpGenerator', '/tree/main/tools/vscode/axsg-language-server') }, { label: 'Samples', href: github('XamlToCSharpGenerator', '/tree/main/samples') }],
    limitations: 'This is an advanced compiler and tooling stack with many integration surfaces. Pin package versions together and validate the SourceGen backend, runtime bootstrap, and editor extension as one tested set.',
    related: ['xaml-playground', 'xaml-visual-editor', 'avalonia-development-plugin', 'inspector']
  },
  'printing-tools': {
    introduction: 'PrintingTools separates portable print documents, tickets, pagination, layout, preview, rendering, diagnostics, and jobs from operating-system adapters. Avalonia applications can opt into ready-made UI or drive the same services headlessly.',
    audience: ['Avalonia applications with print and preview workflows', 'Reporting and document tools', 'Teams needing headless PDF and cross-platform print diagnostics'],
    architecture: [{ label: 'Core', detail: 'Portable documents, tickets, layout, pagination, preview, rendering, and diagnostics.' }, { label: 'UI', detail: 'Avalonia page setup and preview windows consume portable models.' }, { label: 'Adapters', detail: 'Windows, macOS, and Linux packages bind native queues, dialogs, and submission.' }, { label: 'Harnesses', detail: 'Headless and sandbox samples retain PDFs and metrics for CI.' }],
    compatibility: [{ label: 'Windows', value: 'Win32 / XPS', state: 'ready' }, { label: 'macOS', value: 'AppKit / Quartz', state: 'ready' }, { label: 'Linux', value: 'CUPS / GTK / portals', state: 'ready' }, { label: 'Headless', value: 'Managed PDF fallback', state: 'ready' }],
    proof: [{ value: '6 packages', label: 'core, UI, and platforms' }, { value: '4 layouts', label: 'standard, N-up, booklet, poster' }, { value: '3 harnesses', label: 'cross-platform CI' }],
    media: [{ src: preview('PrintingTools'), alt: 'PrintingTools GitHub repository preview', caption: 'The repository includes the portable API, Avalonia preview UI, native adapters, documentation, and platform-specific verification harnesses.' }],
    links: [{ label: 'Documentation', href: 'https://wieslawsoltes.github.io/PrintingTools/' }, { label: 'API reference', href: github('PrintingTools', '/blob/main/docs/printing-api-reference.md') }, { label: 'Samples', href: github('PrintingTools', '/tree/main/samples') }],
    limitations: 'Native printer features and sandbox permissions vary by operating system. Use the support matrix and platform harness for the exact deployment environment.',
    related: ['proedit', 'svg-to-xaml', 'native-message-box']
  },
  'native-message-box': {
    introduction: 'NativeMessageBox provides one managed contract and one native C ABI over six platform implementations. Advanced buttons, input, verification, secondary content, links, timeouts, thread rules, packaging, and fallback behavior remain explicit instead of being flattened to the lowest common denominator.',
    audience: ['Cross-platform desktop and mobile applications', 'Native C/C++ and managed .NET hosts', 'Apps that need richer native prompts than OK/Cancel'],
    architecture: [{ label: 'Contracts', detail: 'Portable options and results describe buttons, content, input, policy, and outcomes.' }, { label: 'Managed host', detail: 'The .NET client resolves runtime assets, logging, threading, and errors.' }, { label: 'Native ABI', detail: 'A versioned header and marshaling boundary serve native and managed callers.' }, { label: 'Platforms', detail: 'Windows, macOS, GTK, iOS, Android, and Web implementations preserve native behavior.' }],
    compatibility: [{ label: 'Windows / macOS / Linux', value: 'Advanced dialogs', state: 'ready' }, { label: 'iOS / Android', value: 'Native mobile dialogs', state: 'partial' }, { label: 'WebAssembly', value: 'Async overlay', state: 'partial' }, { label: 'C / C++', value: 'Versioned ABI', state: 'ready' }],
    proof: [{ value: '6 platforms', label: 'native implementations' }, { value: '2 APIs', label: '.NET and native C' }, { value: 'Structured', label: 'buttons, input, timeout result' }],
    media: [{ src: preview('NativeMessageBox'), alt: 'NativeMessageBox GitHub repository preview', caption: 'The project packages managed, native, mobile, WebAssembly, sample, and documentation layers around one dialog contract.' }],
    links: [{ label: 'Documentation', href: 'https://wieslawsoltes.github.io/NativeMessageBox/' }, { label: 'Cross-platform sample', href: github('NativeMessageBox', '/tree/main/samples/CrossPlatformSample') }, { label: 'Public headers', href: github('NativeMessageBox', '/tree/main/include') }],
    limitations: 'Feature parity is intentionally platform-specific: mobile and Web backends omit some desktop accessory content, and callers must respect each platform’s UI-thread or activity requirements.',
    related: ['printing-tools', 'nativewebview', 'librewinforms']
  },
  lottie: {
    introduction: 'Lottie is a compact family of Avalonia animation controls: a Skottie-backed asset player, a minimal frame-loop base, a composition-backed Skia surface, and a runtime SKSL shader control. Applications can start with design assets and progressively own more of the render loop.',
    audience: ['Avalonia applications using Lottie motion assets', 'Control authors building custom animation', 'Skia and shader-driven visualization tools'],
    architecture: [{ label: 'Asset player', detail: 'Lottie JSON becomes Skottie vector animation.' }, { label: 'Frame loop', detail: 'AnimationControl supplies lifecycle, timing, and invalidation.' }, { label: 'Composition', detail: 'A Skia surface adds stretch, loop normalization, repeat, and static redraw.' }, { label: 'Shader', detail: 'SKSL runtime effects bind time and custom uniforms.' }],
    compatibility: [{ label: 'Avalonia', value: 'Controls', state: 'ready' }, { label: 'SkiaSharp / Skottie', value: 'Rendering', state: 'ready' }, { label: 'SKSL', value: 'Runtime effects', state: 'ready' }, { label: 'Static redraw', value: 'Supported', state: 'ready' }],
    proof: [{ value: '4 packages', label: 'asset to shader control' }, { value: '2 modes', label: 'animated and static' }, { value: 'Composition', label: 'frame scheduling' }],
    media: [{ src: preview('Lottie'), alt: 'Lottie Avalonia controls repository preview', caption: 'Four focused packages cover packaged Lottie assets, custom animation loops, composition-backed Skia, and SKSL effects.' }],
    links: [{ label: 'Documentation', href: 'https://wieslawsoltes.github.io/Lottie/' }, { label: 'Repository', href: github('Lottie') }],
    related: ['effector', 'svg-skia', 'media-player']
  },
  'media-player': {
    introduction: 'MediaPlayer keeps decoded video inside Avalonia composition rather than a native child window. Native and fallback providers, direct GPU upload, audio and subtitle state, diagnostics, and media-editing workflows sit behind reusable control and service boundaries.',
    audience: ['Avalonia media applications', 'Desktop tools requiring video overlays and transforms', 'Products with playback plus trim, export, or recording workflows'],
    architecture: [{ label: 'Control', detail: 'GpuMediaPlayer owns playback state, rendering, tracks, devices, routes, and shell behavior.' }, { label: 'Contracts', detail: 'Backend-neutral models describe capabilities, providers, diagnostics, and workflows.' }, { label: 'Interop', detail: 'Native provider catalogs select platform playback and media services.' }, { label: 'Workflows', detail: 'Trim, split, combine, export, transform, record, and stream removal remain reusable.' }],
    compatibility: [{ label: 'macOS', value: 'AVFoundation direction', state: 'ready' }, { label: 'Windows', value: 'Media Foundation direction', state: 'ready' }, { label: 'FFmpeg / LibVLC', value: 'Fallback modes', state: 'ready' }, { label: 'Avalonia composition', value: 'No airspace', state: 'ready' }],
    proof: [{ value: 'GPU', label: 'direct texture composition' }, { value: '4 backends', label: 'native and fallback directions' }, { value: '7 workflows', label: 'edit and export operations' }],
    media: [{ src: 'https://github.com/user-attachments/assets/75d0bfb4-f85e-4c40-a5a1-b98e9e9e8a43', alt: 'MediaPlayer QuickTime-inspired Avalonia application', caption: 'The demo shows no-airspace video, floating transport controls, native menus, diagnostics, and workflow entry points.' }],
    links: [{ label: 'Documentation', href: 'https://wieslawsoltes.github.io/MediaPlayer/' }, { label: 'Demo source', href: github('MediaPlayer', '/tree/main/src/MediaPlayer.Demo') }],
    limitations: 'Playback capability and native dependencies vary by platform and selected backend. Keep fallback modes available and expose diagnostics when shipping across heterogeneous GPU and codec environments.',
    related: ['lottie', 'nativewebview', 'progpu']
  },
  'hex-view': {
    introduction: 'HexView combines a virtualized Avalonia control with file-scale readers, formatters, non-destructive overlays, edit journals, search, selection, diff, navigation, bookmarks, saving, and patch export. Interfaces allow custom data sources and comparison providers.',
    audience: ['Binary analysis and reverse-engineering tools', 'Firmware, file-format, and protocol editors', 'Applications embedding large-data inspection'],
    architecture: [{ label: 'Source', detail: 'Memory-mapped or custom readers expose byte ranges without loading the entire file.' }, { label: 'Overlay', detail: 'Piece-table-style edits and a journal preserve source data and reversible history.' }, { label: 'Services', detail: 'Search, selection, navigation, save, and diff logic remain reusable.' }, { label: 'Control', detail: 'Virtual rendering presents addresses, formats, text, caret, selection, edits, and differences.' }],
    compatibility: [{ label: 'Avalonia desktop', value: 'Control and sample', state: 'ready' }, { label: 'Console', value: 'Sample host', state: 'ready' }, { label: 'Large files', value: 'Memory mapped', state: 'ready' }, { label: 'Custom sources', value: 'ILineReader', state: 'ready' }],
    proof: [{ value: '4 bases', label: 'hex, decimal, octal, binary' }, { value: '4 encodings', label: 'ASCII and UTF variants' }, { value: 'Virtual', label: 'file-scale scrolling' }],
    media: [{ src: 'https://github.com/user-attachments/assets/07511c4f-812d-4b35-85b0-4170881b15c5', alt: 'HexView desktop binary editor', caption: 'The desktop workbench combines virtualized bytes, text, caret, selection, editing, navigation, and diagnostics.' }],
    links: [{ label: 'Usage guide', href: github('HexView', '#quick-start') }, { label: 'Source', href: github('HexView', '/tree/main/src/HexView') }],
    limitations: 'Host applications supply domain-specific parsers and, for advanced comparison workflows, the difference provider. The control focuses on bytes, offsets, editing, and navigation.',
    related: ['proedit', 'prodatagrid', 'inspector']
  },
  'theme-manager-avalonia': {
    introduction: 'ThemeManager.Avalonia provides one small IThemeManager abstraction over Avalonia’s built-in Fluent and Simple themes. Each implementation initializes its theme family and changes Application.RequestedThemeVariant between light and dark at runtime.',
    audience: ['Avalonia applications with light and dark settings', 'Apps choosing between Fluent and Simple theme families', 'Developers wanting a replaceable theme bootstrap boundary'],
    architecture: [{ label: 'Contract', detail: 'IThemeManager exposes Initialize and Switch operations.' }, { label: 'Fluent', detail: 'FluentThemeManager inserts FluentTheme and switches its application variant.' }, { label: 'Simple', detail: 'SimpleThemeManager does the same for SimpleTheme.' }, { label: 'Application', detail: 'RequestedThemeVariant propagates light or dark state through Avalonia resources.' }],
    compatibility: [{ label: 'Avalonia', value: 'Built-in themes', state: 'ready' }, { label: 'FluentTheme', value: 'Supported', state: 'ready' }, { label: 'SimpleTheme', value: 'Supported', state: 'ready' }, { label: 'Light / dark', value: 'Runtime switch', state: 'ready' }],
    proof: [{ value: '2 hosts', label: 'Fluent and Simple' }, { value: '2 variants', label: 'light and dark' }, { value: '1 interface', label: 'application theme boundary' }],
    media: [{ src: preview('ThemeManager.Avalonia'), alt: 'ThemeManager.Avalonia GitHub repository preview', caption: 'A focused abstraction initializes an Avalonia theme family and controls its application-wide variant.' }],
    links: [{ label: 'Repository', href: github('ThemeManager.Avalonia') }, { label: 'NuGet', href: 'https://www.nuget.org/packages/ThemeManager/' }],
    limitations: 'The current implementation intentionally covers built-in Fluent and Simple initialization plus light/dark switching. Application-owned custom theme catalogs and persistence remain outside this small package.',
    related: ['colorpicker', 'xaml-behaviors', 'static-view-locator']
  },
  'svg-to-xaml': {
    introduction: 'SvgToXaml converts SVG artwork into Avalonia-native XAML either interactively or as a deterministic MSBuild asset step. The model, converter, desktop and Web hosts, and build task expose resource reuse, geometry transforms, and compatibility controls.',
    audience: ['Avalonia applications with vector icon pipelines', 'Design-system and asset-build maintainers', 'Developers converting SVG into inspectable XAML resources'],
    architecture: [{ label: 'Model', detail: 'SVG geometry, paint, resources, transforms, and containers become a conversion model.' }, { label: 'Converter', detail: 'Mapping rules emit Avalonia drawing and geometry structures.' }, { label: 'Hosts', detail: 'Desktop and browser tools support interactive inspection and export.' }, { label: 'Build', detail: 'MSBuild generates individual AXAML files or combined dictionaries.' }],
    compatibility: [{ label: 'Avalonia XAML', value: 'Drawing output', state: 'ready' }, { label: 'MSBuild', value: 'Integrated task', state: 'ready' }, { label: 'Resource dictionaries', value: 'Combined output', state: 'ready' }, { label: 'Complex SVG effects', value: 'Configurable handling', state: 'partial' }],
    proof: [{ value: '2 modes', label: 'interactive and build' }, { value: '2 outputs', label: 'individual or dictionary' }, { value: '10+ settings', label: 'conversion policy' }],
    media: [{ src: 'https://user-images.githubusercontent.com/2297442/130685251-185cc489-8724-408b-8965-955f9bc77177.png', alt: 'SvgToXaml desktop converter', caption: 'The desktop converter previews SVG input and the resulting Avalonia XAML drawing.' }],
    links: [{ label: 'Repository', href: github('SvgToXaml') }, { label: 'Build package guide', href: github('SvgToXaml', '#msbuild-task') }],
    limitations: 'SVG and Avalonia drawing models are not identical. Filters, clips, masks, opacity, and geometry transforms may require project-specific conversion settings and visual review.',
    related: ['svg-skia', 'proedit', 'lottie']
  },
  'ribbon-control': {
    introduction: 'RibbonControl composes traditional desktop command density through Avalonia-native controls, themes, models, view models, command catalogs, merge policies, key tips, automation, adaptive layout, quick access, backstage, customization, and versioned state persistence.',
    audience: ['Document, engineering, and enterprise desktop applications', 'Modular applications contributing commands at runtime', 'Teams requiring accessible keyboard-driven command surfaces'],
    architecture: [{ label: 'Primitives', detail: 'Tabs, groups, items, galleries, backstage, and quick access form the visual vocabulary.' }, { label: 'Composition', detail: 'XAML, MVVM, or hybrid definitions feed stable-id runtime models.' }, { label: 'Services', detail: 'Commands, merging, key tips, layout, automation, and customization coordinate behavior.' }, { label: 'Persistence', detail: 'A versioned JSON store saves user ribbon state through migration hooks.' }],
    compatibility: [{ label: 'Avalonia', value: '12.0', state: 'ready' }, { label: 'XAML / MVVM', value: 'Both first-class', state: 'ready' }, { label: 'Automation', value: 'Peers and tests', state: 'ready' }, { label: 'Persistence', value: 'Versioned JSON', state: 'ready' }],
    proof: [{ value: '3 models', label: 'XAML, MVVM, hybrid' }, { value: 'Adaptive', label: 'layout and key tips' }, { value: 'Versioned', label: 'customization state' }],
    media: [{ src: preview('RibbonControl'), alt: 'RibbonControl GitHub repository preview', caption: 'The repository includes XAML-only, MVVM-only, and hybrid samples plus headless, visual, performance, and automation coverage.' }],
    links: [{ label: 'Documentation', href: 'https://wieslawsoltes.github.io/RibbonControl/' }, { label: 'Samples', href: github('RibbonControl', '/tree/main/src') }],
    limitations: 'Ribbon density and customization require an application command taxonomy with stable identifiers. Establish ids and persistence migration policy before exposing user customization broadly.',
    related: ['dock', 'xaml-behaviors', 'proedit']
  },
  'chatgpt-client': {
    introduction: 'The earlier ChatGPT project explored one reusable conversational client across Avalonia desktop, Android, iOS, and browser targets, then extended the same API into file-oriented CLI processing and Windows COM/VBA automation.',
    audience: ['Developers studying an earlier multi-target Avalonia application', 'Teams interested in file-oriented AI batch tools', 'Maintainers of legacy Office and COM automation'],
    architecture: [{ label: 'API + core', detail: 'Client, models, services, settings, and view models own conversation behavior.' }, { label: 'UI', detail: 'Reusable Avalonia controls render and edit messages across hosts.' }, { label: 'CLI', detail: 'A global tool processes file sets through configurable chat-completion prompts.' }, { label: 'COM', detail: 'A .NET Framework bridge exposes async chat and events to VBA.' }],
    compatibility: [{ label: 'Desktop', value: 'macOS / Windows / Linux', state: 'ready' }, { label: 'Mobile / browser', value: 'Avalonia hosts', state: 'partial' }, { label: 'CLI', value: '.NET tool', state: 'ready' }, { label: 'COM / VBA', value: 'Windows bridge', state: 'ready' }],
    proof: [{ value: '6 targets', label: 'desktop, mobile, browser' }, { value: '5 packages', label: 'API to COM' }, { value: 'Earlier work', label: 'historical portfolio status' }],
    media: [{ src: 'https://user-images.githubusercontent.com/2297442/224843834-a58190df-3bdb-4722-b737-94e7adc87805.png', alt: 'Earlier Avalonia ChatGPT client', caption: 'The application carried one conversation interface across desktop, mobile, and browser targets.' }],
    links: [{ label: 'Repository', href: github('ChatGPT') }, { label: 'Browser build', href: 'https://wieslawsoltes.github.io/ChatGPT/' }, { label: 'CLI guide', href: github('ChatGPT', '#net-tool') }],
    limitations: 'This page documents earlier work and its historical API integration. The upstream OpenAI API, model names, authentication guidance, and target framework versions have changed; use current official APIs for new applications.',
    related: ['codexgui', 'nativewebview', 'protranslate']
  }
};
