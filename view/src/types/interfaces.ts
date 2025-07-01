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

export { Event, CardProps }