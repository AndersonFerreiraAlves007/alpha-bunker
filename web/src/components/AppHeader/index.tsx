
import React from 'react'
import { ArrowLeft, UserCircle } from 'phosphor-react';
import { useUser } from '../../providers/UserProvider'
import { Link } from "react-router-dom";

const ProfileHeader = () => {
  const {
    user
  } = useUser()

  const name = user ? user.name : ''

  return (
    <div className="flex flex-col bg-[#337782] w-[360px] h-[207px] rounded-b-3xl items-center">
      <span>{`Bem-vindo, ${name}`}</span>
      <div>
        <Link to={'/profile'}>
          <UserCircle size={32} />
        </Link>
      </div>
    </div>
  );
};

export default ProfileHeader;
