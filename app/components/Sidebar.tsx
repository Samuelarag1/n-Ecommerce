import Image from "next/image";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`${
        isOpen
          ? "absolute top-0 right-0 h-screen w-64 bg-black transition duration-500"
          : "absolute top-0 right-0 h-screen w-64 bg-black transition-transform duration-500 hidden"
      }`}
    >
      <div className="bg-white w-10 h-10 rounded-[100%] items-center flex justify-center ml-auto mr-2 mt-2">
        <button onClick={onClose}>
          <Image src="/close.png" width={20} height={20} alt="button close" />
        </button>
      </div>
      <div className="text-center">
        <span className="text-3xl">Titulo</span>
        <div className="flex flex-col mt-36">
          <div className="flex flex-col h-64 gap-2">
            <Link href="/" className="text-xl">
              Inicio
            </Link>
            <Link href="/section/news" className="text-xl">
              Novedades
            </Link>
            <Link href="/section/mens" className="text-xl">
              Hombres
            </Link>
            <Link href="/section/womens" className="text-xl">
              Mujeres
            </Link>
            <Link href="/section/kids" className="text-xl">
              Niños
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
