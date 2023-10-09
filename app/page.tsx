import Image from 'next/image'
import MainLayout from './layouts/MainLayout'
import Client from './components/Client'
import PostMain from './components/PostMain'

export default function Home() {
  return (
    <>
    <MainLayout>
    <div className='mt-[80px] w-[400px] max-w-[690px] ml-auto'>
      <Client>
        <PostMain post={{
          id:'123',
          user_id:'1',
          video_url:'https://www.tiktok.com/@rehcen/video/7284692207829781765?is_from_webapp=1&sender_device=pc&web_id=7285709440274155014',
          text:'dream',
          data:'data',
          profile:{
            user_id:'1',
            name:"jika",
            image:'http://placehold.com/100'
          }
        }}/>

      </Client>
    </div>
    </MainLayout>
    </>
  )
}
