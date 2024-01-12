import React from 'react'

const WorkItem = ({year, title, duration, roles, roles1}) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
      <li className='mb-10 ml-4'>
        <div><br /></div>
        <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white'/>
        <p className='flex flex-wrap gap-4 flex-row items-cemter justift-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 front-semibold text-white bg-[#001b5e] rounded-md'>
            {year}
          </span>
          <span className='text-lg font-semibold text-[#001b5e]'>
            {title}
          </span>
          <span className='my-1 text-sm font-normal leading-none text-stone-800'>
            {duration}
          </span>
        </p>
        <p className='my-2 text-base font-normal text-stone-900'>{roles}</p>
       
        <p className='my-2 text-base font-normal text-stone-900'>{roles1}</p>
      
      </li>
      </ol>
    
  )
}

export default WorkItem

