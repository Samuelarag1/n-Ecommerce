import Image from "next/image";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen w-64 bg-secondary transition-transform duration-500 ease-in-out transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="text-center mt-20">
        <h1 className="text-3xl text-white">Brand Name</h1>
        <div className="flex justify-center gap-4 mt-5">
          <div>
            <Link href="/cart">
              <Image
                src={"/cart.png"}
                width={30}
                height={30}
                alt="Carrito"
                className="hover:cursor-pointer"
              />
            </Link>
          </div>
          <div>
            <Link href="/login">
              <Image
                src={"/user.png"}
                width={30}
                height={30}
                alt="Usuarios"
                className="hover:cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col mt-36">
          <div className="flex flex-col h-64 gap-2">
            <Link href="/" className="text-xl text-white">
              Inicio
            </Link>
            <Link href="/section/news" className="text-xl text-white">
              Novedades
            </Link>
            <Link href="/section/mens" className="text-xl text-white">
              Hombres
            </Link>
            <Link href="/section/womens" className="text-xl text-white">
              Mujeres
            </Link>
            <Link href="/section/kids" className="text-xl text-white">
              Niños
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
