import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut, useSession } from 'next-auth/react';

interface WhitenavProps {
  setNavbarVisible: (visible: boolean) => void;
  printerLang: any;
  session:any;
}

const Whitenav: React.FC<WhitenavProps> = ({ setNavbarVisible, printerLang, session}) => {
  const router = useRouter();
  const [navbarVisible, setNavbarVisibleState] = useState(true);

 

  const handleToggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
    setNavbarVisibleState(!navbarVisible);
  };

  const handleCerrarSesion = async () => {
    router.push("/")
    setTimeout(() => {
      signOut()
    }, 1000);
  };
   
   

  return (
    <nav className="flex flex-row bg-white justify-between px-2 py-1 shadow">
      <div className="px-2 py-1">
        <button className="pt-2" onClick={handleToggleNavbar}>
          <Image src="/menuicon.png" alt="menuicon" width={20} height={20} />
        </button>
      </div>
      <div className="px-2 py-1">
        {printerLang === "es" && (
          <button
            style={{ fontSize: "0.60rem" }}
            onClick={()=>handleCerrarSesion()}
            className="bg-blue-500 text-white text-sm py-2 px-4 rounded hover:bg-blue-600"
          >
            Cerrar sesión
          </button>
        )}

        {printerLang === "en" && (
          <button
            style={{ fontSize: "0.60rem" }}
            onClick={()=>handleCerrarSesion()}
            className="bg-blue-500 text-white text-sm py-2 px-4 rounded hover:bg-blue-600"
          >
            Log out
          </button>
        )}

        {printerLang === "de" && (
          <button
            style={{ fontSize: "0.60rem" }}
            onClick={()=>handleCerrarSesion()}
            className="bg-blue-500 text-white text-sm py-2 px-4 rounded hover:bg-blue-600"
          >
            Ausloggen
          </button>
        )}
      </div>
    </nav>
  );
};

export default Whitenav;
