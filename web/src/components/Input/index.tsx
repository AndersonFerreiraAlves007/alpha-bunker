import React from 'react';
import { InputProps } from '../../@types/components';

const Input: React.FC<InputProps> = (props) => {
  const { name, type, value, onChange, placeholder } = props;

  return (
    <div>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;

/*
"border-box m-0 border-1 border-slate-300 rounded w-full transition: border 0.2s box-shadow 0.2s pt-3 px-3 pb-2 before: mr-1 border-l-1-transparent "
*/
