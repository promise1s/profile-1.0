import React from 'react';

interface NotionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const NotionButton: React.FC<NotionButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`
        h-[32px] px-[12px] py-[6px] 
        text-[14px] font-medium text-notion-text
        bg-transparent border border-notion-border rounded-[4px]
        hover:bg-notion-hover cursor-pointer transition-colors duration-200
        flex items-center justify-center
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};