import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const navigationLinks = [
        { name: "Features", href: "#features" },
        { name: "How it works", href: "#howitworks" },
        { name: "FAQ", href: "#faq" },
        { name: "Contact Us", href: "#contact-us" }
    ]

    const legalLinks = [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
      
    ]

    return (
        <footer className='bg-[#0A0A0A] text-white'>
            <div className='container mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-8'>
                {/* Main Footer Content */}
                <div className='py-12 sm:py-16 lg:py-20'>
                    <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12'>
                        {/* Brand Section */}
                        <div className='lg:col-span-4 flex flex-col gap-6'>
                            <div className='text-[#FE5F1E] font-plusjakartaSans font-bold text-[24px] sm:text-[28px] lg:text-[32px]'>
                                TableMitra
                            </div>
                            <p className='text-[#CCCCCC] text-[14px] sm:text-[16px] font-inter leading-[1.6] max-w-md'>
                                Transform your hotel operations with our comprehensive QR-based service management system. Streamline guest requests, boost efficiency, and enhance customer satisfaction.
                            </p>
                            <div className='flex flex-col gap-2'>
                                <p className='text-[#CCCCCC] text-[14px] font-inter'>
                                    Email: <span className='text-white'>ayush@TableMitra.com</span>
                                </p>
                                <p className='text-[#CCCCCC] text-[14px] font-inter'>
                                    Support: 24/7 Customer Service
                                </p>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className='lg:col-span-4'>
                            <h3 className='text-white font-dmSans font-semibold text-[18px] sm:text-[20px] mb-6'>
                                Quick Links
                            </h3>
                            <nav className='flex flex-col gap-4'>
                                {navigationLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className='text-[#CCCCCC] hover:text-[#FE5F1E] font-inter text-[14px] sm:text-[16px] transition-colors duration-300'
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Legal & Contact */}
                        <div className='lg:col-span-4'>
                            <h3 className='text-white font-dmSans font-semibold text-[18px] sm:text-[20px] mb-6'>
                                Legal
                            </h3>
                            <nav className='flex flex-col gap-4 mb-8'>
                                {legalLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className='text-[#CCCCCC] hover:text-[#FE5F1E] font-inter text-[14px] sm:text-[16px] transition-colors duration-300'
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>

                            <div className='bg-[#1A1A1A] rounded-[12px] p-6'>
                                <h4 className='text-white font-dmSans font-medium text-[16px] mb-3'>
                                    Ready to Transform?
                                </h4>
                                <p className='text-[#CCCCCC] text-[14px] font-inter mb-4'>
                                    Get started with TableMitra today and revolutionize your hotel operations.
                                </p>
                                <Link
                                    href="#contact-us"
                                    className='inline-block bg-[#FE5F1E] hover:bg-[#E54E0E] text-white font-plusjakartaSans font-semibold text-[14px] px-6 py-3 rounded-xl transition-colors duration-300'
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className='border-t border-[#333] py-6 sm:py-8'>
                    <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
                        <div className='text-[#CCCCCC] text-[12px] sm:text-[14px] font-inter'>
                            © {currentYear} TableMitra. All rights reserved.
                        </div>
                        <div className='flex items-center gap-6'>
                            <p className='text-[#CCCCCC] text-[12px] sm:text-[14px] font-inter'>
                                Made with ❤️ for Hotels
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
