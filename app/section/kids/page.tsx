"use client";

import { useState } from "react";
import Header from "../../../components/Header";
import Banner from "../../../components/Banner";
import ProductCard from "../../../components/ProductCard";
import Sidebar from "../../../components/Sidebar";

//! Banners
import kids_banner_1 from "/public/kids_banner_1.webp";
import kids_banner_2 from "/public/kids_banner_2.jpg";

//? ImagesCard

import kids1 from "/public/kid1.webp";
import kids2 from "/public/kid2.webp";
import kids3 from "/public/kid3.webp";
import kids4 from "/public/kid4.webp";

const Home: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <main className="min-h-screen bg-white">
      {" "}
      <div className="bg-black ">
        <p className="text-xs text-center">
          Envios gratis a partir de los 60.000$
        </p>
      </div>
      <Header onToggle={() => setToggle(!toggle)} />
      <div className="lg:hidden">
        <Banner src={kids_banner_1} alt="Kids Banner" />

        <div className="flex m-2 justify-around gap-2 mt-10">
          <ProductCard imageSrc={kids3} title="Remera" price={500} />
          <ProductCard imageSrc={kids4} title="Remera" price={500} />
        </div>
        <Banner src={kids_banner_2} alt="Kids Banner" />
        <div className="flex m-2 justify-around gap-2 mt-10">
          <ProductCard imageSrc={kids1} title="Remera" price={500} />
          <ProductCard imageSrc={kids2} title="Remera" price={500} />
        </div>
      </div>
      <div className="lg:w-screen lg:min-h-screen lg:bg-slate-300 lg:flex lg:justify-center hidden">
        <div className="lg:w-[70%] lg:bg-white lg:min-h-screen lg:border-l-2 lg:border-r-2 lg:border-black">
          <Banner src={kids_banner_1} alt="Kids Banner" />
          <div className="flex m-2 justify-around gap-2 mt-10">
            <ProductCard imageSrc={kids1} title="Remera" price={500} />
            <ProductCard imageSrc={kids2} title="Remera" price={500} />
          </div>
          <Banner src={kids_banner_2} alt="Kids Banner" />
          <div className="flex m-2 justify-around gap-2 mt-10">
            <ProductCard imageSrc={kids3} title="Remera" price={500} />
            <ProductCard imageSrc={kids4} title="Remera" price={500} />
          </div>
        </div>
      </div>
      <Sidebar isOpen={toggle} onClose={() => setToggle(false)} />
    </main>
  );
};

export default Home;
