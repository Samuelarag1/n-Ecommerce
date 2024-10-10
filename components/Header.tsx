import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import NavBar from "./NavBar";
interface HeaderProps {
  onToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggle }) => {
  return (
    <>
      <div className="h-24 bg-primary flex items-center justify-around lg:justify-around lg:h-40 shadow-lg shadow-black border-b-black border-b-4 lg:border-none">
        <Link href={"/"}>
          <header>
            <h1 className="text-xl text-white lg:text-3xl font-title">
              Importaciones
              <br />
              <span className="ml-4 text-white">Catamarca</span>
            </h1>
          </header>
        </Link>

        <div className="lg:flex items-center justify-between w-20 hidden">
          <Link href={"/login"}>
            <FaUserAlt size={30} color="white" />
          </Link>
          <Link href={"/cart"}>
            <FaShoppingCart size={30} color="white" />
          </Link>
        </div>
        <label className="lg:hidden">
          <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
            <input className="hidden peer" type="checkbox" onClick={onToggle} />
            <div className="w-[50%] h-[2px] bg-white rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
            <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
            <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
          </div>
        </label>
      </div>

      <NavBar />
    </>
  );
};

export default Header;
