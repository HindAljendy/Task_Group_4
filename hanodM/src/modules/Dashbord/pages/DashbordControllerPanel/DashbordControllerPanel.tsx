import "./DashbordControllerPanel.css";
import { Outlet, useNavigate } from "react-router-dom";
import TheDashSidebar from "../../components/TheDashSidebar/TheDashSidebar";
import { useEffect, useState } from "react";
import TheDashTopbar from "../../components/TheDashTopbar/TheDashTopbar";

const DashbordControllerPanel = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("token", "test");
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

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
  );
};

export default DashbordControllerPanel;
