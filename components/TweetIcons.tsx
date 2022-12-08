import {
  ArrowPathRoundedSquareIcon,
  ArrowUpTrayIcon,
  ChatBubbleOvalLeftIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import { MouseEventHandler } from 'react';
// import React, { SVGProps } from 'react'

interface Props {
  setMessageClicked: (a: boolean) => void;
  messageClicked: boolean;
  commentLength: Number;
}
function TweetIcons({ setMessageClicked, messageClicked, commentLength }: Props): JSX.Element {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2 ">
        <ChatBubbleOvalLeftIcon
          onClick={(e) => setMessageClicked(!messageClicked)}
          className="w-5 h-5 hover:fill-CommentIconHover"
        />{' '}
        <p className="m-0">{commentLength.toString()}</p>
      </div>
      <HeartIcon className="w-5 h-5 hover:fill-HeartIconHover" />
      <ArrowPathRoundedSquareIcon className="w-5 h-5 hover:fill-RetweetIconHover" />
      <ArrowUpTrayIcon className="w-5 h-5 hover:fill-ShareIconHover" />
    </div>
  );
}

export default TweetIcons;
