// pages/productos.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import ModalAdd from "@/components/Modals/ModalAdd";
import ModalConfirmDialog from "@/components/Modals/Modal";
const ProductosPage = () => {
  const [header, setHeader] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModalDialog, setShowModalDialog] = useState(false);

  return (
    <>
      <div className="h-screen bg-primary text-textGray p-8">
        <h1 className="text-2xl mb-8">Productos</h1>
        <div className="flex  justify-center">
          <button
            onClick={() => {
              setHeader("Agregar producto");
              setShowModal(true);
            }}
          >
            <Image
              alt="add"
              src="/add.png"
              height={50}
              width={50}
              className="hover:cursor-pointer bg-white rounded-[1000px]"
            />
          </button>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="p-2 border-b">Producto</th>
              <th className="p-2 border-b">Precio</th>
              <th className="p-2 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-b">Producto 1</td>
              <td className="p-2 border-b">$100</td>
              <td className="p-2 border-b">
                <div className="flex">
                  <button
                    className="mr-2"
                    onClick={() => {
                      setHeader("Editar producto");
                      setShowModal(true);
                    }}
                  >
                    <Image
                      alt="add"
                      src="/edit.png"
                      height={20}
                      width={20}
                      className="hover:cursor-pointer"
                    />
                  </button>
                  <button
                    onClick={() => {
                      setHeader("Borrar producto");
                      setShowModalDialog(true);
                    }}
                  >
                    <Image
                      alt="delete"
                      src="/trash.png"
                      height={20}
                      width={20}
                      className="hover:cursor-pointer"
                    />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {showModal && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
          <div className="fixed z-10 top-52 ml-auto w-full flex flex-col items-center">
            <ModalAdd onHide={() => setShowModal(false)} title={header} />
          </div>
        </>
      )}
      {showModalDialog && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
          <div className="fixed z-10 top-52 ml-auto w-full flex flex-col items-center">
            <ModalConfirmDialog
              onHide={() => setShowModalDialog(false)}
              title={header}
            />
          </div>
        </>
      )}
    </>
  );
};

export default ProductosPage;
