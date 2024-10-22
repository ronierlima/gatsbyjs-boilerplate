import { Link } from "gatsby";
import * as React from "react";
import MainLayout from "../layouts/MainLayout"; // Importando o MainLayout

const NotFoundPage = () => {
  return (
    <MainLayout>
      <h1 className="text-5xl font-bold mb-6">Página não encontrada</h1>
      <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
        Desculpe, não conseguimos encontrar o que você está procurando.
      </p>
      {process.env.NODE_ENV === "development" && (
        <p className="mb-4">
          Tente criar uma página em{" "}
          <code className="bg-yellow-200 p-1 rounded">src/pages/</code>.
        </p>
      )}
      <Link
        to="/"
        className="text-teal-500 hover:underline dark:text-yellow-400"
      >
        Voltar para a página inicial
      </Link>
    </MainLayout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Página Não Encontrada</title>;
