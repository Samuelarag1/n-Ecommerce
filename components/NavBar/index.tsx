import Link from "next/link";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <header className="hidden lg:bg-primary lg:flex lg:items-center lg:justify-around lg:px-8 lg:h-16 lg:border-b-4 lg:border-black">
      <nav className="flex space-x-8 z-50">
        {["Hombres", "Mujeres", "Niños", "Deportes", "Accesorios"].map(
          (category) => (
            <div key={category} className="group relative">
              <Link
                href={`/section/${category.toLowerCase()}`}
                className="text-lg text-white hover:underline"
              >
                {category}
              </Link>
              <div className="absolute left-0 hidden group-hover:block bg-secondary text-white text-sm mt-1 p-2 rounded shadow-lg">
                <Link
                  href={`/section/${category.toLowerCase()}/new`}
                  className="block hover:underline"
                >
                  Nuevos ingresos
                </Link>
                <Link
                  href={`/section/${category.toLowerCase()}/shoes`}
                  className="block hover:underline"
                >
                  Calzado
                </Link>
                <Link
                  href={`/section/${category.toLowerCase()}/clothes`}
                  className="block hover:underline"
                >
                  Ropa
                </Link>
                <Link
                  href={`/section/${category.toLowerCase()}/accesories`}
                  className="block hover:underline"
                >
                  Accesorios
                </Link>
                <Link
                  href={`/section/${category.toLowerCase()}`}
                  className="block hover:underline"
                >
                  Ver todo {category}
                </Link>
              </div>
            </div>
          )
        )}
      </nav>
    </header>
  );
};

export default Navbar;
