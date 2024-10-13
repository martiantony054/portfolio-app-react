import { Route, Routes } from 'react-router-dom'
import './App.css'
import Contact from './Components/Contact'
import Home from './Components/Home'
import NavbarDef from './Components/Navbar'
import Projects from './Components/Projects'
import Img from './Components/img/img'
function App() {
  

  return (
    <>
     <NavbarDef/>
     <Routes>
         <Route path='/' element={<Img/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
     </Routes>
     
    </> 
  )
}

export default App
