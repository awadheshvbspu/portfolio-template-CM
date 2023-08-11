import React, {useState} from 'react';

//import navigation data
import {navigation} from '../data';
//imoprt icons
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt3} from 'react-icons/hi';

import Social from './Social';

import {motion} from 'framer-motion';
import { Link } from 'react-scroll';


export default function NavMobile() { 
    const [isOpen, SetIsOpen] = useState(false);

   const circleVariants = {
        hidden: {
            scale:0
        },
        visible: {
            scale: 180,
            transition:{
                type:'spring',
                stiffness: 160,
                damping : 60,
            }
        }
    }

    const ulVariants = {
        hidden: {
            opacity :0
        },
        visible : {
            opacity :1,
            transition: {
                delay: 0.1
            }
        }
    }

  return (
    <div className='relative'>
    <div className='cursor-pointer text-white' onClick={()=> SetIsOpen(true)}>
   <HiOutlineMenuAlt3 className='w-8 h-8' />
    </div>
     {/* circle   */}
     <motion.div variants={circleVariants} initial='hidden' animate={isOpen ? 'visible' : 'hidden'} className='w-4 h-4 rounded-full bg-accent fixed top-0 right-0'></motion.div>

     {/* menu  */}
     <motion.ul variants={ulVariants} initial='hidden' animate={isOpen ? 'visible' : ''} className={`${isOpen ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-full flex flex-col justify-end items-center transition-all duration-300 overflow-hidden`}>
        <div className='cursor-pointer absolute top-8 right-8' onClick={()=>SetIsOpen(false)}>
       <AiOutlineClose className='w-8 h-8' />
        </div>
        {navigation.map((item,index) =>{
            return(
                <li key={index} className='mb-8'>
                    <Link to={item.href} smooth={true} duration={500} offset={-70} className='text-xl capitalize cursor-pointer'>{item.name}</Link>
                </li>
            )
        })}
     </motion.ul>
    </div>
  )
}
