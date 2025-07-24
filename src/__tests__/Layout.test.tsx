import { render, screen } from '@testing-library/react';
import { Header } from '../components/Layout/Header';
import { Footer } from '../components/Layout/Footer';
import App from '../App';
import { AtlasThemeProvider } from '../providers/ThemeProvider';

describe('Layout Components', () => {
  test('Header renders correctly', () => {
    render(
      <AtlasThemeProvider>
        <Header />
      </AtlasThemeProvider>
    );
    expect(screen.getByText('Todo App')).toBeInTheDocument();
  });

  test('Footer renders correctly', () => {
    render(
      <AtlasThemeProvider>
        <Footer />
      </AtlasThemeProvider>
    );

    // Check if the footer contains the current year
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(`Todo App - ${currentYear}`)).toBeInTheDocument();
  });

  test('App renders with proper layout structure', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: /todo app/i })).toBeInTheDocument();
    expect(screen.getByText('Your Todos')).toBeInTheDocument();
    expect(screen.getByText(/No todos yet/i)).toBeInTheDocument();

    // Check if main elements exist
    expect(screen.getByRole('banner')).toBeInTheDocument(); // AppBar/Header
    expect(screen.getByRole('main')).toBeInTheDocument(); // Main content area
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Footer
  });
});
