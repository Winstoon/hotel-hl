import { useEffect } from "react"
import { useCommonStore } from "../../store"
import Fullpage from "../../components/FullPage/FullPage"
import Header from "../../components/Header/Header"
import Image from "../../components/Image/Image"
import Button from "../../components/Button/Button"
import SwiperImages from "../../components/SwiperImages/SwiperImages"
import FadeSlide from "../../components/FadeSlide/FadeSlide"
import FadeSlide2 from "../../components/FadeSlide/FadeSlide2"
import CircleProgress from "../../components/CircleProgress/CircleProgress"
import FadeSlide3 from "../../components/FadeSlide/FadeSlide3"
import SwiperImages2 from "../../components/SwiperImages/SwiperImages2"
import Footer from "../../components/Footer/Footer"
import { ILetterSpacing } from "../../letterSpacings"

import './Detail.css'

function Slide1 ({ ls, data, order }: { ls: ILetterSpacing, data: any, order: number }) {
    const active = order === 0
    const I18N = useCommonStore(state => state.I18N)
    const { logo, caption, intros, gotoLink, orderLink, background } = data

    return (
        <div className="section section1">
            <div className={`background ${active ? 'animate' : ''}`}>
                <Image src={background} />
            </div>
            <div className={`content ${active ? 'animate' : ''}`}>
                { logo ? <Image className="logo" src={logo} /> : null }
                <div className="caption" style={{ letterSpacing: ls.H1 }}>{caption}</div>
                {intros.map((intro: string, index: number) =>
                    <div key={index} className="intro" style={{ letterSpacing: ls.TXT }}>{intro}</div>
                )}
                <div className="btns">
                    { gotoLink ? <Button href={gotoLink}>{I18N['detail']}</Button> : null }
                    { orderLink ? <Button href={orderLink}>{I18N['reserve']}</Button> : null }
                </div>
            </div>
            <div className="progress">
                <div className="bar"></div>
            </div>
        </div>
    )
}

function Slide2 ({ ls, data, order }: { ls: ILetterSpacing, data: any, order: number }) {
    const active = order === 1
    const { intros, images } = data

    return (
        <div className="section section2">
            <div className={`content ${active ? 'animate' : ''}`}>
                <div className="intros" style={{ letterSpacing: ls.TXT }}>
                    { intros.map((intro: string, index: number) => 
                        intro ? 
                            <div className="intro" key={index}>{intro}</div>:
                            <div className="intro empty"></div>
                    )}
                </div>

                <div className="images">
                    <SwiperImages images={images} />
                </div>
            </div>
        </div>
    )
}

function Slide3 ({ ls, data, order }: { ls: ILetterSpacing, data: any, order: number }) {
    const active = order === 2
    const { caption, intros, images } = data

    return (
        <div className="section section3">
            <div className={`content ${active ? 'animate' : ''}`}>
                <div className="caption" style={{ letterSpacing: ls.H1 }}>{caption}</div>
                <div className={`line ${active ? 'animate' : ''}`}></div>
                <div className="intros" style={{ letterSpacing: ls.TXT }}>
                    {intros.map((intro: string, index: number) =>
                        <div className={`intro ${intro ? '' : 'empty'}`} key={index}>{intro}</div>
                    )}
                </div>
            </div>
            
            <FadeSlide
                autoplay
                waiting={5500}
                length={images.length}
                render={atv => images.map((img: string, idx: number) =>
                    <div className="d3-slideitem">
                        <Image src={img} className={atv === idx ? 'active' : ''} />
                    </div>
                )}
                paginationClassName="d3-pagination"
                renderPaginations={atv => images.map((img: string, idx: number) =>
                    <CircleProgress active={atv === idx} width={14} height={14} />
                )}
            />
        </div>
    )
}

function Slide4 ({ ls, data, order }: { ls: ILetterSpacing, data: any, order: number }) {
    const active = order === 3
    const { caption, intros, images } = data

    // 每组 3 个 images，参考 Slide 2
    return (
        <div className="section section4">
            <div className={`content ${active ? 'animate' : ''}`}>
                <div className="caption" style={{ letterSpacing: ls.H1 }}>{caption}</div>
                { intros.map((intro: string, index: number) => 
                    intro ?
                        <div className="intro" key={index} style={{ letterSpacing: ls.TXT }}>{intro}</div> :
                        <div className="empty"></div>
                )}

                <div className="image-wrapper" style={{ marginTop: 20, paddingBottom: intros.length ? 60 : 80 }}>
                    <SwiperImages2 images={images} />
                </div>
            </div>
        </div>
    )
}

