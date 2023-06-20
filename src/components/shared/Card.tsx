import React from 'react';

interface CardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
}

export default function Card({
  children,
  className = '',
  ...props
}: CardProps) {
  return (
    <div
      className={`relative flex flex-col min-w-0 bg-white bg-clip-border shadow-[0_4px_10px_rgba(0,0,0,0.10)] rounded-lg ${className}`}
      style={{
        wordWrap: 'break-word',
        ...(props.style ?? {}),
      }}
      {...props}
    >
      {children}
    </div>
  );
}
