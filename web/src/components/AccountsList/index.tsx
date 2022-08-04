import { Vault } from 'phosphor-react';
import { useEffect, useState } from 'react';
import AccountData from '../AccountData';
import { getAccounts, IGetAccountsResponse } from '../../libs/api';
const AccountsList: React.FC = () => {
  const [accounts, setAccounts] = useState<IGetAccountsResponse>([]);
  const getData = async () => {
    const data = await getAccounts({});
    setAccounts(data);
  };

  useEffect(() => {
    getData();
  }, []);

 //const conta = accounts.map((account) => {

  return (
    <div className='flex flex-col bg-white dark:bg-transparent gap-y-[12px] border-[1px] rounded-xl dark:border-[#424245] w-[300px] p-3 mt-[30px]'>
      <div className='flex items-center gap-x-[10px] text-[#C98E26] text-[16px] '>
        <Vault size={20} color="#C98E26" />
        <h2 className='text-[15px]'>Minhas contas correntes</h2>
      </div>
      <div className="flex flex-col gap-y-[25px] text-[#727272]">
        {accounts.map((account) => (
          <AccountData
            key={`${account.account_number}-${account.digit_account_v}`}
            agencia={`${account.agency}${account.digit_agency_v}`}
            conta={`${account.account_number}${account.digit_account_v}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AccountsList;
