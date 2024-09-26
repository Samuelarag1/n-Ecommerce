"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";
import Image from "next/image";
interface IProductsDetailProps {
  name?: string;
  solded?: string;
  price?: number;
  size?: string;
  stock?: number;
}

function ProductDetail() {
  const [toggle, setToggle] = useState<boolean>(false);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const toggleSize = (size: string): void => {
    if (selectedSize === size) {
      setSelectedSize(null);
    } else {
      setSelectedSize(size);
    }
  };

  return (
    <>
      <main className="min-h-screen bg-primary">
        <div className="bg-black ">
          <p className="text-xs text-center">
            Envios gratis a partir de los 60.000$
          </p>
        </div>
        <Header onToggle={() => setToggle(!toggle)} />

        <Sidebar isOpen={toggle} onClose={() => setToggle(false)} />

        <div className="font-sans bg-white">
          <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
            <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 rounded-lg">
              <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                <div className="px-4 py-10 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                  <Image
                    src="https://readymadeui.com/images/laptop5.webp"
                    alt="Product"
                    className="w-3/4 rounded object-cover mx-auto"
                  />
                </div>
              </div>

              <div className="lg:col-span-2">
                <h2 className="text-2xl font-extrabold text-gray-800">
                  Acer Aspire Pro 12 | Laptop
                </h2>

                <div className="flex space-x-2 mt-4">
                  <h4 className="text-gray-800 text-base">500 Vendidas</h4>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  <p className="text-gray-800 text-3xl font-bold">$1200</p>
                </div>

                {/* <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-800">
                    Selecciona tu talle
                  </h3>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <button
                      type="button"
                      className="w-10 h-10 bg-black border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all checked:bg-black"
                    >
                      S
                    </button>
                    <button
                      type="button"
                      className="w-10 h-10 bg-gray-300 border-2 text-black border-white hover:border-gray-800 rounded-full shrink-0 transition-all"
                    >
                      M
                    </button>
                    <button
                      type="button"
                      className="w-10 h-10 bg-gray-100 border-2 text-black border-white hover:border-gray-800 rounded-full shrink-0 transition-all"
                    >
                      L
                    </button>
                    <button
                      type="button"
                      className="w-10 h-10 bg-blue-400 text-black border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all"
                    >
                      XL
                    </button>
                  </div>

                </div> */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-800">
                    Selecciona tu talle
                  </h3>
                  <div className="flex flex-wrap gap-3 mt-4">
                    {["S", "M", "L", "XL"].map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => toggleSize(size)}
                        className={`w-10 h-10 ${
                          selectedSize === size
                            ? "bg-black text-white"
                            : "bg-gray-300 text-black"
                        } border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all`}
                      >
                        {size}
                      </button>
                    ))}
                    <div>
                      <span className="text-red-500 text-md font-semibold">
                        22 disponibles
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                  <button
                    type="button"
                    className="min-w-[200px] px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded"
                  >
                    Comprar ahora
                  </button>
                  <button
                    type="button"
                    className="min-w-[200px] px-4 py-2.5 border border-blue-600 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded"
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProductDetail;
