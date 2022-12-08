import { fetchTweets } from './../../utils/fetchTweets';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Comment } from '../../typings';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
//  API ENDPOINT TO GET TWEETS

const CommentQuery = groq`
*[_type == 'comment' && references(*[_type == 'tweet' && _id == $tweetId]._id)]{
    _id,
    ...
} | order(_createdAt desc)
`;
type Data = {
  comments: Comment[];
};
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { tweetId } = req.query;
  //   console.log(`this is resQuery${tweetId}`)
  console.log(`INSIDE GET COMMENTS: ${tweetId}`);
  const comments: Comment[] = await sanityClient.fetch(CommentQuery, { tweetId });
  res.status(200).json({ comments });
}
