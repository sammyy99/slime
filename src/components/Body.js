import React from 'react'
import Sidebar from './Sidebar'
import SidebarDetailed from './SidebarDetailed'
import MainContainer from './MainContainer'
import { useSelector } from 'react-redux'

const Body = () => {

  const sidebarToggle = useSelector((store)=>{return store.header?.sidebar})

  return (
    <div className='flex'>
      {!sidebarToggle ? <Sidebar/>:<SidebarDetailed/>}
      <MainContainer/>
    </div>
  )
}

export default Body
