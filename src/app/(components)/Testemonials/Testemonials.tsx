import React from "react";
import TestemonialsSlider from "../TestemonialsSlider/TestemonialsSlider";
import Image from "next/image";

const Testemonials = () => {
  return (
    <>
      <div className="bg-main-section flex flex-col justify-center items-center pb-3">
        <div className="flex align-middle">
          <Image
            src="/upper-cemi-circle.png"
            alt="person"
            layout="responsive"
            width={122}
            height={122}
          />
        </div>
        <h2 className="text-3xl text-h-one font-bold text-center my-8">
          Testemonials
        </h2>
        <div className="container mx-auto px-5 gap-4">
          <TestemonialsSlider />
        </div>
      </div>
    </>
  );
};

export default Testemonials;
