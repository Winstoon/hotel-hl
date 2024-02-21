import { Fragment } from "react";
import CircleProgress from "../../_mobileComponents/CircleProgress";
import FadeSlide from "../../_mobileComponents/FadeSlide/FadeSlide";
import Footer from "../../_mobileComponents/Footer";
import Header from "../../_mobileComponents/Header";
import Image, { AnimateBg } from "../../_mobileComponents/Image";
import { ILetterSpacing } from "../../letterSpacings";
import { useCommonStore } from "../../mobileStore";

import './index.css'

function Section1 ({ls, data}: {ls: ILetterSpacing, data: any}) {
    return (
        <div className="section1" style={{ height: '100vh' }}>
            <AnimateBg src={data.src} />
            <div className="content">
                <div className="title" style={{ letterSpacing: ls.H1}}>{data.title}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
            </div>
        </div>
    )
}

function Section2 ({ls, data}: {ls: ILetterSpacing, data: any}) {
    const { intros, images } = data

    return (
        <div className="section2">
            <div className="intros">
                {intros.map((intro: string, idx: number) => 
                    <div
                        key={idx}
                        className="intro"
                        style={{ letterSpacing: ls.TXT }}
                    >{intro}</div>
                )}
            </div>
            <div className="vscroll-imgs">
                { images.map((src: string) =>
                    <Image key={src} src={src} />
                )}
            </div>
        </div>
    )
}

function Section3 ({ls, data}: {ls: ILetterSpacing, data: any}) {
    const { caption, intros, images } = data

    return (
        <div className="section3" style={{ height: '100vh' }}>
            <div className="content">
                <div className="caption" style={{ letterSpacing: ls.H1 }}>{caption}</div>
                <div className="intros">
                    {intros.map((intro: string, idx: number) =>
                        <div
                            key={idx}
                            className="intro"
                            style={{ letterSpacing: ls.TXT }}
                        >{intro}</div>
                    )}
                </div>
            </div>
            <FadeSlide
                autoplay
                waiting={6500}
                length={images.length}
                trigger='hover'
                render={active => images.map((src: string) => (
                    <div className="h1-slideitem" key={src}>
                        <Image src={src} />
                    </div>
                ))}
                paginationClassName="h1-pagination"
                renderPaginations={active => images.map((img: any, idx: number) => (
                    <CircleProgress key={idx} active={active === idx} width={14} height={14} />
                ))}
            />
        </div>
    )
}

function Section4 ({ls, data}: {ls: ILetterSpacing, data: any}) {
    const { caption, intros, images } = data

    return (
        <div className="section4">
            <div className="caption" style={{ letterSpacing: ls.H1 }}>{caption}</div>
            <div className="intros">
                {intros.map((intro: string) =>
                    <div className="intro" style={{ letterSpacing: ls.TXT }}>{intro}</div>
                )}
            </div>
            <div className="vscroll-cards">
                { images.map((img: any, idx: number) =>
                    <div key={idx} className="card">
                        <Image src={img.src} />
                    </div>
                )}
            </div>
        </div>
    )
}

function Section5 ({ls, data}: {ls: ILetterSpacing, data: any}) {
    const { caption, intros, images } = data

    return (
        <div className="section5">
            <div className="caption" style={{ letterSpacing: ls.H1 }}>{caption}</div>
            <div className="intros">
                {intros.map((intro: any, idx: number) => 
                    <Fragment key={idx}>
                        <div className="title" style={{ letterSpacing: ls.TXT }}>{intro.title}</div>
                        { intro.descs.map((desc: string, sidx: number) =>
                            <div key={sidx} className="intro" style={{ letterSpacing: ls.TXT }}>{desc}</div>
                        )}
                    </Fragment>
                )}
            </div>
            <div className="vscroll-imgs">
                { images.map((src: string, idx: number) =>
                    <Image key={idx} src={src} />
                )}
            </div>
        </div>
    )
}

// function Section6 () {}
function Section7 ({ls, data}: {ls: ILetterSpacing, data: any}) {
    const { contact, intros, mapImage, mapAddr, mapCoord } = data
    return (
        <div className="section7">
            <div className="intros">
                { intros.map((intro: string, idx: number) =>
                    <div
                        key={idx}
                        className="intro"
                        style={{ letterSpacing: ls.TXT }}
                    >{intro}</div>
                )}
            </div>
            <div className="contact" style={{ width: 314 }}>
                <div className="address" style={{ letterSpacing: ls.TXT }}>
                    <Image className="icon" src="/icons/location.png" />
                    {contact.address}
                </div>
                <div style={{ letterSpacing: ls.TXT }}>{contact.phonenumber}</div>
                <div style={{ letterSpacing: ls.TXT }}>{contact.email}</div>
            </div>
            <div className="map">
                <div className="addr" style={{...mapCoord, letterSpacing: ls.TXT }}>{mapAddr}</div>
                <Image src={mapImage} style={{ marginBottom: -40 }} />
            </div>
        </div>
    )
}

