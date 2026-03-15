import React from 'react';

interface NotionCardProps {
  children: React.ReactNode;
  className?: string;
}

export const NotionCard: React.FC<NotionCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`
      border border-notion-border rounded-[6px] p-[24px]
      bg-white
      ${className}
    `}>
      {children}
    </div>
  );
};