"use client";

import Image from "next/image";

interface HeaderProps {
  onToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggle }) => {
  return (
    <div className="h-24 bg-white flex items-center justify-around">
      <header>
        <h1 className="text-xl text-black">
          Nombre
          <br />
          <span className="ml-4">de mi tienda</span>
        </h1>
      </header>
      {/* <label>
        <div
          className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center"
          onClick={() => onToggle()}
        >
          <input className="hidden peer" type="checkbox" />
          <div className="w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
          <div className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
          <div className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
        </div>
      </label> */}
      <button onClick={onToggle} className="text-black">
        <Image src={"/menu.png"} width={30} height={30} alt="boton menu" />
      </button>
    </div>
  );
};

export default Header;
