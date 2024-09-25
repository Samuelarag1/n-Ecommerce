// pages/productos.tsx
import React from "react";

const ProductosPage = () => {
  return (
    <div className="h-screen bg-primary text-textGray p-8">
      <h1 className="text-2xl mb-8">Productos</h1>
      <button className="bg-secondary py-2 px-4 rounded-full mb-4">+</button>
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
              <button className="mr-2">✏️</button>
              <button>🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductosPage;
