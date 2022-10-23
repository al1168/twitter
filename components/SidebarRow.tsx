import React, { SVGProps } from 'react'

interface Props {
    Icon:(props: SVGProps<SVGSVGElement>) => JSX.Element
    title : string
}

function SidebarRow({Icon,title}:Props) {
  return (
    <div className=' m-3 flex cursor-pointer max-w-fit items-center space-x-2 rounded-full px-4 py-3 hover:bg-gray-100 transition-all duration-200 group'>   
        <Icon className='h-6 w-6'/>
        <p className= "hidden group-hover:text-twitter md:inline-flex">{title}</p>
    </div>
  )
}

export default SidebarRow