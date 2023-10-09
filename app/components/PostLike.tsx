import React from 'react'
import { Like, PostLike } from '../types';
import {AiFillHeart} from 'react-icons/ai'
import {BiLoaderCircle} from 'react-icons/bi'
import { useRouter } from 'next/router';
import {AiOutlineComment} from 'react-icons/ai'


export default function PostLike({post} : PostLike) {
  
    const router = useRouter
    const [CLickLike, setCLickLike]=React.useState<boolean>(false)
    const [userLiked, setuserLiked]=React.useState<boolean>(false)
    const [likes, setlikes] = React.useState<Like[]>([])

    const Like = ()=>{
        console.log('liked');
        
    }
  
    return (
    <>
    <div id={`PostLike-${post?.id}`} className='relative mr-[75px]'>
        <div className='absolute bottom-0 pt-2'>
            <div className='pb-4 text-center'>
                <button disabled={CLickLike}
                onClick={()=>Like()}
                className='rounded-full p-2 cursor-pointer'>
                    {!CLickLike ? (
                        <AiFillHeart color={likes?.length > 0 && userLiked ? '#8A2BE2' : ''}/>
                    ) : (
                        <BiLoaderCircle className='animate-spin'/>
                    )}
                </button>
                <span className='text-xs text-gray-600 font-semibold'>
                    {likes?.length}
                </span>
            </div>
            <button onClick={() => router.push(`/post/${post?.id}/${post?.profile?.user_id}`)}
            className='pb-4 text-center'>
                <div className='rounded-full p-2 cursor-pointer'>
                    <AiOutlineComment/>
                </div>
            </button>

        </div>
    </div>
    </>
  )
}
