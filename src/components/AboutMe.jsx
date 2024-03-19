import React from "react";

const AboutMe = ({ img }) => {
  return (
    <article className="flex flex-col md:flex-row gap-8 justify-center items-center text-white">
      <div className=" text-pretty [&>p]:mb-4 [&>p>strong]:font-semibold [&>p>strong]:text-blue-600">
        <p>
          Me llamo Natal, pero mis amigos me dicen Nata. La tecnología me gustó
          desde siempre,{" "}
          <strong>
            empecé por el hardware desarmando componentes a temprana edad
          </strong>
          , (siempre me dio curiosidad) y actualmente me encuentro en React
          creándolos.
        </p>
        <p>
          <strong>Junto con el deporte</strong>, sentarme a programar en mi
          habitación es algo que me libera de estrés, aunque a veces sea
          frustrante.{" "}
        </p>
        <p>
          Disfruto creando aplicaciones web y aprendiendo todos los días un
          poquito más de este{" "}
          <strong>mundo que está en constante cambio</strong>.
        </p>
      </div>
      <img
        src={img}
        alt="Imagen mia para el about section"
        className="rounded-full w-60 h-45"
      />
    </article>
  );
};

export default AboutMe;
