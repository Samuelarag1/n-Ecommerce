import React, { useState } from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

interface AccordionProps {
  label: string;
  link: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ label, link, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Esta función controla la apertura del acordeón
  const toggleAccordion = (e: React.MouseEvent) => {
    e.preventDefault(); // Evita la navegación cuando se hace clic en la flecha
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="flex justify-between items-center m-2 mb-0 mt-0 p-4 h-10">
        {/* Este es el enlace que llevará a la categoría */}
        <Link href={link} className="text-2xl text-white font-semibold">
          {label}
        </Link>

        {/* El ícono de la flecha solo controla el acordeón */}
        <IoIosArrowForward
          size={25}
          className={`cursor-pointer transition-transform duration-300  ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
          onClick={toggleAccordion} // Maneja solo el toggle del acordeón
        />
      </div>

      {/* El contenido del acordeón que se despliega */}
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
        aria-expanded={isOpen}
      >
        <div className="p-4 text-[#756658]">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
