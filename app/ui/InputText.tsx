import React from 'react'

interface InputTextProps {
    placeholder: string
    name: string
}
const InputText = (props: InputTextProps) => {
  return (
    <input 
        type="text" 
        name={props.name} 
        className="w-fit capitalize leading-none text-xs font-medium flex-1 px-4 py-2 rounded-md border outline-primary outline-1 focus:outline-primary focus:outline-2 ring-gray-300 placeholder:text-gray-400" 
        placeholder={props.placeholder}
    />
  )
}

export default InputText