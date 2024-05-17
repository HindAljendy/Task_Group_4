import { Image } from "react-bootstrap";
import { ICONS } from "../utils/icons.d";
import { IMAGES } from "../utils/images.d";
import "./../../../index.css";
import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from 'react-spring';

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3}
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animationPropsleft = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0px)' : 'translateX(-50px)',
  });

  const animationPropsright = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0px)' : 'translateX(50px)',
  });
  return (
    <div id="about" className="lg:w-[80%] lg:ml-[300px] w-full my-6">
      <div className="px-4 ">
        <h3 className="section-title ">About</h3>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <div className="my-2 md:flex items-center justify-between">

          <div ref={sectionRef} className=" md:w-[30%] w-[95%] mx-auto md:my-0 my-2 ">
          <animated.div style={animationPropsleft}>

            <Image src={IMAGES.profile} alt="" />
            </animated.div>

          </div>

          <div className="md:w-[65%] w-[95%] md:mr-auto md:px-4">
           <animated.div style={animationPropsright}>

            <h3 className=" text-[#173b6c] font-[700] text-[26px]">
              UI/UX Designer &amp; Web Developer.
            </h3>
            <p className="italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className=" sm:flex">
              <ul className="!ml-[-30px]">
                <li>
                  {" "}
                  <i className="arrow inline-block text-center ">
                    {ICONS.arrow}
                  </i>
                  <strong> Birthday: </strong>
                  <span>1 May 1995</span>
                </li>
                <li className="my-2 ">
                  {" "}
                  <i className="arrow inline-block text-center">
                    {ICONS.arrow}
                  </i>
                  <strong> Website: </strong>
                  <span>www.example.com</span>
                </li>
                <li className="my-2 ">
                  {" "}
                  <i className="arrow inline-block text-center">
                    {ICONS.arrow}
                  </i>
                  <strong> Phone: </strong>
                  <span>+123 456 7890</span>
                </li>
                <li>
                  {" "}
                  <i className="arrow inline-block text-center">
                    {ICONS.arrow}
                  </i>
                  <strong> City: </strong>
                  <span>New York, USA</span>
                </li>
              </ul>

              <ul className="!ml-[-30px] sm:!ml-0">
                <li>
                  {" "}
                  <i className="arrow inline-block text-center">
                    {ICONS.arrow}
                  </i>
                  <strong> Age: </strong>
                  <span>1 May 1995</span>
                </li>
                <li className="my-2 ">
                  {" "}
                  <i className="arrow inline-block text-center">
                    {ICONS.arrow}
                  </i>
                  <strong> Degree: </strong>
                  <span>1 May 1995</span>
                </li>
                <li className="my-2 ">
                  {" "}
                  <i className="arrow inline-block text-center">
                    {ICONS.arrow}
                  </i>
                  <strong> PhEmailone: </strong>
                  <span>email@example.com</span>
                </li>
                <li>
                  {" "}
                  <i className="arrow inline-block text-center">
                    {ICONS.arrow}
                  </i>
                  <strong> Freelance: </strong>
                  <span>Available</span>
                </li>
              </ul>
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
            </animated.div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default About;
