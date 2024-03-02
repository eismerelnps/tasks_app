'use client'
import React from 'react'
import Image from 'next/image';
import profile_avatar_default from '/public/profile_avatar_default.jpg'

export default function Avatar({ avatar_url, size }: { avatar_url: string, size: number }) {
  return (
    <div className={`relative w-${size} h-${size} min-w-${size} min-h-${size} z-0 `}>

      {
        avatar_url
          ?
          (
            <Image
              className='rounded-full'
              fill
              src={avatar_url}
              alt={`Avatar`}
            />
          )
          :
          (
            <Image
              className='rounded-full'
              fill
              src={profile_avatar_default}
              alt={`Avatar`}
            />
          )
      }
    </div>
  )
}