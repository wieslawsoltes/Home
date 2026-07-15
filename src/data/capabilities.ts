import { nugetUrl, projects, type PackageLink, type Project } from './projects';
import { longTailCapabilities } from './longTailCapabilities';

export type CapabilityLayer = {
  label: string;
  detail: string;
};

export type Capability = {
  projectSlug: string;
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  statement: string;
  status: 'Stable' | 'Active' | 'Preview' | 'Maintained';
  packages: PackageLink[];
  install: string;
  usageLanguage: 'csharp' | 'xml' | 'bash' | 'javascript';
  usage: string;
  highlights: string[];
  layers: CapabilityLayer[];
  sourcePath: string;
  docsPath?: string;
  related?: string[];
};

const capability = (item: Capability) => item;

export const capabilities: Capability[] = [
  capability({
    projectSlug: 'prodatagrid', slug: 'data-grid', name: 'ProDataGrid', eyebrow: 'Virtualized data workbench', status: 'Active',
    description: 'A production-oriented Avalonia grid with row and column virtualization, editing, sorting, filtering, grouping, selection, and extensible columns.',
    statement: 'The core table surface for dense, interactive application data.',
    packages: [{ name: 'ProDataGrid', note: 'Grid control, columns, data sources, themes, and editing infrastructure.' }],
    install: 'dotnet add package ProDataGrid',
    usageLanguage: 'xml',
    usage: `<DataGrid ItemsSource="{Binding Orders}"
          AutoGenerateColumns="False"
          IsReadOnly="False">
  <DataGrid.Columns>
    <DataGridTextColumn Header="Customer" Binding="{Binding Customer}" />
    <DataGridCheckBoxColumn Header="Paid" Binding="{Binding IsPaid}" />
  </DataGrid.Columns>
</DataGrid>`,
    highlights: ['Rows and columns virtualize together', 'Built-in edit and validation pipeline', 'Sorting, filtering, grouping, and summaries', 'Fluent and Simple theme support'],
    layers: [{ label: 'Source', detail: 'Collection and hierarchical adapters expose rows without coupling business data to the control.' }, { label: 'Columns', detail: 'Text, checkbox, template, and custom columns own display and edit behavior.' }, { label: 'Viewport', detail: 'Recycling and virtualization keep dense data responsive.' }, { label: 'Interaction', detail: 'Selection, navigation, sorting, filtering, and validation compose around the viewport.' }],
    sourcePath: 'src/Avalonia.Controls.DataGrid', related: ['formula-engine', 'charting', 'diagnostics']
  }),
  capability({
    projectSlug: 'prodatagrid', slug: 'formula-engine', name: 'Formula Engine', eyebrow: 'Spreadsheet calculation', status: 'Active',
    description: 'A calculation layer for parsed expressions, cell references, dependency tracking, functions, recalculation, and Excel-oriented interoperability.',
    statement: 'Give grid cells relationships, functions, and repeatable recalculation.',
    packages: [{ name: 'ProDataGrid.FormulaEngine', note: 'Formula parser, evaluation runtime, dependency graph, and built-in functions.' }, { name: 'ProDataGrid.FormulaEngine.Excel', note: 'Excel-oriented syntax and compatibility helpers.' }],
    install: 'dotnet add package ProDataGrid.FormulaEngine',
    usageLanguage: 'csharp',
    usage: `var workbook = new FormulaWorkbook();
workbook.SetValue("A1", 40m);
workbook.SetValue("A2", 2m);
workbook.SetFormula("A3", "=SUM(A1:A2)");

var total = workbook.GetValue("A3");`,
    highlights: ['Parsed formulas and functions', 'Cell and range references', 'Dependency-driven recalculation', 'Excel compatibility package'],
    layers: [{ label: 'Parse', detail: 'Formula text becomes a typed expression tree.' }, { label: 'Resolve', detail: 'Names, cells, ranges, and functions bind against a workbook context.' }, { label: 'Calculate', detail: 'Dependencies determine evaluation order and invalidation.' }, { label: 'Present', detail: 'Grid integrations expose values, errors, and formula editing.' }],
    sourcePath: 'src/ProDataGrid.FormulaEngine', related: ['data-grid', 'charting']
  }),
  capability({
    projectSlug: 'prodatagrid', slug: 'charting', name: 'Charting & ProCharts', eyebrow: 'Data visualization system', status: 'Active',
    description: 'Chart models, Skia rendering, Avalonia controls, and grid integration for turning tabular data into composable visual analysis.',
    statement: 'Move from cells to visual evidence without leaving the data stack.',
    packages: [{ name: 'ProDataGrid.Charting', note: 'Chart definitions and grid-aware chart workflows.' }, { name: 'ProCharts', note: 'Framework-neutral chart model and layout.' }, { name: 'ProCharts.Avalonia', note: 'Avalonia chart controls and interaction.' }, { name: 'ProCharts.Skia', note: 'Skia chart renderer.' }],
    install: 'dotnet add package ProDataGrid.Charting\ndotnet add package ProCharts.Avalonia',
    usageLanguage: 'xml',
    usage: `<charts:ChartView Series="{Binding RevenueSeries}"
                  LegendPosition="Right"
                  IsPointerTrackingEnabled="True" />`,
    highlights: ['Framework-neutral chart definitions', 'Skia rendering backend', 'Avalonia interaction and themes', 'Grid selection and data integration'],
    layers: [{ label: 'Data', detail: 'Series and axes describe values independently from a UI framework.' }, { label: 'Layout', detail: 'Scales, labels, legends, and plot geometry are measured deterministically.' }, { label: 'Render', detail: 'The Skia backend draws the resolved chart scene.' }, { label: 'Interact', detail: 'Avalonia controls add hit testing, selection, tooltips, and navigation.' }],
    sourcePath: 'src/ProDataGrid.Charting', related: ['data-grid', 'formula-engine', 'diagnostics']
  }),
  capability({
    projectSlug: 'prodatagrid', slug: 'diagnostics', name: 'ProDiagnostics', eyebrow: 'Runtime inspection', status: 'Preview',
    description: 'In-process diagnostics and transport packages for inspecting data controls, application state, and live runtime behavior.',
    statement: 'Make complex controls observable while they are running.',
    packages: [{ name: 'ProDiagnostics', note: 'Diagnostics surface and Avalonia integration.' }, { name: 'ProDiagnostics.Transport', note: 'Transport contracts for remote and embedded diagnostic clients.' }],
    install: 'dotnet add package ProDiagnostics --prerelease',
    usageLanguage: 'csharp',
    usage: `AppBuilder.Configure<App>()
    .UsePlatformDetect()
    .UseProDiagnostics();`,
    highlights: ['Live control inspection', 'Transport-separated architecture', 'Developer-oriented overlays', 'Designed for extensible providers'],
    layers: [{ label: 'Provider', detail: 'Runtime adapters expose inspectable state and commands.' }, { label: 'Model', detail: 'Diagnostics data is normalized into portable messages.' }, { label: 'Transport', detail: 'Clients can remain in-process or connect across a transport boundary.' }, { label: 'Surface', detail: 'Developer tools present trees, properties, events, and measurements.' }],
    sourcePath: 'src/ProDiagnostics', related: ['data-grid', 'charting']
  }),

  capability({
    projectSlug: 'proedit', slug: 'document-editor', name: 'Document Editor', eyebrow: 'Paginated rich editing', status: 'Active',
    description: 'A Skia-backed editor surface with pagination, selection, caret navigation, rich text formatting, document commands, and Avalonia integration.',
    statement: 'A real document workspace, not a multiline text box.',
    packages: [{ name: 'ProEdit.Controls.Skia.Avalonia', note: 'Avalonia host for the Skia document editor.' }, { name: 'ProEdit.RichText.Avalonia', note: 'Rich-text controls, commands, and editor integration.' }],
    install: 'dotnet add package ProEdit.Controls.Skia.Avalonia\ndotnet add package ProEdit.RichText.Avalonia',
    usageLanguage: 'xml',
    usage: `<proedit:ProEditDocumentEditor
    Document="{Binding Document}"
    Zoom="1.0"
    IsReadOnly="False" />`,
    highlights: ['Paginated document canvas', 'Caret, selection, and navigation', 'Paragraph and character formatting', 'Undoable editing commands'],
    layers: [{ label: 'Document', detail: 'Blocks, inlines, styles, sections, and resources hold editable content.' }, { label: 'Layout', detail: 'Text and document elements resolve into pages and positioned fragments.' }, { label: 'Render', detail: 'Skia paints the resolved document consistently across hosts.' }, { label: 'Edit', detail: 'Selection, commands, input, and undo mutate the document model.' }],
    sourcePath: 'src/ProEdit.Controls.Skia.Avalonia', docsPath: 'docfx/articles/architecture.md', related: ['document-formats', 'reporting', 'collaboration']
  }),
  capability({
    projectSlug: 'proedit', slug: 'document-formats', name: 'Document Formats', eyebrow: 'Import, export, and interchange', status: 'Active',
    description: 'Format-focused modules connect the shared document model to DOCX/Open XML, RTF, HTML, Markdown, PDF, PostScript, and XPS workflows.',
    statement: 'Keep the editor model portable while formats stay replaceable.',
    packages: [{ name: 'ProEdit.OpenXml', note: 'Open XML and DOCX document interchange.' }, { name: 'ProEdit.Documents.Rtf', note: 'RTF document reader and writer.' }, { name: 'ProEdit.Html', note: 'HTML conversion pipeline.' }, { name: 'ProEdit.Markdown', note: 'Markdown import and export.' }],
    install: 'dotnet add package ProEdit.OpenXml',
    usageLanguage: 'csharp',
    usage: `await using var input = File.OpenRead("contract.docx");
var document = await OpenXmlDocumentReader.ReadAsync(input);

await using var output = File.Create("contract.pdf");
await PdfDocumentWriter.WriteAsync(document, output);`,
    highlights: ['DOCX and Open XML', 'RTF, HTML, and Markdown', 'PDF, PostScript, and XPS output', 'Shared document model between formats'],
    layers: [{ label: 'Read', detail: 'A format adapter parses source content and resources.' }, { label: 'Normalize', detail: 'Format-specific constructs map into the common document model.' }, { label: 'Edit', detail: 'Applications work with one model regardless of origin.' }, { label: 'Write', detail: 'Exporters materialize the model for delivery, print, or interchange.' }],
    sourcePath: 'src/ProEdit.OpenXml', related: ['document-editor', 'printing', 'reporting']
  }),
  capability({
    projectSlug: 'proedit', slug: 'reporting', name: 'Reporting', eyebrow: 'Report design and materialization', status: 'Active',
    description: 'A modular reporting stack with RDL parsing, data binding, expressions, document composition, export, service hosting, viewer, and visual designer packages.',
    statement: 'Design reports, bind data, materialize pages, and export through one pipeline.',
    packages: [{ name: 'ProEdit.Reporting.Avalonia.Designer', note: 'Visual Avalonia report designer.' }, { name: 'ProEdit.Reporting.Avalonia.Viewer', note: 'Report preview and navigation controls.' }, { name: 'ProEdit.Reporting.Core', note: 'Framework-neutral report contracts and definitions.' }],
    install: 'dotnet add package ProEdit.Reporting.Avalonia.Designer',
    usageLanguage: 'xml',
    usage: `<reporting:ReportDesigner
    Report="{Binding Report}"
    DataSources="{Binding DataSources}" />`,
    highlights: ['RDL report definitions', 'Expressions and data sources', 'Visual designer and viewer', 'Document and export pipeline'],
    layers: [{ label: 'Define', detail: 'RDL and programmatic models describe sections, data, expressions, and visual items.' }, { label: 'Bind', detail: 'Data sources and parameters create an evaluation context.' }, { label: 'Materialize', detail: 'The report becomes a paginated document with resolved values.' }, { label: 'Deliver', detail: 'Viewer, printing, and export packages present the result.' }],
    sourcePath: 'src/ProEdit.Reporting.Core', related: ['document-editor', 'document-formats', 'printing']
  }),
  capability({
    projectSlug: 'proedit', slug: 'printing', name: 'Printing', eyebrow: 'Preview and platform output', status: 'Active',
    description: 'Document printing abstractions, Skia rasterization, Avalonia preview, and system adapters for taking paginated content to platform print services.',
    statement: 'Carry the same page model from editor preview to physical output.',
    packages: [{ name: 'ProEdit.Printing.Avalonia', note: 'Avalonia preview and print workflow UI.' }, { name: 'ProEdit.Printing.Skia', note: 'Skia page rendering for print pipelines.' }, { name: 'ProEdit.Printing.System', note: 'System print integration.' }],
    install: 'dotnet add package ProEdit.Printing.Avalonia',
    usageLanguage: 'csharp',
    usage: `var job = new PrintJob(document)
{
    Settings = new PrintSettings { Copies = 1 }
};

await printService.PrintAsync(job);`,
    highlights: ['Shared paginated source', 'Avalonia print preview', 'Skia page rendering', 'Replaceable platform services'],
    layers: [{ label: 'Document', detail: 'A paginated source supplies stable page geometry.' }, { label: 'Settings', detail: 'Paper, margins, range, copies, and destination form a print job.' }, { label: 'Render', detail: 'Skia creates device-ready page output.' }, { label: 'Dispatch', detail: 'Platform adapters hand the job to a system or custom destination.' }],
    sourcePath: 'src/ProEdit.Printing', related: ['document-editor', 'document-formats', 'reporting']
  }),
  capability({
    projectSlug: 'proedit', slug: 'collaboration', name: 'Collaboration', eyebrow: 'Shared editing sessions', status: 'Preview',
    description: 'Protocol, transport, server, editor, and UI modules for synchronizing document operations, presence, and collaborative editing workflows.',
    statement: 'Treat collaboration as a composable document service, not an editor-specific afterthought.',
    packages: [{ name: 'ProEdit.Collaboration', note: 'Collaboration model, operations, sessions, and synchronization.' }, { name: 'ProEdit.Collaboration.Transports', note: 'Transport implementations and connection contracts.' }, { name: 'ProEdit.Collaboration.Server', note: 'Server-side session coordination.' }, { name: 'ProEdit.Collaboration.UI', note: 'Presence and collaboration UI components.' }],
    install: 'dotnet add package ProEdit.Collaboration --prerelease',
    usageLanguage: 'csharp',
    usage: `var session = await collaboration.ConnectAsync(
    documentId: "proposal-42",
    user: currentUser,
    cancellationToken);

editor.AttachCollaboration(session);`,
    highlights: ['Operation-based synchronization', 'Presence and participant state', 'Transport-neutral sessions', 'Server and UI packages'],
    layers: [{ label: 'Operation', detail: 'Document changes are represented as explicit collaboration messages.' }, { label: 'Session', detail: 'Participants, presence, versions, and local state are coordinated.' }, { label: 'Transport', detail: 'Connections move protocol messages without owning editor logic.' }, { label: 'Experience', detail: 'Editor and UI packages surface remote changes and presence.' }],
    sourcePath: 'src/ProEdit.Collaboration', related: ['document-editor', 'cross-platform-controls', 'automation']
  }),
  capability({
    projectSlug: 'proedit', slug: 'cross-platform-controls', name: 'Cross-platform Controls', eyebrow: 'Avalonia, Uno, and MAUI hosts', status: 'Preview',
    description: 'Shared Skia controls project the same document, layout, rendering, and editing core into Avalonia, Uno Platform, and .NET MAUI applications.',
    statement: 'One document engine, hosted through the XAML stack that fits the application.',
    packages: [{ name: 'ProEdit.Controls.Skia.Avalonia', note: 'Avalonia document controls.' }, { name: 'ProEdit.Controls.Skia.Uno', note: 'Uno Platform document controls.' }, { name: 'ProEdit.Controls.Skia.Maui', note: '.NET MAUI document controls.' }],
    install: 'dotnet add package ProEdit.Controls.Skia.Uno --prerelease',
    usageLanguage: 'xml',
    usage: `<controls:ProEditDocumentView
    Document="{x:Bind ViewModel.Document}"
    Zoom="1.0" />`,
    highlights: ['Shared Skia presentation core', 'Avalonia editor integration', 'Uno Platform controls', '.NET MAUI controls'],
    layers: [{ label: 'Core', detail: 'Documents, layout, editing, and rendering remain UI-framework neutral.' }, { label: 'Shared control', detail: 'The Skia control layer centralizes viewport and document interaction.' }, { label: 'Adapter', detail: 'Framework packages map properties, input, lifecycle, and XAML.' }, { label: 'Application', detail: 'Each host composes platform navigation, storage, and services.' }],
    sourcePath: 'src/ProEdit.Controls.Skia', related: ['document-editor', 'collaboration', 'automation']
  }),
  capability({
    projectSlug: 'proedit', slug: 'automation', name: 'Macros & MCP', eyebrow: 'Programmable document workflows', status: 'Preview',
    description: 'VBA-compatible macro runtime and Model Context Protocol tools expose document and reporting operations to scripts, automation, and AI agents.',
    statement: 'Make document capabilities callable beyond the editor surface.',
    packages: [{ name: 'ProEdit.Vba.Runtime', note: 'Macro runtime and document automation bridge.' }, { name: 'ProEdit.Mcp.Documents', note: 'MCP tools for document operations.' }, { name: 'ProEdit.Mcp.Reporting', note: 'MCP tools for reporting workflows.' }],
    install: 'dotnet add package ProEdit.Mcp.Documents --prerelease',
    usageLanguage: 'csharp',
    usage: `services.AddProEditDocuments();
services.AddProEditMcpDocuments();

// Expose scoped document commands through the MCP host.
await app.RunAsync();`,
    highlights: ['Document macro runtime', 'VBA compatibility direction', 'MCP document tools', 'MCP reporting tools'],
    layers: [{ label: 'Command', detail: 'Document and report operations expose a controlled automation surface.' }, { label: 'Runtime', detail: 'Macros or MCP handlers resolve commands against scoped services.' }, { label: 'Document', detail: 'Automation operates on the same model used by editors and reports.' }, { label: 'Policy', detail: 'Hosts control files, tools, permissions, and execution boundaries.' }],
    sourcePath: 'src/ProEdit.Mcp', related: ['document-editor', 'reporting', 'collaboration']
  }),

  capability({
    projectSlug: 'svg-skia', slug: 'renderer', name: 'SVG Renderer', eyebrow: 'SVG to Skia pipeline', status: 'Stable',
    description: 'The core SVG parser and renderer turns standards-oriented SVG documents into reusable Skia pictures and exportable raster or vector output.',
    statement: 'Load once, render consistently, and keep the output independent from a UI framework.',
    packages: [{ name: 'Svg.Skia', note: 'SVG loading, model conversion, Skia picture generation, and export.' }],
    install: 'dotnet add package Svg.Skia',
    usageLanguage: 'csharp',
    usage: `using var svg = new SKSvg();
svg.Load("artwork.svg");

canvas.DrawPicture(svg.Picture);`,
    highlights: ['SVG 1.1 and static SVG 2 coverage', 'Reusable SKPicture output', 'Files, streams, and XML sources', 'PNG, PDF, and picture workflows'],
    layers: [{ label: 'Parse', detail: 'SVG XML becomes a typed document model.' }, { label: 'Resolve', detail: 'Styles, references, units, geometry, text, and paint are normalized.' }, { label: 'Record', detail: 'Skia commands are captured into a reusable picture.' }, { label: 'Present', detail: 'Applications draw, transform, cache, or export the picture.' }],
    sourcePath: 'src/Svg.Skia', related: ['avalonia-controls', 'source-generation', 'scene-animation']
  }),
  capability({
    projectSlug: 'svg-skia', slug: 'avalonia-controls', name: 'Avalonia SVG Controls', eyebrow: 'SVG in Avalonia XAML', status: 'Stable',
    description: 'Ready-to-use Avalonia controls load SVG sources, participate in layout and styling, and render through the Svg.Skia pipeline.',
    statement: 'Use SVG assets like first-class Avalonia content.',
    packages: [{ name: 'Svg.Controls.Skia.Avalonia', note: 'Skia-backed SVG controls for Avalonia.' }, { name: 'Svg.Controls.Avalonia', note: 'Avalonia SVG image control.' }, { name: 'Skia.Controls.Avalonia', note: 'Reusable Skia drawing controls.' }],
    install: 'dotnet add package Svg.Controls.Skia.Avalonia',
    usageLanguage: 'xml',
    usage: `<svg:Svg Source="avares://MyApp/Assets/logo.svg"
         Width="160"
         Stretch="Uniform" />`,
    highlights: ['Asset and file URI sources', 'Normal Avalonia layout behavior', 'Themeable XAML usage', 'Shared renderer underneath'],
    layers: [{ label: 'Source', detail: 'Properties accept application assets, files, streams, or prepared SVG objects.' }, { label: 'Load', detail: 'The control owns source changes and document lifetime.' }, { label: 'Layout', detail: 'Stretch, alignment, and viewport rules map SVG bounds into Avalonia layout.' }, { label: 'Draw', detail: 'Svg.Skia records and paints the final picture.' }],
    sourcePath: 'src/Svg.Controls.Skia.Avalonia', related: ['renderer', 'svgml', 'editor']
  }),
  capability({
    projectSlug: 'svg-skia', slug: 'cross-platform-controls', name: 'Uno & MAUI Controls', eyebrow: 'Cross-platform XAML hosts', status: 'Preview',
    description: 'Uno Platform and .NET MAUI packages host Svg.Skia through native Skia canvas controls while preserving a familiar source-and-stretch API.',
    statement: 'Carry the same SVG rendering core into Uno and MAUI applications.',
    packages: [{ name: 'Svg.Controls.Skia.Uno', note: 'Uno Platform controls backed by SKCanvasElement.' }, { name: 'Svg.Controls.Skia.Maui', note: '.NET MAUI controls backed by SKCanvasView.' }],
    install: 'dotnet add package Svg.Controls.Skia.Uno --prerelease',
    usageLanguage: 'xml',
    usage: `<svg:SvgView Source="ms-appx:///Assets/logo.svg"
             Stretch="Uniform"
             Width="160" />`,
    highlights: ['Uno Platform support', '.NET MAUI support', 'Shared Svg.Skia renderer', 'Native XAML host integration'],
    layers: [{ label: 'SVG core', detail: 'Parsing and Skia recording stay shared.' }, { label: 'Canvas', detail: 'Each framework supplies its native Skia drawing surface.' }, { label: 'Properties', detail: 'Adapters map source, stretch, sizing, and invalidation.' }, { label: 'Targets', detail: 'Applications deploy through Uno or MAUI platform heads.' }],
    sourcePath: 'src/Svg.Controls.Skia.Uno', related: ['renderer', 'svgml', 'avalonia-controls']
  }),
  capability({
    projectSlug: 'svg-skia', slug: 'source-generation', name: 'Source Generation', eyebrow: 'Compile SVG into code', status: 'Stable',
    description: 'Code generation packages transform SVG assets into strongly referenced Skia drawing code at build time, reducing runtime parsing and asset lookup.',
    statement: 'Turn artwork into generated drawing code before the application starts.',
    packages: [{ name: 'Svg.SourceGenerator.Skia', note: 'Roslyn source generator for SVG assets.' }, { name: 'Svg.CodeGen.Skia', note: 'Reusable SVG-to-C# code generation engine.' }],
    install: 'dotnet add package Svg.SourceGenerator.Skia',
    usageLanguage: 'xml',
    usage: `<ItemGroup>
  <AdditionalFiles Include="Assets/**/*.svg" />
</ItemGroup>`,
    highlights: ['Build-time SVG processing', 'Generated C# drawing code', 'Strong asset identity', 'No runtime XML parse for generated assets'],
    layers: [{ label: 'Discover', detail: 'MSBuild AdditionalFiles identify SVG assets.' }, { label: 'Convert', detail: 'The code generator resolves SVG features into Skia operations.' }, { label: 'Emit', detail: 'The source generator adds typed C# to the compilation.' }, { label: 'Draw', detail: 'Application code invokes the generated picture path directly.' }],
    sourcePath: 'src/Svg.SourceGenerator.Skia', related: ['renderer', 'avalonia-controls']
  }),
  capability({
    projectSlug: 'svg-skia', slug: 'scene-animation', name: 'Scene Graph & Animation', eyebrow: 'Retained and time-based SVG', status: 'Preview',
    description: 'A retained SVG scene graph and shared animation runtime separate document state, playback, invalidation, and host rendering.',
    statement: 'Move beyond static pictures into inspectable, time-varying SVG scenes.',
    packages: [{ name: 'Svg.SceneGraph', note: 'Retained SVG scene nodes and traversal.' }, { name: 'Svg.Animation', note: 'Animation timeline, playback, and host contracts.' }],
    install: 'dotnet add package Svg.SceneGraph --prerelease\ndotnet add package Svg.Animation --prerelease',
    usageLanguage: 'csharp',
    usage: `var scene = SvgScene.Load(document);
var player = new SvgAnimationPlayer(scene);

player.Seek(TimeSpan.FromSeconds(1.5));
player.Render(canvas);`,
    highlights: ['Retained SVG node graph', 'Shared animation timeline', 'Host-controlled playback', 'Targeted invalidation and rendering'],
    layers: [{ label: 'Scene', detail: 'Document elements become retained, addressable nodes.' }, { label: 'Timeline', detail: 'Animation tracks resolve values at a requested time.' }, { label: 'Invalidate', detail: 'Changed nodes mark the minimum scene region for update.' }, { label: 'Host', detail: 'UI or headless hosts control clocks and presentation.' }],
    sourcePath: 'src/Svg.SceneGraph', related: ['renderer', 'editor', 'svgml']
  }),
  capability({
    projectSlug: 'svg-skia', slug: 'editor', name: 'SVG Editor', eyebrow: 'Reusable authoring stack', status: 'Preview',
    description: 'Editor core, SVG mutation services, Skia interaction, Avalonia views, and workspace composition form a reusable visual SVG authoring system.',
    statement: 'Inspect and reshape the SVG document through a modular editor stack.',
    packages: [{ name: 'Svg.Editor.Core', note: 'Editor sessions, state, commands, and selection.' }, { name: 'Svg.Editor.Svg', note: 'SVG document mutation services.' }, { name: 'Svg.Editor.Skia', note: 'Rendering, hit testing, and interaction.' }, { name: 'Svg.Editor.Avalonia', note: 'Reusable Avalonia editor views.' }, { name: 'Svg.Editor.Skia.Avalonia', note: 'Composed Avalonia editor workspace.' }],
    install: 'dotnet add package Svg.Editor.Skia.Avalonia --prerelease',
    usageLanguage: 'xml',
    usage: `<editor:SvgEditorView
    Document="{Binding Document}"
    SelectedElement="{Binding Selection}" />`,
    highlights: ['Command-based document mutation', 'Visual selection and hit testing', 'Reusable Avalonia views', 'Layered editor architecture'],
    layers: [{ label: 'Session', detail: 'Editor state, selection, history, and commands are framework neutral.' }, { label: 'Document', detail: 'Mutation services edit the SVG model without string surgery.' }, { label: 'Interaction', detail: 'Skia helpers map geometry to hit tests and handles.' }, { label: 'Workspace', detail: 'Avalonia views compose canvas, tools, properties, and structure.' }],
    sourcePath: 'src/Svg.Editor.Core', related: ['renderer', 'avalonia-controls', 'scene-animation']
  }),
  capability({
    projectSlug: 'svg-skia', slug: 'svgml', name: 'SvgML', eyebrow: 'Inline SVG in XAML', status: 'Preview',
    description: 'SvgML packages let applications author SVG elements directly in Avalonia, Uno Platform, and .NET MAUI XAML while rendering through Svg.Skia.',
    statement: 'Compose vector artwork as XAML elements instead of opaque asset files.',
    packages: [{ name: 'SvgML.Avalonia', note: 'Inline SVG element authoring for Avalonia.' }, { name: 'SvgML.Uno', note: 'Inline SVG element authoring for Uno Platform.' }, { name: 'SvgML.Maui', note: 'Inline SVG element authoring for .NET MAUI.' }],
    install: 'dotnet add package SvgML.Avalonia --prerelease',
    usageLanguage: 'xml',
    usage: `<svgml:Svg Width="120" Height="120" ViewBox="0 0 100 100">
  <svgml:Circle Cx="50" Cy="50" R="42" Fill="#8ea2ff" />
  <svgml:Path Data="M30,52 L45,67 L72,35" Stroke="White" />
</svgml:Svg>`,
    highlights: ['Inline SVG element trees', 'Avalonia, Uno, and MAUI packages', 'Bindable XAML properties', 'Svg.Skia rendering backend'],
    layers: [{ label: 'Markup', detail: 'SVG elements and attributes are expressed through XAML objects.' }, { label: 'Bind', detail: 'Normal framework properties update vector content.' }, { label: 'Model', detail: 'The object tree maps into a shared SVG representation.' }, { label: 'Render', detail: 'Svg.Skia produces the final drawing.' }],
    sourcePath: 'src/SvgML.Avalonia', related: ['renderer', 'avalonia-controls', 'cross-platform-controls']
  }),

  capability({
    projectSlug: 'dock', slug: 'workspace', name: 'Dock Workspace', eyebrow: 'Documents, tools, and floating windows', status: 'Stable',
    description: 'Avalonia controls present model-driven document and tool layouts with splits, tabs, drag/drop docking, floating windows, and active-item tracking.',
    statement: 'Compose an IDE-scale workspace from a serializable layout model.',
    packages: [{ name: 'Dock.Avalonia', note: 'Dock controls, presenters, drag/drop, and window integration.' }],
    install: 'dotnet add package Dock.Avalonia',
    usageLanguage: 'xml', usage: `<dock:DockControl Layout="{Binding Layout}"
                  Factory="{Binding Factory}" />`,
    highlights: ['Documents and tool panes', 'Split and tab layouts', 'Drag/drop and floating windows', 'Model-driven active item state'],
    layers: [{ label: 'Layout', detail: 'Docks, documents, and tools describe the workspace tree.' }, { label: 'Factory', detail: 'Application policy creates layouts, commands, windows, and contexts.' }, { label: 'Presenter', detail: 'Avalonia controls select templates for each model node.' }, { label: 'Interaction', detail: 'Drag, split, float, close, pin, and activate operations update the model.' }],
    sourcePath: 'src/Dock.Avalonia', related: ['models', 'themes', 'persistence']
  }),
  capability({
    projectSlug: 'dock', slug: 'models', name: 'Model Integrations', eyebrow: 'Choose the application architecture', status: 'Stable',
    description: 'A framework-neutral model plus MVVM, ReactiveUI, Prism, INPC, ReactiveProperty, and Caliburn.Micro implementations lets applications adopt Dock without changing architecture.',
    statement: 'Keep docking behavior consistent while choosing the notification and composition model.',
    packages: [{ name: 'Dock.Model', note: 'Core interfaces and model contracts.' }, { name: 'Dock.Model.Mvvm', note: 'General-purpose MVVM implementation.' }, { name: 'Dock.Model.ReactiveUI', note: 'ReactiveUI implementation and services.' }, { name: 'Dock.Model.Prism', note: 'Prism-oriented model implementation.' }, { name: 'Dock.Model.Inpc', note: 'INPC model implementation.' }],
    install: 'dotnet add package Dock.Model.Mvvm',
    usageLanguage: 'csharp',
    usage: `var factory = new DockFactory();
var layout = factory.CreateLayout();

factory.InitLayout(layout);
Layout = layout;`,
    highlights: ['Framework-neutral contracts', 'MVVM and INPC implementations', 'ReactiveUI and Prism integrations', 'Replaceable factory policy'],
    layers: [{ label: 'Contracts', detail: 'Interfaces define docks, dockables, factories, commands, and lifecycle.' }, { label: 'Implementation', detail: 'A chosen package supplies notification and base classes.' }, { label: 'Application', detail: 'The factory creates domain-specific documents and tools.' }, { label: 'View', detail: 'Dock.Avalonia consumes the common contracts.' }],
    sourcePath: 'src/Dock.Model', related: ['workspace', 'persistence', 'advanced-controls']
  }),
  capability({
    projectSlug: 'dock', slug: 'themes', name: 'Themes', eyebrow: 'Fluent, Simple, and browser styling', status: 'Stable',
    description: 'Dedicated theme packages supply complete control themes, resources, indicators, floating windows, and density choices for different application shells.',
    statement: 'Change the workspace language without changing its layout model.',
    packages: [{ name: 'Dock.Avalonia.Themes.Fluent', note: 'Fluent Dock theme.' }, { name: 'Dock.Avalonia.Themes.Simple', note: 'Simple Avalonia theme integration.' }, { name: 'Dock.Avalonia.Themes.Browser', note: 'Browser-oriented Dock theme.' }],
    install: 'dotnet add package Dock.Avalonia.Themes.Fluent',
    usageLanguage: 'xml',
    usage: `<Application.Styles>
  <FluentTheme />
  <dock:DockFluentTheme />
</Application.Styles>`,
    highlights: ['Complete control themes', 'Fluent and Simple variants', 'Drag indicator styling', 'Application-level resource composition'],
    layers: [{ label: 'Tokens', detail: 'Theme resources define color, spacing, typography, and state.' }, { label: 'Controls', detail: 'Templates cover tabs, presenters, splitters, indicators, and windows.' }, { label: 'Host', detail: 'The application includes one Dock theme beside its Avalonia theme.' }, { label: 'Override', detail: 'Normal resource and selector rules support product-specific styling.' }],
    sourcePath: 'src/Dock.Avalonia.Themes.Fluent', related: ['workspace', 'advanced-controls']
  }),
  capability({
    projectSlug: 'dock', slug: 'persistence', name: 'Layout Persistence', eyebrow: 'Save and restore workspaces', status: 'Stable',
    description: 'Serializer packages preserve Dock layouts through System.Text.Json, Newtonsoft.Json, XML, YAML, and Protobuf while keeping persistence outside the UI layer.',
    statement: 'Let users return to the workspace they arranged.',
    packages: [{ name: 'Dock.Serializer.SystemTextJson', note: 'System.Text.Json layout serialization.' }, { name: 'Dock.Serializer.Newtonsoft', note: 'Newtonsoft.Json layout serialization.' }, { name: 'Dock.Serializer.Xml', note: 'XML layout serialization.' }, { name: 'Dock.Serializer.Yaml', note: 'YAML layout serialization.' }, { name: 'Dock.Serializer.Protobuf', note: 'Protobuf layout serialization.' }],
    install: 'dotnet add package Dock.Serializer.SystemTextJson',
    usageLanguage: 'csharp',
    usage: `var serializer = new DockSerializer();
await using var stream = File.Create("layout.json");
serializer.Save(stream, Layout);

// Restore and reinitialize with the application factory.`,
    highlights: ['Five serializer choices', 'Model-only persistence boundary', 'User workspace restoration', 'Application-controlled rehydration'],
    layers: [{ label: 'Capture', detail: 'The current model tree supplies dockable identity and layout state.' }, { label: 'Serialize', detail: 'A selected package converts the graph to the chosen wire format.' }, { label: 'Store', detail: 'Applications own files, profiles, cloud state, and versioning.' }, { label: 'Restore', detail: 'The factory reconnects services, contexts, and runtime-only state.' }],
    sourcePath: 'src/Dock.Serializer.SystemTextJson', related: ['workspace', 'models']
  }),
  capability({
    projectSlug: 'dock', slug: 'advanced-controls', name: 'Advanced Controls & Diagnostics', eyebrow: 'Scale complex workspaces', status: 'Preview',
    description: 'Recycling, deferred content, proportional layout, markup extensions, settings, and diagnostic packages address large and highly dynamic Dock applications.',
    statement: 'Tune lifetime, layout, and observability when a workspace grows.',
    packages: [{ name: 'Dock.Controls.Recycling', note: 'Recycling content controls for docked views.' }, { name: 'Dock.Controls.DeferredContentControl', note: 'Deferred content creation.' }, { name: 'Dock.Controls.ProportionalStackPanel', note: 'Proportional split layout panel.' }, { name: 'Dock.Avalonia.Diagnostics', note: 'Dock runtime diagnostics.' }, { name: 'Dock.Settings', note: 'Workspace settings infrastructure.' }],
    install: 'dotnet add package Dock.Controls.Recycling --prerelease',
    usageLanguage: 'xml',
    usage: `<dock:RecyclingContentControl
    Content="{Binding ActiveDockable}"
    ContentTemplate="{Binding DockableTemplate}" />`,
    highlights: ['Deferred view creation', 'Content recycling', 'Proportional layout', 'Runtime diagnostics and settings'],
    layers: [{ label: 'Observe', detail: 'Diagnostics identify model, presenter, and lifecycle behavior.' }, { label: 'Defer', detail: 'Content can be created only when a dockable becomes visible.' }, { label: 'Recycle', detail: 'Reusable hosts reduce churn in frequently switched workspaces.' }, { label: 'Tune', detail: 'Panels and settings refine sizing and application policy.' }],
    sourcePath: 'src/Dock.Controls.Recycling', related: ['workspace', 'models', 'themes']
  }),

  capability({
    projectSlug: 'htmlml', slug: 'native-markup', name: 'Native HTML Markup', eyebrow: 'HTML semantics mapped to Avalonia', status: 'Preview',
    description: 'HtmlML provides HTML-shaped XAML elements for headings, text, lists, navigation, sections, media, links, scripts, styles, and Canvas while creating normal native Avalonia controls.',
    statement: 'Use familiar document semantics without putting a browser inside the application.',
    packages: [{ name: 'HtmlML', note: 'HTML-like Avalonia elements, document structure, styling, scripts, and Canvas.', url: 'https://github.com/wieslawsoltes/HtmlML/tree/main/src/HtmlML' }],
    install: 'git clone https://github.com/wieslawsoltes/HtmlML.git\n# Add a ProjectReference to src/HtmlML/HtmlML.csproj.',
    usageLanguage: 'xml',
    usage: `<html xmlns="https://github.com/avaloniaui"
      xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
  <body class="app-body">
    <nav><a href="#work">Work</a></nav>
    <section class="hero">
      <h1>Native Avalonia. Familiar markup.</h1>
      <p>No embedded browser required.</p>
    </section>
  </body>
</html>`,
    highlights: ['30+ HTML-shaped elements', 'Native Avalonia control output', 'Document, semantic, and media tags', 'Extensible element base classes'],
    layers: [{ label: 'Declare', detail: 'HTML-shaped tags express document and application structure in XAML.' }, { label: 'Create', detail: 'Each element maps to an Avalonia control with normal properties and layout.' }, { label: 'Compose', detail: 'Elements participate in native trees, resources, input, and lifecycle.' }, { label: 'Extend', detail: 'Applications derive new elements or register domain-specific tags.' }],
    sourcePath: 'src/HtmlML', docsPath: 'src/HtmlML/README.md', related: ['css-styling', 'javascript-runtime', 'canvas-playground']
  }),
  capability({
    projectSlug: 'htmlml', slug: 'css-styling', name: 'CSS-inspired Styling', eyebrow: 'Web-shaped values, Avalonia properties', status: 'Preview',
    description: 'Stylesheet links, style elements, classes, inline declarations, selectors, and value converters translate familiar CSS-oriented authoring into Avalonia styling and properties.',
    statement: 'Keep the vocabulary familiar while preserving the native styling system underneath.',
    packages: [{ name: 'HtmlML', note: 'CSS converter, runtime style applier, classes, links, style tags, and inline declarations.', url: 'https://github.com/wieslawsoltes/HtmlML/tree/main/src/HtmlML/Css' }],
    install: 'git clone https://github.com/wieslawsoltes/HtmlML.git\n# Reference src/HtmlML/HtmlML.csproj and add a stylesheet asset.',
    usageLanguage: 'xml',
    usage: `<head>
  <link rel="stylesheet"
        href="avares://Demo/Assets/site.css"
        type="text/css" />
</head>
<body class="app-body">
  <section class="card" style="padding: 24px">
    <h2>Styled through familiar values</h2>
  </section>
</body>`,
    highlights: ['Stylesheet and style elements', 'Classes and inline declarations', 'CSS-to-Avalonia value conversion', 'Runtime style application'],
    layers: [{ label: 'Load', detail: 'Link and style elements resolve external or inline declarations.' }, { label: 'Match', detail: 'Element names, classes, and document structure determine applicable rules.' }, { label: 'Convert', detail: 'CSS-inspired values map into Avalonia property types.' }, { label: 'Apply', detail: 'The runtime updates native control classes and properties.' }],
    sourcePath: 'src/HtmlML/Css', related: ['native-markup', 'javascript-runtime']
  }),
  capability({
    projectSlug: 'htmlml', slug: 'javascript-runtime', name: 'JavaScript.Avalonia', eyebrow: 'Script native UI without a WebView', status: 'Preview',
    description: 'A standalone Jint-powered runtime exposes window, document, DOM queries and mutation, routed events, timers, animation frames, CommonJS modules, HTTP/assets, and embedded TypeScript transpilation to any Avalonia TopLevel.',
    statement: 'Give native Avalonia controls a browser-like scripting model while keeping the host fully managed.',
    packages: [{ name: 'JavaScript.Avalonia', note: 'Jint host, DOM bridge, event propagation, modules, TypeScript, timers, animation, and Canvas.', url: 'https://github.com/wieslawsoltes/HtmlML/tree/main/src/JavaScript.Avalonia' }],
    install: 'git clone https://github.com/wieslawsoltes/HtmlML.git\n# Add a ProjectReference to src/JavaScript.Avalonia/JavaScript.Avalonia.csproj.',
    usageLanguage: 'csharp',
    usage: `var host = new JintAvaloniaHost(this);
host.ExecuteScriptText("""
const button = document.getElementById('RunButton');
const output = document.getElementById('OutputText');

button.addEventListener('click', () => {
  output.textContent = 'Handled from JavaScript';
});
""");`,
    highlights: ['DOM queries and native tree mutation', 'Capture, target, and bubble event phases', 'TypeScript and CommonJS modules', 'Timers and requestAnimationFrame'],
    layers: [{ label: 'Host', detail: 'JintAvaloniaHost owns engine lifetime and binds an Avalonia TopLevel.' }, { label: 'Document', detail: 'DOM wrappers traverse, create, mutate, and identify native controls.' }, { label: 'Events', detail: 'Avalonia routed events become DOM-style capture, target, and bubble callbacks.' }, { label: 'Runtime', detail: 'Modules, assets, TypeScript, timers, animation, and host functions support complete scripts.' }],
    sourcePath: 'src/JavaScript.Avalonia', docsPath: 'src/JavaScript.Avalonia/README.md', related: ['native-markup', 'canvas-playground', 'css-styling']
  }),
  capability({
    projectSlug: 'htmlml', slug: 'canvas-playground', name: 'Canvas & Playground', eyebrow: 'Scriptable drawing and live experiments', status: 'Preview',
    description: 'Canvas 2D, WebGL-oriented rendering, pointer events, animation frames, editable scripts, XAML preview, file bridges, console output, and TypeScript demos form an immediate native scripting laboratory.',
    statement: 'Sketch, animate, and iterate on native scripted UI in one feedback loop.',
    packages: [{ name: 'HtmlML Canvas', note: 'HTML-shaped canvas element and scripting bridge.', url: 'https://github.com/wieslawsoltes/HtmlML/tree/main/src/HtmlML/Html/canvas.cs' }, { name: 'JavaScript Playground', note: 'Interactive Avalonia host with source, preview, scripts, and console.', url: 'https://github.com/wieslawsoltes/HtmlML/tree/main/samples/JavaScriptPlayground' }],
    install: 'git clone https://github.com/wieslawsoltes/HtmlML.git\ncd HtmlML\ndotnet run --project samples/JavaScriptPlayground/JavaScriptPlayground.csproj',
    usageLanguage: 'javascript',
    usage: `const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');

ctx.strokeStyle = '#ff8f72';
canvas.addEventListener('pointermove', event => {
  ctx.lineTo(event.x, event.y);
  ctx.stroke();
});`,
    highlights: ['Canvas 2D drawing surface', 'WebGL-oriented rendering context', 'Live JavaScript and TypeScript demos', 'XAML preview, files, and console bridges'],
    layers: [{ label: 'Edit', detail: 'The playground loads JavaScript, TypeScript, XAML, and supporting assets.' }, { label: 'Execute', detail: 'The embedded runtime transpiles modules and runs them against the live TopLevel.' }, { label: 'Draw', detail: 'Canvas contexts record paths, paint, text, transforms, or GPU-oriented frames.' }, { label: 'Inspect', detail: 'Preview and console surfaces expose visible output and runtime diagnostics.' }],
    sourcePath: 'samples/JavaScriptPlayground', related: ['javascript-runtime', 'native-markup']
  }),

  capability({
    projectSlug: 'dxf-parser', slug: 'parser-tree', name: 'DXF Parser & Tree', eyebrow: 'Group codes into stable structure', status: 'Active',
    description: 'An iterative parser converts DXF code/value pairs into a hierarchical entity tree with handles, parent metadata, container boundaries, preserved ordering, synthetic end markers, and round-trip serialization.',
    statement: 'See the drawing as explicit, navigable file structure.',
    packages: [{ name: 'DxfParser', note: 'Standalone parser, tree grouping, lookup, and serialization component.', url: 'https://github.com/wieslawsoltes/DxfParser/blob/main/components/dxf-parser.js' }],
    install: 'git clone https://github.com/wieslawsoltes/DxfParser.git\n# Load components/utils.js and components/dxf-parser.js.',
    usageLanguage: 'javascript',
    usage: `const parser = new DxfParser();
const nodes = parser.parse(dxfText);

const layerTable = parser.findNodeByIdIterative(nodes, nodeId);
const roundTrip = parser.serializeTree(nodes);`,
    highlights: ['Iterative O(n) grouping', 'Handles and parent metadata', 'Malformed-container recovery', 'Round-trip DXF serialization'],
    layers: [{ label: 'Tokenize', detail: 'Alternating code and value lines become ordered DXF tags.' }, { label: 'Group', detail: 'An explicit stack builds sections, tables, blocks, objects, and entity children.' }, { label: 'Repair', detail: 'Missing container terminators produce traceable synthetic end nodes.' }, { label: 'Serialize', detail: 'The stored order and hierarchy emit back into DXF text.' }],
    sourcePath: 'components/dxf-parser.js', docsPath: 'docs/dxf-parser.md', related: ['inspection-diff', 'rendering', 'editor-export']
  }),
  capability({
    projectSlug: 'dxf-parser', slug: 'inspection-diff', name: 'Inspection, Diagnostics & Diff', eyebrow: 'Understand and compare drawings', status: 'Active',
    description: 'Virtualized tree and batch grids expose tags, codes, sizes, handles, classes, blocks, materials, fonts, proxy objects, diagnostics, statistics, filters, history, and side-by-side structural differences.',
    statement: 'Turn opaque CAD files into inspectable engineering evidence.',
    packages: [{ name: 'DXF Inspection Workbench', note: 'Tree grids, diagnostics, statistics, navigation, batch data, and comparison UI.', url: 'https://github.com/wieslawsoltes/DxfParser/tree/main/components' }],
    install: 'git clone https://github.com/wieslawsoltes/DxfParser.git\ncd DxfParser\n# Serve index.html from a local static web server.',
    usageLanguage: 'javascript',
    usage: `const left = parser.parse(leftDxf);
const right = parser.parse(rightDxf);

const diff = TreeDiffEngine.compare(left, right);
renderTreeDiff(diff, leftPanel, rightPanel);`,
    highlights: ['Virtualized hierarchical tree grids', 'Handle, dependency, and object diagnostics', 'Side-by-side structural diff', 'Batch processing and exports'],
    layers: [{ label: 'Index', detail: 'Handles, types, tables, objects, and dependencies become searchable indexes.' }, { label: 'Diagnose', detail: 'Rules surface malformed structure, unsupported content, and drawing metadata.' }, { label: 'Compare', detail: 'Two trees align additions, removals, and changed values.' }, { label: 'Present', detail: 'Virtualized grids, overlays, navigation, and exports make results actionable.' }],
    sourcePath: 'components/tree-diff-engine.js', related: ['parser-tree', 'rendering', 'editor-export']
  }),
  capability({
    projectSlug: 'dxf-parser', slug: 'rendering', name: 'DXF Rendering', eyebrow: 'Scene graph to Canvas and WebGL', status: 'Preview',
    description: 'Document builders, entity adapters, tessellation, text layout, materials, plot styles, layers, blocks, hatches, dimensions, overlays, and retained scene nodes drive Canvas and WebGL-oriented rendering surfaces.',
    statement: 'Connect file structure to deterministic visible geometry.',
    packages: [{ name: 'DxfRendering', note: 'Document builder, scene graph, entities, renderer, text, tessellation, overlays, Canvas, and WebGL surfaces.', url: 'https://github.com/wieslawsoltes/DxfParser/tree/main/components' }],
    install: 'git clone https://github.com/wieslawsoltes/DxfParser.git\n# Load dist/dxf-rendering.global.js after the parser.',
    usageLanguage: 'javascript',
    usage: `const document = DxfRendering.buildDocument(nodes);
const scene = DxfRendering.buildScene(document);

const renderer = new DxfRendering.Renderer(canvas);
renderer.setScene(scene);
renderer.render();`,
    highlights: ['Retained rendering scene graph', 'Canvas and WebGL-oriented surfaces', 'Text, hatches, dimensions, blocks, and layers', 'SVG and JSON frame regression baselines'],
    layers: [{ label: 'Build', detail: 'Parsed sections, tables, blocks, and entities become a normalized rendering document.' }, { label: 'Scene', detail: 'Retained nodes carry geometry, styles, text, materials, ordering, and pick metadata.' }, { label: 'Surface', detail: 'Canvas or WebGL-oriented adapters draw the resolved scene.' }, { label: 'Verify', detail: 'Frame JSON and SVG outputs compare against checked-in baselines.' }],
    sourcePath: 'components/rendering-renderer.js', docsPath: 'docs/dxf-rendering-plan.md', related: ['parser-tree', 'inspection-diff', 'editor-export']
  }),
  capability({
    projectSlug: 'dxf-parser', slug: 'editor-export', name: 'Editor & Export', eyebrow: 'Change and round-trip drawings', status: 'Preview',
    description: 'A lightweight browser editor composes selection, geometry mutation, viewport tools, property editing, file opening, drag/drop, history, save, and DXF serialization around the shared parser and rendering stack.',
    statement: 'Move from forensic inspection into controlled drawing changes.',
    packages: [{ name: 'DxfEditor', note: 'Browser-native editing adapter, application shell, and export workflow.', url: 'https://github.com/wieslawsoltes/DxfParser/tree/main/editor' }],
    install: 'git clone https://github.com/wieslawsoltes/DxfParser.git\ncd DxfParser\n# Serve editor/index.html from a local static web server.',
    usageLanguage: 'javascript',
    usage: `const editor = await DxfEditor.open(file);
editor.selection.set(activeEntity);
editor.commands.move(activeEntity, { x: 20, y: -8 });

const output = editor.serialize();
download('edited.dxf', output);`,
    highlights: ['Shared parser and renderer', 'Selection and geometry commands', 'Properties, history, and file workflows', 'DXF serialization and download'],
    layers: [{ label: 'Open', detail: 'Files and drag/drop feed the shared parse and render pipeline.' }, { label: 'Select', detail: 'Scene hit testing resolves visible geometry back to document entities.' }, { label: 'Edit', detail: 'Commands mutate geometry and properties with history tracking.' }, { label: 'Export', detail: 'Scene changes reconcile with the document tree and serialize to DXF.' }],
    sourcePath: 'editor', related: ['parser-tree', 'rendering', 'inspection-diff']
  }),

  capability({
    projectSlug: 'cdp', slug: 'test-studio', name: 'Test Studio', eyebrow: 'Visual native UI test authoring', status: 'Preview',
    description: 'A complete test-design workspace records interactions, synchronizes step lists with YAML, offers live selector IntelliSense and assertion inference, composes visual node flows, launches apps, runs suites, and presents screenshots, logs, telemetry, and reports.',
    statement: 'Author serious native UI tests visually, declaratively, or both.',
    packages: [{ name: 'Chrome.DevTools.Inspector', note: 'Desktop inspector and integrated Test Studio global tool.' }, { name: 'Chrome.DevTools.Inspector.Shared', note: 'Test Studio models, flow execution, recorder, telemetry, and workspace composition.' }, { name: 'Chrome.DevTools.Inspector.Controls', note: 'Reusable editor, chart, diff, overlay, and diagnostics controls.' }],
    install: 'dotnet tool install --global Chrome.DevTools.Inspector --prerelease\ncdp-inspector',
    usageLanguage: 'bash',
    usage: `# Connect Test Studio to the target CDP endpoint.
cdp-inspector --url http://127.0.0.1:9222

# Record a flow, infer assertions, then run it
# interactively or export the .flow.yaml file.`,
    highlights: ['Recording and visual node flows', 'Synchronized YAML with 50+ commands', 'Live selectors and assertion inference', 'Screenshots, telemetry, suites, and reports'],
    layers: [{ label: 'Record', detail: 'Pointer and focus events become stable selector-driven steps.' }, { label: 'Author', detail: 'Step list, YAML editor, IntelliSense, environments, and node graph stay synchronized.' }, { label: 'Execute', detail: 'Play, pause, stop, step, reusable flows, loops, scripts, and app launch drive the target.' }, { label: 'Evidence', detail: 'Assertions, screenshots, logs, CPU, memory, FPS, network, timing, and reports explain every result.' }],
    sourcePath: 'samples/CdpInspectorApp', docsPath: 'docs/articles/test-studio.md', related: ['testing-ci', 'automation', 'inspector']
  }),
  capability({
    projectSlug: 'cdp', slug: 'testing-ci', name: 'Testing & CI', eyebrow: 'Headless and repeatable native UI tests', status: 'Preview',
    description: 'Headless Avalonia execution, a global flow runner, Playwright and Puppeteer compatibility, Selenium and Appium orchestration, OS accessibility automation, screenshots, selectors, waits, assertions, and GitHub Actions support cover local through CI test lanes.',
    statement: 'Run the same native UI intent interactively, headlessly, or through established automation ecosystems.',
    packages: [{ name: 'Chrome.DevTools.Automation.Headless', note: 'Avalonia.Headless driver and test helpers.' }, { name: 'Chrome.DevTools.Runner', note: 'Global .flow.yaml headless runner.' }, { name: 'Chrome.DevTools.Automation.Selenium', note: 'Selenium fixture and orchestration.' }, { name: 'Chrome.DevTools.Automation.Appium', note: 'Appium fixture and orchestration.' }, { name: 'Chrome.DevTools.Automation.OS', note: 'macOS, Windows, and Linux accessibility automation.' }],
    install: 'dotnet tool install --global Chrome.DevTools.Runner --prerelease\ndotnet add package Chrome.DevTools.Automation.Headless --prerelease',
    usageLanguage: 'bash',
    usage: `# Execute a Test Studio flow without the desktop editor.
cdp-runner tests/login.flow.yaml \
  --app "dotnet run --project src/MyApp -- --headless" \
  --report artifacts/test-report.html`,
    highlights: ['Zero-display Avalonia.Headless execution', 'Test Studio flow runner', 'Playwright, Selenium, Appium, and Puppeteer', 'CI screenshots, telemetry, and reports'],
    layers: [{ label: 'Launch', detail: 'The runner starts a headless or visible application and waits for CDP discovery.' }, { label: 'Drive', detail: 'Flows or external clients query selectors and dispatch input through protocol domains.' }, { label: 'Assert', detail: 'Visibility, text, state, properties, scripts, waits, and screenshots verify behavior.' }, { label: 'Publish', detail: 'CI retains logs, images, telemetry, and machine- or human-readable reports.' }],
    sourcePath: 'src/CDP.Automation.Headless', docsPath: 'docs/articles/headless-cdp-testing.md', related: ['test-studio', 'automation', 'framework-adapters']
  }),
  capability({
    projectSlug: 'cdp', slug: 'protocol-server', name: 'Protocol Server', eyebrow: 'Chrome DevTools Protocol core', status: 'Preview',
    description: 'A framework-neutral CDP server, session router, domain model, HTTP discovery endpoint, and WebSocket transport for exposing native application targets.',
    statement: 'Speak a standard diagnostics protocol before choosing a UI framework.',
    packages: [{ name: 'Chrome.DevTools.Protocol', note: 'CDP server, targets, sessions, domains, events, and transports.' }],
    install: 'dotnet add package Chrome.DevTools.Protocol --prerelease',
    usageLanguage: 'csharp',
    usage: `var server = new CdpServer(new CdpServerOptions
{
    Port = 9222
});

await server.StartAsync(cancellationToken);`,
    highlights: ['HTTP target discovery', 'WebSocket sessions', 'Commands and domain events', 'Framework-neutral server core'],
    layers: [{ label: 'Target', detail: 'Applications publish inspectable runtime targets.' }, { label: 'Session', detail: 'WebSocket connections isolate command and event streams.' }, { label: 'Domain', detail: 'Handlers implement DOM, Runtime, CSS, Input, Page, and related protocol areas.' }, { label: 'Adapter', detail: 'Framework packages translate domain operations into native UI behavior.' }],
    sourcePath: 'src/Chrome.DevTools.Protocol', related: ['test-studio', 'testing-ci', 'framework-adapters']
  }),
  capability({
    projectSlug: 'cdp', slug: 'framework-adapters', name: 'Framework Adapters', eyebrow: 'Native UI inspection', status: 'Preview',
    description: 'Avalonia, Uno Platform, WPF, and WinUI adapters map visual trees, properties, styles, input, screenshots, and runtime state into CDP domains.',
    statement: 'Inspect native XAML applications with browser-grade tooling concepts.',
    packages: [{ name: 'Chrome.DevTools.Avalonia', note: 'Avalonia diagnostics server adapter.' }, { name: 'Chrome.DevTools.Uno', note: 'Uno Platform diagnostics server adapter.' }, { name: 'Chrome.DevTools.Wpf', note: 'WPF diagnostics server adapter.' }, { name: 'Chrome.DevTools.WinUI', note: 'WinUI diagnostics server adapter.' }],
    install: 'dotnet add package Chrome.DevTools.Avalonia --prerelease',
    usageLanguage: 'csharp',
    usage: `AppBuilder.Configure<App>()
    .UsePlatformDetect()
    .UseCdpDiagnostics(options => options.Port = 9222);`,
    highlights: ['Avalonia visual and logical trees', 'Uno, WPF, and WinUI adapters', 'Property and style inspection', 'Input, overlays, and screenshots'],
    layers: [{ label: 'Tree', detail: 'Native elements receive stable protocol identities and hierarchy.' }, { label: 'Property', detail: 'Framework properties, bindings, styles, and resources map to inspectable data.' }, { label: 'Action', detail: 'Input, highlighting, edits, and captures call native services.' }, { label: 'Protocol', detail: 'Results return through standard CDP commands and events.' }],
    sourcePath: 'src/Avalonia.Diagnostics.Cdp', related: ['testing-ci', 'test-studio', 'protocol-server']
  }),
  capability({
    projectSlug: 'cdp', slug: 'automation', name: 'Automation Drivers', eyebrow: 'Headless, Selenium, and Appium', status: 'Preview',
    description: 'Automation packages connect CDP-aware applications to headless tests, Selenium, Appium, and cross-platform operating-system accessibility workflows.',
    statement: 'Drive native UI through reusable automation boundaries.',
    packages: [{ name: 'Chrome.DevTools.Automation.Headless', note: 'Headless driver and test helpers.' }, { name: 'Chrome.DevTools.Automation.Selenium', note: 'Selenium orchestration support.' }, { name: 'Chrome.DevTools.Automation.Appium', note: 'Appium driver and setup support.' }, { name: 'Chrome.DevTools.Automation.OS', note: 'Operating-system automation and accessibility provider.' }],
    install: 'dotnet add package Chrome.DevTools.Automation.Headless --prerelease',
    usageLanguage: 'csharp',
    usage: `await using var app = await CdpHeadlessApp.StartAsync<App>();
var page = await app.ConnectAsync();

await page.ClickAsync("button[name=Save]");
await page.ScreenshotAsync("saved.png");`,
    highlights: ['Headless application runner', 'Selenium integration', 'Appium integration', 'OS accessibility automation'],
    layers: [{ label: 'Launch', detail: 'A driver starts or attaches to the application under test.' }, { label: 'Discover', detail: 'The CDP target describes available sessions and UI state.' }, { label: 'Drive', detail: 'Selectors, input, evaluation, and waits express test intent.' }, { label: 'Assert', detail: 'Snapshots, properties, screenshots, and events provide evidence.' }],
    sourcePath: 'src/CDP.Automation.Headless', related: ['test-studio', 'testing-ci', 'framework-adapters']
  }),
  capability({
    projectSlug: 'cdp', slug: 'inspector', name: 'Inspector & CLI', eyebrow: 'Human and scripted diagnostics', status: 'Preview',
    description: 'Inspector controls, shared view models, WYSIWYG tools, a desktop client, in-process diagnostics, and CLI commands provide multiple ways to work with CDP targets.',
    statement: 'Use the same diagnostics surface from a visual tool or a terminal.',
    packages: [{ name: 'Chrome.DevTools.Inspector.Controls', note: 'Reusable inspector client controls.' }, { name: 'Chrome.DevTools.Inspector.Shared', note: 'Shared inspector models and UI composition.' }, { name: 'Chrome.DevTools.Inspector.Wysiwyg', note: 'Visual designer and overlay tools.' }, { name: 'Chrome.DevTools.Cli', note: 'CDP inspector command-line client.' }, { name: 'Chrome.DevTools.DiagnosticTools', note: 'In-process diagnostic inspector integration.' }],
    install: 'dotnet tool install --global Chrome.DevTools.Cli --prerelease',
    usageLanguage: 'bash',
    usage: `cdp-inspector targets --url http://localhost:9222
cdp-inspector tree --target 0
cdp-inspector screenshot --target 0 --output app.png`,
    highlights: ['Desktop inspector composition', 'WYSIWYG overlays and editing', 'In-process diagnostic tools', 'Scriptable CLI client'],
    layers: [{ label: 'Connect', detail: 'Clients discover targets and create a protocol session.' }, { label: 'Model', detail: 'Shared view models normalize trees, properties, events, and commands.' }, { label: 'Present', detail: 'Controls and WYSIWYG packages compose a visual inspector.' }, { label: 'Script', detail: 'CLI commands expose the same session to terminals and agents.' }],
    sourcePath: 'src/CDP.Inspector.Shared', related: ['test-studio', 'testing-ci', 'authoring-tools']
  }),
  capability({
    projectSlug: 'cdp', slug: 'authoring-tools', name: 'Authoring Toolkits', eyebrow: 'Editors, language services, and layout', status: 'Preview',
    description: 'Standalone Markdown, document, graph, split-layout, minimap, XAML compiler, and language-server packages extract reusable tooling from the inspector workspace.',
    statement: 'Build serious .NET authoring tools from focused, reusable subsystems.',
    packages: [{ name: 'Chrome.DevTools.Markdown.Editor', note: 'Interactive Markdown editor canvas.' }, { name: 'Chrome.DevTools.Document.Editor', note: 'Rich document editor for office formats.' }, { name: 'Chrome.DevTools.Editor.Nodes', note: 'Generic graph node editor.' }, { name: 'Chrome.DevTools.Editor.Splits', note: 'Dynamic binary split layout.' }, { name: 'Xaml.Compiler', note: 'Lossless XAML AST and mutation engine.' }],
    install: 'dotnet add package Chrome.DevTools.Markdown.Editor --prerelease',
    usageLanguage: 'xml',
    usage: `<markdown:MarkdownEditor
    Document="{Binding Document}"
    Selection="{Binding Selection}" />`,
    highlights: ['Markdown parser, renderer, and editor', 'Office document renderer and editor', 'Node editor and split layouts', 'XAML and C# language tooling'],
    layers: [{ label: 'Model', detail: 'Purpose-built ASTs preserve document or language structure.' }, { label: 'Engine', detail: 'Layout, render, parse, or graph services remain UI-independent.' }, { label: 'Control', detail: 'Avalonia surfaces add selection, caret, navigation, and editing.' }, { label: 'Workspace', detail: 'Split, minimap, and language services compose full tools.' }],
    sourcePath: 'src/CDP.Markdown.Editor', related: ['test-studio', 'inspector', 'automation']
  }),

  capability({
    projectSlug: 'inspector', slug: 'runtime-trees', name: 'Runtime Trees', eyebrow: 'Live Avalonia topology', status: 'Active',
    description: 'Inspector enumerates both visual and logical Avalonia trees with stable node identities, hierarchy, type, name, classes, bounds, visibility, and schema-aware metadata.',
    statement: 'Turn the running interface into explicit, queryable structure.',
    packages: [{ name: 'Inspector.AvaloniaAdapter', note: 'Avalonia visual and logical tree traversal and node adapters.' }, { name: 'Inspector.Contracts', note: 'Portable tree, node, and schema contracts.' }],
    install: 'dotnet add package Inspector.AvaloniaAdapter\ndotnet add package Inspector.Contracts',
    usageLanguage: 'bash',
    usage: `inspector connect --mode process --pid 12345 --json
# Capture data.sessionId from the response.
inspector tree get --session-id sess-123 --kind visual --json
inspector tree get --session-id sess-123 --kind logical --json`,
    highlights: ['Visual and logical tree snapshots', 'Stable node identifiers', 'Type, name, classes, bounds, and visibility', 'Portable contracts for custom clients'],
    layers: [{ label: 'Connect', detail: 'A host or process target creates a reusable Inspector session.' }, { label: 'Traverse', detail: 'Avalonia adapters walk visual or logical children from the active root.' }, { label: 'Normalize', detail: 'Runtime controls become stable node DTOs with portable metadata.' }, { label: 'Query', detail: 'CLI and custom clients retrieve complete trees as text or deterministic JSON.' }],
    sourcePath: 'src/Inspector.AvaloniaAdapter/TreeIntrospection', related: ['properties', 'sessions', 'agent-cli']
  }),
  capability({
    projectSlug: 'inspector', slug: 'properties', name: 'Properties & Value Sources', eyebrow: 'Explain live control state', status: 'Active',
    description: 'Property inspection reports names, owners, types, values, writability, and value sources for a selected Avalonia node, then exposes focused property changes through the same session.',
    statement: 'See the values that actually shape a control—and change them deliberately.',
    packages: [{ name: 'Inspector.AvaloniaAdapter', note: 'Property discovery, normalization, metadata, and Avalonia mutation adapters.' }],
    install: 'dotnet add package Inspector.AvaloniaAdapter',
    usageLanguage: 'bash',
    usage: `inspector node get-properties \
  --session-id sess-123 \
  --node-id visual-button --json

inspector node set-property \
  --session-id sess-123 \
  --node-id visual-button \
  --property Width --value 320 --json`,
    highlights: ['Property names, owners, types, and values', 'Local and normalized value-source metadata', 'Writable property discovery', 'Session-aware live updates'],
    layers: [{ label: 'Select', detail: 'A stable tree node identifies the runtime object.' }, { label: 'Inspect', detail: 'The Avalonia adapter discovers framework and reflected properties.' }, { label: 'Normalize', detail: 'Values and sources become deterministic contract data.' }, { label: 'Edit', detail: 'Validated property changes flow back through the current session.' }],
    sourcePath: 'src/Inspector.AvaloniaAdapter', related: ['runtime-trees', 'mutations', 'agent-cli']
  }),
  capability({
    projectSlug: 'inspector', slug: 'mutations', name: 'Live Tree Mutation', eyebrow: 'Edit the running interface', status: 'Active',
    description: 'Property and structural mutations can set values, insert controls, remove nodes, move siblings, reparent branches, or batch several changes, with dry-run validation available before applying edits.',
    statement: 'Move from observing the interface to safely reshaping it in place.',
    packages: [{ name: 'Inspector.Host', note: 'Mutation engine, validation, diagnostics, and runtime orchestration.' }, { name: 'Inspector.Contracts', note: 'Portable mutation commands and results.' }],
    install: 'dotnet add package Inspector.Host\ndotnet add package Inspector.Contracts',
    usageLanguage: 'bash',
    usage: `inspector tree mutate \
  --session-id sess-123 \
  --target-node-id visual-root \
  --operation insert \
  --payload '{"typeName":"Avalonia.Controls.TextBox","name":"EmailInput","properties":{"Watermark":"Email"}}' \
  --dry-run --json`,
    highlights: ['Set, insert, remove, move, and reparent', 'Dry-run validation', 'Batch mutation in one command', 'Structured diagnostics and operation identifiers'],
    layers: [{ label: 'Describe', detail: 'A command identifies the target, operation, payload, and operation id.' }, { label: 'Validate', detail: 'Dry-run and schema checks reject unsupported nodes, properties, or structure.' }, { label: 'Apply', detail: 'The host or live process mutation lane updates Avalonia state.' }, { label: 'Verify', detail: 'A fresh tree or property query proves the resulting runtime shape.' }],
    sourcePath: 'src/Inspector.Host/Mutation', related: ['properties', 'runtime-trees', 'agent-cli']
  }),
  capability({
    projectSlug: 'inspector', slug: 'agent-cli', name: 'CLI & Agent Automation', eyebrow: 'Deterministic UI feedback loops', status: 'Active',
    description: 'The global .NET tool provides stub, host, and process connection modes, persistent sessions, deterministic JSON, explicit diagnostics, and stable exit codes for terminals, scripts, tests, and coding agents.',
    statement: 'Give automation a precise read–act–verify loop over Avalonia UI.',
    packages: [{ name: 'Inspector.Cli.Tool', note: 'Command-line client and global .NET tool.' }, { name: 'Inspector.Transport', note: 'Local sessions, authorization, and request transport.' }],
    install: 'dotnet tool install --global Inspector.Cli.Tool',
    usageLanguage: 'bash',
    usage: `inspector capabilities --json
inspector connect --mode host \
  --address local://inspector \
  --client-id coding-agent --json

# Reuse the returned session for tree, property,
# mutation, and verification commands.`,
    highlights: ['Stub, host, and process modes', 'Persistent session identifiers', 'Deterministic JSON and explicit exit codes', 'Codex skill for repeatable workflows'],
    layers: [{ label: 'Discover', detail: 'Capabilities and schema metadata tell clients what the runtime supports.' }, { label: 'Connect', detail: 'Stub, host, or process targeting creates a persistent session.' }, { label: 'Operate', detail: 'Tree, property, and mutation commands share one predictable interface.' }, { label: 'Diagnose', detail: 'Structured errors, diagnostics, and exit codes make failures actionable.' }],
    sourcePath: 'src/Inspector.Cli', docsPath: 'README.md', related: ['sessions', 'runtime-trees', 'mutations']
  }),
  capability({
    projectSlug: 'inspector', slug: 'sessions', name: 'Host & Process Sessions', eyebrow: 'Choose the right attachment model', status: 'Active',
    description: 'Host mode targets an instrumented local runtime; process mode resolves an existing application by PID or name and consumes published live snapshots; stub mode supplies deterministic fixtures for workflow validation.',
    statement: 'Use one session model from isolated command testing to a running Avalonia process.',
    packages: [{ name: 'Inspector.Host', note: 'In-process runtime and endpoint abstractions.' }, { name: 'Inspector.Transport', note: 'Session state, local transport, authorization, and connection contracts.' }],
    install: 'dotnet add package Inspector.Host\ndotnet add package Inspector.Transport',
    usageLanguage: 'bash',
    usage: `# Instrumented application endpoint
inspector connect --mode host --address local://inspector --json

# Already-running application
inspector connect --mode process --name Inspector.SampleApp --json

# Deterministic command-flow fixture
inspector connect --mode stub --client-id tests --json`,
    highlights: ['Instrumented host endpoints', 'PID or process-name targeting', 'Live snapshot availability signal', 'Deterministic stub fixtures'],
    layers: [{ label: 'Resolve', detail: 'Mode-specific arguments select a host endpoint, running process, or fixture.' }, { label: 'Authorize', detail: 'Client identity, version, secret, and requested scopes establish boundaries.' }, { label: 'Persist', detail: 'The returned session id survives across CLI invocations.' }, { label: 'Fallback', detail: 'Process mode reports whether live UI snapshots exist and otherwise exposes process metadata honestly.' }],
    sourcePath: 'src/Inspector.Transport', related: ['agent-cli', 'runtime-trees', 'mutations']
  }),

  capability({
    projectSlug: 'protranslate', slug: 'globalization-core', name: 'Globalization Core', eyebrow: 'Framework-neutral localization', status: 'Active',
    description: 'Translation lookup, culture switching, fallback, formatting, regions, measurements, and flow direction live in a portable service layer.',
    statement: 'Keep globalization policy independent from any one UI framework.',
    packages: [{ name: 'ProTranslate.Abstractions', note: 'Portable translation and globalization contracts.' }, { name: 'ProTranslate.Core', note: 'Catalogs, fallback, formatting, culture, region, and direction services.' }],
    install: 'dotnet add package ProTranslate.Core',
    usageLanguage: 'csharp',
    usage: `var translations = new TranslationService(provider);
translations.SetCulture(CultureInfo.GetCultureInfo("pl-PL"));

var title = translations["Shell.Title"];`,
    highlights: ['Runtime culture switching', 'Fallback chains', 'Formatting and plural-ready values', 'Region, measurement, and flow direction'],
    layers: [{ label: 'Catalog', detail: 'Providers expose keys and localized values.' }, { label: 'Resolve', detail: 'Culture and fallback policy choose the best match.' }, { label: 'Format', detail: 'Arguments, numbers, dates, and regional rules materialize text.' }, { label: 'Notify', detail: 'Applications react to culture and direction changes.' }],
    sourcePath: 'src/ProTranslate.Core', related: ['framework-adapters', 'formats-resources', 'compile-time-tooling']
  }),
  capability({
    projectSlug: 'protranslate', slug: 'framework-adapters', name: 'XAML Framework Adapters', eyebrow: 'Five UI stacks', status: 'Active',
    description: 'Avalonia, WPF, WinUI, Uno Platform, and .NET MAUI packages map dynamic translation and culture state into each framework’s binding and XAML model.',
    statement: 'Share translation policy while keeping framework-native markup.',
    packages: [{ name: 'ProTranslate.Avalonia', note: 'Avalonia XAML adapter.' }, { name: 'ProTranslate.Wpf', note: 'WPF XAML adapter.' }, { name: 'ProTranslate.WinUI', note: 'WinUI XAML adapter.' }, { name: 'ProTranslate.Uno', note: 'Uno Platform XAML adapter.' }, { name: 'ProTranslate.Maui', note: '.NET MAUI XAML adapter.' }],
    install: 'dotnet add package ProTranslate.Avalonia',
    usageLanguage: 'xml',
    usage: `<TextBlock Text="{pt:Translate Shell.Title}" />`,
    highlights: ['Avalonia and WPF', 'WinUI and Uno Platform', '.NET MAUI', 'Live culture and flow-direction updates'],
    layers: [{ label: 'Core', detail: 'One service resolves cultures, keys, and formatted values.' }, { label: 'Adapter', detail: 'Each package maps notifications into its property and binding system.' }, { label: 'Markup', detail: 'Framework-native markup extensions or helpers keep XAML concise.' }, { label: 'View', detail: 'Visible content and flow direction update without rebuilding the application.' }],
    sourcePath: 'src/ProTranslate.Avalonia', related: ['globalization-core', 'formats-resources', 'compile-time-tooling']
  }),
  capability({
    projectSlug: 'protranslate', slug: 'formats-resources', name: 'Formats & Resources', eyebrow: 'Translation interchange', status: 'Active',
    description: 'ResourceManager integration and format converters connect ProTranslate catalogs to RESX satellites and common localization interchange formats.',
    statement: 'Move translation data between applications, translators, and build systems.',
    packages: [{ name: 'ProTranslate.Formats', note: 'XLIFF, PO, RESX, ARB, JSON, and related format import/export.' }, { name: 'ProTranslate.ResourceManager', note: 'ResourceManager and satellite assembly provider.' }],
    install: 'dotnet add package ProTranslate.Formats',
    usageLanguage: 'csharp',
    usage: `await using var stream = File.OpenRead("messages.xlf");
var catalog = await TranslationFormats.ReadXliffAsync(stream);

provider.AddCatalog(catalog);`,
    highlights: ['XLIFF and PO interchange', 'RESX and satellite assemblies', 'ARB and JSON-oriented catalogs', 'Import and export services'],
    layers: [{ label: 'Read', detail: 'A format adapter parses external translation assets.' }, { label: 'Normalize', detail: 'Entries become a common catalog with culture and metadata.' }, { label: 'Serve', detail: 'Providers expose the catalog to the translation core.' }, { label: 'Write', detail: 'Updated catalogs export into translator or platform formats.' }],
    sourcePath: 'src/ProTranslate.Formats', related: ['globalization-core', 'compile-time-tooling']
  }),
  capability({
    projectSlug: 'protranslate', slug: 'compile-time-tooling', name: 'Generators & Analyzers', eyebrow: 'Typed localization contracts', status: 'Active',
    description: 'An incremental generator creates strongly typed keys and provider manifests while Roslyn analyzers catch missing keys, placeholder mismatches, and catalog gaps.',
    statement: 'Move localization mistakes from runtime into the build.',
    packages: [{ name: 'ProTranslate.SourceGenerator', note: 'Typed keys, bindable strings, providers, and manifests.' }, { name: 'ProTranslate.Analyzers', note: 'Translation key, placeholder, and catalog diagnostics.' }, { name: 'ProTranslate.MicrosoftExtensions', note: 'Dependency injection and IStringLocalizer integration.' }],
    install: 'dotnet add package ProTranslate.SourceGenerator\ndotnet add package ProTranslate.Analyzers',
    usageLanguage: 'csharp',
    usage: `var title = Translations.Shell.Title;
var greeting = Translations.Account.Greeting(user.DisplayName);`,
    highlights: ['Strongly typed keys', 'Incremental generation', 'Placeholder diagnostics', 'IStringLocalizer and DI integration'],
    layers: [{ label: 'Scan', detail: 'The build discovers catalogs and declared translation keys.' }, { label: 'Generate', detail: 'Typed APIs and provider metadata join the compilation.' }, { label: 'Analyze', detail: 'Roslyn diagnostics compare usage, placeholders, and coverage.' }, { label: 'Integrate', detail: 'DI and IStringLocalizer adapters expose generated services to applications.' }],
    sourcePath: 'src/ProTranslate.SourceGenerator', related: ['globalization-core', 'framework-adapters', 'formats-resources']
  }),

  capability({
    projectSlug: 'nodeeditor', slug: 'control-model', name: 'Node Editor Control', eyebrow: 'Graph editing surface', status: 'Stable',
    description: 'A templatable Avalonia control and portable model for nodes, sockets, connectors, selection, viewport interaction, and graph editing.',
    statement: 'Build visual graph tools without hard-coding the domain into the canvas.',
    packages: [{ name: 'NodeEditorAvalonia', note: 'Avalonia node editor control and presenters.' }, { name: 'NodeEditorAvalonia.Model', note: 'Portable graph model and contracts.' }],
    install: 'dotnet add package NodeEditorAvalonia\ndotnet add package NodeEditorAvalonia.Model',
    usageLanguage: 'xml',
    usage: `<nodes:NodeEditor Nodes="{Binding Nodes}"
                  Connections="{Binding Connections}"
                  SelectedItems="{Binding Selection}" />`,
    highlights: ['Nodes, ports, and connectors', 'Fully templatable presentation', 'Selection and viewport interaction', 'Portable graph model'],
    layers: [{ label: 'Model', detail: 'Nodes, sockets, and connections describe graph structure.' }, { label: 'Template', detail: 'XAML controls how every graph element looks.' }, { label: 'Interaction', detail: 'Pointer and keyboard workflows create, select, move, and connect.' }, { label: 'Domain', detail: 'Applications attach their own semantics and evaluation.' }],
    sourcePath: 'src/NodeEditorAvalonia', related: ['mvvm', 'logiclab']
  }),
  capability({
    projectSlug: 'nodeeditor', slug: 'mvvm', name: 'MVVM Integration', eyebrow: 'View-model driven graphs', status: 'Stable',
    description: 'MVVM packages expose graph state, commands, selection, and connection workflows through bindable models suitable for application architecture and testing.',
    statement: 'Keep graph behavior in view models and visual composition in XAML.',
    packages: [{ name: 'NodeEditorAvalonia.Mvvm', note: 'MVVM graph models, commands, and control adapters.' }],
    install: 'dotnet add package NodeEditorAvalonia.Mvvm',
    usageLanguage: 'csharp',
    usage: `Nodes.Add(new NodeViewModel
{
    Title = "Transform",
    Position = new Point(320, 180)
});`,
    highlights: ['Bindable graph collections', 'Command-oriented editing', 'Testable selection and connection logic', 'XAML templates remain replaceable'],
    layers: [{ label: 'Domain', detail: 'Application models own graph meaning and data.' }, { label: 'View model', detail: 'Adapters expose position, sockets, commands, and notifications.' }, { label: 'Binding', detail: 'The editor binds to collections and selection state.' }, { label: 'Template', detail: 'Views render domain-specific nodes without changing the control.' }],
    sourcePath: 'src/NodeEditorAvalonia.Mvvm', related: ['control-model', 'logiclab']
  }),
  capability({
    projectSlug: 'nodeeditor', slug: 'logiclab', name: 'LogicLab', eyebrow: 'Digital logic system', status: 'Active',
    description: 'A reusable logic core and editor layer turns NodeEditor into a digital circuit authoring and simulation environment with components, ports, and evaluation.',
    statement: 'A complete domain system built on the reusable graph foundation.',
    packages: [{ name: 'NodeEditorLogic.Core', note: 'Logic primitives, components, signals, and evaluation.' }, { name: 'NodeEditorLogic.Editor', note: 'Logic editor view models and services.' }],
    install: 'dotnet add package NodeEditorLogic.Core --prerelease',
    usageLanguage: 'csharp',
    usage: `var circuit = new Circuit();
var input = circuit.Add(new InputGate());
var output = circuit.Add(new OutputGate());
circuit.Connect(input.Output, output.Input);

circuit.Evaluate();`,
    highlights: ['Digital logic primitives', 'Component library', 'Graph-backed circuit editor', 'Interactive signal evaluation'],
    layers: [{ label: 'Primitive', detail: 'Signals, ports, and gates define logic behavior.' }, { label: 'Circuit', detail: 'Connections form an evaluable dependency graph.' }, { label: 'Editor', detail: 'NodeEditor view models expose components and wiring.' }, { label: 'Simulation', detail: 'Evaluation updates signals and visible graph state.' }],
    sourcePath: 'src/NodeEditorLogic.Core', related: ['control-model', 'mvvm']
  }),

  capability({
    projectSlug: 'progpu', slug: 'backend', name: 'GPU Backend', eyebrow: 'WebGPU device and presentation', status: 'Preview',
    description: 'The backend owns adapter and device creation, surfaces, swapchains, command submission, resources, synchronization, and cross-platform window presentation.',
    statement: 'A thin, explicit foundation between .NET applications and WebGPU.',
    packages: [{ name: 'ProGPU.Backend', note: 'WebGPU device, resource, command, surface, and platform foundation.' }],
    install: 'dotnet add package ProGPU.Backend --prerelease',
    usageLanguage: 'csharp',
    usage: `await using var backend = await GpuBackend.CreateAsync();
using var frame = backend.BeginFrame(surface);

frame.CommandEncoder.Clear(frame.ColorTarget, clearColor);
frame.Present();`,
    highlights: ['WebGPU adapter and device', 'Surfaces and frame presentation', 'Explicit GPU resource lifetime', 'Cross-platform Silk.NET foundation'],
    layers: [{ label: 'Adapter', detail: 'Capability discovery selects a suitable physical backend.' }, { label: 'Device', detail: 'Resources, queues, pipelines, and commands share an owned lifetime.' }, { label: 'Surface', detail: 'Native windows provide presentation targets.' }, { label: 'Frame', detail: 'Applications encode, submit, and present work explicitly.' }],
    sourcePath: 'src/ProGPU.Backend', related: ['vector-text', 'scene', 'framework-bridges']
  }),
  capability({
    projectSlug: 'progpu', slug: 'vector-text', name: 'Vector & Text', eyebrow: 'GPU-ready 2D primitives', status: 'Preview',
    description: 'Vector geometry, brushes, strokes, text shaping, glyph metrics, and layout packages prepare reusable 2D content for the GPU pipeline.',
    statement: 'Build precise interface graphics above the device layer.',
    packages: [{ name: 'ProGPU.Vector', note: 'Paths, geometry, brushes, pens, tessellation, and vector resources.' }, { name: 'ProGPU.Text', note: 'Text layout, shaping, glyph metrics, and GPU text rendering.' }],
    install: 'dotnet add package ProGPU.Vector --prerelease\ndotnet add package ProGPU.Text --prerelease',
    usageLanguage: 'csharp',
    usage: `var path = new PathBuilder()
    .MoveTo(12, 12)
    .LineTo(92, 48)
    .LineTo(12, 84)
    .Close();

scene.AddPath(path, brush);`,
    highlights: ['Paths and geometry', 'Brushes, pens, and fills', 'Text shaping and layout', 'GPU-ready resource preparation'],
    layers: [{ label: 'Describe', detail: 'Managed paths and text runs capture application intent.' }, { label: 'Layout', detail: 'Geometry and glyph placement resolve CPU-side constraints.' }, { label: 'Prepare', detail: 'Buffers, atlases, and paint data become GPU-ready resources.' }, { label: 'Draw', detail: 'Scene or immediate commands submit prepared content.' }],
    sourcePath: 'src/ProGPU.Vector', related: ['backend', 'scene', 'compatibility']
  }),
  capability({
    projectSlug: 'progpu', slug: 'scene', name: 'Scene & Composition', eyebrow: 'Retained visual system', status: 'Preview',
    description: 'A retained scene, visual tree, compositor command stream, effects, transforms, clipping, and presentation pipeline organize complex interfaces across frames.',
    statement: 'Retain intent, update selectively, and compose efficiently.',
    packages: [{ name: 'ProGPU.Scene', note: 'Visuals, scene updates, compositor operations, effects, and retained presentation.' }],
    install: 'dotnet add package ProGPU.Scene --prerelease',
    usageLanguage: 'csharp',
    usage: `var root = new ContainerVisual();
root.Children.Add(new ShapeVisual
{
    Geometry = logo,
    Fill = accentBrush
});

compositor.SetRoot(root);`,
    highlights: ['Retained visual tree', 'Incremental scene updates', 'Transforms, clipping, and opacity', 'Effects and compositor commands'],
    layers: [{ label: 'Visual', detail: 'Nodes retain geometry, paint, transform, clip, and child state.' }, { label: 'Update', detail: 'Property changes produce focused compositor operations.' }, { label: 'Resolve', detail: 'The scene computes ordering, bounds, effects, and dependencies.' }, { label: 'Compose', detail: 'GPU passes render the final frame into a presentation surface.' }],
    sourcePath: 'src/ProGPU.Scene', related: ['backend', 'vector-text', 'framework-bridges']
  }),
  capability({
    projectSlug: 'progpu', slug: 'framework-bridges', name: 'Framework Bridges', eyebrow: 'Avalonia, Uno, WinUI, and WPF', status: 'Preview',
    description: 'Framework packages connect ProGPU presentation, controls, charts, and interop to Avalonia, Uno Platform, WinUI, and the LibreWPF compatibility effort.',
    statement: 'Bring the GPU substrate into an existing XAML application model.',
    packages: [{ name: 'ProGPU.Avalonia', note: 'Avalonia integration and control hosting.' }, { name: 'ProGPU.Uno', note: 'Uno Platform integration.' }, { name: 'ProGPU.WinUI', note: 'WinUI controls and presentation.' }, { name: 'LibreWPF.Interop', note: 'WPF-compatible compositor interop.' }],
    install: 'dotnet add package ProGPU.Uno --prerelease',
    usageLanguage: 'xml',
    usage: `<progpu:GpuView Render="{x:Bind ViewModel.Render}" />`,
    highlights: ['Avalonia integration', 'Uno and WinUI controls', 'WPF compositor interop', 'Shared GPU backend underneath'],
    layers: [{ label: 'Framework', detail: 'XAML, properties, input, and lifecycle remain native to the host.' }, { label: 'Adapter', detail: 'Integration packages translate framework state into ProGPU resources and visuals.' }, { label: 'Scene', detail: 'Shared vector, text, scene, and compute packages prepare work.' }, { label: 'Backend', detail: 'WebGPU presents through the selected platform surface.' }],
    sourcePath: 'src/ProGPU.Uno', related: ['backend', 'scene', 'compatibility']
  }),
  capability({
    projectSlug: 'progpu', slug: 'compatibility', name: 'Compatibility Shims', eyebrow: 'Portable classic drawing APIs', status: 'Preview',
    description: 'ProGPU-backed SkiaSharp and System.Drawing.Common compatibility shims let existing drawing-oriented code target the modern GPU substrate during migration.',
    statement: 'Preserve familiar drawing shapes while changing the implementation below them.',
    packages: [{ name: 'ProGPU.SkiaSharp', note: 'Portable SkiaSharp-compatible API backed by ProGPU.' }, { name: 'ProGPU.System.Drawing.Common', note: 'Portable System.Drawing.Common-compatible API backed by ProGPU.' }],
    install: 'dotnet add package ProGPU.SkiaSharp --prerelease',
    usageLanguage: 'csharp',
    usage: `using var paint = new SKPaint { Color = SKColors.CornflowerBlue };
canvas.DrawRoundRect(new SKRect(20, 20, 220, 100), 16, 16, paint);`,
    highlights: ['SkiaSharp-shaped API', 'System.Drawing-shaped API', 'ProGPU-backed implementation', 'Migration and portability bridge'],
    layers: [{ label: 'Call site', detail: 'Application code uses a familiar drawing API.' }, { label: 'Shim', detail: 'Compatibility types preserve the expected object model.' }, { label: 'Translate', detail: 'Operations map into ProGPU geometry, paint, text, and resources.' }, { label: 'GPU', detail: 'The backend executes through WebGPU rather than the original native stack.' }],
    sourcePath: 'src/SkiaSharp', related: ['vector-text', 'backend', 'framework-bridges']
  }),
  ...longTailCapabilities
];

export function capabilitiesForProject(projectSlug: string) {
  return capabilities.filter((item) => item.projectSlug === projectSlug);
}

export function capabilityProject(item: Capability): Project {
  const project = projects.find((candidate) => candidate.slug === item.projectSlug);
  if (!project) throw new Error(`Unknown capability project: ${item.projectSlug}`);
  return project;
}

export function capabilityUrl(item: Capability, base = '/') {
  return `${base}projects/${item.projectSlug}/${item.slug}/`;
}

export function capabilityPackageUrl(item: PackageLink) {
  return item.url ?? nugetUrl(item.name);
}
