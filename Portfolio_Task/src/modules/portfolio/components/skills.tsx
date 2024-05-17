import { useEffect, useRef, useState } from "react";
import { ProgressBar } from "react-bootstrap"
import { useSpring, animated } from 'react-spring';

const Skills = () => {
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
    <div
      id="skills"
      className="lg:w-[80%] w-full lg:ml-[300px] my-[10%] py-[5%] bg-[#f5f8fd]"
    >
      <div className="px-4">
        <h3 className=" section-title ">Skills</h3>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat 
          </p>
          <animated.div style={animationProps}>
            <div  ref={sectionRef} className="grid md:grid-cols-2 gap-6">
            <div className=""><span className="">React js</span> <ProgressBar  animated now={100} label="100%" /></div> 
            
            <div className=""><span>Typescript</span>  <ProgressBar animated now={95} label="95%" /></div>
            <div className=""><span>Rest api</span>  <ProgressBar animated now={95} label="95%" /></div>
            <div className=""><span>Laravel</span>  <ProgressBar animated now={80} label="80%" /></div>
            </div>
            </animated.div>

          </div>

    </div>
  )
}

export default Skills
