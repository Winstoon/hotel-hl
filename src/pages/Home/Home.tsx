import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCommonStore, useFadeSlide2Store } from "../../store";
import Fullpage from "../../components/FullPage/FullPage";
import Header from "../../components/Header/Header";
import FadeSlide from "../../components/FadeSlide/FadeSlide";
import FadeSlide2 from "../../components/FadeSlide/FadeSlide2";
import Image from "../../components/Image/Image";
import Button from "../../components/Button/Button";
import { ILetterSpacing } from "../../letterSpacings";

import './Home.css'

function Slide1 ({ order, ls }: { order: number, ls: ILetterSpacing }) {
    const I18N = useCommonStore(state => state.I18N)

    return (
        <FadeSlide
            autoplay
            waiting={6500}
            length={5}
            trigger='hover'
            render={active => [
                <div className="h1-slideitem">
                    <Image src='/jpgs/muan.jpg' className={active === 0 ? 'active' : ''} />
                    <div className="h1-content">
                        <div><Image className="logo" height={126} src="/logos/muan.svg" /></div>
                        <div className="title" style={{ letterSpacing: ls.H1 }}>{I18N['muan.title']}</div>
                        <div className="desc" style={{ letterSpacing: ls.TXT }}>{I18N['muan.desc1']}</div>
                        <div className="desc" style={{ letterSpacing: ls.TXT }}>{I18N['muan.desc2']}</div>
                        <div className="btn-group">
                            <Button to="/muan" uppercase>{I18N['explore']}</Button>
                        </div>
                    </div>
                </div>,
                <div className="h1-slideitem">
                    <Image src='/jpgs/arcadia.jpg' className={active === 1 ? 'active' : ''} />
                    <div className="h1-content">
                        <div><Image className="logo" height={126} src="/logos/arcadia.svg" /></div>
                        <div className="title" style={{ letterSpacing: ls.H1 }}>{I18N['arcadia.title']}</div>
                        <div className="desc" style={{ letterSpacing: ls.TXT }}>{I18N['arcadia.desc1']}</div>
                        <div className="desc" style={{ letterSpacing: ls.TXT }}>{I18N['arcadia.desc2']}</div>
                        <div className="btn-group">
                            <Button to="/arcadia" uppercase>{I18N['explore']}</Button>
                        </div>
                    </div>
                </div>,
                <div className="h1-slideitem">
                    <Image src='/jpgs/kanrinkyo.jpg' className={active === 2 ? 'active' : ''} />
                    <div className="h1-content">
                        <div style={{ opacity: 0 }}><Image className="logo" height={126} src="/logos/kanrinkyo.svg" /></div>
                        <div className="title" style={{ letterSpacing: ls.H1}}>{I18N['kanrinkyo.title']}</div>
                        <div className="desc" style={{ letterSpacing: ls.TXT }}>{I18N['kanrinkyo.desc1']}</div>
                        <div className="desc" style={{ letterSpacing: ls.TXT }}>{I18N['kanrinkyo.desc2']}</div>
                        <div className="btn-group">
                            <Button to="/kanrinkyo" uppercase>{I18N['explore']}</Button>
                        </div>
                    </div>
                </div>,
                <div className="h1-slideitem">
                    <Image src='/jpgs/yukoro.jpg' className={active === 3 ? 'active' : ''} />
                    <div className="h1-content">
                        <div style={{ opacity: 0 }}><Image className="logo" height={126} src="/logos/yukoro.svg" /></div>
                        <div className="title" style={{ letterSpacing: ls.H1 }}>{I18N['yukoro.title']}</div>
                        <div className="desc" style={{ letterSpacing: ls.TXT }}>{I18N['yukoro.desc1']}</div>
                        <div className="desc" style={{ letterSpacing: ls.TXT }}>{I18N['yukoro.desc2']}</div>
                        <div className="btn-group">
                            <Button to="/yukoro" uppercase>{I18N['explore']}</Button>
                        </div>
                    </div>
                </div>,
                <div className="h1-slideitem">
                    <Image src='/jpgs/newland.jpg' className={active === 4 ? 'active' : ''} />
                    <div className="h1-content">
                        <div style={{ opacity: 0 }}><Image className="logo" height={126} src="/logos/newland.svg" /></div>
                        <div className="title" style={{ letterSpacing: ls.H1}}>{I18N['newland.title']}</div>
                        <div className="desc" style={{ letterSpacing: ls.TXT }}>{I18N['newland.desc1']}</div>
                        <div className="desc" style={{ letterSpacing: ls.TXT }}>{I18N['newland.desc2']}</div>
                        <div className="btn-group">
                            <Button to="/newland" uppercase>{I18N['explore']}</Button>
                        </div>
                    </div>
                </div>
            ]}
            paginationClassName="h1-pagination"
            renderPaginations={() => [
                <div className='h1-pagination-item'>
                    <Image className="logo" src="/logos/muan.svg" height={56} />
                    <div className="title" style={{ letterSpacing: ls.TXT }}>{I18N['muan.title.firstname']}</div>
                    <div className="title" style={{ letterSpacing: ls.TXT }}>{I18N['muan.title.lastname']}</div>
                </div>,
                <div className='h1-pagination-item'>
                    <Image className="logo" src="/logos/arcadia.svg" height={56} />
                    <div className="title" style={{ letterSpacing: ls.TXT }}>{I18N['arcadia.title.firstname']}</div>
                    <div className="title" style={{ letterSpacing: ls.TXT }}>{I18N['arcadia.title.lastname']}</div>
                </div>,
                <div className='h1-pagination-item'>
                    <Image className="logo" src="/logos/kanrinkyo.svg" height={56} style={{opacity: 0}} />
                    <div className="title" style={{ letterSpacing: ls.TXT }}>{I18N['kanrinkyo.title.firstname']}</div>
                    <div className="title" style={{ letterSpacing: ls.TXT }}>{I18N['kanrinkyo.title.lastname']}</div>
                </div>,
                <div className='h1-pagination-item'>
                    <Image className="logo" src="/logos/yukoro.svg" height={56} style={{opacity: 0}} />
                    <div className="title" style={{ letterSpacing: ls.TXT }}>{I18N['yukoro.title.firstname']}</div>
                    <div className="title" style={{ letterSpacing: ls.TXT }}>{I18N['yukoro.title.lastname']}</div>
                </div>,
                <div className='h1-pagination-item'>
                    <Image className="logo" src="/logos/newland.svg" height={56} style={{opacity: 0}} />
                    <div className="title" style={{ letterSpacing: ls.TXT }}>{I18N['newland.title.firstname']}</div>
                    <div className="title" style={{ letterSpacing: ls.TXT }}>{I18N['newland.title.lastname']}</div>
                </div>
            ]}
        />
    )
}

