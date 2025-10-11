import React from 'react'

const TrustedBy = () => {
  return (
      <main className='bg-[#FE5F1E] px-10 py-[60px] overflow-hidden relative flex flex-col items-center '>
          
          <div className='w-[689px] h-[689px] rounded-full bg-white/20 flex flex-col absolute top-[-334px] left-[-385px] items-center justify-center'>
              <div className='w-[400px] h-[400px] rounded-full bg-[#FE5F1E]' />
              </div>
          <div className='w-[689px] h-[689px] rounded-full bg-white/20 flex flex-col absolute bottom-[-334px] right-[-385px] items-center justify-center'>
              <div className='w-[400px] h-[400px] rounded-full bg-[#FE5F1E]' />
              </div>
              
       
          <div className='container mx-auto max-w-[88rem] flex flex-col items-center gap-y-[36px] z-50'>
              
          <h1 className='text-[38px] text-[#FFF] font-dmSans font-semibold '>
              Trusted by cafes & restaurants nationwide
              </h1> 
              <div className='grid md:grid-cols-3 items-center justify-between gap-x-[36px] w-full '>
                  <Card
                      SVG={
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <path d="M21.0897 15.3349L28.9297 11.8698V29.4058H21.0897V15.3349ZM21.0897 15.3349L16.1891 17.9338L11.2885 11.0035V29.4012H21.0897V15.3349Z" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M30.8771 2.59888L18.4451 10.544L12.7308 3.86288L2.50684 9.11545M3.44855 14.4686L11.2886 11.0034V29.4035H3.44855V14.4686Z" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M24.6965 1.54974L30.8748 2.57832L29.8463 8.75889" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                  } 
                      number={"+27%"} 
                      desc={"Average Tue–Thu revenue increase"}
                  />
                  <Card
                  
                      SVG={<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                          <path d="M27 11.688C27.6689 11.3961 28.2381 10.9153 28.6378 10.3046C29.0374 9.69389 29.2502 8.97985 29.25 8.25L27 4.5H9L6.75 8.25C6.74979 8.97985 6.96257 9.69389 7.36223 10.3046C7.7619 10.9153 8.33109 11.3961 9 11.688M27 11.688C26.4292 11.9371 25.8054 12.0401 25.1849 11.9878C24.5643 11.9355 23.9666 11.7294 23.4456 11.3883C22.9246 11.0471 22.4968 10.5815 22.2008 10.0336C21.9047 9.48575 21.7498 8.87275 21.75 8.25C21.75 9.24456 21.3549 10.1984 20.6517 10.9017C19.9484 11.6049 18.9946 12 18 12C17.0054 12 16.0516 11.6049 15.3483 10.9017C14.6451 10.1984 14.25 9.24456 14.25 8.25C14.2502 8.87275 14.0953 9.48575 13.7992 10.0336C13.5032 10.5815 13.0754 11.0471 12.5544 11.3883C12.0334 11.7294 11.4357 11.9355 10.8151 11.9878C10.1946 12.0401 9.57076 11.9371 9 11.688M27 11.688V16.5M9 11.688V16.5M4.5 18V25.5M4.5 25.5H7.5C9.621 25.5 10.6815 25.5 11.34 26.16C12 26.817 12 27.8775 12 30V31.5M4.5 25.5V31.5M31.5 18V25.5M31.5 25.5H28.5C26.379 25.5 25.3185 25.5 24.66 26.16C24 26.817 24 27.8775 24 30V31.5M31.5 25.5V31.5M10.5 21H18M18 21H25.5M18 21V31.5M18 31.5H16.5M18 31.5H19.5" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>} 

                      number={"10+"}
                      desc={"Active cafes & restaurants"}
                      
                  />
                  <Card
                      SVG={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M7.03818 20.2691L12.001 16.4837L16.9639 20.2691L15.1028 14.0284L19.7555 10.7545H13.9655L12.001 4.41149L10.0366 10.7545H4.24657L8.89925 14.0284L7.03818 20.2691ZM12.001 19.0823L5.74163 23.7987C5.52106 23.9488 5.2998 24.0149 5.07785 23.9972C4.8559 23.9795 4.65187 23.9174 4.46576 23.811C4.27966 23.7046 4.13835 23.5443 4.04185 23.3301C3.94535 23.116 3.94328 22.8889 4.03565 22.6488L6.42609 14.8775L0.481003 10.6318C0.243889 10.4954 0.0956929 10.316 0.0364143 10.0936C-0.0228643 9.86992 -0.00976872 9.64962 0.0757027 9.43273C0.159796 9.21447 0.288693 9.03919 0.462392 8.90687C0.634714 8.77455 0.841499 8.70839 1.08275 8.70839H8.56426L10.9878 0.775489C11.0746 0.52586 11.2077 0.334886 11.3869 0.202568C11.5661 0.0675227 11.7701 0 11.999 0C12.2278 0 12.4318 0.0668408 12.6111 0.200522C12.7903 0.334204 12.9233 0.52586 13.0101 0.775489L15.4337 8.70839H22.9152C23.1578 8.70839 23.3653 8.77455 23.5376 8.90687C23.7113 9.03919 23.8402 9.21447 23.9243 9.43273C24.0098 9.65098 24.0229 9.87129 23.9636 10.0936C23.9043 10.316 23.7561 10.496 23.519 10.6338L17.5739 14.8775L19.9643 22.6488C20.0567 22.8902 20.0546 23.1173 19.9581 23.3301C19.8616 23.5429 19.7203 23.7032 19.5342 23.811C19.3481 23.9188 19.1441 23.9808 18.9222 23.9972C18.7002 24.0136 18.4789 23.9474 18.2584 23.7987L12.001 19.0823Z" fill="#0A0A0A" />
                      </svg>} 
                      number={"4.9/5"}
                      desc={"Customer satisfaction rating"}
                  />
              </div>
          </div>

      
    </main>
  )
} 



const Card = ({SVG , number ,desc}) => {
    return (
        <div className='col-span-1 w-full p-6 flex flex-col items-start gap-y-[10px] bg-white rounded-[12px]'>   
            <div className='p-[14px] border-[2px] border-solid border-[#0A0A0A] rounded-[12px] '>
                {SVG}
            </div>
            <p  className='text-[64px] text-[#0A0A0A] font-dmSans font-semibold'>
              {number}
            </p>
            <p className='text-[16px] font-inter font-medium text-[#333] '>
                {desc}
            </p>
        </div>
    )
}

export default TrustedBy
