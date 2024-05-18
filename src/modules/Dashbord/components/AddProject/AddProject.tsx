import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as projectServices from "../../services/projectsServices"
import { ICONS } from '../../utils/icons-dash';

import './AddProject.scss'

const AddProject = () => {

    const navigate = useNavigate();
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
            await projectServices.addNewProject(data);
            navigate("/dashboard/projects");
        } catch (error) {
            console.error('Error creating new project:', error);
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
        <div className="BY_addProject">
            <div className="container">
                <div className='topSection'>
                    <h2>Add New Project</h2>
                </div>
                <div className="contentSection">
                    <form onSubmit={(event) => sendData(event)} className='form'>
                        <div className='field long'>
                            <label>
                                Title <sup>*</sup>
                            </label>
                            <input type='text' placeholder='Portfolio Project' onChange={(e) => { setTitle(e.target.value) }} />
                            {/* <p>test</p> */}
                        </div>
                        <div className='field'>
                            <label>
                                Year <sup>*</sup>
                            </label>
                            <input type='text' placeholder='2022' onChange={(e) => { setYear(e.target.value) }} />
                            {/* <p>test</p> */}
                        </div>
                        <div className='field'>
                            <label>
                                Category <sup>*</sup>
                            </label>
                            <input type='text' placeholder='Full Stack' onChange={(e) => { setCategory(e.target.value) }} />
                            {/* <p>test</p> */}
                        </div>
                        <div className='field long'>
                            <label>
                                Description <sup>*</sup>
                            </label>
                            <input type='text' placeholder='This Project implements ....' onChange={(e) => { setDescription(e.target.value) }} />
                            {/* <p>test</p> */}
                        </div>
                        <div className='field long'>
                            <label > Image <sup>*</sup></label>

                            <input type='file' id='image'
                                onChange={(e) => {
                                    if (e.target.files && e.target.files.length > 0) {
                                        setImage(e.target.files[0]);
                                    }
                                }} />
                            <label htmlFor='image' className='image_label'>

                                Upload an Image

                                {/* {image && <img src={image} alt="Uploaded" />} */}
                            </label>
                            {/* <p>test</p> */}
                        </div>

                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                        <div className="buttonSection">


                            <input type="back" value="Submit" className='submit' />

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

export default AddProject;