import React from "react";

export function FaixaEmail() {
  return (
    <div className="fixed right-10 bottom-0 hidden md:block">
      <div className="vertical-email text-slate-400 text-sm tracking-widest">
        <span style={{ writingMode: "vertical-rl" }}>eu@ronierlima.dev</span>
      </div>
      <div className="w-px h-24 bg-slate-400 mx-auto mt-6"></div>
    </div>
  );
}
