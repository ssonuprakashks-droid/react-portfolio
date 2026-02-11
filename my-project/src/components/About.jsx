import React from 'react';
import Section from './Section';
import { skills } from '../data';

const About = () => {
    return (
        <Section id="about" className="bg-gray-50 dark:bg-zinc-800/50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-6">About Me</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        I am a passionate 3rd-year Computer Science and Engineering student at Maharaja Institute of Technology, Mysore.
                        I have a strong foundation in programming languages like Python and Java, and I am keen on exploring new technologies.
                        My goal is to leverage my skills in software engineering to solve real-world problems.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-semibold mb-2">Education</h3>
                            <p className="text-sm text-gray-500">B.E. in CSE (2026 - Present)</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Location</h3>
                            <p className="text-sm text-gray-500">Mysore, India</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="p-4 bg-white dark:bg-zinc-800 rounded-xl border border-gray-100 dark:border-zinc-700 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-2 text-center"
                            >
                                <skill.icon className="w-8 h-8 text-blue-600" />
                                <span className="font-medium text-sm">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
