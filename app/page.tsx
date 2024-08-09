import mens from "../public/mens.webp";
import girls from "../public/girls.png";
import remera from "../public/remera-men.jpg";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
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
        <button className="text-black">Open</button>
      </div>

      <div className="p-4 bg-black m-0">
        <p className="text-lg text-white text-center">Destacados</p>
      </div>

      <div className="lg:w-screen lg:min-h-screen lg:bg-slate-300 lg:flex  lg:justify-center ">
        <div className="lg:w-[70%] lg:bg-white lg:min-h-screen lg:border-l-2 lg:border-r-2 lg:border-black">
          {/* //! Banner de Mujeres */}
          <div className="h-40 align-middle items-center flex bg-black">
            <Image
              src={girls}
              className="max-h-40 w-screen object-cover"
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
        {/* //! Banner de Mujeres */}
        <div className="h-40 flex items-center justify-center bg-black ">
          <Image
            src={girls}
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
    </main>
  );
}
