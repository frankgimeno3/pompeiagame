import React, { FC } from 'react';

interface TableBodyProps {
    files: any;
     handleVisualizar: any;
    typedContent: any;
    printerLang: any;
    showDeleteAlert: any;
}

const TableBody: FC<TableBodyProps> = ({files, handleVisualizar, typedContent, printerLang, showDeleteAlert }) => {
  return (
    <tbody>
    {files.map((singnlefile:any, index: any) => (
        <tr
            key={singnlefile.id || `file-${index}`}
            className="border border-gray-300 font-light "
        >
            <td className="border border-gray-300 text-[0.65rem] text-left pl-5">
                {new Date(singnlefile.updatedAt).toLocaleDateString()} -{" "}
                {new Date(singnlefile.updatedAt).toLocaleTimeString()}
            </td>
            <td className="border border-gray-300 text-[0.65rem] text-left pl-5">
                {singnlefile.nombre}
            </td>
            <td className="border border-gray-300 text-[0.65rem] text-left pl-5">
                {singnlefile.midios}
                </td>
                <td className="border border-gray-300 text-[0.65rem] text-left pl-5">
                {singnlefile.lang}
            </td>
            <td className="border border-gray-300 text-center">
                <button
                    className="rounded bg-gray-100 shadow px-5 py-1 text-xs text-[0.60rem] hover:bg-gray-50 btn-visualizar"
                    onClick={() => handleVisualizar(singnlefile)}
                >
                    {typedContent.visualizar[printerLang]}
                    </button>
            </td>
            <td className="border border-gray-300 text-center">
                <button
                    className="rounded bg-gray-100 shadow px-5 py-1 text-xs text-[0.60rem] my-2 hover:bg-gray-50 btn-eliminar"
                    onClick={() => showDeleteAlert(singnlefile.id)}
                >
                    {typedContent.eliminar[printerLang]}
                </button>
            </td>
        </tr>
    ))}
</tbody>
  );
};

export default TableBody;