import PostMain from "./components/PostMain";

export interface RandomUsers{
   id: string;
   name: string;
   image: string;

}

export interface Like{
    id:string,
    user_id: string,
    post_id: string,
}


export interface Comment{
    id:string,
    user_id: string,
    post_id: string,
    text: string
}

export interface Post{
    id:string,
    user_id:string,
    video_url:string,
    text:string,
    data:string,
    profile:{
      user_id:string,
      name:string,
      image:string,
 }
}

export interface MenuitemsTypes{
    iconString: string,
    colorString: string,
    sizeString: string
}

export default Follows {
    user: RandomUsers
}

export default PostMainTypes{
    post: Post
}

export default PostLike{
    post: Post
}