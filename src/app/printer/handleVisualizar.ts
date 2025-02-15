// handleVisualizar.ts
"use client"

import { Dispatch, SetStateAction } from 'react';
import slogans from "../contenido/slogans.json";
import sloganseng from "../contenido/sloganseng.json";
import slogansde from "../contenido/slogansde.json";

interface HandleVisualizarProps {
    file: any;
    setcontenidoprint: Dispatch<SetStateAction<string>>;
    handlePrint: () => void;
}

export const handleVisualizar = ({ file, setcontenidoprint, handlePrint,  }: HandleVisualizarProps) => {
    switch (file.lang) {
        case "es":
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
            break;
        case "en":
            switch (file.midios) {
                case "CERES":
                    setcontenidoprint(sloganseng.CERES);
                    break;
                case "DIANA":
                    setcontenidoprint(sloganseng.DIANA);
                    break;
                case "FEBO":
                    setcontenidoprint(sloganseng.FEBO);
                    break;
                case "JUPITER":
                    setcontenidoprint(sloganseng.JUPITER);
                    break;
                case "VESTA":
                    setcontenidoprint(sloganseng.VESTA);
                    break;
                case "MARTE":
                    setcontenidoprint(sloganseng.MARTE);
                    break;
                case "MERCURIO":
                    setcontenidoprint(sloganseng.MERCURIO);
                    break;
                case "MINERVA":
                    setcontenidoprint(sloganseng.MINERVA);
                    break;
                case "NEPTUNO":
                    setcontenidoprint(sloganseng.NEPTUNO);
                    break;
                case "VENUS":
                    setcontenidoprint(sloganseng.VENUS);
                    break;
                case "JUNO":
                    setcontenidoprint(sloganseng.JUNO);
                    break;
                case "VULCANO":
                    setcontenidoprint(sloganseng.VULCANO);
                    break;
                default:
                    break;
            }
            break;
        case "de":
            switch (file.midios) {
                case "CERES":
                    setcontenidoprint(slogansde.CERES);
                    break;
                case "DIANA":
                    setcontenidoprint(slogansde.DIANA);
                    break;
                case "FEBO":
                    setcontenidoprint(slogansde.FEBO);
                    break;
                case "JUPITER":
                    setcontenidoprint(slogansde.JUPITER);
                    break;
                case "VESTA":
                    setcontenidoprint(slogansde.VESTA);
                    break;
                case "MARTE":
                    setcontenidoprint(slogansde.MARTE);
                    break;
                case "MERCURIO":
                    setcontenidoprint(slogansde.MERCURIO);
                    break;
                case "MINERVA":
                    setcontenidoprint(slogansde.MINERVA);
                    break;
                case "NEPTUNO":
                    setcontenidoprint(slogansde.NEPTUNO);
                    break;
                case "VENUS":
                    setcontenidoprint(slogansde.VENUS);
                    break;
                case "JUNO":
                    setcontenidoprint(slogansde.JUNO);
                    break;
                case "VULCANO":
                    setcontenidoprint(slogansde.VULCANO);
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
    if (file.midios) {
        handlePrint();
    }
};
