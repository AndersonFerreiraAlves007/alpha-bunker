interface AccountProps {
  agencia: string;
  conta: string;
}

const format = (number: string): string => {
  const lastDigit = number.slice(-1);
  return number.slice(0, -1) + '-' + lastDigit;
};

const AccountData: React.FC<AccountProps> = ({ agencia, conta }) => {

  const agency = format(agencia);
  const account = format(conta);

  return (
    <div className="flex flex-col bg-[#F3F9F9] rounded w-[284px] gap-y-[5px] pl-[5px]">
      <p>Agência: {agency}</p>
      <p>Conta: {account}</p>
    </div>
  );
};

export default AccountData;
