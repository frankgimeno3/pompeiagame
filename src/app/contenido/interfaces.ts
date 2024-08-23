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