import React from 'react'
import { ArrowLeft, Moon, Sun } from 'phosphor-react';
import { useUser } from '../../providers/UserProvider'
import { Link } from "react-router-dom";
import { useTheme } from '../../providers/ThemeProvider'

const ProfileHeader = () => {
  const {
    user
  } = useUser()
  const { isDarkMode, toggleIsDarkMode } = useTheme()

  const name = user ? user.name : ''

  const src = 'https://avatars3.githubusercontent.com/u/527058?s=460&v=4'
/*   const data = {
    name: 'Tiaguchi ',
    src: 'https://avatars3.githubusercontent.com/u/527058?s=460&v=4',
  }; */
  return (
    <div className="flex flex-col bg-[#337782] w-[360px] h-[207px] rounded-b-3xl items-center">
      <div className="w-full mt-5 ml-2">
        <Link to={'/extract'}>
          <ArrowLeft color='white' size={21}/>
        </Link>
      </div>
      <div className="profile-header__avatar">
        <img src={src} className="w-[80px] h-[80px] rounded-full my-2.5" />
      </div>
      <div className="flex w-full justify-center items">
        <h1 className='' >{name}</h1>
      </div>
      <span>
        { isDarkMode ? <Moon onClick={toggleIsDarkMode}/> : <Sun onClick={toggleIsDarkMode}/> }
      </span>
    </div>
  );
};

export default ProfileHeader;
