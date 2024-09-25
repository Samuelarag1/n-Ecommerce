"use client";
import React from "react";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-primary text-textGray shadow-2xl shadow-black">
      <div className="absolute h-20 top-0 bg-secondary w-full text-center">
        <h1 className="text-2xl mt-5">Brand Name</h1>
      </div>
      <div className="text-center text-2xl mb-2 font-bold text-white">
        <p>Inicio de Sesion</p>
      </div>
      <div className="bg-secondary p-8 h-60 rounded-lg shadow-md flex flex-col justify-around">
        <input
          type="email"
          placeholder="Ingrese su email"
          className="block w-full p-2 mb-4 rounded-md text-black"
        />
        <input
          type="password"
          placeholder="Ingrese su contraseña"
          className="block w-full p-2 mb-4 rounded-md text-black"
        />
        <Link
          className="bg-primary text-textGray py-2 rounded-md flex justify-center"
          href="/users"
        >
          Ingresar
        </Link>
      </div>
      <footer className="bg-secondary w-full p-2 text-center absolute bottom-0">
        All rights reserved
      </footer>
    </div>
  );
};

export default LoginPage;
