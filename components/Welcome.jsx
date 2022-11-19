import Image from 'next/image'
import React from 'react'
import Circle from '../assets/circle.png'
import ConnectToPhantom from '../components/ConnectToPhantom'
const Welcome = () => {
    return (
        <div className='flex flex-row text-white w-screen px-20 py-3  mt-5 justify-between '>
            <div className='flex flex-col md:w-1/2 w-full'>
                <h1 className='text-2xl py-1 text-center'>
                    Welcome to Sol circle
                </h1>
                <p className='text-lg px-2 py-5'>
                    Sol Circle is a platform for the folks who like betting with the friends and family. It will help them to give XP to each other and also to get XP from each other. It will help them to get the rewards from the platform.
                </p>
                <div className='flex justify-center'>
                    {/* <button className='bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-2 rounded-full'>

                        Connect Wallet
                    </button> */}
                    <ConnectToPhantom />
                    <button>
                        Login
                    </button>
                </div>

            </div>
            <div>
                <Image
                    src={Circle}
                    alt='circle'
                    width={200}
                    height={200}
                />
            </div>
        </div>
    )
}

export default Welcome