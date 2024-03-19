import React from "react";

const ProjectsSection = ({ title, description, className, img, href }) => {
  return (
    <article className={className}>
      <a
        href={href}
        className="flex justify-end hover:cursor-pointer "
        target="_blank"
      >
        <div className="absolute z-10 bottom-0 top-0 w-full h-full bg-gradient-to-b from-transparent from-20% via-black/50 to-black"></div>

        <div className="flex flex-col justify-end p-6 z-20">
          <h2 className="text-3xl font-semibold text-balance mb-4 text-white">
            {title}
          </h2>
          <p className="text-3xl font-semibold text-sky-200/80 -mt-4 mb-4">
            {description}
          </p>
        </div>
        <img
          src={img}
          alt="Imagenes de los proyectos"
          className="absolute top-0 bottom-0 left-0 group-hover:scale-105 transition-scale duration-1000 -z-10 h-full w-full opacity-90 "
        />
      </a>
    </article>
  );
};

export default ProjectsSection;
