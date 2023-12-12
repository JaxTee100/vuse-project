import { Children, createContext, useContext, useState } from 'react'
import LOGO from '../assets/images/vuse-logo.png'
import {
    LayoutDashboard,
    LucideLayoutDashboard
    
} from 'lucide-react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";



export default function Sidebar({children, expanded, showSidebar}){
    const [open, setOpen] = useState(false)
    return(
        <aside className={`bg-[#292D32] h-full ${showSidebar ? 'ml-0' : 'ml-[-300px]'} lg:ml-0 w-[275px] lg:hidden'}  fixed top-0 left-0  overflow-y-scroll overflow-x-hidden shadow-[2px_2px_4px_4px_#1E2025]`}>
            <nav className={`border-3 border-blue-500 `}>
                <div className={`flex items-center space-x-4 p-4 sticky top-0 left-0 bg-[#292D32] w-full`}>
                    <img 
                        src={LOGO} 
                        alt='logo'
                        className={`
                            w-[40px] h-[40px] border rounded-full
                        `}
                    />
                    <h2 
                        className={`overflow-hidden text-xl text-[#088391] font-semibold`}>Vuse Admin
                    </h2>
                </div>

                <div className='flex items-center  p-4 mt-4'>
                    <LucideLayoutDashboard className='text-[#088391]' />
                    <h2 className='ml-5 mr-auto text-[#088391] text-md font-normal'>Dashboard</h2>
                    <div>
                        { !open 
                            ? 
                            <MdKeyboardArrowDown 
                                onClick={() => setOpen(!open)} 
                                size={24} 
                                className='text-[#088391] text-[24px] font-semibold cursor-pointer'
                            /> 
                            : 
                            <MdKeyboardArrowUp 
                                size={24} 
                                onClick={() => setOpen(!open)} 
                                className='text-[#088391] text-[24px] font-semibold cursor-pointer'
                            />
                        }
                    </div>
                </div>
                {
                    open &&
                    <div className='flex px-4 py-2 shadow-[inset_-2px_-2px_4px_1px_gray,inset_4px_4px_4px_1px_black] rounded-full'>
                        <h1 className='text-[#088391] text-md font-normal'>OP</h1>
                        <h2 className='ml-5 text-[#088391] text-md font-normal'>Operational</h2>
                    </div>
                }
                    <ul>
                        {children}
                    </ul>
                
                
            </nav>
        </aside>
    )
}






export  function SidebarItem({icon, subtext, badge, dropdown, open, setOpen, expanded}){
    return(
        <li className='flex items-center hover:bg-zinc-600 px-2 py-2 cursor-pointer w-full'>
            <div className='text-zinc-200 text-[20px]'>
                {icon}
            </div>
            
            <span className={`overflow-hidden ml-4 mr-auto text-zinc-200 text-[14px]`}>
                {subtext}
            </span>
            {
                dropdown && 
                <div>
                    { !open 
                        ? 
                        <MdKeyboardArrowDown 
                            onClick={() => setOpen(!open)} 
                            size={20} 
                            className='text-zinc-200 text-[24px] font-semibold'
                        /> 
                        : 
                        <MdKeyboardArrowUp 
                            size={20} 
                            onClick={() => setOpen(!open)} 
                            className='text-zinc-200 text-[24px] font-semibold'
                        />}
                </div>
            }
        </li>
    )
    
}