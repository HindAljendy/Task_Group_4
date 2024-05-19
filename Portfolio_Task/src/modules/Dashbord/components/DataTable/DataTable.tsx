import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { ICONS } from '../../utils/icons-dash';
import { dev } from '../../utils/back_urls';

import './DataTable.scss';
import { useState, useEffect } from 'react';
import * as projectServices from "../../services/projectsServices"
import { useNavigate } from 'react-router-dom';
import ConfirmaDelete from '../ConfirmDelete/ConfirmDelete';

interface Project {
    id: number;
    image: string;
    title: string;
    category: string;
    year: number;
}

interface DataTableProps {
    type: string;
}

const projectsColumns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'image',
        headerName: 'Image',
        width: 150,
        renderCell: (params: GridRenderCellParams) => (
            <img src={`${dev.url.PUBLIC_URL}${params.value}`}
                alt="Project Image"
                style={{ width: '100%' }}
                className='BY_image_row' />
        ),
    },

    { field: 'title', headerName: 'Project Title', width: 300 },
    { field: 'category', headerName: 'Category', width: 130 },
    { field: 'year', headerName: 'Year', type: 'number', width: 130 },
];

// const messagesColumns: GridColDef[] = [];

const DataTable: React.FC<DataTableProps> = ({ type }) => {
    const navigate = useNavigate();

    const goToEditPage = (id: any) => {
        navigate(`/dashboard/projects/edit/${id}`)
    }

    const goToShowPage = (id: any) => {
        navigate(`/dashboard/projects/show/${id}`)
    }

    const deleteProjectById = async (id: any) => {
        try {
            await projectServices.deleteProjectById(id);
            getAllData();
            navigate("/dashboard/projects");
        } catch (error) {
            console.error('Error in delete project:', error);
        }
    }

    //_____________________________________________________
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleDeleteClick = (projectId: any) => {
        setSelectedItemId(projectId);
        setShowConfirm(true);
        console.log(`projectId`, projectId)
        console.log(`select delete`, selectedItemId)
    };

    const handleDeleteConfirm = () => {
        deleteProjectById(selectedItemId);
        console.log(`Delete item with ID: ${selectedItemId}`);
        setShowConfirm(false);
    };

    const handleDeleteCancel = () => {
        setSelectedItemId(null);
        setShowConfirm(false);
    };
    useEffect(() => {

        console.log(`showConfirm`, showConfirm)
    }, [selectedItemId]);



    const [projects_rows, setProjectsRows] = useState<Project[]>([]);

    const getAllData = async () => {
        try {
            const response = await projectServices.getAllProjects();// call the api 
            const projectsData: Project[] = response;
            setProjectsRows(projectsData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setShowConfirm(false);
        getAllData();
    }, []);

    const projectsActionColumn: GridColDef = {
        field: "action",
        headerName: "Action",
        sortable: false,
        width: 130,
        renderCell: (params) => {
            return (
                <div className="cellAction" style={{ display: 'flex' }}>
                    <div className="editIconSection" onClick={() => goToEditPage(params.row.id)}>{ICONS.edit}</div>
                    <div className="viewIconSection" onClick={() => goToShowPage(params.row.id)}>{ICONS.view}</div>
                    <div className="deleteIconSection" onClick={() => handleDeleteClick(params.row.id)}>{ICONS.delete}</div>
                </div>
            );
        }
    };



    return (
        <div className="BY_datatable">
            <DataGrid
                className='BY_table'
                rows={projects_rows}
                columns={[...projectsColumns, projectsActionColumn]}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                    sorting: {
                        sortModel: [{ field: 'id', sort: 'desc' }],
                    },
                }}
                rowHeight={70}
                pageSizeOptions={[5, 10]}
            //checkboxSelection
            />

            {showConfirm && (
                <div className="ConfirmaDelete-overlay">
                    <ConfirmaDelete
                        onDelete={handleDeleteConfirm}
                        onCancel={handleDeleteCancel}
                    />
                </div>

            )}

        </div>
    );
}

export default DataTable;