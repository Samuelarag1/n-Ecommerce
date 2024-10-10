"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";
import IProduct from "@/Models/Products";

function ProductDetail() {
  const { id } = useParams(); // Extraemos solo el ID
  const [toggle, setToggle] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [product, setProduct] = useState<IProduct | null>(null); // Permite que sea null inicialmente

  const getProductDetail = async () => {
    if (!id) return;

    try {
      const response = await fetch(`http://localhost:3001/products/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setProduct(result);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);

  const toggleSize = (size: string): void => {
    setSelectedSize(selectedSize === size ? null : size);
  };

  // Aquí puedes añadir los logs para verificar los valores
  console.log("Product ID:", id);
  console.log("Fetched Product:", product);

  return (
    <>
      <main className="min-h-screen bg-primary">
        <div className="bg-black">
          <p className="text-xs text-center">
            Envios gratis a partir de los 80.000$
          </p>
        </div>
        <Header onToggle={() => setToggle(!toggle)} />
        <Sidebar isOpen={toggle} onClose={() => setToggle(false)} />
        <div className="font-sans bg-white">
          <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
            <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 rounded-lg">
              <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                <div className="px-4 py-10 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                  {product?.imageUrl && (
                    <Image
                      src={product.imageUrl}
                      alt="Product"
                      className="w-3/4 rounded object-cover mx-auto"
                      objectFit="contain"
                      width={100}
                      height={400}
                    />
                  )}
                </div>
              </div>
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-extrabold text-gray-800">
                  {product?.name || "Vestido largo"}
                </h2>
                <div className="flex space-x-2 mt-4">
                  <h4 className="text-gray-800 text-base font-semibold">
                    {product?.brand}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                  <p className="text-gray-800 text-3xl font-bold">
                    {product?.price ? `$${product.price}` : "No disponible"}
                  </p>
                </div>
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
                    {/* <div>
                      <span className="text-red-500 text-md font-semibold">
                        {product?.stock
                          ? `${product?.stock} disponibles`
                          : "No hay stock"}
                      </span>
                    </div> */}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                  <button
                    type="button"
                    className="min-w-[200px] px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded"
                  >
                    Comprar ahora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default ProductDetail;
