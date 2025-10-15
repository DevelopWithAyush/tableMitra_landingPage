"use client"

import Link from 'next/link'
import React from 'react'

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-[#F8F8F8] pt-[100px] sm:pt-[140px] lg:pt-[200px] pb-[70px] sm:pb-[100px] lg:pb-[150px]">
            {/* Main Content */}
            <div className="container mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Title Section */}
                    <div className="mb-[40px] sm:mb-[50px] lg:mb-[60px]">
                        <h1 className="text-[32px] sm:text-[36px] lg:text-[38px] font-dmSans font-semibold text-[#0A0A0A] leading-[1.2] mb-[10px] sm:mb-[14px]">
                            Privacy Policy
                        </h1>
                        <p className="text-[16px] sm:text-[18px] font-inter text-[#4D4D4D] leading-[1.4] font-normal">
                            Effective Date: October 13, 2025
                        </p>
                        <p className="text-[16px] sm:text-[18px] font-inter text-[#4D4D4D] leading-[1.4] font-normal mt-4 sm:mt-[14px]">
                            TableMitra Pvt. Ltd. (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) values your privacy and is committed to protecting the personal information of our users, clients, and their customers. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our services, website, and software products (collectively, the &quot;Services&quot;).
                        </p>
                        <p className="text-[16px] sm:text-[18px] font-inter text-[#4D4D4D] leading-[1.4] font-normal mt-4 sm:mt-[14px]">
                            By using our Services, you agree to the terms outlined in this Privacy Policy.
                        </p>
                    </div>

                    {/* Content Sections */}
                    <div className="flex flex-col items-start justify-start gap-6 sm:gap-8 lg:gap-10">
                        {/* Section 1 */}
                        <div className="bg-white rounded-[12px] sm:rounded-[16px] p-5 sm:p-6 lg:p-[30px] w-full flex flex-col items-start justify-start shadow-xs">
                            <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-dmSans font-medium text-[#0A0A0A] leading-[1.2] mb-[10px] sm:mb-[12px]">
                                1. Information We Collect
                            </h2>
                            <p className="text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal mb-4 sm:mb-5">
                                We may collect and process the following information:
                            </p>

                            <div className="flex flex-col items-start justify-start gap-y-4 sm:gap-y-5">
                                <div>
                                    <h3 className="text-[16px] sm:text-[18px] font-dmSans font-medium text-[#0A0A0A] leading-[1.4] mb-2 sm:mb-3">
                                        a. Guest and Hotel Information
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal ml-4">
                                        <li>Name, email, phone number, and room number (for guests).</li>
                                        <li>Hotel name, address, and contact details.</li>
                                        <li>Service request logs, feedback, and performance data.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-[16px] sm:text-[18px] font-dmSans font-medium text-[#0A0A0A] leading-[1.4] mb-2 sm:mb-3">
                                        b. Technical Data
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal ml-4">
                                        <li>IP address, browser type, device information, and operating system.</li>
                                        <li>Log data, access times, and referring URLs.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-[16px] sm:text-[18px] font-dmSans font-medium text-[#0A0A0A] leading-[1.4] mb-2 sm:mb-3">
                                        c. Communication Data
                                    </h3>
                                    <p className="text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal ml-4">
                                        Messages, emails, and other interactions sent through our platform.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="bg-white rounded-[12px] sm:rounded-[16px] p-5 sm:p-6 lg:p-[30px] w-full flex flex-col items-start justify-start shadow-xs">
                            <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-dmSans font-medium text-[#0A0A0A] leading-[1.2] mb-[10px] sm:mb-[12px]">
                                2. How We Use Collected Information
                            </h2>
                            <p className="text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal mb-4 sm:mb-5">
                                We use the collected information for the following purposes:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal ml-4">
                                <li>To provide and improve our Services and software performance.</li>
                                <li>To process, log, and fulfill guest service requests.</li>
                                <li>To ensure system security and prevent fraudulent activity.</li>
                                <li>To communicate with users, including sending updates, offers, or support notifications.</li>
                                <li>To generate analytical reports for operational improvement.</li>
                            </ul>
                        </div>

                        {/* Section 3 */}
                        <div className="bg-white rounded-[12px] sm:rounded-[16px] p-5 sm:p-6 lg:p-[30px] w-full flex flex-col items-start justify-start shadow-xs">
                            <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-dmSans font-medium text-[#0A0A0A] leading-[1.2] mb-[10px] sm:mb-[12px]">
                                3. Data Retention
                            </h2>
                            <p className="text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal">
                                We retain personal information only as long as necessary to fulfill the purposes outlined in this Policy or as required by law. Data may be retained in aggregated or anonymized form for analytics or reporting.
                            </p>
                        </div>

                        {/* Section 4 */}
                        <div className="bg-white rounded-[12px] sm:rounded-[16px] p-5 sm:p-6 lg:p-[30px] w-full flex flex-col items-start justify-start shadow-xs">
                            <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-dmSans font-medium text-[#0A0A0A] leading-[1.2] mb-[10px] sm:mb-[12px]">
                                4. Data Sharing and Disclosure
                            </h2>
                            <p className="text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal mb-4 sm:mb-5">
                                We do not sell or rent personal data. However, we may share data in the following circumstances:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal ml-4">
                                <li>With service providers assisting in system operations, analytics, or support.</li>
                                <li>When required by law, regulation, or government authority.</li>
                                <li>To protect the rights, property, or safety of TableMitra, its users, or the public.</li>
                            </ul>
                        </div>

                        {/* Section 5 */}
                        <div className="bg-white rounded-[12px] sm:rounded-[16px] p-5 sm:p-6 lg:p-[30px] w-full flex flex-col items-start justify-start shadow-xs">
                            <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-dmSans font-medium text-[#0A0A0A] leading-[1.2] mb-[10px] sm:mb-[12px]">
                                5. Cookies and Tracking Technologies
                            </h2>
                            <p className="text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal">
                                Our website may use cookies and similar technologies to enhance the user experience and analyze traffic. You can modify your browser settings to refuse cookies, but this may affect site functionality.
                            </p>
                        </div>

                        {/* Section 6 */}
                        <div className="bg-white rounded-[12px] sm:rounded-[16px] p-5 sm:p-6 lg:p-[30px] w-full flex flex-col items-start justify-start shadow-xs">
                            <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-dmSans font-medium text-[#0A0A0A] leading-[1.2] mb-[10px] sm:mb-[12px]">
                                6. Data Security
                            </h2>
                            <p className="text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal">
                                We implement appropriate administrative, technical, and physical safeguards to protect personal data from unauthorized access, alteration, disclosure, or destruction. However, no digital system is entirely secure, and users acknowledge this inherent risk.
                            </p>
                        </div>
                  
                  

                        {/* Section 7 - India Specific */}
                        <div className="bg-white rounded-[12px] sm:rounded-[16px] p-5 sm:p-6 lg:p-[30px] w-full flex flex-col items-start justify-start shadow-xs">

                            <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-dmSans font-medium text-[#0A0A0A] leading-[1.2] mb-[10px] sm:mb-[12px]">
                                7. International Data Transfers & India Compliance
                            </h2>
                            <p className="text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal mb-4 sm:mb-5">
As we operate primarily in India, data is stored and processed within the country. If any cross-border transfer occurs, it will comply with applicable data protection laws.                            </p>
                            
                        </div>

                        {/* Section 8 */}
                        <div className="bg-white rounded-[12px] sm:rounded-[16px] p-5 sm:p-6 lg:p-[30px] w-full flex flex-col items-start justify-start shadow-xs">
                            <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-dmSans font-medium text-[#0A0A0A] leading-[1.2] mb-[10px] sm:mb-[12px]">
                                8. Your Rights
                            </h2>
                            <p className="text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal mb-4 sm:mb-5">
                                Depending on your jurisdiction, you may have the right to:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal ml-4 mb-4 sm:mb-5">
                                <li>Access and obtain a copy of your data.</li>
                                <li>Request correction or deletion of your data.</li>
                                <li>Withdraw consent at any time (where applicable).</li>
                            </ul>
                            <p className="text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal">
                                To exercise these rights, contact us at <span className="text-[#FE5F1E] font-medium">ayush@TableMitra.com</span>
                            </p>
                        </div>

                        {/* Section 9 */}
                        <div className="bg-white rounded-[12px] sm:rounded-[16px] p-5 sm:p-6 lg:p-[30px] w-full flex flex-col items-start justify-start shadow-xs">
                            <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-dmSans font-medium text-[#0A0A0A] leading-[1.2] mb-[10px] sm:mb-[12px]">
                                9. Changes to This Policy
                            </h2>
                            <p className="text-[14px] sm:text-[16px] font-inter text-[#333] leading-[1.45] font-normal">
                                We may update this Privacy Policy from time to time. The updated version will be effective upon posting on our website.
                            </p>
                        </div>

                        {/* Section 10 - Contact */}
                        <div className="bg-[#FE5F1E] rounded-[12px] sm:rounded-[16px] p-5 sm:p-6 lg:p-[30px] w-full flex flex-col items-start justify-start shadow-xs">
                            <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-dmSans font-medium text-white leading-[1.2] mb-[10px] sm:mb-[12px]">
                                10. Contact Us
                            </h2>
                            <p className="text-[14px] sm:text-[16px] font-inter text-white leading-[1.45] font-normal mb-4 sm:mb-5">
                                For privacy-related inquiries, contact:
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

            {/* Footer */}

        </div>
    )
}

export default PrivacyPolicy
