import axios from 'axios';
import { dev } from '../utils/back_urls';

const url = dev.url.BASE_URL;
const url_projects = url + "projects";


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
        const token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MTYwMzM1MjAsImV4cCI6MTcxNjAzNzEyMCwibmJmIjoxNzE2MDMzNTIwLCJqdGkiOiIwT0tiM2xiUEdZZWExUGlmIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.uRmjpczXcSFvTegmJsU6T4EzPp2M7id3rX5ene8l2Cw";
        const response = await axios.post(url_projects, data, {
            headers: {
              'Content-Type': 'multipart/form-data',
             //'Authorization': `Bearer ${token}`,
             'Authorization':`Bearer ${token}`
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