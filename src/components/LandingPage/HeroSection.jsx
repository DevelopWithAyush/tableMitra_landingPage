import { HeroSectionSVG } from '@/vector'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
    return (
        <main className='container mx-auto max-w-[88rem] flex flex-col lg:flex-row mt-[100px] sm:mt-[140px] lg:mt-[200px] mb-[100px] sm:mb-[140px] lg:mb-[200px] items-center lg:items-start justify-between px-4 sm:px-6 lg:px-8 gap-8 lg:gap-12'>

            <section className='w-full lg:w-auto flex flex-col'>
                <div className=''>
                    <h1 className='text-[42px] sm:text-[52px] lg:text-[64px] text-[#0A0A0A] font-dmSans font-medium leading-[1.15] tracking-tight text-balance'>
                        Increase in-room dining.
                        Save time. Serve smarter.
                    </h1>
                </div>
                <p className='text-[#4D4D4D] font-inter text-[16px] sm:text-[18px] mt-4 sm:mt-[14px] max-w-full lg:max-w-[582px] text-balance'>
                    Digitise your entire in-room service flow and deliver faster.In Room Dining . Housekeeping . Laundry
                </p>

                <div className='hidden lg:flex flex-row items-center gap-x-3 sm:gap-x-4 lg:gap-x-6 mt-8 lg:mt-10'>
                    <button className='text-[#fff] font-inter text-[14px] sm:text-[16px] font-semibold text-center bg-[#FE5F1E] rounded-[12px] py-[12px] sm:py-[14px] px-4 sm:px-6 whitespace-nowrap'>
                        Let's Talk
                    </button>
                    <Link href="#why-tablemitra" className='text-[#FE5F1E] font-inter text-[14px] sm:text-[16px] font-semibold text-center border border-solid border-[#FE5F1E] rounded-[12px] py-[12px] sm:py-[14px] px-4 sm:px-6 whitespace-nowrap'>
                        Why TableMitra
                    </Link>
                </div>
                <div className='hidden lg:flex flex-row items-center justify-start mt-6 lg:mt-8 gap-x-4 sm:gap-x-6 flex-wrap gap-y-3'>
                    <div className='flex flex-row items-center justify-between gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none" className='flex-shrink-0'>
                            <path d="M8 1.83331L10.06 6.00665L14.6667 6.67998L11.3333 9.92665L12.12 14.5133L8 12.3466L3.88 14.5133L4.66667 9.92665L1.33334 6.67998L5.94 6.00665L8 1.83331Z" fill="#FE5F1E" stroke="#FE5F1E" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className='text-[13px] sm:text-[14px] font-inter font-normal whitespace-nowrap'>4.9/5 rating</p>
                    </div>
                    <div className='flex flex-row items-center justify-between gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className='flex-shrink-0'>
                            <path d="M10.6667 14V12.6667C10.6667 11.9594 10.3857 11.2811 9.88561 10.781C9.38552 10.281 8.70724 10 8 10H3.99999C3.29275 10 2.61447 10.281 2.11438 10.781C1.61428 11.2811 1.33333 11.9594 1.33333 12.6667V14" stroke="#FE5F1E" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5.99999 7.33333C7.47275 7.33333 8.66666 6.13943 8.66666 4.66667C8.66666 3.19391 7.47275 2 5.99999 2C4.52724 2 3.33333 3.19391 3.33333 4.66667C3.33333 6.13943 4.52724 7.33333 5.99999 7.33333Z" stroke="#FE5F1E" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.6667 14V12.6667C14.6662 12.0758 14.4696 11.5019 14.1076 11.0349C13.7456 10.5679 13.2388 10.2344 12.6667 10.0867" stroke="#FE5F1E" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.6667 2.08667C11.2403 2.23354 11.7487 2.56714 12.1118 3.03488C12.4748 3.50262 12.6719 4.07789 12.6719 4.67C12.6719 5.26212 12.4748 5.83739 12.1118 6.30513C11.7487 6.77287 11.2403 7.10647 10.6667 7.25334" stroke="#FE5F1E" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className='text-[13px] sm:text-[14px] font-inter font-normal whitespace-nowrap'>10+ Hotels</p>
                    </div>
                </div>
            </section>

            <div className='w-full lg:w-auto flex justify-center items-center scale-90 sm:scale-95 lg:scale-100 order-2 lg:order-3'>
                <HeroSectionSVG />
            </div>

            <div className='w-full flex flex-col items-center justify-center lg:hidden order-3 lg:order-2'>
                <div className='flex flex-row items-center gap-x-3 sm:gap-x-4 lg:gap-x-6 mt-0'>
                    <button className='text-[#fff] font-inter cursor-pointer text-[14px] sm:text-[16px] font-semibold text-center bg-[#FE5F1E] rounded-[12px] py-[12px] sm:py-[14px] px-4 sm:px-6 whitespace-nowrap'>
                        Let's Talk
                    </button>
                    <Link href="#why-tablemitra" className='text-[#FE5F1E] font-inter cursor-pointer text-[14px] sm:text-[16px] font-semibold text-center border border-solid border-[#FE5F1E] rounded-[12px] py-[12px] sm:py-[14px] px-4 sm:px-6 whitespace-nowrap'>
                        Why TableMitra
                    </Link>
                </div>
                <div className='flex flex-row items-center justify-start mt-6 sm:mt-8 gap-x-4 sm:gap-x-6 flex-wrap gap-y-3'>
                    <div className='flex flex-row items-center justify-between gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none" className='flex-shrink-0'>
                            <path d="M8 1.83331L10.06 6.00665L14.6667 6.67998L11.3333 9.92665L12.12 14.5133L8 12.3466L3.88 14.5133L4.66667 9.92665L1.33334 6.67998L5.94 6.00665L8 1.83331Z" fill="#FE5F1E" stroke="#FE5F1E" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className='text-[13px] sm:text-[14px] font-inter font-normal whitespace-nowrap'>4.9/5 rating</p>
                    </div>
                    <div className='flex flex-row items-center justify-between gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className='flex-shrink-0'>
                            <path d="M10.6667 14V12.6667C10.6667 11.9594 10.3857 11.2811 9.88561 10.781C9.38552 10.281 8.70724 10 8 10H3.99999C3.29275 10 2.61447 10.281 2.11438 10.781C1.61428 11.2811 1.33333 11.9594 1.33333 12.6667V14" stroke="#FE5F1E" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5.99999 7.33333C7.47275 7.33333 8.66666 6.13943 8.66666 4.66667C8.66666 3.19391 7.47275 2 5.99999 2C4.52724 2 3.33333 3.19391 3.33333 4.66667C3.33333 6.13943 4.52724 7.33333 5.99999 7.33333Z" stroke="#FE5F1E" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.6667 14V12.6667C14.6662 12.0758 14.4696 11.5019 14.1076 11.0349C13.7456 10.5679 13.2388 10.2344 12.6667 10.0867" stroke="#FE5F1E" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.6667 2.08667C11.2403 2.23354 11.7487 2.56714 12.1118 3.03488C12.4748 3.50262 12.6719 4.07789 12.6719 4.67C12.6719 5.26212 12.4748 5.83739 12.1118 6.30513C11.7487 6.77287 11.2403 7.10647 10.6667 7.25334" stroke="#FE5F1E" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className='text-[13px] sm:text-[14px] font-inter font-normal whitespace-nowrap'>10+ Hotels</p>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default HeroSection
