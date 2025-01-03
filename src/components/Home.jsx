import React from 'react'

function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-400 text-white ">
    <div className="flex flex-col items-center">
   
         {/* Image */}
         <img 
          src="./src/assets/mern.jpg" 
          alt="Your Name" 
          className="w-32 h-32 rounded-full shadow-lg mb-6" 
        />
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Welcome to My Portfolio</h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        I am a passionate developer specializing in building stunning and functional web applications. Explore my projects and get in touch!
      </p>
      <a
        href="/projects"
        className="inline-block bg-white text-blue-500 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition-all"
      >
        View My Projects
      </a>
    </div>
  </section>
  )
}

export default Home