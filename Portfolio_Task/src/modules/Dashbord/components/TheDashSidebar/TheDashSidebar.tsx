import "./TheDashSidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { ICONS } from "../../utils/icons-dash";
import { IMAGES } from "../../utils/images-dash";


interface Props_Sidebar {
  className?: string;
}

const TheDashSidebar: React.FC<Props_Sidebar> = ({ className }) => {

  const navigate = useNavigate();
 
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className={className}>
      <div className="HJ-sidebar-title">
        <div className="HJ_MainTitle">
          <span className="HJ_logo">{ICONS.user_edit}</span>
          <h3>DarkPen</h3>
        </div>
      </div>
      <div className="d-flex align-items-center mt-4 ">
        <div className="position-relative">
          <img
            src={IMAGES.Person_IMG}
            alt="Person_IMG"
            className="rounded-circle HJ_Person_Img"
          />
          <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
        </div>
        <div className="ms-3">
          <h6 className="mb-0 HJ_Name">Jhon Doe</h6>
          <span className="HJ_role">Admin</span>
        </div>
      </div>

      <ul className="HJ-sidebar-list">
        <li className="HJ-sidebar-list-item">
          <Link to="/dashboard/projects">
            {ICONS.projects}
            <span>Projects</span>
          </Link>
        </li>
        <li className="HJ-sidebar-list-item">
          <Link to="/dashboard/messages">
            {ICONS.messages}
            <span>Messages</span>
          </Link>
        </li>
        <li className="HJ-sidebar-list-item">
          <button onClick={handleLogout} className="HJ_logout">
            {ICONS.logout}
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TheDashSidebar;
