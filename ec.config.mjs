import { defineEcConfig } from 'astro-expressive-code';

export default defineEcConfig({
  themes: ['github-dark'],
  defaultLocale: 'en-US',
  frames: {
    extractFileNameFromCode: false,
    removeCommentsWhenCopyingTerminalFrames: true,
    showCopyToClipboardButton: true
  },
  styleOverrides: {
    borderRadius: '0px',
    borderWidth: '1px',
    borderColor: 'rgba(255, 255, 255, 0.12)',
    codeBackground: '#0d1016',
    codeForeground: '#d8dce7',
    codeFontFamily: 'ui-monospace, SFMono-Regular, Consolas, monospace',
    codeFontSize: '0.75rem',
    codeLineHeight: '1.75',
    codePaddingBlock: '1.5rem',
    codePaddingInline: '1.65rem',
    frames: {
      frameBoxShadowCssValue: 'none',
      editorBackground: '#0d1016',
      editorTabBarBackground: '#11151d',
      editorTabBarBorderColor: 'rgba(255, 255, 255, 0.12)',
      editorTabBarBorderBottomColor: 'rgba(255, 255, 255, 0.08)',
      editorActiveTabBackground: '#0d1016',
      editorActiveTabForeground: '#d8dce7',
      editorActiveTabIndicatorHeight: '1px',
      editorActiveTabIndicatorTopColor: 'var(--project-accent, #8ea2ff)',
      editorActiveTabIndicatorBottomColor: 'transparent',
      terminalBackground: '#0d1016',
      terminalTitlebarBackground: '#11151d',
      terminalTitlebarForeground: '#9ba2b4',
      terminalTitlebarBorderBottomColor: 'rgba(255, 255, 255, 0.08)',
      terminalTitlebarDotsForeground: 'var(--project-accent, #8ea2ff)',
      terminalTitlebarDotsOpacity: '0.8',
      inlineButtonForeground: 'var(--project-accent, #8ea2ff)',
      inlineButtonBorder: 'var(--project-accent, #8ea2ff)',
      tooltipSuccessBackground: '#171c27',
      tooltipSuccessForeground: '#ffffff'
    },
    textMarkers: {
      markHue: '264',
      defaultChroma: '34',
      backgroundOpacity: '28%',
      borderOpacity: '82%'
    }
  }
});
