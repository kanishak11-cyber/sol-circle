import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { GrAddCircle } from 'react-icons/gr'
import { IoMdAddCircle } from 'react-icons/io'
import Link from 'next/link'
const Onboard = () => {
    return (
        <div className='text-white px-7 py-2 '>
            <Navbar />
            <div className='text-center text-5xl uppercase revamp py-5'>
                <h1>Its time to have fun</h1>
            </div>

            <div className='flex flex-row justify-between h-[53vh] '>
                <div className='items-center text-center align-middle w-full md:w-1/2 border shadow-2xl shadow-pink-500 rounded-xl m-2'>
                    <h1 className='text-[50px] text-white'>
                        Create Team
                    </h1>
                    <Link href='../CreateTeam'>
                        <h1 className='text-center items-center flex flex-row justify-center text-4xl cursor-pointer'>
                            <IoMdAddCircle />
                        </h1>
                    </Link>


                    add team
                </div>
                <div className='items-center text-center w-full flex flex-col md:w-1/2 border shadow-2xl shadow-pink-500 rounded-xl m-2'>
                    <h1 className='text-[50px]'>Join Team</h1>
                    <input type='text' placeholder='Team code' className='bg-transparent border px-2 py-1 rounded-xl' /><GrAddCircle className='text-white' />
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Onboard