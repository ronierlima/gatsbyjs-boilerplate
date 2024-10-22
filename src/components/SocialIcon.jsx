import React from "react";

export function SocialIcon({ Icon, href }) {
  return (
    <a
      href={href}
      className="text-slate-400 hover:text-teal-300 transition-colors"
    >
      <Icon size={20} />
    </a>
  );
}
