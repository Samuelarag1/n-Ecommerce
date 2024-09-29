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
        <h1 className="text-3xl text-white font-title">Brand Name</h1>
        <div className="flex justify-center gap-4 mt-5 font-body text-xs text-white">
          Since 1999
        </div>
      </div>
      <div className="text-center ">
        <div className="flex flex-col mt-4">
          <div className="flex flex-col gap-2 justify-between text-start">
            <Accordion label="Hombres" link="section/mens">
              <ul className="font-body text-white list-none flex flex-col gap-1 text-lg">
                <li>
                  <Link href="section/mens/new">
                    <p className="hover:underline text-white">
                      🌟Nuevos ingresos
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="section/mens/shoes">
                    <p className="hover:underline text-white">👞Calzado</p>
                  </Link>
                </li>
                <li>
                  <Link href="section/mens/clothes">
                    <p className="hover:underline text-white">👔Ropa</p>
                  </Link>
                </li>
                <li>
                  <Link href="section/mens/accesories">
                    <p className="hover:underline text-white">💣Accesorios</p>
                  </Link>
                </li>
                <li>
                  <Link href="section/mens">
                    <p className="hover:underline text-white">
                      Ver todo Hombre
                    </p>
                  </Link>
                </li>
                <hr />
              </ul>
            </Accordion>
            {/* <hr /> */}
            <Accordion label="Mujeres" link="section/womens">
              <ul className="font-body text-white list-none flex flex-col gap-1 text-lg">
                <li>
                  <Link href="section/womens/new">
                    <p className="hover:underline text-white">
                      🌟Nuevos ingresos
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="section/womens/shoes">
                    <p className="hover:underline text-white">👡Calzado</p>
                  </Link>
                </li>
                <li>
                  <Link href="section/womens/clothes">
                    <p className="hover:underline text-white">👗Ropa</p>
                  </Link>
                </li>
                <li>
                  <Link href="section/womens/accesories">
                    <p className="hover:underline text-white">💍Accesorios</p>
                  </Link>
                </li>
                <li>
                  <Link href="section/womens">
                    <p className="hover:underline text-white">
                      Ver todo Mujeres
                    </p>
                  </Link>
                </li>
                <hr />
              </ul>
            </Accordion>
            {/* <hr /> */}
            <Accordion label="Niños" link="section/kids">
              <ul className="font-body text-white list-none flex flex-col gap-1 text-lg">
                <li>
                  <Link href="section/kids/new">
                    <p className="hover:underline text-white">
                      🌟Nuevos ingresos
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="section/kids/shoes">
                    <p className="hover:underline text-white">👟Calzado</p>
                  </Link>
                </li>
                <li>
                  <Link href="section/kids/clothes">
                    <p className="hover:underline text-white">👕Ropa</p>
                  </Link>
                </li>
                <li>
                  <Link href="section/kids/accesories">
                    <p className="hover:underline text-white">💣Accesorios</p>
                  </Link>
                </li>
                <li>
                  <Link href="section/kids">
                    <p className="hover:underline text-white">Ver todo Niños</p>
                  </Link>
                </li>
                <hr />
              </ul>
            </Accordion>
            {/* <hr /> */}
            <Accordion label="Deportes" link="section/sports">
              <ul className="font-body text-white list-none flex flex-col gap-1 text-lg">
                <li>
                  <Link href="section/sports/new">
                    <p className="hover:underline text-white">
                      🌟Nuevos ingresos
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="section/sports/shoes">
                    <p className="hover:underline text-white">⚽Futbol</p>
                  </Link>
                </li>
                <li>
                  <Link href="section/sports/clothes">
                    <p className="hover:underline text-white">🏀Basket</p>
                  </Link>
                </li>
                <li>
                  <Link href="section/sports/accesories">
                    <p className="hover:underline text-white">🎾Tenis</p>
                  </Link>
                </li>
                <li>
                  <Link href="section/sports">
                    <p className="hover:underline text-white">
                      Ver todo en Deportes
                    </p>
                  </Link>
                </li>
                <hr />
              </ul>
            </Accordion>
            <Accordion label="Accesorios" link="section/accesories">
              <ul className="font-body text-white list-none flex flex-col gap-1 text-lg">
                <li>
                  <Link href="section/accesories">
                    <p className="hover:underline text-white">
                      Ver todo en Accesorios
                    </p>
                  </Link>
                </li>
                <hr />
              </ul>
            </Accordion>
          </div>
        </div>

        <div className=" absolute bottom-0 w-full text-center text-sm">
          {" "}
          <div className="text-start mt-10 ">
            <div className="w-full h-10 flex justify-around mt-5 mb-2">
              <Link
                href={"/login"}
                className="flex align-middle items-center bg-black p-2 gap-2 justify-center rounded-md "
              >
                <FaUserAlt size={20} color="white" />
                <p className="text-white">Mi cuenta</p>
              </Link>
              <Link
                href={"/cart"}
                className="flex align-middle items-center bg-black p-2 gap-2 justify-center rounded-md"
              >
                <FaShoppingCart size={20} color="white" />
                <p className="text-white">Mi carrito</p>
              </Link>
            </div>
          </div>
          <div className="bg-secondary h-14 ">
            <p className="text-white">
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
