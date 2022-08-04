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
    <div className="flex flex-col border-[1px] text-[#727272] dark:text-[#A1A1A1] bg-[#F3F9F9] font-medium dark:font-normal dark:bg-transparent text-[13.5px] dark:border-[#424245] rounded w-[275px] gap-y-[5px] p-[5px]">
      <p className="mb-[-8px]">Agência: {agency}</p>
      <p>Conta: {account}</p>
    </div>
  );
};

export default AccountData;
