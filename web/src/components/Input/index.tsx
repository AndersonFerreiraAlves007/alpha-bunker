import React from 'react';
import { InputProps } from '../../@types/components';

export const INPUT_TYPE_CLASSES = {
  base: 'base',
  error: 'error',
}

const base = {
  input: "block px-2.5 pb-2.5 pt-4 w-full text-sm text-[#353535]  bg-transparent rounded-lg border-2\
  border-[#d2d2d2] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#3FA7B8] focus:outline-none focus:ring-0 focus:border-[#3FA7B8] peer",
  label: "absolute text-sm text-[#353535] dark:text-gray-400 duration-300 transform:-translate-y-4 transform:scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#338896] peer-focus:dark:text-[353535] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1",
  span: "block w-full invisible"
}

const error = {
  input: "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2\
   appearance-none dark:text-white dark:border-[#FF5959] border-[#E24B2D] dark:focus:border-red-500\
    focus:outline-none focus:ring-0 focus:border-[#FF5959] peer",
  label: "absolute text-sm text-[#FF5959] dark:text-[#FF5959] duration-300 transform:-translate-y-4 transform:scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1",
  span: "block w-full invisible text-[#FF5959]"
}

const getInputClasses = (inputClassName = INPUT_TYPE_CLASSES.base) => ({
  [INPUT_TYPE_CLASSES.base]: base,
  [INPUT_TYPE_CLASSES.error]: error,
}[inputClassName]);

const Input: React.FC<InputProps> = (props) => {
  const { name, type, value, onChange, inputClassName, errorMessage } = props;
  const inputClasses = getInputClasses(inputClassName);
  return (
    <div className="relative">
      <input
        className={inputClasses.input}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder=""
      />
      <label htmlFor={name} className={inputClasses.label}>
        {name}
      </label>
      <span>{errorMessage}</span>
    </div>
  );
};

export default Input;
