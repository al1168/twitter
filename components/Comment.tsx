import React from 'react';
import { Comment } from '../typings';
import TimeAgo from 'react-timeago';
import { createClient } from 'next-sanity';
interface Props {
  comment: Comment;
}
// <img className= 'w-10 h-10 rounded-full ml-3 mt-3' src= {tweet.profileImg} ></img>
function Comment({ comment }: Props) {
  // const client = createClient();
  return (
    <p className="flex mt-3 ">
      <div className="flex flex-col items-center">
        <img src={comment.profileImg} alt="" className="w-8 h-8 rounded-full object-cover" />
        <hr className=" h-8 border w-0" />
      </div>
      <div className="flex flex-col ml-3">
        <div className="flex">
          <div className="font-bold text-black">{comment.displayName}</div>
          <div className="font-chirp text-gray-500 pl-1 pr-2  "> @{comment.username}</div>
          <TimeAgo date={comment._createdAt} />
        </div>
          <img className='h-40 w-40 object-cover mt-10' src={comment.image}></img>
        <div className="mt-1">{comment.text}</div>
      </div>
    </p>
  );
}

export default Comment;
