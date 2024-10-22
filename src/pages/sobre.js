import React from "react";
import SectionLayout from "../layouts/SectionLayout";

function AboutPage() {
  return (
    <SectionLayout prefixo={"01."} titulo={"Sobre Mim"}>
      <p className="max-w-xl text-gray-700 dark:text-secondary mb-12">
        Sou um desenvolvedor apaixonado por construir soluções digitais
        inovadoras. Com experiência em diversas tecnologias web e ensino de
        programação.
      </p>
    </SectionLayout>
  );
}

export default AboutPage;

export const Head = () => <title>Sobre - Ronier Lima</title>;
