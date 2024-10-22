import React from "react";
import { Menu } from "./Menu";

export function Header() {
  return (
    <header className="p-6 flex justify-between items-center">
      <div className="text-teal-300 text-3xl">R</div>
      <Menu />
    </header>
  );
}
