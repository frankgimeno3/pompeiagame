import React from 'react';
import slogans from "../../contenido/es/printer/slogans.json";
import sloganseng from "../../contenido/en/printer/sloganseng.json";

interface File {
    id: any;
    lang: string;
    midios: string;
    nombre: string;
    updatedAt: string;
}

interface VisualizarHandlerProps {
    file: File;
    setSelectedRowData: (file: File) => void;
    setcontenidoprint: (content: string) => void;
}

const VisualizarHandler: React.FC<VisualizarHandlerProps> = ({ file, setSelectedRowData, setcontenidoprint }) => {
    const handleVisualizar = () => {
        setSelectedRowData(file);

        if (file.lang === "es") {
            switch (file.midios) {
                case "CERES":
                    setcontenidoprint(slogans.CERES);
                    break;
                case "DIANA":
                    setcontenidoprint(slogans.DIANA);
                    break;
                case "FEBO":
                    setcontenidoprint(slogans.FEBO);
                    break;
                case "JUPITER":
                    setcontenidoprint(slogans.JUPITER);
                    break;
                case "JUNO":
                    setcontenidoprint(slogans.JUNO);
                    break;
                case "MARTE":
                    setcontenidoprint(slogans.MARTE);
                    break;
                case "MERCURIO":
                    setcontenidoprint(slogans.MERCURIO);
                    break;
                case "MINERVA":
                    setcontenidoprint(slogans.MINERVA);
                    break;
                case "NEPTUNO":
                    setcontenidoprint(slogans.NEPTUNO);
                    break;
                case "VENUS":
                    setcontenidoprint(slogans.VENUS);
                    break;
                case "VESTA":
                    setcontenidoprint(slogans.VESTA);
                    break;
                case "VULCANO":
                    setcontenidoprint(slogans.VULCANO);
                    break;
                default:
                    break;
            }
        } else if (file.lang === "en") {
            switch (file.midios) {
                case "CERES":
                    setcontenidoprint(sloganseng.CERES);
                    break;
                case "DIANA":
                    setcontenidoprint(sloganseng.DIANA);
                    break;
                case "PHOEBUS":
                    setcontenidoprint(sloganseng.PHOEBUS);
                    break;
                case "JUPITER":
                    setcontenidoprint(sloganseng.JUPITER);
                    break;
                case "VESTA":
                    setcontenidoprint(sloganseng.VESTA);
                    break;
                case "MARS":
                    setcontenidoprint(sloganseng.MARS);
                    break;
                case "MERCURY":
                    setcontenidoprint(sloganseng.MERCURY);
                    break;
                case "MINERVA":
                    setcontenidoprint(sloganseng.MINERVA);
                    break;
                case "NEPTUNE":
                    setcontenidoprint(sloganseng.NEPTUNE);
                    break;
                case "VENUS":
                    setcontenidoprint(sloganseng.VENUS);
                    break;
                case "JUNO":
                    setcontenidoprint(sloganseng.JUNO);
                    break;
                case "VULCAN":
                    setcontenidoprint(sloganseng.VULCAN);
                    break;
                default:
                    break;
            }
        }
    };

    return (
        <button onClick={handleVisualizar} className="rounded bg-gray-100 shadow px-5 py-1 text-xs text-[0.60rem] hover:bg-gray-50">
            Visualizar
        </button>
    );
};

export default VisualizarHandler;
