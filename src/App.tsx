import { ThemeProvider } from 'styled-components';
import Light from './themes/Light';
import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={Light}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}

export default App
