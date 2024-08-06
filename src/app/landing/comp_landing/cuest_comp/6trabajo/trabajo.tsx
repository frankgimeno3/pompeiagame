import React, { useState, useEffect } from "react";

interface TrabajoProps {
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
  setTrabajo: React.Dispatch<React.SetStateAction<string>>;
}

const Trabajo: React.FC<TrabajoProps> = ({
  setComponenteActual,
  setTrabajo,
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
    setTrabajo(option);
    setComponenteActual("lugar");
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
              className="w-600  h-200 px-16 py-8   mr-24 mt-24 mx-24 bg-cover bg-center rounded-3xl"
              style={{ backgroundImage: 'url("/buttonB.png")' }}
              onClick={() => handleOptionClick("TRABAJADOR")}
            >
              TRABAJADOR
            </button>
          </div>

          <div className=" ">
            <button
              className="w-600  h-200 px-24 py-8   mr-24 mt-24 mx-24 bg-cover bg-center rounded-3xl"
              style={{ backgroundImage: 'url("/buttonB.png")' }}
              onClick={() => handleOptionClick("HOLGAZÁN")}
            >
              HOLGAZÁN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trabajo;
