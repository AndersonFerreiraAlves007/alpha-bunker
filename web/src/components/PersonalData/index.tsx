import { IdentificationCard } from 'phosphor-react';
import { PersonalDataTypes } from '../../@types/components';

const PersonalData: React.FC<PersonalDataTypes> = ({
  name,
  birthdate,
  cpf,
}) => {
  return (
    <div className="flex justify-start items-center">
      <div className="bg-blue-400 flex justify-center items-center w-14 h-12 rounded">
        <IdentificationCard size={16} color="#c98e26" alt="dados pessoais" />
        <h2>Meus Dados</h2>
      </div>
      <div>
        <p>Nome: {name}</p>
        <p>Data de Nascimento: [{birthdate}]</p>
        <p>CPF: {cpf}</p>
      </div>
    </div>
  );
};

export default PersonalData;
