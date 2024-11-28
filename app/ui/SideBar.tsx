"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { side_bar_items } from '../models/data/side_bar_items'
import { get_current_title } from '../lib/get_current_title'

const SideBar = () => {
  const [active, setActive] = useState('pro_space')

  return (
    <div className='w-[30%] h-full bg-white flex flex-col items-center'>
        <div className='flex items-center flex-col gap-2'>
            <Image src='/logo.png' alt='logo' width={100} height={100} />
            
            <div className='flex flex-col items-center gap-2'>
                <Image src='/opa_logo.png' alt='logo' width={200} height={200} />
                <span className='text-lg text-center font-bold'>{get_current_title(active)}</span>
            </div>

            <div className='flex flex-col mt-[25%] w-full gap-5' key='testmskamk'>
                {
                  side_bar_items.map((item, index) => (
                    <>
                      <div className='flex flex-col items-center gap-2' 
                          key={item.side_item_id + index}
                          onClick={() => {
                            if (item.side_item_id !== 'logout') {setActive(item.side_item_id)}}}
                            
                      >
                          <div className='flex gap-2 items-center self-start cursor-pointer hover:scale-110 hover:transition-all hover:duration-200'>
                            <Image className='primary' src={item.icon} alt='folder' width={25} height={25} />
                            <span className={`text-sm text-center ${active === item.side_item_id ? 'font-bold ' : 'font-semibold'}`}>{item.title}</span>
                          </div>
                          {item.side_item_id !== 'logout' && <div className={'h-[0.1rem] w-[100%] bg-black'}/>}
                      </div>
                    </>
                  ))
                }

            </div>
        </div>

    </div>
  )
}

export default SideBar