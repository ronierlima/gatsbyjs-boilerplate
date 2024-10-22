import React from "react";
import { SectionTitle } from "../components/atoms/SectionTitle";
import { FaixaEmail } from "../components/molecules/FaixaEmail";
import { FaixaSocial } from "../components/molecules/FaixaSocial";
import { Header } from "../components/organism/Header";

const SectionLayout = ({ prefixo, titulo, children }) => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-primary dark:text-secondary flex flex-col">
      <Header />

      <main className="flex-grow flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <div className="w-full max-w-[1000px] mx-auto">
          {" "}
          <SectionTitle prefixo={prefixo} texto={titulo} />
          {children}
        </div>
      </main>

      <FaixaSocial />
      <FaixaEmail />
    </div>
  );
};

export default SectionLayout;
