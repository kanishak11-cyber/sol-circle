import React from 'react'
import Image from 'next/image'
import logo from '../assets/solcircle.png'
const Navbar = () => {
  return (
    <div className='flex flex-row w-full justify-center text-5xl py-2 md:px-20 px-3'>
        <Image
            src={logo}
            alt='sol-circle'
            width={100}
            height={20}
        />
        <h1 className='text-center px-20 py-5 revamp text-white  '>
            Sol circle
        </h1>
    </div>
  )
}

export default Navbar