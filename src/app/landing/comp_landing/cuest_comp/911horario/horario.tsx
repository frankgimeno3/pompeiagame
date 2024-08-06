import React, { useState, useEffect } from "react";

interface HorarioProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setHorario: React.Dispatch<React.SetStateAction<string>>;
}

const Horario: React.FC<HorarioProps> = ({
  setComponenteActual,
  setHorario,
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
    setHorario(option);
    setComponenteActual("alea");
  };

  return (
    <div
      className={`flex flex-col  justify-right ml-14 pl-14      ${
        isVisible
          ? "transition-opacity duration-1000 opacity-100"
          : "  opacity-0"
      }`}
    >
      <div className="flex flex-col ml-24 pl-24 justify-end ">
        <div className="pl-24 flex flex-col mx-24 mt-24 ">
          <div className="">
            <button
              className="w-600 text-7xl h-200 px-24 py-9   ml-24 mt-24 mx-24 bg-cover bg-center rounded-3xl"
              style={{ backgroundImage: 'url("/buttonB.png")' }}
              onClick={() => handleOptionClick("DIURNO")}
            >
              DIURNO
            </button>
          </div>

          <div className="">
            <button
              className="w-600 text-6xl h-200 px-16 py-12 ml-24 mt-24 mx-24 bg-cover bg-center rounded-3xl"
              style={{ backgroundImage: 'url("/buttonB.png")' }}
              onClick={() => handleOptionClick("NOCTURNO")}
            >
              NOCTURNO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Horario;
