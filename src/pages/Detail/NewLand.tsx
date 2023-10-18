import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Image from '../../components/Image/Image'
import { useCommonStore } from '../../store'

import './Detail.css'

export default function NewLand () {
    const I18N = useCommonStore(state => state.I18N)
    const ls = useCommonStore(state => state.letterSpacing)

    return (
        <div className="newland-page">
            <Header />
            <div className='bgimg'>
                <Image src='/jpgs/newland.jpg' />
            </div>
            <div className='container'>
                <div className='center-content'>
                    <div className="title" style={{ letterSpacing: ls.H1}}>{I18N['newland.title']}</div>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>{I18N['newland.desc1']}</div>
                    <div className="desc" style={{ letterSpacing: ls.TXT }}>{I18N['newland.desc2']}</div>
                </div>
            </div>
            <Footer fixed />
        </div>
    )
}
