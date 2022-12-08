import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import { fetchTweets } from '../utils/fetchTweets'
import { Tweet } from '../typings'
import { Toaster } from 'react-hot-toast'
import { useSession, signIn, signOut } from 'next-auth/react';
import {RecoilRoot,atom, useRecoilState,} from 'recoil'
import { useEffect } from 'react'
import {globalTweetArrayState} from '../atoms/tweetAtom'
interface Props{
  tweets: Tweet[];
}
const Home = ({ tweets } :Props) => {
  const [tweetsArray, setTweets] = useRecoilState<Tweet[] | []>(globalTweetArrayState);
  useEffect(() => {
    setTweets(tweets)
    return () => {
    }
  }, [])
  
  return (

      <div className="">
        <Head>
          <link href="http://fonts.cdnfonts.com/css/chirp-2" rel="stylesheet"></link>
          <title>Twitter</title>
        </Head>
        <Toaster />
        <main className="grid grid-cols-9 lg: max-w-6xl mx-auto max-h-screen overflow-hidden">
          <SideBar />
          <Feed/>
          <Widgets />
        </main>
      </div>

  );
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context)=>{
  const tweets = await fetchTweets();
  return {
    props:{
    tweets,
    }
  }
}
