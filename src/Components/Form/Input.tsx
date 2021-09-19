import { InputHTMLAttributes } from "react";

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const Input = ({ name, ...props }: inputProps) => {
  return <input name={name} {...props} />;
};
