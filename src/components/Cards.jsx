import React from 'react'
import { pc } from '../assets/images'

const Cards = () => {
  return (
    <div className=''>
        <div className='text-2xl'>
        Related deals you might like for
        </div>
        <div className='flex justify-between'>
        <div className='bg-white w-[20rem] p-5 mt-5'>
            <div className='flex justify-center pt-10'>
                <img src={pc} alt="" />
            </div>
            <div className='flex gap-5 mt-7 ms-3'>
                <div className='bg-[rgb(242,244,247)] rounded-lg ps-2 py-1 w-24 h-8 text-[rgb(7,71,134)] '>20% Off</div>
                <div className='bg-[rgb(242,244,247)] rounded-lg ps-2 py-1 w-32 h-8 text-[rgb(7,71,134)]'>Limited time</div>
            </div>
            <div className='text-center mt-3 text-[rgb(98,110,121)] font-semibold'>
            Webbuilder 1
            </div>
            <div className='mt-3 text-[rgb(98,110,121)]'>
            Computer Modern clasic with wix support
            </div>
            <div className='flex mt-3 gap-2'>
                <div className='text-[rgb(98,110,121)]'>$39.96</div>
                <div className='text-[rgb(159,169,179)]'><s>$49.96</s></div>
                <div className='text-[rgb(239,76,93)]'>(20% Off)</div>
            </div>
            <div className='mt-5 '>
                <button className='bg-[rgb(27,136,244)] text-white p-0.5 w-full rounded-md'>View Deal</button>
            </div>
        </div>
        <div className='bg-white w-[20rem] p-5 mt-5'>
            <div className='flex justify-center pt-10'>
                <img src={pc} alt="" />
            </div>
            <div className='flex gap-5 mt-7 ms-3'>
                <div className='bg-[rgb(242,244,247)] rounded-lg ps-2 py-1 w-24 h-8 text-[rgb(7,71,134)] '>20% Off</div>
                <div className='bg-[rgb(242,244,247)] rounded-lg ps-2 py-1 w-32 h-8 text-[rgb(7,71,134)]'>Limited time</div>
            </div>
            <div className='text-center mt-3 text-[rgb(98,110,121)] font-semibold'>
            Webbuilder 1
            </div>
            <div className='mt-3 text-[rgb(98,110,121)]'>
            Computer Modern clasic with wix support
            </div>
            <div className='flex mt-3 gap-2'>
                <div className='text-[rgb(98,110,121)]'>$39.96</div>
                <div className='text-[rgb(159,169,179)]'><s>$49.96</s></div>
                <div className='text-[rgb(239,76,93)]'>(20% Off)</div>
            </div>
            <div className='mt-5 '>
                <button className='bg-[rgb(27,136,244)] text-white p-0.5 w-full rounded-md'>View Deal</button>
            </div>
        </div>
        <div className='bg-white w-[20rem] p-5 mt-5'>
            <div className='flex justify-center pt-10'>
                <img src={pc} alt="" />
            </div>
            <div className='flex gap-5 mt-7 ms-3'>
                <div className='bg-[rgb(242,244,247)] rounded-lg ps-2 py-1 w-24 h-8 text-[rgb(7,71,134)] '>20% Off</div>
                <div className='bg-[rgb(242,244,247)] rounded-lg ps-2 py-1 w-32 h-8 text-[rgb(7,71,134)]'>Limited time</div>
            </div>
            <div className='text-center mt-3 text-[rgb(98,110,121)] font-semibold'>
            Webbuilder 1
            </div>
            <div className='mt-3 text-[rgb(98,110,121)]'>
            Computer Modern clasic with wix support
            </div>
            <div className='flex mt-3 gap-2'>
                <div className='text-[rgb(98,110,121)]'>$39.96</div>
                <div className='text-[rgb(159,169,179)]'><s>$49.96</s></div>
                <div className='text-[rgb(239,76,93)]'>(20% Off)</div>
            </div>
            <div className='mt-5 '>
                <button className='bg-[rgb(27,136,244)] text-white p-0.5 w-full rounded-md'>View Deal</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Cards