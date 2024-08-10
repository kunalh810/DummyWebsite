import React from 'react'
import './Achievement.css'

const Achievement = (props) => {
  return (
    <div className='ach'>
      <p className='ach-head'>{props.head}</p>
      <p className='ach-desc'>{props.desc}</p>
    </div>
  )
}

export default Achievement
