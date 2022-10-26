// type defination files
export interface Tweet extends content{
    // _id : string
    // _createdAt: string
    // _rev: string
    _type : 'tweet'
    _blockTweet: boolean
    
}
export type TweetBody = {
    text: string
    username:string
    profileImg: string
    image?:string 
    displayName:string
}

// export type cotnent
export type content = {
  _id: string;
  _createdAt: string;
  _rev: string;
  text: string;
  username: string;
  profileImg: string;
  image?: string;
  displayName: string;
};

// export type CommentBody = {
//     text: string
//     username:string
//     profileImg:string 
// }

export interface Comment extends content {
  _type: 'comment'
  _updatedAt: string
  tweet :{
    _ref:string
    _type: "reference"
  }
}
