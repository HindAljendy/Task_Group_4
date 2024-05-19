// hadeels part //
import { Image } from "react-bootstrap";
import { useState } from "react";
import { IMAGES } from "../../utils/images.d";
import { ICONS } from "../../utils/icons.d";
import { Link } from "react-router-dom";
import Footer from "../footer";

const Sidebar = () => {
  const [active, setActive] = useState("#hero");
  return (
    <>
      <Image
        src={IMAGES.profile}
        alt=""
        className="rounded-full mx-auto my-[15px] block w-[120px]  border-8 border-solid border-gray-800 "
      />
      <a
        href="/"
        className="text-[24px] no-underline font-semibold ml-[70px] text-white  font-poppins "
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
      <div className="my-1 H-nav">
      
        <a
          href="#hero"
          onClick={() => setActive("#hero")}
          className={`no-underline ${active === "#hero" ? "text-white" : ""}`}
        >
          <i
            className={`no-underline ${
              active === "#hero" ? "!text-[#149ddd]" : ""
            }`}
          >
            {ICONS.home}{" "}
          </i>{" "}
          <span className=""> Home</span>
        </a>
      

        <a
          href="#about"
          onClick={() => setActive("#about")}
          className={`no-underline ${active === "#about" ? "text-white" : ""}`}
        >
          <i
            className={`no-underline ${
              active === "#about" ? "!text-[#149ddd]" : ""
            }`}
          >
            {ICONS.about}{" "}
          </i>{" "}
          <span className=""> About</span>
        </a>

        <a
          href="#skills"
          onClick={() => setActive("#skills")}
          className={`no-underline ${active === "#skills" ? "text-white" : ""}`}
        >
          <i
            className={`no-underline ${
              active === "#skills" ? "!text-[#149ddd]" : ""
            }`}
          >
            {ICONS.services}{" "}
          </i>{" "}
          <span className=""> Skills</span>
        </a>        <a
          href="#portfolio"
          onClick={() => setActive("#portfolio")}
          className={`no-underline ${
            active === "#portfolio" ? "text-white" : ""
          }`}
        >
          <i
            className={`no-underline ${
              active === "#portfolio" ? "!text-[#149ddd]" : ""
            }`}
          >
            {ICONS.portfolio}{" "}
          </i>{" "}
          <span className=""> Portfolio</span>
        </a>
     
        {/* <a href="#skills" ><i>{ICONS.services} </i> <span className="" >  Skills</span></a> */}
        <a
          href="#contact"
          onClick={() => setActive("#contact")}
          className={`no-underline ${
            active === "#contact" ? "text-white" : ""
          }`}
        >
          <i
            className={`no-underline ${
              active === "#contact" ? "!text-[#149ddd]" : ""
            }`}
          >
            {ICONS.contact}{" "}
          </i>{" "}
          <span className=""> Contact</span>
        </a>
        <Link
          to="/login"
          onClick={() => setActive("login")}
          className={`no-underline ${
            active === "login" ? "text-white" : ""
          }`}
        >
          <i
            className={`no-underline ${
              active === "login" ? "!text-[#149ddd]" : ""
            }`}
          >
            {ICONS.login}{" "}
          </i>{" "}
          <span className=""> Login</span>
        </Link>
     
      </div>
      <div className="mr-4"> <Footer/></div>

     
    </>
  );
};

export default Sidebar;
