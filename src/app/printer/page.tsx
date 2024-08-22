"use client"

import React, { FC, useEffect, useRef, useState } from 'react';
import Whitenav from './Navbar/Whitenav';
import Navbar from './Navbar/navbar';
import { useRouter } from 'next/navigation';
import { collection, deleteDoc, doc, getDocs, query } from 'firebase/firestore';
import { db } from '../firebase';

interface PrinterProps {

}

interface File {
    id:any;
    lang:string;
    midios:string;
    nombre:string;
    updatedAt:string;
}

const Printer: FC<PrinterProps> = ({ }) => {
    const [files, setFiles] = useState<File[]>([]);
    const [showAlert, setShowAlert] = useState(false);
    const [selectedFileId, setSelectedFileId] = useState("");
    const componentRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const [showMoreRows, setShowMoreRows] = useState(false);
    const maxRowsToShow = 10;
    const [navbarVisible, setNavbarVisible] = useState(true);
    const [contenidoprint, setcontenidoprint] = useState("");
    const [currentOrder, setCurrentOrder] = useState<string>("");
    const [selectedRowData, setSelectedRowData] = useState<File | null>(null);
    
    useEffect(() => {
        const fetchData = async () => {
          const documentsCollection = collection(db, 'documents');
          const q = query(documentsCollection);
          const querySnapshot = await getDocs(q);
          const filesData: File[] = [];
          querySnapshot.forEach((doc) => {
            filesData.push(doc.data() as File);
          });
    
          setFiles(filesData);
         };
    
        fetchData();
      }, []);
    
      const showDeleteAlert = (id: string) => {
        setSelectedFileId(id);
        setShowAlert(true);
      };
      const cancelDelete = () => {
        setShowAlert(false);
      };
    
      const confirmDelete = () => {
        setShowAlert(false);
        handleDelete(selectedFileId);
      };

      const handleDelete = async (id: string | null) => {
        if (!id) return;
    
        try {
          const documentRef = doc(db, 'documents', id);
          await deleteDoc(documentRef);
          
          // Filtrar el archivo eliminado del estado local
          setFiles((prevFiles) => prevFiles.filter(file => file.id !== id));
          
          window.location.reload();
        } catch (error) {
          console.error("Error eliminando el documento: ", error);
        }
      };
    
     
    return (
        <div className="flex min-h-screen w-screen bg-gray-100 ">
            {navbarVisible && <Navbar />}
            <div className="flex flex-col w-screen  ">
                <Whitenav setNavbarVisible={setNavbarVisible} />
                <div className="p-5">
                    <div className="mb-4 flex flex-row justify-between">
                    <h2 className="mb-4 ml-3 text-lg">Juego Dioses del Olimpo </h2>
                    <button className="bg-blue-500 text-white text-sm py-1 px-3 rounded hover:bg-blue-600 mr-20"
                      style={{ fontSize: "0.60rem" }}
                    //   onClick={handleDeleteFiles}
            >Borrar contenido antiguo</button>
          </div>
                    <div className="mr-20 bg-white p-5 ">
                        <table className="text-xs border border-gray-300 bg-white w-full text-left">
                            <thead>
                                <tr className="border border-gray-300">
                                    <th
                                        className="py-1.5 pl-5 font-medium border border-gray-300 cursor-pointer"
                                    // onClick={() => handleHeaderClick("updatedAt")}
                                    >
                                        Hora
                                    </th>
                                    <th
                                        className="py-1.5 pl-5 font-medium border border-gray-300 cursor-pointer"
                                    // onClick={() => handleHeaderClick("nombre")}
                                    >
                                        Nombre
                                    </th>
                                    <th
                                        className="py-1.5 pl-5 font-medium border border-gray-300 cursor-pointer"
                                    // onClick={() => handleHeaderClick("midios")}
                                    >
                                        Dios
                                    </th>
                                    <th
                                        className="py-1.5 pl-5 font-medium border border-gray-300 cursor-pointer"
                                    // onClick={() => handleHeaderClick("lang")}
                                    >
                                        Idioma
                                    </th>
                                    <th className="py-1.5 text-center font-medium border border-gray-300">
                                        Archivo
                                    </th>
                                    <th className="py-1.5 text-center font-medium border border-gray-300">
                                        Opciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {files.map((file) => (
                                    <tr
                                        key={file.id}
                                        className="border border-gray-300 font-light "
                                    >
                                        <td className="border border-gray-300 text-[0.65rem] text-left pl-5">
                                            {new Date(file.updatedAt).toLocaleDateString()} -{" "}
                                            {new Date(file.updatedAt).toLocaleTimeString()}
                                        </td>
                                        <td className="border border-gray-300 text-[0.65rem] text-left pl-5">
                                            {file.nombre}
                                        </td>
                                        <td className="border border-gray-300 text-[0.65rem] text-left pl-5">
                                            {file.midios}
                                        </td>
                                        <td className="border border-gray-300 text-[0.65rem] text-left pl-5">
                                            {file.lang}
                                        </td>
                                        <td className="border border-gray-300 text-center">
                                            <button
                                                className="rounded bg-gray-100 shadow px-5 py-1 text-xs text-[0.60rem] hover:bg-gray-50 btn-visualizar"
                                                // onClick={() => handleVisualizar(file)}
                                            >
                                                Visualizar
                                            </button>
                                        </td>
                                        <td className="border border-gray-300 text-center">
                                            <button
                                                className="rounded bg-gray-100 shadow px-5 py-1 text-xs text-[0.60rem] my-2 hover:bg-gray-50 btn-eliminar"
                                                onClick={() => showDeleteAlert(file.id)}
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                 ))} 
                            </tbody>
                        </table>
                        {files.length > maxRowsToShow && !showMoreRows && (
                            <div className="flex justify-center mt-4">
                                <button
                                    className="bg-blue-500 text-white text-sm py-2 px-4 rounded hover:bg-blue-600"
                                    // onClick={handleShowMoreRows}
                                >
                                    Ver más filas
                                </button>
                            </div>
                         )} 
                    </div>
                </div>
            </div>
            {showAlert && (
                <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-75">
                    <div className="bg-white p-5 rounded shadow">
                        <p className="text-xl mb-5">¿Estás seguro que deseas eliminar?</p>
                        <div className="flex justify-end">
                            <button
                                className="rounded bg-red-500 text-white px-4 py-2 mr-2"
                                onClick={confirmDelete}
                            >
                                ELIMINAR
                            </button>
                            <button
                                className="rounded bg-gray-200 px-4 py-2"
                                onClick={cancelDelete}
                            >
                                CANCELAR
                            </button>
                        </div>
                    </div>
                </div>
            )} 
            <div style={{ display: "none" }}>
                {/* {selectedRowData && (
                    <ComponentToPrint
                        ref={componentRef}
                        nombre={selectedRowData.nombre}
                        tuDios={selectedRowData.midios}
                        tulang={selectedRowData.lang}
                        contenidoprint={contenidoprint}
                    />
                )} */}
            </div>
        </div>);
};

export default Printer;