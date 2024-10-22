import React from "react";
import { BotaoTrocaTema } from "./BotaoTrocaTema";
import { NavItem } from "./NavItem";

export function Menu() {
  return (
    <nav className="hidden md:flex space-x-6 items-center font-mono">
      <NavItem numero="01." texto="Sobre" />
      <NavItem numero="02." texto="Experiência" />
      <NavItem numero="03." texto="Trabalhos" />
      <NavItem numero="04." texto="Contato" />

      <BotaoTrocaTema />
    </nav>
  );
}
