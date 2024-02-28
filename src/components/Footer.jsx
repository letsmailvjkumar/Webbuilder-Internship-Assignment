import React from 'react'
import { down } from '../assets/images'

const Footer = () => {
  return (
    <div className='flex gap-40 ps-36 pt-10'>
        <div className='flex flex-col gap-3'>
            <div className='text-md'>CATEGORIES</div>
            <div className='text-sm'>Web Builder</div>
            <div className='text-sm'>Hosting</div>
            <div className='text-sm'>Data Center</div>
            <div className='text-sm'>Robotic-Automation</div>
        </div>
        <div className='flex flex-col gap-3'>
            <div className='text-md'>CONTACT</div>
            <div className='text-sm'>Contact</div>
            <div className='text-sm'>Privacy Policy</div>
            <div className='text-sm'>Terms Of Service</div>
            <div className='text-sm'>Categories</div>
            <div className='text-sm'>About</div>
        </div>
        <div className='flex ps-20'>
        United States
        <img src={down} alt="location" className='w-5 h-5' />
        </div>
    </div>
  )
}

export default Footer