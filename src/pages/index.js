import React from "react";
import { BotaoCurriculo } from "../components/atoms/BotaoCurriculo";
import MainLayout from "../layouts/MainLayout";

function PaginaInicial() {
  return (
    <MainLayout>
      <p
        className="mb-5 text-gray-600 dark:text-secondary"
        aria-label="Saudação"
      >
        Olá, meu nome é
      </p>
      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
        Ronier Lima.
      </h1>
      <h2 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-secondary mb-6">
        Eu construo coisas para a web.
      </h2>
      <p className="max-w-xl text-gray-700 dark:text-secondary mb-12">
        Sou um analista de sistemas e instrutor fullstack com paixão por
        desenvolver soluções digitais que façam a diferença. Atualmente, estou
        dedicado ao ensino de programação na{" "}
        <a
          href="https://digitalcollege.com.br/"
          className="text-gray-900 dark:text-secondary hover:underline"
          aria-label="Visite Digital College"
        >
          Digital College
        </a>
        .
      </p>
      <BotaoCurriculo />
    </MainLayout>
  );
}

export default PaginaInicial;

export const Head = () => <title>Ronier Lima</title>;
