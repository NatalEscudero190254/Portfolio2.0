import React from "react";

const ExperienceItem = ({ title, description, link, date }) => {
  return (
    <>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none  text-yellow-200">
            {date}
          </time>
          <h3 className="text-lg font-semibold text-blue-400">{title}</h3>
          <p className="mb-4 text-base font-normal text-white/80">
            {description}
          </p>
          <a
            href={link}
            className="inline-flex items-center px-4 py-2 text-sm font-medium border rounded-md hover:scale-105 hover:bg-white/10 hover:border-blue-600 hover:cursor-pointer bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
            target="_blank"
          >
            Ver más
            <svg
              className="w-3 h-3 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </li>
        {/* <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            March 2022
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Marketing UI design in Figma
          </h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </p>
        </li>
        <li class="ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            April 2022
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            E-Commerce UI code in Tailwind CSS
          </h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </p>
        </li> */}
      </ol>
    </>
  );
};

export default ExperienceItem;
