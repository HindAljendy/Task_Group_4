import { Link } from "react-router-dom";
import { Project } from "../../configs/global";

const PortfolioDitails: React.FC<Project> = ({id, image, year, description, title}) => {
  return (
    <div>
      <Link to={"/projects"} key={id}>
        <div className="w-full min-h-[35vh] bg-white bg-opacity-20 backdrop-blur border  shadow-[bg-slate-700] rounded-lg p-3 shadow-inner">
          <img
            src={image}
            width={500}
            height={300}
            className="rounded w-full"
            alt=""
          />
          <br />
          <h1 className="font-Poppins text-[16px] ">{title}</h1>
        <p>{description}</p>
        <span>{year}</span>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioDitails;
