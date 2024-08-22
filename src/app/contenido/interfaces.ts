// Define las interfaces para el contenido

// Interface para las propiedades del cuestionario
export interface Cuestionario {
    nombre: {
        escribetunombre: {
            es: string;
            en: string;
            de: string;
        };
        caracteres10: {
            es: string;
            en: string;
            de: string;
        };
        seguir: {
            es: string;
            en: string;
            de: string;
        };
    };
    // Puedes agregar otras propiedades si es necesario
}

// Interface para el contenido total
export interface ContentType {
    dashboard: {
        // Define las propiedades de dashboard si es necesario
    };
    cuestionario: Cuestionario;
}

// Props del componente Nombre
export interface NombreProps {
    setComponenteActual: React.Dispatch<React.SetStateAction<string>>;
    setNombre: React.Dispatch<React.SetStateAction<string>>;
    lang: 'es' | 'en' | 'de'; // Idioma como propiedad
}

