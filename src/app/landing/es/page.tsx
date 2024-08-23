"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Restartbutton from "../../components/RestartButton";
import renderComponenteActual from "../renderComponenteActual";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Dioses, Language } from "@/app/contenido/interfaces";


const Cuestionario = () => {

  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/');
    },
  });

  const [lang, setLang] = useState<Language>("es");
  const [componenteactual, setComponenteActual] = useState("nombre");
  const [nombre, setNombre] = useState("");
  const [conflicto, setConflicto] = useState("");
  const [relaciones, setRelaciones] = useState("");
  const [estrategia, setEstrategia] = useState("");
  const [resolutividad, setResolutividad] = useState("");
  const [trabajo, setTrabajo] = useState("");
  const [lugar, setLugar] = useState("");
  const [humor, setHumor] = useState("");
  const [creatividad, setCreatividad] = useState("");
  const [juicio, setJuicio] = useState("");
  const [horario, setHorario] = useState("");
  const [midios, setmidios] = useState<Dioses>("");
  const [loadingvisible, setloadingvisible] = useState(false);
  const [fondo, setFondo] = useState(`url("/fondo2.png")`);

  useEffect(() => {
    switch (componenteactual) {
      case "conflicto":
        setFondo(`url("/f2.png")`);
        setTimeout(() => {
          setFondo(`url("/preguntas/es/p1.png")`);
        }, 600);
        break;
      case "relaciones":
        setFondo(`url("/f2.png")`);
        setTimeout(() => {
          setFondo(`url("/preguntas/es/j2.png")`);
        }, 600);
        break;
      case "estrategia":
        setFondo(`url("/f2.png")`);
        setTimeout(() => {
          setFondo(`url("/preguntas/es/3.png")`);
        }, 600);
        break;
      case "resolutividad":
        setFondo(`url("/f2.png")`);
        setTimeout(() => {
          setFondo(`url("/preguntas/es/4.png")`);
        }, 600);
        break;
      case "trabajo":
        setFondo(`url("/f2.png")`);
        setTimeout(() => {
          setFondo(`url("/preguntas/es/5.png")`);
        }, 600);
        break;
      case "lugar":
        setFondo(`url("/f2.png")`);
        setTimeout(() => {
          setFondo(`url("/preguntas/es/6.png")`);
        }, 600);
        break;
      case "humor":
        setFondo(`url("/f2.png")`);
        setTimeout(() => {
          setFondo(`url("/preguntas/es/7.png")`);
        }, 600);
        break;
      case "creatividad":
        setFondo(`url("/f2.png")`);
        setTimeout(() => {
          setFondo(`url("/preguntas/es/8.png")`);
        }, 600);
        break;
      case "juicio":
        setFondo(`url("/f2.png")`);
        setTimeout(() => {
          setFondo(`url("/preguntas/es/9.png")`);
        }, 600);
        break;
      case "horario":
        setFondo(`url("/f2.png")`);
        setTimeout(() => {
          setFondo(`url("/preguntas/es/910.png")`);
        }, 600);
        break;
      case "resultado":
        setFondo(`url("/fondo2.png")`);
        setTimeout(() => {
          setFondo(`url("/PortfolioEnvio.png")`);
        }, 600);
        break;
      default:
        setFondo(`url("/fondo2.png")`);
        break;
    }
  }, [componenteactual]);

  const loadingHandler = () => {
    if (!loadingvisible || componenteactual === "resultado") {
      return "hidden";
    } else {
      return "text-center mx-auto";
    }
  };

  useEffect(() => {
    setloadingvisible(true);
    setTimeout(() => {
      setloadingvisible(false);
      loadingHandler();
    }, 600);
  }, [componenteactual]);

  return (
    <div
      className="flex flex-col h-screen transition-opacity duration-1000 opacity-100 mx-auto"
      style={{
        backgroundImage: `url("/fondo2.png")`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      <div
        className="h-screen flex flex-col justify-center text-center relative "
        style={{
          backgroundImage: fondo,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        {loadingvisible && (
          <div className="absolute z-50 inset-0 flex items-center justify-center">
            <div className=" p-4 rounded ">
              <Image
                src="/gif/GIF1.gif"
                alt="loading"
                width={200}
                height={50}
                className={loadingHandler()}
              />
            </div>
          </div>
        )}

        <div className="absolute top-10 right-10 m-4">
          <Restartbutton />
        </div>
        <div className="transition-opacity duration-1000 opacity-100">
          {renderComponenteActual(
            lang,
            componenteactual,
            setComponenteActual,
            setNombre,
            nombre,
            setConflicto,
            setRelaciones,
            setEstrategia,
            setResolutividad,
            setTrabajo,
            setLugar,
            setHumor,
            setCreatividad,
            setJuicio,
            setHorario,
            setmidios,
            conflicto,
            relaciones,
            estrategia,
            resolutividad,
            trabajo,
            lugar,
            humor,
            creatividad,
            juicio,
            horario,
            midios
          )}
        </div>
      </div>
    </div>
  );
};

export default Cuestionario;
