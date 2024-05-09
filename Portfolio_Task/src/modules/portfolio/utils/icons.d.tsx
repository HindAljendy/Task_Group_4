import { AiOutlineHome } from "react-icons/ai";
import { BiBookContent, BiServer } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { CiMobile2 } from "react-icons/ci";
import { FaChevronRight, FaFacebookF, FaLinkedinIn, FaRegFile, FaSkype, FaTwitter } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlinePersonOutline } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

export const ICONS = {
    twitter: <FaTwitter /> ,
    facebook:  <FaFacebookF />,
    instagram:  <BsInstagram />,
    skype: <FaSkype />,
    linkedin: <FaLinkedinIn />,
    home: <AiOutlineHome />,
    about: <MdOutlinePersonOutline />,
    resume: <FaRegFile />,
    services: <BiServer />,
    portfolio: <BiBookContent />,
    contact: <MdOutlineEmail />,
    arrow: <FaChevronRight />,
    location: <IoLocationOutline />,
    mobile: <CiMobile2 />,
    email: <TfiEmail />



}