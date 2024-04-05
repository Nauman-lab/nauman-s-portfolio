import React from "react";

interface ServiceData {
  imageSrc: string;
  heading: string;
  paragraph: string;
}

interface ServicesCardProps {
  serviceData: ServiceData;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ serviceData }) => {
  return (
    <div className="lg:flex-1 w-full md:w-1/4">
      <img src={serviceData.imageSrc} alt="Service" />
      <h3 className="text-h-one text-base font-bold my-3">
        {serviceData.heading}
      </h3>
      <p className="font-normal text-h-one">{serviceData.paragraph}</p>
    </div>
  );
};

export default ServicesCard;
