'use client'
import React from 'react'
import { Type } from 'typescript'

export default function Button({
  children,
  backgroundColor,
  color,
  disabled,
  shadow,
  size,
  onClick,
  type,
  border,
  border_size,
  hover,
  padding,
  margin
}: {
  children: React.ReactNode,
  backgroundColor?: string,
  color?: string,
  disabled?: boolean
  shadow?: string,
  size?: string,
  border?: string,
  border_size?: number,
  onClick: any,
  type?: 'submit' | 'reset' | 'button',
  hover?: string,
  padding?: string,
  margin?: string,
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`disabled:opacity-60 flex items-center justify-center gap-2
      ${color && `${color}`}
      ${backgroundColor ? `${backgroundColor}` : 'bg-primary-500'}
      ${border_size && `border-${border_size}`} 
      ${border && `border border-${border}`}  
      ${shadow && `shadow shadow-${shadow}-500`}
      ${size ? `${size}` : ''}
      ${hover && `${hover}`}
      ${padding ? `${padding}` : 'px-4 py-1.5'}
       ${margin && `${margin}`}
      '}
    text-lg
    font-semibold
    
    rounded-md
    disabled:transform-none transition-all duration-200 `}>{children}</button>
  )
}
//hover:scale-105 hover:opacity-80 focus:shadow-xl outline-0 focus:outline-0