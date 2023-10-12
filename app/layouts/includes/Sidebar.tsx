import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Menuitem from './Menuitem'
import MenuitemFollow from './MenuitemFollow'
import Client from '../../components/Client'

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <>
    <div id='sidebar' className={`fixed left-0 z-20 bg-[#0f0d2c] pt-[70px] h-full lg:border-l-0 border-l w-[75px] overflow-auto ${pathname === '/' ? 'lg:w-[310px]' : 'lg:w-[220px]'}`}>
      <div className='lg:w-full w-[55px] mx-auto'>
        <Link href='/'>
          <Menuitem 
            iconString='For you'
            colorString={pathname === '/' ? 'white' : ''}
            sizeString='25'
          />
        <Menuitem iconString='Live'
         colorString={pathname === '/' ? 'white' : ''}
         sizeString='25' />
        <Menuitem iconString='Follow' 
         colorString={pathname === '/' ? 'white' : ''}
         sizeString='25'/>
        </Link>
        
        <div className='border-b lg-ml-2 mt-2'>
          <h2 className='lg:block hidden text-xs text-white font-semibold pt-4 pb-2'> Accounts</h2>

          <div className='lg:hidden block pt-3'></div>
          <Client>
            <div className='cursor-pointer text-white'>
              <MenuitemFollow user={{ id: '1', name: 'test user', image: 'https://placehold.co/50' }} />
            </div>
          </Client>
          <button className='lg-block hidden text-gray-600 pt-1.5 pt-2 text-[12px]'>
            See all
          </button>

          {true ? (
            <div>
              <div className='border-b lg-ml-2 mt-2'>
                <h2 className='lg:block hidden text-xs text-white font-semibold pt-4 pb-2 '>Following Accounts</h2>

                <div className='lg:hidden block pt-3'></div>
                <Client>
                  <div className='cursor-pointer text-white'>
                    <MenuitemFollow user={{ id: '1', name: 'test user', image: 'https://placehold.co/50' }} />
                  </div>
                </Client>
                <button className='lg:block hidden text-white pt-1.5 pt-2 text-[15px]'>
                  More
                </button>
              </div>
            </div>
          ) : null}
          
          </div>
          <div className='lg:block hidden border-b lg:ml-2 mt-3'/>
          <div className='lg:block hidden text-[12px] text-gray-600 '>
          <p className='pt-4 px-2 text-white'>Information</p>
          <p className='pt-4 px-2 text-white'>Help</p>
          <p className='pt-4 px-2 text-white'>Support</p>
          <p className='pt-4 px-2 text-white'> 2023 tt</p>

        </div>
      </div>
    </div>
    </>
  )
}
