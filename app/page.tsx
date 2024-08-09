import images from "../public/images.jpeg";
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
          <h1 className="text-black">Nombre de mi tienda</h1>
        </header>
        <button className="text-black">Open</button>
      </div>

      <div className="h-20 bg-black">
        <p className="text-xl text-white text-center">Destacados</p>
      </div>

      <div className="lg:w-screen lg:min-h-screen lg:bg-slate-300 lg:flex  lg:justify-center ">
        <div className="lg:w-[70%] lg:bg-white lg:min-h-screen lg:border-l-2 lg:border-r-2 lg:border-black"></div>
      </div>

      <div className="h-40 bg-red-600">
        <Image src={images} className="max-h-40 w-screen" alt="123123" />
      </div>

      <div className="flex m-2 justify-around gap-2">
        <div className="h-72 border-black border w-48"></div>
        <div className="h-72 border-black border w-48"></div>
      </div>

      <div className="h-40 bg-red-600">
        <Image src={images} className="max-h-40 w-screen" alt="123123" />
      </div>

      <div className="flex m-2 justify-around gap-2">
        <div className="h-72 border-black border w-48"></div>
        <div className="h-72 border-black border w-48"></div>
      </div>
    </main>
  );
}
