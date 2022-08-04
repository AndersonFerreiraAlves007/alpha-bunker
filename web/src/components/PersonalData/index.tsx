import { IdentificationCard } from 'phosphor-react';
import { PersonalDataTypes } from '../../@types/components';
import { useUser } from '../../providers/UserProvider'

const PersonalData: React.FC = () => {
  const { user } = useUser()

  const name = user ? user.name : ''
  const cpf = user ? user.cpf : ''
  const birthdate = user ? user.birthDate : ''

  return (
    <div className="flex justify-start items-center mt-[200px] bg-white dark:bg-transparent p-3 border-[1px] rounded-xl dark:border-[#424245] w-[300px] flex-col">
      <div className="flex w-full items-center text-[#C98E26] rounded mb-[20px]">
        <IdentificationCard size={20} color="#c98e26" alt="dados pessoais" />
        <h2 className='ml-[5px] text-[15px]'>Meus dados</h2>
      </div>
      <div className='w-full  text-[#727272] dark:text-[#A1A1A1] dark:p-0 dark:bg-transparent bg-[#F3F9F9] p-2 dark:font-normal font-medium text-[13.5px]'>
        <p>Nome: {name}</p>
        <p className='my-[-5px]'>Data de Nascimento: {birthdate}</p>
        <p>CPF: {cpf}</p>
      </div>
    </div>
  );
};

export default PersonalData;
