"use client"

import Link from 'next/link'
import { notFound } from '@/vector'

const NotFound = () => {
    return (
        <div className="min-h-screen container mx-auto max-w-[88rem] flex flex-col items-center justify-center gap-y-[40px] sm:gap-y-[50px] lg:gap-y-[60px]">


            <div className="w-[280px] sm:w-[320px] lg:w-[700px] h-auto flex items-center justify-center">
                {notFound()}
            </div> 
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-[32px] sm:text-[36px] lg:text-[40px] font-dmSans font-semibold text-[#0A0A0A] text-center leading-[1.2]">Page Not Found</h1>
                <p className="text-[16px] sm:text-[18px] font-inter font-normal text-[#4D4D4D] text-center leading-[1.5]">The page you are looking for does not exist. Please try again.</p>
                <Link href="/" className="text-[16px] sm:text-[18px] font-inter font-normal text-[#FE5F1E] text-center leading-[1.5]">Go to Home</Link>
            </div>

            {/* Footer */}

        </div>
    )
}

export default NotFound

