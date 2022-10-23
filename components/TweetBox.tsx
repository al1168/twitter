import { CalendarDaysIcon, FaceSmileIcon, GifIcon, ListBulletIcon, PhotoIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'

function TweetBox() {
  const [currInput,setCurrInput] = useState("")
  return (
    <div className='border-y flex pl-2 space-x-2 p-5'>
       
        <img className='w-10 h-10 mt-7 ml-2 rounded-full object-cover' src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="" />
        
        <div className='flex flex-1 items-center'>
            <form className='flex flex-1 flex-col'>
                <input type="text" value={currInput} onChange = {(e)=>setCurrInput(e.target.value)} className='outline-none h-24 text-xl' placeholder="What's Happening?"/>
                
                {/* <textarea className='max-w max-h'></textarea> */}
                <div className='flex items-center'>
                  <div className='flex flex-1 space-x-2 text-twitter'>

                    <PhotoIcon className='w-5 h-5 cursor-pointer hover:bg-TweetBoxIconHover rounded-full '/>
                    <GifIcon className='w-5 h-5 cursor-pointer hover:bg-TweetBoxIconHover rounded-full '/>
                    <ListBulletIcon className='w-5 h-5 cursor-pointer hover:bg-TweetBoxIconHover rounded-full '/>
                    <FaceSmileIcon className='w-5 h-5 cursor-pointer hover:bg-TweetBoxIconHover rounded-full '/>
                    <CalendarDaysIcon className='w-5 h-5 cursor-pointer hover:bg-TweetBoxIconHover rounded-full '/>
                    
                  </div>

                  <button disabled ={!currInput} className = 'text-white bg-twitter rounded-full font-bold px-5 py-2 disabled:opacity-30 '>Tweet</button>
                  
                  </div>

            </form>
        </div>
    </div>
  )
}

export default TweetBox