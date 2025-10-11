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
    <section className='container max-w-[88rem] mx-auto py-[150px] flex flex-col items-center justify-start gap-y-[60px]'>
          <div className='flex flex-col items-center justify-center gap-y-[14px]'>
              <h1 className='text-[38px] font-dmSans font-semibold text-[#0A0A0A] '>Why TableMitra Stands Out</h1>
              <p className='text-[#4D4D4D] font-inter text-[18px] font-normal text-center max-w-[586px]' >Smart solutions for modern hotels. Designed to enhance service, optimize staff performance, and increase revenue.</p>
          </div>
          <div className='bg-[#FE5F1E] rounded-[16px] py-10 px-20 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-y-10'>
              <div className='flex flex-col items-start justify-start gap-y-4'>
                  {cardData.map((data) => {
                      return (
                          <Card
                          title={data.title}
                          description={data.description}
                          />
                     )
                 })}
              </div>
              <div>
                  <WhyTableStandOut/>
                  
              </div>
          </div>
    </section>
  )
}

export default WhyTableMitra 



const Card = ({title,description}) => {
    return (
        <div className='p-5 flex flex-col items-start justify-start bg-white shadow-sm rounded-[16px] w-full '>
            <p className='text-[#0A0A0A] text-[18px] font-inter font-medium'>{ title}</p>
            <div className='w-full h-[1px] bg-[#FE5F1E] mt-3'/>
            <p className='text-[16px] text-[#333] font-normal mt-5 font-inter' >{description}</p>
        </div>
    )
}
