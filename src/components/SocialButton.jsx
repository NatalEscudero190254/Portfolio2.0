import React from "react";

const SocialButton = ({ icon, text, href }) => {
  return (
    <a
      className="
      rounded-md border border-white/10
  flex justify-center items-center gap-x-2
  py-1 px-2 md:py-2 md:px-4
  text-xs md:text-base
  text-black/70 text-white
  transition
  
  hover:scale-105 duration-300 hover:bg-white/10 hover:border-blue-600 hover:cursor-pointer
  
"
      target="_blank"
      href={href}
    >
      {icon}
      {text}
    </a>
  );
};

export default SocialButton;
