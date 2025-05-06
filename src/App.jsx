import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import Header from './components/header/Header'
import { PortfolioContext } from './context/Context'
import GlobalTheme from './css/theme/global'
import { dark, light } from './css/theme/theme'
import Contato from './pages/contato/Contato'
import Home from './pages/home/Home'
import Portfolio from './pages/portfolio/Portfolio'
import Sobre from './pages/sobre/Sobre'

function App() {
  const { theme } = useContext(PortfolioContext)


  return (
    <>
      <ThemeProvider theme={theme === 'dark' ? dark : light}>
        <GlobalTheme />
        <Header />
        <Home />
        <Sobre />
        <Portfolio />
        <Contato />
      </ThemeProvider>
    </>
  )
}

export default App
