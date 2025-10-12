import { WhyTableStandOut } from '@/vector'
import React from 'react'

const WhyTableMitra = () => {

    const cardData = [
        {
            title: 'Call Free Operations',
            description: "Replace manual calls with automated digital requests."
        },
        {
            title: 'Effortless Setup',
            description: "QRs and dashboard up and running in less than 48 hours."
        },
        {
            title: 'Streamline Operations',
            description: "Eliminate manual errors with automated routing and tracking."
        },
        {
            title: 'Higher Guest Satisfaction',
            description: "Improve service metrics and boost your property ratings."
        },
    ]
    return (
        <section className='container max-w-[88rem] mx-auto pt-[70px] sm:pt-[100px] lg:pt-[150px] px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-start gap-y-[40px] sm:gap-y-[50px] lg:gap-y-[60px]'>
            <div className='flex flex-col items-center justify-center gap-y-[10px] sm:gap-y-[14px]'>
                <h1 className='text-[32px] sm:text-[36px] lg:text-[38px] font-dmSans font-semibold text-[#0A0A0A] text-center leading-[1.2]'>
                    Why TableMitra Stands Out
                </h1>
                <p className='text-[#4D4D4D] font-inter text-[16px] sm:text-[18px] font-normal text-center max-w-full sm:max-w-[586px] px-2'>
                    Smart solutions for modern hotels. Designed to enhance service, optimize staff performance, and increase revenue.
                </p>
            </div>
            <div className='bg-[#FE5F1E] rounded-[12px] sm:rounded-[16px] py-6 sm:py-8 lg:py-10 px-4 sm:px-8 lg:px-20 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-y-8 sm:gap-y-10 lg:gap-x-12'>
                <div className='flex flex-col items-start justify-start gap-y-3 sm:gap-y-4 w-full lg:w-auto'>
                    {cardData.map((data, index) => {
                        return (
                            <Card
                                key={index}
                                title={data.title}
                                description={data.description}
                            />
                        )
                    })}
                </div>
                <div className='flex-shrink-0 scale-90 sm:scale-95 lg:scale-100'>
                    <WhyTableStandOut />
                </div>
            </div>
        </section>
    )
}

export default WhyTableMitra



const Card = ({ title, description }) => {
    return (
        <div className='p-4 sm:p-5 flex flex-col items-start justify-start bg-white shadow-sm rounded-[12px] sm:rounded-[16px] w-full'>
            <p className='text-[#0A0A0A] text-[16px] sm:text-[18px] font-inter font-medium'>
                {title}
            </p>
            <div className='w-full h-[1px] bg-[#FE5F1E] mt-2 sm:mt-3' />
            <p className='text-[14px] sm:text-[16px] text-[#333] font-normal mt-4 sm:mt-5 font-inter'>
                {description}
            </p>
        </div>
    )
}
