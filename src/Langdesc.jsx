import React from "react";

const Langdesc = () => {
  return (
    <div className="flex justify-center items-center">
    <div className="bg-[#0f0f0f] w-full sm:w-4/5 py-10 flex flex-col items-center">
      {/* Section Heading */}
      <h2 className="text-white text-[1.8rem] sm:text-4xl font-bold mb-8  ">
        🚀 Technologies I <span className="text-red-500">Work With</span>
      </h2>

      {/* Responsive Grid */}
      <div className="container mx-auto w-4/5 gap-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {/* HTML */}
        <div className="bg-[#1a1a1a] flex flex-col justify-center items-center p-4 rounded-xl shadow-lg hover:shadow-red-500/40 transition duration-300">
          <img
            className="w-20 h-20 object-contain"
            src="/image/htmlimg.png"
            alt="HTML"
          />
          <p className="text-[#dddcdc] mt-2 text-lg font-medium">HTML</p>
        </div>

        {/* CSS */}
        <div className="bg-[#1a1a1a] flex flex-col justify-center items-center p-4 rounded-xl shadow-lg hover:shadow-blue-500/40 transition duration-300">
          <img
            className="w-20 h-20 object-contain"
            src="/image/css.svg"
            alt="CSS"
          />
          <p className="text-[#dddcdc] mt-2 text-lg font-medium">CSS</p>
        </div>

        {/* JavaScript */}
        <div className="bg-[#1a1a1a] flex flex-col justify-center items-center p-4 rounded-xl shadow-lg hover:shadow-yellow-400/40 transition duration-300">
          <img
            className="w-20 h-20 object-contain"
            src="/image/jsimg.png"
            alt="JavaScript"
          />
          <p className="text-[#dddcdc] mt-2 text-lg font-medium">JavaScript</p>
        </div>

        {/* React */}
        <div className="bg-[#1a1a1a] flex flex-col justify-center items-center p-4 rounded-xl shadow-lg hover:shadow-cyan-400/40 transition duration-300">
          <img
            className="w-20 h-20 object-contain"
            src="/image/reactimg.svg"
            alt="React"
          />
          <p className="text-[#dddcdc] mt-2 text-lg font-medium">React</p>
        </div>

        {/* Node.js */}
        <div className="bg-[#1a1a1a] flex flex-col justify-center items-center p-4 rounded-xl shadow-lg hover:shadow-green-500/40 transition duration-300">
          <img
            className="w-20 h-20 object-contain"
            src="/image/nodejsimg.svg"
            alt="Node.js"
          />
          <p className="text-[#dddcdc] mt-2 text-lg font-medium">Node.js</p>
        </div>

        {/* Express.js */}
        <div className="bg-[#1a1a1a] flex flex-col justify-center items-center p-4 rounded-xl shadow-lg hover:shadow-gray-500/40 transition duration-300">
          <img
            className="w-20 h-20 object-contain"
            src="/image/sql.png"
            alt="Express.js"
          />
          <p className="text-[#dddcdc] mt-2 text-lg font-medium">Sql</p>
        </div>

        {/* MongoDB */}
        <div className="bg-[#1a1a1a] flex flex-col justify-center items-center p-4 rounded-xl shadow-lg hover:shadow-green-400/40 transition duration-300">
          <img
            className="w-20 h-20 object-contain"
            src="/image/php.png"
            alt="MongoDB"
          />
          <p className="text-[#dddcdc] mt-2 text-lg font-medium">PHP</p>
        </div>

        {/* Tailwind */}
        <div className="bg-[#1a1a1a] flex flex-col justify-center items-center p-4 rounded-xl shadow-lg hover:shadow-sky-400/40 transition duration-300">
          <img
            className="w-20 h-20 object-contain"
            src="/image/tailwind.png"
            alt="Tailwind"
          />
          <p className="text-[#dddcdc] mt-2 text-lg font-medium">Tailwind</p>
        </div>

        {/* Git */}
        <div className="bg-[#1a1a1a] flex flex-col justify-center items-center p-4 rounded-xl shadow-lg hover:shadow-orange-400/40 transition duration-300">
          <img
            className="w-20 h-20 object-contain"
            src="/image/Git-logo.svg"
            alt="Git"
          />
          <p className="text-[#dddcdc] mt-2 text-lg font-medium">Git</p>
        </div>

        {/* GitHub */}
        <div className="bg-[#1a1a1a] flex flex-col justify-center items-center p-4 rounded-xl shadow-lg hover:shadow-white transition duration-300">
          <img
            className="w-20 h-20 object-contain"
            src="/image/githublogo.svg"
            alt="GitHub"
          />
          <p className="text-[#dddcdc] mt-2 text-lg font-medium">GitHub</p>
        </div>
      </div>
    </div></div>
  );
};

export default Langdesc;
