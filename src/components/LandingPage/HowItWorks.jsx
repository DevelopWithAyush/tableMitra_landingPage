import React from 'react'

const HowItWorks = () => { 

    const cardData = [

        {
            number: 1,
            title: 'Admin generates QR sets',
            description:"Create printable QR codes for each table with unique identifiers"
        },
        {
            number: 2,
            title: 'Easy Onboarding',
            description:"QR setup and staff onboarding done for you."
        },
        {
            number: 3,
            title: 'Guest Scans and Places Request',
            description:"Guests access all services with one scan, no app required."
        },
        {
            number: 4,
            title: 'Smart Routing System',
            description:"Orders and requests auto-route to the right department."
        },
        {
            number: 5,
            title: 'Manager Dashboard',
            description:"Track live service times, missed SLAs, and request patternsÑ."
        },
    ]
  return (
      <section className='container mx-auto max-w-[88rem] grid grid-cols-1 md:grid-cols-2 mt-[150px]' >
          
          <div className='col-span-1'>
              <h1 className=' font-dmSans font-semibold leading-[50px] text-balance text-[38px] max-w-[604px] '>How TableMitra’s Automation Works for Hotels</h1>
              <p className='text-[18px] text-[#4D4D4D]  max-w-[604px] mt-[14px] ' >Streamlining service delivery across departments in flow with tap-to-order convenience for your guests and complete visibility for your staff.</p>
              <div className='flex flex-row items-center gap-x-6 mt-10'>
                  <button className='text-[#fff]  cursor-pointer font-inter text-[16px] font-semibold text-center bg-[#FE5F1E] rounded-[12px] py-[14px] px-6'>Let's Talk</button>
                  <button className='text-[#FE5F1E]  cursor-pointer font-inter text-[16px] font-semibold text-center border border-solid border-[#FE5F1E] rounded-[12px] py-[14px] px-6'>See How it Works</button>
              </div> 
          </div>
          <div className='col-span-1 w-full flex flex-col items-start justify-start gap-y-6'> 
            
              {
                  cardData.map((data) => {
                      return (
                          <Card
                              number={data.number}
                              description={data.description}
                              title={data.title}
                          />
                      )
                  })
            }
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
    
        <div className='px-5 py-6 flex flex-row items-start justify-start gap-x-5 bg-[#FFF] rounded-[12px] shadow-sm w-full '>
        <div className='px-3 aspect-square rounded-full bg-[#FE5F1E] flex items-center justify-center text-[16px] font-inter font-bold text-[#FFF]  '>{number}</div>
        <div className='flex flex-col items-start justify-start gap-3'>
                <p className='text-[24px] text-[#0A0A0A] font-dmSans font-medium leading-[30px]'>{title}</p>
            <p className='text-[18px] text-[#333]/80 font-inter font-normal]'>{description}</p>
        </div>
    </div>
    )
}