import { log } from 'console'
import Link from 'next/link'
import {useRouter, usePathname } from 'next/navigation'
import React from 'react'
import {BsSearchHeart} from 'react-icons/bs'
import {RiHeartAddFill} from 'react-icons/ri'
import {PiDotsThreeOutlineVerticalLight} from 'react-icons/pi'
import {BsPersonHeart} from 'react-icons/bs'
import {CiLogout} from 'react-icons/ci'




export default function Header() {

    const router = useRouter()
    const pathname = usePathname()

    const handleSeacrhName =(event: {target: {value: string}})=>{
        console.log(event.target.value);
        
    }

    const goto =()=>{
        console.log('here');
        
    }

  return (
    <>
    <div id='header' className='fixed bg-black z-30 flex items-center w-full border-b h-[60px]'>
        <div className={`flex items-center justify-between gap-6 w-full px-4 mx-auto ${pathname==='/' ? 'max-w-[1150px]' :''}`}>
            <Link href='/'>
                <h1 className='text-white'>tt</h1>
{/* <img src="https://assets.stickpng.com/images/627bb7ba2bc3a3762a1d0b95.png"  alt="img"  />                             */}
            </Link>

            <div className='relative hidden md:flex items-center justify-end bg-white p-1 rounded-full max-w-[430px] w-full'>
                <input type="text" onChange={handleSeacrhName} placeholder='search'
                className='w-full pl-3 my-3 bg-transparent placeholder-[#838383] text-[15px] focus-outline-none'
                />

                <div className='absolute bg-white max-w-[910px] h-auto w-full z-2- left-0 top-12 border p-1'>

                    <div className='p-1'>
                        <Link href={`/profile/1`} className='flex items-center justify-between w-full cursor-pointer hover:bg-fuchsia-300 p-1 px-2 hover:text-white '>
                        
                        <div className='flex items-center'>
                            <img className='rounded-md' width='40px' src="https://placehold.co/40" alt=""  />
                            <div className='truncate ml-2'> weyxou</div>   
                        </div>
                        </Link>
                    </div>
                </div>

                <div className='px-3 py-1 flex items-center border-1 border-l-gray-300'>
                    <BsSearchHeart/>
                </div>
            </div>

            <div className='flex items-center gap-3'>
                <button onClick={()=>goto()}
                className='flex items-center border rounded-sm py-[6px] hover:bg-gray-100 pl-1.5'>
                    <RiHeartAddFill/>
                    <span className='px-2 font-medium text-[15px]'>add</span>
                </button>

            {  true ? (
                <div className='flex items-center'>
                    <button className='flex items-center bg-fuchsia-300 border rounded-md px-3 py-[6px]'>
                        <span>Login</span>
                    </button>
                        <PiDotsThreeOutlineVerticalLight/>
                </div>
            ) : (
                <div className='flex items-center'>
                    <div className='relative'>
                        <button className='mt-1 border border-gray-200 rounded-full'>
                            <img className='rounded-full w-[35px] h-[35px]' src="https://placehold.co/35" alt="" />
                        </button>

                        <div className='absolute bg-white rounded-lg py-1.5 w-[200px] shadow-xl top-[40px] right-0 '>
                            <button className='flex items-center w-full justify-start py-3 px-2 hover:bg-gray-100 cursor-pointer'>
                                <BsPersonHeart/>
                                <span className='pl-2 font-semibold text-sm'>Profile</span>
                            </button>
                            <button className='flex items-center w-full justify-start py-3 px-2 hover:bg-gray-100 cursor-pointer'>
                                <CiLogout/>
                                <span className='pl-2 font-semibold text-sm'>Log out</span>
                            </button>
                        </div>
                    </div>
                </div>

            )}
            </div>
        </div>
    </div>
    </>
  )
}
