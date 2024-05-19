import './DashbordControllerPanel.css'
import { Outlet } from "react-router-dom";
import TheDashSidebar from "../../components/TheDashSidebar/TheDashSidebar";
import TheDashTopbar from "../../components/TheDashTopbar/TheDashTopbar";
import {  useState } from 'react';

const DashbordControllerPanel = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);


  return (
    <div className="HJ_dashboord ">
      <div className="HJ_sidebarContent">
        <TheDashSidebar
          className={isOpen ? "HJ-sidebar active" : "HJ-sidebar"}
        />
      </div>

      <div className="HJ_container">
        <TheDashTopbar toggle={toggle} />
        <Outlet />
      </div>
    </div>
  
   
  )
}

export default DashbordControllerPanel



