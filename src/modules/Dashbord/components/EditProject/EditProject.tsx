import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as projectServices from "../../services/projectsServices"
import { ICONS } from '../../utils/icons-dash';
import { dev } from '../../utils/back_urls';

import './EditProject.scss'

// interface Project {
//     id: number,
//     title: string,
//     description: string,
//     category: string;
//     year: number;
//     image: string,
// }

const EditProject = () => {

    const navigate = useNavigate();
    const param = useParams();

    console.log(`this is project with id ${param.id}`);


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

    //_________________________________________________________________________________________________________
    //edit data

    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState<File | null>(null);

    const [errorMessage, setErrorMessage] = useState('');

    const sendData = async (event: any) => {
        event.preventDefault();

        let data = {
            title: title,
            year: year,
            category: category,
            description: description,
            image: image
        }
        console.log(data);
        try {
            await projectServices.editProject(data, param.id);
            navigate("/dashboard/projects");
        } catch (error) {
            console.error('Error Updating the project:', error);
            setErrorMessage('Not valid input, try again');
        }
    }
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

        <div className="BY_editProject">
            <div className="container">
                <div className='topSection'>
                    <h2>Edit Project</h2>
                </div>
                <div className="contentSection">
                    <form onSubmit={(event) => sendData(event)} className='form'>
                        <div className='field long'>
                            <label>
                                Title
                            </label>
                            {/*  */}
                            <input type='text' placeholder='Portfolio Project' defaultValue={project.title} onChange={(e) => { setTitle( e.target.value) }} />
                            {/* <p>test</p> */}
                        </div>
                        <div className='field'>
                            <label>
                                Year
                            </label>
                            <input type='text' placeholder='2022' defaultValue={project.year} onChange={(e) => { setYear(e.target.value) }} />
                            {/* <p>test</p> */}
                        </div>
                        <div className='field'>
                            <label>
                                Category
                            </label>
                            <input type='text' placeholder='Full Stack' defaultValue={project.category} onChange={(e) => { setCategory(e.target.value) }} />
                            {/* <p>test</p> */}
                        </div>
                        <div className='field long'>
                            <label>
                                Description 
                            </label>
                            <input type='text' placeholder='This Project implements ....' defaultValue={project.description} onChange={(e) => { setDescription(e.target.value) }} />
                            {/* <p>test</p> */}
                        </div>
                        <div className='field long'>
                            <label > Image </label>
                            <img src={`${dev.url.PUBLIC_URL}${project.image}`} alt="" className='project_image' />
                            <input type='file' id='image'
                                onChange={(e) => {
                                    if (e.target.files && e.target.files.length > 0) {
                                        setImage(e.target.files[0]);
                                    }
                                }} />
                            <label htmlFor='image' className='image_label'>

                                Change Image

                                {/* {image && <img src={image} alt="Uploaded" />} */}
                            </label>
                            <p>png, jpg, jpeg, gif only</p>
                        </div>

                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                        <div className="buttonSection">

                            <input type="submit" value="Save" className='submit' />

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

export default EditProject;