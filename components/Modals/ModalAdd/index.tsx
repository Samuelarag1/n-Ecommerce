"use client";
import IProduct from "@/Models/Products"; // Adaptado para productos
import React, { ChangeEvent, FormEvent, useState } from "react";

interface IModalProps {
  onHide?: () => void;
  title: string;
}

function ModalAddProduct({ onHide, title }: IModalProps) {
  const [product, setProduct] = useState<IProduct>({
    name: "",
    brand: "",
    price: "",
    discount: "",
    categorie: "",
  });
  const [image, setImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Manejo de cambios en los campos del formulario
  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", product.name);
    formData.append("brand", product.brand);
    formData.append("categorie", product.categorie);
    formData.append("price", product.price);
    formData.append("discount", product.discount);
    if (image) {
      formData.append("image", image);
    }

    console.log("Datos de producto enviados: ", formData);
    // Ejemplo de envío:
    // fetch("/api/products", {
    //   method: "POST",
    //   body: formData,
    // });
  };

  // Mostrar modal de confirmación
  const handleShowConfirm = () => {
    setShowConfirmModal(true);
  };

  // Cerrar modal de confirmación
  const handleHideConfirm = () => {
    setShowConfirmModal(false);
  };

  return (
    <div className="text-white flex flex-col items-center bg-secondary shadow-xl shadow-black m-2 rounded-xl border border-blue-950 overflow-scroll p-4">
      <button
        className="text-white text-2xl ml-auto mt-2 mr-3 shadow-xl shadow-black"
        onClick={onHide}
      >
        X
      </button>
      <div className="w-full text-center">
        <p className="text-white">{title}</p>
        <form onSubmit={handleOnSubmit}>
          <div className="grid grid-cols-2 gap-4 m-2">
            <div>
              <p className="text-start text-sm ml-2 text-white">
                Nombre <span className="text-red-500">*</span>
              </p>
              <input
                name="name"
                id="name"
                type="text"
                placeholder="Ingrese nombre del producto"
                className="p-2 text-xs w-full rounded-sm focus:outline-none placeholder:text-gray-400 text-black"
                onChange={handleOnChange}
              />
            </div>
            <div>
              <p className="text-start text-sm ml-2 text-white">Marca</p>
              <input
                name="brand"
                id="brand"
                type="text"
                placeholder="Ingrese marca del producto"
                className="p-2 text-xs w-full rounded-sm focus:outline-none placeholder:text-gray-400 text-black"
                onChange={handleOnChange}
              />
            </div>
            <div>
              <p className="text-start text-sm ml-2 text-white">
                Precio <span className="text-red-500">*</span>
              </p>
              <input
                name="price"
                id="price"
                type="number"
                placeholder="Ingrese precio"
                className="p-2 text-xs w-full rounded-sm focus:outline-none placeholder:text-gray-400 text-black"
                onChange={handleOnChange}
              />
            </div>
            <div>
              <p className="text-start text-sm ml-2 text-white">Descuento</p>
              <input
                name="discount"
                id="discount"
                type="number"
                placeholder="Ingrese descuento"
                className="p-2 text-xs w-full rounded-sm focus:outline-none placeholder:text-gray-400 text-black"
                onChange={handleOnChange}
              />
            </div>
            <div>
              <p className="text-start text-sm ml-2 text-white">
                Categoria <span className="text-red-500">*</span>
              </p>
              <select
                name="categorie"
                id="categorie"
                onChange={handleOnChange}
                value={product.categorie}
                className="p-2 text-xs w-full rounded-sm focus:outline-none placeholder:text-gray-400 text-black"
              >
                <option disabled value="">
                  Seleccione categoria
                </option>
                <option value="Hombres" className="font-body">
                  Hombres
                </option>
                <option value="Mujeres" className="font-body">
                  Mujeres
                </option>
                <option value="Deportes" className="font-body">
                  Deportes
                </option>
                <option value="Accesorios" className="font-body">
                  Accesorios
                </option>
                <option value="kids" className="font-body">
                  Niños
                </option>
              </select>
            </div>
            <div className="col-span-2">
              <p className="text-white text-start ml-2">Imagen del Producto</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="p-2 w-full bg-white text-black rounded-sm"
              />
              {previewImage && (
                <div className="mt-2">
                  <p className="text-white">Vista previa:</p>
                  <img
                    src={previewImage}
                    alt="Vista previa"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={handleShowConfirm}
            className="text-white mt-6 bg-primary p-2 text-xs rounded-xl shadow-lg w-full"
          >
            Confirmar datos
          </button>

          {showConfirmModal && (
            <div className=" m-2 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-secondary p-4 rounded-lg shadow-lg w-96">
                <h2 className="text-xl mb-4 text-white">Confirmar producto</h2>
                <div className="grid grid-cols-2">
                  <p className="text-white">
                    <strong className="text-white">Nombre:</strong>{" "}
                    {product.name}
                  </p>
                  <p className="text-white">
                    <strong className="text-white">Marca:</strong>{" "}
                    {product.brand}
                  </p>
                  <p className="text-white">
                    <strong className="text-white">Precio:</strong>{" "}
                    {product.price}
                  </p>
                  <p className="text-white">
                    <strong className="text-white">Descuento:</strong>{" "}
                    {product.discount || "N/A"}
                  </p>
                  <p className="text-white">
                    <strong className="text-white">Categoria:</strong>{" "}
                    {product.categorie || "N/A"}
                  </p>
                </div>
                {previewImage && (
                  <img
                    src={previewImage}
                    alt="Imagen del producto"
                    className="w-full h-32 object-cover rounded-lg mt-2"
                  />
                )}
                <div className="mt-4 flex justify-end">
                  <button
                    className="mr-2 text-gray-500 bg-white rounded-lg text-md"
                    onClick={handleHideConfirm}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white p-1 text-md rounded-lg"
                    onClick={() => handleOnSubmit}
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ModalAddProduct;
