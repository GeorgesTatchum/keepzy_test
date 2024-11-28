'use client'

import React from 'react'
import Image from 'next/image'

interface InputDateProps {
    name: string;
    placeholder: string;
}
const InputDate = (props: InputDateProps) => {
  return (
    <div className="relative w-full border-2 border-primary rounded-md">
    <input 
        type="date" 
        name={props.name} 
        className="w-full capitalize leading-none text-xs font-medium flex-1 px-4 py-2 rounded-md border outline-primary outline-1 focus:outline-primary focus:outline-2 ring-gray-300 placeholder:text-gray-400 appearance-none" 
        placeholder={props.placeholder}
    />
    <Image 
    className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" 
    src={'/calendar_month.svg'}
    alt='calendar icon' 
    width={25} 
    height={20} 
    />
</div>
  )
}

export default InputDate