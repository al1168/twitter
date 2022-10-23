import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='hidden lg:inline mt-2 px-2 col-span-2'>
        {/* Search */}
        <div className='flex items-center space-x-2 bg-gray-100 rounded-full p-3'>
        <MagnifyingGlassIcon className='w-5 h-5 '/>
        <input type="text" placeholder='@Woowee' className='outline-none bg-transparent flex-1'/>
        </div>

        <TwitterTimelineEmbed
  sourceType="profile"
  screenName="wooween1"
  options={{height: 1000}}
/>

    </div>
  )
}

export default Widgets