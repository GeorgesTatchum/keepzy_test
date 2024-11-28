import React from 'react'
import Image from 'next/image'

interface InputSelectProps {
    name: string
    values: string[]
    label: string
    icon?: string
}

const InputSelect = (props: InputSelectProps) => {
  return (
    <div className="relative w-full border-2  border-primary rounded-md">
        <select name="pro_status" id="pro_status" className="w-full capitalize leading-none px-4 py-2 text-xs font-medium rounded-lg outline-primary outline-1 focus:outline-none focus:outline-0 ring-gray-300 appearance-none cursor-pointer">
            <option value="" className='cursor-pointer'>{props.label}</option>
            {props.values.map((value, index) => <option key={index} value={value} className='cursor-pointer'>{value}</option>)}
        </select>
        <Image 
        className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none " 
        src={props.icon ? props.icon : '/arrow_drop_down.svg'}
        alt='arrow_drop_down' 
        width={25} 
        height={20} 
        />
    </div>
  )
}

export default InputSelect