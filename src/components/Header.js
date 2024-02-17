import React from 'react'
import { useDispatch } from 'react-redux'
import { sidebarToggle } from '../Redux/headerSlice'
import YouTubeIcon from '@mui/icons-material/YouTube';
import MenuIcon from '@mui/icons-material/Menu';
import Face5Icon from '@mui/icons-material/Face5';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {

  const dispatch = useDispatch()

  const handleSidebarToggle = ()=>{
    dispatch(sidebarToggle())
  }

  return (
    <div className='grid grid-cols-12 shadow-lg py-1 bg-black text-white'>

      <div className='h-12 flex col-span-2 px-2'>
        <div onClick={handleSidebarToggle} className='rounded-full mx-4 px-2 mt-2 pt-1 hover:bg-gray-800 hover:cursor-pointer'><MenuIcon fontSize='medium'/></div>
        <div className='text-red-600 mt-2 mx-1'><YouTubeIcon fontSize='large'/></div>
        <div className='mt-3 text-xl font-semibold'>Slime</div>
        </div>

      <div className='flex justify-center col-start-5 col-end-9 py-1 px-2 rounded-full'>
        <input className='px-4 w-full rounded-tl-full rounded-bl-full border border-gray-800 bg-black' type='text' placeholder='Search here'></input>
        <button className='px-6 rounded-tr-full rounded-br-full border border-gray-800 border-l-0 bg-gray-900 text-white'><SearchIcon/></button>
      </div>

      <div className='flex justify-end mt-1 col-start-12 px-4 hover:cursor-pointer'>
        <Face5Icon fontSize='large'/>
      </div>
    </div>
  )
}

export default Header
