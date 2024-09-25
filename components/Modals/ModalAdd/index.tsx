"use client";
import React, { useState } from "react";

interface IModalProps {
  onHide?: () => void;
  title: string;
}
function ModalAdd({ onHide, title }: IModalProps) {
  const [user, setUser] = useState({});

  return (
    <div className="h-72 w-80 flex flex-col items-center bg-secondary shadow-xl shadow-black m-2 rounded-xl border border-blue-950 overflow-scroll">
      <button
        className="text-2xl ml-auto mt-2 mr-3 shadow-xl shadow-black"
        onClick={onHide}
      >
        X
      </button>
      <div className="w-full text-center">
        <p>{title}</p>
        <div />

        <div className="mt-2 text-xs">
          <div className="flex flex-col items-center">
            <p className="w-64 text-start ml-2">Nombre</p>
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Ingrese nombre"
              className="w-64 p-2 rounded-sm focus:outline-none placeholder:text-gray-400 text-black"
            />
          </div>
          <div className="flex flex-col items-center mt-2">
            <p className="w-64 text-start ml-2">Rol</p>
            <select
              name="roles"
              id="roles"
              className="p-2 bg-white text-black rounded-sm w-64"
              required
            >
              <option selected disabled>
                Seleccione un rol
              </option>
              <option value="admin">Administrador</option>
              <option value="vendor">Vendedor</option>
            </select>
          </div>
        </div>
        <button className="mt-10 bg-primary p-2 rounded-xl shadow-lg shadow-black border-gray-950 border-[3px]">
          Crear
        </button>
      </div>
    </div>
  );
}

export default ModalAdd;
