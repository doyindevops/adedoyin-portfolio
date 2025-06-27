
import React from 'react';
import projects from '../data/projects.json';

const Projects = () => {
  return (
    <section className="py-12 px-4 bg-gray-100 text-gray-900" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">🚀 Featured Projects</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-3">{project.description}</p>
              <p className="text-sm text-gray-600 mb-2">Tech: {project.tech.join(', ')}</p>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                🔗 View Repository
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
