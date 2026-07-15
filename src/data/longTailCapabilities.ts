import type { Capability } from './capabilities';

const capability = (item: Capability) => item;

export const longTailCapabilities: Capability[] = [
  capability({
    projectSlug: 'reactive-generator', slug: 'reactive-properties', name: 'Reactive Properties', eyebrow: 'Generated change notification', status: 'Maintained',
    description: 'Class- or property-level attributes generate partial property implementations for standard INotifyPropertyChanged and ReactiveUI ReactiveObject patterns, including cached event arguments and inheritance-aware behavior.',
    statement: 'Declare reactive state as properties and let compilation produce the notification plumbing.',
    packages: [{ name: 'ReactiveGenerator', note: 'Attributes, reactive property generator, build props, and runtime support.' }], install: 'dotnet add package ReactiveGenerator', usageLanguage: 'csharp',
    usage: `[Reactive]
public partial class ProfileViewModel : ReactiveObject
{
    public partial string DisplayName { get; set; }
    public partial bool IsOnline { get; set; }
}`,
    highlights: ['INotifyPropertyChanged and ReactiveObject support', 'Class-level or granular property attributes', 'Inheritance and nullable annotations', 'Cached, weak, thread-safe event infrastructure'],
    layers: [{ label: 'Discover', detail: 'The generator finds attributed partial types and properties.' }, { label: 'Analyze', detail: 'Type, inheritance, accessor, and notification requirements are validated.' }, { label: 'Emit', detail: 'Deterministic partial implementations raise the correct change events.' }, { label: 'Bind', detail: 'UI and reactive pipelines consume ordinary strongly typed properties.' }],
    sourcePath: 'ReactiveGenerator/ReactiveGenerator.cs', related: ['computed-properties', 'analyzers-code-fixes']
  }),
  capability({
    projectSlug: 'reactive-generator', slug: 'computed-properties', name: 'Computed Observable Properties', eyebrow: 'ObservableAsProperty without ceremony', status: 'Maintained',
    description: 'ObservableAsProperty attributes generate read-only computed properties and helpers, while generated WhenAny methods make reactive dependency pipelines concise and type-safe.',
    statement: 'Turn observable calculations into normal readable properties.',
    packages: [{ name: 'ReactiveGenerator', note: 'ObservableAsPropertyHelper and WhenAnyValue source generation.' }], install: 'dotnet add package ReactiveGenerator', usageLanguage: 'csharp',
    usage: `[ObservableAsProperty]
public partial string FullName { get; }

public ProfileViewModel() =>
    this.WhenAnyFirstName()
        .CombineLatest(this.WhenAnyLastName())
        .Select(x => $"{x.First} {x.Second}")
        .ToProperty(this, x => x.FullName);`,
    highlights: ['Generated ObservableAsPropertyHelper storage', 'Generated WhenAny extension methods', 'Computed validation and collection state', 'ReactiveUI-compatible pipelines'],
    layers: [{ label: 'Declare', detail: 'A read-only partial property marks the computed output.' }, { label: 'Generate', detail: 'The helper field, getter, and typed observable helpers join the type.' }, { label: 'Compose', detail: 'Reactive operators calculate values from source properties.' }, { label: 'Notify', detail: 'The generated property participates in normal binding updates.' }],
    sourcePath: 'ReactiveGenerator/ObservableAsPropertyHelperGenerator.cs', related: ['reactive-properties', 'analyzers-code-fixes']
  }),
  capability({
    projectSlug: 'reactive-generator', slug: 'analyzers-code-fixes', name: 'Analyzers & Code Fixes', eyebrow: 'Convert boilerplate at design time', status: 'Maintained',
    description: 'Roslyn diagnostics recognize convertible property patterns and offer focused or bulk refactorings while validating partial declarations, accessors, generics, and inheritance.',
    statement: 'Move existing view models toward generated reactivity with IDE-guided changes.',
    packages: [{ name: 'ReactiveGenerator', note: 'Analyzer, code-fix provider, generator diagnostics, and snapshot-tested output.' }], install: 'dotnet add package ReactiveGenerator', usageLanguage: 'csharp',
    usage: `// Analyzer suggestion:
private string _query;
public string Query
{
    get => _query;
    set => this.RaiseAndSetIfChanged(ref _query, value);
}

// Code fix:
[Reactive] public partial string Query { get; set; }`,
    highlights: ['Convertible property detection', 'File, project, and solution-wide fixes', 'Design-time validation', 'Deterministic generated-source snapshots'],
    layers: [{ label: 'Inspect', detail: 'Semantic analysis recognizes notification and ReactiveUI property patterns.' }, { label: 'Report', detail: 'Diagnostics explain declarations that can be generated or must be corrected.' }, { label: 'Rewrite', detail: 'Code fixes create partial attributed properties.' }, { label: 'Verify', detail: 'Generator and integration tests compare deterministic output and runtime behavior.' }],
    sourcePath: 'ReactiveGenerator/ReactivePropertyAnalyzer.cs', related: ['reactive-properties', 'computed-properties']
  }),

  capability({
    projectSlug: 'static-view-locator', slug: 'convention-mapping', name: 'Convention Mapping', eyebrow: 'Compile-time view factories', status: 'Maintained',
    description: 'The source generator maps ViewModel namespaces and suffixes to Avalonia views and emits direct Type-to-factory lookup tables without runtime reflection.',
    statement: 'Make view discovery a compiler result instead of a runtime search.',
    packages: [{ name: 'StaticViewLocator', note: 'Generator, StaticViewLocator attribute, and emitted factory tables.' }], install: 'dotnet add package StaticViewLocator', usageLanguage: 'csharp',
    usage: `[StaticViewLocator]
public partial class ViewLocator : IDataTemplate
{
    public Control? Build(object? data) => data is null
        ? null
        : TryGetFactory(data.GetType())?.Invoke();
    public bool Match(object? data) => data is ViewModelBase;
}`,
    highlights: ['ViewModels-to-Views namespace replacement', 'ViewModel-to-View suffix convention', 'Direct control factories', 'Missing-view metadata without blocking fallback'],
    layers: [{ label: 'Scan', detail: 'Compilation symbols identify eligible view models and Avalonia views.' }, { label: 'Transform', detail: 'Namespace, suffix, generic, and interface rules derive candidate view names.' }, { label: 'Resolve', detail: 'Accessible matches become direct factories; misses become diagnostic metadata.' }, { label: 'Emit', detail: 'The partial locator receives static lookup tables and helpers.' }],
    sourcePath: 'StaticViewLocator/StaticViewLocatorGenerator.cs', related: ['fallback-configuration']
  }),
  capability({
    projectSlug: 'static-view-locator', slug: 'fallback-configuration', name: 'Fallback & Configuration', eyebrow: 'Map real application hierarchies', status: 'Maintained',
    description: 'Exact types, generic definitions, base classes, and interfaces participate in a deterministic fallback order controlled by compiler-visible MSBuild properties.',
    statement: 'Keep modular and inherited view models resolvable without giving up compile-time safety.',
    packages: [{ name: 'StaticViewLocator', note: 'Fallback helpers and transitive compiler-visible configuration.' }], install: 'dotnet add package StaticViewLocator', usageLanguage: 'xml',
    usage: `<PropertyGroup>
  <StaticViewLocatorViewModelNamespacePrefixes>MyApp.ViewModels;MyApp.Modules</StaticViewLocatorViewModelNamespacePrefixes>
  <StaticViewLocatorIncludeReferencedAssemblies>true</StaticViewLocatorIncludeReferencedAssemblies>
  <StaticViewLocatorTypeNameReplacementRules>ViewModel=View;Vm=Page</StaticViewLocatorTypeNameReplacementRules>
</PropertyGroup>`,
    highlights: ['Exact, generic, base, and interface lookup', 'Referenced-assembly opt-in', 'Custom namespace and type transforms', 'Additional view base types and accessibility rules'],
    layers: [{ label: 'Configure', detail: 'MSBuild exports conventions and assembly scope to the generator.' }, { label: 'Index', detail: 'Factories are grouped by exact and generalized type identity.' }, { label: 'Fallback', detail: 'Runtime lookup follows exact, generic, base, then reverse-interface order.' }, { label: 'Explain', detail: 'Unresolved candidates remain available for useful missing-view output.' }],
    sourcePath: 'StaticViewLocator/buildTransitive/StaticViewLocator.props', related: ['convention-mapping']
  }),

  capability({
    projectSlug: 'xaml-to-csharp-generator', slug: 'sourcegen-compiler', name: 'SourceGen XAML Compiler', eyebrow: 'XAML becomes inspectable C#', status: 'Active',
    description: 'A Roslyn incremental pipeline parses, binds, validates, and emits Avalonia XAML as generated C#, with framework-neutral compiler layers and an Avalonia semantic adapter.',
    statement: 'Bring XAML compilation into the source-generator model and make its output visible to normal tooling.',
    packages: [{ name: 'XamlToCSharpGenerator', note: 'Recommended build and runtime integration.' }, { name: 'XamlToCSharpGenerator.Compiler', note: 'Incremental host orchestration.' }, { name: 'XamlToCSharpGenerator.Avalonia', note: 'Avalonia binder and emitter.' }], install: 'dotnet add package XamlToCSharpGenerator', usageLanguage: 'xml',
    usage: `<PropertyGroup>
  <AvaloniaXamlCompilerBackend>SourceGen</AvaloniaXamlCompilerBackend>
</PropertyGroup>

<ItemGroup>
  <PackageReference Include="XamlToCSharpGenerator" Version="VERSION" />
</ItemGroup>`,
    highlights: ['Incremental Roslyn generation', 'Framework-neutral semantic core', 'Avalonia binder and emitter', 'Runtime URI loading and migration weaving'],
    layers: [{ label: 'Parse', detail: 'Immutable models preserve XAML structure and source locations.' }, { label: 'Bind', detail: 'Framework semantics resolve types, members, markup, resources, and bindings.' }, { label: 'Emit', detail: 'Generated C# constructs and initializes the object graph.' }, { label: 'Load', detail: 'Build and runtime registries connect generated factories to application URIs.' }],
    sourcePath: 'src/XamlToCSharpGenerator.Compiler', docsPath: 'README.md', related: ['typed-bindings-code', 'language-tooling', 'hot-reload-mcp']
  }),
  capability({
    projectSlug: 'xaml-to-csharp-generator', slug: 'typed-bindings-code', name: 'Typed Bindings & Inline C#', eyebrow: 'Semantic expressions inside markup', status: 'Active',
    description: 'Compiled binding, x:Bind, C# expressions, interpolation, inline code blocks, event lambdas, bind-back, and dependency analysis share Roslyn-backed semantics.',
    statement: 'Let markup express typed application logic without falling back to opaque runtime reflection.',
    packages: [{ name: 'XamlToCSharpGenerator.ExpressionSemantics', note: 'Roslyn expression rewriting and dependency analysis.' }, { name: 'XamlToCSharpGenerator.MiniLanguageParsing', note: 'Low-allocation binding and markup parsers.' }], install: 'dotnet add package XamlToCSharpGenerator', usageLanguage: 'xml',
    usage: `<TextBlock Text="{x:Bind ViewModel.DisplayName}" />
<Button Click="{CSharp Code=ViewModel.Save()}" Content="Save" />
<TextBlock>
  <CSharp><![CDATA[$"{ViewModel.Count:N0} items"]]></CSharp>
</TextBlock>`,
    highlights: ['Typed x:Bind with bind-back', 'C# expression and interpolation forms', 'Inline event handlers and code blocks', 'Roslyn dependency and type analysis'],
    layers: [{ label: 'Extract', detail: 'Markup extensions and code blocks preserve expression source.' }, { label: 'Analyze', detail: 'Roslyn resolves types, members, dependencies, conversions, and diagnostics.' }, { label: 'Generate', detail: 'Typed getters, setters, handlers, and lifecycle helpers join emitted code.' }, { label: 'Update', detail: 'Dependency paths drive efficient binding refresh and bind-back.' }],
    sourcePath: 'src/XamlToCSharpGenerator.ExpressionSemantics', docsPath: 'site/articles/xaml/xbind.md', related: ['sourcegen-compiler', 'language-tooling']
  }),
  capability({
    projectSlug: 'xaml-to-csharp-generator', slug: 'language-tooling', name: 'Language & Preview Tooling', eyebrow: 'One semantic engine, many editors', status: 'Active',
    description: 'Completion, diagnostics, definitions, references, hover, inlay hints, rename, semantic highlighting, inline C# intelligence, and Avalonia preview power a VS Code extension, LSP tool, and embeddable editor control.',
    statement: 'Keep authoring behavior consistent from VS Code to an in-app XAML editor.',
    packages: [{ name: 'XamlToCSharpGenerator.LanguageService', note: 'Shared semantic language-service core.' }, { name: 'XamlToCSharpGenerator.Editor.Avalonia', note: 'AvaloniaEdit-based AXAML editor.' }, { name: 'XamlToCSharpGenerator.LanguageServer.Tool', note: 'axsg-lsp global tool.' }], install: 'dotnet tool install --global XamlToCSharpGenerator.LanguageServer.Tool', usageLanguage: 'bash',
    usage: `dotnet tool install --global XamlToCSharpGenerator.LanguageServer.Tool
axsg-lsp

# VS Code releases also include the AXSG extension
# with source-generated live preview.`,
    highlights: ['Completion, diagnostics, navigation, and rename', 'Inline C# semantic tooling', 'VS Code and reusable Avalonia editor', 'Source-generated and XamlX preview modes'],
    layers: [{ label: 'Workspace', detail: 'Projects, documents, references, and generated context establish semantics.' }, { label: 'Analyze', detail: 'Shared services answer XAML and inline C# language queries.' }, { label: 'Protocol', detail: 'LSP carries editor-neutral requests and diagnostics.' }, { label: 'Preview', detail: 'A managed host renders saved or live source-generated markup.' }],
    sourcePath: 'src/XamlToCSharpGenerator.LanguageService', docsPath: 'tools/vscode/axsg-language-server/README.md', related: ['sourcegen-compiler', 'typed-bindings-code', 'hot-reload-mcp']
  }),
  capability({
    projectSlug: 'xaml-to-csharp-generator', slug: 'hot-reload-mcp', name: 'Hot Reload, Hot Design & MCP', eyebrow: 'Live tooling for humans and agents', status: 'Active',
    description: 'Workspace, runtime, and preview MCP hosts expose semantic queries, preview lifecycle, source-generated hot reload, hot design, studio state, and remote protocol contracts.',
    statement: 'Give editors and coding agents the same live, structured control over XAML workspaces.',
    packages: [{ name: 'XamlToCSharpGenerator.McpServer.Tool', note: 'axsg-mcp workspace host.' }, { name: 'XamlToCSharpGenerator.RemoteProtocol', note: 'JSON-RPC, MCP, preview, and studio contracts.' }, { name: 'XamlToCSharpGenerator.Runtime.Avalonia', note: 'Avalonia hot-reload and runtime integration.' }], install: 'dotnet tool install --global XamlToCSharpGenerator.McpServer.Tool', usageLanguage: 'bash',
    usage: `axsg-mcp --workspace /path/to/repo

# Runtime hosts expose hot reload and hot design state.
# Preview hosts support start, update, reload, and stop
# through the shared remote protocol.`,
    highlights: ['Workspace, runtime, and preview hosts', 'Source-generated hot reload', 'Hot design and studio state', 'iOS and remote transport support'],
    layers: [{ label: 'Host', detail: 'The selected workspace, runtime, or preview process owns authoritative state.' }, { label: 'Describe', detail: 'Remote protocol contracts expose capabilities and structured resources.' }, { label: 'Change', detail: 'Clients update source, preview state, or running generated views.' }, { label: 'Verify', detail: 'Diagnostics, lifecycle, and runtime state close the feedback loop.' }],
    sourcePath: 'src/XamlToCSharpGenerator.RemoteProtocol', docsPath: 'site/articles/guides/mcp-servers-and-live-tooling.md', related: ['language-tooling', 'sourcegen-compiler']
  }),

  capability({
    projectSlug: 'printing-tools', slug: 'pagination-preview', name: 'Pagination & Preview', eyebrow: 'Portable print composition', status: 'Active',
    description: 'Documents become page sequences through standard, N-up, booklet, or poster layout, then feed reusable Avalonia page setup and preview windows before submission.',
    statement: 'Make page structure and preview independent from the eventual printer backend.',
    packages: [{ name: 'PrintingTools.Core', note: 'Document, ticket, pagination, layout, preview, and rendering models.' }, { name: 'PrintingTools.UI', note: 'Avalonia page setup and preview UI.' }], install: 'dotnet add package PrintingTools.Core\ndotnet add package PrintingTools.UI', usageLanguage: 'csharp',
    usage: `var request = new PrintRequest(PrintDocument.FromVisual(report))
{
    Ticket = PrintTicketModel.CreateDefault(),
    Description = "Quarterly report"
};
var session = await manager.RequestSessionAsync(request);
var preview = await manager.CreatePreviewAsync(session);`,
    highlights: ['Standard, N-up, booklet, and poster layout', 'Page setup and preview models', 'Avalonia preview windows', 'Vector-aware deterministic pagination'],
    layers: [{ label: 'Capture', detail: 'A visual or document becomes a portable print document.' }, { label: 'Paginate', detail: 'Ticket and layout rules resolve page boundaries and placement.' }, { label: 'Preview', detail: 'Reusable UI presents pages, options, and navigation.' }, { label: 'Commit', detail: 'The same session proceeds to export or platform submission.' }],
    sourcePath: 'src/PrintingTools.Core/Pagination', docsPath: 'docs/printing-api-reference.md', related: ['platform-adapters', 'pdf-jobs']
  }),
  capability({
    projectSlug: 'printing-tools', slug: 'platform-adapters', name: 'Platform Print Adapters', eyebrow: 'Native queues and dialogs', status: 'Active',
    description: 'Windows Win32/XPS, macOS AppKit/Quartz, and Linux CUPS/GTK adapters discover queues, inspect capabilities, coordinate native dialogs, and respect sandbox or portal constraints.',
    statement: 'Keep one print API while honoring each desktop printing system.',
    packages: [{ name: 'PrintingTools.Windows', note: 'Win32 queues, XPS/PDF, dialogs, and job monitoring.' }, { name: 'PrintingTools.MacOS', note: 'AppKit, Quartz PDF, native preview, and sandbox tickets.' }, { name: 'PrintingTools.Linux', note: 'CUPS/IPP, GTK, portals, and managed submission.' }], install: 'dotnet add package PrintingTools.Windows', usageLanguage: 'csharp',
    usage: `AppBuilder.Configure<App>()
    .UsePlatformDetect()
    .UsePrintingTools(options =>
    {
        options.EnablePreview = true;
        options.DiagnosticSink = Console.WriteLine;
    });`,
    highlights: ['Win32 spooler and XPS flows', 'AppKit and Quartz integration', 'CUPS, GTK, Flatpak, and Snap portals', 'Runtime adapter selection'],
    layers: [{ label: 'Select', detail: 'The Avalonia bootstrap chooses the platform adapter at startup.' }, { label: 'Discover', detail: 'Native services report queues, capabilities, defaults, and constraints.' }, { label: 'Dialog', detail: 'Platform UI gathers user ticket and destination choices.' }, { label: 'Submit', detail: 'The adapter renders and monitors the native print job.' }],
    sourcePath: 'src/PrintingTools', docsPath: 'docs/platform-support-matrix.md', related: ['pagination-preview', 'pdf-jobs']
  }),
  capability({
    projectSlug: 'printing-tools', slug: 'pdf-jobs', name: 'PDF, Jobs & Diagnostics', eyebrow: 'Headless and observable output', status: 'Active',
    description: 'Skia vector/PDF rendering, managed fallbacks, job history, diagnostic events, and cross-platform harnesses support visible applications, sandboxed hosts, headless automation, and CI verification.',
    statement: 'Produce inspectable print artifacts even when no native dialog or physical printer is available.',
    packages: [{ name: 'PrintingTools.Core', note: 'Rendering, diagnostics, metrics, tickets, and job abstractions.' }], install: 'dotnet add package PrintingTools.Core', usageLanguage: 'csharp',
    usage: `PrintServiceRegistry.Configure(new PrintingToolsOptions
{
    DiagnosticSink = e => logger.LogInformation(
        "{Category}: {Message}", e.Category, e.Message)
});
await manager.PrintAsync(session);`,
    highlights: ['Skia vector and PDF output', 'Headless managed fallbacks', 'Job monitoring and diagnostic hooks', 'Windows, macOS, and Linux CI harnesses'],
    layers: [{ label: 'Render', detail: 'Portable page content becomes vector or PDF output.' }, { label: 'Submit', detail: 'Native or managed lanes deliver the artifact.' }, { label: 'Observe', detail: 'Job events and diagnostics expose capabilities, timing, and failure.' }, { label: 'Verify', detail: 'Harnesses retain output and metrics for cross-platform CI.' }],
    sourcePath: 'src/PrintingTools.Core/Rendering', docsPath: 'docs/printing-sample-walkthroughs.md', related: ['pagination-preview', 'platform-adapters']
  }),

  capability({
    projectSlug: 'native-message-box', slug: 'managed-dialogs', name: 'Managed Dialog API', eyebrow: 'One async result contract', status: 'Active',
    description: 'A .NET client models titles, messages, icons, custom buttons, defaults, cancellation, input, verification, secondary content, help links, timeouts, and structured results.',
    statement: 'Express a complete native decision dialog without platform-specific application code.',
    packages: [{ name: 'NativeMessageBox', note: 'Managed options, client, results, logging, and native runtime host.' }], install: 'dotnet add package NativeMessageBox', usageLanguage: 'csharp',
    usage: `var result = await NativeMessageBoxClient.ShowAsync(
    new MessageBoxOptions(
        message: "Export completed. Open the file?",
        buttons: new[]
        {
            new MessageBoxButton(1, "Open", isDefault: true),
            new MessageBoxButton(0, "Close", isCancel: true)
        },
        title: "Export"));`,
    highlights: ['Async managed client', 'Custom button identities and roles', 'Structured outcome, input, and timeout result', 'Logging and exception-oriented variants'],
    layers: [{ label: 'Describe', detail: 'Portable options capture message, actions, content, and policy.' }, { label: 'Marshal', detail: 'The managed host transfers validated data to the active native implementation.' }, { label: 'Present', detail: 'The operating system renders a native dialog on its required thread.' }, { label: 'Return', detail: 'One result reports outcome, button, input, checkbox, and timeout state.' }],
    sourcePath: 'src/dotnet/NativeMessageBox', docsPath: 'site/articles/getting-started/quickstart-dotnet.md', related: ['advanced-content', 'native-platforms']
  }),
  capability({
    projectSlug: 'native-message-box', slug: 'advanced-content', name: 'Advanced Dialog Content', eyebrow: 'Beyond OK and Cancel', status: 'Active',
    description: 'Text or password input, combo choices, verification and suppression checkboxes, informative and expanded text, footers, help links, custom icons, auto-close, and ESC policy compose richer native prompts where supported.',
    statement: 'Use the strongest native dialog features while keeping limitations explicit.',
    packages: [{ name: 'NativeMessageBox', note: 'Advanced content models and per-platform capability handling.' }], install: 'dotnet add package NativeMessageBox', usageLanguage: 'csharp',
    usage: `var input = new MessageBoxInputOptions(
    MessageBoxInputMode.Text,
    prompt: "File name:",
    placeholder: "report.pdf");

var options = new MessageBoxOptions(
    "Choose export settings", buttons, inputOptions: input,
    verificationText: "Remember my choice",
    timeout: TimeSpan.FromSeconds(30));`,
    highlights: ['Text, password, and combo input', 'Verification and suppression state', 'Expanded content, footers, and links', 'Timeout and close-policy control'],
    layers: [{ label: 'Model', detail: 'Optional content stays separate from the primary message and action list.' }, { label: 'Negotiate', detail: 'Platform capability rules accept, adapt, or log unsupported features.' }, { label: 'Interact', detail: 'Native accessory controls capture input and verification state.' }, { label: 'Report', detail: 'The unified result preserves the user choice and available content values.' }],
    sourcePath: 'src/shared', related: ['managed-dialogs', 'native-platforms']
  }),
  capability({
    projectSlug: 'native-message-box', slug: 'native-platforms', name: 'Native & Mobile Backends', eyebrow: 'Six operating-system implementations', status: 'Active',
    description: 'TaskDialog/MessageBoxW, NSAlert, GTK with Zenity fallback, UIAlertController, Android AlertDialog, and a WebAssembly overlay implement the shared managed and native C ABI.',
    statement: 'Ship native dialogs from desktop to mobile and browser through one versioned boundary.',
    packages: [{ name: 'NativeMessageBox', note: 'Runtime-specific native libraries and managed resolver.' }], install: 'dotnet add package NativeMessageBox', usageLanguage: 'bash',
    usage: `# Managed applications resolve the packaged runtime asset.
dotnet add package NativeMessageBox

# Native consumers include native_message_box.h and link
# the nativemessagebox library for the target RID.`,
    highlights: ['Windows, macOS, and GTK desktop backends', 'iOS and Android bridges', 'WebAssembly overlay', 'Stable native C header and ABI'],
    layers: [{ label: 'Package', detail: 'RID assets, AAR, XCFramework, or WASM module carry the platform implementation.' }, { label: 'Resolve', detail: 'Managed or native callers initialize the versioned ABI.' }, { label: 'Dispatch', detail: 'Thread and lifecycle rules move work onto the platform UI context.' }, { label: 'Fallback', detail: 'Capability matrices and logging explain adaptations and unavailable features.' }],
    sourcePath: 'src/native', docsPath: 'site/articles/platforms/mobile-platforms.md', related: ['managed-dialogs', 'advanced-content']
  }),

  capability({
    projectSlug: 'lottie', slug: 'lottie-player', name: 'Lottie Player', eyebrow: 'Skottie animation assets', status: 'Maintained',
    description: 'An Avalonia control loads Lottie JSON assets and renders their vector animation through SkiaSharp Skottie inside the normal control tree.',
    statement: 'Place production motion assets in XAML with one focused control.',
    packages: [{ name: 'Lottie', note: 'Avalonia Lottie/Skottie player control.' }], install: 'dotnet add package Lottie', usageLanguage: 'xml', usage: '<Lottie Path="/Assets/Loading.json" />',
    highlights: ['Lottie JSON assets', 'SkiaSharp Skottie renderer', 'Native Avalonia layout', 'Simple XAML integration'],
    layers: [{ label: 'Load', detail: 'The control resolves a packaged Lottie JSON asset.' }, { label: 'Parse', detail: 'Skottie creates the vector animation model and timeline.' }, { label: 'Schedule', detail: 'The control advances time while attached and active.' }, { label: 'Render', detail: 'Skia draws the current animation frame inside Avalonia.' }],
    sourcePath: 'src/Lottie', related: ['animation-control', 'composition-shaders']
  }),
  capability({
    projectSlug: 'lottie', slug: 'animation-control', name: 'AnimationControl', eyebrow: 'Minimal custom frame loop', status: 'Maintained',
    description: 'A lightweight base control owns attachment, frame scheduling, delta time, invalidation, and rendering so custom animation logic only overrides the meaningful hooks.',
    statement: 'Build a custom Avalonia animation without rebuilding its lifecycle loop.',
    packages: [{ name: 'AnimationControl', note: 'Overridable Avalonia animation base class.' }], install: 'dotnet add package AnimationControl', usageLanguage: 'csharp',
    usage: `public sealed class PulseControl : AnimationControl
{
    protected override void OnAnimationFrame(TimeSpan now, TimeSpan last)
        => Progress = (Progress + (now - last).TotalSeconds) % 1;

    public override void Render(DrawingContext context)
        => DrawPulse(context, Progress);
}`,
    highlights: ['Automatic frame loop', 'Delta-time update hook', 'Automatic visual invalidation', 'Small subclassing surface'],
    layers: [{ label: 'Attach', detail: 'The base observes visual-tree lifetime.' }, { label: 'Tick', detail: 'Frame callbacks receive current and previous time.' }, { label: 'Update', detail: 'The subclass advances only its domain state.' }, { label: 'Draw', detail: 'Normal Avalonia rendering presents each invalidated frame.' }],
    sourcePath: 'src/AnimationControl', related: ['lottie-player', 'composition-shaders']
  }),
  capability({
    projectSlug: 'lottie', slug: 'composition-shaders', name: 'Composition & Shader Animation', eyebrow: 'Skia and SKSL motion surfaces', status: 'Maintained',
    description: 'CompositionAnimatedControl supplies stretch-aware Skia rendering, elapsed normalization, repeat counts, per-frame updates, and static redraw; ShaderAnimatedControl adds URI-loaded SKSL runtime effects and uniform binding.',
    statement: 'Own the render loop when packaged animation assets are not enough.',
    packages: [{ name: 'CompositionAnimatedControl', note: 'Composition-backed Skia base control.' }, { name: 'ShaderAnimatedControl', note: 'Animated SKSL runtime-effect control.' }], install: 'dotnet add package CompositionAnimatedControl\ndotnet add package ShaderAnimatedControl', usageLanguage: 'xml',
    usage: `<ShaderAnimatedControl
    ShaderUri="/Assets/Gradient.sksl"
    ShaderWidth="512"
    ShaderHeight="512"
    IsShaderFillCanvas="True" />`,
    highlights: ['Composition scheduler integration', 'Animated and static redraw modes', 'Stretch and repeat control', 'SKSL assets and custom uniforms'],
    layers: [{ label: 'Measure', detail: 'Logical source size and stretch define destination geometry.' }, { label: 'Normalize', detail: 'Elapsed time maps to loops and repeat policy.' }, { label: 'Update', detail: 'Frame state or shader uniforms evolve with delta time.' }, { label: 'Render', detail: 'Skia or SKSL draws directly into the composition-backed surface.' }],
    sourcePath: 'src/CompositionAnimatedControl', related: ['animation-control', 'lottie-player']
  }),

  capability({
    projectSlug: 'media-player', slug: 'gpu-playback', name: 'GPU Media Playback', eyebrow: 'Video inside Avalonia composition', status: 'Active',
    description: 'GpuMediaPlayer renders decoded video through Avalonia-hosted GPU composition with direct texture upload and compatibility copy paths, avoiding NativeControlHost airspace gaps.',
    statement: 'Keep video, overlays, transforms, and application chrome in one compositor.',
    packages: [{ name: 'MediaPlayer.Controls', note: 'GpuMediaPlayer, rendering, transport controls, and playback shell components.' }], install: 'dotnet add package MediaPlayer.Controls', usageLanguage: 'xml',
    usage: `<media:GpuMediaPlayer
    Source="{Binding CurrentSource}"
    AutoPlay="True"
    LayoutMode="Uniform"
    Volume="100"
    PreferDirectGpuTextureUpload="True" />`,
    highlights: ['No NativeControlHost airspace', 'Direct GPU texture upload', 'Compatibility copy-upload fallback', 'QuickTime-style overlay and chrome patterns'],
    layers: [{ label: 'Open', detail: 'Source and backend policy establish a playback session.' }, { label: 'Decode', detail: 'The selected native or fallback provider produces video frames.' }, { label: 'Upload', detail: 'Direct or compatibility paths move frames into GPU resources.' }, { label: 'Compose', detail: 'Avalonia draws video beside normal controls and overlays.' }],
    sourcePath: 'src/MediaPlayer.Controls/Rendering', related: ['playback-backends', 'media-workflows']
  }),
  capability({
    projectSlug: 'media-player', slug: 'playback-backends', name: 'Playback Backends & Tracks', eyebrow: 'Native-first, fallback-ready', status: 'Active',
    description: 'Backend-neutral contracts select macOS AVFoundation or Windows Media Foundation paths where available while keeping FFmpeg and LibVLC modes, diagnostics, audio/subtitle tracks, devices, and routes accessible.',
    statement: 'Choose the strongest playback engine without changing the Avalonia control surface.',
    packages: [{ name: 'MediaPlayer.Native.Abstractions', note: 'Provider, backend, track, device, route, and diagnostic contracts.' }, { name: 'MediaPlayer.Native.Interop', note: 'Provider catalog and native runtime selection.' }], install: 'dotnet add package MediaPlayer.Native.Abstractions\ndotnet add package MediaPlayer.Native.Interop', usageLanguage: 'csharp',
    usage: `var player = new GpuMediaPlayer
{
    Source = new Uri("file:///media/movie.mp4")
};
player.Play();
player.Seek(TimeSpan.FromSeconds(30));
var tracks = player.AudioTracks;`,
    highlights: ['AVFoundation and Media Foundation directions', 'FFmpeg and LibVLC fallbacks', 'Audio and subtitle track APIs', 'Input, output, route, and backend diagnostics'],
    layers: [{ label: 'Probe', detail: 'The runtime catalog reports providers and capabilities.' }, { label: 'Select', detail: 'Platform and user policy choose native or fallback playback.' }, { label: 'Control', detail: 'One API handles transport, seek, volume, tracks, devices, and routes.' }, { label: 'Diagnose', detail: 'Backend and upload state remain visible to the application.' }],
    sourcePath: 'src/MediaPlayer.Native.Abstractions', related: ['gpu-playback', 'media-workflows']
  }),
  capability({
    projectSlug: 'media-player', slug: 'media-workflows', name: 'Media Workflows', eyebrow: 'Reusable editing and export services', status: 'Active',
    description: 'A workflow service layer models trim, split, combine, export, transform, recording, and audio/video stream removal independently from the demo application.',
    statement: 'Reuse production media operations beyond the player window.',
    packages: [{ name: 'MediaPlayer.Controls', note: 'Workflow contracts, registration, orchestration, and UI integration.' }], install: 'dotnet add package MediaPlayer.Controls', usageLanguage: 'csharp',
    usage: `services.AddMediaPlayerWorkflows(options =>
{
    options.PreferNativePlatformServices = true;
});

await workflow.TrimAsync(source, destination, range);`,
    highlights: ['Trim, split, and combine', 'Export and transform', 'Recording and stream removal', 'Dependency-injection registration'],
    layers: [{ label: 'Describe', detail: 'A portable request captures source, destination, range, and operation options.' }, { label: 'Select', detail: 'Workflow policy chooses a native or compatible provider.' }, { label: 'Execute', detail: 'The service coordinates progress, cancellation, and output.' }, { label: 'Present', detail: 'Applications can compose dialogs and history over the same service.' }],
    sourcePath: 'src/MediaPlayer.Controls/Workflows', related: ['gpu-playback', 'playback-backends']
  }),

  capability({
    projectSlug: 'hex-view', slug: 'large-file-viewing', name: 'Large-file Viewing', eyebrow: 'Virtual binary presentation', status: 'Maintained',
    description: 'Memory-mapped readers, virtual scrolling, chunked operations, configurable bytes per line, multiple numeric bases, and ASCII/UTF encodings keep very large binary files navigable.',
    statement: 'Browse binary data at file scale without loading it all into memory.',
    packages: [{ name: 'HexView', note: 'Control, memory-mapped readers, formatters, and virtual presentation services.' }], install: 'dotnet add package HexView', usageLanguage: 'csharp',
    usage: `var reader = new MemoryMappedLineReader("image.bin");
var formatter = new HexFormatter(reader)
{
    Base = 16,
    BytesWidth = 16,
    Encoding = Encoding.UTF8
};
HexView.LineReader = reader;
HexView.HexFormatter = formatter;`,
    highlights: ['Memory-mapped file access', 'Virtual scrolling and chunked reads', 'Hex, decimal, octal, and binary formats', 'ASCII, UTF-8, and UTF-16 views'],
    layers: [{ label: 'Map', detail: 'The reader opens file-backed data without materializing the whole file.' }, { label: 'Window', detail: 'Viewport offsets request only visible byte ranges.' }, { label: 'Format', detail: 'Numeric base, grouping, width, and encoding shape each line.' }, { label: 'Render', detail: 'The Avalonia control draws addresses, bytes, text, caret, and selection.' }],
    sourcePath: 'src/HexView/Services', related: ['binary-editing', 'diff-navigation']
  }),
  capability({
    projectSlug: 'hex-view', slug: 'binary-editing', name: 'Binary Editing & Search', eyebrow: 'Non-destructive byte operations', status: 'Maintained',
    description: 'A piece-table-inspired byte overlay tracks overwrite, insert, and delete operations over the original source, while an edit journal, selection services, wildcard search, replace, save, and patch export form a complete editing lane.',
    statement: 'Edit bytes efficiently while preserving the original file and a reversible history.',
    packages: [{ name: 'HexView', note: 'ByteOverlay, EditJournal, search, selection, save, and patch services.' }], install: 'dotnet add package HexView', usageLanguage: 'csharp',
    usage: `var source = new MemoryMappedLineReader("firmware.bin");
var overlay = new ByteOverlay(source) { Journal = new EditJournal() };

overlay.OverwriteByte(0x100, 0xFF);
overlay.InsertBytes(0x200, new byte[] { 0xDE, 0xAD });

await new SaveService().SaveAs(overlay, "patched.bin");`,
    highlights: ['Overwrite, insert, and delete overlay', 'Unlimited undo/redo and batches', 'Hex, wildcard, and text search/replace', 'Save As and portable patch export'],
    layers: [{ label: 'Overlay', detail: 'Edits reference the immutable source plus inserted and replaced ranges.' }, { label: 'Journal', detail: 'Operations become reversible single or batch history entries.' }, { label: 'Search', detail: 'Pattern, wildcard, text, and replacement services operate across the virtual data.' }, { label: 'Save', detail: 'The merged view writes a new file or a compact patch description.' }],
    sourcePath: 'src/HexView/Model', related: ['large-file-viewing', 'diff-navigation']
  }),
  capability({
    projectSlug: 'hex-view', slug: 'diff-navigation', name: 'Diff & Navigation', eyebrow: 'Find meaningful binary locations', status: 'Maintained',
    description: 'Side-by-side synchronized views, difference providers, highlight brushes, next/previous difference, address jumps, bookmarks, history, caret events, selection services, and keyboard commands turn raw offsets into an inspection workflow.',
    statement: 'Move through large binary evidence without losing context.',
    packages: [{ name: 'HexView', note: 'Difference, navigation, bookmark, selection, and event services.' }], install: 'dotnet add package HexView', usageLanguage: 'csharp',
    usage: `LeftHexView.DifferencesProvider = () => differences;
RightHexView.DifferencesProvider = () => differences;

navigation.AddBookmark(0x1000, "Header table");
navigation.Visit(LeftHexView.CaretOffset);
LeftHexView.MoveCaretTo(0x2000);`,
    highlights: ['Side-by-side diff highlighting', 'Synchronized scrolling', 'Address history and bookmarks', 'Comprehensive keyboard and event surface'],
    layers: [{ label: 'Compare', detail: 'A provider reports changed ranges between two data sources.' }, { label: 'Highlight', detail: 'Both controls mark differences and synchronize context.' }, { label: 'Navigate', detail: 'Offsets, history, bookmarks, and difference commands move the caret.' }, { label: 'Integrate', detail: 'Events expose caret, selection, and byte changes to the host application.' }],
    sourcePath: 'src/HexView/Controls', related: ['large-file-viewing', 'binary-editing']
  }),

  capability({
    projectSlug: 'theme-manager-avalonia', slug: 'theme-hosts', name: 'Fluent & Simple Theme Hosts', eyebrow: 'Initialize the built-in theme family', status: 'Maintained',
    description: 'FluentThemeManager and SimpleThemeManager implement one IThemeManager contract and insert the corresponding Avalonia theme into the application style collection.',
    statement: 'Select the built-in theme family without coupling application startup to its concrete type.',
    packages: [{ name: 'ThemeManager', note: 'IThemeManager plus FluentThemeManager and SimpleThemeManager.' }], install: 'dotnet add package ThemeManager', usageLanguage: 'csharp',
    usage: `IThemeManager themes = new FluentThemeManager();
themes.Initialize(this);

// Or use SimpleThemeManager for Avalonia SimpleTheme.`,
    highlights: ['Shared IThemeManager contract', 'FluentTheme initialization', 'SimpleTheme initialization', 'Application style insertion'],
    layers: [{ label: 'Choose', detail: 'Application composition selects Fluent or Simple implementation.' }, { label: 'Create', detail: 'The manager owns the matching Avalonia theme instance.' }, { label: 'Initialize', detail: 'The theme is inserted at the front of Application.Styles.' }, { label: 'Use', detail: 'Normal Avalonia resources and controls consume the active family.' }],
    sourcePath: 'src/ThemeManager', related: ['theme-switching']
  }),
  capability({
    projectSlug: 'theme-manager-avalonia', slug: 'theme-switching', name: 'Theme Variant Switching', eyebrow: 'Application-wide light and dark state', status: 'Maintained',
    description: 'Both managers translate a compact numeric selection into Application.RequestedThemeVariant, switching the entire application between Avalonia light and dark variants at runtime.',
    statement: 'Change application appearance through one small runtime operation.',
    packages: [{ name: 'ThemeManager', note: 'Runtime light and dark RequestedThemeVariant switching.' }], install: 'dotnet add package ThemeManager', usageLanguage: 'csharp',
    usage: `IThemeManager themes = new FluentThemeManager();
themes.Initialize(Application.Current!);

themes.Switch(0); // ThemeVariant.Light
themes.Switch(1); // ThemeVariant.Dark`,
    highlights: ['Application.RequestedThemeVariant integration', 'Light and dark selection', 'Same behavior for Fluent and Simple', 'No per-window theme plumbing'],
    layers: [{ label: 'Select', detail: 'The application maps a setting or command to the supported index.' }, { label: 'Switch', detail: 'The manager resolves light or dark ThemeVariant.' }, { label: 'Request', detail: 'Application.RequestedThemeVariant changes once for the app.' }, { label: 'Propagate', detail: 'Avalonia updates resources and controls throughout the visual tree.' }],
    sourcePath: 'src/ThemeManager', related: ['theme-hosts']
  }),

  capability({
    projectSlug: 'svg-to-xaml', slug: 'conversion-engine', name: 'SVG Conversion Engine', eyebrow: 'Vector artwork becomes Avalonia resources', status: 'Maintained',
    description: 'The converter parses SVG content into an intermediate drawing model and emits Avalonia XAML geometry, drawing, brush, transform, clip, mask, filter, and resource structures for desktop or browser workflows.',
    statement: 'Convert design-time SVG assets into native XAML that tools and applications can inspect.',
    packages: [{ name: 'SvgToXamlConverter', note: 'SVG model, conversion engine, and XAML writer.' }], install: 'dotnet add package SvgToXamlConverter', usageLanguage: 'bash',
    usage: `# Run the desktop converter from source.
dotnet run --project src/SvgToXaml.Desktop

# Open SVG artwork, inspect the generated drawing,
# then save the Avalonia XAML output.`,
    highlights: ['Intermediate drawing and resource model', 'Geometry, paint, transform, and container conversion', 'Desktop and browser hosts', 'Compatibility and cleanup options'],
    layers: [{ label: 'Parse', detail: 'SVG elements and paint data become a structured source model.' }, { label: 'Translate', detail: 'Shapes, transforms, resources, clips, and effects map to XAML concepts.' }, { label: 'Optimize', detail: 'Compatibility and resource-reuse settings shape output.' }, { label: 'Write', detail: 'The converter produces standalone XAML or resource content.' }],
    sourcePath: 'src/SvgToXaml.Converter', related: ['msbuild-assets']
  }),
  capability({
    projectSlug: 'svg-to-xaml', slug: 'msbuild-assets', name: 'MSBuild Asset Pipeline', eyebrow: 'Regenerate XAML during build', status: 'Maintained',
    description: 'SvgToXaml.Build consumes SvgFiles items, combines many sources into one ResourceDictionary or emits individual AXAML files, and exposes conversion, compatibility, resource reuse, geometry, opacity, filter, clip, mask, and newline settings.',
    statement: 'Make vector asset conversion repeatable and reviewable in the normal build.',
    packages: [{ name: 'SvgToXaml.Build', note: 'MSBuild targets and SVG conversion task.' }], install: 'dotnet add package SvgToXaml.Build', usageLanguage: 'xml',
    usage: `<ItemGroup>
  <SvgFiles Include="Assets/**/*.svg"
            OutputFile="Assets/Icons.axaml"
            UseResources="true"
            ReuseExistingResources="true"
            TransformGeometry="true" />
</ItemGroup>`,
    highlights: ['Combined ResourceDictionary output', 'Per-file AXAML output', 'Build item metadata configuration', 'Resource reuse and geometry transforms'],
    layers: [{ label: 'Collect', detail: 'MSBuild item globs identify SVG inputs and per-item settings.' }, { label: 'Group', detail: 'Output file or directory rules decide combined versus individual generation.' }, { label: 'Convert', detail: 'The shared engine maps each asset with requested compatibility options.' }, { label: 'Emit', detail: 'Generated AXAML joins the application build as a deterministic artifact.' }],
    sourcePath: 'src/SvgToXaml.Build', related: ['conversion-engine']
  }),

  capability({
    projectSlug: 'ribbon-control', slug: 'ribbon-primitives', name: 'Ribbon Controls & Layout', eyebrow: 'Complete desktop command surface', status: 'Active',
    description: 'Tabs, groups, buttons, split buttons, combo boxes, toggle groups, galleries, backstage, quick access toolbar, key tips, automation peers, stable height, and adaptive layout compose a complete Avalonia ribbon.',
    statement: 'Build a dense command hierarchy from reusable, accessible primitives.',
    packages: [{ name: 'RibbonControl.Core', note: 'Controls, themes, icons, layout, key tips, and automation peers.' }], install: 'dotnet add package RibbonControl.Core', usageLanguage: 'xml',
    usage: `<ribbon:Ribbon>
  <ribbon:RibbonTab Id="home" Header="Home">
    <ribbon:RibbonGroup Id="clipboard" Header="Clipboard">
      <ribbon:RibbonItem Id="paste" Label="Paste"
                         Primitive="PasteSplitButton" />
    </ribbon:RibbonGroup>
  </ribbon:RibbonTab>
</ribbon:Ribbon>`,
    highlights: ['Rich tabs, groups, items, gallery, and backstage', 'Quick access toolbar', 'Key-tip routing and automation peers', 'Adaptive layout and stable height'],
    layers: [{ label: 'Declare', detail: 'XAML or definitions describe tabs, groups, commands, and presentation.' }, { label: 'Measure', detail: 'Adaptive policies choose item sizes and group presentation.' }, { label: 'Interact', detail: 'Commands, key tips, galleries, backstage, and quick access route intent.' }, { label: 'Automate', detail: 'Peers and stable identifiers expose accessible testable structure.' }],
    sourcePath: 'src/RibbonControl.Core/Controls', related: ['mvvm-merge', 'customization-state']
  }),
  capability({
    projectSlug: 'ribbon-control', slug: 'mvvm-merge', name: 'MVVM & Runtime Merging', eyebrow: 'Data-driven command systems', status: 'Active',
    description: 'Definition and view-model types, command catalogs, two-way runtime state, and merge policies let modules contribute or reorder tabs, groups, and items without owning the ribbon shell.',
    statement: 'Let features contribute commands while the application retains one coherent ribbon.',
    packages: [{ name: 'RibbonControl.Core', note: 'Models, view models, command catalog, source collections, and merge services.' }], install: 'dotnet add package RibbonControl.Core', usageLanguage: 'xml',
    usage: `<ribbon:Ribbon
    TabsSource="{CompiledBinding Ribbon.Tabs}"
    CommandCatalog="{CompiledBinding CommandCatalog}"
    SelectedTabId="{CompiledBinding Ribbon.SelectedTabId, Mode=TwoWay}"
    QuickAccessItems="{CompiledBinding QuickAccessItems}" />`,
    highlights: ['XAML, MVVM, and hybrid composition', 'Command catalog abstraction', 'TabsSource, GroupsSource, and ItemsSource', 'Pluggable merge policies and ordering'],
    layers: [{ label: 'Contribute', detail: 'Application modules publish definitions or view-model collections.' }, { label: 'Merge', detail: 'Stable ids, order, and policy reconcile contributions.' }, { label: 'Bind', detail: 'The control observes command and two-way state services.' }, { label: 'Present', detail: 'One adaptive ribbon materializes the merged runtime model.' }],
    sourcePath: 'src/RibbonControl.Core/ViewModels', related: ['ribbon-primitives', 'customization-state']
  }),
  capability({
    projectSlug: 'ribbon-control', slug: 'customization-state', name: 'Customization & Persistence', eyebrow: 'Remember the user’s ribbon', status: 'Active',
    description: 'Customization services export, reset, load, and save minimized state, selected tab, quick access items and placement, with a JSON state store, schema versions, and migration hooks.',
    statement: 'Preserve user command layout without freezing the application schema.',
    packages: [{ name: 'RibbonControl.Persistence.Json', note: 'File-backed IRibbonStateStore with schema versioning and migrations.' }, { name: 'RibbonControl.Core', note: 'Runtime state and customization services.' }], install: 'dotnet add package RibbonControl.Persistence.Json', usageLanguage: 'csharp',
    usage: `var store = new JsonRibbonStateStore(
    "ribbon-state.json",
    new JsonRibbonStateStoreOptions
    {
        CurrentSchemaVersion = 2,
        Migrations = { new Schema1To2QuickAccessPlacementMigration() }
    });`,
    highlights: ['Load, save, export, and reset flows', 'Quick access and minimized state', 'Versioned JSON schema', 'Pluggable migration chain'],
    layers: [{ label: 'Capture', detail: 'Runtime ribbon state records selection, placement, and customization.' }, { label: 'Version', detail: 'The store writes a schema identity beside state.' }, { label: 'Migrate', detail: 'Ordered hooks update older persisted shapes.' }, { label: 'Restore', detail: 'Built-in commands apply or reset state through the control.' }],
    sourcePath: 'src/RibbonControl.Persistence.Json', related: ['ribbon-primitives', 'mvvm-merge']
  }),

  capability({
    projectSlug: 'chatgpt-client', slug: 'cross-platform-client', name: 'Cross-platform Chat Client', eyebrow: 'Earlier Avalonia AI application', status: 'Maintained',
    description: 'Reusable core and UI layers power desktop, Android, iOS, and browser hosts with conversation history, editing, Markdown/HTML rendering, API endpoint configuration, settings, and imported web-chat backups.',
    statement: 'Carry one conversational client model across the full Avalonia target set.',
    packages: [{ name: 'ChatGPT', note: 'OpenAI chat API client.' }, { name: 'ChatGPT.Core', note: 'Models, services, and application view models.' }, { name: 'ChatGPT.UI', note: 'Reusable Avalonia conversation UI.' }], install: 'dotnet add package ChatGPT\ndotnet add package ChatGPT.UI', usageLanguage: 'bash',
    usage: `export OPENAI_API_KEY="your-key"
dotnet run --project src/ChatGPT.UI.Desktop

# The earlier client also includes Android, iOS,
# and browser application hosts.`,
    highlights: ['Desktop, Android, iOS, and browser hosts', 'Reusable API, core, and UI packages', 'Conversation editing and backup import', 'Configurable API URL and model settings'],
    layers: [{ label: 'Configure', detail: 'Environment or settings provide API credentials, endpoint, and generation options.' }, { label: 'Model', detail: 'Core services manage conversations, messages, and requests.' }, { label: 'Present', detail: 'Reusable Avalonia UI renders and edits the chat history.' }, { label: 'Host', detail: 'Desktop, mobile, and browser projects supply platform lifecycle.' }],
    sourcePath: 'src/ChatGPT.UI', related: ['batch-cli', 'com-automation']
  }),
  capability({
    projectSlug: 'chatgpt-client', slug: 'batch-cli', name: 'Batch-processing CLI', eyebrow: 'Prompt files in parallel', status: 'Maintained',
    description: 'The ChatGPT.CLI global tool accepts files or recursive directory patterns, configurable output paths and extensions, generation settings, directions, model, endpoint, verbosity, and worker-thread count for repeatable batch transformations.',
    statement: 'Turn a prompt into a repeatable source and document processing pipeline.',
    packages: [{ name: 'ChatGPT.CLI', note: 'Global .NET tool for file-oriented chat-completion jobs.' }], install: 'dotnet tool install --global ChatGPT.CLI', usageLanguage: 'bash',
    usage: `chatgpt -d ./src \
  -p "*.cs" -r \
  -o ./docs -e md \
  --threads 4 \
  --directions "Write concise API documentation."`,
    highlights: ['File and recursive directory inputs', 'Pattern, extension, and output mapping', 'Parallel worker threads', 'Configurable endpoint and generation settings'],
    layers: [{ label: 'Discover', detail: 'Files, directories, patterns, and recursion select inputs.' }, { label: 'Prompt', detail: 'Directions and per-file content form each request.' }, { label: 'Process', detail: 'A configurable worker pool executes jobs.' }, { label: 'Write', detail: 'Output paths and extensions preserve a repeatable artifact layout.' }],
    sourcePath: 'src/ChatGPT.CLI', related: ['cross-platform-client', 'com-automation']
  }),
  capability({
    projectSlug: 'chatgpt-client', slug: 'com-automation', name: 'COM & Office Automation', eyebrow: 'Chat completions from VBA', status: 'Maintained',
    description: 'A .NET Framework COM-visible bridge exposes asynchronous chat operations and completion events to Windows automation clients, including Word and VBA translation, drafting, and form workflows.',
    statement: 'Bring the same chat client into legacy Windows automation environments.',
    packages: [{ name: 'ChatGptCom', note: 'COM-visible OpenAI client bridge for .NET Framework and VBA.' }], install: 'dotnet add package ChatGptCom', usageLanguage: 'csharp',
    usage: `// Register the COM assembly, reference its type library,
// then create ChatGptCom.Chat from VBA or another COM client.
var chat = new ChatGptCom.Chat();
chat.Create("You are a helpful assistant", 2000, "gpt-3.5-turbo");
chat.AskAsync("Translate to English", sourceText);`,
    highlights: ['COM-visible Chat API', 'Asynchronous completion events', 'Word and VBA integration examples', '.NET Framework automation bridge'],
    layers: [{ label: 'Register', detail: 'The assembly and type library become available to COM clients.' }, { label: 'Create', detail: 'Automation code initializes a chat session and settings.' }, { label: 'Send', detail: 'Async methods submit prompts without blocking the host UI.' }, { label: 'Handle', detail: 'COM events return output to documents, forms, or macros.' }],
    sourcePath: 'src/ChatGptCom', related: ['cross-platform-client', 'batch-cli']
  })
];
