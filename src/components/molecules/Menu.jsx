import React from "react";
import { BotaoTrocaTema } from "../atoms/BotaoTrocaTema";
import { NavItem } from "../atoms/NavItem";

export function Menu() {
  return (
    <nav className="hidden md:flex space-x-6 items-center font-mono">
      <NavItem numero="00." texto="Início" to="/" />
      <NavItem numero="01." texto="Sobre" to="/sobre/" />
      {/* <NavItem numero="02." texto="Experiência" to="/experiencia/" />
      <NavItem numero="03." texto="Trabalhos" to="/trabalhos/" />
      <NavItem numero="04." texto="Contato" to="/contato/" /> */}

      <BotaoTrocaTema />
    </nav>
  );
}
