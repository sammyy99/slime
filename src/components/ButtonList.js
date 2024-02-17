import React from 'react'
import Button from './Button'
import {buttons} from '../constants/buttonData'

const ButtonList = () => {
  return (
    <div className='flex my-2 mx-6'>
      {buttons.map((name)=>{
        return <Button key={name} name = {name}/>
      })}
    </div>
  )
}

export default ButtonList
