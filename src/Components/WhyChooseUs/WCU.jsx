import React from 'react'
import Achievement from './Achievement'
import data from './data.js';
import imagee from '../assets/why-choose-us.png'
import './WCU.css';

const WCU = () => {
  return (
    <div className='wcu'>

      <div className='wcu-content'>
        <h3>Why Choose Us</h3>
        <div className='wcu-para'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Placeat expedita cum dolorem, at lastef</p></div>

        <div className='achievements-display'>
        {data.map ((dataa)=>(
            <div key={dataa.id} >
            <Achievement head={dataa.head} desc={dataa.desc}/>
        </div>
        ))}
        </div>
        
      </div>

      <div className='wcu-image'>
        <img className='wcu-i' src={imagee} alt=''/>
      </div>

    </div>
  )
}

export default WCU
