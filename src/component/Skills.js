import React from 'react'
// import skill 
import { skills } from '../data'

export default function Skills() {
  return (
    <div className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-8 md:grid-flow-row'>
            {skills.map((item,i) =>{
                return(
                    <div className='flex items-center justify-center' key={i}>
                    <img src={item.image} alt='' />
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  )
}
