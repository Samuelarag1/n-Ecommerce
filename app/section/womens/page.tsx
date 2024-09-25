"use client";

import { useState } from "react";
import Header from "../../../components/Header";
import Banner from "../../../components/Banner";
import ProductCard from "../../../components/ProductCard";
import Sidebar from "../../../components/Sidebar";

//! Banners
import girls from "/public/girls.png";
import girls2 from "/public/girls2.webp";

//? ImagesCard

import women1 from "/public/womens/women1.jpg";
import women2 from "/public/womens/women2.jpg";
import women3 from "/public/womens/women3.jpg";
import women4 from "/public/womens/women4.jpg";

const Home: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <main className="min-h-screen bg-primary">
      {" "}
      <div className="bg-black ">
        <p className="text-xs text-center">
          Envios gratis a partir de los 60.000$
        </p>
      </div>
      <Header onToggle={() => setToggle(!toggle)} />
      <div className="lg:hidden">
        <Banner src={girls} alt="Kids Banner" />
        <div className="flex m-2 justify-around gap-2 mt-10">
          <ProductCard imageSrc={women2} title="Remera" price={500} />
          <ProductCard imageSrc={women3} title="Remera" price={500} />
        </div>
        <Banner src={girls2} alt="Kids Banner" />
        <div className="flex m-2 justify-around gap-2 mt-10">
          <ProductCard imageSrc={women1} title="Remera" price={500} />
          <ProductCard imageSrc={women4} title="Remera" price={500} />
        </div>
      </div>
      <div className="lg:w-screen lg:min-h-screen lg:bg-slate-300 lg:flex lg:justify-center hidden">
        <div className="lg:w-[70%] lg:bg-white lg:min-h-screen lg:border-l-2 lg:border-r-2 lg:border-black">
          <Banner src={girls} alt="Kids Banner" />
          <div className="flex m-2 justify-around gap-2 mt-10">
            <ProductCard imageSrc={women1} title="Remera" price={500} />
            <ProductCard imageSrc={women4} title="Remera" price={500} />
          </div>
          <Banner src={girls2} alt="Kids Banner" />
          <div className="flex m-2 justify-around gap-2 mt-10">
            <ProductCard imageSrc={women2} title="Remera" price={500} />
            <ProductCard imageSrc={women3} title="Remera" price={500} />
          </div>
        </div>
      </div>
      <Sidebar isOpen={toggle} onClose={() => setToggle(false)} />
    </main>
  );
};

export default Home;
