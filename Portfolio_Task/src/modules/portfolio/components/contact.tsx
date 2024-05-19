import { useEffect, useRef, useState } from "react";
import { ICONS } from "../utils/icons.d";
import { useSpring, animated } from 'react-spring';

const Contact = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.8}
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

  const animationProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px)' : 'translateY(50px)',
  });
  return (
    <div id="contact" className="md:w-[80%] md:ml-[300px] my-[10%]">
      <div className="px-4">
        <h3 className="section-title">Contact</h3>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <animated.div style={animationProps}>

        <div  ref={sectionRef} className="md:flex justify-between my-4 w-[98%] m-auto ">
          <div className="md:w-[40%] p-[30px] md:my-0 my-2 shadow-lg ">
            <i className="contact-icons">{ICONS.location}</i>
            <h4 className="font-[600] text-[22px] text-[#050d18]">Location:</h4>
            <p className="text-[14px] text-[#173b6c]">
              A108 Adam Street, New York, NY 535022
            </p>
            <i className="contact-icons">{ICONS.email}</i>
            <h4 className="font-[600] text-[22px] text-[#050d18]">Email:</h4>
            <p className="text-[14px] text-[#173b6c]">info@example.com</p>
            <i className="contact-icons">{ICONS.mobile}</i>
            <h4 className="font-[600] text-[22px] text-[#050d18]">Call:</h4>
            <p className="text-[14px] text-[#173b6c]">+1 5589 55488 55s</p>
            <iframe
              style={{ width: "100%", height: "290px" }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
            />
          </div>
          <div className="md:w-[58%] md:my-0 my-2 p-[30px] shadow-lg ">
            <form className="w-full ">
              <div className="flex   gap items-center">
                <div className="w-full ">
                  <span className="block py-2">Your Name</span>
                  <input
                    type="text"
                    className="rounded-none border border-separate h-[44px] p-2 w-full"
                    name="name"
                    id="name"
                    required
                  />
                </div>
                <div className="w-full ml-6">
                  <span className="block py-2 ">Your Name</span>
                  <input
                    className="rounded-none border border-separate h-[44px]  p-2 w-full"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
              </div>
              <span className="block py-2 mt-2">Subject</span>
              <input
                type="text"
                className="w-full rounded-none border border-separate h-[44px] p-2 mb-4"
                name="subject"
                id="subject"
                required
              />
              <span>Message</span>
              <textarea
                className="w-full rounded-none border  border-separate h-[200px] mt-2"
                name="message"
                required
              />
              <div className="text-center bg-[#149ddd] border-0 px-[24px] py-[10px] text-[#fff] transition-[.4s] rounded-[4px] max-w-max mx-auto my-4">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
        </animated.div>
      </div>
    </div>
  );
};

export default Contact;
