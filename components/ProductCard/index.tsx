"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

interface ProductCardProps {
  imageSrc: string | StaticImageData;
  title: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  title,
  price,
}) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const toggleSize = (size: string): void => {
    if (selectedSize === size) {
      setSelectedSize(null);
    } else {
      setSelectedSize(size);
    }
  };

  return (
    <div>
      <div className="font-body ml-2 mr-2 h-96 shadow-md rounded-lg max-w-sm bg-gray-800 border-gray-700 rounded-b-none shadow-black">
        <div className="bg-red-50 flex rounded-l-md rounded-b-none rounded-r-md h-56 w-fit">
          <a href="#">
            <Image
              className="rounded-l-md rounded-r-md rounded-b-none h-full object-cover"
              src={imageSrc}
              alt="product image"
            />
          </a>
        </div>
        <div className="ml-2">
          <a href="#">
            <h3 className=" font-semibold text-xl tracking-tight text-white">
              {title}
            </h3>
          </a>
          <div className="flex flex-col items-start">
            <p className="font-body text-xs font-bold text-gray-400">Marca</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => toggleSize(size)}
                  className={`w-6 h-6 ${
                    selectedSize === size
                      ? "bg-green-800 text-white text-xs border-2 border-black"
                      : "bg-gray-300 text-black text-xs"
                  } rounded-full shrink-0 transition-all`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl  text-white">${price}</span>
          </div>
          <div className="mt-2 relative right-0 flex justify-around align-middle items-center">
            <div className="">
              <button className="bg-green-800 p-2 rounded-md w-12 flex justify-center border border-black shadow-lg hover:bg-green-600 transition ease-in-out duration-150">
                <FaShoppingCart color="white" />
              </button>
            </div>
            <div>
              <button className="bg-blue-800 p-2 rounded-md w-full text-xs text-white flex justify-center border border-black shadow-lg hover:bg-blue-600 transition ease-in-out duration-150">
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
