import { Bank } from 'phosphor-react';
import { ArrowsLeftRight } from 'phosphor-react';
import { DownloadSimple } from 'phosphor-react';
import { UploadSimple } from 'phosphor-react';

const Navbar:React.FC = () => {
  return (
    <nav className="navbar flex gap-x-2.5 w-71">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-blue-400 flex justify-center items-center w-14 h-12 rounded">
          <Bank size={32} color="white" alt="extrato" />
        </div>
        <span>Extrato</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-blue-400 flex justify-center items-center w-14 h-12 rounded">
          <ArrowsLeftRight size={32} color="white" alt="transferência" />
        </div>
        <span>Transferir</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-blue-400 flex justify-center items-center w-14 h-12 rounded">
          <DownloadSimple size={32} color="white" alt="depósito" />
        </div>
        <span>Depositar</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-blue-400 flex justify-center items-center w-14 h-12 rounded">
          <UploadSimple size={32} color="white" alt="saque" />
        </div>
        <span>Sacar</span>
      </div>
    </nav>
  );
};

export default Navbar;
