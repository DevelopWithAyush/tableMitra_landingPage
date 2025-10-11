"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className='container mx-auto max-w-[88rem] grid grid-cols-12  gap-x-[60px] mt-[150px] '>
            <div className='col-span-12 md:col-span-4 flex flex-col items-start justify-between '>
                <div className='flex flex-col items-start justify-start gap-y-3 '>

                    <h1 className='text-[38px] font-dmSans font-semibold leading-[45px] text-balance text-[#0A0A0A]'>Frequently Asked Questions</h1>
                    <p className='text-[18px] font-inter text-[#4D4D4D] leading-[25px]  max-w-[582px]'>
                        Get answers to common questions about TableMitra's automation features.
                    </p>
                </div>
                <div className='flex flex-col items-center  justify-start gap-y-[30px] p-10 bg-[#FFE7DD] rounded-[16px] '>
                    <div className='flex flex-col items-center justify-center p-[14px] rounded-full border border-solid border-[#0A0A0A] bg-white shadow-sm'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <g clip-path="url(#clip0_0_1286)">
                                <g filter="url(#filter0_d_0_1286)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.6667 14.0002C25.6667 20.4435 20.4433 25.6668 14 25.6668C7.55669 25.6668 2.33334 20.4435 2.33334 14.0002C2.33334 7.55684 7.55669 2.3335 14 2.3335C20.4433 2.3335 25.6667 7.55684 25.6667 14.0002ZM14 9.04183C13.2751 9.04183 12.6875 9.62946 12.6875 10.3543C12.6875 10.8376 12.2958 11.2293 11.8125 11.2293C11.3293 11.2293 10.9375 10.8376 10.9375 10.3543C10.9375 8.66296 12.3086 7.29183 14 7.29183C15.6914 7.29183 17.0625 8.66296 17.0625 10.3543C17.0625 11.1836 16.7317 11.9375 16.1968 12.4881C16.0892 12.5989 15.9865 12.7015 15.8885 12.7994C15.6367 13.051 15.4161 13.2714 15.2226 13.5201C14.967 13.8484 14.875 14.0897 14.875 14.2918V15.1668C14.875 15.6501 14.4833 16.0418 14 16.0418C13.5168 16.0418 13.125 15.6501 13.125 15.1668V14.2918C13.125 13.5274 13.4809 12.9087 13.8415 12.4452C14.1084 12.1023 14.4439 11.7676 14.7161 11.4959C14.7982 11.4139 14.8746 11.3377 14.9416 11.2687C15.172 11.0315 15.3125 10.7102 15.3125 10.3543C15.3125 9.62946 14.7249 9.04183 14 9.04183ZM14 19.8335C14.6443 19.8335 15.1667 19.3112 15.1667 18.6668C15.1667 18.0225 14.6443 17.5002 14 17.5002C13.3557 17.5002 12.8333 18.0225 12.8333 18.6668C12.8333 19.3112 13.3557 19.8335 14 19.8335Z" fill="#0A0A0A" />
                                    <path d="M14.0003 2.8335C20.1674 2.83367 25.1664 7.83342 25.1664 14.0005C25.1662 20.1674 20.1673 25.1663 14.0003 25.1665C7.83326 25.1665 2.83352 20.1675 2.83334 14.0005C2.83334 7.83331 7.83315 2.8335 14.0003 2.8335ZM14.0003 17.0005C13.08 17.0005 12.3335 17.7462 12.3333 18.6665C12.3333 19.587 13.0799 20.3335 14.0003 20.3335C14.9207 20.3333 15.6664 19.5869 15.6664 18.6665C15.6662 17.7463 14.9206 17.0007 14.0003 17.0005ZM14.0003 6.7915C12.0329 6.7915 10.438 8.38664 10.4378 10.354C10.4378 11.1134 11.0534 11.729 11.8128 11.729C12.5721 11.7288 13.1878 11.1133 13.1878 10.354C13.188 9.90542 13.5517 9.5415 14.0003 9.5415C14.4488 9.54168 14.8127 9.90553 14.8128 10.354C14.8128 10.5747 14.7266 10.7729 14.5833 10.9204C14.5196 10.9861 14.4455 11.0594 14.3626 11.1421C14.0945 11.4097 13.736 11.7664 13.4466 12.1382C13.0561 12.64 12.6254 13.3666 12.6253 14.2915V15.1665C12.6253 15.9259 13.2409 16.5415 14.0003 16.5415C14.7596 16.5413 15.3753 15.9258 15.3753 15.1665V14.2915C15.3754 14.2493 15.393 14.1161 15.6175 13.8276C15.7886 13.6079 15.9855 13.4087 16.2415 13.1528C16.3392 13.0553 16.4445 12.9502 16.555 12.8364C17.1769 12.1963 17.5628 11.3187 17.5628 10.354C17.5627 8.38675 15.9676 6.79168 14.0003 6.7915Z" stroke="#0A0A0A" />
                                </g>
                            </g>
                            <defs>
                                <filter id="filter0_d_0_1286" x="-4.66666" y="-1.6665" width="37.3333" height="37.3335" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="3" />
                                    <feGaussianBlur stdDeviation="3.5" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.4 0 0 0 0 0.1 0 0 0 0 0 0 0 0 0.12 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1286" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1286" result="shape" />
                                </filter>
                                <clipPath id="clip0_0_1286">
                                    <rect width="28" height="28" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className='flex flex-col items-center justify-start'>
                        <h3 className='text-[28px] font-dmSans font-medium leading-[36px] text-[#0A0A0A]'>
                            Still have questions?
                        </h3>
                        <p className='text-[18px] font-inter text-[#333] leading-[25px]  mt-[12px] text-center '>
                            Book a demo call and we'll answer all your questions while showing you thesystem in action
                        </p>
                        <button className=' w-full font-plusjakartaSans font-bold text-[16px] border border-solid px-4 py-3 rounded-xl bg-[#FE5F1E] text-[#fff] mt-6 '>
                            <Link href={"/contact"}>
                                Ask a Question
                            </Link>
                        </button>
                    </div>

                </div>

            </div>
            <div className='col-span-12 md:col-span-8 w-full flex flex-col items-start justify-start gap-y-4'>
                <FAQCard index={0} isOpen={openIndex === 0} toggleFAQ={toggleFAQ} title="What is TableMitra?" description="TableMitra is a platform that helps you automate your restaurant operations." />
                <FAQCard index={1} isOpen={openIndex === 1} toggleFAQ={toggleFAQ} title="What is TableMitra?" description="TableMitra is a platform that helps you automate your restaurant operations." />
                <FAQCard index={2} isOpen={openIndex === 2} toggleFAQ={toggleFAQ} title="What is TableMitra?" description="TableMitra is a platform that helps you automate your restaurant operations." />
                <FAQCard index={3} isOpen={openIndex === 3} toggleFAQ={toggleFAQ} title="What is TableMitra?" description="TableMitra is a platform that helps you automate your restaurant operations." />
                <FAQCard index={4} isOpen={openIndex === 4} toggleFAQ={toggleFAQ} title="What is TableMitra?" description="TableMitra is a platform that helps you automate your restaurant operations." />
                <FAQCard index={5} isOpen={openIndex === 5} toggleFAQ={toggleFAQ} title="What is TableMitra?" description="TableMitra is a platform that helps you automate your restaurant operations." />
                <FAQCard index={6} isOpen={openIndex === 6} toggleFAQ={toggleFAQ} title="What is TableMitra?" description="TableMitra is a platform that helps you automate your restaurant operations." />

            </div>

        </section>
    )
}





