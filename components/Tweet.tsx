import React from 'react'
import {useState, useEffect} from 'react'
import { Comment, Tweet } from '../typings'
import  TimeAgo  from 'react-timeago'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faRetweet } from '@fortawesome/free-solid-svg-icons'
// import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { fetchComments } from '../utils/fetchComments'
import CommentComp from './Comment'
import { faB, faS, faRetweet, faMessage } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'

interface Props{
    tweet: Tweet
}


function Tweet({ tweet } : Props) {
  const [comments, setComments] = useState<Comment[]>([])
  const retrieveCommentArray = async (tweetId : string) =>{
    console.log(`this is tweetID${tweetId}`)
    const commentArray = await fetchComments(tweetId)
    setComments(commentArray)
}
  useEffect(() => {
    retrieveCommentArray(tweet._id)
    console.log("inside usee effect")
    console.log(comments)
  }, [])
  library.add(faB, faS, faRetweet, faMessage)

  return (
    <div className='flex border-x'>
      <img className= 'w-10 h-10 rounded-full ml-3 mt-3' src= {tweet.profileImg} ></img>
      <div className='flex flex-col ml-3 mt-3'>
        <div className='flex'>
          <div className='font-bold text-black'>{tweet.displayName}</div>
          <div className='font-chirp text-gray-500 pl-1'> @{tweet.username}</div>
          <TimeAgo date ={tweet._createdAt}/>
        </div>
        <div className='pr-10'>
          <div className=''>{tweet.text}</div>
          {tweet.image && <img className='mt-3 rounded-md' src={tweet.image}/>}
        </div>
        <div className='flex justify-around'>
          {/* <FontAwesomeIcon icon = "fa-light fa-message" /> */}
          <FontAwesomeIcon icon ={["fas", "faRetweet"]} />
        {/* <FontAwesomeIcon className='w-5 h-5' icon = {faRetweet} />
        <FontAwesomeIcon className='w-5 h-5' icon = {faRetweet} />
        <FontAwesomeIcon className='w-5 h-5' icon = {faRetweet} />
        <FontAwesomeIcon className='w-5 h-5' icon = {faRetweet} /> */}
        {/* <FontAwesomeIcon icon={["fab", "github"]} />
{/* message retweet like shsare */}
        </div>
      </div>
      {/* <Comment /> */}
      {comments.map((comment)=><CommentComp comment={comment}/>)}
    </div>
  )
}
export default Tweet

