'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { ProfilePageTypes } from '../types'
import MainLayout from '../layouts/MainLayout'
import Client from '../components/Client'
import {GoPencil} from 'react-icons/go'
import PostUser from '../components/user/page'

export default function Profile({params} : ProfilePageTypes) {
const router=useRouter()

const User={
    id:'1',
    user_id:'1',
    name:'jik',
    img:'http://placehold.co/20',
    bio:'my profile!'
}

  return (
    <>
    <MainLayout>
    <div className='pl-[185px] lg:pl-[160px] lg:pr-0 w-[calc(100% - 90px)] pr-3 max-w-[1800px] 2xl:mx-auto mt-[130px]'>
            <div className='flex w-[calc{100vw-230px}]'>
                <Client>
                    {true ? (
                        <img src={User.img} alt=""  className='w-[80px] min-w-[80px] rounded-full'/>
                    ) : (
                        <div className='min-w-[150px] h-[120px] bg-gray-200 rounded-full'>
                        </div>
                    )}
                </Client>

                <div className='ml-5 w-full'>
                    <Client>
                        {User?.name ?(
                            <div>
                                <h2 className='text-[30px] font-bold truncate'>{User?.name}</h2>
                                <p className='text-[20px] truncate'>{User?.bio}</p>
                            </div>
                        ) :(
                          <div className='h-[60px]'/>
                        )}
                    </Client>

                    {true ?(
                        <button className='flex items-center rounded-md py-1.5 px-3.5 mt-3 text-[15px] font-semibold border hover:bg-gray-200'>
                          <GoPencil/>  
                          <span>Edit profile</span>
                        </button>

                    ) : (
                        <button className='flex items-center rounded-md py-1.5 px-8 mt-3 text-[15px] text-white font-semibold bg-[#0f0d2c]'>
                            Follow
                        </button>
                    )}

                </div>
            </div>

            <div className='flex items-center pt-4'>
                <div className='mr-4'>
                    <span className='font-bold'>200</span>
                    <span className='text-gray-500 font-light text-[15px] pl-1.5'> Following</span>
                </div>
                <div className='mr-4'>
                    <span className='font-bold'>400</span>
                    <span className='text-gray-500 font-light text-[15px] pl-1.5'> Followers</span>
                </div>
            </div>

            <Client>
                <p className='pt-4 mr-4 text-gray-500 font-light text-[15px] pl-1.5 max-w-[500px]'>
                    {User?.bio}
                </p>
            </Client>

            <ul className='w-full flex items-center pt-4 border-b'>
                <li className='w-60 text-center py-2 text-[17px] font-semibold border-b-2 border-b-[#0f0d2c]'>Videos</li>
                <li className='w-60 text-center py-2 text-[17px] font-semibold border-b-2 border-b-[#0f0d2c]'>Likes</li>
            </ul>
            <Client>
                <div className='mt-4 grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid'>
                    <PostUser post={{
                        id:'123',
                        user_id:'1',
                        video_url:'/video(2160p).mp4',
                        text:'qwerty',
                        created_at:'jik'
                    }}/>
                </div>
            </Client>
        </div>
    </MainLayout>
    </>
  )
}
