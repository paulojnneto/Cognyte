import { InputProps } from "../../types/types"

export const Input = ({ value, setValue, label, className }: InputProps) => {
  return (
    <div className="w-1/2">
      <label className="block mb-2 text-2xl font-medium text-custom-dark-blue" >{label}</label>
      <input value={value} onChange={(e) => setValue(e.target.value)} className={`border focus:outline border-custom-dark-blue rounded block w-full p-2.5 ${className}`} required />
    </div>
  )
}