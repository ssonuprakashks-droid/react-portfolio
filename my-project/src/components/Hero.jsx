import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import Section from './Section';
import { personalInfo } from '../data';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <Section id="home" className="min-h-screen flex items-center pt-16">
            <div className="max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-blue-600 font-semibold tracking-wider uppercase mb-4 block">
                        Welcome to my portfolio
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{personalInfo.name}</span>
                    </h1>
                    <h2 className="text-3xl md:text-5xl text-gray-500 mb-8 font-medium">
                        {personalInfo.role}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl">
                        {personalInfo.objective} Based in {personalInfo.location}.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors gap-2"
                        >
                            Contact Me <ArrowRight size={20} />
                        </a>
                        <a
                            href="#projects"
                            className="inline-flex items-center px-8 py-3 border border-gray-300 dark:border-zinc-700 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                        >
                            View Work
                        </a>
                    </div>

                    <div className="mt-12 flex gap-6 text-gray-400">
                        <a href={personalInfo.github} className="hover:text-blue-600 transition-colors">
                            <Github size={24} />
                        </a>
                        <a href={personalInfo.linkedin} className="hover:text-blue-600 transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600 transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Hero;
