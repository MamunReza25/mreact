import React from'react'


export default function ProjectSection() {
  return (
    <>
    {/* project section */}
        <section id="projects" className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <h3 className="text-3xl font-bold text-center mb-10">My Projects</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {/* <!-- Project Card --> */}
        <div className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition">
          <h4 className="text-xl font-semibold mb-2">Project One</h4>
          <p className="text-gray-600 mb-4">A brief description of your project.</p>
          <a href="#" className="text-blue-600 hover:underline">View Demo</a>
        </div>
        {/* <!-- More project cards --> */}
        <div className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition">
          <h4 className="text-xl font-semibold mb-2">Project Two</h4>
          <p className="text-gray-600 mb-4">Another project description.</p>
          <a href="#" className="text-blue-600 hover:underline">View Demo</a>
        </div>
        <div className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition">
          <h4 className="text-xl font-semibold mb-2">Project Three</h4>
          <p className="text-gray-600 mb-4">Yet another cool project.</p>
          <a href="#" className="text-blue-600 hover:underline">View Demo</a>
        </div>
      </div>
    </div>
  </section>

     
    </>
  )
}
