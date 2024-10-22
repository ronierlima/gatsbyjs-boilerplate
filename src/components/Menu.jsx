import React from "react";
import { NavItem } from "./NavItem";

export function Menu() {
  return (
    <nav className="hidden md:flex space-x-6 items-center font-mono">
      <NavItem numero="01." texto="Sobre" />
      <NavItem numero="02." texto="Experiência" />
      <NavItem numero="03." texto="Trabalhos" />
      <NavItem numero="04." texto="Contato" />
      <a
        href="https://ronierlima.github.io/atlas/assets/curriculos/20240330.pdf" // Substitua pelo link do seu currículo
        className="self-start border border-teal-300 text-teal-300 px-6 py-3 rounded hover:bg-teal-300/10 transition-colors"
        aria-label="Ver Currículo"
      >
        Currículo
      </a>
    </nav>
  );
}
