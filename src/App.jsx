import {useState } from 'react'
import { Navbar } from './components'
import './App.css'
import { ChartSection, ItemsSection, StatBox } from './container'
import SidebarPart from './container/SidebarPart'


function App() {
  const [expanded, setExpanded ] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false)


  return (
        <div className='flex gap-8  bg-[#292D32] relative'>
          <aside className={` h-screen fixed bg-[#292D32] z-10`}>
            <SidebarPart expanded={expanded} showSidebar={showSidebar}/>
          </aside>
          <main className={`w-full lg:w-auto p-6 border border-yellow-600 lg:ml-[280px] `}>
            <Navbar expanded={expanded} setExpanded={setExpanded} showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
            <section className='mt-8 '>
              <StatBox />
            </section>
            <section>
              <ChartSection />
            </section>
            <section>
              <ItemsSection />
            </section>
          </main>
        </div>
      

      
      
  )
}

export default App
