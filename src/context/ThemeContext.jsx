import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const addDarkClass = (isDark) => {
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

export function ThemeProvider({ children }) {
  const [temaEscuro, setTemaEscuro] = useState(false);

  useEffect(() => {
    const temaSalvo = localStorage.getItem("temaEscuro");
    if (temaSalvo !== null) {
      const parsedTema = JSON.parse(temaSalvo);
      setTemaEscuro(parsedTema);
      addDarkClass(parsedTema);
    }
  }, []);

  const toggleTema = () => {
    setTemaEscuro((prevTemaEscuro) => {
      const newTema = !prevTemaEscuro;
      localStorage.setItem("temaEscuro", JSON.stringify(newTema));
      addDarkClass(newTema);
      return newTema;
    });
  };

  return (
    <ThemeContext.Provider value={{ temaEscuro, toggleTema }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook para acessar o tema e a função de alternância
export function useTheme() {
  return useContext(ThemeContext);
}
