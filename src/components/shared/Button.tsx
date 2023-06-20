import React from 'react';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={`py-2 px-4 rounded hover:opacity-80 font-semibold tracking-wide  ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
