// hadeels part //
import { Image } from "react-bootstrap";
import { IMAGES } from "../utils/images.d";
import { ICONS } from "../utils/icons.d";

const Sidebar = () => {
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
      <div className=" flex ml-[20px] text-white">
        <span className="H-contacts !pl-[10px]">{ICONS.twitter}</span>
        <span className="H-contacts !pl-[8px]">{ICONS.facebook}</span>
        <span className="H-contacts !pl-[8px]">{ICONS.instagram}</span>
        <span className="H-contacts !pl-[8px]">{ICONS.skype}</span>
        <span className="H-contacts !pl-[10px]">{ICONS.linkedin}</span>
      </div>
    </div>
  );
};

export default Sidebar;
