import { Route, Routes } from 'react-router-dom'
import './App.css'
import DashbordControllerPanel from './modules/Dashbord/pages/DashbordControllerPanel/DashbordControllerPanel'
import Projects from './modules/Dashbord/pages/Projects/Projects'
import Messages from './modules/Dashbord/pages/Messages/Messages'
import Login from './Shared-components/Login/Login'
import Portfolio from './modules/portfolio/pages/Portfolio'

function App() {

  return (
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
    </div>
  )
}

export default App
