import { useLocation } from "@reach/router"; // Importando useLocation para verificar a rota atual
import { Link } from "gatsby";
import React from "react";

export function NavItem({ numero, texto, to = "/" }) {
  const location = useLocation();

  const isActive = location.pathname === to;

  return (
    <Link to={to} className="group">
      <span
        className={`mr-1 transition-colors ${
          isActive
            ? "text-teal-500 dark:text-yellow-500"
            : "text-teal-500 dark:text-yellow-500 group-hover:text-primary-light dark:group-hover:text-yellow-500"
        }`}
      >
        {numero}
      </span>
      <span
        className={`transition-colors ${
          isActive
            ? "text-teal-500 dark:text-yellow-500"
            : "text-gray-900 dark:text-gray-300 group-hover:text-teal-500 dark:group-hover:text-yellow-500"
        }`}
      >
        {texto}
      </span>
    </Link>
  );
}