function Slide2 ({ order, ls }: { order: number, ls: ILetterSpacing }) {
    const active = order === 1
    const I18N = useCommonStore(state => state.I18N)

    return (
        <div className="section">
            <div className={`background ${active ? 'animate' : ''}`}>
                <Image src="/jpgs/home-2.jpg" />
            </div>
            <div className={`content ${active ? 'animate': ''}`}>
                <div className="h2-intros" style={{ letterSpacing: ls.TXT }}>
                    {/* <div>{I18N['home.2.intro10']}</div>
                    <div>{I18N['home.2.intro9']}</div> */}
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
            </div>
        </div>
    )
}

function Slide3 ({ order, ls }: { order: number, ls: ILetterSpacing }) {
    const I18N = useCommonStore(state => state.I18N)
    const setActive = useFadeSlide2Store(state => state.setActive)

    useEffect(() => {
        if (order === 2) {
            setActive(0)
        }
    }, [order])

    return (
        <FadeSlide2
            autoplay
            waiting={8000}
            length={3}
            trigger='hover'
            render={active => [
                <div className="h3-slideitem">
                    <Image src='/jpgs/home-3-1.jpg' className={active === 0 ? 'active' : ''} />
                </div>,
                <div className="h3-slideitem">
                    <Image src='/jpgs/home-3-2.jpg' className={active === 1 ? 'active' : ''} />
                </div>,
                <div className="h3-slideitem">
                    <Image src='/jpgs/home-3-3.jpg' className={active === 2 ? 'active' : ''} />
                </div>
            ]}
            paginationClassName="h3-pagination"
            renderPaginations={() => [
                <div className='h3-pagination-item'>
                    <div className="title" style={{ letterSpacing: ls.H2 }}>{I18N['home.3.tab1']}</div>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>{I18N['home.3.tab1.desc1']}</div>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>{I18N['home.3.tab1.desc2']}</div>
                    <div className="v-line"></div>
                </div>,
                <div className='h3-pagination-item'>
                    <div className="title" style={{ letterSpacing: ls.H2 }}>{I18N['home.3.tab2']}</div>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>{I18N['home.3.tab2.desc1']}</div>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>{I18N['home.3.tab2.desc2']}</div>
                    <div className="v-line"></div>
                </div>,
                <div className='h3-pagination-item'>
                    <div className="title" style={{ letterSpacing: ls.H2 }}>{I18N['home.3.tab3']}</div>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>{I18N['home.3.tab3.desc1']}</div>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>{I18N['home.3.tab3.desc2']}</div>
                    <div className="v-line"></div>
                </div>
            ]}
        />
    )
}

