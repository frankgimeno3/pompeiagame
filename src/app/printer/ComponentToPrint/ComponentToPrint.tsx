"use client"; // Asegúrate de que este archivo se ejecute en el cliente

import React from 'react';

const ComponentToPrint = React.forwardRef(function ComponentToPrint(
  {
    nombre,
    tuDios,
    tulang,
    contenidoprint,
  }: {
    nombre: string;
    tuDios: string;
    tulang: string;
    contenidoprint: string;
  },
  ref: React.Ref<HTMLDivElement>
) {
  const imagendios = `/${tulang}s/${tuDios}.png`;
  let tudioses = "TU DIOS ES";
  switch (tulang) {
    case "en":
      tudioses = "YOUR GOD IS";
      break;
    default:
      tudioses = "TU DIOS ES";
  }

  return (
    <div>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel&display=swap');
        `}
      </style>
      <div
        ref={ref}
        className="h-screen flex justify-center text-center relative cinzel-font text-yellow-900 text-opacity-50 font-light"
      >
        <div className="flex flex-row text-left justify-center align-center px-20 pr-24 mx-14" style={{ zIndex: 1 }}>
          <div className="flex-1 flex flex-col pl-14 ml-12 py-20 pr-2 justify-left">
            <h1 className="text-5xl pt-24">{nombre}</h1>
            <p className="text-black text-2xl mt-2 mb-8">{tudioses}</p>
            <h2 className="text-black text-5xl mb-4">{tuDios}</h2>
            <div className="text-black">
              <div className="text-lg mb-10 pr-5">{contenidoprint}</div>
            </div>
          </div>
          <div className="flex-2 flex items-center justify-center">
            <img
              src={imagendios}
              alt={tuDios}
              width={400}
              height={400}
              className="pt-14 mr-10"
            />
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src="/f3.png"
            alt="f3"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
});

ComponentToPrint.displayName = "ComponentToPrint";

export default ComponentToPrint;
