import { housekeepingIcon, laundryIcon, orderIcon, QrIcon, report } from '@/vector'
import React from 'react'

const Features = () => {
    const featuresData = [
        {
            title: "One System, Multiple Operations",
            desc: "In-room dining, housekeeping, laundry, or spa - guests access it all with a single scan. No separate apps, no repeated calls. Every request is logged, routed, and tracked from one dashboard.",
            icon: QrIcon,
            tags: ["In Room Dining", "Housekeeping", "Laundry"],
            image: "/images/Container.png"
        },
        {
            title: "In-Room Food Ordering",
            desc: "Guests explore your live menu, customize dishes, and order instantly. Orders go straight to the kitchen-no delays, no mix-ups. Update prices, photos, or combos anytime in seconds.",
            icon: orderIcon,
            tags: ["Live Menu", "Instant Orders", "Digital Menu"],
            image: "/images/Container01.png"
        },
        {
            title: "Laundry & Additional Services",
            desc: "From pressing a shirt to booking a spa session, guests can request it all digitally. You'll know exactly who made the request, when it was received, and when it was completed - with full visibility across departments.",
            icon: laundryIcon,
            tags: ["Laundry", "Spa Booking", "Service Tracking"],
            image: "/images/Container03.jpg"
        },
        {
            title: "Housekeeping Requests",
            desc: "Every housekeeping request is timestamped and assigned automatically, ensuring your staff never miss a turn-down, towel, or cleaning request.",
            icon: housekeepingIcon,
            tags: ["Auto Assign", "Timestamped", "Real-time"],
            image: "/images/Container04.jpg"
        },
        {
            title: "Data-Backed Reporting",
            desc: "Every tap becomes insight. Track peak ordering hours, service response times, staff performance, and guest preferences - all in one dashboard.",
            icon: report,
            tags: ["Analytics", "Performance", "Insights"],
            image: "/images/Container02.png"
        }
    ]

    return (
        <section id='features' className='container mx-auto max-w-[88rem] flex flex-col items-center justify-start gap-y-[40px] sm:gap-y-[50px] lg:gap-y-[60px] px-4 sm:px-6 lg:px-8 pt-[70px] sm:pt-[100px] lg:pt-[150px]'>

            <div className='flex flex-col items-center justify-start gap-[10px] sm:gap-[14px]'>
                <h1 className='text-[32px] sm:text-[36px] lg:text-[38px] text-[#0A0A0A] leading-[1.2] font-dmSans font-semibold text-center tracking-tight px-2'>
                    Powerful Features to Simplify Hotel Operations
                </h1>
                <p className='text-[16px] sm:text-[18px] font-inter max-w-full sm:max-w-[764px] text-[#4D4D4D] text-center text-balance px-2'>
                    From in-room dining to housekeeping, manage all guest requests through one seamless system designed for modern hotels.
                </p>
            </div>

            <div className='flex flex-col items-start justify-start gap-6 sm:gap-8 lg:gap-10 w-full'>
                {featuresData.map((feature, index) => (
                    <Card
                        key={index}
                        isReverse={index % 2 !== 0}
                        title={feature.title}
                        desc={feature.desc}
                        icon={feature.icon}
                        tags={feature.tags}
                        image={feature.image}
                    />
                ))}
            </div>

        </section>
    )
}

export default Features


const Card = ({
    isReverse,
    icon,
    title,
    desc,
    tags,
    image
}) => {

    return (
        <div className={`flex overflow-hidden flex-col-reverse ${isReverse ? "lg:flex-row-reverse lg:pr-6" : "lg:flex-row lg:pl-6"} gap-8 sm:gap-12 lg:gap-[60px] border-[2px] border-solid border-[#FFE7DD] rounded-[12px] sm:rounded-[16px] justify-start bg-[#FFF]`}>
            <div className='py-6 sm:py-8 lg:py-[38px] px-4 sm:px-6 lg:px-0 flex flex-col items-start justify-start w-full lg:w-1/2'>
                <div className='flex flex-row items-start gap-x-4 sm:gap-x-6'>
                    <div className='p-[6px] sm:p-[7px] rounded-[10px] sm:rounded-[12px] border-solid border-[2px] border-[#0A0A0A] flex-shrink-0'>
                        {icon}
                    </div>
                    <div className='flex flex-col items-start justify-start gap-y-[10px] sm:gap-y-[12px]'>
                        <h3 className='text-[#0A0A0A] font-dmSans font-medium text-[22px] sm:text-[26px] lg:text-[28px] leading-[1.2]'>
                            {title}
                        </h3>
                        <p className='text-[#333] text-[14px] sm:text-[16px] font-inter font-normal leading-[1.45]'>
                            {desc}
                        </p>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-start gap-x-[8px] sm:gap-x-[10px] bg-[#FFE7DD] py-3 sm:py-4 px-2 sm:px-3 rounded-[8px] sm:rounded-[10px] mt-8 sm:mt-12 lg:mt-[70px] w-full flex-wrap gap-y-2'>
                    {tags.map((tag, index) => (
                        <p key={index} className='py-2 sm:py-3 px-4 sm:px-6 bg-[#FFF] rounded-[100px] text-[#1A1A1A] font-inter text-[12px] sm:text-[14px] font-normal'>
                            {tag}
                        </p>
                    ))}
                </div>
            </div>
            <div className={`flex w-full lg:w-1/2 ${isReverse ? "lg:justify-start" : "lg:justify-end"} flex-row items-center`}>
                <div className='w-full h-full min-h-[300px]'>
                    <img src={image} alt="" className='w-full h-full object-cover' />
                </div>
            </div>

        </div>
    )
}
