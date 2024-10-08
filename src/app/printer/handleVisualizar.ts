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
                case "PHOEBUS":
                    setcontenidoprint(sloganseng.FEBO);
                    break;
                case "JUPITER":
                    setcontenidoprint(sloganseng.JUPITER);
                    break;
                case "VESTA":
                    setcontenidoprint(sloganseng.JUNO);
                    break;
                case "MARS":
                    setcontenidoprint(sloganseng.MARTE);
                    break;
                case "MERCURY":
                    setcontenidoprint(sloganseng.MERCURIO);
                    break;
                case "MINERVA":
                    setcontenidoprint(sloganseng.MINERVA);
                    break;
                case "NEPTUNE":
                    setcontenidoprint(sloganseng.NEPTUNO);
                    break;
                case "VENUS":
                    setcontenidoprint(sloganseng.VENUS);
                    break;
                case "JUNO":
                    setcontenidoprint(sloganseng.VESTA);
                    break;
                case "VULCAN":
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
                case "PHOEBUS":
                    setcontenidoprint(slogansde.FEBO);
                    break;
                case "JUPITER":
                    setcontenidoprint(slogansde.JUPITER);
                    break;
                case "VESTA":
                    setcontenidoprint(slogansde.JUNO);
                    break;
                case "MARS":
                    setcontenidoprint(slogansde.MARTE);
                    break;
                case "MERCURY":
                    setcontenidoprint(slogansde.MERCURIO);
                    break;
                case "MINERVA":
                    setcontenidoprint(slogansde.MINERVA);
                    break;
                case "NEPTUNE":
                    setcontenidoprint(slogansde.NEPTUNO);
                    break;
                case "VENUS":
                    setcontenidoprint(slogansde.VENUS);
                    break;
                case "JUNO":
                    setcontenidoprint(slogansde.VESTA);
                    break;
                case "VULCAN":
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
