import React from 'react'
import CommentList from './CommentList'
import { commentsData } from '../constants/datafile'

const CommentsContainer = () => {
  return (
    <div className='py-3'><CommentList commentData={commentsData}/></div>
  )
}

export default CommentsContainer
