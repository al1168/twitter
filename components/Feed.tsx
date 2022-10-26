import React from 'react'
import {ArrowPathIcon} from '@heroicons/react/24/outline'
import TweetBox from './TweetBox'
import { Comment, Tweet } from '../typings'
import TweetComp from './Tweet'
import { fetchTweets } from '../utils/fetchTweets'
interface Props{
  tweets: Tweet[]
}


function Feed({ tweets} :Props) {
  return (
    <div className='col-span-7 lg:col-span-5 border-x max-h-screen overflow-auto scrollbar-hide'>
        <div className='flex items-center justify-between'>
            <h1 className='p-5 pb-0 text-xl justify-between font-bold '> Home</h1>
            <ArrowPathIcon className='mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125'/>
        </div>
        <TweetBox/>
        
        <div className=''>
        {tweets.map(
          (tweet) =>{
         return <TweetComp key = {tweet._id} tweet = {tweet}/>
        }
        )}

        </div>
        
    </div>
  )
}

export default Feed