import * as React from "react";
import { FaFileAlt } from "react-icons/fa"; // Ícone do Currículo

export function BotaoCurriculo() {
  return (
    <a
      href="https://ronierlima.github.io/atlas/assets/curriculos/20240330.pdf"
      className="button-efeito flex items-center justify-center w-[300px] px-4 py-2 bg-teal-500 text-white dark:bg-yellow-500 dark:text-gray-900 font-medium text-lg z-0 rounded-lg transition-all duration-300 ease-in-out hover:bg-teal-600 dark:hover:bg-yellow-400"
      aria-label="Ver Currículo"
    >
      <FaFileAlt className="mr-2 text-xl relative z-10" />
      <span className="text-lg font-semibold relative z-10">Currículo</span>
    </a>
  );
}
