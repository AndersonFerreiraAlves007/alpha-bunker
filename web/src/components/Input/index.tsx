import React from 'react';
import { InputProps } from '../../@types/components';

const Input: React.FC<InputProps> = (props) => {
  const { name, type, value, onChange } = props;

  return (
    <div>
      <label className='bg-slate-200' htmlFor={name}>{name}</label>
      <input name={name} type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
