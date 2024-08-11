"use client";

import mens from "/public/mens.webp";
import girls from "/public/girls.png";
import remera from "/public/remera-men.jpg";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [toggle, setToggle] = useState(false);

  return (
    <main className="min-h-screen bg-white ">
      <div className={`${toggle ? "opacity-50 " : ""}`}>
        <div className="bg-black ">
          <p className="text-xs text-center">
            Envios gratis a partir de los 60.000$
          </p>
        </div>
        <div className="h-24 bg-white flex items-center justify-around">
          <header>
            <h1 className="text-xl text-black">
              Nombre
              <br />
              <span className="ml-4">de mi tienda</span>
            </h1>
          </header>
          <button onClick={() => setToggle(!toggle)} className="text-black">
            <Image src={"/menu.png"} width={30} height={30} alt="boton menu" />
          </button>
        </div>

        <div className="p-4 bg-black m-0">
          <p className="text-lg text-white text-center">Mujeres</p>
        </div>

        <div className="lg:w-screen lg:min-h-screen lg:bg-slate-300 lg:flex  lg:justify-center hidden">
          <div className="lg:w-[70%] lg:bg-white lg:min-h-screen lg:border-l-2 lg:border-r-2 lg:border-black">
            {/* //! Banner de Hombres 1 */}
            <div className="h-40 flex items-center justify-center bg-black ">
              <Image
                src={mens}
                className="max-h-full max-w-full object-cover opacity-60"
                alt="123123"
              />
            </div>

            <div className="flex m-2 justify-around gap-2 mt-10">
              <div className=" w-48 flex flex-col rounded-[5px] shadow-sm shadow-black overflow-hidden">
                <Image
                  src="/women2.png"
                  className="w-full h-auto object-cover"
                  alt="123"
                  height={400}
                  width={400}
                />
                <div className="w-full flex justify-between items-center p-1">
                  <p className="text-sm text-black text-start">Remera</p>
                </div>
                <div className="text-black">
                  <p className="text-xs font-bold overflow-auto h-14 p-1">
                    S M L XL 2XL 4XL
                  </p>
                </div>
                <div className="flex items-center w-full justify-between p-2">
                  <div className="text-black">
                    <p className="text-xs">
                      <span className="font-bold text-xs">$</span>
                      500
                    </p>
                  </div>
                  <div>
                    <button className="text-[10px] bg-green-800 text-white p-1 rounded-full">
                      Agregar
                    </button>
                  </div>
                </div>
              </div>

              <div className=" w-48 flex flex-col rounded-[5px] shadow-sm shadow-black overflow-hidden">
                <Image
                  src="/women.png"
                  className="w-full h-auto object-cover"
                  alt="123"
                  height={400}
                  width={400}
                />
                <div className="w-full flex justify-between items-center p-1">
                  <p className="text-sm text-black text-start">Remera</p>
                </div>
                <div className="text-black">
                  <p className="text-xs font-bold overflow-auto h-14 p-1">
                    S M L XL 2XL 4XL
                  </p>
                </div>
                <div className="flex items-center w-full justify-between p-2">
                  <div className="text-black">
                    <p className="text-xs">
                      <span className="font-bold text-xs">$</span>
                      500
                    </p>
                  </div>
                  <div>
                    <button className="text-[10px] bg-green-800 text-white p-1 rounded-full">
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* //! Banner de hombres */}
            <div className="h-40 flex items-center justify-center bg-black ">
              <Image
                src={mens}
                className="max-h-full max-w-full object-cover opacity-60"
                alt="123123"
              />
            </div>

            <div className="flex  m-2 justify-around gap-2 mt-10">
              <div className=" w-48 flex flex-col rounded-[5px] shadow-sm shadow-black overflow-hidden">
                <Image
                  src="/men-1.png"
                  className="h-[100%] object-cover"
                  alt="123"
                  height={400}
                  width={400}
                />
                <div className="w-full flex justify-between items-center p-1">
                  <p className="text-sm text-black text-start">Remera</p>
                </div>
                <div className="text-black">
                  <p className="text-xs font-bold overflow-auto h-14 p-1">
                    S M L XL 2XL 4XL
                  </p>
                </div>
                <div className="flex items-center w-full justify-between p-2">
                  <div className="text-black">
                    <p className="text-xs">
                      <span className="font-bold text-xs">$</span>
                      500
                    </p>
                  </div>
                  <div>
                    <button className="text-[10px] bg-green-800 text-white p-1 rounded-full">
                      Agregar
                    </button>
                  </div>
                </div>
              </div>

              <div className=" w-48 flex flex-col rounded-[5px] shadow-sm shadow-black overflow-hidden">
                <Image
                  src="/camperas.png"
                  className="h-[100%] object-cover"
                  alt="123"
                  height={400}
                  width={400}
                />
                <div className="w-full flex justify-between items-center p-1">
                  <p className="text-sm text-black text-start">Remera</p>
                </div>
                <div className="text-black">
                  <p className="text-xs font-bold overflow-auto h-14 p-1">
                    S M L XL 2XL 4XL
                  </p>
                </div>
                <div className="flex items-center w-full justify-between p-2">
                  <div className="text-black">
                    <p className="text-xs">
                      <span className="font-bold text-xs">$</span>
                      500
                    </p>
                  </div>
                  <div>
                    <button className="text-[10px] bg-green-800 text-white p-1 rounded-full">
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <div className="h-40 flex items-center justify-center bg-black ">
            <Image
              src={mens}
              className="max-h-full max-w-full object-cover opacity-60"
              alt="123123"
            />
          </div>
          <div className="flex m-2 justify-around gap-2 mt-10">
            <div className=" w-48 flex flex-col rounded-[5px] shadow-sm shadow-black overflow-hidden">
              <Image
                src="/women2.png"
                className="w-full h-auto object-cover"
                alt="123"
                height={400}
                width={400}
              />
              <div className="w-full flex justify-between items-center p-1">
                <p className="text-sm text-black text-start">Remera</p>
              </div>
              <div className="text-black">
                <p className="text-xs font-bold overflow-auto h-14 p-1">
                  S M L XL 2XL 4XL
                </p>
              </div>
              <div className="flex items-center w-full justify-between p-2">
                <div className="text-black">
                  <p className="text-xs">
                    <span className="font-bold text-xs">$</span>
                    500
                  </p>
                </div>
                <div>
                  <button className="text-[10px] bg-green-800 text-white p-1 rounded-full">
                    Agregar
                  </button>
                </div>
              </div>
            </div>

            <div className=" w-48 flex flex-col rounded-[5px] shadow-sm shadow-black overflow-hidden">
              <Image
                src="/women.png"
                className="w-full h-auto object-cover"
                alt="123"
                height={400}
                width={400}
              />
              <div className="w-full flex justify-between items-center p-1">
                <p className="text-sm text-black text-start">Remera</p>
              </div>
              <div className="text-black">
                <p className="text-xs font-bold overflow-auto h-14 p-1">
                  S M L XL 2XL 4XL
                </p>
              </div>
              <div className="flex items-center w-full justify-between p-2">
                <div className="text-black">
                  <p className="text-xs">
                    <span className="font-bold text-xs">$</span>
                    500
                  </p>
                </div>
                <div>
                  <button className="text-[10px] bg-green-800 text-white p-1 rounded-full">
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* //! Banner de hombres */}
          <div className="h-40 flex items-center justify-center bg-black ">
            <Image
              src={mens}
              className="max-h-full max-w-full object-cover opacity-60"
              alt="123123"
            />
          </div>

          <div className="flex  m-2 justify-around gap-2 mt-10">
            <div className=" w-48 flex flex-col rounded-[5px] shadow-sm shadow-black overflow-hidden">
              <Image
                src="/men-1.png"
                className="h-[100%] object-cover"
                alt="123"
                height={400}
                width={400}
              />
              <div className="w-full flex justify-between items-center p-1">
                <p className="text-sm text-black text-start">Remera</p>
              </div>
              <div className="text-black">
                <p className="text-xs font-bold overflow-auto h-14 p-1">
                  S M L XL 2XL 4XL
                </p>
              </div>
              <div className="flex items-center w-full justify-between p-2">
                <div className="text-black">
                  <p className="text-xs">
                    <span className="font-bold text-xs">$</span>
                    500
                  </p>
                </div>
                <div>
                  <button className="text-[10px] bg-green-800 text-white p-1 rounded-full">
                    Agregar
                  </button>
                </div>
              </div>
            </div>

            <div className=" w-48 flex flex-col rounded-[5px] shadow-sm shadow-black overflow-hidden">
              <Image
                src="/camperas.png"
                className="h-[100%] object-cover"
                alt="123"
                height={400}
                width={400}
              />
              <div className="w-full flex justify-between items-center p-1">
                <p className="text-sm text-black text-start">Remera</p>
              </div>
              <div className="text-black">
                <p className="text-xs font-bold overflow-auto h-14 p-1">
                  S M L XL 2XL 4XL
                </p>
              </div>
              <div className="flex items-center w-full justify-between p-2">
                <div className="text-black">
                  <p className="text-xs">
                    <span className="font-bold text-xs">$</span>
                    500
                  </p>
                </div>
                <div>
                  <button className="text-[10px] bg-green-800 text-white p-1 rounded-full">
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          toggle
            ? "absolute top-0 right-0 h-screen w-64 bg-black  transition duration-500 "
            : "absolute top-0 right-0 h-screen w-64 bg-black  transition-transform duration-500 hidden"
        } `}
      >
        <div className="bg-white w-10 h-10 rounded-[100%] items-center flex justify-center ml-auto mr-2 mt-2">
          <button onClick={() => setToggle(!toggle)}>
            <Image
              src={"/close.png"}
              width={20}
              height={20}
              alt="button close"
            />
          </button>
        </div>
        <div className="text-center">
          <span className="text-3xl">Titulo</span>

          <div className="flex flex-col mt-36">
            <div className="flex flex-col h-64 gap-2">
              <a href="/" className={`text-xl`}>
                Inicio
              </a>
              <a href="news" className={`text-xl`}>
                Novedades
              </a>
              <a href="mens" className={`text-xl`}>
                Hombres
              </a>
              <a href="women" className={`text-xl`}>
                Mujeres
              </a>
              <a href="kids" className={`text-xl`}>
                Niños
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
