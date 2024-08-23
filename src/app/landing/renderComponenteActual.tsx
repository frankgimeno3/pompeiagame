import React, { ReactNode } from "react";
import Nombre from "./comp_landing/1nombre/nombre";
import Nombrehola from "./comp_landing/1nombrehola/nombrehola";
import Conflicto from "./comp_landing/2conflicto/conflicto";
import Relaciones from "./comp_landing/3relaciones/relaciones";
import Resolutividad from "./comp_landing/5resolutividad/resolutividad";
import Estrategia from "./comp_landing/4estrategia/estrategia";
import Trabajo from "./comp_landing/6trabajo/trabajo";
import Lugar from "./comp_landing/7lugar/lugar";
import Humor from "./comp_landing/8humor/humor";
import Creatividad from "./comp_landing/9creatividad/creatividad";
import Juicio from "./comp_landing/910juicio/juicio";
import Horario from "./comp_landing/911horario/horario";
import Alea from "./comp_landing/912alea/alea";
import Resultado from "./comp_landing/913resultado/resultado";
import Enviar from "./comp_landing/914enviar/enviar";
import Yapuedes from "./comp_landing/915yapuedes/yapuedes";
import { Dioses } from "../contenido/interfaces";

// Función para validar si un valor es un Dioses válido
const isValidDios = (value: string): value is Dioses => {
  return [
    'CERES', 'DIANA', 'FEBO', 'JUPITER', 'JUNO', 
    'MARTE', 'MERCURIO', 'MINERVA', 'NEPTUNO', 
    'VENUS', 'VESTA', 'VULCANO'
  ].includes(value);
};

// Componente para envolver con transición
const TransitionWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="transition-opacity duration-500 ease-in-out transform">
      {children}
    </div>
  );
};

const renderComponenteActual = (
  lang: "es" | "en" | "de",
  componenteactual: string,
  setComponenteActual: React.Dispatch<React.SetStateAction<string>>,
  setNombre: React.Dispatch<React.SetStateAction<string>>,
  nombre: string,
  setConflicto: React.Dispatch<React.SetStateAction<string>>,
  setRelaciones: React.Dispatch<React.SetStateAction<string>>,
  setEstrategia: React.Dispatch<React.SetStateAction<string>>,
  setResolutividad: React.Dispatch<React.SetStateAction<string>>,
  setTrabajo: React.Dispatch<React.SetStateAction<string>>,
  setLugar: React.Dispatch<React.SetStateAction<string>>,
  setHumor: React.Dispatch<React.SetStateAction<string>>,
  setCreatividad: React.Dispatch<React.SetStateAction<string>>,
  setJuicio: React.Dispatch<React.SetStateAction<string>>,
  setHorario: React.Dispatch<React.SetStateAction<string>>,
  setmidios: React.Dispatch<React.SetStateAction<Dioses>>,
  conflicto: string,
  relaciones: string,
  estrategia: string,
  resolutividad: string,
  trabajo: string,
  lugar: string,
  humor: string,
  creatividad: string,
  juicio: string,
  horario: string,
  midios: Dioses
) => {
  switch (componenteactual) {
    case "nombre":
      return (
        <TransitionWrapper>
          <Nombre
            setComponenteActual={setComponenteActual}
            setNombre={setNombre} lang={lang}
          />
        </TransitionWrapper>
      );
    case "nombrehola":
      return (
        <TransitionWrapper>
          <Nombrehola
            setComponenteActual={setComponenteActual}
            nombre={nombre} lang={lang}
          />
        </TransitionWrapper>
      );
    case "conflicto":
      return (
        <TransitionWrapper>
          <Conflicto
            setComponenteActual={setComponenteActual}
            setConflicto={setConflicto} lang={lang}
          />
        </TransitionWrapper>
      );
    case "relaciones":
      return (
        <TransitionWrapper>
          <Relaciones
            setComponenteActual={setComponenteActual}
            setRelaciones={setRelaciones} lang={lang}
          />
        </TransitionWrapper>
      );
    case "estrategia":
      return (
        <TransitionWrapper>
          <Estrategia
            setComponenteActual={setComponenteActual}
            setEstrategia={setEstrategia} lang={lang}
          />
        </TransitionWrapper>
      );
    case "resolutividad":
      return (
        <TransitionWrapper>
          <Resolutividad
            setComponenteActual={setComponenteActual}
            setResolutividad={setResolutividad} lang={lang}
          />
        </TransitionWrapper>
      );
    case "trabajo":
      return (
        <TransitionWrapper>
          <Trabajo
            setComponenteActual={setComponenteActual}
            setTrabajo={setTrabajo} lang={lang}
          />
        </TransitionWrapper>
      );
    case "lugar":
      return (
        <TransitionWrapper>
          <Lugar
            setComponenteActual={setComponenteActual}
            setLugar={setLugar} lang={lang}
          />
        </TransitionWrapper>
      );
    case "humor":
      return (
        <TransitionWrapper>
          <Humor setComponenteActual={setComponenteActual} setHumor={setHumor} lang={lang} />
        </TransitionWrapper>
      );
    case "creatividad":
      return (
        <TransitionWrapper>
          <Creatividad
            setComponenteActual={setComponenteActual}
            setCreatividad={setCreatividad} lang={lang}
          />
        </TransitionWrapper>
      );
    case "juicio":
      return (
        <TransitionWrapper>
          <Juicio setComponenteActual={setComponenteActual} setJuicio={setJuicio} lang={lang} />
        </TransitionWrapper>
      );
    case "horario":
      return (
        <TransitionWrapper>
          <Horario
            setComponenteActual={setComponenteActual}
            setHorario={setHorario} lang={lang}
          />
        </TransitionWrapper>
      );
    case "alea":
      return (
        <TransitionWrapper>
          <Alea setComponenteActual={setComponenteActual} lang={lang} />
        </TransitionWrapper>
      );
    case "resultado":
      return (
        <TransitionWrapper>
          <Resultado
            setComponenteActual={setComponenteActual}
            setmidios={(value) => {
              if (typeof value === 'string' && isValidDios(value)) {
                setmidios(value); // Asignar solo si es válido
              } else if (typeof value === 'function') {
                setmidios((prevState) => {
                  const newValue = value(prevState);
                  if (isValidDios(newValue)) {
                    return newValue;
                  } else {
                    console.error("Valor de 'midios' no válido");
                    return prevState; // O algún valor por defecto si prefieres
                  }
                });
              } else {
                console.error("Valor de 'midios' no válido");
              }
            }}
            nombre={nombre}
            conflicto={conflicto}
            relaciones={relaciones}
            estrategia={estrategia}
            resolutividad={resolutividad}
            trabajo={trabajo}
            lugar={lugar}
            humor={humor}
            creatividad={creatividad}
            juicio={juicio}
            horario={horario} lang={lang}
          />
        </TransitionWrapper>
      );
    case "enviar":
      return (
        <TransitionWrapper>
          <Enviar
            setComponenteActual={setComponenteActual}
            nombre={nombre}
            midios={midios}
            lang={lang}
          />
        </TransitionWrapper>
      );
    case "yapuedes":
      return (
        <TransitionWrapper>
          <Yapuedes setComponenteActual={setComponenteActual}  lang={lang}/>
        </TransitionWrapper>
      );
    default:
      return null;
  }
};

export default renderComponenteActual;
