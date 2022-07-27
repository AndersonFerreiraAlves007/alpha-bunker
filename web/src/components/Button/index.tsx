import React, { MouseEventHandler } from 'react';

interface PropTypes {
  className?: string;
  category: 'primary' | 'secondary' | 'cancel';
  label: string;
  type?: 'button' | 'submit';
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
  className,
  label,
  type = 'button',
  onClick,
  category,
}: PropTypes) => (
  <button
    className={`h-10 px-3 text-btn-text rounded btn-${category} ${className}`}
    type={type}
    onClick={onClick}
  >
    {label}
  </button>
);
