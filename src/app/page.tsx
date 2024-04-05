import Image from "next/image";
import Header from "./(components)/Header/Header";
import About from "./(components)/About/About";
import MyServices from "./(components)/MyServices/MyServices";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <MyServices />
      {/* <button className="btn btn-secondary">Two</button> */}
    </>
  );
}
