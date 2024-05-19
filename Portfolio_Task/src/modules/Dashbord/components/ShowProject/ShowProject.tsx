import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as projectServices from "../../services/projectsServices"
import { ICONS } from '../../utils/icons-dash';
import { dev } from '../../utils/back_urls';

import './ShowProject.scss'


const ShowProject = () => {

    const navigate = useNavigate();
    const param = useParams();

    console.log(`this is project with id=   ${param.id}`);


    // get Project Data
    const [project, setProject] = useState<any>({});
    useEffect(() => {
        const getProjectData = async () => {
            try {
                const response = await projectServices.getProjectById(param.id);
                console.log(response);
                let data = {
                    id: response.data.id,
                    title: response.data.title,
                    description: response.data.description,
                    category: response.data.category,
                    year: response.data.year,
                    image: response.data.image,
                };
                setProject(data);
                console.log(project);
            } catch (error) {
                console.log(error);
            }
        };

        getProjectData();
    }, []);

    
    
    const goBack = () => {
        navigate("/dashboard/projects");
    }
    // const addImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files && e.target.files[0]) {
    //       setImage(URL.createObjectURL(e.target.files[0]));
    //     } else {
    //       setImage({});
    //     }
    //   };

    return (
        <div className="BY_showProject">
            <div className="container">
                <div className='topSection'>
                    <h2>Show Project</h2>
                </div>
                <div className="contentSection">
                    <form className='form'>
                        <div className='field long'>
                            <label>Title</label>
                            <input type='text'disabled  defaultValue={project.title}  />
                        </div>
                        <div className='field'>
                            <label>Year</label>
                            <input type='text' disabled defaultValue={project.year}  />
                        </div>
                        <div className='field'>
                            <label>Category</label>
                            <input type='text'disabled  defaultValue={project.category}  />
                        </div>
                        <div className='field long'>
                            <label> Description  </label>
                            <input type='text'disabled defaultValue={project.description} />
                        </div>
                        <div className='field long'>
                            <label > Image </label>
                            <img src={`${dev.url.PUBLIC_URL}${project.image}`} alt="" className='project_image' />
                        </div>
                    </form>
                </div>
                <div className="bottomSection">
                    <button value="Back" className='back' onClick={goBack}> {ICONS.arrow_left}Back</button>
                </div>
            </div>
        </div>
    )
}

export default ShowProject;