export default function MobileYukoro () {
    const I18N = useCommonStore(state => state.I18N)
    const ls = useCommonStore(state => state.letterSpacing)

    const data = {
        section1: {
            title: I18N['yukoro.title'],
            desc1: I18N['yukoro.desc1'],
            desc2: I18N['yukoro.desc2'],
            src: '/mobile/detail/yukoro-1.jpg'
        },
        section2: {
            intros: [
                I18N['detail.yukoro.2.intro1'],
                I18N['detail.yukoro.2.intro2'],
                I18N['detail.yukoro.2.intro3'],
                '',
                I18N['detail.yukoro.2.intro4'],
                I18N['detail.yukoro.2.intro5'],
                I18N['detail.yukoro.2.intro6'],
                I18N['detail.yukoro.2.intro7'],
                I18N['detail.yukoro.2.intro8']
            ],
            images: [
                '/mobile/detail/yukoro-2-1.jpg',
                '/mobile/detail/yukoro-2-2.jpg',
                '/mobile/detail/yukoro-2-3.jpg',
                '/mobile/detail/yukoro-2-4.jpg',
                '/mobile/detail/yukoro-2-5.jpg',
                '/mobile/detail/yukoro-2-6.jpg',
                '/mobile/detail/yukoro-2-7.jpg',
                '/mobile/detail/yukoro-2-8.jpg'
            ]
        },
        section3: {
            caption: I18N['detail.yukoro.3.caption'],
            intros: [
                I18N['detail.yukoro.3.intro1'],
                I18N['detail.yukoro.3.intro2'],
                I18N['detail.yukoro.3.intro3'],
                '',
                I18N['detail.yukoro.3.intro4'],
                I18N['detail.yukoro.3.intro5'],
                I18N['detail.yukoro.3.intro6'],
                // I18N['detail.yukoro.3.intro7'],
                // I18N['detail.yukoro.3.intro8']
            ],
            images: [
                '/mobile/detail/yukoro-3-1.jpg',
                '/mobile/detail/yukoro-3-2.jpg',
                '/mobile/detail/yukoro-3-3.jpg',
                '/mobile/detail/yukoro-3-4.jpg'
            ]
        },
        section4: {
            caption: I18N['detail.yukoro.4.caption'],
            intros: [
                I18N['detail.yukoro.4.intro1'],
                I18N['detail.yukoro.4.intro2'],
                '',
                I18N['detail.yukoro.4.intro3'],
                I18N['detail.yukoro.4.intro4'],
                I18N['detail.yukoro.4.intro5'],
                I18N['detail.yukoro.4.intro6'],
                I18N['detail.yukoro.4.intro7'],
            ],
            images: [
                { src: '/mobile/detail/yukoro-4-1.jpg' },
                { src: '/mobile/detail/yukoro-4-2.jpg' },
                { src: '/mobile/detail/yukoro-4-3.jpg' }
            ]
        },
        section5: {
            caption: I18N['detail.yukoro.5.caption'],
            intros: [
                {
                    title: null,
                    descs: [
                        I18N['detail.yukoro.5.intro1'],
                        I18N['detail.yukoro.5.intro2'],
                        I18N['detail.yukoro.5.intro3'],
                        '',
                        I18N['detail.yukoro.5.intro4'],
                        I18N['detail.yukoro.5.intro5'],
                        I18N['detail.yukoro.5.intro6'],
                        I18N['detail.yukoro.5.intro7'],
                        I18N['detail.yukoro.5.intro8'],
                        I18N['detail.yukoro.5.intro9']
                    ]
                }
            ],
            images: [
                '/mobile/detail/yukoro-5-1.jpg',
                '/mobile/detail/yukoro-5-2.jpg',
                '/mobile/detail/yukoro-5-3.jpg',
                '/mobile/detail/yukoro-5-4.jpg'
            ]
        },
        section6 : null,
        section7: {
            contact: {
                address: I18N['detail.yukoro.7.address'],
                phonenumber: '+81 136 55 8917',
                email: 'info@ryowhagroup.com'
            },
            intros: [
                I18N['detail.yukoro.7.intro1'],
                I18N['detail.yukoro.7.intro2'],
                I18N['detail.yukoro.7.intro3'],
                I18N['detail.yukoro.7.intro4'],
                // I18N['detail.yukoro.7.intro5']
            ],

            // same addr with Arcadia
            mapImage: '/mobile/detail/yukoro-map.png',
            mapAddr: I18N['detail.arcadia.7.mapaddr'],
            mapCoord: { right: 30, top: 438 }
        }
    }

    return (
        <div className="mobile-container mobile-detail yukoro">
            <Header />
            <Section1 ls={ls} data={data.section1} />
            <Section2 ls={ls} data={data.section2} />
            <Section3 ls={ls} data={data.section3} />
            <Section4 ls={ls} data={data.section4} />
            <Section5 ls={ls} data={data.section5} />
            <Section7 ls={ls} data={data.section7} />
            <Footer background="#171616" coming />
        </div>
    )
}