function Slide4 ({ order, ls }: { order: number, ls: ILetterSpacing }) {
    const [I18N, setDialogVisible] = useCommonStore(state => [state.I18N, state.setWeChatDialogVisible])
    const setPageSectionOrder = useCommonStore(state => state.setPageSectionOrder)
    const active = order === 3

    const handleGotoTop = () => {
        window.location.href = window.location.href.split('#')[0]
        setPageSectionOrder(0)
    }

    return (
        <div className='section top'>
            <div className={`background full ${active ? 'animate' : ''}`}>
                <Image src="/jpgs/home-4-bg.jpg" />
            </div>
            <div className={`h4-container ${active ? 'active': ''}`}>
                <div className="base">
                    {/* <div className="caption" style={{ letterSpacing: ls.H1 }}>{I18N['home.ending']}</div> */}
                    <div className="caption" style={{ letterSpacing: ls.H1 }}></div>
                    <Image className="logo" src="/logo.svg" />
                </div>
                <div className="bottom">
                    <div className="logos">
                        <Link to='/muan'><Image className="logo" src="/logos/muan.svg" /></Link>
                        <Link to='/arcadia'><Image className="logo" src="/logos/arcadia.svg" /></Link>
                        <Link to='/kanrinkyo'><Image className="logo" src="/logos/kanrinkyo.svg" /></Link>
                        <Link to='/yukoro'><Image className="logo" src="/logos/yukoro.svg" /></Link>
                        {/* <Link to='/newland'><Image className="logo" src="/logos/newland.svg" /></Link> */}
                        <Link to='/newland' style={{ letterSpacing: ls.TXT }}>Coming Soon</Link>
                    </div>
                    <div className="linkmaps" style={{ letterSpacing: ls.TXT }}>
                        <div className="outlinks">
                            <a onClick={() =>setDialogVisible(true)}>
                                <Image src="/icons/wechat.svg" />
                            </a>
                            <a target="_blank" href="https://www.xiaohongshu.com/user/profile/63656b45000000001f01575f"><Image src="/icons/redbook.svg" /></a>
                            <a target="_blank" href="https://instagram.com/ishibekojimuan?igshid=MmIzYWVlNDQ5Yg=="><Image src="/icons/muan.svg" /></a>
                            <a target="_blank" href="https://instagram.com/arcadiaryowhajapan?igshid=NTc4MTIwNjQ2YQ=="><Image src="/icons/arcadia.svg" /></a>
                        </div>
                        <Link to='/' className="copyright" style={{ letterSpacing: 1 }}>Copyright © 2023 Ryowha group</Link>
                    </div>
                </div>
                <div
                    className={`goto-top ${active ? 'animate' : ''}`}
                    onClick={handleGotoTop}
                >
                    <Image src='/icons/up.svg' />
                </div>
            </div>
        </div>
    )
}

export default function Home () {
    const pageSectionOrder = useCommonStore(state => state.pageSectionOrder)
    const letterSpacing = useCommonStore(state => state.letterSpacing)
    const hideHeader = pageSectionOrder === 3

    const [lpHide, setLPHide] = useState(false)
    const [lpRemoved, setLPRemoved] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLPHide(true)
        }, 3000);

        setTimeout(() => {
            setLPRemoved(true)
        }, 5000);
    }, [])

    return (
        <div className="home">
            <Header hidden={hideHeader} />
            
            <div className={`loading-page ${lpHide ? 'hide' : ''} ${lpRemoved ? 'remove' : ''}`}>
                <Image className="loading-img" src="/jpgs/loadingimg.jpg" />
                <Image className="loading-icon" src="/logo.svg" />
            </div>

            { lpHide ? <Fullpage
                ignoreHideIndex={[]}
                sliders={[
                    <Slide1 order={pageSectionOrder} ls={letterSpacing} />,
                    <Slide2 order={pageSectionOrder} ls={letterSpacing} />,
                    <Slide3 order={pageSectionOrder} ls={letterSpacing} />,
                    <Slide4 order={pageSectionOrder} ls={letterSpacing} />
                ]}
            /> : null }
        </div>
    );
}
