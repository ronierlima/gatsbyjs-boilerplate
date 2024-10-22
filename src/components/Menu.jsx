import React from "react";
import { NavItem } from "./NavItem";

export function Menu() {
  return (
    <nav className="hidden md:flex space-x-6 items-center">
      <NavItem numero="01." texto="Sobre" />
      <NavItem numero="02." texto="Experiência" />
      <NavItem numero="03." texto="Trabalhos" />
      <NavItem numero="04." texto="Contato" />
      <button className="border border-teal-300 text-teal-300 px-4 py-2 rounded hover:bg-teal-300/10 transition-colors">
        Currículo
      </button>
    </nav>
  );
}
