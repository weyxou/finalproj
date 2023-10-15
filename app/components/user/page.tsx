'use client'
import React, { useEffect } from 'react';
import {BiLoader} from 'react-icons/bi'
import Link from 'next/link';
import {BsSoundwave} from 'react-icons/bs'
import { PostUserTypes } from '../../types';
export default function PostUser({ post }: PostUserTypes) {
  useEffect(() => {
    
    const video = document.getElementById(`video${post.id}`) as HTMLVideoElement;
    if (video) {
      video.addEventListener('mouseenter', () => {
        video.play();
      });

      video.addEventListener('mouseleave', () => {
        video.pause();
      });
    }
  }, []);
   

  return (
    <>
      <div className="relative brightness-90 hover:brightness-[1.1] cursor-pointer">
               {!post.video_url ? (
                    <div className="absolute flex items-center justify-center top-0 left-0 aspect-[3/4] w-full object-cover rounded-md bg-black">
                        <BiLoader className="animate-spin ml-1" size="80" color="#FFFFFF" />
                    </div>
                ) : (
                    <Link href={`/post/${post.id}/${post.user_id}`}>
                        <video 
                            id={`video${post.id}`}
                            muted
                            loop
                            className="max-w-[200px] object-cover rounded-md" 
                            src='/video (2160p).mp4'
                            style={{
                              height: 'auto',
                              borderRadius: '8px',
                              border: '2px solid #0f0d2c',
                              boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)', 
                            }}
                        />
                    </Link>
                )}
                <div className='px-1'>
                  <p className='text-gray-700 text-[15px] pt-1'>
                    {post.text}
                  </p>
                </div>

            </div>
    </>
  );
}