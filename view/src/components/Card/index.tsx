import { CardProps } from '../../types/interfaces';

export const Card = ({ children, style = '' }: CardProps) => {
  return (
    <div className={`w-full h-full bg-white shadow-md p-4 ${style}`}>
      {children}
    </div>
  )
}