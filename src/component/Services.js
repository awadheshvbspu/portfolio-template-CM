import React from 'react';

//import services
import { services } from '../data';

export default function Services() {
  return (
    <div id='services' className='section bg-tertiary'>
      <div className='flex flex-col items-center text-center'>
        <h2 className='section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block'>What to do for clients</h2>
        <p className='subtitle'>Lorem ipsum dolor sit amet consecteur adipiscing elit.Quasi et blanditiis totam architecto veritatis at, repudaindae sint id placeat asppernatur.</p>
      </div>
        {/* item grid */}
      <div  className='grid lg:grid-cols-4 gap-8 md:px-8 px-4'>
      {services.map((service,index)=>{
        const {icon, name, description} = service;
        return (
            <div className='bg-secondary p-6 rounded-2xl' key={index}>
                <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px] '>{icon}</div>
                <h4 className='text-xl font-medium mb-2'>{name}</h4>
                <p>{description}</p>
            </div>
        )
      })}
      </div>
    </div>
  )
}
