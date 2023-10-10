import { log } from 'console'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { BsSearchHeart } from 'react-icons/bs'
import { RiHeartAddFill } from 'react-icons/ri'
import { PiDotsThreeOutlineVerticalLight } from 'react-icons/pi'
import { BsPersonHeart } from 'react-icons/bs'
import { CiLogout } from 'react-icons/ci'
import LoginModal from '@/app/components/LoginModal'

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const handleSeacrhName = (event: { target: { value: string } }) => {
    console.log(event.target.value)
  }

  const goto = () => {
    console.log('here')
  }

  const openLoginModal = () => {
    setIsLoginModalOpen(true)
  }

  const closeLoginModal = () => {
    setIsLoginModalOpen(false)
  }

  return (
    <>
      <div
        id='header'
        className='fixed bg-[#0f0d2c] z-30 flex items-center w-full border-b h-[60px]'>
        <div
          className={`flex items-center justify-between gap-6 w-full px-4 mx-auto ${
            pathname === '/' ? 'max-w-[1150px]' : ''
          }`}>
          <Link href='/'>
            <h1 className='text-white'>tt</h1>
          </Link>

          <div className='relative hidden md:flex items-center justify-end bg-white p-1 rounded-full max-w-[430px] w-full'>
            <input
              type='text'
              onChange={handleSeacrhName}
              placeholder='search'
              className='w-full pl-3 my-3 bg-transparent placeholder-[#838383] text-[15px] focus-outline-none'
            />

            <div className='absolute bg-white max-w-[910px] h-auto w-full z-2- left-0 top-12 border p-1'>
              <div className='p-1'>
                <Link
                  href={`/profile/1`}
                  className='flex items-center justify-between w-full cursor-pointer hover:bg-[#0f0d2c] p-1 px-2 hover:text-white '>
                  <div className='flex items-center'>
                    <img
                      className='rounded-md'
                      width='40px'
                      src='https://placehold.co/40'
                      alt=''
                    />
                    <div className='truncate ml-2'> weyxou</div>
                  </div>
                </Link>
              </div>
            </div>

            <div className='px-3 py-1 flex items-center border-1 border-l-gray-300'>
              <BsSearchHeart />
            </div>
          </div>

          <div className='flex items-center gap-3'>
            <button
              onClick={() => goto()}
              className='flex items-center border rounded-sm py-[6px] pl-1.5'>
              <RiHeartAddFill color='white' />
              <span className='px-2 font-medium text-[15px] text-white'>add</span>
            </button>

            {true ? (
              <div className='flex items-center'>
                <button
                  className='flex items-center bg-[#0f0d2c] border rounded-md px-3 py-[6px]'
                  onClick={openLoginModal}>
                  <span className='text-white'>Login</span>
                </button>
                <PiDotsThreeOutlineVerticalLight color='white' />
              </div>
            ) : (
              <div className='flex items-center'>
                <div className='relative'>
                  <button className='mt-1 border border-gray-200 rounded-full'>
                    <img
                      className='rounded-full w-[35px] h-[35px]'
                      src='https://placehold.co/35'
                      alt=''
                    />
                  </button>

                  <div className='absolute bg-white rounded-lg py-1.5 w-[200px] shadow-xl top-[40px] right-0 '>
                    <button className='flex items-center w-full justify-start py-3 px-2 hover:bg-gray-100 cursor-pointer'>
                      <BsPersonHeart />
                      <span className='pl-2 font-semibold text-sm '>Profile</span>
                    </button>
                    <button className='flex items-center w-full justify-start py-3 px-2 hover:bg-gray-100 cursor-pointer'>
                      <CiLogout />
                      <span className='pl-2 font-semibold text-sm '>Log out</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />{' '}
      {/* Render the LoginModal */}
    </>
  )
}
