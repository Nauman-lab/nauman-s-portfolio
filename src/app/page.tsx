import Image from "next/image";
import Header from "./(components)/Header/Header";
import About from "./(components)/About/About";
import MyServices from "./(components)/MyServices/MyServices";
import MyPortfolio from "./(components)/MyPortfolio/MyPortfolio";
import Skills from "./(components)/Skills/Skills";
import Testemonials from "./(components)/Testemonials/Testemonials";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <MyServices />
      <MyPortfolio />
      <Skills />
      <Testemonials />
      {/* <button className="btn btn-secondary">Two</button> */}
    </>
  );
}
