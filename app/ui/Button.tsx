import React from 'react'
import Image from 'next/image'

interface ButtonProps {
  onClick: () => void;
  className?: string;
  title: string;
  icon?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = (props: ButtonProps) => {
  return (
    <button 
        className={`bg-primary flex items-center justify-center gap-2 px-4 py-1 rounded-md h-8 ${props.className ? props.className : ''}`}
        type={props.type ? props.type : 'button'}
        
    >
        {props.icon && <Image src={props.icon.toString()} alt='archive' width={20} height={20} /> }
        <span className={`text-white text-base font-semibold text-center`}>{props.title}</span>
    </button>
  )
}

export default Button