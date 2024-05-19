import { CiLogout } from "react-icons/ci";
import { FaBars, FaUserEdit } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { GrFormView, GrProjects } from "react-icons/gr";
import { MdOutlineDelete } from "react-icons/md";

import { MdDeleteForever } from "react-icons/md";
import { FaPlusSquare } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdViewAgenda } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";

export const ICONS = {

    user_edit: <FaUserEdit /> ,
    projects: <GrProjects /> ,
    messages: <FaMessage />  ,
    bars    :<FaBars/>,
    logout: <CiLogout />,
    view:  <GrFormView />,
    delete:  <MdOutlineDelete />,
   
    delete: <MdDeleteForever />,
    plus: <FaPlusSquare />,
    edit: <FaEdit/>,
    view:<MdViewAgenda/>,
    arrow_left:<FaArrowLeft />

}