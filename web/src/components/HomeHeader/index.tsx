import React from 'react'
import logo from '../../assets/logo.svg'

export function HomeHeader() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img src={logo} alt="logo" />
      <h3>Alpha Bunker</h3>
    </div>
  )
}
