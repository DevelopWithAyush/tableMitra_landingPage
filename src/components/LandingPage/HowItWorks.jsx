import Link from 'next/link';
import React from 'react'

const HowItWorks = () => {

    const cardData = [
        {
            number: 1,
            title: 'The Landline Bottleneck',
            description: "Every request starts with a call. Guests wait, notes get missed, and time is lost - leaving them frustrated."
        },
        {
            number: 2,
            title: 'Guests Expect Simplicity',
            description: "Travelers are used to one-tap actions. Asking them to call reception feels slow and outdated."
        },
        {
            number: 3,
            title: 'Staff Always Catching Up',
            description: "Front desk, housekeeping, kitchen - all juggling unclear calls. Everyone’s busy, yet behind."
        },
        {
            number: 4,
            title: 'Losing to Food Apps',
            description: "If ordering through apps is faster than calling, guests switch - and your revenue slips away."
        },
        {
            number: 5,
            title: 'No Visibility, No Control',
            description: "You can’t see who’s waiting or delayed. Without visibility, small issues grow into bad reviews."
        },
    ];

    return (
        <section id='howitworks' className='container mx-auto max-w-[88rem] grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-0 pt-[70px] sm:pt-[100px] lg:pt-[150px] px-4 sm:px-6 lg:px-8'>

            <div className='col-span-1'>
                <h1 className='font-dmSans font-semibold leading-[1.2] text-balance text-[32px] sm:text-[36px] lg:text-[38px] max-w-full lg:max-w-[604px]'>
                    Why the Way Hotels Operate Today Is Holding Them Back
                </h1>
                <p className='text-[16px] font-inter sm:text-[18px] text-[#4D4D4D] max-w-full lg:max-w-[604px] mt-3 sm:mt-[14px]'>
                    Manual coordination and landline workflows are limiting how hotels operate today. In a world built for speed, calls are slowing everything down.
                </p>
                <div className='hidden lg:flex flex-row items-center gap-x-6 mt-10'>
                    <Link href={"https://forms.gle/Hk1ym8o3ZZPD8rvL8"} className='text-[#fff] cursor-pointer font-inter text-[16px] font-semibold text-center bg-[#FE5F1E] rounded-[12px] py-[14px] px-6'>
                        Let's Talk
                    </Link>
                    <Link href="#why-tablemitra" className='text-[#FE5F1E] cursor-pointer font-inter text-[16px] font-semibold text-center border border-solid border-[#FE5F1E] rounded-[12px] py-[14px] px-6'>
                        Why TableMitra
                    </Link>
                </div>
            </div>

            <div className='col-span-1 w-full flex flex-col items-start justify-start gap-y-4 sm:gap-y-5 lg:gap-y-6'>
                {
                    cardData.map((data) => {
                        return (
                            <Card
                                key={data.number}
                                number={data.number}
                                description={data.description}
                                title={data.title}
                            />
                        )
                    })
                }
            </div>

            <div className='lg:hidden col-span-1 flex flex-row items-center justify-center gap-x-3 sm:gap-x-4 mt-8'>
                <button className='text-[#fff] cursor-pointer font-inter text-[14px] sm:text-[16px] font-semibold text-center bg-[#FE5F1E] rounded-[12px] py-[12px] sm:py-[14px] px-4 sm:px-6 whitespace-nowrap'>
                    Let's Talk
                </button>
                <button className='text-[#FE5F1E] cursor-pointer font-inter text-[14px] sm:text-[16px] font-semibold text-center border border-solid border-[#FE5F1E] rounded-[12px] py-[12px] sm:py-[14px] px-4 sm:px-6 whitespace-nowrap'>
                    See How it Works
                </button>
            </div>

        </section>
    )
}

export default HowItWorks


const Card = ({
    title,
    description,
    number
}) => {
    return (

        <div className='px-4 sm:px-5 py-5 sm:py-6 flex flex-row items-start justify-start gap-x-4 sm:gap-x-5 bg-[#FFF] rounded-[12px] shadow-sm w-full'>
            <div className="aspect-square min-w-6 sm:min-w-8 flex items-center justify-center rounded-full bg-[#FE5F1E] text-[12px] sm:text-[16px] font-inter font-bold text-white">
                {number}
            </div>

            <div className='flex flex-col items-start justify-start gap-2 sm:gap-3'>
                <p className='text-[20px] sm:text-[22px] lg:text-[24px] text-[#0A0A0A] font-dmSans font-medium leading-[1.25]'>
                    {title}
                </p>
                <p className='text-[16px] sm:text-[17px] lg:text-[18px] text-[#333]/80 font-inter font-normal'>
                    {description}
                </p>
            </div>
        </div>
    )
}