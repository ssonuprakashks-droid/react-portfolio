import React from 'react';
import Section from './Section';
import { personalInfo } from '../data';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
    return (
        <Section id="contact" className="py-20 mb-20">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 text-lg">
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">Email</h3>
                            <a href={`mailto:${personalInfo.email}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                                {personalInfo.email}
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">Phone</h3>
                            <a href={`tel:${personalInfo.phone}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                                {personalInfo.phone}
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">Location</h3>
                            <p className="text-gray-600">
                                {personalInfo.location}
                            </p>
                        </div>
                    </div>
                </div>

                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 focus:ring-2 focus:ring-blue-600 outline-none bg-white dark:bg-zinc-800 transition-shadow"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 focus:ring-2 focus:ring-blue-600 outline-none bg-white dark:bg-zinc-800 transition-shadow"
                            placeholder="your@email.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 focus:ring-2 focus:ring-blue-600 outline-none bg-white dark:bg-zinc-800 transition-shadow"
                            placeholder="How can I help you?"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                        Send Message <Send size={20} />
                    </button>
                </form>
            </div>
        </Section>
    );
};

export default Contact;
