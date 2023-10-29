import { CssBaseline, ThemeProvider } from '@mui/material'

import './App.css'
import { Router } from './router/Router'
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App
