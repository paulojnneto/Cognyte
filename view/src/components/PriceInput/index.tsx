import { InputProps } from "../../types/types"

export const PriceInput = ({ value, setValue, label }: InputProps) => {
  const formattedDisplayValue = value
    ? new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(value))
    : "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Removes whats not a number and divides by 100 to get the
    const numericString = e.target.value.replace(/\D/g, "");
    const numericValue = parseFloat(numericString) / 100;

    if (isNaN(numericValue)) {
      setValue("");
      return;
    }

    // Cleans the value
    setValue(numericValue.toString());
  };

  return (
    <div className="w-[200px]">
      <label className="block mb-2 text-2xl font-medium text-custom-dark-blue">
        {label}
      </label>
      <input
        type="text"
        inputMode="numeric"
        value={formattedDisplayValue}
        onChange={handleChange}
        className="border focus:outline border-custom-dark-blue block w-full p-2.5"
        required
      />
    </div>
  );
}