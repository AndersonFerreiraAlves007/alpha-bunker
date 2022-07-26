import { ButtonTypes } from '../../@types/components';

export const BUTTON_TYPES = {
  base: 'base',
  error: 'error',
};

const baseButton = "text-white bg-[#338896] hover:bg-[#3FA7B8] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#3FA7B8] dark:focus:ring-blue-800";

const errorButton = "text-white bg-[#E24B2D] hover:bg-[#F2664A] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#3FA7B8] dark:focus:ring-blue-800";

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
