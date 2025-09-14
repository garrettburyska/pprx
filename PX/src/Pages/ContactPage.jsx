import React from "react";
import Link from "../Components/Link";

const EMAILS = [
    { title: 'General Enquiries', href: 'mailto:hello@pprx.team' },
    { title: 'Invitations & Tournaments', href: 'mailto:harley@pprx.team' },
    { title: 'Brand Partnerships', href: 'mailto:partnerships@pprx.team' },
    { title: 'Acquisitions', href: 'mailto:matt@pprx.team' },
    { title: 'Jobs', href: 'mailto:jobs@pprx.team' }
];

const ContactPage = () => {
    return (
        <div className="flex flex-1 items-center justify-center bg-black min-h-0 min-w-0 h-full w-full text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <img src="/image1.jpg" alt="Contact Us" className="w-full h-auto mb-8" />
                <p className="font-bold mb-4">Singapore:</p>
                <p>IMPLS Entertainment Pte Ltd.</p>
                <p>55 Kim Chuan Drive</p>
                <p>Suite 09-01</p>
                <p className="mb-8">Singapore 537098</p>
                <p className="font-bold mb-4">South Korea:</p>
                <p>IMPLS Entertainment Pte Ltd.</p>
                <p>16F, Gangnam Bldg, 396 Seocho-daero, Seocho-gu, Seoul 06619, Korea</p>
                <p>주식회사 임플스 엔터테인먼트</p>
                <p className="mb-8">서울특별시 서초구 서초대로 396, 16층 (서초동, 강남빌딩)</p>
                <p className="mb-4">For specific inquires, please reach us on the emails below:</p>
                <div className="flex flex-col space-y-2">
                    {EMAILS.map((email, index) => (
                        <Link key={index} link={email} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ContactPage;