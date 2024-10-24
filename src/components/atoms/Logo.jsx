import React from "react";

export function LogoRL() {
  return (
    <div className="flex items-center justify-center cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120 40"
        className="w-24 h-10 transition-transform duration-300 ease-out transform hover:scale-110 group"
        role="img"
        aria-label="<rl/>"
      >
        <text
          x="20"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="32"
          fill="teal"
          className="transition-colors dark:fill-yellow-500"
          fontFamily="SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace"
          fontWeight="bold"
        >
          &lt;
        </text>
        <text
          x="55"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="32"
          fill="teal"
          className="transition-colors dark:fill-yellow-500 group-hover:fill-teal-400 dark:group-hover:fill-yellow-400"
          fontFamily="SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace"
          fontWeight="bold"
        >
          rl
        </text>

        <text
          x="100"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="32"
          fill="teal"
          className="transition-colors dark:fill-yellow-500"
          fontFamily="SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace"
          fontWeight="bold"
        >
          /&gt;
        </text>
      </svg>
    </div>
  );
}
