"use client"

import Link from 'next/link'
import React from 'react'
import Head from 'next/head'

export const metadata = {
    title: "Terms of Service | TableMitra India - Hotel Management System",
    description: "TableMitra India's Terms of Service. Legal terms and conditions for using our hotel management system and QR-based service platform in India.",
    keywords: "terms of service India, legal terms TableMitra, hotel software terms, Indian legal compliance, service agreement India",
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Terms of Service | TableMitra India",
        description: "TableMitra India's Terms of Service. Legal terms and conditions for using our hotel management system in India.",
        url: "https://tablemitra.com/terms-of-service",
        type: "website",
    },
    alternates: {
        canonical: "https://tablemitra.com/terms-of-service",
    },
}

const TermsOfService = () => {
    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "name": "Terms of Service",
                            "description": "TableMitra India's Terms of Service. Legal terms and conditions for using our hotel management system and QR-based service platform in India.",
                            "url": "https://tablemitra.com/terms-of-service",
                            "mainEntity": {
                                "@type": "Organization",
                                "name": "TableMitra India",
                                "url": "https://tablemitra.com",
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressCountry": "IN",
                                    "addressLocality": "Noida, Uttar Pradesh, India"
                                },
                                "contactPoint": {
                                    "@type": "ContactPoint",
                                    "email": "ayush@tablemitra.com",
                                    "contactType": "legal department"
                                }
                            },
                            "dateModified": "2024-10-13",
                            "inLanguage": "en-IN",
                            "isPartOf": {
                                "@type": "WebSite",
                                "name": "TableMitra India",
                                "url": "https://tablemitra.com"
                            }
                        })
                    }}
                />
            </Head>
            <div className="min-h-screen bg-[#F8F8F8] pt-[100px] sm:pt-[140px] lg:pt-[200px] pb-[70px] sm:pb-[100px] lg:pb-[150px]">
                {/* Main Content */}
                <div className="container mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Title Section */}
                        <div className="mb-[40px] sm:mb-[50px] lg:mb-[60px]">
                            <h1 className="text-[32px] sm:text-[36px] lg:text-[38px] font-dmSans font-semibold text-[#0A0A0A] leading-[1.2] mb-[10px] sm:mb-[14px]">
                                Terms of Service
                            </h1>
                            <p className="text-[16px] sm:text-[18px] font-inter text-[#4D4D4D] leading-[1.4] font-normal">
                                Effective Date: October 13, 2025
                            </p>
                            <p className="text-[16px] sm:text-[18px] font-inter text-[#4D4D4D] leading-[1.4] font-normal mt-4 sm:mt-[14px]">
                                These Terms of Service (&quot;Terms&quot;) govern your access to and use of the services provided by TableMitra Pvt. Ltd. (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). By accessing or using our website or Services, you agree to be bound by these Terms.
                            </p>
                        </div>

                        {/* Content Sections */}
                        <div className="flex flex-col items-start justify-start gap-6 sm:gap-8 lg:gap-10">
                            {/* Section 1 */}
                            <div className="bg-white rounded-[12px] sm:rounded-[16px] p-5 sm:p-6 lg:p-[30px] w-full flex flex-col items-start justify-start shadow-xs">
                                <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-dmSans font-medium text-[#0A0A0A] leading-[1.2] mb-[10px] sm:mb-[12px]">
                                    1. Definitions
                                </h2>
                                <div className="flex flex-col items-start justify-start gap-y-4 sm:gap-y-5">
                                    <div>
                                        <p className="text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal">
                                            &quot;Services&quot; refer to the TableMitra platform, software, website, and related technologies provided by the Company.
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal">
                                            &quot;User&quot;, &quot;You&quot;, or &quot;Your&quot; refers to hotels, guests, or individuals accessing or using our Services.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2 */}
                            <div className="bg-white rounded-[12px] sm:rounded-[16px] p-5 sm:p-6 lg:p-[30px] w-full flex flex-col items-start justify-start shadow-xs">
                                <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-dmSans font-medium text-[#0A0A0A] leading-[1.2] mb-[10px] sm:mb-[12px]">
                                    2. Use of Services
                                </h2>
                                <p className="text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal mb-4 sm:mb-5">
                                    You agree to use our Services solely for lawful purposes and in compliance with these Terms and applicable laws.
                                </p>
                                <p className="text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal mb-4 sm:mb-5">
                                    You shall not:
                                </p>
                                <ul className="list-disc list-inside space-y-1 text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal ml-4">
                                    <li>Interfere with or disrupt the operation of the Services.</li>
                                    <li>Reverse engineer, copy, or redistribute any part of our platform.</li>
                                    <li>Use our Services for unauthorized, harmful, or illegal activities.</li>
                                </ul>
                            </div>

                            {/* Section 3 */}
                            <div className="bg-white rounded-[12px] sm:rounded-[16px] p-5 sm:p-6 lg:p-[30px] w-full flex flex-col items-start justify-start shadow-xs">
                                <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-dmSans font-medium text-[#0A0A0A] leading-[1.2] mb-[10px] sm:mb-[12px]">
                                    3. Account and Access
                                </h2>
                                <p className="text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal">
                                    Hotels or administrators are responsible for maintaining the confidentiality of login credentials. The Company shall not be liable for unauthorized access arising from user negligence.
                                </p>
                            </div>

                            {/* Section 4 */}
                            <div className="bg-white rounded-[12px] sm:rounded-[16px] p-5 sm:p-6 lg:p-[30px] w-full flex flex-col items-start justify-start shadow-xs">
                                <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-dmSans font-medium text-[#0A0A0A] leading-[1.2] mb-[10px] sm:mb-[12px]">
                                    4. Intellectual Property
                                </h2>
                                <p className="text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal">
                                    All software, trademarks, graphics, content, and materials provided through TableMitra remain the exclusive property of TableMitra Pvt. Ltd.. You are granted a limited, non-transferable, non-exclusive right to use the Services solely for internal business purposes.
                                </p>
                            </div>

                            {/* Section 5 */}
                            <div className="bg-white rounded-[12px] sm:rounded-[16px] p-5 sm:p-6 lg:p-[30px] w-full flex flex-col items-start justify-start shadow-xs">
                                <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-dmSans font-medium text-[#0A0A0A] leading-[1.2] mb-[10px] sm:mb-[12px]">
                                    5. Data Ownership
                                </h2>
                                <p className="text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal">
                                    All guest and hotel data remain the property of the respective hotels. TableMitra only processes such data to provide the Services. We may use aggregated and anonymized data for analytics and performance improvement.
                                </p>
                            </div>

                            {/* Section 6 */}
                            <div className="bg-white rounded-[12px] sm:rounded-[16px] p-5 sm:p-6 lg:p-[30px] w-full flex flex-col items-start justify-start shadow-xs">
                                <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-dmSans font-medium text-[#0A0A0A] leading-[1.2] mb-[10px] sm:mb-[12px]">
                                    6. Service Availability
                                </h2>
                                <p className="text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal">
                                    We strive to ensure continuous service availability but do not guarantee uninterrupted or error-free operation. Scheduled maintenance or technical issues may temporarily affect service access.
                                </p>
                            </div>

                            {/* Section 7 */}
                            <div className="bg-white rounded-[12px] sm:rounded-[16px] p-5 sm:p-6 lg:p-[30px] w-full flex flex-col items-start justify-start shadow-xs">
                                <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-dmSans font-medium text-[#0A0A0A] leading-[1.2] mb-[10px] sm:mb-[12px]">
                                    7. Limitation of Liability
                                </h2>
                                <p className="text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal mb-4 sm:mb-5">
                                    To the maximum extent permitted by law, TableMitra Pvt. Ltd. shall not be liable for any indirect, incidental, or consequential damages arising from:
                                </p>
                                <ul className="list-disc list-inside space-y-1 text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal ml-4">
                                    <li>Service interruptions, data loss, or unauthorized access.</li>
                                    <li>User errors, misuse, or external system failures.</li>
                                    <li>Any event beyond our reasonable control.</li>
                                </ul>
                            </div>

                            {/* Section 8 */}
                            <div className="bg-white rounded-[12px] sm:rounded-[16px] p-5 sm:p-6 lg:p-[30px] w-full flex flex-col items-start justify-start shadow-xs">
                                <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-dmSans font-medium text-[#0A0A0A] leading-[1.2] mb-[10px] sm:mb-[12px]">
                                    8. Indemnification
                                </h2>
                                <p className="text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal">
                                    You agree to indemnify and hold harmless TableMitra Pvt. Ltd., its directors, employees, and affiliates from any claims, damages, or liabilities arising out of your use or misuse of the Services.
                                </p>
                            </div>

                            {/* Section 9 */}
                            <div className="bg-white rounded-[12px] sm:rounded-[16px] p-5 sm:p-6 lg:p-[30px] w-full flex flex-col items-start justify-start shadow-xs">
                                <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-dmSans font-medium text-[#0A0A0A] leading-[1.2] mb-[10px] sm:mb-[12px]">
                                    9. Termination
                                </h2>
                                <p className="text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal">
                                    We reserve the right to suspend or terminate user access without prior notice for violations of these Terms or applicable law. Upon termination, all rights granted under these Terms shall immediately cease.
                                </p>
                            </div>

                            {/* Section 10 */}
                            <div className="bg-white rounded-[12px] sm:rounded-[16px] p-5 sm:p-6 lg:p-[30px] w-full flex flex-col items-start justify-start shadow-xs">
                                <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-dmSans font-medium text-[#0A0A0A] leading-[1.2] mb-[10px] sm:mb-[12px]">
                                    10. Governing Law
                                </h2>
                                <p className="text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal">
                                    These Terms shall be governed by and construed in accordance with the laws of India, with exclusive jurisdiction in the courts of Noida, Uttar Pradesh.
                                </p>
                            </div>

                            {/* Section 11 */}
                            <div className="bg-white rounded-[12px] sm:rounded-[16px] p-5 sm:p-6 lg:p-[30px] w-full flex flex-col items-start justify-start shadow-xs">
                                <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-dmSans font-medium text-[#0A0A0A] leading-[1.2] mb-[10px] sm:mb-[12px]">
                                    11. Changes to Terms
                                </h2>
                                <p className="text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal">
                                    We may revise these Terms periodically. Continued use of our Services after such changes constitutes acceptance of the updated Terms.
                                </p>
                            </div>

                            {/* Section 12 - Contact */}
                            <div className="bg-[#FE5F1E] rounded-[12px] sm:rounded-[16px] p-5 sm:p-6 lg:p-[30px] w-full flex flex-col items-start justify-start shadow-xs">
                                <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-dmSans font-medium text-white leading-[1.2] mb-[10px] sm:mb-[12px]">
                                    12. Contact Information
                                </h2>
                                <p className="text-[14px] sm:text-[16px] font-inter text-white leading-[1.45] font-normal mb-4 sm:mb-5">
                                    For legal or operational inquiries:
                                </p>
                                <div className="text-[14px] sm:text-[16px] font-inter text-white leading-[1.45] font-normal space-y-2">
                                    <p><span className="font-medium">TableMitra Pvt. Ltd.</span></p>
                                    <p>Noida, Uttar Pradesh, India</p>
                                    <p>Email: <span className="font-medium">ayush@TableMitra.com</span></p>
                                    <p>Support: 24/7 Customer Service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TermsOfService
