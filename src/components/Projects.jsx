import React from 'react';

const projects = [
  {
    title: 'Farmart',
    description: 'An e-commerce platform for farm animals. Built with React, Django, and PostgreSQL. Features include buyer/farmer dashboards, M-Pesa integration, authentication, and cart system.',
    tech: ['React', 'Django', 'PostgreSQL', 'Firebase', 'M-Pesa'],
    link: 'https://farmart-iota.vercel.app/',
  },
  {
    title: 'Beauty Shop',
    description: 'A modern beauty products shop with admin management, Google login, M-Pesa payment, and responsive design.',
    tech: ['React', 'Tailwind CSS', 'Firebase', 'Django REST', 'M-Pesa'],
    link: 'https://github.com/elvis24-tech/beauty-shop',
  },
  {
    title: 'Hope Connect',
    description: 'A community-based platform connecting volunteers and donors to those in need. Real-time requests, donor dashboard, and SMS notifications.',
    tech: ['React', 'Django', 'SQLite', 'Tailwind CSS'],
    link: 'https://hope-connect-two.vercel.app/',
  },
  {
    title: 'Pocket Pantry',
    description: 'A smart pantry tracker app that helps users manage groceries, track expiry dates, and generate smart shopping lists.',
    tech: ['Flask', 'Python', 'SQLite', 'Tailwind CSS'],
    link: 'https://nakara4.github.io/POCKET-PANTRY2/',
  },
];

const cardColors = [
  {
    bg: 'bg-blue-100',
    border: 'border-blue-800',
    text: 'text-blue-800',
    tagBg: 'bg-blue-100',
    tagText: 'text-blue-800',
    link: 'text-blue-600',
  },
  {
    bg: 'bg-pink-100',
    border: 'border-pink-800',
    text: 'text-pink-800',
    tagBg: 'bg-pink-100',
    tagText: 'text-pink-800',
    link: 'text-pink-600',
  },
  {
    bg: 'bg-green-100',
    border: 'border-green-800',
    text: 'text-green-800',
    tagBg: 'bg-green-100',
    tagText: 'text-green-800',
    link: 'text-green-600',
  },
  {
    bg: 'bg-yellow-100',
    border: 'border-yellow-800',
    text: 'text-yellow-800',
    tagBg: 'bg-yellow-100',
    tagText: 'text-yellow-800',
    link: 'text-yellow-600',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-24 px-6">
      <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-12">My Projects</h2>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project, idx) => {
          const colors = cardColors[idx % cardColors.length];
          return (
            <div
              key={idx}
              className={`${colors.bg} border ${colors.border} rounded-2xl shadow-sm hover:shadow-xl transition-all p-6 flex flex-col justify-between`}
            >
              <div>
                <h3 className={`text-2xl font-bold mb-2 ${colors.text}`}>{project.title}</h3>
                <p className="text-gray-700 text-base">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-sm ${colors.tagBg} ${colors.tagText} px-3 py-1 rounded-full font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 font-medium hover:underline ${colors.link}`}
              >
                View Project →
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