export default FAQ


const FAQCard = ({ index, isOpen, toggleFAQ, title, description }) => {
    return (
        <motion.div
            layout
            className='flex w-full flex-row items-start justify-between gap-x-4'
        >
            <motion.div
                layout
                className='p-[30px] w-full flex flex-col items-start justify-start bg-white rounded-[16px] flex-1 overflow-hidden shadow-xs'
            >
                <motion.div
                    layout
                    className='w-full cursor-pointer'
                    onClick={() => toggleFAQ(index)}
                >
                    <h3 className='text-[18px]  font-dmSans font-medium leading-[25px] text-[#0A0A0A]'>{title}</h3>
                </motion.div>

                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            layout
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                                duration: 0.3,
                                ease: [0.4, 0, 0.2, 1]
                            }}
                            className='w-full overflow-hidden'
                        >
                            <div className='w-full h-[1px] bg-[#FE5F1E] my-5' />
                            <p className='text-[16px] font-inter text-[#333] leading-[23ÑÑpx]'>{description}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            <motion.div
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1]
                }}
                className='p-[10px] my-[10px] cursor-pointer hover:shadow-md bg-black rounded-full flex-shrink-0'
                onClick={() => toggleFAQ(index)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2L8 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 8L14 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </motion.div>
        </motion.div>
    )
}