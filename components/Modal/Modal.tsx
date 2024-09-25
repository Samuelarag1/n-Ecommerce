import React from "react";

interface IModalProps {
  onHide?: () => void;
  title: string;
}
function ModalAdd({ onHide, title }: IModalProps) {
  return (
    <div className="h-72 w-80 flex flex-col items-center bg-secondary shadow-xl shadow-black m-2 rounded-xl border border-blue-950 overflow-scroll">
      <button
        className=" ml-auto mr-2 mt-2 bg-red-700 rounded-full text-white w-7 text-md shadow-lg shadow-black border border-black"
        onClick={onHide}
      >
        X
      </button>
      <div className="flex mt-5 gap-2">
        <p>{title}</p>
        <div />
      </div>
    </div>
  );
}

export default ModalAdd;
