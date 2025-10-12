import React from 'react'

const CTA = () => {
    return (
        <section id='contact-us' className='bg-[#FE5F1E] px-4 sm:px-6 lg:px-10 py-[40px] sm:py-[50px] lg:py-[60px] overflow-hidden relative flex flex-col items-center mt-[70px] sm:mt-[100px] lg:mt-[150px]'>

            <div className='w-[689px] h-[689px] rounded-full bg-white/20 flex flex-col absolute top-[-334px] left-[-385px] items-center justify-center  scale-90 sm:scale-95 lg:scale-100'>
                <div className='w-[400px]  h-[400px] rounded-full bg-[#FE5F1E]' />
            </div>
            <div className='w-[689px] h-[689px] rounded-full bg-white/20 flex flex-col absolute bottom-[-334px] right-[-385px] items-center justify-center scale-90 sm:scale-95 lg:scale-100'>
                <div className='w-[400px] h-[400px] rounded-full bg-[#FE5F1E]' />
            </div>


            <div className='container mx-auto max-w-[88rem] flex flex-col items-center gap-y-[30px] sm:gap-y-[40px] z-50'>
                <div className='flex flex-col items-center gap-y-[10px] sm:gap-y-[14px]'>


                    <h1 className='text-[32px] sm:text-[36px] lg:text-[38px] leading-[1.2] text-[#FFF] font-dmSans font-semibold text-center px-2'>
                        Ready to fill tables on weekdays?
                    </h1>
                    <p className='text-[16px] sm:text-[18px] font-inter text-[#FFF] leading-[1.4] max-w-full sm:max-w-[582px] text-center px-2 font-normal'>
                        Join hundreds of cafes already boosting their Tuesday–Thursday sales with our QR technology. Book your demo call today and see the transformation in action.
                    </p>
                </div>
                <div className='flex flex-col sm:flex-row items-center gap-y-3 sm:gap-y-0 sm:gap-x-4 lg:gap-x-6 mt-6 sm:mt-8 lg:mt-10 w-full sm:w-auto'>
                    <button className='text-[#FE5F1E] font-inter text-[14px] sm:text-[16px] font-semibold text-center bg-[#FFF] rounded-[12px] py-[12px] sm:py-[14px] px-5 sm:px-6 w-full sm:w-auto whitespace-nowrap hover:bg-[#FFF]/90 transition-colors'>
                        Let's Talk
                    </button>
                    <button className='text-[#FFF] font-inter text-[14px] sm:text-[16px] font-semibold text-center border-[2px] border-solid border-[#fff] rounded-[12px] py-[12px] sm:py-[14px] px-5 sm:px-6 w-full sm:w-auto whitespace-nowrap hover:bg-white/10 transition-colors'>
                        Contact Sales Team
                    </button>
                </div>

            </div>


        </section>
    )
}

export default CTA
