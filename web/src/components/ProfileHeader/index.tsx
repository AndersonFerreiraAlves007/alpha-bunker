import React from 'react'
import { ArrowLeft, Moon, Sun, SignOut } from 'phosphor-react';
import { useUser } from '../../providers/UserProvider'
import { Link } from "react-router-dom";
import { useTheme } from '../../providers/ThemeProvider'

const ProfileHeader = () => {
  const {
    user
  } = useUser()
  const { isDarkMode, toggleIsDarkMode } = useTheme()

  const handleLogout = () => {
    localStorage.clear()
    window.location.reload()
  }

  const name = user ? user.name : ''

  const src = 'https://avatars3.githubusercontent.com/u/527058?s=460&v=4'
/*   const data = {
    name: 'Tiaguchi ',
    src: 'https://avatars3.githubusercontent.com/u/527058?s=460&v=4',
  }; */
  return (
    <div className="flex flex-col bg-[#337782] w-[360px] h-[207px] rounded-b-3xl items-center absolute top-0">
      <div className="w-full mt-5 px-[15px] justify-between flex">
        <Link to={'/extract'}>
          <ArrowLeft color='white' size={25}/>
        </Link>
        <span>
        { isDarkMode ? <Moon onClick={toggleIsDarkMode}/> : <Sun onClick={toggleIsDarkMode}/> }
      </span>
      </div>
      <div className="profile-header__avatar">
        <img src={src} className="w-[80px] h-[80px] rounded-full my-2.5" />
      </div>
      <div className="flex  flex-col w-full justify-center items-center text-[#F7F7F7] text-[20px] gap-2">
        <h1 className='' >{name}</h1>
        <SignOut color='white' size={20} onClick={handleLogout}/>
      </div>
    </div>
  );
};

export default ProfileHeader;
