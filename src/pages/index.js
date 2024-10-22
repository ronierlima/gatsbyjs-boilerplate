import * as React from "react";
import { FaixaEmail } from "../components/FaixaEmail";
import { FaixaSocial } from "../components/FaixaSocial";
import { Header } from "../components/Header";

function PaginaInicial() {
  return (
    <div className="min-h-screen bg-navy-900 text-slate-300 flex flex-col">
      <Header />

      <main className="flex-grow flex flex-col justify-center px-6 md:px-32 lg:px-48">
        <p className="text-teal-300 mb-5" aria-label="Saudação">
          Olá, meu nome é
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-200 mb-4">
          Ronier Lima.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-6">
          Eu construo coisas para a web.
        </h2>
        <p className="max-w-xl text-slate-400 mb-12">
          Sou um analista de sistemas e instrutor fullstack com paixão por
          desenvolver soluções digitais que façam a diferença. Tenho experiência
          em construir, e às vezes desenhar, interfaces simples e eficazes.
          Atualmente, estou dedicado ao ensino de programação na{" "}
          <a
            href="https://digitalcollege.com.br/"
            className="text-teal-300 hover:underline"
            aria-label="Visite Digital College"
          >
            Digital College
          </a>
          .
        </p>
        <a
          href="/curriculo" // Substitua pelo link do seu currículo
          className="self-start border border-teal-300 text-teal-300 px-6 py-3 rounded hover:bg-teal-300/10 transition-colors"
          aria-label="Ver Currículo"
        >
          Currículo
        </a>
      </main>

      <FaixaSocial />

      <FaixaEmail />
    </div>
  );
}

export default PaginaInicial;

export const Head = () => <title>Página Inicial</title>;
