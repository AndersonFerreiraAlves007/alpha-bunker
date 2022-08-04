import React from 'react';
import { InputProps } from '../../@types/components';

export const INPUT_TYPE_CLASSES = {
  base: 'base',
  error: 'error',
}

const base = {
  input: "block p-4 w-full text-sm appearance-none focus:outline-none bg-transparent dark:bg-transparent text-input-text !h-[33px]",
  label: "absolute top-0 text-sm text-brand bg-transparent p-1 -z-1 duration-300 origin-0 text-sm",
  span: "block w-full invisible"
}

const error = {
  input: "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 !h-[33px] bg-transparent rounded-lg border-2\
   appearance-none dark:text-white dark:border-[#FF5959] border-[#E24B2D] dark:focus:border-red-500\
    focus:outline-none focus:ring-0 focus:border-[#FF5959] peer",
  label: "absolute text-sm text-[#FF5959] dark:text-[#FF5959] duration-300 transform:-translate-y-4 transform:scale-75 top-2 z-10 origin-[0] bg-white dark:bg-transparent px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1",
  span: "block w-full text-[#FF5959] !text-[1px]"
}

const getInputClasses = (inputClassName = INPUT_TYPE_CLASSES.base) => ({
  [INPUT_TYPE_CLASSES.base]: base,
  [INPUT_TYPE_CLASSES.error]: error,
}[inputClassName]);

const Input: React.FC<InputProps> = (props) => {
  const { name, type, value, onChange, inputClassName, errorMessage, label, disabled } = props;
  const inputClasses = getInputClasses(inputClassName);
  return (
    <div className="outline relative border-2 focus-within:border-[#338896] rounded-lg px-2.5 pb-2.5 !h-[33px]">
      <input
        className={inputClasses.input}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        disabled={disabled}
      />
      <label htmlFor={name} className={inputClasses.label}>
        {label}
      </label>
      <span className='text-[#FF5959] text-[15px]'>{errorMessage}</span>
    </div>
  );
};

export default Input;
