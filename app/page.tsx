import mens from "../public/mens.webp";
import girls from "../public/girls.png";
import remera from "../public/remera-men.jpg";

import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen bg-white">
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
        <div className="lg:w-[70%] lg:bg-white lg:min-h-screen lg:border-l-2 lg:border-r-2 lg:border-black"></div>
      </div>

      <div className="h-40 flex items-center justify-center bg-black">
        <Image
          src={mens}
          className="max-h-full max-w-full object-cover opacity-60"
          alt="123123"
        />
      </div>

      <div className="flex m-2 justify-around gap-2">
        <div className="h-52 shadow-sm shadow-black w-48 flex align-middle items-center flex-col rounded-[5px]">
          <Image
            src={"/remera-men.jpg"}
            className="flex align-middle  justify-center items-center"
            height={400}
            width={400}
            alt="123"
          />
          <div className="w-full flex justify-between items-center m-1 ">
            <p className="text-sm text-black text-start">Remera</p>
          </div>

          <div className="text-black">
            <p className="text-xs  overflow-auto h-14 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
              non! Vel molestiae, iste saepe provident, dolores dolorum earum
              porro fugiat eveniet a ut eius! Optio consequatur itaque ab
              repellendus earum?
            </p>
          </div>
          <div className="flex items-center w-[100%] justify-around">
            <div className="text-black">
              <p className="text-xs">
                <span className="font-bold text-xs">$</span>
                500
              </p>
            </div>
            <div>
              <button className="text-[10px] bg-green-800 text-white p-1 rounded-[25px]">
                Agregar
              </button>
            </div>
          </div>
        </div>
        <div className="h-52 w-48 shadow-sm shadow-black flex align-middle items-center flex-col rounded-[5px]">
          <Image
            src={"/remera-men.jpg"}
            className="flex align-middle  justify-center items-center"
            height={400}
            width={400}
            alt="123"
          />
          <div className="w-full flex justify-between items-center m-1 ">
            <p className="text-sm text-black text-start">Remera</p>
          </div>

          <div className="text-black">
            <p className="text-xs  overflow-auto h-14 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
              non! Vel molestiae, iste saepe provident, dolores dolorum earum
              porro fugiat eveniet a ut eius! Optio consequatur itaque ab
              repellendus earum?
            </p>
          </div>
          <div className="flex items-center w-[100%] justify-around">
            <div className="text-black">
              <p className="text-xs">
                <span className="font-bold text-xs">$</span>
                500
              </p>
            </div>
            <div>
              <button className="text-[10px] bg-green-800 text-white p-1 rounded-[25px]">
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-40 align-middle items-center flex bg-black">
        <Image
          src={girls}
          className="max-h-40 w-screen object-cover"
          alt="123123"
        />
      </div>

      <div className="flex  m-2 justify-around gap-2">
        <div className="shadow-sm shadow-black h-52 w-48 flex align-middle items-center flex-col rounded-[5px]">
          <Image
            src={"/remera-men.jpg"}
            className="flex align-middle  justify-center items-center"
            height={400}
            width={400}
            alt="123"
          />
          <div className="w-full flex justify-between items-center m-1 ">
            <p className="text-sm text-black text-start">Remera</p>
          </div>

          <div className="text-black">
            <p className="text-xs  overflow-auto h-14 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
              non! Vel molestiae, iste saepe provident, dolores dolorum earum
              porro fugiat eveniet a ut eius! Optio consequatur itaque ab
              repellendus earum?
            </p>
          </div>
          <div className="flex items-center w-[100%] justify-around">
            <div className="text-black">
              <p className="text-xs">
                <span className="font-bold text-xs">$</span>
                500
              </p>
            </div>
            <div>
              <button className="text-[10px] bg-green-800 text-white p-1 rounded-[25px]">
                Agregar
              </button>
            </div>
          </div>
        </div>
        <div className="h-52 shadow-sm shadow-black w-48 flex align-middle items-center flex-col rounded-[5px]">
          <Image
            src={"/remera-men.jpg"}
            className="flex align-middle  justify-center items-center"
            height={400}
            width={400}
            alt="123"
          />
          <div className="w-full flex justify-between items-center m-1 ">
            <p className="text-sm text-black text-start">Remera</p>
          </div>

          <div className="text-black">
            <p className="text-xs  overflow-auto h-14 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
              non! Vel molestiae, iste saepe provident, dolores dolorum earum
              porro fugiat eveniet a ut eius! Optio consequatur itaque ab
              repellendus earum?
            </p>
          </div>
          <div className="flex items-center w-[100%] justify-around">
            <div className="text-black">
              <p className="text-xs">
                <span className="font-bold text-xs">$</span>
                500
              </p>
            </div>
            <div>
              <button className="text-[10px] bg-green-800 text-white p-1 rounded-[25px]">
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
