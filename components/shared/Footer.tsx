import React from "react";

const Footer = () => {
  return (
    <footer className="text-white flex w-full justify-between text-sm">
      <p>2023© - Made by João Silva</p>
      <div className="flex gap-8">
        <a href="https://github.com/joaopbs98" className="hover:underline">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/joao-silva--dev/"
          className="hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
