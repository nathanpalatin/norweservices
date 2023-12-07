import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'

interface ServiceProps {
   title: string;
   icon: IconType;
   link: string;
 }
 

export function Services(props: ServiceProps) {
   return (
      <Link href={props.link} target="_parent" className='flex flex-col items-center'>
         <div className="flex flex-col justify-center w-32 items-center h-28 bg-service rounded-lg shadow-2xl">
         {React.createElement(props.icon, { size: 54, color: '#961B47' })}
         </div>
            <h1 className="text-title-service text-sm font-medium text-center mt-2">{props.title}</h1>
      </Link>
   )
}
