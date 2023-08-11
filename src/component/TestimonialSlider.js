import React from 'react';

//import testimoial data
import { testimonials } from '../data';

//import swiper react component
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../swiper.css';

//import required modules
// import { Autoplay, Pagination } from 'swiper';
import Autoplay from '../../node_modules/swiper/modules/autoplay.mjs';
import Pagination from '../../node_modules/swiper/modules/pagination.mjs';


export default function TestimonialSlider() {
    return (
        <>
            <Swiper pagination={{ clickable: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }} modules={[Autoplay, Pagination]} className='mySwiper'>
                {testimonials.map((item, i) => {
                    const { authorImg, authorText, authorName, authorPosition } = item;
                    return (
                        <SwiperSlide key={i}>
                            <div className='flex flex-col lg:flex-row gap-12 lg:gap-32'>
                                <div className='w-48 h-48 lg:w-[328px] lg:h-[328px]'>
                                    <img src={authorImg} alt='' className='rounded-2xl' />
                                </div>
                                <div className='flex flex-col max-w-3xl'>
                                    <h5 className='font-body text-2xl mb-8 italic font-normal'>{authorText}</h5>
                                    <div>
                                        <p className='text-lg text-accent'>{authorName}</p>
                                        <p>{authorPosition}</p>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}
