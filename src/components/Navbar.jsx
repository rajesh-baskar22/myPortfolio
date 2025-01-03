import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold">Rajesh</div>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-gray-400">Home</a></li>
          <li><a href="/about" className="hover:text-gray-400">About</a></li>
          <li><a href="/skills" className="hover:text-gray-400">Skills</a></li>
          <li><a href="/projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
        <div className="flex space-x-4">
          <a href="https://github.com/rajesh-baskar22" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-400" size={24} />
          </a>
          <a href="https://linkedin.com/in/rajesh-baskar2211" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-gray-400" size={24} />
          </a>
          <a href="./src/assets/resume.jpg" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
             CV
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
