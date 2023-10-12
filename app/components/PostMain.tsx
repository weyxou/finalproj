'use client'
import React, { useEffect } from 'react';
import { PostMainTypes } from '../types';
import Link from 'next/link';
import { AiOutlineHeart } from 'react-icons/ai';
import { PiMusicNoteSimpleLight } from 'react-icons/pi';
import PostLike from './PostLike';

export default function PostMain({ post }: PostMainTypes) {
  useEffect(() => {
    const video = document.getElementById(`video-${post?.id}`) as HTMLVideoElement;
    const postVideo = document.getElementById(`PostMain-${post.id}`);

    if (postVideo) {
      const observer = new IntersectionObserver((entries) => {
        entries[0].isIntersecting ? video.play() : video.pause();
      }, { threshold: [0.10] });

      observer.observe(postVideo);
    }
  }, [post]);

  return (
    <>
      <div id={`PostMain-${post.id}`} className='flex border-b py-6'>
        <div className='cursor-pointer'>
          <img src={post?.profile.image} alt="" className='rounded-full max-h-[60px]' width='60' />
        </div>
        <div className='pl-3 w-full px-4 items-center '>
          <div className='flex items-center justify-between pb-0.5'>
            <Link href={`/profile/${post.profile.user_id}`}>
              <span className='font-bold hover:underline cursor-pointer'>
                {post.profile.name}
              </span>
            </Link>

            <button className='border text-[15px] px-[21px] py-0.5 border-[#0f0d2c] text-[#0f0d2c] hover:bg-[#0f0d2c] font-semibold rounded-md hover:text-white'>
              Follow
            </button>
          </div>
          <p className='text-[15px] pb-0.5 break-words md:max-w-[400px] max-w-[300px]'>{post.text}</p>
          <p className='text-[15px] text-gray-600 pb-0.5'>#dreamqwerty #qwerty #recommended</p>
          <p className='text-[15px] pb-0.5 flex items-center font-semibold'>
            <PiMusicNoteSimpleLight />
            <span className='px-1'>music from - Jika</span>
            <AiOutlineHeart />
          </p>
          <div className='mt-2.5 flex'>
            <div className='relative min-h-[480px] max-h-[580px] max-w-[260px] flex items-center bg-black rounded-xl cursor-pointer'>
              <video src={post?.video_url}
                id={`video-${post.id}`}
                loop
                controls
                muted
                className='rounded-xl object-cover mx-auto h-full'/>
            </div>
            <PostLike post={post}/>
          </div>
        </div>
      </div>
    </>
  );
}