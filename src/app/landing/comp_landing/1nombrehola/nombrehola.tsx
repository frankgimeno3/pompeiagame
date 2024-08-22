import React, { useState } from "react";
import Image from "next/image";

interface NombreholaProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  nombre: String;
}

const Nombrehola: React.FC<NombreholaProps> = ({
  setComponenteActual,
  nombre,
}) => {
  const handleSeguirClick = () => {
    setComponenteActual("conflicto");
  };

  return (
    <div className="flex flex-col text-center justify-start align-center px-10 mb-24">
      <div className="flex flex-col text-center px-20  ">
        <div className="flex flex-row text-6xl   justify-center">
          <h1>SALUDOS, {nombre}</h1>
        </div>
        <p className="text-black text-3xl ">BIENVENIDOS AL OLIMPO</p>
        <div className="flex flex-col justify-center items-center text-center  ">
          <Image src="/Stickers.png" alt="Gods" width={600} height={600} />
        </div>
      </div>
      <div>
        <p className="text-black text-3xl">
          ¿CUÁL DE ELLOS TE REPRESENTA MEJOR?
        </p>
        <p className="text-black text-3xl">
          ¡ATRÉVETE A SABER! O COMO DIRÍAN LOS ROMANOS... ¡SAPERE AUDE!
        </p>
      </div>
      <div className="flex flex-row mt-5 justify-center text-center align-center">
          <button
            className="mt-1 px-8 py-4    text-4xl shadow-lg text-black bg-cyan-200 rounded bg-opacity-40"
            onClick={handleSeguirClick}
          >
            EMPEZAR
          </button>
 
      </div>
    </div>
  );
};

export default Nombrehola;
