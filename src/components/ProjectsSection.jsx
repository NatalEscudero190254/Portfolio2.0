import React from "react";

const ProjectsSection = ({ title, description, className, img }) => {
  return (
    <article className={className}>
      <div className="absolute z-10 bottom-0 top-0 w-full h-full bg-gradient-to-b from-transparent from-20% via-black/50 to-black"></div>

      <div className="flex flex-col justify-end p-6 z-10 ">
        <h2 className="text-3xl font-semibold text-balance mb-4">{title}</h2>
        <p className="text-3xl font-semibold text-sky-200/80 -mt-4 mb-4">
          {description}
        </p>
      </div>
    </article>
  );
};

export default ProjectsSection;
