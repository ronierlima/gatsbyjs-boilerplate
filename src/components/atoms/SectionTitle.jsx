import React from "react";

export function SectionTitle({ prefixo, texto }) {
  return (
    <div className="flex items-center mb-6">
      <span className="text-teal-500 dark:text-yellow-500 font-mono text-xl mr-2">
        {prefixo}
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
        {texto}
      </h2>
      <div className="flex-grow max-w-[300px] h-px ml-4 bg-gray-300 dark:bg-gray-700"></div>
    </div>
  );
}
