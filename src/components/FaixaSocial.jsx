import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaixaVertical } from "./FaixaVertical";
import { SocialIcon } from "./SocialIcon";

export function FaixaSocial() {
  return (
    <div className="fixed left-10 bottom-0 hidden md:flex flex-col items-center space-y-6">
      <SocialIcon Icon={FaGithub} href="https://github.com/ronierlima" />
      <SocialIcon
        Icon={FaInstagram}
        href="https://www.instagram.com/ronierlima.dev"
      />
      <SocialIcon
        Icon={FaLinkedin}
        href="https://www.linkedin.com/in/ronierlima/"
      />

      <FaixaVertical />
    </div>
  );
}
