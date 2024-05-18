import axios from "axios";
import { useEffect, useState } from "react";
import { API } from "../../../../api/axios";
import PortfolioDitails from "./portfolio.details";

const PortfolioSection = () => {
  const [active, setActive] = useState("all");
  const [projects, setProjects] = useState([]);
  const [Category, setCategory] = useState("");

  useEffect(() => {
    axios.get(API.GET.projects).then((res) => {
      setProjects(res.data.data);
    });
  }, []);
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
        {projects.map((i: any, index: number) => (
          <div
                                className="flex items-center gap-6 rounded-[15px] bg-[#fff] w-fit p-3"
          >
            <span
              onClick={() => setActive(i.category)}
              className={`cursor-pointer ${
                active === i.category ? "text-[blue]" : ""
              }`}
            >
              {i.category}
            </span>
          </div>
        ))}

        {projects.length == 0 && (
          <p className="flex flex-col align-middle items-center text-red-600">
            No projects yet
          </p>
        )}
        {projects?.map((item: any, index: number) => (
          <>
            {active === item.category ? (
              <div
                className="sm:grid md:grid-cols-3 sm:grid-cols-2 gap-3"
                key={index}
              >
                <PortfolioDitails
                  id={item.id}
                  year={item.year}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  category={item.category}
                />
              </div>
            ) : (
              ""
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
