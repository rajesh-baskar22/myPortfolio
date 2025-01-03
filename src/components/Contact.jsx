import React from 'react'

function Contact() {
    
  return (
    <section className="py-[25%] bg-gradient-to-r from-blue-500 to-teal-400">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-700">Contact Me</h2>
      <form className="space-y-6 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        ></textarea>
        
        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Send Message
        </button>
      </form>
    </div>
  </section>
  )
}

export default Contact
