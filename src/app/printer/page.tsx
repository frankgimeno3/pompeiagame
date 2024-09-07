"use client";

import { handleVisualizar } from './handleVisualizar'; 
import React, { FC, useEffect, useRef, useState } from 'react';
import Whitenav from './Navbar/Whitenav';
import Navbar from './Navbar/navbar';
import { redirect, useRouter } from 'next/navigation';
import { collection, deleteDoc, doc, getDocs, query } from 'firebase/firestore';
import { db } from '../firebase';
import { useReactToPrint } from 'react-to-print';  
// import slogans from "../contenido/slogans.json"
// import sloganseng from "../contenido/sloganseng.json"
// import slogansde from "../contenido/slogansde.json"
import ComponentToPrint from './ComponentToPrint/ComponentToPrint';
import Content from "../contenido/contenidoPrinter.json"
import { PrinterContent } from '../contenido/interfaces'; 
import { useSession } from 'next-auth/react';
import AlertComponent from './alertComponent/AlertComponent';
 
interface PrinterProps { }

export interface File {
    id: any;
    lang: string;
    midios: string;
    nombre: string;
    updatedAt: string;
}

const Printer: FC<PrinterProps> = ({ }) => {
    
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/');
    },
  });

  const [printerLang, setPrinterLang] = useState<'en' | 'es' | 'de'>('en');
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

  const typedContent: PrinterContent = Content as PrinterContent;

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
      setFiles((prevFiles) => prevFiles.filter(file => file.id !== selectedFileId));
  };

  const handleDelete = async (id: string | null) => {
      if (id != undefined) {
          try {
              router.push("/printer")
              const documentRef = doc(db, 'documents', id);
              await deleteDoc(documentRef);
          } catch (error) {
              console.error("Error eliminando el documento: ", error);
          }
      }
  };

  const handleHeaderClick = (header: string) => {
      const newOrder = header === currentOrder ? `-${header}` : header;
      const sortedTableData = files.slice().sort((a, b) => {
          if (header === "updatedAt") {
              return (
                  new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
              );
          } else {
              return (a as any)[header].localeCompare((b as any)[header]);
          }
      });

      if (newOrder.startsWith("-")) {
          sortedTableData.reverse();
      }

      setFiles(sortedTableData);
      setCurrentOrder(newOrder);
  };

  const handleVisualizarCaller = (file: File) => {
      setSelectedRowData(file);
      handleVisualizar({
          file,
          setcontenidoprint,
          handlePrint,
      });
  };

  const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      pageStyle: "@page { size: landscape; }",
  });

  return (
      <div className="flex min-h-screen w-screen bg-gray-100 ">
          {navbarVisible && <Navbar printerLang={printerLang} setPrinterLang={setPrinterLang} />}
          <div className="flex flex-col w-screen  ">
              <Whitenav setNavbarVisible={setNavbarVisible} printerLang={printerLang} session={session}/>
              <div className="p-5">
                  <div className="mb-4 flex flex-row justify-between">
                      <h2 className="mb-4 ml-3 text-lg">{typedContent.subtitulo[printerLang]}</h2>
                  </div>
                  <div className="mr-20 bg-white p-5 ">
                      <table className="text-xs border border-gray-300 bg-white w-full text-left">
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
                          <tbody>
                              {files.map((singnlefile, index) => (
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
                                              onClick={() => handleVisualizarCaller(singnlefile)}
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
                      </table>
                
                  </div>
              </div>
          </div>
          {showAlert && (
              <AlertComponent typedContent={typedContent} printerLang={printerLang} confirmDelete={confirmDelete} cancelDelete={cancelDelete}/>
          )}
          <div style={{ display: "none" }}>
              {selectedRowData && (
                  <ComponentToPrint
                      ref={componentRef}
                      nombre={selectedRowData.nombre}
                      tuDios={selectedRowData.midios}
                      tulang={selectedRowData.lang}
                      contenidoprint={contenidoprint}
                  />
              )}
          </div>
      </div>
  );
};

export default Printer;
