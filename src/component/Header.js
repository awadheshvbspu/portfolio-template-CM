import React, { useEffect, useState } from 'react';
import logo from '../assets/img/logo.svg'
import Nav from '../component/Nav.js'
import NavMobile from '../component/NavMobile';
import Social from './Social';


export default function Header() {
    const [bg,setBg] = useState(false);

    useEffect(() =>{
   window.addEventListener('scroll', () =>{
    return window.scrollY >50 ? setBg(true) : setBg(false)
   })
    },[])
  return (
    <>
        <header className={`${bg ? 'bg-tertiary h-20' :'h-24'} flex items-center fixed top-0 w-full text-white z-10 transition-all duraation-300`}>
            <div className='container mx-auto h-full flex items-center justify-between'>
                <a href='#' >
                    <img src={logo} alt='' />
                </a>
                <div className='hidden lg:block'>
                    <Nav/>
                </div>
                <div className='hidden lg:block'>
                    <Social/>
                </div>
                <div className='lg:hidden'>
                    <NavMobile/>
                </div>
            </div>
        </header>
    </>
  )
}
