// pages/usuarios.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import ModalAdd from "@/components/Modals/ModalAdd/index";
import ModalConfirmDialog from "@/components/Modals/Modal";
import { FaRegEye } from "react-icons/fa";

const ProductsPage = () => {
  const [header, setHeader] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModalDialog, setShowModalDialog] = useState(false);

  const handleOnClick = () => {};
  return (
    <>
      <div className="h-screen bg-primary text-slate-300 p-8 ">
        <h1 className="text-2xl mb-8 text-center text-white">Productos</h1>
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
        <table className="w-full text-left text-black bg-slate-300 mt-2 text-xs">
          <thead>
            <tr>
              <th className="p-2 border-b">Producto</th>
              <th className="p-2 border-b">Precio</th>
              <th className="p-2 border-b">Stock</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-b">Remera</td>
              <td className="p-2 border-b">$1500</td>
              <td className="p-2 border-b">20</td>
              <td className="p-2 border-b">
                <button
                  onClick={handleOnClick}
                  className="bg-primary p-1 w-12 h-8 rounded-xl flex items-center justify-center"
                >
                  <FaRegEye size={20} color="white" />
                </button>
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

export default ProductsPage;
