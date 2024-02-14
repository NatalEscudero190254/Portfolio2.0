import React, { lazy } from "react";
import "./App.css";
import avatar from "./assets/myAvatar.svg";
import SocialButton from "./components/SocialButton";
import GitHub from "./components/icons/GitHub";
import LinkedIn from "./components/icons/LinkedIn";
import Gmail from "./components/icons/Gmail";
import BriefCase from "./components/icons/BriefCase";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import Books from "./components/icons/Books";
import gamescript from "./assets/gameScript.jpeg";
import AboutMe from "./components/AboutMe";
import UserCode from "./components/icons/UserCode";
import Me from "./assets/Me.png";

function App() {
  return (
    <main className="relative">
      <section
        className="w-full mx-auto lg:w-[740px] pb-24 py-44"
        id="principal"
      >
        {/* <img
          src={avatar}
          alt="Avatar svg de Natal Escudero"
          loading="lazy"
          className="h-20 w-20"
        /> */}
        <h1 className="dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
          Hola!, soy
          <span className="text-blue-600 ">Natal</span>
        </h1>
        <p className="text-xl lg:text-2xl text-balance max-w-[700px] text-black dark:text-white">
          +1 año de experiencia en <span className="text-yellow-200">IT</span>.
          Estudiante de Lic. en Sistemas,{" "}
          <span className="text-blue-300">desarrollador SQL y Web</span>.{" "}
          
        </p>
        <nav className="flex gap-4 mt-8 flex-wrap">
          <SocialButton
            icon={<LinkedIn />}
            text={"LinkedIn"}
            href={"https://www.linkedin.com/in/natal-escudero-0a0020210/"}
          ></SocialButton>
          <SocialButton
            icon={<GitHub />}
            text={"GitHub"}
            href={"https://github.com/NatalEscudero190254"}
          ></SocialButton>
          <SocialButton
            icon={<Gmail />}
            text={"natalescudero543@gmail.com"}
            href={"mailto:natalescudero543@gmail.com"}
          ></SocialButton>
        </nav>
      </section>

      <section
        className="w-full mx-auto lg:w-[740px] pb-24 py-20 "
        id="experiencia"
      >
        <h2 className="text-3xl flex items-center font-semibold gap-x-3 mb-6 text-black/80 dark:text-white/80">
          <BriefCase />
          Experiencia Laboral
        </h2>

        <ExperienceSection />
      </section>

      <section
        className="w-full mx-auto lg:w-[740px] pb-24 py-10"
        id="proyectos"
      >
        <h2 className="text-3xl flex items-center font-semibold gap-x-3 mb-6 text-black/80 dark:text-white/80">
          <Books />
          Proyectos
        </h2>
        <div className="w-full max-w-[900px] grid grid-cols-10 auto-rows-[20rem] gap-2 mx-auto ">
          <ProjectsSection
            className={
              "relative rounded-xl backdrop-blur-md border border-black/10  col-span-10 max-h-[740px] bg-blue-950 flex justify-end overflow-hidden group shadow-xl shadow-white/5 "
            }
            title={"E-commerce GameScript"}
            description={
              "E-commerce de venta de videojuegos, desarrollado en equipo con las tecnologias: React, Node, y SQL."
            }
            img={gamescript}
            href={
              "https://github.com/NatalEscudero190254/proyecto-final-gameScript"
            }
          ></ProjectsSection>
          <ProjectsSection
            className={
              "relative rounded-xl backdrop-blur-md border border-black/10  col-span-5 max-h-[740px] bg-blue-950 flex justify-end overflow-hidden group shadow-xl shadow-white/5  "
            }
          ></ProjectsSection>
          <ProjectsSection
            className={
              "relative rounded-xl backdrop-blur-md border border-black/10  col-span-5 max-h-[740px] bg-blue-950 flex justify-end overflow-hidden group shadow-xl shadow-white/5    "
            }
          ></ProjectsSection>
        </div>
      </section>

      <section
        className="w-full mx-auto lg:w-[740px] pb-24 py-10"
        id="sobre-mi"
      >
        <h2 className="text-3xl flex items-center font-semibold gap-x-3 mb-6 text-black/80 dark:text-white/80">
          <UserCode />
          Sobre Mi
        </h2>
        <AboutMe img={Me} />
      </section>
    </main>
  );
}

export default App;
