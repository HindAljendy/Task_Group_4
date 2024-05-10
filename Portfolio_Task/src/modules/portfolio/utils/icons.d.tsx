import { AiOutlineHome } from "react-icons/ai";
import { BiBookContent, BiServer } from "react-icons/bi";
import { BsInstagram, BsList } from "react-icons/bs";
import { CiMobile2 } from "react-icons/ci";
import { FaChevronRight, FaFacebookF, FaLinkedinIn, FaRegFile, FaSkype, FaTwitter } from "react-icons/fa";
import { GrLogin } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
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
    email: <TfiEmail />,
    list: <BsList />,
    close: <IoMdClose />,
    login: <GrLogin />



}