import React, { useState, useEffect } from "react";

interface ResolutividadProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setResolutividad: React.Dispatch<React.SetStateAction<string>>;
}

const Resolutividad: React.FC<ResolutividadProps> = ({
  setComponenteActual,
  setResolutividad,
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
    setResolutividad(option);
    setComponenteActual("trabajo");
  };

  return (
    <div
      className={`flex flex-col pt-14 justify-right ml-24 pl-24      ${
        isVisible
          ? "transition-opacity duration-1000 opacity-100"
          : "  opacity-0"
      }`}
    >
      <div className="flex flex-col ml-24 pl-24 justify-end ">
        <div className="pl-24 flex flex-col mx-24 mt-24 ">
          <div className=" ml-24 pl-24">
            <button
              className="w-600 text-6xl h-200 px-24 py-10   ml-24 mt-24 mx-24 bg-cover bg-center rounded-3xl"
              style={{ backgroundImage: 'url("/buttonB.png")' }}
              onClick={() => handleOptionClick("CONFRONTACIÓN")}
            >
              CONFRONTACIÓN
            </button>
          </div>

          <div className=" ml-24 pl-24">
            <button
              className="w-600 text-7xl h-200 px-24 py-8   ml-24 mt-24 mx-24 bg-cover bg-center rounded-3xl"
              style={{ backgroundImage: 'url("/buttonB.png")' }}
              onClick={() => handleOptionClick("NEGOCIACIÓN")}
            >
              NEGOCIACIÓN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resolutividad;
