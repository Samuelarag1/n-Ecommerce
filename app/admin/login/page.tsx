"use client";
import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
const LoginPage = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header onToggle={() => setToggle(!toggle)} />
        <div className="flex-grow flex flex-col justify-center items-center bg-primary shadow-2xl shadow-black">
          <div className=" w-full max-w-sm p-4 border  rounded-lg shadow sm:p-6 md:p-8 bg-gray-800 border-gray-700">
            <form className="space-y-6" action="#">
              <h5 className="text-xl font-medium text-white text-center md:text-left">
                Iniciar sesión como administrador
              </h5>
              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                  placeholder="email@email.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                  required
                />
              </div>
              <div className="flex items-start justify-between">
                <a href="#" className="text-sm hover:underline text-blue-500">
                  Olvidaste tu contraseña
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 "
              >
                Ingresa a tu cuenta
              </button>
            </form>
          </div>
        </div>
        <Footer />
        <Sidebar isOpen={toggle} onClose={() => setToggle(false)} />
      </div>
    </>
  );
};

export default LoginPage;
