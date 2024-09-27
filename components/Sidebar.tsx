import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen w-80 bg-secondary transition-transform duration-500 ease-in-out transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="bg-gray-800 h-32 text-center flex flex-col justify-center items-center align-middle">
        <h1 className="text-3xl text-white">Brand Name</h1>
        <div className="flex justify-center gap-4 mt-5">
          <div className="flex w-full justify-center gap-5">
            <Link href={"/login"}>
              <FaUserAlt size={30} />
            </Link>
            <Link href={"/cart"}>
              <FaShoppingCart size={30} />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center mt-48">
        <div className="flex flex-col mt-36">
          <div className="flex flex-col h-64 gap-2 justify-between text-start ">
            <Link
              href="/section/mens"
              className="flex justify-between text-2xl text-white font-semibold items-center   m-2 p-1 mb-0 mt-0 "
            >
              Hombres
              <IoIosArrowForward size={25} />
            </Link>
            <Link
              href="/section/womens"
              className="flex justify-between text-2xl text-white font-semibold items-center   m-2 p-1 mb-0 mt-0 "
            >
              Mujeres
              <IoIosArrowForward size={25} />
            </Link>
            <Link
              href="/shoes"
              className="flex justify-between text-2xl text-white font-semibold items-center   m-2 p-1 mb-0 mt-0 "
            >
              Calzado
              <IoIosArrowForward size={25} />
            </Link>
            <Link
              href="/section/news"
              className="flex justify-between text-2xl text-white font-semibold items-center   m-2 p-1 mb-0 mt-0 "
            >
              Variedades
              <IoIosArrowForward size={25} />
            </Link>
          </div>
        </div>

        <div className="bg-gray-800 h-20 absolute bottom-0 w-full text-center text-wrap ">
          {" "}
          Todos los derechos reservados
          <br />
          Brand Name
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
