import { ArrowPathIcon } from '@heroicons/react/24/outline';
import TweetBox from './TweetBox';
import { Tweet } from '../typings';
import TweetComp from './Tweet';
import { fetchTweets } from '../utils/fetchTweets';
import toast from 'react-hot-toast';
import {useRecoilState } from 'recoil';
import {globalTweetArrayState} from '../atoms/tweetAtom'
interface Props {
  tweetsFromProp: Tweet[];
}

function Feed() {
  const [tweets, setTweets] = useRecoilState<Tweet[] | []>(globalTweetArrayState);
  const handleRefresh = async () => {
    const refreshToast = toast.loading('Refreshing...');
    const newTweets = await fetchTweets();
    setTweets(newTweets);
    toast.success('Feed Updated', { id: refreshToast });
  };
  return (
    <div className="col-span-7 lg:col-span-5 border-x max-h-screen overflow-auto scrollbar-hide">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl justify-between font-bold "> Home</h1>
        <ArrowPathIcon
          onClick={handleRefresh}
          className="mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125"
        />
      </div>
      <TweetBox />

      <div className="">
        {tweets &&
          tweets.map((tweet) => {
            return <TweetComp key={tweet._id} tweet={tweet} />;
          })}
      </div>
      {/* <button onClick={}>sjdanasknasjknaskj</button> */}
    </div>
  );
}

export default Feed;
