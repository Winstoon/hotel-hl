import { Fragment } from "react";
import { I18N as Language } from "../../i18n";
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
    const { caption, images } = data

    return (
        <div className="section4">
            <div className="caption" style={{ letterSpacing: ls.H1 }}>{caption}</div>
            <div className="vscroll-cards">
                { images.map((img: any, idx: number) =>
                    <div key={idx} className="card">
                        <Image src={img.src} />
                        <div className="cpt" style={{ letterSpacing: ls.TXT }}>{img.caption}</div>
                        <div className="desc" style={{ letterSpacing: ls.TXT }}>{img.desc}</div>
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
            <div className="contact">
                <div className="address" style={{ letterSpacing: ls.TXT }}>
                    <Image className="icon" src="/icons/location.png" />
                    {contact.address}
                </div>
                <div style={{ letterSpacing: ls.TXT }}>{contact.phonenumber}</div>
                <div style={{ letterSpacing: ls.TXT }}>{contact.email}</div>
            </div>
            <div className="map">
                <div className="addr" style={{...mapCoord, letterSpacing: ls.TXT }}>{mapAddr}</div>
                <Image src={mapImage} />
            </div>
        </div>
    )
}

export default function MobileMuan () {
    const I18N = useCommonStore(state => state.I18N)
    const lang = useCommonStore(state => state.lang)
    const ls = useCommonStore(state => state.letterSpacing)
    const isEn = lang === Language.EN

    const data = {
        section1: {
            title: I18N['muan.title'],
            desc1: I18N['muan.desc1'],
            desc2: I18N['muan.desc2'],
            src: '/mobile/detail/muan-1.jpg'
        },
        section2: {
            intros: [
                I18N['detail.muan.2.intro1'],
                I18N['detail.muan.2.intro2'],
                '',
                I18N['detail.muan.2.intro3'],
                I18N['detail.muan.2.intro4'],
                I18N['detail.muan.2.intro5'],
                I18N['detail.muan.2.intro6'],
                I18N['detail.muan.2.intro7'],
                I18N['detail.muan.2.intro8']
            ],
            images: [
                '/mobile/detail/muan-2-1.jpg',
                '/mobile/detail/muan-2-2.jpg',
                '/mobile/detail/muan-2-3.jpg',
                '/mobile/detail/muan-2-4.jpg',
                '/mobile/detail/muan-2-5.jpg',
                '/mobile/detail/muan-2-6.jpg',
                '/mobile/detail/muan-2-7.jpg',
                '/mobile/detail/muan-2-8.jpg'
            ]
        },
        section3: {
            caption: I18N['detail.muan.3.caption'],
            intros: isEn ? 
            [
                I18N['detail.muan.3.intro1'],
                I18N['detail.muan.3.intro2'],
                I18N['detail.muan.3.intro3'],
                I18N['detail.muan.3.intro4'],
                '',
                I18N['detail.muan.3.intro5'],
                I18N['detail.muan.3.intro6']
            ] :
            [
                I18N['detail.muan.3.intro1'],
                I18N['detail.muan.3.intro2'],
                I18N['detail.muan.3.intro3'],
                '',
                I18N['detail.muan.3.intro4'],
                I18N['detail.muan.3.intro5'],
                I18N['detail.muan.3.intro6']
            ],
            images: [
                '/mobile/detail/muan-3-1.jpg',
                '/mobile/detail/muan-3-2.jpg',
                '/mobile/detail/muan-3-3.jpg'
            ]
        },
        section4: {
            caption: I18N['detail.muan.4.caption'],
            intros: [],
            images: [
                {
                    src: '/mobile/detail/muan-4-1.jpg',
                    caption: I18N['detail.muan.4.img1.caption'],
                    desc: I18N['detail.muan.4.img1.desc']
                },
                {
                    src: '/mobile/detail/muan-4-2.jpg',
                    caption: I18N['detail.muan.4.img2.caption'],
                    desc: I18N['detail.muan.4.img2.desc']
                },
                {
                    src: '/mobile/detail/muan-4-3.jpg',
                    caption: I18N['detail.muan.4.img3.caption'],
                    desc: I18N['detail.muan.4.img3.desc']
                },
                {
                    src: '/mobile/detail/muan-4-4.jpg',
                    caption: I18N['detail.muan.4.img4.caption'],
                    desc: I18N['detail.muan.4.img4.desc']
                },
                {
                    src: '/mobile/detail/muan-4-5.jpg',
                    caption: I18N['detail.muan.4.img5.caption'],
                    desc: I18N['detail.muan.4.img5.desc']
                },
                {
                    src: '/mobile/detail/muan-4-6.jpg',
                    caption: I18N['detail.muan.4.img6.caption'],
                    desc: I18N['detail.muan.4.img6.desc']
                }
            ]
        },
        section5: {
            caption: I18N['detail.muan.5.caption'],
            intros: [
                {
                    title: I18N['detail.muan.5.intro1.title'],
                    descs: [
                        I18N['detail.muan.5.intro1.desc1'],
                        I18N['detail.muan.5.intro1.desc2'],
                        I18N['detail.muan.5.intro1.desc3'],
                        I18N['detail.muan.5.intro1.desc4']
                    ]
                },
                {
                    title: I18N['detail.muan.5.intro2.title'],
                    descs: [
                        I18N['detail.muan.5.intro2.desc1'],
                        I18N['detail.muan.5.intro2.desc2'],
                        I18N['detail.muan.5.intro2.desc3'],
                        I18N['detail.muan.5.intro2.desc4']
                    ]
                }
            ],
            images: [
                '/mobile/detail/muan-5-1.jpg',
                '/mobile/detail/muan-5-2.jpg',
                '/mobile/detail/muan-5-3.jpg',
                '/mobile/detail/muan-5-4.jpg'
            ]
        },
        section6: null,
        section7: {
            contact: {
                address: I18N['detail.muan.7.address'],
                phonenumber: '+81 075 741 8815',
                email: 'info@ishibekojimuan.com'
            },
            intros: [
                I18N['detail.muan.7.intro1'],
                I18N['detail.muan.7.intro2'],
                I18N['detail.muan.7.intro3'],
                I18N['detail.muan.7.intro4'],
                I18N['detail.muan.7.intro5'],
                I18N['detail.muan.7.intro6']
            ],
            mapImage: '/mobile/detail/muan-map.png',
            mapAddr: I18N['detail.muan.7.mapaddr'],
            mapCoord: { right: 180, top: 392 }
        },
    }

    return (
        <div className="mobile-container mobile-detail">
            <Header />
            <Section1 ls={ls} data={data.section1} />
            <Section2 ls={ls} data={data.section2} />
            <Section3 ls={ls} data={data.section3} />
            <Section4 ls={ls} data={data.section4} />
            <Section5 ls={ls} data={data.section5} />
            <Section7 ls={ls} data={data.section7} />
            <Footer background='#171616' to="https://www.ishibekojimuan.com/reservation/" />
        </div>
    )
}
