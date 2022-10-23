import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
      </Head>
      <main className='grid grid-cols-9 lg: max-w-6xl mx-auto max-h-screen overflow-hidden'>
        <SideBar/>
        <Feed />
        <Widgets />
      </main>
    </div>
  )
}

export default Home
