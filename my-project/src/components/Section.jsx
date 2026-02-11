import React from 'react';
import { twMerge } from 'tailwind-merge';

const Section = ({ id, className, children }) => {
    return (
        <section id={id} className={twMerge('py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto', className)}>
            {children}
        </section>
    );
};

export default Section;
