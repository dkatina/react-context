import NavBar from "./components/NavBar/NavBar"
import { useTheme } from "./contexts/ThemeContext"
import ProfileCard from "./components/ProfileCard";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import ProfileView from "./views/ProfileView";
import UpdateProfileView from "./views/UpdateProfileView";

function App() {
  const { isDarkMode } = useTheme();
  

  return (
    <div style={{height: '100vh', backgroundColor: isDarkMode ? '#1b1b1bff' : 'white'}}>
      
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomeView/>}/>
          <Route path='/login' element={<LoginView/>}/>
          <Route path='/profile' element={<ProfileView/>}/>
          <Route path='/profile/update' element={<UpdateProfileView/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
