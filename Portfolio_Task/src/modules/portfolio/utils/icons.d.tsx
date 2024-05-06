import { AiOutlineHome } from "react-icons/ai";
import { BiBookContent, BiServer } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaRegFile, FaSkype, FaTwitter } from "react-icons/fa";
import { MdOutlineEmail, MdOutlinePersonOutline } from "react-icons/md";

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
    contact: <MdOutlineEmail />

}