import { createTheme } from '@material-ui/core/styles';

export const defaultTheme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    neutral: {
      main: '#5c6ac4',
    },
  },
});

declare module '@material-ui/core/styles/createTheme' {
    interface Theme {
      status: {
        danger: React.CSSProperties['color'],
      }
    }
    interface ThemeOptions {
      status: {
        danger: React.CSSProperties['color']
      }
    }
  }
  
  declare module "@material-ui/core/styles/createPalette" {
    interface Palette {
      neutral: Palette['primary'];
    }
    interface PaletteOptions {
      neutral: PaletteOptions['primary'];
    }
  }