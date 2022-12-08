import React from 'react';
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  UserIcon,
  HomeIcon,
  EnvelopeIcon,
  EllipsisHorizontalCircleIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import SidebarRow from './SidebarRow';
import { signIn, signOut, useSession } from 'next-auth/react';
function SideBar() {
  const { data: session } = useSession();

  return (
    <div className="col-span-2 flex flex-col items-center md:items-start">
      <img
        className="h-7 w-8 ml-6 mt-5"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
        alt=""
      />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={UsersIcon} title="Community" />
      <SidebarRow Icon={BellIcon} title="Notification" />
      <SidebarRow Icon={EnvelopeIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmark" />
      {/* <SidebarRow onClick = {session ? signOut : signIn} Icon = {UserIcon} title = {session ? "Sign Out" : "Sign In"}/> */}
      <div
        onClick={() => (session ? signOut() : signIn())}
        className=" m-3 flex cursor-pointer max-w-fit items-center space-x-2 rounded-full px-4 py-3 hover:bg-gray-100 transition-all duration-200 group"
      >
        <UserIcon className="h-6 w-6" />
        <p className="hidden group-hover:text-twitter md:inline-flex">{session ? 'Sign Out' : 'Sign In'}</p>
      </div>
      <SidebarRow Icon={EllipsisHorizontalCircleIcon} title="More" />
    </div>
  );
}

export default SideBar;
