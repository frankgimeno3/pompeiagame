"use client"

import React, { FC } from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';

interface LandingProps {
  
}

const Landing: FC<LandingProps> = ({ }) => {
  const router = useRouter()
  const redirectTo = (param: string) => {
    router.push(param)
  }
  return (
    <div className="flex flex-col h-screen mx-auto pt-24 text-center" 
    style={{
      backgroundImage: `url("/fondo1.png")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <p className="pt-24 mt-24 text-3xl text-black mr-10">TE GUSTARÍA SABER...</p>
      <h1 className="pt-6 text-6xl mx-20">¿QUÉ DIOS DEL OLIMPO</h1>
      <h1 className="pt-4 text-6xl mb-5 mx-20">TE REPRESENTA?</h1>
      <p className="text-3xl text-black">UNA AVENTURA QUE NOS ENSEÑA LAS CUALIDADES DE CADA DIOS ROMANO</p>
         <button className="mt-11 px-8 py-4 mr-10 text-4xl text-black bg-cyan-700 rounded bg-opacity-40 shadow-3xl" onClick={()=>redirectTo("/landing/es")}>
          JUGAR
        </button>
       <div className="flex justify-center items-center mt-10 mb-10 mr-10">
        {/* <Link href="/landing/en"> */}
          <div className="flex flex-col text-black mr-20 ">
            <div className="rounded-full overflow-hidden">
              <Image src="/icon/flor.png" alt="flor" width={50} height={50} />
            </div>
            <button className="text-3xl">EN</button>
          </div>
        {/* </Link>
        <Link href="/landing/es"> */}
          <div className="flex flex-col text-black ml-20 ">
            <div className="rounded-full overflow-hidden">
              <Image src="/icon/flor.png" alt="flor" width={50} height={50} />
            </div>
            <button className="text-3xl">ES</button>
          </div>
        {/* </Link>
        <Link href="/landing/es"> */}
          <div className="flex flex-col text-black ml-20 ">
            <div className="rounded-full overflow-hidden">
              <Image src="/icon/flor.png" alt="flor" width={50} height={50} />
            </div>
            <button className="text-3xl">DE</button>
          </div>
        {/* </Link> */}
      </div>
    </div>  );
};

export default Landing;