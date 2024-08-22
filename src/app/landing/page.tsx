"use client"

import React, { FC, useState } from 'react';
import LandingContent from './comp_landing/0landing/LandingContent';

interface LandingProps {
}

const Landing: FC<LandingProps> = ({ }) => {

  const [lang, setLang] = useState<'en' | 'es' | 'de'>('en');

  return (
    <div
      className="flex flex-col h-screen mx-auto pt-24 text-center"
      style={{
        backgroundImage: `url("/fondo1.png")`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      <LandingContent lang={lang} setLang={setLang}/>
    </div>
    );
};

export default Landing;