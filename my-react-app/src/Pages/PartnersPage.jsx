import React from "react";
import Partners from "../Components/Partners";

const ANCHORCLASS = "text-[#ffe239] hover:underline";

const PARTNERS = [
    { title: 'Main Sponsor and Official Beverage Partner', imageUrl: '/partners/image1.jpg', 
        text: (
            <div className="flex flex-col space-y-4">
                <p>
                    Paper Rex has teamed up with Indonesia’s leading vitamin drink and isotonic beverage company, <a href="https://youc1000.com/en/home-en/?utm_source=pprx.team&utm_medium=website&utm_campaign=paper_rex_2024&utm_term=learn-more&utm_content=prx-partner-page" target="_blank" className={ANCHORCLASS}>YOU•C1000</a>!
                </p>
                <p>
                    The partnership between YOU•C1000 and Paper Rex will see us both investing in the growth and development of the Paper Rex team, facilitating our future expansion plans, and reinforcing a strong foundation for Paper Rex.
                </p>
            </div>
        )
    },
    { title: 'Official Mouse & Keyboard Partner', imageUrl: '/partners/image2.jpg', 
        text: (
            <div className="flex flex-col space-y-4">
                <p>
                    Pulsar Gaming Gears, established in 2020, proudly represents a leading esports brand rooted in South Korea. With a decade-long background in the gaming gear industry, their dedicated team is committed to providing state-of-the-art, cost-effective solutions. Paper Rex is partnering up for the 2024 season with <a href="https://www.pulsar.gg/?utm_source=pprx.team&utm_medium=organic&utm_campaign=paper_rex_2024&utm_term=learn+more" target="_blank" className={ANCHORCLASS}>Pulsar</a> as the Official Mouse & Keyboard Partner of choice for Paper Rex.
                </p>
                <p>
                    Learn more about Pulsar <a href="https://www.pulsar.gg/?utm_source=pprx.team&utm_medium=organic&utm_campaign=paper_rex_2024&utm_term=learn+more" target="_blank" className={ANCHORCLASS}>here</a>.
                </p>
            </div>
        )
    },
    { title: 'Official Audio Partner', imageUrl: '/partners/image3.jpg', 
        text: (
            <div className="flex flex-col space-y-4">
                <p>
                    Paper Rex has partnered with HyperX, the gaming division of HP, Inc., as the Official Audio Partner. The partnership will equip Paper Rex players and content creators with award-winning <a href="https://hyperx.com/?utm_source=pprx.team&utm_medium=referral&utm_campaign=paper_rex_2024&utm_term=learn-more&utm_content=prx-partner-page" target="_blank" className={ANCHORCLASS}>HyperX</a> gaming headsets and microphones, further enhancing our overall competitive, gaming, and streaming capabilities.
                </p>
            </div>
        )
    },
    { title: 'Official Monitor Partner', imageUrl: '/partners/image4.jpg', 
        text: (
            <div className="flex flex-col space-y-4">
                <p>
                    The Paper Rex training battlestations are equipped with <a href="https://zowie.benq.com/en-sg/monitor/xl2566k.html?utm_source=pprx.team&utm_medium=referral&utm_campaign=zowie-xl2566k-website-prx-regular&utm_term=learn-more&utm_content=prx-partner-page" target="_blank" className={ANCHORCLASS}>ZOWIE XL2566K"</a> monitors—the industry standard for first-person shooter esports. We are glad that <a href="https://zowie.benq.com/en-sg/monitor/xl2566k.html?utm_source=pprx.team&utm_medium=referral&utm_campaign=zowie-xl2566k-website-prx-regular&utm_term=learn-more&utm_content=prx-partner-page" target="_blank" className={ANCHORCLASS}>ZOWIE</a> has come on board as our official Monitor partner. When it comes to esports, seeing isn't just believing, it's the difference between life and death.
                </p>
            </div>
        )
    },
    { title: 'Official Performance Partner', imageUrl: '/partners/image5.jpg', 
        text: (
            <div className="flex flex-col space-y-4">
                <p>
                    Every battlestation in our training facility is custom-built and maintained by <a href="https://www.dreamcore.com.sg/" target="_blank" className={ANCHORCLASS}>Dreamcore</a>. We work with Dreamcore to design systems around the demanding needs of our FPS esports athletes. In addition to delivering excellent performance, Dreamcore also provided us machines that are extremely efficient in thermal management and system stability. This has proven to be extremely valuable particularly during our training sessions where a player's system crash is extremely disruptive to the team's overall momentum.
                </p>
            </div>
        )
    },
    { title: 'Official Performance Partner', imageUrl: '/partners/image5.jpg', 
        text: (
            <div className="flex flex-col space-y-4">
                <p>
                    Established in 2014, Secretlab has redefined what people think of when it comes to gaming chairs. Driven by extensive research, development, and cutting-edge engineering, Secretlab’s award-winning chairs are the top choice of the world’s premier gaming tournaments, championship-winning teams and over 3,000,000 users worldwide. Today, Secretlab’s proprietary technology and design innovations continue to push the boundaries in ergonomic comfort and the science of sitting, winning over 60 Editor’s Choice and Best Hardware Awards from leading international publications and reviewers.
                </p>
                <p>
                    To learn more about Secretlab, visit their <a href="https://secretlab.sg/?rfsn=7179365.4ebca4&utm_source=pprx.team&utm_medium=referral&utm_campaign=paper_rex_2024&utm_term=learn-more&utm_content=prx-partner-page" target="_blank" className={ANCHORCLASS}>website</a>, or follow Secretlab on Facebook, Instagram (@Secretlab) and Twitter (@secretlabchairs) pages.
                </p>
            </div>
        )
    }
]

const PartnersPage = () => {
    return (
        <div className="flex flex-1 items-center justify-center bg-black min-h-0 min-w-0 h-full w-full text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <p>
                    Our Partners are the brands that share our vision in elevating the professionalism and quality of regional esports. Learn more about brands and sponsors that work together with us below.
                </p>
                <Partners partners={PARTNERS} />
            </div>
        </div>
    );
}

export default PartnersPage;