import type { ReactNode } from 'react';

interface CardProps {
  style?: string;
  children: ReactNode;
}

export const Card = ({ children, style = '' }: CardProps) => {
  return (
    <div className={`w-full h-full bg-white rounded-lg shadow-md p-4 ${style}`}>
      {children}
    </div>
  )
}