import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-h-one pt-12">
      <div className="container mx-auto px-5 gap-9 flex flex-col justify-center">
        <h2 className="text-3xl text-h-two font-bold text-center">About Me</h2>
        <div className="container mx-auto max-w-screen-lg">
          <p className="font-normal text-h-two text-center">
            I'm Sara Jones, a UI/UX designer dedicated to crafting intuitive and
            visually stunning digital experiences. With a passion for
            user-centric design, I transform ideas into functional and beautiful
            interfaces. Let's collaborate and shape the future of design
            together.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-center text-main-section text-6xl font-bold">
              502
            </h4>
            <h3 className="text-center text-h-two font-bold text-lg">
              Projects Done
            </h3>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-center text-main-section text-6xl font-bold">
              10+
            </h4>
            <h3 className="text-center text-h-two font-bold text-lg">
              Years of Experience
            </h3>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-center text-main-section text-6xl font-bold">
              273+
            </h4>
            <h3 className="text-center text-h-two font-bold text-lg">
              Clients Served
            </h3>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-9">
        <Image
          src="/about-semi-circle.png"
          alt="semi-circle"
          width={234}
          height={234}
          style={{ textAlign: "center" }}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default About;
