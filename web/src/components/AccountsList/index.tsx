import { Vault } from 'phosphor-react';
import AccountData from '../AccountData';

const AccountsList: React.FC = () => {
  const accounts = [
    {
      agencia: '12569',
      conta: '741852',
    },
    {
      agencia: '78956',
      conta: '412369',
    },
  ];

  return (
    <div className='flex flex-col bg-white dark:bg-transparent gap-y-[12px] border-[1px] rounded-xl dark:border-[#424245] w-[300px] p-3 mt-[30px]'>
      <div className='flex items-center gap-x-[10px] text-[#C98E26] text-[16px] '>
        <Vault size={20} color="#C98E26" />
        <h2 className='text-[15px]'>Minhas contas correntes</h2>
      </div>
      <div className='flex flex-col gap-y-[25px] text-[#727272]'>
        {accounts.map((account) => (
          <AccountData
            key={account.conta}
            agencia={account.agencia}
            conta={account.conta}
          />
        ))}
      </div>
    </div>
  );
};

export default AccountsList;
