import React from 'react'
import { Sidebar } from '../sections'
import { SidebarItem } from '../sections/SidebarSection'
import { MdOutlineChat, MdWidgets, MdDashboard, MdOutlineLock, MdOutlineErrorOutline, MdOutlineAccessTime, MdOutlinePeopleAlt, MdOutlinePermMedia, MdContacts, MdHelpOutline, MdOutlineSmartDisplay, MdDriveFileMoveOutline } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5"
import { AiOutlineTool } from "react-icons/ai";
import { FaBorderTopLeft } from "react-icons/fa6";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { TbLetterF } from "react-icons/tb";
import { GrDocument } from "react-icons/gr";

const SidebarPart = ({expanded, showSidebar}) => {
  return (
    
    <div className='flex'>
        <div className='lg:hidden'>
            <Sidebar expanded={expanded} showSidebar={showSidebar}>
                <div className=' mt-4 p-4 space-y-4'>
                    <h2 className='text-zinc-400  text-[0.8rem]'>App</h2>
                    <SidebarItem icon={<MdContacts />} subtext='Contacts' />
                    <SidebarItem icon={<MdOutlineChat />} subtext='Chat' />
                </div>
                <div className='mt-4 p-4 space-y-4'>
                    <h2 className='text-zinc-400 text-[0.8rem]'>System & User Interface</h2>
                    <SidebarItem icon={<IoColorPaletteOutline />} subtext='Color' />
                    <SidebarItem icon={<MdOutlinePermMedia />} subtext='Icons' />
                    <SidebarItem icon={<MdHelpOutline />} subtext='Helpers' />
                    <SidebarItem icon={<FaBorderTopLeft />} subtext='Border Radius' />
                    <SidebarItem icon={'TT'} subtext='Text & Typography' />
                    <SidebarItem icon={<MdOutlineSmartDisplay />} subtext='Motion' />
                    <SidebarItem icon={'PR'} subtext='Programmatic Scrolling' />
                    <SidebarItem icon={<MdDriveFileMoveOutline />} subtext='Forms' />
                </div>
                <div className='mt-4 p-4 space-y-4'>
                    <h2 className='text-zinc-400 text-[0.8rem] border'>Pages</h2>
                    <SidebarItem icon={<MdOutlinePeopleAlt />} subtext='Profile' />
                    <SidebarItem icon={<MdOutlineAccessTime />} subtext='Coming Soon' />
                    <SidebarItem icon={<AiOutlineTool />} subtext='Maintenance' />
                    <SidebarItem icon={<MdOutlineLock />} subtext='Authentication' dropdown/>
                    <SidebarItem icon={<MdOutlineErrorOutline />} subtext='Error' dropdown/>
                </div>
                <div className='mt-4 p-4 space-y-4'>
                    <h2 className='text-zinc-400 text-[0.8rem]'>UI Component</h2>
                    <SidebarItem icon={<HiOutlineChartSquareBar />} subtext='Charts' />
                    <SidebarItem icon={<MdWidgets />} subtext='Widgets' />
                    <SidebarItem icon={<MdDashboard/>} subtext='Vuetify' />
                </div>
                <div className='mt-4 p-4 space-y-4'>
                    <SidebarItem icon={<TbLetterF /> } subtext={'Directives'}  />
                </div>
                <div className='mt-4 p-4 space-y-4'>
                    <SidebarItem icon={<GrDocument /> } subtext={'Documentation'}  />
                </div>
                
            </Sidebar>
        </div>

        <div className='hidden lg:flex fixed top-0 left-0  overflow-y-scroll border-3 border-green-600'>
            <Sidebar expanded={expanded} showSidebar={showSidebar}>
                <div className=' mt-4 p-4 space-y-4'>
                    <h2 className='text-zinc-400  text-[0.8rem]'>App</h2>
                    <SidebarItem icon={<MdContacts />} subtext='Contacts' />
                    <SidebarItem icon={<MdOutlineChat />} subtext='Chat' />
                </div>
                <div className='mt-4 p-4 space-y-4'>
                    <h2 className='text-zinc-400 text-[0.8rem]'>System & User Interface</h2>
                    <SidebarItem icon={<IoColorPaletteOutline />} subtext='Color' />
                    <SidebarItem icon={<MdOutlinePermMedia />} subtext='Icons' />
                    <SidebarItem icon={<MdHelpOutline />} subtext='Helpers' />
                    <SidebarItem icon={<FaBorderTopLeft />} subtext='Border Radius' />
                    <SidebarItem icon={'TT'} subtext='Text & Typography' />
                    <SidebarItem icon={<MdOutlineSmartDisplay />} subtext='Motion' />
                    <SidebarItem icon={'PR'} subtext='Programmatic Scrolling' />
                    <SidebarItem icon={<MdDriveFileMoveOutline />} subtext='Forms' />
                </div>
                <div className='mt-4 p-4 space-y-4'>
                    <h2 className='text-zinc-400 text-[0.8rem]'>Pages</h2>
                    <SidebarItem icon={<MdOutlinePeopleAlt />} subtext='Profile' />
                    <SidebarItem icon={<MdOutlineAccessTime />} subtext='Coming Soon' />
                    <SidebarItem icon={<AiOutlineTool />} subtext='Maintenance' />
                    <SidebarItem icon={<MdOutlineLock />} subtext='Authentication' dropdown/>
                    <SidebarItem icon={<MdOutlineErrorOutline />} subtext='Error' dropdown/>
                </div>
                <div className='mt-4 p-4 space-y-4'>
                    <h2 className='text-zinc-400 text-[0.8rem]'>UI Component</h2>
                    <SidebarItem icon={<HiOutlineChartSquareBar />} subtext='Charts' />
                    <SidebarItem icon={<MdWidgets />} subtext='Widgets' />
                    <SidebarItem icon={<MdDashboard/>} subtext='Vuetify' />
                </div>
                <div className='mt-4 p-4 space-y-4'>
                    <SidebarItem icon={<TbLetterF /> } subtext={'Directives'}  />
                </div>
                <div className='mt-4 p-4 space-y-4'>
                    <SidebarItem icon={<GrDocument /> } subtext={'Documentation'}  />
                </div>
                
            </Sidebar>
        </div>
        
    </div>
  )
}

export default SidebarPart
