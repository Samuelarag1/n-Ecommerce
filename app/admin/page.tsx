import Link from "next/link";
import React from "react";
import Image from "next/image";

function AdminDashboard() {
  return (
    <div className="h-screen bg-primary ">
      <div className="h-20 bg-secondary text-center shadow-xs shadow-black flex flex-col items-center justify-around">
        <h1 className="text-xl">BrandName</h1>
      </div>

      <div className="bg-secondary h-28 flex align-middle items-center justify-center text-center m-2 rounded-lg shadow-md shadow-black mt-16">
        <p>Panel de administracion para tu comercio</p>
      </div>

      <div className="flex flex-row  justify-around mt-20">
        <Link href={"/admin/users"}>
          <div className="bg-secondary w-40 h-24 rounded-lg shadow-md shadow-black flex flex-col items-center justify-around">
            <p>Usuarios</p>
          </div>
        </Link>
        <Link href={"/admin/products"}>
          <div className="bg-secondary w-40 h-24 rounded-lg shadow-md shadow-black flex flex-col items-center justify-around">
            <p>Productos</p>
            {/* <Image
              width={30}
              src={"/add.png"}
              height={30}
              alt="add"
              className="bg-white rounded-full"
            /> */}
          </div>
        </Link>
      </div>

      <Link href={"/admin/banner"}>
        <div className="bg-secondary w-80 h-36 m-auto mt-10 rounded-lg shadow-md shadow-black flex flex-col items-center justify-around">
          <p>Banner</p>
        </div>
      </Link>
      <Link href={"/"}>
        <div className="bg-[#dce0e6] w-40 h-10 m-auto mt-10 rounded-lg shadow-md shadow-black flex flex-col items-center justify-around ">
          <p
            className="text-black text-xs text-wrap
        text-center"
          >
            Regresar a la pagina principal
          </p>
        </div>
      </Link>

      <footer className="absolute bottom-0 text-center bg-secondary p-2 w-full ">
        All rights reserved
      </footer>
    </div>
  );
}

export default AdminDashboard;
