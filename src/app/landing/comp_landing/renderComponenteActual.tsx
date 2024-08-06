import React from "react";
import Nombre from "./cuest_comp/1nombre/nombre";
import Nombrehola from "./cuest_comp/1nombrehola/nombrehola";
import Conflicto from "./cuest_comp/2conflicto/conflicto";
import Relaciones from "./cuest_comp/3relaciones/relaciones";
import Resolutividad from "./cuest_comp/5resolutividad/resolutividad";
import Estrategia from "./cuest_comp/4estrategia/estrategia";
import Trabajo from "./cuest_comp/6trabajo/trabajo";
import Lugar from "./cuest_comp/7lugar/lugar";
import Humor from "./cuest_comp/8humor/humor";
import Creatividad from "./cuest_comp/9creatividad/creatividad";
import Juicio from "./cuest_comp/910juicio/juicio";
import Horario from "./cuest_comp/911horario/horario";
import Alea from "./cuest_comp/912alea/alea";
import Resultado from "./cuest_comp/913resultado/resultado";
import Enviar from "./cuest_comp/914enviar/enviar";
import Yapuedes from "./cuest_comp/915yapuedes/yapuedes";


const renderComponenteActual = (
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
          setNombre={setNombre}
        />
      );
    case "nombrehola":
      return (
        <Nombrehola
          setComponenteActual={setComponenteActual}
          nombre={nombre}
        />
      );
    case "conflicto":
      return (
        <Conflicto
          setComponenteActual={setComponenteActual}
          setConflicto={setConflicto}
        />
      );
    case "relaciones":
      return (
        <Relaciones
          setComponenteActual={setComponenteActual}
          setRelaciones={setRelaciones}
        />
      );
    case "estrategia":
      return (
        <Estrategia
          setComponenteActual={setComponenteActual}
          setEstrategia={setEstrategia}
        />
      );
    case "resolutividad":
      return (
        <Resolutividad
          setComponenteActual={setComponenteActual}
          setResolutividad={setResolutividad}
        />
      );
    case "trabajo":
      return (
        <Trabajo
          setComponenteActual={setComponenteActual}
          setTrabajo={setTrabajo}
        />
      );
    case "lugar":
      return (
        <Lugar
          setComponenteActual={setComponenteActual}
          setLugar={setLugar}
        />
      );
    case "humor":
      return (
        <Humor setComponenteActual={setComponenteActual} setHumor={setHumor} />
      );
    case "creatividad":
      return (
        <Creatividad
          setComponenteActual={setComponenteActual}
          setCreatividad={setCreatividad}
        />
      );
    case "juicio":
      return (
        <Juicio setComponenteActual={setComponenteActual} setJuicio={setJuicio} />
      );
    case "horario":
      return (
        <Horario
          setComponenteActual={setComponenteActual}
          setHorario={setHorario}
        />
      );
    case "alea":
      return <Alea setComponenteActual={setComponenteActual} />;
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
          horario={horario}
        />
      );
    case "enviar":
      return (
        <Enviar
          setComponenteActual={setComponenteActual}
          nombre={nombre}
          midios={midios}
          lang={""}
        />
      );
    case "yapuedes":
      return <Yapuedes setComponenteActual={setComponenteActual} />;
    default:
      return null;
  }
};

export default renderComponenteActual;
