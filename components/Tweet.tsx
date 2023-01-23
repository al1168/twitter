import React from 'react';
import { useState, useEffect } from 'react';
import { Comment, Tweet } from '../typings';
import TimeAgo from 'react-timeago';
import { fetchComments } from '../utils/fetchComments';
import CommentComp from './Comment';

import TweetIcons from './TweetIcons';
interface Props {
  tweet: Tweet;
}

function Tweet({ tweet }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [messIconClicked, setMessIconClicked] = useState<boolean>(false);
  
  const retrieveCommentArray = async (tweetId: string) => {
    const commentArray = await fetchComments(tweetId);
    setComments(commentArray);
  };
  useEffect(() => {
    retrieveCommentArray(tweet._id);
  }, []);

  return (
    <div className="flex border-x">
      <img className="w-10 h-10 rounded-full ml-3 mt-3" src={tweet.profileImg}></img>
      <div className="flex flex-col ml-3 mt-3">
        <div className="flex">
          <div className="font-bold text-black">{tweet.displayName}</div>
          <div className="font-chirp text-gray-500 pl-1 pr-2  "> @{tweet.username}</div>
          <TimeAgo date={tweet._createdAt} />
        </div>
        <div className="pr-10">
          <div className="">{tweet.text}</div>
          {tweet.image && <img className="mt-3 rounded-md mb-4" src={tweet.image} />}
        </div>
        <div className="flex justify-around"></div>
        <TweetIcons
          commentLength={comments.length}
          messageClicked={messIconClicked}
          setMessageClicked={setMessIconClicked}
        />
        {messIconClicked && comments.map((comment) => <CommentComp key={comment._id} comment={comment} />) && (
          <textarea />
        )}
        {/* {messIconClicked && <textarea/>} */}
      </div>
    </div>
  );
}
export default Tweet;
