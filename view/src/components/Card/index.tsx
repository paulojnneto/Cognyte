import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {children}
    </div>
  )
}