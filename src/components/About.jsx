import React from 'react'

function About() {
  return (
    <section className="py-[20%] bg-gradient-to-r from-blue-500 to-teal-400 ">
    <div className="container mx-auto px-6 md:px-12 lg:px-20">
      <h2 className="text-4xl font-extrabold text-white mb-6 text-center">About Me</h2>
      <div className="text-lg text-white leading-relaxed max-w-3xl mx-auto">
        <p className="mb-4">
          I am a passionate and dedicated developer with a strong foundation in web development technologies.
          My expertise lies in creating dynamic, user-friendly web applications using React.js and TailwindCSS.
        </p>
        <p className="mb-4">
          Over the years, I have honed my skills in front-end development, ensuring clean code and responsive designs. 
          
        </p>
        <p>
          When I'm not coding, I love exploring new technologies, contributing to open-source projects, and staying up-to-date with industry trends. 
          Let’s build something amazing together!
        </p>
      </div>
    </div>
  </section>
  )
}

export default About
