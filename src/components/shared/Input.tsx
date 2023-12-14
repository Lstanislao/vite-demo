import React from 'react';

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  labelClassName?: string;
  children?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  search?: boolean;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function _Input(
    {
      label = '',
      children,
      rightIcon,
      leftIcon,
      className = '',
      labelClassName = '',
      onChange,
      search,
      error,
      ...props
    },
    ref
  ) {
    return (
      <label
        className={`${
          search ? 'block' : 'relative w-full flex flex-col min-h-[50px]'
        } ${labelClassName}`}
      >
        <div className={`w-full flex items-center py-2 gap-4 ${className}`}>
          {children}
          <div className="relative w-full">
            {label !== '' ? (
              <span className="absolute left-[6px] sm:left-2 truncate whitespace-nowrap px-1 text-text-lightGray text-xs bg-background-100">
                {label}
              </span>
            ) : null}
            <div className="flex flex-row items-center gap-2 focus:border-background-500 border-[0.5px] px-3 py-2 sm:px-[14px] sm:py-3 border-neutral-500 rounded-lg">
              {leftIcon}
              <input
                className={`${
                  search ? 'md:min-w-[300px] w-full' : 'w-full'
                } border-0 p-0 focus:ring-0 text-text-dark text-sm sm:text-base bg-transparent outline-none focus:outline-none focus:shadow-none text-text-dark placeholder:text-text-lightGray tracking-wider placeholder:text-xs placeholder:sm:text-sm ${className}`}
                ref={ref}
                onChange={onChange}
                {...props}
              />
              {rightIcon}
            </div>
          </div>
        </div>
        {error ? <p className="text-xs text-danger-300 mb-3">{error}</p> : null}
      </label>
    );
  }
);
