import React from 'react'

const CTA = () => {
  return (
      <section className='bg-[#FE5F1E] px-10 py-[60px] overflow-hidden relative flex flex-col items-center mt-[150px]'>

          <div className='w-[689px] h-[689px] rounded-full bg-white/20 flex flex-col absolute top-[-334px] left-[-385px] items-center justify-center'>
              <div className='w-[400px] h-[400px] rounded-full bg-[#FE5F1E]' />
          </div>
          <div className='w-[689px] h-[689px] rounded-full bg-white/20 flex flex-col absolute bottom-[-334px] right-[-385px] items-center justify-center'>
              <div className='w-[400px] h-[400px] rounded-full bg-[#FE5F1E]' />
          </div>


          <div className='container mx-auto max-w-[88rem] flex flex-col items-center gap-y-[40px] z-50'> 
              <div className='flex flex-col items-center gap-y-[14px]'>
                  

              <h1 className='text-[38px] leading-[45px] text-[#FFF] font-dmSans font-semibold '>
                  Ready to fill tables on weekdays?
              </h1>
              <p className='text-[18px] font-inter text-[#FFF] leading-[25px] max-w-[582px] text-center'>Join hundreds of cafes already boosting their Tuesday–Thursday sales with our QR technology. Book your demo call today and see the transformation in action.</p> 
              </div>
              <div className='flex flex-row items-center gap-x-6 mt-10'>
                  <button className='text-[#FE5F1E] font-inter text-[16px] font-semibold text-center bg-[#FFF] rounded-[12px] py-[14px] px-6'>Let's Talk</button>
                  <button className='text-[#FFF] font-inter text-[16px] font-semibold text-center border-[2px] border-solid border-[#fff] rounded-[12px] py-[14px] px-6'>Contact Sales Team</button>
              </div> 
             
          </div>


      </section>
  )
}

export default CTA
