import React, { useState, useEffect } from "react";

interface LugarProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setLugar: React.Dispatch<React.SetStateAction<string>>;
}

const Lugar: React.FC<LugarProps> = ({ setComponenteActual, setLugar }) => {
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
    setLugar(option);
    setComponenteActual("humor");
  };

  return (
    <div
      className={`flex flex-col   justify-right mr-24 pr-24      ${
        isVisible
          ? "transition-opacity duration-1000 opacity-100"
          : "  opacity-0"
      }`}
    >
      <div className="flex flex-col mr-16 mt-24 pr-16 justify-end text-7xl">
        <div className="pr-24 flex flex-col mx-24  ">
          <div className=" ">
            <button
              className="w-600  h-200 px-20 py-8   mr-24 mt-24 mx-24 bg-cover bg-center rounded-3xl"
              style={{ backgroundImage: 'url("/buttonB.png")' }}
              onClick={() => handleOptionClick("CIUDAD")}
            >
              CIUDAD
            </button>
          </div>

          <div className=" ">
            <button
              className="w-600  h-200 px-24 py-8   mr-24 mt-24 mx-24 bg-cover bg-center rounded-3xl"
              style={{ backgroundImage: 'url("/buttonB.png")' }}
              onClick={() => handleOptionClick("CAMPO")}
            >
              CAMPO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lugar;
