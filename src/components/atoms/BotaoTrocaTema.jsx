import * as React from "react";
import { FaMoon, FaSun } from "react-icons/fa"; // Importa os ícones do react-icons
import { useTheme } from "../../context/ThemeContext";

export function BotaoTrocaTema() {
  const { temaEscuro, toggleTema } = useTheme();

  return (
    <button
      onClick={toggleTema}
      className="self-start border border-secondary text-secondary px-2 py-2 rounded hover:bg-secondary/10 transition-colors"
      aria-label="Trocar Tema"
    >
      {temaEscuro ? (
        <FaSun className="text-yellow-500" />
      ) : (
        <FaMoon className="text-gray-700" />
      )}
    </button>
  );
}
