import './App.css'
import { CssBaseline, Container, Box, Paper } from '@mui/material'
import { AtlasThemeProvider } from './providers/ThemeProvider'
import { Header } from './components/Layout/Header'
import { Footer } from './components/Layout/Footer'

function App() {
  return (
    <AtlasThemeProvider>
      <CssBaseline />
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        backgroundColor: (theme) => theme.palette.background.default
      }}>
        <Header />
        <Container 
          maxWidth="md" 
          sx={{ 
            flexGrow: 1, 
            py: { xs: 2, sm: 3, md: 4 },
            px: { xs: 2, sm: 3, md: 4 }
          }}
        >
          <Paper 
            elevation={2}
            sx={{ 
              p: { xs: 2, sm: 3, md: 4 },
              borderRadius: 2,
              bgcolor: 'background.paper'
            }}
          >
            <Box component="main">
              {/* Todo content will go here in future tasks */}
              <Box sx={{ textAlign: 'center', py: 4 }}>
                <h2>Your Todos</h2>
                <p>Todo items will appear here soon.</p>
              </Box>
            </Box>
          </Paper>
        </Container>
        <Footer />
      </Box>
    </AtlasThemeProvider>
  )
}

export default App