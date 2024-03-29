import { CalendarDaysIcon, FaceSmileIcon, GifIcon, ListBulletIcon, PhotoIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useRecoilState } from 'recoil';
import { json } from 'stream/consumers';
import { globalTweetArrayState } from '../atoms/tweetAtom';
import { createTweetInfo } from '../utils/createTweetInfo';
import { fetchTweets } from '../utils/fetchTweets';

function TweetBox() {
  const [currInput, setCurrInput] = useState('');
  const { data: session } = useSession();
  const [addImageIconClicked, setAddImageIconClicked] = useState(false);
  const [image, setImage] = useState<string | null | undefined >(null);
  const [Tweets, setTweets] = useRecoilState(globalTweetArrayState);
  // const [text,setText] = useState<string>('')

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    if (input.files) {
      const file = input.files[0];
      const reader = new FileReader();
      if (!file){
        toast('Cannot Upload File')
        return 
      }
      reader.readAsDataURL(file);
      reader.addEventListener('load', () => {
        // Use the `reader.result` property to set the image data
        setImage(reader?.result);
      });
    }
  };

  const handleTweetSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const TweetInfo = createTweetInfo(image,session,currInput)
    const result = await fetch(`/api/addTweet`, {
      body: JSON.stringify(TweetInfo),
      method: 'POST',
    });
    const res = await result.json();
    const newTweets = await fetchTweets();
    setTweets(newTweets);
    toast('✨Tweet Posted✨');
    setImage('')
    setCurrInput('')
    return res;
  };

  return (
    <div className="border-y flex pl-2 space-x-2 p-5">
      <img
        className="w-10 h-10 mt-7 ml-2 rounded-full object-cover"
        src={session?.user?.image || 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'}
        alt=""
      />

      <div className="flex flex-1 items-center">
        <div className="flex flex-1 flex-col">
          <input
            type="text"
            value={currInput}
            onChange={(e) => setCurrInput(e.target.value)}
            className="outline-none h-24 text-xl"
            placeholder="What's Happening?"
          />

          {/* <textarea className='max-w max-h'></textarea> */}
          <div className="flex items-center">
            <div className="flex flex-1 space-x-2 text-twitter">
              <PhotoIcon
                onClick={() => setAddImageIconClicked(!addImageIconClicked)}
                className="w-5 h-5 cursor-pointer hover:bg-TweetBoxIconHover rounded-full "
              />
              <GifIcon className="w-5 h-5 cursor-pointer hover:bg-TweetBoxIconHover rounded-full " />
              <ListBulletIcon className="w-5 h-5 cursor-pointer hover:bg-TweetBoxIconHover rounded-full " />
              <FaceSmileIcon className="w-5 h-5 cursor-pointer hover:bg-TweetBoxIconHover rounded-full " />
              <CalendarDaysIcon className="w-5 h-5 cursor-pointer hover:bg-TweetBoxIconHover rounded-full " />
            </div>
            <button
              disabled={!session || !currInput}
              className="text-white bg-twitterColor rounded-full font-bold px-5 py-2 disabled:opacity-30 "
              onClick={(e) => handleTweetSubmit(e)}
            >
              Tweet
            </button>
          </div>
          {addImageIconClicked && (
            <div>
              <input type="file" accept="image/*" onChange={handleFileUpload} />
              {image && <img src={image} alt="Selected image" className="" />}
            </div>
          )}
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default TweetBox;
