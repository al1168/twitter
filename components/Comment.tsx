import React from 'react'
import { Comment } from '../typings'

interface Props{
    comment: Comment
}

function Comment({comment} : Props) {
  return (
    <div>{comment.text}</div>
  )
}

export default Comment