import React from "react";
import Navbar from "../Navbar";
import Foooter from "../Foooter";
const projects = {
  PHP: [
    {
      id: 6,
      title: "Mobile Store",
      description: "A Fully Working Mobile Shopping Website.",
      language: "PHP, MySQL",
      image: "/project-images/php1.jpeg",
      demo: "http://DevelopWithAbhay.free.nf",
    },

  ],
  CSS: [
    {
      id: 1,
      title: "Mobile Settings Clone",
      description: "A Replica Of Infinix Mobile  Settings.",
      language: "HTML & CSS",
      image: "/project-images/setting.jpeg",
      demo: "https://developwithabhay.github.io/projects/html-project1",
    },
    {
      id: 2,
      title: "Ezopay Clone",
      description:" A Replica Of Ezopay Payment App",
      language: "HTML & CSS",
      image: "/project-images/ezopay.png ",
      demo: "https://developwithabhay.github.io/projects/html-project2",
    },
    {
      id: 3,
      title: "Rapido Clone",
      description:" A Replica Of Rapido Website",
      language: "HTML & CSS",
      image: "/project-images/rapido.jpg ",
      demo: "https://developwithabhay.github.io/projects/rapido",
    },
    {
      id:3,
      title: "Light Bulb",
      description:"A Realistic fully Functional Bulb With Switch Made Up Of Pure CSS ",
      language: "HTML & CSS",
      image: "/project-images/bulb.jpeg ",
      demo: "https://developwithabhay.github.io/projects/html-project4",
    },
    {
      id:4,
      title: "Solar System",
      description:"A Realistic fully Functional Solar System With Sun And Earth Rotation ",
      language: "HTML & CSS",
      image: "/project-images/solar.png ",
      demo: "https://developwithabhay.github.io/projects/html-project5",
    },
  ],
  JavaScript: [
    {
      id: 4,
      title: "Captcha Verification",
      description: "A functional captcha verification app.",
      language: "HTML, CSS, JS",
      image: "/project-images/captcha.png",
      demo: "https://developwithabhay.github.io/projects/js-project1",
    },
              {
      id: 5,
      title: "Digital Clock",
      description: "A live digital clock built with JavaScript.",
      language: "HTML, CSS, JS",
      image: "/project-images/clock.png",
      demo: "https://developwithabhay.github.io/projects/js-project2",
    },
  ],
  
};


const Projects = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />

      <div className="mx-auto p-6 sm:p-10 w-full sm:w-4/5">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10">
          My Projects
        </h2>

        {Object.keys(projects).map((category) => (
          <div key={category} className="mb-12">
          
                <h4 className="text-3xl sm:text-4xl font-bold  text-[#ba92cf] mb-10">
          {category} Projects
        </h4>
            <div className="grid gap-6 col-span-1 sm:grid-cols-1">
              {projects[category].map((project) => (
               <a
  key={project.id}
  href={project.demo}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 block cursor-pointer overflow-hidden"
>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-5">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 text-sm mb-3">
                      {project.description}
                    </p>
                    <span className="bg-blue-600 text-white px-3 py-1 text-xs rounded-full">
                      {project.language}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Foooter />
    </div>
  );
};

export default Projects;
