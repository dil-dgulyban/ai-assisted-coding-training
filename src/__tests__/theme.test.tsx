import { render, screen } from '@testing-library/react';
import { AtlasThemeProvider } from '../providers/ThemeProvider';
import { useTheme, Typography } from '@mui/material';

// Component that uses theme values for testing
const TestComponent = () => {
  const theme = useTheme();
  return (
    <div>
      <div data-testid="primary-color" style={{ color: theme.palette.primary.main }}>
        Primary Color
      </div>
      <Typography variant="h1" data-testid="typography-h1">
        Heading 1
      </Typography>
      <Typography variant="body1" data-testid="typography-body1">
        Body Text
      </Typography>
      <div data-testid="breakpoint-sm">{theme.breakpoints.values.sm}</div>
      <div data-testid="breakpoint-md">{theme.breakpoints.values.md}</div>
    </div>
  );
};

describe('ThemeProvider', () => {
  test('renders children correctly', () => {
    render(
      <AtlasThemeProvider>
        <div>Test content</div>
      </AtlasThemeProvider>
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('provides theme values to components', () => {
    render(
      <AtlasThemeProvider>
        <TestComponent />
      </AtlasThemeProvider>
    );

    // Check if theme values are available
    expect(screen.getByTestId('primary-color')).toHaveStyle('color: #1976d2');
    expect(screen.getByTestId('typography-h1')).toBeInTheDocument();
    expect(screen.getByTestId('typography-body1')).toBeInTheDocument();

    // Check responsive breakpoints
    expect(screen.getByTestId('breakpoint-sm').textContent).toBe('600');
    expect(screen.getByTestId('breakpoint-md').textContent).toBe('960');
  });
});
