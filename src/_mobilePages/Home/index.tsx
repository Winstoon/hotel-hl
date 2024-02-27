import { useEffect, useState } from "react";
import { I18N as Language } from "../../i18n";
import { useCommonStore } from "../../mobileStore";
import { ILetterSpacing } from "../../letterSpacings";
import Image, { AnimateBg } from "../../_mobileComponents/Image";
import FadeSlide from "../../_mobileComponents/FadeSlide/FadeSlide";
import FadeSlide2 from "../../_mobileComponents/FadeSlide/FadeSlide2";
import Header from "../../_mobileComponents/Header";
import Footer from "../../_mobileComponents/Footer";

import './index.css'
import CircleProgress from "../../_mobileComponents/CircleProgress";
import Button from "../../_mobileComponents/Button/Button";

function Slide1 ({ data, ls }: { data: any, ls: ILetterSpacing }) {
    const I18N = useCommonStore(state => state.I18N)
    const { images } = data

    return (
        <div className="section section1" style={{ height: window.innerHeight }}>
            <FadeSlide
                autoplay
                waiting={6500}
                length={images.length}
                trigger='hover'
                render={active => images.map((img: any, idx: number) => (
                    <div className="h1-slideitem" key={img.path}>
                        <Image src={img.src} className={active === idx ? 'active' : ''} />
                        <div className="h1-content">
                            <div className="title" style={{ letterSpacing: ls.H1 }}>{img.title}</div>
                            <div className="desc" style={{ letterSpacing: ls.TXT }}>{img.descs[0]}</div>
                            <div className="desc" style={{ letterSpacing: ls.TXT }}>{img.descs[1]}</div>
                            <div className="btn-group">
                                <Button to={img.path} uppercase>{I18N['explore']}</Button>
                            </div>
                        </div>
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

function Slide2 ({ data, ls }: { data: any, ls: ILetterSpacing }) {
    const I18N = useCommonStore(state => state.I18N)
    const lang = useCommonStore(state => state.lang)
    const isEn = lang === Language.EN

    const renderContent = () => {
        return (
            <div className="content" style={{ letterSpacing: ls.TXT }}>
                <div>{I18N['home.2.intro8']}</div>
                <div>
                    <span>{I18N['home.2.intro7.1']}</span>
                    <span>{I18N['home.2.intro7.2']}</span>
                    <span>{I18N['home.2.intro7.3']}</span>
                    {/* <span>{I18N['home.2.intro7.4']}</span> */}
                </div>
                <div>{I18N['home.2.intro6']}</div>
                <div>{I18N['home.2.intro5']}</div>
                <div>
                    <span>{I18N['home.2.intro4.1']}</span>
                    <span>{I18N['home.2.intro4.2']}</span>
                </div>
                <div>{I18N['home.2.intro3']}</div>
                <div>{I18N['home.2.intro2']}</div>
                <div>{I18N['home.2.intro1']}</div>
            </div>
        )
    }

    const renderEnContent = () => {
        return (
            <div className="content en" style={{ letterSpacing: ls.TXT }}>
                <div>{I18N['home.2.intro1']}</div>
                <div>{I18N['home.2.intro2']}</div>
                <div>{I18N['home.2.intro3']}</div>
                <div>
                    <span>{I18N['home.2.intro4.1']}</span>
                    <span>{I18N['home.2.intro4.2']}</span>
                </div>
                <div>{I18N['home.2.intro5']}</div>
                <div>{I18N['home.2.intro6']}</div>
                <div>
                    <span>{I18N['home.2.intro7.1']}</span>
                    <span>{I18N['home.2.intro7.2']}</span>
                    <span>{I18N['home.2.intro7.3']}</span>
                    {/* <span>{I18N['home.2.intro7.4']}</span> */}
                </div>
                <div>{I18N['home.2.intro8']}</div>
            </div>
        )
    }

    return (
        <div className="section section2" style={{ height: window.innerHeight}}>
            { isEn ? renderEnContent() : renderContent() }
            <AnimateBg src="/mobile/home/home-2.jpg" />
        </div>
    )
}

function Slide3 ({ data, ls }: { data: any, ls: ILetterSpacing }) {
    const { images } = data

    return (
        <div className="section section3" style={{ height: window.innerHeight }}>
            <FadeSlide2
                autoplay
                waiting={6500}
                length={images.length}
                trigger='hover'
                render={active => images.map((img: any, idx: number) => (
                    <div className="h3-slideitem" key={idx}>
                        <Image src={img.src} className={active === idx ? 'active' : ''} />
                        <div className="content">
                            <div className="title" style={{ letterSpacing: ls.H1 }}>{img.title}</div>
                            <div className="desc" style={{ letterSpacing: ls.TXT }}>{img.descs[0]}</div>
                            <div className="desc" style={{ letterSpacing: ls.TXT }}>{img.descs[1]}</div>
                        </div>
                    </div>
                ))}
                paginationClassName="h3-pagination"
                renderPaginations={active => ([
                    <div className="h3-pis">
                        { images.map((img: any, idx: number) => 
                            <div
                                key={idx}
                                className={`pi ${active === idx ? 'active' : ''}`}
                                style={{ letterSpacing: ls.TXT }}
                            >
                                {img.title}
                            </div>
                        )}
                    </div>
                ])}
            />
        </div>
    )
}

function Slide4 () {
    return (
        <div className="section section4">
            <div className="content">
                <div className="jt-logo">
                    <Image src="/mobile/logo.svg" />
                </div>
                <div className="others">
                    <Image src="/logos/muan.svg" />
                    <Image src="/logos/arcadia.svg" />
                    <Image src="/logos/yukoro.svg" />
                    <Image src="/logos/kanrinkyo.svg" />
                    <Image src="/logos/newland.svg" />
                </div>
            </div>
            <AnimateBg src="/mobile/home/home-4.jpg" />
        </div>
    )
}

export default function MobileHome () {
    const [lpHide, setLPHide] = useState(false)
    const [lpRemoved, setLPRemoved] = useState(false)
    const I18N = useCommonStore(state => state.I18N)
    const letterSpacing = useCommonStore(state => state.letterSpacing)

    useEffect(() => {
        setTimeout(() => {
            setLPHide(true)
        }, 4000);
        setTimeout(() => {
            setLPRemoved(true)
        }, 5100)
    }, [])

    const data = {
        section1: {
            images: [
                {
                    path: '/mobile/muan',
                    src: '/mobile/home/home-1-1.jpg', title: I18N['muan.title'],
                    descs: [I18N['muan.desc1'], I18N['muan.desc2.mobile']],
                },
                {
                    path: '/mobile/arcadia',
                    src: '/mobile/home/home-1-2.jpg', title: I18N['arcadia.title'],
                    descs: [I18N['arcadia.desc1.mobile'], I18N['arcadia.desc2']],
                },
                {
                    path: '/mobile/kanrinkyo',
                    src: '/mobile/home/home-1-3.jpg', title: I18N['kanrinkyo.title'],
                    descs: [I18N['kanrinkyo.desc1.mobile'], I18N['kanrinkyo.desc2']],
                },
                {
                    path: '/mobile/yukoro',
                    src: '/mobile/home/home-1-4.jpg', title: I18N['yukoro.title'],
                    descs: [I18N['yukoro.desc1.mobile'], I18N['yukoro.desc2']],
                },
                {
                    path: '/mobile/newland',
                    src: '/mobile/home/home-1-5.jpg', title: I18N['newland.title'],
                    descs: [I18N['newland.desc1'], I18N['newland.desc2']],
                }
            ]
        },
        section2: {},
        section3: {
            images: [
                {
                    src: '/mobile/home/home-3-1.jpg', title: I18N['home.3.tab1'],
                    descs: [I18N['home.3.tab1.desc1'], I18N['home.3.tab1.desc2']]
                },
                {
                    src: '/mobile/home/home-3-2.jpg', title: I18N['home.3.tab2'],
                    descs: [I18N['home.3.tab2.desc1'], I18N['home.3.tab2.desc2']]
                },
                {
                    src: '/mobile/home/home-3-3.jpg', title: I18N['home.3.tab3'],
                    descs: [I18N['home.3.tab3.desc1'], I18N['home.3.tab3.desc2']]
                }
            ]
        }
    }

    return (
        <>
            { lpHide ? <Header /> : null }
            <div className={`mobile-loading-page ${lpHide ? 'hide' : ''} ${lpRemoved ? 'remove' : ''}`}>
                {/* @ts-ignore */}
                <Image className='logo' src='/mobile/logo.svg' />
                <AnimateBg src='/mobile/home/home-0.jpg' reverse />
            </div>

            <div className="mobile-container mobile-home">
                { lpHide ?
                    <>
                        <Slide1 ls={letterSpacing} data={data.section1} />
                        <Slide2 ls={letterSpacing} data={data.section2} />
                        <Slide3 ls={letterSpacing} data={data.section3} />
                        <Slide4 />
                        <Footer />
                    </> : null
                }
            </div>
        </>
    )
}
