import React from "react";

interface MyPortfolioData {
  imageSrc: string;
  heading: string;
  paragraph: string;
  arrowImageSrc: string;
}

interface MyPortfolioCardProps {
  myPortfolioData: MyPortfolioData;
}

const MyPortfolioCard: React.FC<MyPortfolioCardProps> = ({
  myPortfolioData,
}) => {
  return (
    <>
      <img src={myPortfolioData.imageSrc} alt="portfolio" className="w-full" />
      <h3 className="text-h-one text-base font-bold my-3">
        {myPortfolioData.heading}
      </h3>
      <div className="flex justify-between">
        <h3 className="font-normal text-h-one">{myPortfolioData.paragraph}</h3>
        <img
          className="-mt-4"
          src={myPortfolioData.arrowImageSrc}
          alt="arrow"
        />
      </div>
    </>
  );
};

export default MyPortfolioCard;
