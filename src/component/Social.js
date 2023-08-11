import React from 'react';
import {social} from '../data'

export default function Social() {
  return (
    <div>
      <ul className='flex space-x-6'>
      {social.map((item,index)=>{
        return(
            <li className='flex justify-center items-center text-accent' key={index}>
                <a className='text-basse' href={item.href}>
                    {item.icon}
                </a>
            </li>
        )
      })}
      </ul>
    </div>
  )
}
