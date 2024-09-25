// pages/usuarios.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import ModalAdd from "@/components/Modal/Modal";

const UsuariosPage = () => {
  const [header, setHeader] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="h-screen bg-primary text-slate-300 p-8 ">
        <h1 className="text-2xl mb-8 text-center">Usuarios</h1>
        <div className="flex  justify-center">
          <button
            onClick={() => {
              setHeader("Agregar usuario");
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
              <th className="p-2 border-b">Nombre</th>
              <th className="p-2 border-b">Permisos</th>
              <th className="p-2 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-b">Admin</td>
              <td className="p-2 border-b">administrador</td>
              <td className="p-2 border-b"></td>
            </tr>
            <tr>
              <td className="p-2 border-b">Usuario 1</td>
              <td className="p-2 border-b">vendedor</td>
              <td className="p-2 border-b">
                <div className="flex">
                  <button
                    className="mr-2"
                    onClick={() => {
                      setHeader("Editar vendedor");
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
                      setHeader("Borrar vendedor");
                      setShowModal(true);
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
    </>
  );
};

export default UsuariosPage;
