import React from 'react'
import { SlOptionsVertical } from "react-icons/sl";
import SNICKERS from '../assets/images/snickers.avif';
import ASIAN from '../assets/images/images.jpeg'
import ONION from '../assets/images/onion.jpg'
import LADY from '../assets/images/lady.jpeg'
import { IoMdHeart } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";

const ItemsSection = () => {
  return (
    <div className=' grid grid-cols-1 grid-rows-7 md:grid-cols-2 lg:grid-cols-7 gap-4 mt-4'>
        {/* first column */}
      <div className='col-span-3 row-span-1 h-fit  md:col-span-2 px-6 py-4 shadow-[-2px_-2px_4px_1px_gray,4px_4px_4px_1px_black] w-full'>
        <div className='flex justify-between items-center pb-4 '>
            <h2 className='text-xl text-white font-normal'>Latest Media</h2>
            <SlOptionsVertical className='text-white text-[20px]' />
        </div>
        <div className='mt-2  grid grid-cols-1 gap-4'>
            <div className='flex flex-wrap p-4 rounded-lg shadow-[-2px_-2px_4px_1px_gray,4px_4px_4px_1px_black] hover:shadow-[inset_0_-2px_4px_gray,inset_4px_1px_1px_1px_black] '>
                <img src={SNICKERS} alt='snickers' width={140} height={92} className='rounded-md mr-2'/>
                <div className='mr-auto'>
                    <h2 className='text-zinc-200 text-md'>Mary Beveridge</h2>
                    <p className='text-zinc-300 text-sm'>Nov 29, 2023</p>
                </div>
                <div className='text-white text-[14px] bg-green-600 p-2 h-6 flex items-center rounded-lg mt-3'>
                    Published
                </div>
            </div>
            <div className='flex flex-wrap p-4 rounded-lg shadow-[-2px_-2px_4px_1px_gray,4px_4px_4px_1px_black] hover:shadow-[inset_0_-2px_4px_gray,inset_4px_1px_1px_1px_black] '>
                <img src={SNICKERS} alt='snickers' width={140} height={92} className='rounded-md mr-2'/>
                <div className='mr-auto'>
                    <h2 className='text-zinc-200 text-md'>Mary Beveridge</h2>
                    <p className='text-zinc-300 text-sm'>Nov 29, 2023</p>
                </div>
                <div className='text-white text-[14px] bg-green-600 p-2 h-6 flex items-center rounded-lg mt-3'>
                    Published
                </div>
            </div>
            <div className='flex flex-wrap p-4 rounded-lg shadow-[-2px_-2px_4px_1px_gray,4px_4px_4px_1px_black] hover:shadow-[inset_0_-2px_4px_gray,inset_4px_1px_1px_1px_black] '>
                <img src={SNICKERS} alt='snickers' width={140} height={92} className='rounded-md mr-2'/>
                <div className='mr-auto'>
                    <h2 className='text-zinc-200 text-md'>Mary Beveridge</h2>
                    <p className='text-zinc-300 text-sm'>Nov 29, 2023</p>
                </div>
                <div className='text-white text-[14px] bg-green-600 p-2 h-6 flex items-center rounded-lg mt-3'>
                    Published
                </div>
            </div>
            <div className='flex flex-wrap p-4 rounded-lg shadow-[-2px_-2px_4px_1px_gray,4px_4px_4px_1px_black] hover:shadow-[inset_0_-2px_4px_gray,inset_4px_1px_1px_1px_black] '>
                <img src={SNICKERS} alt='snickers' width={140} height={92} className='rounded-md mr-2'/>
                <div className='mr-auto'>
                    <h2 className='text-zinc-200 text-md'>Mary Beveridge</h2>
                    <p className='text-zinc-300 text-sm'>Nov 29, 2023</p>
                </div>
                <div className='text-white text-[14px] bg-green-600 p-2 h-6 flex items-center rounded-lg mt-3'>
                    Published
                </div>
            </div>
            <div className='flex flex-wrap p-4 rounded-lg shadow-[-2px_-2px_4px_1px_gray,4px_4px_4px_1px_black] hover:shadow-[inset_0_-2px_4px_gray,inset_4px_1px_1px_1px_black] '>
                <img src={SNICKERS} alt='snickers' width={140} height={92} className='rounded-md mr-2'/>
                <div className='mr-auto'>
                    <h2 className='text-zinc-200 text-md'>Mary Beveridge</h2>
                    <p className='text-zinc-300 text-sm'>Nov 29, 2023</p>
                </div>
                <div className='text-white text-[14px] bg-green-600 p-2 h-6 flex items-center rounded-lg mt-3'>
                    Published
                </div>
            </div>
            <div className='flex flex-wrap p-4 rounded-lg shadow-[-2px_-2px_4px_1px_gray,4px_4px_4px_1px_black] hover:shadow-[inset_0_-2px_4px_gray,inset_4px_1px_1px_1px_black] '>
                <img src={SNICKERS} alt='snickers' width={140} height={92} className='rounded-md mr-2'/>
                <div className='mr-auto'>
                    <h2 className='text-zinc-200 text-md'>Mary Beveridge</h2>
                    <p className='text-zinc-300 text-sm'>Nov 29, 2023</p>
                </div>
                <div className='text-white text-[14px] bg-green-600 p-2 h-6 flex items-center rounded-lg mt-3'>
                    Published
                </div>
            </div>
            
            
        </div>
      </div>

      {/* second column */}
      <div className='flex flex-col space-y-8 col-span-3 row-span-2'>
        {/* box1 */}
        <div className='shadow-[-2px_-2px_4px_1px_gray,4px_4px_4px_1px_black] py-6'>
            <div className='flex justify-start items-center px-4'>
                <div className='mr-2'>
                    <img src={ASIAN} alt='asian' width={40} height={40} className='rounded-full w-[40px] h-[40px]'/>
                </div>
                <h2 className='text-white text-lg mr-auto'>Beau Liverside</h2>
                <SlOptionsVertical className='text-white text-[20px]' />

            </div>
            <div className='w-full mt-6 '>
                <img src={ONION} alt='onion' className='w-full'/>
            </div>
            <div className='mt-4 px-4'>
                <h2 className='text-2xl text-zinc-200'>Salad Recipes</h2>
                <p className='text-md text-zinc-300 mt-2'>Nov 29, 2023</p>
                <p className='mt-6 text-zinc-300 text-sm max-w-md'>Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.</p>
                <p className='flex items-center mt-6  '>
                    <IoMdHeart className='text-red-600 text-[20px] mr-2'/>
                    <span className='text-white text-md mr-4'>213 Likes</span>
                    <MdOutlineMessage className='text-white mr-2'/>
                    <span className='text-white'>123 Comments</span>
                </p>
            </div>
        </div>
        {/* box2 */}
        <div className='mt-4 shadow-[-2px_-2px_4px_1px_gray,4px_4px_4px_1px_black] py-6 px-4'>
            <h2 className='text-zinc-200 text-lg'>Task Status</h2>
            <p className='text-sm text-zinc-400 mt-2'>On Going</p>
            <div className='shadow-[-2px_-2px_4px_1px_gray,4px_4px_4px_1px_black] py-6 px-2 space-y-6 mt-2'>
                <div className=''>
                    <div className='w-full flex justify-between items-center'>
                        <p className='text-zinc-200'>Sketch File</p>
                        <p className='text-zinc-200'>4 weeks</p>
                    </div>
                    <div className='flex w-full h-[3px]'>
                        <div className='w-9/12 h-full bg-[#0097A7] '></div>
                        <div className='w-3/12 h-full bg-[#1D4C55]'></div>
                    </div>
                </div>
                <div className=''>
                    <div className='w-full flex justify-between items-center'>
                        <p className='text-zinc-200'>Sketch File</p>
                        <p className='text-zinc-200'>4 weeks</p>
                    </div>
                    <div className='flex w-full h-[3px]'>
                        <div className='w-9/12 h-full bg-[#0097A7] '></div>
                        <div className='w-3/12 h-full bg-[#1D4C55]'></div>
                    </div>
                </div>
                <div className=''>
                    <div className='w-full flex justify-between items-center'>
                        <p className='text-zinc-200'>Sketch File</p>
                        <p className='text-zinc-200'>4 weeks</p>
                    </div>
                    <div className='flex w-full h-[3px]'>
                        <div className='w-9/12 h-full bg-[#0097A7] '></div>
                        <div className='w-3/12 h-full bg-[#1D4C55]'></div>
                    </div>
                </div>
            </div>
            
            
        </div>
        {/* box3 */}
        <div>
            <p className='text-zinc-400'>Upcoming</p>
            <div className='shadow-[-2px_-2px_4px_1px_gray,4px_4px_4px_1px_black] py-6 px-4 mt-2'>
                <div className='shadow-[-2px_-2px_4px_1px_gray,4px_4px_4px_1px_black] py-6 px-2 space-y-6 mt-2'>
                    <div className=''>
                        <div className='w-full flex justify-between items-center'>
                            <p className='text-zinc-200'>Sketch File</p>
                            <p className='text-zinc-200'>4 weeks</p>
                        </div>
                        <div className='flex w-full h-[3px]'>
                            <div className='w-9/12 h-full bg-[#0097A7] '></div>
                            <div className='w-3/12 h-full bg-[#1D4C55]'></div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='w-full flex justify-between items-center'>
                            <p className='text-zinc-200'>Sketch File</p>
                            <p className='text-zinc-200'>4 weeks</p>
                        </div>
                        <div className='flex w-full h-[3px]'>
                            <div className='w-9/12 h-full bg-[#0097A7] '></div>
                            <div className='w-3/12 h-full bg-[#1D4C55]'></div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='w-full flex justify-between items-center'>
                            <p className='text-zinc-200'>Sketch File</p>
                            <p className='text-zinc-200'>4 weeks</p>
                        </div>
                        <div className='flex w-full h-[3px]'>
                            <div className='w-9/12 h-full bg-[#0097A7] '></div>
                            <div className='w-3/12 h-full bg-[#1D4C55]'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>

        </div>
      </div>
      {/* third column */}
      <div className='col-span-2 lg:col-span-2 flex flex-col gap-8'>
        <div className='shadow-[-2px_-2px_4px_1px_gray,4px_4px_4px_1px_black] p-4'>
            <div className='flex justify-between items-center'>
                <h2 className='text-zinc-400'>Tickets</h2>
                <div className='bg-[#0097A7] rounded-full text-[10px] text-white px-4 py-1'> 3 ACTIVE TASKS</div>
                <div className='bg-[#272727] rounded-full text-[10px] text-white px-4 py-1'>2 COMPLETED TASKS</div>
            </div>
            <div className='mt-4 p-2 shadow-[-2px_-2px_4px_1px_gray,4px_4px_4px_1px_black]'>
                <p className='text-md text-zinc-500'>Add New</p>
            </div>
            <div className='flex flex-col  shadow-[-2px_-2px_4px_1px_gray,4px_4px_4px_1px_black] mt-4 py-4'>
                <div className='flex items-center px-2'>
                    <div className='bg-black border-2 border-white w-[20px] h-[20px] mr-2'></div>
                    <p className='mr-auto text-zinc-300 text-md'>[PRE-111]Logo Making</p>
                    <SlOptionsVertical className='font-bold text-zinc-300 text-lg'/>
                </div>
                <div className='flex items-center justfy-start mt-2'>
                    <div className='mr-4 bg-[#F06292] h-12 w-2'></div>
                    <p className='max-w-md text-zinc-300 text-sm'>Culpa sint aliqua adipisicing officia aliquip excepteur occaecat dolor velit culpa ullamco.</p>
                </div>
                <div className='bg-[#F06292] w-12 ml-5 mt-2 p-1 text-[10px] text-white font-semibold flex justify-center rounded-full'>UX/UI</div>
            </div>
            <div className='flex flex-col shadow-[-2px_-2px_4px_1px_gray,4px_4px_4px_1px_black] mt-4 py-4'>
                <div className='flex items-center px-2'>
                    <div className='bg-black border-2 border-white w-[20px] h-[20px] mr-2'></div>
                    <p className='mr-auto text-zinc-300 text-md'>[PRE-111]Logo Making</p>
                    <SlOptionsVertical className='font-bold text-zinc-300 text-lg'/>
                </div>
                <div className='flex items-center justfy-start mt-2'>
                    <div className='mr-4 bg-[#F06292] h-12 w-2'></div>
                    <p className='max-w-md text-zinc-300 text-sm'>Culpa sint aliqua adipisicing officia aliquip excepteur occaecat dolor velit culpa ullamco.</p>
                </div>
                <div className='bg-[#F06292] w-12 ml-5 mt-2 p-1 text-[10px] text-white font-semibold flex justify-center rounded-full'>UX/UI</div>
            </div>
            <div className='flex flex-col shadow-[-2px_-2px_4px_1px_gray,4px_4px_4px_1px_black] mt-4 py-4'>
                <div className='flex items-center px-2'>
                    <div className='bg-black border-2 border-white w-[20px] h-[20px] mr-2'></div>
                    <p className='mr-auto text-zinc-300 text-md'>[PRE-111]Logo Making</p>
                    <SlOptionsVertical className='font-bold text-zinc-300 text-lg'/>
                </div>
                <div className='flex items-center justfy-start mt-2'>
                    <div className='mr-4 bg-[#F06292] h-12 w-2'></div>
                    <p className='max-w-md text-zinc-300 text-sm'>Culpa sint aliqua adipisicing officia aliquip excepteur occaecat dolor velit culpa ullamco.</p>
                </div>
                <div className='bg-[#F06292] w-12 ml-5 mt-2 p-1 text-[10px] text-white font-semibold flex justify-center rounded-full'>UX/UI</div>
            </div>
            <div className='flex flex-col shadow-[-2px_-2px_4px_1px_gray,4px_4px_4px_1px_black] mt-4 py-4'>
                <div className='flex items-center px-2'>
                    <div className='bg-black border-2 border-white w-[20px] h-[20px] mr-2'></div>
                    <p className='mr-auto text-zinc-300 text-md'>[PRE-111]Logo Making</p>
                    <SlOptionsVertical className='font-bold text-zinc-300 text-lg'/>
                </div>
                <div className='flex items-center justfy-start mt-2'>
                    <div className='mr-4 bg-[#F06292] h-12 w-2'></div>
                    <p className='max-w-md text-zinc-300 text-sm'>Culpa sint aliqua adipisicing officia aliquip excepteur occaecat dolor velit culpa ullamco.</p>
                </div>
                <div className='bg-[#F06292] w-12 ml-5 mt-2 p-1 text-[10px] text-white font-semibold flex justify-center rounded-full'>UX/UI</div>
            </div>
        </div>
        <div className='shadow-[-2px_-2px_4px_1px_gray,4px_4px_4px_1px_black] p-4'>
            <div>
                <h2>Member</h2>
                <div className='shadow-[inset_-2px_-2px_4px_1px_gray,inset_4px_4px_4px_1px_black] p-3 mt-2 text-zinc-400'> Search </div>
                <div className='mt-2 flex flex-col'>
                    <div className='flex items-center py-3'>
                        <img src={LADY} alt='lady' className='w-[40px] h-[40px] rounded-full mr-2' />
                        <div className='flex flex-col mr-auto'>
                            <h3 className='text-zinc-200'>Camelia Lopez</h3>
                            <p className='text-zinc-300 text-sm'>Network Engineer</p>
                        </div>
                        <div className='w-[32px] h-[32px] rounded-full shadow-[-1px_-1px_2px_1px_gray,1px_1px_2px_1px_black] text-green-500 text-[20px] font-semibold flex items-center justify-center'>+</div>
                    </div>
                    <div className='flex items-center py-3'>
                        <img src={LADY} alt='lady' className='w-[40px] h-[40px] rounded-full mr-2' />
                        <div className='flex flex-col mr-auto'>
                            <h3 className='text-zinc-200'>Camelia Lopez</h3>
                            <p className='text-zinc-300 text-sm'>Network Engineer</p>
                        </div>
                        <div className='w-[32px] h-[32px] rounded-full shadow-[-1px_-1px_2px_1px_gray,1px_1px_2px_1px_black] text-green-500 text-[20px] font-semibold flex items-center justify-center'>+</div>
                    </div>
                    <div className='flex items-center py-3'>
                        <img src={LADY} alt='lady' className='w-[40px] h-[40px] rounded-full mr-2' />
                        <div className='flex flex-col mr-auto'>
                            <h3 className='text-zinc-200'>Camelia Lopez</h3>
                            <p className='text-zinc-300 text-sm'>Network Engineer</p>
                        </div>
                        <div className='w-[32px] h-[32px] rounded-full shadow-[-1px_-1px_2px_1px_gray,1px_1px_2px_1px_black] text-green-500 text-[20px] font-semibold flex items-center justify-center'>+</div>
                    </div>
                    <div className='flex items-center py-3'>
                        <img src={LADY} alt='lady' className='w-[40px] h-[40px] rounded-full mr-2' />
                        <div className='flex flex-col mr-auto'>
                            <h3 className='text-zinc-200'>Camelia Lopez</h3>
                            <p className='text-zinc-300 text-sm'>Network Engineer</p>
                        </div>
                        <div className='w-[32px] h-[32px] rounded-full shadow-[-1px_-1px_2px_1px_gray,1px_1px_2px_1px_black] text-green-500 text-[20px] font-semibold flex items-center justify-center'>+</div>
                    </div>
                    <div className='flex items-center py-3'>
                        <img src={LADY} alt='lady' className='w-[40px] h-[40px] rounded-full mr-2' />
                        <div className='flex flex-col mr-auto'>
                            <h3 className='text-zinc-200'>Camelia Lopez</h3>
                            <p className='text-zinc-300 text-sm'>Network Engineer</p>
                        </div>
                        <div className='w-[32px] h-[32px] rounded-full shadow-[-1px_-1px_2px_1px_gray,1px_1px_2px_1px_black] text-green-500 text-[20px] font-semibold flex items-center justify-center'>+</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ItemsSection
