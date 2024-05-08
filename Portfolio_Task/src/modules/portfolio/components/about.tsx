import { Image } from "react-bootstrap";
import { ICONS } from "../utils/icons.d";
import { IMAGES } from "../utils/images.d";
const About = () => {
  return (
    <div id="about" className="w-[80%] ml-auto">
      <div className="w-[95%] m-auto">
        <div className="section-title">
          <h2 className="text-[#173b6c] font-[700] text-[26px]">About</h2>
          <p className="mb-6">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="grid grid-cols-2 w-full">
          <div className="w-[70%] mr-4" data-aos="fade-right ">
            <Image src={IMAGES.profile} className="" alt="" />
          </div>
          <div className=" pt-4 relative right-[120px] top-[-20px] content" data-aos="fade-left">
            <h3 className="text-[#173b6c] font-[700] text-[26px] mb-2">UI/UX Designer &amp; Web Developer.</h3>
            <p className="italic my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="grid grid-cols-2 my-2">
              <div className="">
                <ul>
                  <li className="flex items-center ">
                    <i className="text-[#149ddd] ">{ICONS.arrow}</i> <strong className="m-2">Birthday:</strong>{" "}
                    <span>1 May 1995</span>
                  </li>
                  <li className="flex items-center">
                    <i className="text-[#149ddd]">{ICONS.arrow}</i> <strong className="m-2">Website:</strong>{" "}
                    <span>www.example.com</span>
                  </li>
                  <li className="flex items-center">
                    <i className="text-[#149ddd]">{ICONS.arrow}</i> <strong className="m-2">Phone:</strong>{" "}
                    <span>+123 456 7890</span>
                  </li>
                  <li className="flex items-center">
                    <i className="text-[#149ddd]">{ICONS.arrow}</i> <strong className="m-2">City:</strong>{" "}
                    <span>New York, USA</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li className="flex items-center">
                    <i className="text-[#149ddd]">{ICONS.arrow}</i> <strong className="m-2">Age:</strong>{" "}
                    <span>30</span>
                  </li>
                  <li className="flex items-center">
                    <i className="text-[#149ddd]">{ICONS.arrow}</i> <strong className="m-2">Degree:</strong>{" "}
                    <span>Master</span>
                  </li>
                  <li className="flex items-center">
                    <i className="text-[#149ddd] ">{ICONS.arrow}</i>{" "}
                    <strong className="m-2">PhEmailone:</strong> <span>email@example.com</span>
                  </li>
                  <li className="flex items-center">
                    <i className="text-[#149ddd] ">{ICONS.arrow}</i>{" "}
                    <strong className="m-2">Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio
              vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
              incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
              maxime officiis quidem quia. Sed et consectetur qui quia
              repellendus itaque neque. Aliquid amet quidem ut quaerat
              cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium
              dolores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
