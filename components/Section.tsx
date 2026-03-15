import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="mb-12">
      <h2 className="text-[30px] font-semibold text-notion-text border-b border-notion-border pb-2 mb-6 leading-[1.3]">
        {title}
      </h2>
      <div className="text-[16px] leading-[1.5]">
        {children}
      </div>
    </section>
  );
};