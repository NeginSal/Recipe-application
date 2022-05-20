import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import User from './pages/user/User'

import './App.css'
import Navbar from "./components/Navbar";
import ThemeSelector from "./components/ThemeSelector";
import { useTheme } from "./hooks/useTheme";

function App() { 

  const { mode } = useTheme()

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="create" element={<Create />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="/users/:id" element={<User />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App