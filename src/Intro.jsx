import { Typewriter } from "react-simple-typewriter";

const Intro = () => {
  return (
    
    <div className="container flex items-center justify-center my-4">
    <div className=" bg-[#0d0d0d] w-full sm:w-4/5  min-h-[70vh] flex justify-center items-center px-6 sm:px-12 py-10">
      <div className="container  max-w-7xl flex flex-col-reverse md:flex-row items-center md:items-start gap-10">
      <div className="flex justify-center items-center md:hidden min-h-[60vh]">
  <img
    className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-4 border-gray-700 shadow-lg"
    src="/image/profile.jpeg"
    alt="Profile"
  />
</div>


        <div className="flex  flex-col items-center md:items-start text-center md:text-left md:w-2/3">
          <div className="text-white text-center text-3xl sm:text-4xl md:text-4xl font-bold mb-6">
            I Can Work With{" "}
            <span className="text-red-500">
              <Typewriter
                words={["Javascript", "React", "Node.js", "PHP","Tailwind"]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={120}
                deleteSpeed={80}
                delaySpeed={1000}
              />
            </span>
          </div>

          <p className="text-[#b1afaf] text-lg sm:text-lg md:text-xl md:leading-loose tracking-wide w-full sm:w-[90%]">
            Hello! My name is <span className="text-red-500 font-semibold">Abhay Soni</span>, and I’m a passionate
            software developer with expertise in building modern and scalable web applications.
            I specialize in both <span className="text-green-400 font-semibold">Frontend</span> and
            <span className="text-blue-400 font-semibold"> Backend</span> development, and I love working on
            projects that showcase my ability to adapt, innovate, and deliver quality results.
          </p>
        </div>

        {/* Right Side Image for Large Screens */}
       <div className="hidden md:flex justify-center items-center md:w-1/3">
  <img
    className="w-[100%] h-64 lg:w-80 lg:h-80 border-4 border-gray-700 rounded-full object-center shadow-lg"
    src="/image/profile.jpeg"
    alt="Profile"
  />
</div>

      </div>
    </div>
    </div>
  );
};

export default Intro;
