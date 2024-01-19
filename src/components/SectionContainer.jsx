import React, { Children } from "react";

const SectionContainer = ({ id, className }) => {
  return (
    <section
      id={id}
      data-section={id}
      className={`section ${className} w-full mx-auto lg:w-[740px] pb-24`}
    ></section>
  );
};

export default SectionContainer;
