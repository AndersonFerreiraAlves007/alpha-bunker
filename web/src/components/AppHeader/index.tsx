
import React from 'react'
import { ArrowLeft, UserCircle } from 'phosphor-react';
import { useUser } from '../../providers/UserProvider'
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar'

const ProfileHeader = () => {
  const {
    user
  } = useUser()

  const name = user ? user.name : ''

  return (
    <div className="flex flex-col bg-[#337782] w-full h-[207px] rounded-b-3xl items-center absolute top-0">
      <div className='flex mt-[20px] justify-between items-center w-[300px] mb-[28.18px]'>
        <span className='text-xl font-medium text-header-light'>{`Bem-vindo, ${name}`}</span>
        <Link to={'/profile'}>
          <UserCircle size={25} color={'#FFFFFF'}/>
        </Link>
      </div>
      <Navbar />
    </div>
  );
};

export default ProfileHeader;
