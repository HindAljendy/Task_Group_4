import './Projects.scss';
import DataTable from '../../components/DataTable/DataTable'
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("add new project butthon clicked");
    navigate('/dashboard/projects/add');
  };
  return (
    <div className='BY_projects'>
      <div className="top">
        <h1 className="datatableTitle">
          List of All Projects
        </h1>
        <div className="addNewButtonSection">
          <div className="addNewProjectButton" >
            <button onClick={handleClick}>Add New Project</button>
          </div>
        </div>
      </div>

      <div className="datatableContent">
          <DataTable type="projectsTable" />
      </div>
    </div >
  )
}

export default Projects