"use client";

import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import Banner from "../../../components/Banner";
import ProductCard from "../../../components/ProductCard";
import Sidebar from "../../../components/Sidebar";

//! Banners

import banner1 from "/public/mens/banner1.jpeg";
import banner2 from "/public/mens/banner2.webp";

//? ImagesCard

import men1 from "/public/mens/men1.png";
import men2 from "/public/mens/men2.webp";
import men3 from "/public/mens/men3.webp";
import men4 from "/public/mens/men4.webp";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import {
  IoChevronBackCircleSharp,
  IoChevronForwardCircleSharp,
} from "react-icons/io5";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [visibleSlides, setVisibleSlides] = useState<number>(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleSlides(4);
      } else if (window.innerWidth >= 768) {
        setVisibleSlides(3);
      } else {
        setVisibleSlides(2);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <main className="min-h-screen bg-third w-screen">
      <div className="bg-black">
        <p className="text-xs text-center text-white lg:text-lg">
          Envios gratis a partir de los 60.000$
        </p>
      </div>
      <Header onToggle={() => setToggle(!toggle)} />
      {/* Mobile Version */}
      <div className="lg:hidden min-h-screen">
        <Banner src={banner1} alt="Banner Hombres" />

        <CarouselProvider
          naturalSlideWidth={10}
          naturalSlideHeight={25}
          totalSlides={4}
          visibleSlides={visibleSlides}
          infinite={true}
          className="relative mt-10 max-w-3xl mx-auto"
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center z-10">
              <ButtonBack className="p-2 rounded-full shadow-lg">
                <IoChevronBackCircleSharp size={32} color="white" />
              </ButtonBack>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center z-10">
              <ButtonNext className="p-2 rounded-full shadow-lg">
                <IoChevronForwardCircleSharp size={32} color="white" />
              </ButtonNext>
            </div>

            <Slider className="overflow-hidden m-8">
              <Slide index={0}>
                <ProductCard imageSrc={men2} title="Remera" price={1500} />
              </Slide>
              <Slide index={1}>
                <ProductCard imageSrc={men3} title="Remera" price={5200} />
              </Slide>
              <Slide index={2}>
                <ProductCard imageSrc={men1} title="Remera" price={3500} />
              </Slide>
              <Slide index={3}>
                <ProductCard imageSrc={men4} title="Remera" price={500} />
              </Slide>
            </Slider>
          </div>
        </CarouselProvider>

        <Banner src={banner1} alt="Banner Hombres" />

        <CarouselProvider
          naturalSlideWidth={10}
          naturalSlideHeight={25}
          totalSlides={4}
          visibleSlides={visibleSlides}
          infinite={true}
          className="relative mt-10 max-w-3xl mx-auto"
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center z-10">
              <ButtonBack className="p-2 rounded-full shadow-lg">
                <IoChevronBackCircleSharp size={32} color="white" />
              </ButtonBack>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center z-10">
              <ButtonNext className="p-2 rounded-full shadow-lg ">
                <IoChevronForwardCircleSharp size={32} color="white" />
              </ButtonNext>
            </div>

            <Slider className="overflow-hidden m-8">
              <Slide index={0}>
                <ProductCard imageSrc={men2} title="Remera" price={1500} />
              </Slide>
              <Slide index={1}>
                <ProductCard imageSrc={men3} title="Remera" price={5200} />
              </Slide>
              <Slide index={2}>
                <ProductCard imageSrc={men1} title="Remera" price={3500} />
              </Slide>
              <Slide index={3}>
                <ProductCard imageSrc={men4} title="Remera" price={500} />
              </Slide>
            </Slider>
          </div>
        </CarouselProvider>
      </div>
      {/* Desktop Version */}
      <div className="lg:w-screen lg:min-h-screen lg:bg-secondary lg:flex lg:justify-center hidden">
        <div className="lg:w-[70%] lg:bg-third lg:min-h-screen ">
          <Banner src={banner2} alt="Banner Hombres" />
          <CarouselProvider
            naturalSlideWidth={10}
            naturalSlideHeight={25}
            totalSlides={4}
            visibleSlides={visibleSlides}
            infinite={true}
            className="relative mt-10 max-w-3xl mx-auto"
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center z-10">
                <ButtonBack className="p-2 rounded-full shadow-lg">
                  <IoChevronBackCircleSharp size={32} />
                </ButtonBack>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center z-10">
                <ButtonNext className="p-2 rounded-full shadow-lg">
                  <IoChevronForwardCircleSharp size={32} />
                </ButtonNext>
              </div>

              <Slider className="overflow-hidden m-8">
                <Slide index={0}>
                  <ProductCard imageSrc={men2} title="Remera" price={1500} />
                </Slide>
                <Slide index={1}>
                  <ProductCard imageSrc={men3} title="Remera" price={5200} />
                </Slide>
                <Slide index={2}>
                  <ProductCard imageSrc={men1} title="Remera" price={3500} />
                </Slide>
                <Slide index={3}>
                  <ProductCard imageSrc={men4} title="Remera" price={500} />
                </Slide>
              </Slider>
            </div>
          </CarouselProvider>

          <Banner src={banner1} alt="Banner Hombres" />
          <CarouselProvider
            naturalSlideWidth={10}
            naturalSlideHeight={25}
            totalSlides={4}
            visibleSlides={visibleSlides}
            infinite={true}
            className="relative mt-10 max-w-3xl mx-auto"
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center z-10">
                <ButtonBack className="p-2 rounded-full shadow-lg">
                  <IoChevronBackCircleSharp size={32} />
                </ButtonBack>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center z-10">
                <ButtonNext className="p-2 rounded-full shadow-lg">
                  <IoChevronForwardCircleSharp size={32} />
                </ButtonNext>
              </div>

              <Slider className="overflow-hidden m-8">
                <Slide index={0}>
                  <ProductCard imageSrc={men2} title="Remera" price={1500} />
                </Slide>
                <Slide index={1}>
                  <ProductCard imageSrc={men3} title="Remera" price={5200} />
                </Slide>
                <Slide index={2}>
                  <ProductCard imageSrc={men1} title="Remera" price={3500} />
                </Slide>
                <Slide index={3}>
                  <ProductCard imageSrc={men4} title="Remera" price={500} />
                </Slide>
              </Slider>
            </div>
          </CarouselProvider>
        </div>
      </div>
      <Sidebar isOpen={toggle} onClose={() => setToggle(false)} />

      <Footer />
    </main>
  );
};

export default Home;
