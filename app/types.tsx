import PostMain from "./components/PostMain";

export interface RandomUsers {
  id: string;
  name: string;
  image: string;
}

export interface Like {
  id: string;
  user_id: string;
  post_id: string;
}

export interface Post{
  id: string;
  user_id: string;
  post_id: string;
  text: string;
  created_at:string;
}

export interface Comment {
  id: string;
  user_id: string;
  post_id: string;
  text: string;
}

export interface Post {
  id: string;
  user_id: string;
  video_url: string;
  text: string;
  data: string;
  profile: {
    user_id: string;
    name: string;
    image: string;
  };
}



export interface ProfilePageTypes{
  params: {id: string}
}

export interface UploadError{
  type: string;
  message: string;
}

export interface MenuitemsTypes {
  iconString: string;
  colorString: string;
  sizeString: string;
}

// Export the 'Follows' type as a named export
export interface Follows {
  user: RandomUsers;
}

// Export the 'PostMainTypes' type as a named export
export interface PostMainTypes {
  post: Post;
}
export interface PostUserTypes {
  post: Post;
}

// Export the 'PostLike' type as a named export
export interface PostLike {
  post: Post;
}
