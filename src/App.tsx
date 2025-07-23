import './App.css'
import { CssBaseline } from '@mui/material'
import { AtlasThemeProvider } from './providers/ThemeProvider'

function App() {
  return (
    <AtlasThemeProvider>
      <CssBaseline />
      <div className="app-container">
        <h1>Todo App</h1>
        {/* App content will go here in future tasks */}
      </div>
    </AtlasThemeProvider>
  )
}

export default App