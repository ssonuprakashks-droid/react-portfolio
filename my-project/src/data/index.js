import {
    Code2,
    Database,
    Layout,
    Server,
    Terminal
} from 'lucide-react';

export const personalInfo = {
    name: "Sonu K.S",
    role: "Software Engineer",
    email: "ssonuprakashks@gmail.com",
    phone: "+91 6366473306",
    location: "Bannur, T.N. Pura Taluk, Mysore District",
    objective: "I am searching for a job as a Software Engineer.",
    linkedin: "#", // Placeholder
    github: "#",   // Placeholder
};

export const education = [
    {
        institution: "Maharaja Institute of Technology Mysore",
        degree: "Bachelor of Engineering (CSE)",
        year: "2026 - Present",
        description: "3rd Year CSE Student",
    },
    {
        institution: "Vivekananda PU College",
        degree: "Pre-University Course (PUC)",
        year: "Completed",
        description: "",
    }
];

export const experience = [
    {
        company: "Maharaja Institute of Technology",
        role: "Student",
        period: "Present",
        description: "Focusing on Computer Science and Engineering curriculum.",
    }
];

export const skills = [
    { name: "Python", icon: Terminal },
    { name: "Java", icon: Server },
    { name: "HTML", icon: Layout },
    { name: "CSS", icon: Layout },
    { name: "DBMS", icon: Database },
    { name: "Data Structures", icon: Code2 },
    { name: "React", icon: Code2 },
];

export const projects = [
    {
        title: "Fake Product Detection",
        description: "Designed and developed a system to detect fake products using AI-based tamper scanning and QR/Barcode verification to determine product authenticity.",
        tags: ["AI", "Python", "Image Processing"],
        link: "#",
        github: "#"
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio website built with React and Tailwind CSS to showcase skills and projects.",
        tags: ["React", "Tailwind CSS"],
        link: "#",
        github: "#"
    }
];

export const certificates = [
    "IBM - Front-End Development in React",
    "Illinois Tech - Cybersecurity and Technology",
    "IBM - AI and Fundamentals"
];
