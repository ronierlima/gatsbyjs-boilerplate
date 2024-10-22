import { Link } from "gatsby";
import React from "react";
import { LogoRL } from "../atoms/Logo";
import { Menu } from "../molecules/Menu";

export function Header() {
  return (
    <header className="p-6 flex justify-between items-center transition-shadow duration-500 ease-in-out shadow-md">
      <Link to="/">
        <LogoRL />
      </Link>

      <Menu />
    </header>
  );
}
