import { Session } from "next-auth";
import Tweet from "../components/Tweet";

export const createTweetInfo = (
  image: string | null | undefined | ArrayBuffer,
  session: Session| null | undefined,
  currInput: string
) => {
  const TweetInfo = {
    username: session?.user?.name || 'Unknown User',
    image: image,
    profileImg: session?.user?.image || 'https://img-9gag-fun.9cache.com/photo/az1020N_700bwp.webp',
    text: currInput,
  };
  return TweetInfo;
};