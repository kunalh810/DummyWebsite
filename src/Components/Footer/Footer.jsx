import React from 'react'
import { FaPhoneAlt,FaMap,FaLinkedinIn,FaInstagram,FaFacebookF,FaRegCopyright  } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>

      
        <ul className='list-1'>
            <li id='home-span'>Home</li>
            <li>Products</li>
            <li>Our Work</li>
            <li>Our company</li>
            <li>Gallery</li>
            <li>Contact Us</li>
        </ul>
      

      
        <ul className='list-2'>
            <li className='icons'><FaPhoneAlt /> +91 12345 67890</li>
            <li className='icons'> <IoIosMail/> dummyemail@gmail.com</li>
            <li className='icons'><FaMap /> 1234 Design Street,Suite 567,City,FC 89012</li>
        </ul>
      

     
        <ul className='list-3'>
            <li className='icons-2'><FaLinkedinIn/></li>
            <li className='icons-2'><FaXTwitter/></li>
            <li className='icons-2'><FaInstagram/></li>
            <li className='icons-2'><FaFacebookF/></li>
        </ul>
      

      <div className='footer-4'>
        <p><FaRegCopyright /> 2024 dummyname All rights reserved</p>
      </div>

    </div>
  )
}

export default Footer

