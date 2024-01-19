import React from "react";

const Header = () => {
  return (
    <header className="flex justify-center items-center mx-auto py-5 sticky top-0 w-full z-10 ">
      <nav className="border  border-black rounded-md px-5 py-3 bg-neutral-200 dark:bg-black/50 backdrop-blur-xl  flex flex-row gap-10 ">
        <a
          className="hover:drop-shadow-custom px-3 rounded-md transition"
          href=""
        >
          Experiencia
        </a>
        <a
          href=""
          className="hover:drop-shadow-custom px-3 rounded-md transition"
        >
          Proyectos
        </a>
        <a
          href=""
          className="hover:drop-shadow-custom px-3 rounded-md transition"
        >
          Sobre mi
        </a>
        <a
          href=""
          className="hover:drop-shadow-custom px-3 rounded-md transition"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
};

export default Header;
