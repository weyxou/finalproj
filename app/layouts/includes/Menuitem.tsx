'use client'

import { MenuitemsTypes } from '@/app/types'
import React from 'react'
import { BiHomeHeart } from 'react-icons/bi'
import { RiGroupLine } from 'react-icons/ri'
import {BsCameraVideo} from 'react-icons/bs'


export default function Menuitem({ iconString, colorString, sizeString}: MenuitemsTypes) {

    const icons=()=>{
        if (iconString=='For you' )  return <BiHomeHeart color="white"/> 
        if (iconString=='Follow')  return <RiGroupLine   color="white"/> 
        if (iconString=='Live')  return <BsCameraVideo  color="white"/> 

    }


    return (
    <>
    <div  className='w-full flex items-center p-2.5 rounded-md'>
        <div className='flex items-center lg:mx-0 mx-auto'>
            {icons()}

            <p className={`lg:block text-white hidden pl-[9px] mt-0.5 font-semibold text-[17px] text-[${colorString}]`}>
                {iconString}
            </p>
        </div>
    </div>
    </>
  )
}
