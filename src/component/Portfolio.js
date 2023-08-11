import React from 'react';
//import component
import Projects from './Projects';

export default function Portfolio() {
  return (
    <div id='portfolio' className='section bg-primary min-h-[1400px]'>
    <div className='container mx-auto'>
    <div className='flex flex-col items-center text-center'>
        <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>My latest work</h2>
        <p className='subtitle'>Lorem ipsum dolor, sit amet conscecuter adipscing vouptatius impedtit doloribus maxime aperium quibusdam.Lorem ipsum dolor, sit amet conscecuter adipscing vouptatius impedtit doloribus maxime aperium quibusdam. </p>
    </div>
        <Projects/>
    </div>
      
    </div>
  )
}
