import React from 'react'
import onlinepr from "../assets/onlinepr.jpg"
import hostelpr from "../assets/hostelpr.jpg"
import storepr from "../assets/storepr.jpg"

function Projects() {
    const projects = [
        { 
          title: 'Online Event PlatForm ManageMent', 
          description: 'Implement tools for providing event schedules, and offering event analytics to support event planning.', 
          image: onlinepr, // Add the project image here
          link: 'https://event-management-rajesh.netlify.app', // Add the GitHub link or live project link here
          techStack: ['React', 'TailwindCSS', 'Node.js'] // Add technologies used
        },
        { 
          title: 'Hostel ManageMent System', 
          description: 'Develop a comprehensive system for managing hostel operations, including room allocation, maintenance requests, and billing.', 
          image: hostelpr,
          link: 'https://hostel-managebyrajesh.netlify.app',
          techStack: ['React', 'TailwindCSS', 'Node.js']
        },
        { 
          title: 'Add To Cart(FakeAPPStore)', 
          description: 'An e-commerce platform with advanced features.', 
          image:storepr ,
          link: 'https://superlative-rolypoly-59e671.netlify.app/',
          techStack: ['React', 'TailwindCSS']
        }
      ];
    
      return (
        <section className="py-[15%] bg-gradient-to-r from-blue-500 to-teal-400 ">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-6">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-white p-6 shadow-md rounded-lg">
                  {/* Project Image */}
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded-md" />
                  
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="text-sm text-gray-500 mb-4">
                    <strong>Tech Stack:</strong> {project.techStack.join(', ')}
                  </div>
                  
                  {/* Project Links */}
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-500 hover:text-blue-600"
                  >
                    View Project
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}

export default Projects
