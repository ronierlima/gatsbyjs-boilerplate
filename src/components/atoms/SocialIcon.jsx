import React from "react";

export function SocialIcon({ Icon, href }) {
  return (
    <a
      href={href}
      className="text-gray-700 dark:text-gray-300 transition-transform duration-300 ease-out transform hover:text-teal-500 dark:hover:text-yellow-300 hover:-translate-y-1"
    >
      <Icon size={20} />
    </a>
  );
}
