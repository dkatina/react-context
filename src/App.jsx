import NavBar from "./components/NavBar/NavBar"
import { useTheme } from "./contexts/ThemeContext"

function App() {
  const { isDarkMode } = useTheme();
  

  return (
    <div style={{height: '100vh', backgroundColor: isDarkMode ? '#1b1b1bff' : 'white'}}>
      <NavBar/>
    </div>
  )
}

export default App
