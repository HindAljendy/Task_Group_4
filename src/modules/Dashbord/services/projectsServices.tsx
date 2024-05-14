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