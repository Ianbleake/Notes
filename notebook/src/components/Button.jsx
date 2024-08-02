import React from 'react'

const Button = ({handle,text})=>{
  return(
    <button className='btn' onClick={handle} >{text}</button>
  )
}

export default Button