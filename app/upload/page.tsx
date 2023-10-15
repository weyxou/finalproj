"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { UploadError } from '../types'
import Uploadlayout from '../layouts/includes/Uploadlayout'
import {PiUploadSimpleDuotone} from 'react-icons/pi'
import {FiLoader} from 'react-icons/fi'
import {AiOutlineCheckCircle} from 'react-icons/ai'

export default function Upload() {
    const router=useRouter()

    const [fileDisplay, setfileDisplay]=useState<string>('')
    const [caption, setCaption]=useState<string>('')
    const [file, setFile]=useState<File | null>(null)
    const [error, setError]=useState<UploadError | null>(null)
    const [isUpload, setisUpload]=useState<boolean>(false)
 
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const files = event.target.files

        if (files && files.length > 0 ) {
            const file = files[0]
            const fileUrl = URL.createObjectURL(file)
            setfileDisplay(fileUrl)
            setFile(file)
            
        }
    }

    const clearVideo = () =>{
        setfileDisplay("")
        setFile(null)

    }


  return (
    <>
    <Uploadlayout>
        <div className='w-full mt-[80px] mb-[40px] bg=[#0f0d2c] shadow-lg rounded-md py-6 md:px-10 px-4'>
            <div>
            <h1 className='text-[20px] font-semibold'>Upload video</h1>
            <h2 className='text-gray-500 mt-1'> Post a video in your account</h2>
            </div>
           
           <div  className='mt-8 md:flex gap-6'>
        {!fileDisplay ? (
            <label htmlFor="fileINput" className='
            md:mx-0 mx-auto mt-4 mb-6 flex flex-col items-center justify-center 
            w-full max-w-[260px] h-[470px] text-center p-3 border-2 border-gray-300
            rounded-lg hover:bg-gray-100 cursor-pointer
            '>
                <PiUploadSimpleDuotone color='#0f0d2c'/>
                <p className='mt-4 text-[17px] font-semibold'>Choose a video</p>
                <p className='mt-4 text-[13px] color-gray-300'>MP4</p>
                <p className='mt-4 text-[13px] color-gray-300'>Less than 1GB</p>
                <p className='mt-4 text-[13px] color-gray-300'>Other function</p>
                <label htmlFor="fileInput"
                className='px-2 py-1.5 mt-8 text-white text-[15px] w-[80%]
                bg-[#0f0d2c] rounded-sm cursor-pointer'> Select file</label>
                <input type="file" 
                id='fileINput'
                onChange={onChange} 
                hidden accept=".mp4"/>
            </label>
        ) : (
            <div className='
            md:mx-0 mx-auto mt-4 md:mb-12 mb-16 flex items-center justify-center 
            w-full max-w-[260px] h-[540px] p-3 rounded-2xl relative cursor-pointer'>
                {isUpload ?(
                    <div className='absolute flex itrms-center justify-center z-20 bg-[#0f0d2c]'>
                        <div className='mx-auto flex items-center justify-center gap-1'>
                            <FiLoader classNAme='animate-spin'/>
                        </div>
                         </div>
                ): null}

        

                <video src={fileDisplay}
                autoPlay
                loop muted 
                className='absolute rounded-xl object-cover z-10 p-[14px] w-full h-full'></video>

                <div className='absolute bottom-12 flex items-center justify-between z-50 rounded-xl border-gray-300'>
                    <div className='flex items-center truncate'>
                        <AiOutlineCheckCircle color='#0f0d2c'/>
                        <p className='text-[12px] pl-1 truncate text-ellipsis'>
                            {file ? file.name: ''}
                        </p>
                    </div>
                    <button onClick={()=> clearVideo()} className='text-[12px] ml-2 font-semibold'>
                        Change
                    </button>
                </div>
            </div>
        )}
           </div>
        </div>
    </Uploadlayout>
    
    </>
  )
}
