import Footer from "../../_mobileComponents/Footer";
import Header from "../../_mobileComponents/Header";
import { AnimateBg } from "../../_mobileComponents/Image";
import { ILetterSpacing } from "../../letterSpacings";
import { useCommonStore } from "../../mobileStore";

import './index.css'

function Section1 ({ ls, data }: { ls: ILetterSpacing, data: any }) {
    return (
        <div className="section1" style={{ height: window.innerHeight }}>
            <AnimateBg src={data.src} />
            <div className="content">
                <div className="title" style={{ letterSpacing: ls.H1}}>{data.title}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc1}</div>
                <div className="desc" style={{ letterSpacing: ls.TXT }}>{data.desc2}</div>
            </div>
        </div>
    )
}

export default function MobileMuan () {
    const I18N = useCommonStore(state => state.I18N)
    const ls = useCommonStore(state => state.letterSpacing)

    const data = {
        section1: {
            title: I18N['muan.title'],
            desc1: I18N['muan.desc1'],
            desc2: I18N['muan.desc2'],
            src: '/mobile/detail/muan-1.jpg'
        }
    }

    return (
        <div className="mobile-container mobile-detail">
            <Header />
            <Section1 ls={ls} data={data.section1} />
            <Footer />
        </div>
    )
}
