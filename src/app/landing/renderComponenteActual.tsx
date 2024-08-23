import React from "react";
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
  setmidios: React.Dispatch<React.SetStateAction<string>>,
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
  midios: string

) => {
  switch (componenteactual) {
    case "nombre":
      return (
        <Nombre
          setComponenteActual={setComponenteActual}
          setNombre={setNombre} lang={lang}
        />
      );
    case "nombrehola":
      return (
        <Nombrehola
          setComponenteActual={setComponenteActual}
          nombre={nombre} lang={lang}
        />
      );
    case "conflicto":
      return (
        <Conflicto
          setComponenteActual={setComponenteActual}
          setConflicto={setConflicto} lang={lang}
        />
      );
    case "relaciones":
      return (
        <Relaciones
          setComponenteActual={setComponenteActual}
          setRelaciones={setRelaciones} lang={lang}
        />
      );
    case "estrategia":
      return (
        <Estrategia
          setComponenteActual={setComponenteActual}
          setEstrategia={setEstrategia} lang={lang}
        />
      );
    case "resolutividad":
      return (
        <Resolutividad
          setComponenteActual={setComponenteActual}
          setResolutividad={setResolutividad} lang={lang}
        />
      );
    case "trabajo":
      return (
        <Trabajo
          setComponenteActual={setComponenteActual}
          setTrabajo={setTrabajo} lang={lang}
        />
      );
    case "lugar":
      return (
        <Lugar
          setComponenteActual={setComponenteActual}
          setLugar={setLugar} lang={lang}
        />
      );
    case "humor":
      return (
        <Humor setComponenteActual={setComponenteActual} setHumor={setHumor} lang={lang} />
      );
    case "creatividad":
      return (
        <Creatividad
          setComponenteActual={setComponenteActual}
          setCreatividad={setCreatividad} lang={lang}
        />
      );
    case "juicio":
      return (
        <Juicio setComponenteActual={setComponenteActual} setJuicio={setJuicio} lang={lang} />
      );
    case "horario":
      return (
        <Horario
          setComponenteActual={setComponenteActual}
          setHorario={setHorario} lang={lang}
        />
      );
    case "alea":
      return <Alea setComponenteActual={setComponenteActual} lang={lang} />;
    case "resultado":
      return (
        <Resultado
          setComponenteActual={setComponenteActual}
          setmidios={setmidios}
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
      );
    case "enviar":
      return (
        <Enviar
          setComponenteActual={setComponenteActual}
          nombre={nombre}
          midios={midios}
           lang={lang}
        />
      );
    case "yapuedes":
      return <Yapuedes setComponenteActual={setComponenteActual}  lang={lang}/>;
    default:
      return null;
  }
};

export default renderComponenteActual;
