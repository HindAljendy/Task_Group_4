import './DashbordControllerPanel.css'
import { Outlet, useNavigate } from "react-router-dom";
import TheDashSidebar from "../../components/TheDashSidebar/TheDashSidebar";
import TheDashTopbar from "../../components/TheDashTopbar/TheDashTopbar";
import { Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const DashbordControllerPanel = () => {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  useEffect(()=>{
    localStorage.setItem("token" , 'test')
    if(!localStorage.getItem("token")){
      navigate("/login");
    }

  },[]);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
     <div>
      <Row style={{ marginRight: "0px", marginLeft: "0px" }}>
         {showSidebar && (
          <Col xs={2} style={{ paddingRight: "0px", paddingLeft: "0px" }}>
            <div>
              <TheDashSidebar />
            </div>
          </Col>
        )}
        <Col  style={{ paddingRight: "0px", paddingLeft: "0px" }}>
          <TheDashTopbar toggleSidebar={toggleSidebar} />
          <Outlet/>
        </Col>
      </Row>
    </div> 
  
   
  )
}

export default DashbordControllerPanel



