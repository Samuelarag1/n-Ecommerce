import Link from "next/link";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";
import Accordion from "../Accordion";
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 z-50 h-screen w-64 bg-primary transition-transform duration-500 ease-in-out transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="bg-secondary h-40 text-center flex flex-col justify-center items-center align-middle border-b-black border-b-4">
        <h1 className="text-3xl text-white">Brand Name</h1>
        <div className="flex justify-center gap-4 mt-5">since 1999</div>
      </div>
      <div className="text-center">
        <div className="flex flex-col mt-4">
          <div className="flex flex-col gap-2 justify-between text-start">
            <Accordion label="Hombres" link="/mens">
              <ul className="text-white list-none flex flex-col gap-1 text-lg">
                <li>
                  <Link href="/mens/new">
                    <p className="hover:underline">🌟Nuevos ingresos</p>
                  </Link>
                </li>
                <li>
                  <Link href="/mens/shoes">
                    <p className="hover:underline">👞Calzado</p>
                  </Link>
                </li>
                <li>
                  <Link href="/mens/clothes">
                    <p className="hover:underline">👔Ropa</p>
                  </Link>
                </li>
                <li>
                  <Link href="/mens/accesories">
                    <p className="hover:underline">💣Accesorios</p>
                  </Link>
                </li>
                <li>
                  <Link href="/mens">
                    <p className="hover:underline">Ver todo Hombre</p>
                  </Link>
                </li>
                <hr />
              </ul>
            </Accordion>
            {/* <hr /> */}
            <Accordion label="Mujeres" link="/womens">
              <ul className="text-white list-none flex flex-col gap-1 text-lg">
                <li>
                  <Link href="/womens/new">
                    <p className="hover:underline">🌟Nuevos ingresos</p>
                  </Link>
                </li>
                <li>
                  <Link href="/womens/shoes">
                    <p className="hover:underline">👡Calzado</p>
                  </Link>
                </li>
                <li>
                  <Link href="/womens/clothes">
                    <p className="hover:underline">👗Ropa</p>
                  </Link>
                </li>
                <li>
                  <Link href="/womens/accesories">
                    <p className="hover:underline">💍Accesorios</p>
                  </Link>
                </li>
                <li>
                  <Link href="/womens">
                    <p className="hover:underline">Ver todo Mujeres</p>
                  </Link>
                </li>
                <hr />
              </ul>
            </Accordion>
            {/* <hr /> */}
            <Accordion label="Niños" link="/kids">
              <ul className="text-white list-none flex flex-col gap-1 text-lg">
                <li>
                  <Link href="/kids/new">
                    <p className="hover:underline">🌟Nuevos ingresos</p>
                  </Link>
                </li>
                <li>
                  <Link href="/kids/shoes">
                    <p className="hover:underline">👟Calzado</p>
                  </Link>
                </li>
                <li>
                  <Link href="/kids/clothes">
                    <p className="hover:underline">👕Ropa</p>
                  </Link>
                </li>
                <li>
                  <Link href="/kids/accesories">
                    <p className="hover:underline">💣Accesorios</p>
                  </Link>
                </li>
                <li>
                  <Link href="/kids">
                    <p className="hover:underline">Ver todo Niños</p>
                  </Link>
                </li>
                <hr />
              </ul>
            </Accordion>
            {/* <hr /> */}
            <Accordion label="Deportes" link="/sports">
              <ul className="text-white list-none flex flex-col gap-1 text-lg">
                <li>
                  <Link href="/sports/new">
                    <p className="hover:underline">🌟Nuevos ingresos</p>
                  </Link>
                </li>
                <li>
                  <Link href="/sports/shoes">
                    <p className="hover:underline">⚽Futbol</p>
                  </Link>
                </li>
                <li>
                  <Link href="/sports/clothes">
                    <p className="hover:underline">🏀Basket</p>
                  </Link>
                </li>
                <li>
                  <Link href="/sports/accesories">
                    <p className="hover:underline">🎾Tenis</p>
                  </Link>
                </li>
                <li>
                  <Link href="/sports">
                    <p className="hover:underline">Ver todo en Deportes</p>
                  </Link>
                </li>
                <hr />
              </ul>
            </Accordion>
            {/* <hr /> */}
            <Accordion label="Accesorios" link="/accesories">
              <ul className="text-white list-none flex flex-col gap-1 text-lg">
                <li>
                  <Link href="/accesories">
                    <p className="hover:underline">Ver todo en Accesorios</p>
                  </Link>
                </li>
                <hr />
              </ul>
            </Accordion>
            <div className="w-full h-10 flex justify-around mt-5">
              <Link
                href={"/login"}
                className="flex align-middle items-center bg-black p-2 gap-2 justify-center rounded-md"
              >
                <FaUserAlt size={20} />
                <p>Mi cuenta</p>
              </Link>
              <Link
                href={"/cart"}
                className="flex align-middle items-center bg-black p-2 gap-2 justify-center rounded-md"
              >
                <FaShoppingCart size={20} />
                <p>Mi carrito</p>
              </Link>
            </div>
          </div>
        </div>

        <div className=" absolute bottom-0 w-full text-center text-sm">
          {" "}
          <div className="text-start mt-10 ">
            <div className="flex items-center align-middle">
              <CiCircleInfo size={20} />
              <p className="text-xs text-gray-500">Informacion</p>
            </div>
            <p className="text-xs ml-5 text-gray-500">Ayuda</p>
            <p className="text-xs ml-5 text-gray-500">Problema con pago</p>
            <p className="text-xs ml-5 text-gray-500">Devoluciones</p>
          </div>
          <div className="bg-secondary h-14">
            <p>
              Todos los derechos reservados
              <br />
              Brand Name
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
