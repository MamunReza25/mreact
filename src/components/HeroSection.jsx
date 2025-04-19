import React from 'react'


function HeroSection() {
  return (
    <>
    {/* hero section */}
       <section className="py-20 bg-gradient-to-br from-blue-100 to-white">
    <div className="max-w-6xl mx-auto text-center px-4">
      <h2 className="text-4xl font-bold mb-4">Hi, I'm Mamun Reza</h2>
      <p className="text-xl text-gray-700 mb-6">Frontend Web Developer | Tailwind CSS Lover</p>
      <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Hire Me
      </a>
    </div>
  </section>
    </>
  )
}

export default HeroSection
