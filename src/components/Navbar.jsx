import React from 'react'
import { MdOutlineMessage, MdOutlineMenuOpen, MdOutlineContacts, MdOutlineMenu, MdKeyboardDoubleArrowRight  } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

import USA from '../assets/images/usa.png'
import LADY from '../assets/images/lady.jpg'
import LOGO from '../assets/images/vuse-logo.png'

const Navbar = ({expanded, setExpanded, showSidebar, setShowSidebar}) => {
    const show = () =>{
        setShowSidebar(prev => !prev)
    }
  return (
    <header className=' w-full sticky top-3'>
        <nav className='p-4 flex justify-between   rounded-sm shadow-[-2px_-2px_9px_1px_gray,3px_3px_4px_1px_black]  bg-[#272727]'>
            <div className='flex space-x-4'>
                <img 
                        src={LOGO} 
                        alt='logo'
                        className={`
                            w-[40px] h-[40px] border rounded-full lg:hidden
                        `}
                />
                <div className=' w-[40px] h-[40px] bg-[#272727] hidden  lg:flex justify-center items-center rounded-full shadow-[-1px_-1px_4px_1px_gray,2px_2px_1px_1px_black] '>
                    {
                        expanded ? 
                        <MdOutlineMenuOpen className='text-[#0097A7] text-[20px] cursor-pointer' onClick={() => setExpanded(!expanded)}/>
                        : <MdKeyboardDoubleArrowRight className='text-[#0097A7] text-[20px] cursor-pointer' onClick={() => setExpanded(!expanded)}/>
                    }
                    
                </div>
                <div className='w-[40px] h-[40px] bg-[#272727] hidden  lg:flex justify-center items-center rounded-full shadow-[-1px_-1px_4px_1px_gray,2px_2px_1px_1px_black] '>
                    <MdOutlineContacts className='text-[#0097A7] text-[20px]'/>
                </div>
                <div className='w-[40px] h-[40px] bg-[#272727]  hidden lg:flex justify-center items-center rounded-full shadow-[-1px_-1px_4px_1px_gray,2px_2px_1px_1px_black] '>
                    <MdOutlineMessage className='text-[#0097A7] text-[20px]'/>
                </div>
            </div>
            <div className='flex space-x-4'>
                <div className='w-[40px] h-[40px] bg-[#272727]   flex justify-center items-center lg:hidden rounded-full shadow-[-1px_-1px_4px_1px_gray,2px_2px_1px_1px_black] '>
                    <MdOutlineMenu className='text-[#0097A7] text-[20px] cursor-pointer' onClick={show}/>
                </div>
                <div className='w-[40px] h-[40px] bg-[#272727]   flex justify-center items-center rounded-full shadow-[-1px_-1px_4px_1px_gray,2px_2px_1px_1px_black] '>
                    <IoMdSettings className='text-[#0097A7] text-[20px]'/>
                </div>
                <div className='w-[40px] h-[40px] bg-[#272727]   flex justify-center items-center rounded-full shadow-[-1px_-1px_4px_1px_gray,2px_2px_1px_1px_black] '>
                    <img src={USA} alt='usa flag' width={24} height={24} className='rounded-full' />
                </div>
                <div className='w-[40px] h-[40px] bg-[#272727]   flex justify-center items-center rounded-full shadow-[-1px_-1px_4px_1px_gray,2px_2px_1px_1px_black] '>
                    <img src={LADY} alt='lady' width={24} height={24} className='rounded-full'/>
                </div>
                
            </div>
        </nav>
    </header>
  )
}

export default Navbar
