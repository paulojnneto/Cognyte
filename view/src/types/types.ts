type InputProps = {
  value: string;
  setValue: (value: string) => void;
  label: string;
};

type DatepickerProps = {
  label: string;
  value: Date | null;
  setValue: (date: Date | null) => void;
};

export { InputProps, DatepickerProps }