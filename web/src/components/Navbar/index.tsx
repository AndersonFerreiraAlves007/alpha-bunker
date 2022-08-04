import { Bank } from 'phosphor-react';
import { ArrowsLeftRight } from 'phosphor-react';
import { DownloadSimple } from 'phosphor-react';
import { UploadSimple } from 'phosphor-react';
import { Link } from "react-router-dom";

const Navbar:React.FC = () => {
  return (
    <nav className="navbar flex gap-x-2.5 w-71">
      <div className="flex flex-col justify-center items-center">
        <Link to={'/extract'}>
          <div className="bg-[#75ACB1] flex justify-center items-center w-14 h-12 rounded">
            <Bank size={32} color="white" alt="extrato" />
          </div>
        </Link>
        <span className='text-[13px] text-[#FFFFFF] mt-[2px]'>Extrato</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Link to={'/make-transfer'}>
          <div className="bg-[#75ACB1] flex justify-center items-center w-14 h-12 rounded">
            <ArrowsLeftRight size={32} color="white" alt="transferência" />
          </div>
        </Link>
        <span className='text-[13px] text-[#FFFFFF] mt-[2px]'>Transferir</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Link to={'/make-deposit'}>
          <div className="bg-[#75ACB1] flex justify-center items-center w-14 h-12 rounded">
            <DownloadSimple size={32} color="white" alt="depósito" />
          </div>
        </Link>
        <span className='text-[13px] text-[#FFFFFF] mt-[2px]'>Depositar</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Link to={'/make-withdraw'}>
          <div className="bg-[#75ACB1] flex justify-center items-center w-14 h-12 rounded">
            <UploadSimple size={32} color="white" alt="saque" />
          </div>
        </Link>
        <span className='text-[13px] text-[#FFFFFF] mt-[2px]'>Sacar</span>
      </div>
    </nav>
  );
};

export default Navbar;