function Slide5 ({ ls, data, order }: { ls: ILetterSpacing, data: any, order: number }) {
    const active = order === 4
    const { caption, intros, images } = data

    return (
        <div className="section section5">
            <div className={`content ${active ? 'animate' : ''}`}>
                <div className="wrap">
                    <div className="caption" style={{ letterSpacing: ls.H1 }}>{caption}</div>
                    <div className={`line ${active ? 'animate' : ''}`}></div>
                    { intros.map((intro: any, index: number) =>
                        <div className="intro" key={index}>
                            { intro.title ? <div className="intro-tit" style={{ letterSpacing: ls.TXT }}>{intro.title}</div> : null }
                            { intro.descs.map((desc: string, index: number) =>
                                desc ?
                                    <div className="intro-desc" key={`d-${index}`} style={{ letterSpacing: ls.TXT }}>{desc}</div> :
                                    <div style={{height: 24}}></div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <FadeSlide2
                autoplay
                waiting={5500}
                length={images.length}
                render={atv => images.map((img: string, idx: number) =>
                    <div className="d5-slideitem">
                        <Image src={img} className={atv === idx ? 'active' : ''} />
                    </div>
                )}
                paginationClassName="d5-pagination"
                renderPaginations={atv => images.map((img: string, idx: number) =>
                    <CircleProgress active={atv === idx} width={14} height={14} />
                )}
            />
        </div>
    )
}

function Slide6 ({ ls, data, order }: { ls: ILetterSpacing, data: any, order: number }) {
    const active = order === 5
    const { caption, intros, images } = data

    return (
        <div className="section section3">
            <div className={`content ${active ? 'animate' : ''}`}>
                <div className="caption" style={{ letterSpacing: ls.H1 }}>{caption}</div>
                <div className={`line ${active ? 'animate' : ''}`}></div>
                <div className="intros" style={{ letterSpacing: ls.TXT }}>
                    {intros.map((intro: string, index: number) =>
                        <div className={`intro ${intro ? '' : 'empty'}`} key={index}>{intro}</div>
                    )}
                </div>
            </div>
            
            <FadeSlide3
                autoplay
                waiting={5500}
                length={images.length}
                render={atv => images.map((img: string, idx: number) =>
                    <div className="d3-slideitem">
                        <Image src={img} className={atv === idx ? 'active' : ''} />
                    </div>
                )}
                paginationClassName="d3-pagination"
                renderPaginations={atv => images.map((img: string, idx: number) =>
                    <CircleProgress active={atv === idx} width={14} height={14} />
                )}
            />
        </div>
    )
}

function Slide7 ({ ls, data, order }: { ls: ILetterSpacing, data: any, order: number }) {
    const active = order >= 6
    const { contact, intros, mapImage, mapAddr, mapCoord } = data
    const { address, phonenumber, email } = contact
    const { x, y } = mapCoord

    return (
        <div className="section section7" style={{ letterSpacing: ls.TXT }}>
            <div className={`content ${active ? 'animate' : ''}`}>
                <div className="left">
                    <div className="contact">
                        <div className="address">
                            <Image className="ico-location" src="/icons/location.png" />
                            {address}
                        </div>
                        <div className="phonenumber">{phonenumber}</div>
                        <div className="email">{email}</div>
                    </div>
                    <div className="intros">
                        { intros.map((intro: string, index: number) =>
                            <div key={index} className="intro">{intro}</div>
                        )}
                    </div>
                </div>

                <div className="mapbox">
                    <Image className="map-img" src={mapImage} />
                    <div className="mapaddr" style={{ left: x, top: y }}>
                        {mapAddr}
                    </div>
                </div>
            </div>
        </div>
    )
}

function Slide8 ({ ls, data, order }: { ls: ILetterSpacing, data: any, order: number }) {
    const active = order === 7
    const I18N = useCommonStore(state => state.I18N)
    const { caption, intros, gotoLink, orderLink } = data

    return (
        <div className="section section8">
            <div className={`content ${active ? 'animate' : ''}`}>
                <div className="caption" style={{ letterSpacing: ls.H1 }}>{caption}</div>
                { intros.map((intro: string, index: number) =>
                    <div key={index} className="intro" style={{ letterSpacing: ls.TXT }}>{intro}</div>
                )}
                <div className="btns">
                    { gotoLink ? <Button href={gotoLink}>{I18N['detail']}</Button> : null }
                    { orderLink ? <Button href={orderLink}>{I18N['reserve']}</Button> : null }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default function Detail (props: { data: any }) {
    const { data } = props
    const letterSpacing = useCommonStore(state => state.letterSpacing)
    const [pageSectionOrder, setPageSectionOrder] = useCommonStore(state => [state.pageSectionOrder, state.setPageSectionOrder])

    const headerConfig = {
        lightmode: pageSectionOrder === 1 || pageSectionOrder === 3,
        showOrderBtn: pageSectionOrder > 0,
        orderLink: data.section1.orderLink,
        smallLogo: true
    }

    const handleGotoTop = () => {
        window.location.href = window.location.href.split('#')[0]
        setPageSectionOrder(0)
    }

    useEffect(() => {
        setPageSectionOrder(0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="detail">
            <Header {...headerConfig} />
            <Fullpage
                ignoreHideIndex={data.section6 ? [6,7] : [5,6]}
                sliders={[
                    <Slide1 ls={letterSpacing} data={data.section1} order={pageSectionOrder} />,
                    <Slide2 ls={letterSpacing} data={data.section2} order={pageSectionOrder} />,
                    <Slide3 ls={letterSpacing} data={data.section3} order={pageSectionOrder} />,
                    <Slide4 ls={letterSpacing} data={data.section4} order={pageSectionOrder} />,
                    <Slide5 ls={letterSpacing} data={data.section5} order={pageSectionOrder} />,
                    data.section6 ? <Slide6 ls={letterSpacing} data={data.section6} order={pageSectionOrder} /> : null,
                    <Slide7 ls={letterSpacing} data={data.section7} order={pageSectionOrder + (data.section6 ? 0 : 1)} />,
                    <Slide8 ls={letterSpacing} data={data.section1} order={pageSectionOrder + (data.section6 ? 0 : 1)} />
                ]}
            />
            <div className={`goto-top ${headerConfig.lightmode ? 'light' : ''} ${pageSectionOrder > 1 ? 'animate' : ''}`} onClick={handleGotoTop}>
                <Image src={headerConfig.lightmode ? "/icons/up-black.svg" : "/icons/up.svg"} />
            </div>
        </div>
    )
}
