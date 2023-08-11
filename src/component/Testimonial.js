import React from 'react';

// import compponent 
import TestimonialSlider from './TestimonialSlider';

export default function Testimonial() {
  return (
    <div id='testimonial' className='section bg-secondary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
        <h2 className='section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block'>What other people say</h2>
        <p className='subtitle'>Lorem ipsum dolor sit amet consecteur adipiscing elit.Quasi et blanditiis totam architecto veritatis at, repudaindae sint id placeat asppernatur.</p>
        </div>
        <TestimonialSlider/>
      </div>
    </div>
  )
}
