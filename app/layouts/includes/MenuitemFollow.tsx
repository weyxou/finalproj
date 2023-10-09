// 'use client'

import React from 'react'
import Link from 'next/link'
import { Follows } from '@/app/types'
import {AiOutlineCheck} from 'react-icons/ai' 

export default function MenuitemFollow({ user }: Follows) {
  return (
    <>
      <Link href={`/profile/${user?.id}`}>
        <p className='flex items-center hover:bg-gray-100 rounded-md w-full py-1.5 px-2'>
          <img src={user?.image} alt={user?.name}
           className='rounded-full lg:mx-0 mx-auto' />
        </p>

        <div className='lg:pl-2.5 lg:block hidden'>
            <div className='flex items-center'>
                <p className='font-bold text-[14px] truncate'>{user?.name}</p>
                <p className='ml-1 rounded-full bg-black h-[14px] relative'>
                    <AiOutlineCheck classNAme='relative p-[3px]'/>
                </p>
            </div>
            
            <p className='font-light text-[12px] text-gray-600'>{user?.name}</p>
        </div>
      </Link>
    </>
  )
}

