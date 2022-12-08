// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { resourceLimits } from 'worker_threads';
import { Tweet } from '../../typings';
import queryCrafter from './queryCrafter';

type Data = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    // the json object we are creating of type Tweet
    const data: Tweet = JSON.parse(req.body)
    const mutations = 
    {
        mutations:[
            {"create":{
                _type : 'tweet',
                text : data.text,
                blockTweet : data._blockTweet,
                username: data.username,
                profileImg: data.profileImg,
                image : data.image,
                displayName : data.displayName
            }},
        ]
    }

    const apiEndpint = queryCrafter(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,process.env.NEXT_PUBLIC_SANITY_DATASET);
    const result = await fetch(apiEndpint,{
        headers: {
            'content-type' : 'application/json',
            'Authorization': `Bearer ${process.env.SANITY_API_TOKEN}`,
        },
        body:JSON.stringify(mutations),
        method: 'POST',
    })
    const json = await result.json()
    console.log(json)
    res.status(200).json({ message: 'Done!' });
}
