import Link from 'next/link'
// eslint-disable-next-line no-use-before-define
import React from 'react'
import { IconType } from 'react-icons'

interface ServiceProps {
  title: string
  icon: IconType
  link: string
}

export function Services(props: ServiceProps) {
  return (
    <Link href={props.link} className="flex flex-col items-center">
      <div className="flex flex-col justify-center w-28 mb-3 items-center p-6 bg-service rounded-lg shadow-2xl">
        {React.createElement(props.icon, { size: 48, color: '#961B47' })}
      </div>
      <h1 className="text-title-service text-sm font-medium text-center mt-2">
        {props.title}
      </h1>
    </Link>
  )
}
