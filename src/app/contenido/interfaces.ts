import { Cuestionario } from "./interfazcuestionario";
import { PrinterInterface } from "./interfazprinter";


export interface LanguageContent {
    en: string;
    de: string;
    es: string;
}

// Interface para el contenido total
export interface ContentType {
    dashboard: {
        // Define las propiedades de dashboard si es necesario
    };
    cuestionario: Cuestionario;
    printer: PrinterInterface;
}

export interface NombreProps {
    setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
    setNombre: React.Dispatch<React.SetStateAction<string>>;
    lang: 'es' | 'en' | 'de';
}

export interface NombreholaProps {
    setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
    nombre: String;
    lang: 'es' | 'en' | 'de';
}

export interface ConflictoProps {
    setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
    setConflicto: React.Dispatch<React.SetStateAction<string>>;
    lang: 'es' | 'en' | 'de';

}

export interface RelacionesProps {
    setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
    setRelaciones: React.Dispatch<React.SetStateAction<string>>;
    lang: 'es' | 'en' | 'de';

}

export interface EstrategiaProps {
    setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
    setEstrategia: React.Dispatch<React.SetStateAction<string>>;
    lang: 'es' | 'en' | 'de';

}

export interface ResolutividadProps {
    setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
    setResolutividad: React.Dispatch<React.SetStateAction<string>>;
    lang: 'es' | 'en' | 'de';

}

export interface TrabajoProps {
    setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
    setTrabajo: React.Dispatch<React.SetStateAction<string>>;
    lang: 'es' | 'en' | 'de';

}

export interface LugarProps {
    setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
    setLugar: React.Dispatch<React.SetStateAction<string>>;
    lang: 'es' | 'en' | 'de';

}

export interface HumorProps {
    setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
    setHumor: React.Dispatch<React.SetStateAction<string>>;
    lang: 'es' | 'en' | 'de';

}

export interface CreatividadProps {
    setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
    setCreatividad: React.Dispatch<React.SetStateAction<string>>;
    lang: 'es' | 'en' | 'de';

}

export interface JuicioProps {
    setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
    setJuicio: React.Dispatch<React.SetStateAction<string>>;
    lang: 'es' | 'en' | 'de';

}

export interface HorarioProps {
    setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
    setHorario: React.Dispatch<React.SetStateAction<string>>;
    lang: 'es' | 'en' | 'de';

}

export interface AleaProps {
    setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
    lang: 'es' | 'en' | 'de';

}

export interface ResultadoProps {
    setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
    setmidios: React.Dispatch<React.SetStateAction<string>>;
    nombre: string;
    conflicto: string;
    relaciones: string;
    estrategia: string;
    resolutividad: string;
    trabajo: string;
    lugar: string;
    humor: string;
    creatividad: string;
    juicio: string;
    horario: string;
    lang: 'es' | 'en' | 'de';
}

export interface EnviarProps {
    setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
    midios: string;
    nombre: string;
    lang: 'es' | 'en' | 'de';

}

export interface YapuedesProps {
    setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
    lang: 'es' | 'en' | 'de';

}


export interface PrinterContent {
    title: LanguageContent;
    languageselection: LanguageContent;
    cerrarsesion: LanguageContent;
    subtitulo: LanguageContent;
    hora: LanguageContent;
    nombre: LanguageContent;
    dios: LanguageContent;
    idioma: LanguageContent;
    archivo: LanguageContent;
    opciones: LanguageContent;
    visualizar: LanguageContent;
    eliminar: LanguageContent;
    cancelar: LanguageContent;
    estasseguro: LanguageContent;
    vermas: LanguageContent;
}