import React from 'react';
import Input from '../Input';
import { FormProps } from '../../@types/components';
import { Link } from 'react-router-dom';
import CustomButton from '../Button';

const CustomForm: React.FC<FormProps> = ({
  formInputs,
  onSubmit,
  title,
  linkTitle,
  buttonText,
  routeName,
}) => {
  return (
    <div className={`flex flex-col justify-center gap-3 items-center mt-[57.8px] w-[250px] ${title !== 'Login' && '!mt-[15px]'}`}>
      <h2 className='font-[Inter] w-full font-medium dark:text-white text-center text-xl'>{title}</h2>
      <form className={`flex flex-col justify-center gap-4 w-full mt-[15px] ${title !== 'Login' && '!mt-[5px]'}`}>
        {formInputs.map((input) => (
          <Input key={input.name} {...input} />
        ))}
        <CustomButton
          btnclass="base"
          type="submit"
          handleClick={onSubmit}
          children={buttonText}
        />
      </form>
      <Link to={routeName}>
        <h3 className='dark:text-paragraph-light-100 text-sm'>{linkTitle}</h3>
      </Link>
    </div>
  );
};

export default CustomForm;
