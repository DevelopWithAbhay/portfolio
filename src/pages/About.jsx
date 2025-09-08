import React from 'react'
import Navbar from '../Navbar'
const About = () => {
  return (
<div className='text-white text-2xk'>
    <Navbar/>
    <div className=" mx-auto p-8 text-2xl w-full  sm:w-4/5 bg-gray-900 rounded-xl m-3">
      <h1 className="text-3xl font-bold text-center mb-4">About Me</h1>
      <p className="mb-4">
        👋 <strong>Hi there!</strong> I’m Abhay Soni, a passionate developer with expertise in  HTML, CSS, and JavaScript, PHP MySQL and React (Mern Stack in Progress...). My journey in web development has been fueled by a desire to create engaging, user-friendly applications.
      </p>

      <h2 className="text-2xl font-semibold mb-2">My Skills:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>PHP &MYSQL</li>
        <li>HTML & CSS for crafting beautiful layouts with Tailwind Css</li>
        <li>JavaScript for dynamic, interactive features</li>
        <li>Version control with Git & GitHub for collaborative projects</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">What I Love:</h2>
      <p className="mb-4">
        I enjoy tackling challenging problems and staying updated with the latest technologies. Every project is an opportunity to learn and grow, whether I’m building a full-stack application or optimizing a website’s performance.
      </p>
      <h2 className="text-2xl font-semibold mb-2">My Approach:</h2>
      <p className="mb-4">
        My development philosophy centers around collaboration, continuous learning, and delivering high-quality code. I believe in writing maintainable code and applying best practices to ensure that projects are scalable and efficient. I'm always eager to dive into new challenges and push the boundaries of what I can create.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Let’s Connect:</h2>
      <p className="mb-4">
        When I’m not coding, you can find me exploring new tech trends or contributing to open-source projects on GitHub. I’m always eager to collaborate and share ideas!
      </p>
      
      <p>
        Feel free to reach out through, and let’s create something amazing together!
      </p>
    </div>
      <div className="footer container mx-auto w-4/5 h-12 bg-gray-700 flex items-center justify-around gap-12 text-[#dddcdc] text-lg font-sans-serif border-1  relative bottom-2 rounded-xl cursor-pointer">  To do</div>
    </div>
  )
}

export default About
