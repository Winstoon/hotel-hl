import Header from "../../_mobileComponents/Header";
import { AnimateBg } from "../../_mobileComponents/Image";
import { useCommonStore } from "../../mobileStore";

import './index.css'

export default function MobileNewLand () {
    const I18N = useCommonStore(state => state.I18N)
    const ls = useCommonStore(state => state.letterSpacing)

    return (
        <div className="mobile-container mobile-detail">
            <Header />
            <div className="newland-section section1" style={{ height: window.innerHeight }}>
                <AnimateBg src="/mobile/detail/newland.jpg" />
                <div className="content">
                    <div className="title" style={{ letterSpacing: ls.H1}}>{I18N['newland.title']}</div>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>{I18N['newland.desc1']}</div>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>{I18N['newland.desc2']}</div>
                </div>
                <div className="copyright">Copyright © 2023 Ryowha group</div>
            </div>
        </div>
    )
}