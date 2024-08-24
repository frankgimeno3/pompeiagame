import React, { FC } from 'react';

interface HeadersContentProps {
    handleHeaderClick:any;
    typedContent:any;
    printerLang:any;
}

const HeadersContent: FC<HeadersContentProps> = ({handleHeaderClick, typedContent,  printerLang }) => {
  return (
    <thead>
                                <tr className="border border-gray-300">
                                    <th
                                        className="py-1.5 pl-5 font-medium border border-gray-300 cursor-pointer"
                                        onClick={() => handleHeaderClick("updatedAt")}
                                    >
                                                {typedContent.hora[printerLang]}
                                                </th>
                                    <th
                                        className="py-1.5 pl-5 font-medium border border-gray-300 cursor-pointer"
                                        onClick={() => handleHeaderClick("nombre")}
                                    >
                                                {typedContent.nombre[printerLang]}
                                                </th>
                                    <th
                                        className="py-1.5 pl-5 font-medium border border-gray-300 cursor-pointer"
                                        onClick={() => handleHeaderClick("midios")}
                                    >
                                                {typedContent.dios[printerLang]}
                                                </th>
                                    <th
                                        className="py-1.5 pl-5 font-medium border border-gray-300 cursor-pointer"
                                        onClick={() => handleHeaderClick("lang")}
                                    >
                                                {typedContent.idioma[printerLang]}
                                                </th>
                                    <th className="py-1.5 text-center font-medium border border-gray-300">
                                    {typedContent.archivo[printerLang]}
                                    </th>
                                    <th className="py-1.5 text-center font-medium border border-gray-300">
                                    {typedContent.opciones[printerLang]}
                                    </th>
                                </tr>
                            </thead>
  );
};

export default HeadersContent;