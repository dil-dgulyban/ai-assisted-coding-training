import React from 'react';
import { 
  ThemeProvider as MuiThemeProvider, 
  createTheme, 
  responsiveFontSizes 
} from '@mui/material';

// Mock for the Atlas Lens theme with responsive configuration
const createLensTheme = () => {
  let theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
        light: '#63a4ff',
        dark: '#004ba0',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#f50057',
        light: '#ff5983',
        dark: '#bb002f',
        contrastText: '#ffffff',
      },
      background: {
        default: '#f5f5f5',
        paper: '#ffffff',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 500,
      },
      h6: {
        fontSize: '1.25rem',
        fontWeight: 500,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.5,
      },
      button: {
        textTransform: 'none',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 4,
            padding: '8px 16px',
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: 8,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            transition: 'background-color 0.2s ease',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
          },
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });
  
  // Apply responsive font sizes
  theme = responsiveFontSizes(theme);
  
  return theme;
};

// Create the theme
const lensTheme = createLensTheme();

interface AtlasThemeProviderProps {
  children: React.ReactNode;
}

export const AtlasThemeProvider: React.FC<AtlasThemeProviderProps> = ({ children }) => {
  return (
    <MuiThemeProvider theme={lensTheme}>
      {children}
    </MuiThemeProvider>
  );
};