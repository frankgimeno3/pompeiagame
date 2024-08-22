import React, { useState, useEffect } from "react";

interface EstrategiaProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setEstrategia: React.Dispatch<React.SetStateAction<string>>;
  lang:string;
}

const Estrategia: React.FC<EstrategiaProps> = ({
  setComponenteActual,
  setEstrategia,
  lang
}) => {
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
    setEstrategia(option);
    setComponenteActual("resolutividad");
  };

  return (
    <div
      className={`flex flex-col justify-right mr-24 pr-24  
    ${
      isVisible ? "transition-opacity duration-1000 opacity-100" : "  opacity-0"
    }`}
    >
      <div className="flex flex-col mr-16 mt-24 pr-16 justify-end text-7xl">
        <div className="pr-24 flex flex-col mx-24  ">
          <div className=" mr-24 pr-24">
            <button
              className="w-600  h-200 px-20 py-10   mr-24 mt-24 mx-24 bg-cover bg-center rounded-3xl"
              style={{ backgroundImage: 'url("/buttonB.png")' }}
              onClick={() => handleOptionClick("ESTRATEGA")}
            >
              ESTRATEGA
            </button>
          </div>

          <div className=" mr-24 pr-24">
            <button
              className="w-600  h-200 px-20 py-10   mr-24 mt-24 mx-24 bg-cover bg-center rounded-3xl"
              style={{ backgroundImage: 'url("/buttonB.png")' }}
              onClick={() => handleOptionClick("IMPULSIVO")}
            >
              IMPULSIVO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estrategia;
