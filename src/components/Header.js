import React from 'react'
import { logoIcon, menuIcon, searchIcon, userImage } from '../constants/images'
import { useDispatch } from 'react-redux'
import { sidebarToggle } from '../Redux/headerSlice'

const Header = () => {

  const dispatch = useDispatch()

  const handleSidebarToggle = ()=>{
    dispatch(sidebarToggle())
  }

  return (
    <div className='grid grid-cols-12 shadow-lg py-1'>

      <div className='h-12 flex col-span-2 px-2'>
        <img onClick={()=>{handleSidebarToggle()}} className='hover:cursor-pointer' alt='' src={menuIcon}></img>
        <img className='py-3 px-2' alt='' src={logoIcon}></img>
        </div>

      <div className='flex justify-center col-start-5 col-end-9 py-1 px-2 rounded-full'>
        <input className='px-4 w-full rounded-tl-full rounded-bl-full border border-gray-200' type='text' placeholder='Search here'></input>
        <button className='px-5 w-16 rounded-tr-full rounded-br-full border border-gray-200 border-l-0 bg-gray-300'><img alt='' src={searchIcon}></img></button>
      </div>

      <div className='h-12 flex justify-end col-start-10 col-span-3 py-2 pr-8'>
        <img className='w-8' alt='' src={userImage}></img>
      </div>
    </div>
  )
}

export default Header
