"use client";

import Image from "next/image";
import { useState } from "react";

//? ICONS
import { IoMenuSharp, IoWoman } from "react-icons/io5";
import { IoIosMan } from "react-icons/io";
import { TbMoodKidFilled } from "react-icons/tb";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { PiSneakerFill } from "react-icons/pi";
import { CiDiscount1 } from "react-icons/ci";

//? Styles
import "./styles/index.css";

export default function Home() {
  const [clicked, setClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleOnMenu = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div
        className={`m-2 flex flex-col items-center align-middle bg-red-500 lg:flex lg:flex-row lg:justify-around  lg:bg-red-300 lg:items-center lg:h-40 h-30 gap-2 ${
          isHovered ? "opacity-50" : ""
        }`}
      >
        <header>
          <h1 className="text-3xl lg:text-4xl">Mi tienda</h1>
        </header>
        <div className=" lg:items-center items-center gap-2 hidden lg:flex">
          <input
            type="text"
            className="rounded-3xl text-lg p-1 lg:p-2"
            placeholder="Buscar.."
          />
          <button>
            <Image src="/find.png" alt="alternativo" width={25} height={25} />
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center">
          <button>
            <Image src="/cart.png" alt="alternativo" width={30} height={30} />
          </button>
          <button>
            <Image src="/user.png" alt="alternativo" width={30} height={30} />
          </button>
        </div>
        {/* //!  Menu Mobile */}
        <div className="lg:hidden flex flex-col items-end  w-full mr-2">
          <div>
            <button onClick={handleOnMenu}>
              <IoMenuSharp size={40} />
            </button>
          </div>
          <div className="w-[90%] m-auto justify-center flex ">
            {clicked ? (
              <div className="h-42">
                <div className="flex items-center gap-2">
                  <IoIosMan size={20} />
                  <a href="/mens" className="text-xl">
                    Hombre
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <IoWoman size={20} />
                  <a href="womens" className="text-xl">
                    Mujer
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <TbMoodKidFilled size={20} />
                  <a href="/kids" className="text-xl">
                    Ninios
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineSportsBasketball size={20} />
                  <a href="sports" className="text-xl">
                    Deportes
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <PiSneakerFill size={20} />
                  <a href="sneakers" className="text-xl">
                    Calzado
                  </a>
                </div>
                <div className="flex items-center  gap-2">
                  <CiDiscount1 size={20} />
                  <a href="/sale" className="text-xl">
                    Sale
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {/* //! Menu Desktop */}

      <div className="hidden lg:flex">
        <nav className="flex gap-2 justify-around w-[100%]">
          <div
            className="flex items-center gap-2 dropdown"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <IoIosMan size={20} />
            <a href="/mens" className="text-xl">
              Hombre
            </a>
            <div className="dropdown-content ">
              <a href="/sale/snickers">Zapatillas</a>
              <a href="/sale/shirts">Remeras</a>
              <a href="/sale/backpack">Mochilas</a>
            </div>
          </div>
          <div
            className="flex items-center gap-2 dropdown"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <IoWoman size={20} />
            <a href="/womens" className="text-xl">
              Mujer
            </a>
            <div className="dropdown-content">
              <a href="/sale/snickers">Zapatillas</a>
              <a href="/sale/shirts">Remeras</a>
              <a href="/sale/backpack">Mochilas</a>
            </div>
          </div>
          <div
            className="flex items-center gap-2 dropdown"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <TbMoodKidFilled size={20} />
            <a href="/kids" className="text-xl">
              Niños
            </a>
            <div className="dropdown-content">
              <a href="/sale/snickers">Zapatillas</a>
              <a href="/sale/shirts">Remeras</a>
              <a href="/sale/backpack">Mochilas</a>
            </div>
          </div>
          <div
            className="flex items-center gap-2 dropdown"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <MdOutlineSportsBasketball size={20} />
            <a href="sports" className="text-xl">
              Deportes
            </a>
            <div className="dropdown-content">
              <a href="/sale/snickers">Zapatillas</a>
              <a href="/sale/shirts">Remeras</a>
              <a href="/sale/backpack">Mochilas</a>
            </div>
          </div>
          <div
            className="flex items-center gap-2 dropdown"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <PiSneakerFill size={20} />
            <a href="sneakers" className="text-xl">
              Calzado
            </a>
            <div className="dropdown-content dropdown">
              <a href="/sale/snickers">Zapatillas</a>
              <a href="/sale/shirts">Remeras</a>
              <a href="/sale/backpack">Mochilas</a>
            </div>
          </div>
          <div
            className="flex items-center gap-2 hover:text-red-400 dropdown"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <CiDiscount1 size={20} />
            <a href="/sale" className="text-xl">
              Sale
            </a>
            <div className="dropdown-content">
              <a href="/sale/snickers">Zapatillas</a>
              <a href="/sale/shirts">Remeras</a>
              <a href="/sale/backpack">Mochilas</a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
