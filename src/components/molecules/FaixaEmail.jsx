import React from "react";
import { FaixaVertical } from "../atoms/FaixaVertical";

export function FaixaEmail() {
  return (
    <div className="fixed right-10 bottom-0 hidden md:block">
      <a href="mailto:eu@ronierlima.dev">
        <span
          className="cursor-pointer vertical-email text-gray-700 dark:text-gray-300 text-sm tracking-widest transition duration-300 ease-out hover:text-teal-500 dark:hover:text-yellow-300 transform hover:-translate-y-1"
          style={{ writingMode: "vertical-rl" }}
        >
          eu@ronierlima.dev
        </span>
      </a>
      <FaixaVertical />
    </div>
  );
}
