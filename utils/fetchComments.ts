import { Comment } from './../typings.d';
export const fetchComments = async (tweetId:string) => {
    console.log(`Inside fetchComments: ${tweetId}`)
    // console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getComments?tweetId=${tweetId}}`);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getComments?tweetId=${tweetId}`);
    const data = await res.json();
    console.log(`This is data ${data}`)
    console.log(data)
  const Comments: Comment[] = data.comments;
  return Comments;
};
