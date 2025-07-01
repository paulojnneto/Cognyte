import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css';

type DatepickerProps = {
  label: string;
  value: Date | null;
  setValue: (date: Date | null) => void;
};

export const Datepicker = ({ label, value, setValue }: DatepickerProps) => {
  return (
    <div className="my-4">
      <label className="block mb-2 text-2xl font-medium text-custom-dark-blue" >{label}</label>
      <div className="relative z-999]">
        <DatePicker
          selected={value}
          onChange={(date) => setValue(date)}
          showTimeSelect
          dateFormat="MM/dd/yyyy hh:mm aa"
          className="border border-custom-dark-blue focus:outline rounded p-2.5"
        />
      </div>
    </div>
  )
}