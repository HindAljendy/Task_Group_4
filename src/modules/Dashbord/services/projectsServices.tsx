import axios from 'axios';
import { dev } from '../utils/back_urls';

const url = dev.url.BASE_URL;
const url_projects = url + "projects";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MTYxMzI3ODcsImV4cCI6MTcxNjEzNjM4NywibmJmIjoxNzE2MTMyNzg3LCJqdGkiOiJBWUs2bFVSODdtd2tWZUQxIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.9ZXIxMQCkwMtEcOeAJzVd7XvIHg1scGd8pdyOoyOH_I";


export async function getAllProjects() {
    try {
        const response = await axios.get(url_projects);
        if (response.status === 200) {
            const projectsData = response.data;
            return projectsData.data;
        } else {
            throw new Error('Failed to get projects');
        }
    } catch (error: any) {
        throw new Error(`Error: ${error.message}`);
    }
}


export async function addNewProject(data: any) {
    try {
        const response = await axios.post(url_projects, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                //'Authorization': `Bearer ${token}`,
                'Authorization': `Bearer ${token}`
            },
        });
        if (response.status === 200) {
            const projectData = response.data;
            return projectData.data;
        } else {
            throw new Error('Failed to create new project');
        }
    } catch (error: any) {
        throw new Error(`Error: ${error.message}`);
    }
}


export async function editProject(data: any, id: any) {
    try {
        const response = await axios.post(url_projects + '/' + id, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                //'Authorization': `Bearer ${token}`,
                'Authorization': `Bearer ${token}`
            },
        });
        if (response.status === 200) {
            const projectUpdatedData = response.data;
          //  console.log('projectUpdatedData ',projectUpdatedData)
            return projectUpdatedData;
        } else {
            throw new Error('Failed to create new project');
        }
    } catch (error: any) {
        throw new Error(`Error: ${error.message}`);
    }
}


export async function getProjectById(id: any) {
    try {
        const response = await axios.get(url_projects + '/' + id,{
            headers: {
                'Content-Type': 'multipart/form-data',
                //'Authorization': `Bearer ${token}`,
                'Authorization': `Bearer ${token}`
            },
        });

        if (response.status === 200) {
            const projectData = response.data;
            return projectData;
        } else {
            throw new Error(`Failed to get project with id=  ${id}`);
        }
    } catch (error: any) {
        throw new Error(`Error: ${error.message}`);
    }
}


export async function deleteProjectById(id: any) {
    try {
        const response = await axios.delete(url_projects + '/' + id,{
            headers: {
                'Content-Type': 'multipart/form-data',
                //'Authorization': `Bearer ${token}`,
                'Authorization': `Bearer ${token}`
            },
        });

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`Failed to delete project with id=  ${id}`);
        }
    } catch (error: any) {
        throw new Error(`Error: ${error.message}`);
    }
}