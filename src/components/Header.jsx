import { Link } from "gatsby";
import React from "react";
import { LogoRL } from "./Logo";
import { Menu } from "./Menu";

export function Header() {
  return (
    <header className="p-6 flex justify-between items-center">
      <Link to="/">
        <LogoRL />
      </Link>

      <Menu />
    </header>
  );
}
