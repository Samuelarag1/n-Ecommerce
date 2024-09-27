"use client";
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
import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
  IoChevronBackCircleSharp,
  IoChevronForwardCircleSharp,
} from "react-icons/io5";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [visibleSlides, setVisibleSlides] = useState<number>(2); // Default for mobile

  // Handle responsive number of slides
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleSlides(4); // 4 slides for larger screens
      } else if (window.innerWidth >= 768) {
        setVisibleSlides(3); // 3 slides for medium screens
      } else {
        setVisibleSlides(2); // 2 slides for small screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on load

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="min-h-screen bg-third">
      <div className="bg-black ">
        <p className="text-xs text-center lg:text-lg">
          Envios gratis a partir de los 60.000$
        </p>
      </div>
      <Header onToggle={() => setToggle(!toggle)} />

      {/* Mobile Version */}
      <div className="lg:hidden">
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
                <ProductCard imageSrc={women} title="Remera" price={1500} />
              </Slide>
              <Slide index={1}>
                <ProductCard imageSrc={women2} title="Remera" price={5200} />
              </Slide>
              <Slide index={2}>
                <ProductCard imageSrc={men1} title="Remera" price={3500} />
              </Slide>
              <Slide index={3}>
                <ProductCard imageSrc={camperas} title="Remera" price={500} />
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
                <ProductCard imageSrc={women} title="Remera" price={1500} />
              </Slide>
              <Slide index={1}>
                <ProductCard imageSrc={women2} title="Remera" price={5200} />
              </Slide>
              <Slide index={2}>
                <ProductCard imageSrc={men1} title="Remera" price={3500} />
              </Slide>
              <Slide index={3}>
                <ProductCard imageSrc={camperas} title="Remera" price={500} />
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
                  <ProductCard imageSrc={women} title="Remera" price={1500} />
                </Slide>
                <Slide index={1}>
                  <ProductCard imageSrc={women2} title="Remera" price={5200} />
                </Slide>
                <Slide index={2}>
                  <ProductCard imageSrc={men1} title="Remera" price={3500} />
                </Slide>
                <Slide index={3}>
                  <ProductCard imageSrc={camperas} title="Remera" price={500} />
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
                  <ProductCard imageSrc={women} title="Remera" price={1500} />
                </Slide>
                <Slide index={1}>
                  <ProductCard imageSrc={women2} title="Remera" price={5200} />
                </Slide>
                <Slide index={2}>
                  <ProductCard imageSrc={men1} title="Remera" price={3500} />
                </Slide>
                <Slide index={3}>
                  <ProductCard imageSrc={camperas} title="Remera" price={500} />
                </Slide>
              </Slider>
            </div>
          </CarouselProvider>
        </div>
      </div>

      <Sidebar isOpen={toggle} onClose={() => setToggle(false)} />
    </main>
  );
};

export default Home;
