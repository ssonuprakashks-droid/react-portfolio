import React from 'react';
import Section from './Section';
import { projects } from '../data';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    return (
        <Section id="projects" className="bg-gray-50 dark:bg-zinc-800/50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Here are some of the projects I've worked on, showcasing my skills in AI, Web Development, and Software Engineering.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-zinc-800"
                    >
                        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <a
                                href={project.github}
                                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                            >
                                <Github size={20} /> Code
                            </a>
                            <a
                                href={project.link}
                                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                            >
                                <ExternalLink size={20} /> Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
