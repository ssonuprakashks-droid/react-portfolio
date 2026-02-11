import React from 'react';
import Section from './Section';
import { experience, education, certificates } from '../data';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const Experience = () => {
    return (
        <Section id="experience">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Experience */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <Briefcase className="w-6 h-6 text-blue-600" />
                        <h2 className="text-3xl font-bold">Experience</h2>
                    </div>
                    <div className="space-y-8">
                        {experience.map((exp, index) => (
                            <div key={index} className="relative pl-8 border-l-2 border-gray-200 dark:border-zinc-700">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white dark:ring-zinc-900" />
                                <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                                <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                                <span className="text-sm text-gray-500 mb-4 block">{exp.period}</span>
                                <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education & Certificates */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <GraduationCap className="w-6 h-6 text-blue-600" />
                        <h2 className="text-3xl font-bold">Education</h2>
                    </div>
                    <div className="space-y-8 mb-12">
                        {education.map((edu, index) => (
                            <div key={index} className="relative pl-8 border-l-2 border-gray-200 dark:border-zinc-700">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-white dark:ring-zinc-900" />
                                <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                                <p className="text-indigo-600 font-medium mb-2">{edu.institution}</p>
                                <span className="text-sm text-gray-500 mb-2 block">{edu.year}</span>
                                <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                        <Award className="w-6 h-6 text-blue-600" />
                        <h2 className="text-2xl font-bold">Certifications</h2>
                    </div>
                    <ul className="space-y-3">
                        {certificates.map((cert, index) => (
                            <li key={index} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                <span className="w-2 h-2 rounded-full bg-green-500" />
                                {cert}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
};

export default Experience;
