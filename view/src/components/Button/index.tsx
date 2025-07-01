import { ButtonProps } from "../../types/types"

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <div>
      <button onClick={() => onClick()} className="bg-custom-medium-blue text-white font-semibold text-lg px-6 py-2 hover:cursor-pointer hover:shadow-2xl">
        {text}
      </button>
    </div>
  )
}