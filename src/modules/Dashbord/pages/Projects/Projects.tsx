import './Projects.scss';
import DataTable from '../../components/DataTable/DataTable'

const Projects = () => {
  return (
    <div className='BY_projects'>
      <div className="top">
        <h1 className="datatableTitle">
          List of All Projects
        </h1>
        <div className="addNewButtonSection">
          <div className="addNewProjectButton" >
            <button>Add New Project</button>
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