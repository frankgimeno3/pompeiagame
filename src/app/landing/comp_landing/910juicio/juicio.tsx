import React, { useState, useEffect } from "react";

interface JuicioProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setJuicio: React.Dispatch<React.SetStateAction<string>>;
  lang:string;
}

const Juicio: React.FC<JuicioProps> = ({ setComponenteActual, setJuicio, lang }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 700);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleOptionClick = (option: string) => {
    setIsVisible(true);
    setSelectedOption(option);
    setJuicio(option);
    setComponenteActual("horario");
  };
  return (
    <div
      className={`flex flex-col mt-24 justify-right mr-24 pr-24      ${
        isVisible
          ? "transition-opacity duration-1000 opacity-100"
          : "  opacity-0"
      }`}
    > 
     <div className="flex flex-col mr-16 mt-24 pr-24 justify-end text-6xl">
        <div className="pr-24 flex flex-col mx-24  ">
          <div className=" ">
            <button
              className="w-600  h-200 px-24 py-8   mr-24 mt-24 mx-24 bg-cover bg-center rounded-3xl"
              style={{ backgroundImage: 'url("/buttonB.png")' }}
              onClick={() => handleOptionClick("JUSTO")}
            >
              ME BASO EN HECHOS
            </button>
          </div>

          <div className=" ">
            <button
              className="w-600  h-200 px-10 py-8   mr-24 mt-24 mx-24 bg-cover bg-center rounded-3xl"
              style={{ backgroundImage: 'url("/buttonB.png")' }}
              onClick={() => handleOptionClick("INJUSTO")}
            >
             ME BASO EN EMOCIONES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Juicio;
