import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="bg-main-section">
      <div className="container mx-auto px-5 gap-4 grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col align-middle justify-center space-y-7 md:order-first py-9">
          <h4 className="font-normal text-h-one text-lg md:text-left text-center">
            UX Designer
          </h4>
          <h3 className="text-h-one text-5xl leading-10 font-bold md:text-left text-center">
            Hi There, I’m{" "}
          </h3>
          <h3 className="text-h-three text-5xl leading-10 font-bold md:text-left text-center">
            Sarah Jones
          </h3>
          <p className="font-normal text-h-one md:text-left text-center md:w-1/2 xs:1">
            Welcome to my portfolio of captivating digital experiences. Explore
            my work and let's create something extraordinary together.
          </p>

          <div className="flex gap-x-5 justify-center md:justify-start">
            <a className="btn rounded-none bg-h-one text-h-two text-base py-[10px]">
              Hire Me
            </a>
            <a className="btn rounded-none bg-h-two hover:bg-h-two text-h-one text-base py-[10px]">
              Portfolio
            </a>
          </div>
        </div>
        <div
          className="flex align-middle order-first"
          style={{ width: "100%", height: "100%" }}
        >
          <Image
            src="/girlimg.png"
            alt="person"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
