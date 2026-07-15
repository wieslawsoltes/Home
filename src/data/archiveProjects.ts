export type ArchiveProject = {
  name: string;
  repo: string;
  description: string;
  kind: 'Maintained' | 'Earlier work';
  tags: string[];
};

export const archiveProjects: ArchiveProject[] = [
  { name: 'ReactiveGenerator', repo: 'ReactiveGenerator', description: 'Source-generated reactive properties, commands, and notifications for modern .NET.', kind: 'Maintained', tags: ['Roslyn', 'Reactive', 'Source generation'] },
  { name: 'StaticViewLocator', repo: 'StaticViewLocator', description: 'Compile-time Avalonia view location without reflection-heavy runtime discovery.', kind: 'Maintained', tags: ['Avalonia', 'AOT', 'Source generation'] },
  { name: 'XamlToCSharpGenerator', repo: 'XamlToCSharpGenerator', description: 'Transforms XAML declarations into inspectable generated C# surfaces.', kind: 'Maintained', tags: ['XAML', 'Roslyn', 'Tooling'] },
  { name: 'PrintingTools', repo: 'PrintingTools', description: 'Cross-platform printing and print-preview infrastructure for Avalonia applications.', kind: 'Maintained', tags: ['Avalonia', 'Printing', 'Controls'] },
  { name: 'NativeMessageBox', repo: 'NativeMessageBox', description: 'Small native dialog integrations for cross-platform .NET desktop applications.', kind: 'Maintained', tags: ['Desktop', 'Native', 'Interop'] },
  { name: 'Lottie', repo: 'Lottie', description: 'Lottie animation rendering and controls for Avalonia and SkiaSharp.', kind: 'Maintained', tags: ['Animation', 'Skia', 'Avalonia'] },
  { name: 'MediaPlayer', repo: 'MediaPlayer', description: 'A media playback control and platform integration experiment for Avalonia.', kind: 'Maintained', tags: ['Media', 'Avalonia', 'Controls'] },
  { name: 'HexView', repo: 'HexView', description: 'A focused hexadecimal data viewer and editor control for Avalonia.', kind: 'Maintained', tags: ['Binary', 'Editor', 'Avalonia'] },
  { name: 'ThemeManager.Avalonia', repo: 'ThemeManager.Avalonia', description: 'Runtime theme discovery, selection, and application for Avalonia apps.', kind: 'Maintained', tags: ['Themes', 'Avalonia', 'Styling'] },
  { name: 'SvgToXaml', repo: 'SvgToXaml', description: 'Converts SVG artwork into XAML geometry and drawing resources.', kind: 'Maintained', tags: ['SVG', 'XAML', 'Conversion'] },
  { name: 'RibbonControl', repo: 'RibbonControl', description: 'Ribbon-style command surfaces and controls for desktop applications.', kind: 'Maintained', tags: ['Controls', 'Desktop', 'Commands'] },
  { name: 'ChatGPT', repo: 'ChatGPT', description: 'An earlier cross-platform ChatGPT desktop client built with Avalonia.', kind: 'Earlier work', tags: ['Avalonia', 'AI', 'Desktop'] }
];
