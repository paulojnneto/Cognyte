export const Input = ({ value, setValue, label }) => {
  return (
    <div>
      <label className="block mb-2 text-2xl font-medium text-custom-dark-blue" >{label}</label>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="border focus:outline border-custom-dark-blue rounded block w-full p-2.5" placeholder="World cup" required />
    </div>
  )
}