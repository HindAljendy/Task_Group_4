import { Route, Routes } from 'react-router-dom'
import './App.css'
<<<<<<< HEAD
import About from './modules/portfolio/components/about'
=======
import DashbordControllerPanel from './modules/Dashbord/pages/DashbordControllerPanel/DashbordControllerPanel'
import Projects from './modules/Dashbord/pages/Projects/Projects'
import Messages from './modules/Dashbord/pages/Messages/Messages'
import Login from './Shared-components/Login/Login'
import Portfolio from './modules/portfolio/pages/Portfolio'
>>>>>>> 1c99ef06b5c570141fc8b7646136ea5775989d61

function App() {

  return (
<<<<<<< HEAD
    <div>
      <About/>
=======
    <div className="App">
      <Routes>
        <Route path='/' element ={<Portfolio/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashbord" element={<DashbordControllerPanel/>}>
         <Route index element={<Projects/>} /> 
         <Route path="/dashbord/projects" element={<Projects/>}/>
         <Route path="/dashbord/messages" element={<Messages/>}/>
        </Route>
      </Routes> 
>>>>>>> 1c99ef06b5c570141fc8b7646136ea5775989d61
    </div>
  )
}

export default App
