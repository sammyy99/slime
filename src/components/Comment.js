import React from 'react'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

const Comment = ({data}) => {
  return (
    <div className='flex bg-slate-700 text-gray-300 rounded-xl px-4 py-1 mb-1 ml-3'>
      <div><InsertEmoticonIcon fontSize='medium'/></div>
      <div className='px-2'>
       <div className='text-gray-100'>{data.name}</div>
       <div className='text-gray-300 text-sm'>{data.text}</div>
      </div>
    </div>
  )
}

export default Comment
