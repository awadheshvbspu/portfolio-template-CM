import React from 'react';
// import image
import images from '../assets/img/about.webp'

export default function About() {
  return (
    <div className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
        <img src={images} alt='' className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'/>
        <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
            <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative brfore::opacity-40 before:-top-[2rem] before:hidden before:lg:block'>Jane Doe</h2>
            <p className='mb-4 text-accent'>Freelancer Web Developer</p>
            <hr className='mb-8 opacity-8'/>
            <p className='mb-8'>Lorem ipsum dolor, sit amet conscecuter adipscing vouptatius impedtit doloribus maxime aperium quibusdam.Lorem ipsum dolor, sit amet conscecuter adipscing vouptatius impedtit doloribus maxime aperium quibusdam. <br/>
            Lorem ipsum dolor, sit amet conscecuter adipscing vouptatius impedtit doloribus maxime aperium quibusdam.
            </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-accent-hover transition-all'>Contact me</button>
        </div>
        </div>
      </div>
    </div>
  )
}
