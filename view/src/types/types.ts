type InputProps = {
  value: string | number;
  setValue: (value: string) => void;
  label: string;
  className?: string;
};

type DatepickerProps = {
  label: string;
  value: Date | null;
  setValue: (date: Date | null) => void;
};

type ButtonProps = {
  text: string;
  onClick: () => void;
  className?: string;
};

export { InputProps, DatepickerProps, ButtonProps }