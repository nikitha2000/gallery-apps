import React from "react";
import "./Button.css";

interface ButtonProps 
{ label: React.ReactNode; 
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; 
  className?: string; 
}

const Button = ({ label, onClick, className }:ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default Button;
