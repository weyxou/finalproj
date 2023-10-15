import Image from 'next/image';
import MainLayout from './layouts/MainLayout';
import Client from './components/Client';
import PostMain from './components/PostMain';
import { Post } from './types';


export default function Home() {
  return (
    <>
      <MainLayout>
        <div className='mt-[80px] w-[400px] max-w-[690px] ml-auto'>
          <Client>
          {/* <PostMain Post={{
            post_id: '123',
            created_at: '2023-10-15', // Replace with the actual date or timestamp
            text: 'dream',
            data: 'data',
            profile: {
              user_id: '1',
              name: "jika",
              image: 'http://placehold.com/100'
            },
            video_url: 'https://www.tiktok.com/@rehcen/video/7284692207829781765?is_from_webapp=1&sender_device=pc&web_id=7285709440274155014',
            user_id: '1',
          }} /> */}
          </Client>
        </div>
      </MainLayout>
    </>
  );
}
