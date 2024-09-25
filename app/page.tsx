"use client";

import { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import banner1 from "/public/mens/banner1.jpeg";
import banner2 from "/public/mens/banner2.webp";
import women2 from "/public/women2.png";
import women from "/public/women.png";
import men1 from "/public/mens/men1.png";
import camperas from "/public/camperas.png";

const Home: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-black ">
        <p className="text-xs text-center">
          Envios gratis a partir de los 60.000$
        </p>
      </div>
      <Header onToggle={() => setToggle(!toggle)} />

      <div className="lg:hidden">
        <Banner src={banner1} alt="Banner Hombres" />
        <div className="flex m-2 justify-around gap-2 mt-10">
          <ProductCard imageSrc={women2} title="Remera" price={500} />
          <ProductCard imageSrc={women} title="Remera" price={500} />
        </div>
        <Banner src={banner1} alt="Banner Hombres" />
        <div className="flex m-2 justify-around gap-2 mt-10">
          <ProductCard imageSrc={men1} title="Remera" price={500} />
          <ProductCard imageSrc={camperas} title="Remera" price={500} />
        </div>
      </div>

      <div className="lg:w-screen lg:min-h-screen lg:bg-slate-300 lg:flex lg:justify-center hidden">
        <div className="lg:w-[70%] lg:bg-white lg:min-h-screen lg:border-l-2 lg:border-r-2 lg:border-black">
          <Banner src={banner2} alt="Banner Hombres" />
          <div className="flex m-2 justify-around gap-2 mt-10">
            <ProductCard imageSrc={women2} title="Remera" price={500} />
            <ProductCard imageSrc={women} title="Remera" price={500} />
          </div>
          <Banner src={banner2} alt="Banner Hombres" />
          <div className="flex m-2 justify-around gap-2 mt-10">
            <ProductCard imageSrc={men1} title="Remera" price={500} />
            <ProductCard imageSrc={camperas} title="Remera" price={500} />
          </div>
        </div>
      </div>

      <Sidebar isOpen={toggle} onClose={() => setToggle(false)} />
    </main>
  );
};

export default Home;
