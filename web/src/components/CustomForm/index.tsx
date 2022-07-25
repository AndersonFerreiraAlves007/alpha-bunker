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
    <div>
      <h2>{title}</h2>
      <form>
        {formInputs.map((input) => (
          <Input key={input.name} {...input} />
        ))}
        <button type="submit" onClick={onSubmit}>
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
