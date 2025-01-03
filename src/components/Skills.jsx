import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'

function Skills() {
    const skills = [
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "TailwindCSS" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaReact />, name: "React" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <FaGitAlt />, name: "Git" },
      ];
  return (
    <section className="py-[21%] bg-gradient-to-r from-blue-500 to-teal-400">
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="text-center p-6 bg-gray-100 shadow-md rounded-lg">
            <div className="text-4xl text-red-500 mb-4">{skill.icon}</div>
            <h3 className="text-lg font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Skills
