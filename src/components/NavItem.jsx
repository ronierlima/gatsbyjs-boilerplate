import { Link } from "gatsby";
import React from "react";

export function NavItem({ numero, texto }) {
  return (
    <Link to="/" className="group">
      <span className="text-teal-300 mr-1 text-xs">{numero}</span>
      <span className="text-slate-300 group-hover:text-teal-300 transition-colors">
        {texto}
      </span>
    </Link>
  );
}
