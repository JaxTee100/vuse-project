import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'

const Stat = ({title, value, percentage, icon, textColor}) => {
  return (
        <div className=' p-4 bg-[#292D32] rounded-lg shadow-[-2px_-2px_9px_1px_gray,7px_7px_5px_1px_#1E2025]'>
            <h2 className='text-white text-lg'>{title}</h2>
            <div className='flex justify-between  items-center mt-6'>
                <div className=''>
                    <h1 className='text-clamp max-xs:hidden text-white'>{value}</h1>
                    <div className='flex space-x-2 max-xs:hidden items-center text-[#00BFA5]'><FaArrowUpLong /> <span>{percentage}</span></div>
                    <p className=' text-white max-xs:hidden'>Since last Month</p>
                </div>
                <div className='w-[50px] h-[50px] flex justify-center items-center bg-[#292D32] rounded-full  shadow-[-1px_-1px_4px_1px_gray,2px_2px_1px_1px_black]'>
                    <div className={`text-[24px]`} style={{color: `${textColor}`}}>{icon}</div>
                </div>
            
            </div>
        </div>
  )
}

export default Stat
