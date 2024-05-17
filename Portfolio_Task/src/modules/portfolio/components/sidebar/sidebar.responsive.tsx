import { useState } from "react";
import { ICONS } from "../../utils/icons.d";
import Sidebar from "./sidebar";

const SideBar = () => {
    const [close, setOpen] = useState(true);

  return (
    <div>
        <div className="fixed lg:block hidden top-0 left-0 bottom-0 w-[300px] transition-all ease-in-out duration-500 z-9997 overflow-y-auto bg-gray-900 px-4">
                <Sidebar/>
            </div>
          <div className="lg:hidden h-mobile-nav" onClick={()=>setOpen(!close)}>
      {close === true ? ICONS.list : ICONS.close}
      
      {close === false ?(
        <div className={`nav-animation fixed top-0 left-0 bottom-0 w-[300px] transition-all ease-in-out duration-500 z-9997 overflow-y-auto bg-gray-900 px-4  nav-animation-in`}>
            <Sidebar/>
        </div>
      ):     ''}
    </div>
    </div>
  )
}

export default SideBar
