import axios from "axios";
import { useEffect, useState } from "react";
import { API } from "../../../../api/axios";
import PortfolioDetails from "./portfolio.details";

const PortfolioSection = () => {
  const [active, setActive] = useState<string>("");
  const [projects, setProjects] = useState<any[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axios
      .get(API.GET.projects)
      .then((res) => {
        if (res.data && res.data.data) {
          setProjects(res.data.data);
          console.log("successfull");
        } else {
          console.error("Unexpected response structure:", res);
          setError("Unexpected response structure");
        }
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setError("Error fetching projects");
      });
  }, []);

  return (
    <div id="portfolio" className="lg:w-[80%] lg:ml-[300px] my-[10%] py-[5%] bg-[#f5f8fd]">
      <div className="px-4">
        <h3 className="section-title">Portfolio</h3>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>

        {error && (
          <p className="flex flex-col align-middle items-center text-red-600">
            {error}
          </p>
        )}

        {projects.length === 0 && !error && (
          <p className="flex flex-col align-middle items-center text-red-600">
            No projects yet
          </p>
        )}

        {projects.map((i, index) => (
          <div className="flex items-center gap-6 rounded-[15px] bg-[#fff] w-fit p-3" key={index}>
            <span
              onClick={() => setActive(i.category)}
              className={`cursor-pointer ${active === i.category ? "text-[blue]" : ""}`}
            >
              {i.category}
            </span>
          </div>
        ))}

        {projects.map((item, index) => (
          active === item.category && (
            <div className="sm:grid md:grid-cols-3 sm:grid-cols-2 gap-3" key={index}>
              <PortfolioDetails
                id={item.id}
                year={item.year}
                title={item.title}
                description={item.description}
                image={item.image}
                category={item.category}
              />
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
