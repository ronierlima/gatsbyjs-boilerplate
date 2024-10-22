import { Link } from "gatsby";
import React from "react";

export function NavItem({ numero, texto }) {
  return (
    <Link to="/" className="group">
      <span className="text-teal-500 dark:text-yellow-500 mr-1 transition-colors group-hover:text-primary-light dark:group-hover:text-yellow-500">
        {numero}
      </span>
      <span className="text-gray-900 dark:text-gray-300 group-hover:text-teal-500 dark:group-hover:text-yellow-500 transition-colors">
        {texto}
      </span>
    </Link>
  );
}
