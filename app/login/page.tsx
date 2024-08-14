"use client";

import { useState } from "react";
import Header from "../components/Header";

const Login: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white p-4">
        <h1 className="text-xl text-black text-center">Nombre de mi tienda</h1>
      </header>
      <main className="flex-grow bg-gray-700 flex items-center justify-center">
        <div className="bg-white h-64 w-64">
          <p className="text-black">Ingresa a tu cuenta</p>
          <div>
            <p>email</p>
            <input type="text" name="" id="" />
          </div>
        </div>
      </main>
      <footer className="bg-blue-950 h-14 text-center flex items-center justify-center">
        <p className="text-white">
          Todos los derechos reservados | Samuel Aragon® 2024
        </p>
      </footer>
    </div>
  );
};

export default Login;
