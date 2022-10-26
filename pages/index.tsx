import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import { fetchTweets } from '../utils/fetchTweets'
import { Tweet } from '../typings'

interface Props{
  tweets: Tweet[];
}

const Home = ({ tweets } :Props) => {
  // console.log(tweets)
  return (
    <div className="">
      <Head>
        <link href="http://fonts.cdnfonts.com/css/chirp-2" rel="stylesheet"></link>
        <title>Twitter</title>
      </Head>
      <main className='grid grid-cols-9 lg: max-w-6xl mx-auto max-h-screen overflow-hidden'>
        <SideBar/>
        <Feed tweets = {tweets} />
        <Widgets />
      </main>
    </div>
  )
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
