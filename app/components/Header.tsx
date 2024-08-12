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
      <button onClick={onToggle} className="text-black">
        <Image src={"/menu.png"} width={30} height={30} alt="boton menu" />
      </button>
    </div>
  );
};

export default Header;
