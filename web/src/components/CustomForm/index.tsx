import React from 'react';
import Input from '../Input';
import { FormProps } from '../../@types/components';
import { Link } from 'react-router-dom';

const CustomForm: React.FC<FormProps> = ({
  formInputs,
  onSubmit,
  title,
  linkTitle,
  buttonText,
  routeName,
}) => {
  return (
    <div className='flex-col justify-center'>
      <h2>{title}</h2>
      <form className='flex-col'>
        {formInputs.map((input) => (
          <Input key={input.name} {...input} />
        ))}
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit" onClick={onSubmit}>
          {buttonText}
        </button>
      </form>
      {/* <Link to={routeName}>
        <h3>{linkTitle}</h3>
      </Link> */}
    </div>
  );
};

export default CustomForm;
