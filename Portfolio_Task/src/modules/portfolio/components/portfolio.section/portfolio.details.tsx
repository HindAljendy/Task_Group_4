import { Project } from "../../configs/global";

const PortfolioDetails: React.FC<Project> = ({ image, year, description, title }) => {
  return (
    <div>
        <div  className="W-full bg-[#fff] rounded-[10px] p-[20px]">
          <img
            src={image}
            className="rounded-[15px] overflow-hidden w-full"
            alt={title}
          />
          <br />
          <h1 className="w-[95%] text-[19px] my-[25px] mr-[20%] font-Poppins font-bold ">
           {title}</h1>
          <p className="py-4 ">{description}</p>
          <span>{year}</span>
        </div>
    </div>
  );
};

export default PortfolioDetails;
