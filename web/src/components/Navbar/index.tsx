import {Bank } from 'phosphor-react'
import { ArrowsLeftRight} from 'phosphor-react';
import { DownloadSimple} from 'phosphor-react';
import { UploadSimple} from 'phosphor-react';

const Navbar = () => {
  return (
    <nav className="navbar flex">
      <div className="bg-blue-400">
        <Bank alt="extrato" />
      </div>
      <div className="bg-blue-400">
        <ArrowsLeftRight alt="transferência" />
      </div>
      <div className="bg-blue-400">
        <DownloadSimple alt="depósito" />
      </div>
      <div className="bg-blue-400">
        <UploadSimple alt="saque" />
      </div>
    </nav>
  );
};

export default Navbar;
