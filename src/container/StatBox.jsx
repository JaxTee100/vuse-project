import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import { MdOutlineStorefront, MdPeople, MdOutlineInsertChart } from "react-icons/md";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { Stat } from '../components';
import { statBox } from '../constants';

const StatBox = () => {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 lg:px-0 py-4  rounded shadow-[-2px_-2px_9px_1px_gray,3px_3px_4px_1px_#1E2025] lg:shadow-none'>
      {
        statBox.map((stat) => (
          <Stat 
            key={stat.title}
            title={stat.title}
            value={stat.value}
            percentage={stat.percentage}
            icon={stat.icon}
            textColor={stat.textColor}
          />
        ))
      }
    </div>
  )
}

export default StatBox
