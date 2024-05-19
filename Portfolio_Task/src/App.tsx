import { Route, Routes } from 'react-router-dom'
import './App.css'
import DashbordControllerPanel from './modules/Dashbord/pages/DashbordControllerPanel/DashbordControllerPanel'
import Projects from './modules/Dashbord/pages/Projects/Projects'
import Messages from './modules/Dashbord/pages/Messages/Messages'
import Portfolio from './modules/portfolio/pages/Portfolio'
import Login from './Shared-components/Login/Login'
import MessageDetails from './modules/Dashbord/components/MessageDetails/MessageDetails'
import AddProject from './modules/Dashbord/components/AddProject/AddProject'
import EditProject from './modules/Dashbord/components/EditProject/EditProject'
import ShowProject from './modules/Dashbord/components/ShowProject/ShowProject'


function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<Portfolio/>}/>
         <Route path="/login" element={<Login/>}/> 
        <Route path="/dashboard" element={<DashbordControllerPanel/>}>
         <Route index element={<Projects/>} /> 
         <Route path="/dashboard/projects" element={<Projects/>}/>
         <Route path="/dashboard/messages" element={<Messages/>}/>
         <Route path="/dashboard/messages/:id" element={<MessageDetails />}/>
          <Route path="/dashboard/projects/add" element={<AddProject />} />
          <Route path="/dashboard/projects/edit/:id" element={<EditProject />} />
          <Route path="/dashboard/projects/show/:id" element={<ShowProject />} />
         

        </Route>
      </Routes>
    </div>
  )
}




export default App
