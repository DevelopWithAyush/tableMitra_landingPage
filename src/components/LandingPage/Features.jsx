import React from 'react'

const Features = () => {



    const cardData = [
        {
            title: "Bulk QR sets & printable PDFs",
            desc: "Generate hundreds of unique QR codes instantly with our bulk creation tool. Each QR comes with a printable PDF optimized for table placement.",
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 3H4C3.44772 3 3 3.44772 3 4V7C3 7.55228 3.44772 8 4 8H7C7.55228 8 8 7.55228 8 7V4C8 3.44772 7.55228 3 7 3Z" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20 3H17C16.4477 3 16 3.44772 16 4V7C16 7.55228 16.4477 8 17 8H20C20.5523 8 21 7.55228 21 7V4C21 3.44772 20.5523 3 20 3Z" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7 16H4C3.44772 16 3 16.4477 3 17V20C3 20.5523 3.44772 21 4 21H7C7.55228 21 8 20.5523 8 20V17C8 16.4477 7.55228 16 7 16Z" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21 16H18C17.4696 16 16.9609 16.2107 16.5858 16.5858C16.2107 16.9609 16 17.4696 16 18V21" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21 21V21.01" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 7V10C12 10.5304 11.7893 11.0391 11.4142 11.4142C11.0391 11.7893 10.5304 12 10 12H7" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3 12H3.01" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 3H12.01" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 16V16.01" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16 12H17" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21 12V12.01" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 21V20" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            ,
            tags: ["In Room Dining", "Housekeeping", "Laundry"],
            image: "/images/Container.png"

        },

        {
            title: "Bulk QR sets & printable PDFs",
            desc: "Generate hundreds of unique QR codes instantly with our bulk creation tool. Each QR comes with a printable PDF optimized for table placement.",
        },

        {
            title: "Bulk QR sets & printable PDFs",
            desc: "Generate hundreds of unique QR codes instantly with our bulk creation tool. Each QR comes with a printable PDF optimized for table placement.",
        },



    ]

    return (
        <section id='features' className='container mx-auto max-w-[88rem] flex flex-col items-center justify-start gap-y-[40px] sm:gap-y-[50px] lg:gap-y-[60px] px-4 sm:px-6 lg:px-8 pt-[70px] sm:pt-[100px] lg:pt-[150px]'>

            <div className='flex flex-col items-center justify-start gap-[10px] sm:gap-[14px]'>
                <h1 className='text-[32px] sm:text-[36px] lg:text-[38px] text-[#0A0A0A] leading-[1.2] font-dmSans font-semibold text-center tracking-tight px-2'>
                    Powerful Features to Boost Your Restaurant's Weekday Sales
                </h1>
                <p className='text-[16px] sm:text-[18px] font-inter max-w-full sm:max-w-[764px] text-[#4D4D4D] text-center text-balance px-2'>
                    Leverage QR codes, automated campaigns, and personalized messaging to engage customers, drive repeat visits, and turn slow weekdays into profitable ones.
                </p>
            </div>

            <div className='flex flex-col items-start justify-start gap-6 sm:gap-8 lg:gap-10 w-full'>

                <Card
                    isReverse={false}
                    title={"Bulk QR sets & printable PDFs"}
                    desc={"Generate hundreds of unique QR codes instantly with our bulk creation tool. Each QR comes with a printable PDF optimized for table placement."}
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M7 3H4C3.44772 3 3 3.44772 3 4V7C3 7.55228 3.44772 8 4 8H7C7.55228 8 8 7.55228 8 7V4C8 3.44772 7.55228 3 7 3Z" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20 3H17C16.4477 3 16 3.44772 16 4V7C16 7.55228 16.4477 8 17 8H20C20.5523 8 21 7.55228 21 7V4C21 3.44772 20.5523 3 20 3Z" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7 16H4C3.44772 16 3 16.4477 3 17V20C3 20.5523 3.44772 21 4 21H7C7.55228 21 8 20.5523 8 20V17C8 16.4477 7.55228 16 7 16Z" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 16H18C17.4696 16 16.9609 16.2107 16.5858 16.5858C16.2107 16.9609 16 17.4696 16 18V21" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 21V21.01" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 7V10C12 10.5304 11.7893 11.0391 11.4142 11.4142C11.0391 11.7893 10.5304 12 10 12H7" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 12H3.01" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 3H12.01" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 16V16.01" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16 12H17" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 12V12.01" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 21V20" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    }
                    image={"/images/Container.png"}
                />
                <Card
                    isReverse={true}
                    title={"Bulk QR sets & printable PDFs"}
                    desc={"Generate hundreds of unique QR codes instantly with our bulk creation tool. Each QR comes with a printable PDF optimized for table placement."}
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M7 3H4C3.44772 3 3 3.44772 3 4V7C3 7.55228 3.44772 8 4 8H7C7.55228 8 8 7.55228 8 7V4C8 3.44772 7.55228 3 7 3Z" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20 3H17C16.4477 3 16 3.44772 16 4V7C16 7.55228 16.4477 8 17 8H20C20.5523 8 21 7.55228 21 7V4C21 3.44772 20.5523 3 20 3Z" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7 16H4C3.44772 16 3 16.4477 3 17V20C3 20.5523 3.44772 21 4 21H7C7.55228 21 8 20.5523 8 20V17C8 16.4477 7.55228 16 7 16Z" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 16H18C17.4696 16 16.9609 16.2107 16.5858 16.5858C16.2107 16.9609 16 17.4696 16 18V21" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 21V21.01" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 7V10C12 10.5304 11.7893 11.0391 11.4142 11.4142C11.0391 11.7893 10.5304 12 10 12H7" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 12H3.01" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 3H12.01" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 16V16.01" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16 12H17" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 12V12.01" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 21V20" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    }
                    image={"/images/Container.png"}
                />
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
    tags = [1, 2, 3,],
    image
}) => {

    return (
        <div className={`flex overflow-hidden h-full flex-col-reverse ${isReverse ? "lg:flex-row-reverse lg:pr-6" : "lg:flex-row lg:pl-6"} gap-8 sm:gap-12 lg:gap-[60px] border-[2px] border-solid border-[#FFE7DD] rounded-[12px] sm:rounded-[16px] justify-start bg-[#FFF]`}>
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
                    {tags.map((tag, index) => {
                        return (
                            <p key={index} className='py-2 sm:py-3 px-4 sm:px-6 bg-[#FFF] rounded-[100px] text-[#1A1A1A] font-inter text-[12px] sm:text-[14px] font-normal'>
                                Ayush Dubey
                            </p>
                        )
                    })}
                </div>
            </div>
            <div className={`flex h-full w-full lg:w-1/2 ${isReverse ? "lg:justify-start" : "lg:justify-end"} flex-row items-center`}>
                <img src={image} alt="" className='h-full w-full object-cover' />
            </div>

        </div>
    )
}
