import { ButtonTypes } from '../../@types/components';

export const BUTTON_TYPES = {
  base: 'base',
  error: 'error',
};

const baseButton = "text-white bg-[#338896] h-[40px] mt-[10px] hover:bg-[#3FA7B8] focus:outline-none focus:ring-blue-300 rounded-lg text-lg w-full sm:w-auto text-center dark:bg-[#338896] dark:hover:bg-[#3FA7B8] dark:focus:ring-blue-800";

const errorButton = "text-white bg-[#E24B2D] h-[40px] mt-[10px] hover:bg-[#F2664A] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-lg w-full sm:w-auto text-center dark:bg-[#E24B2D] dark:hover:bg-[#3FA7B8] dark:focus:ring-blue-800";

const getButtonClass = (btnclass = BUTTON_TYPES.base) => ({
  [BUTTON_TYPES.base]: baseButton,
  [BUTTON_TYPES.error]: errorButton,
}[btnclass]);

const CustomButton: React.FC<ButtonTypes> = (props) => {
  const { children, btnclass, handleClick, type } = props;
  const buttonClass = getButtonClass(btnclass);
  return (
    <button
      className={buttonClass}
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
/* import React, { MouseEventHandler } from 'react';

interface PropTypes {
  className?: string;
  category: 'primary' | 'secondary' | 'cancel';
  label: string;
  type?: 'button' | 'submit';
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
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

export default Button */
