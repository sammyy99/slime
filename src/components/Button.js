import React from 'react'

const Button = ({name}) => {
  return (
    <div className='bg-gray-800 text-white hover:bg-gray-600 py-1 px-2 mx-2 rounded-lg font-semibold'>
      <button>{name}</button>
    </div>
  )
}

export default Button
