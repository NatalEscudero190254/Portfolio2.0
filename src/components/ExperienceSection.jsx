import React from "react";
import ExperienceItem from "./ExperienceItem";

const ExperienceSection = () => {
  const EXPERIENCE = [
    {
      date: "Actualmente...",
      title: "Desarrollador SQL",
      description:
        "Actualmente me desempeño como desarrollador T-SQL diseñando, desarrollando y realizando mantenimiento de bases de datos utilizando Microsoft SQL Server. Tengo experiencia en la creación de stored procedures y triggers para automatizar procesos de negocio y mejorar el rendimiento de las consultas de bases de datos. Además, he trabajado en la optimización de consultas y en la identificación y solución de problemas de rendimiento de bases de datos.",
      link: "https://sisem.net/",
    },
  ];

  return (
    <ol>
      {EXPERIENCE.map((e) => (
        <li key={e.title}>
          <ExperienceItem
            date={e.date}
            title={e.title}
            description={e.description}
            link={e.link}
          />
        </li>
      ))}
    </ol>
  );
};

export default ExperienceSection;
