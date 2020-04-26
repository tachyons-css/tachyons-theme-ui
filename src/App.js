import React from 'react';
import { ThemeProvider } from "theme-ui"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './pages/Index'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route exact path='/' component={Home} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
