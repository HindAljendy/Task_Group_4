import { useState } from "react";

const PortfolioSection = () => {
  const [active,setActive] = useState("all")
  return (
    <div
      id="portfolio"
      className="lg:w-[80%]  lg:ml-[300px] my-[10%] py-[5%] bg-[#f5f8fd]"
    >
      <div className="px-4">
        <h3 className=" section-title ">Portfolio</h3>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <div className="flex items-center gap-6 rounded-[15px] bg-[#fff] w-fit p-3">
          <span onClick={()=>setActive("all")} className={`cursor-pointer ${active === "all" ? "text-[blue]":""}`}>ALL</span>
          <span onClick={()=>setActive("app")} className={`cursor-pointer ${active === "app" ? "text-[blue]":""}`}>App</span>
          <span onClick={()=>setActive("web")} className={`cursor-pointer ${active === "web" ? "text-[blue]":""}`}>Web</span>
          <span onClick={()=>setActive("card")} className={`cursor-pointer ${active === "card" ? "text-[blue]":""}`}>Card</span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
