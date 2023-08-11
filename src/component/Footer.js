import React from 'react'
//import social data
import { social } from '../data';
import logo from '../assets/img/logo.svg'
export default function Footer() {
    return (
        <footer className='bg-tertiary py-12'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center justify-between lg:flex-row space-y-6 lg:space-y-0'>
                <div className='flex space-x-6 items-center justify-center'>
                    {/* social icons */}
                    {social.map((item, i) => {
                        const { href, icon } = item;
                        return (
                            <a className='text-accent text-base' href={href} key={i}>{icon}</a>
                        )
                    })}
                </div>
                
                    <div>
                        <img src={logo} alt='' />
                    </div>
                    <p>& Copy: 2023 Awadhesh Yadav. All right reserved.</p>

                
                </div>
            </div>
        </footer>
    )
}
