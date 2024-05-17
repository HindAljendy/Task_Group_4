import React, { useState, useEffect } from "react";

const Hero = () => {
  interface TypewriterProps {
    text: string;
  }

  const Typewriter: React.FC<TypewriterProps> = ({ text }) => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 100); // Adjust the speed here (milliseconds per character)

      return () => clearInterval(interval);
    }, [text]);

    return <p>{displayText}</p>;
  };
  const paragraphText =
    "Software engineer ,Fullstack developer, problem solver ";

  return (
    <div id="hero" className="lg:!w-[80%] lg:ml-[300px] !w-full mb-[10%] top-0 ">
      <div className="flex flex-col justify-center ml-[20%] pt-[200px] relative z-2">
        <p className="font-[700] text-[30px] text-white">Alex Smith</p>
        <p className="text-white lg:w-max md:w-[300px] w-[200px]">
          <Typewriter text={paragraphText} />
        </p>
      </div>
    </div>
  );
};

export default Hero;
