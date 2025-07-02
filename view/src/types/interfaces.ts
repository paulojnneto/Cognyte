import { ReactNode } from "react";

interface Event {
  id: number;
  name: string;
  date: string;
}

interface CardProps {
  style?: string;
  children: ReactNode;
}

interface ModalProps {
  isOpen: boolean;
  title?: string;
  confirmHandler: () => void;
  cancelHandler: () => void;
}

export { Event, CardProps, ModalProps }