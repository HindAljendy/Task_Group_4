// hadeels part //
import { Image } from "react-bootstrap";
<<<<<<< HEAD
import { IMAGES } from "../utils/images.d";
import { ICONS } from "../utils/icons.d";
import { useState } from "react";
=======
import { useState } from "react";
import { IMAGES } from "../utils/images.d";
import { ICONS } from "../utils/icons.d";
>>>>>>> 1c99ef06b5c570141fc8b7646136ea5775989d61

const Sidebar = () => {
  const [active,setActive] = useState('/')
  return (
    <div className="fixed top-0 left-0 bottom-0 w-[300px] transition-all ease-in-out duration-500 z-9997 overflow-y-auto bg-gray-900 px-4">
      <Image
        src={IMAGES.profile}
        alt=""
        className="rounded-full mx-auto my-[15px] block w-[120px]  border-8 border-solid border-gray-800 "
      />
      <a
        href="/"
        className="text-[24px] font-semibold ml-[70px] text-white font-poppins"
      >
        Alix Smith
      </a>
      <div className=" flex ml-[20px] my-3 text-white">
        <span className="H-contacts !pl-[10px]">{ICONS.twitter}</span>
        <span className="H-contacts !pl-[8px]">{ICONS.facebook}</span>
        <span className="H-contacts !pl-[8px]">{ICONS.instagram}</span>
        <span className="H-contacts !pl-[8px]">{ICONS.skype}</span>
        <span className="H-contacts !pl-[10px]">{ICONS.linkedin}</span>
      </div>
      <div className="my-6 H-nav">
        <a href="#home" onClick={()=>setActive('home')} className={` ${active === 'home' ? 'text-white':''}`}><i className={` ${active === 'home' ? '!text-[#149ddd]':''}`}>{ICONS.home} </i> <span className="" > Home</span></a>
        <a href="#about" ><i>{ICONS.about} </i> <span className="" >  About</span></a>
        {/* <a href="#resume" ><i>{ICONS.resume} </i> <span className="" >  Resume</span></a> */}
        <a href="#portfolio" ><i>{ICONS.portfolio} </i> <span className="" >  Portfolio</span></a>
        {/* <a href="#services" ><i>{ICONS.services} </i> <span className="" >  Services</span></a> */}
        <a href="#contact" ><i>{ICONS.contact} </i> <span className="" > Contact</span></a>
      </div>
     
    
    </div>
  );
};

export default Sidebar;
