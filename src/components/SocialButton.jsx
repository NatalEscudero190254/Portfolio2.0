import React from "react";

const SocialButton = ({ icon, text, href }) => {
  return (
    <a
      className="bg-white/5 
     border dark:border-white/10 border-gray-300 rounded-md
  flex justify-center items-center gap-x-2
  py-1 px-2 md:py-2 md:px-4
  text-xs md:text-base
  text-black/70 dark:text-white
  transition
  
  hover:scale-105 hover:bg-white/10 hover:border-blue-600 hover:cursor-pointer
  
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
