import React from 'react'
import logo from '../../assets/logo.svg'

export function HomeHeader() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img src={logo} alt="logo" width={'91.53px'} />
      <h3 className='text-brand-hover text-xl font-medium mt-[15px]'>Alpha Bunker</h3>
    </div>
  ) 
}
