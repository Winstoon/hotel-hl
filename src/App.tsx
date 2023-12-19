import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import { useCommonStore } from './store';
import { I18N } from './i18n';

import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Muan from './pages/Detail/Muan';
import Arcadia from './pages/Detail/Arcadia';
import Kanrinkyo from './pages/Detail/Kanrinkyo';
import Yukoro from './pages/Detail/Yukoro';
import NewLand from './pages/Detail/NewLand';
import WeChatDialog from './components/WeChatDialog/WeChatDialog';

import MobileHome from './_mobilePages/Home';
import MobileMuan from './_mobilePages/Detail/Muan';
import MobileArcadia from './_mobilePages/Detail/Arcadia';
import MobileKanrinkyo from './_mobilePages/Detail/Kanrinkyo';
import MobileYukoro from './_mobilePages/Detail/Yukoro';
import MobileNewLand from './_mobilePages/Detail/NewLand';
import MobileContact from './_mobilePages/Contact';
import MobileWeChatDialog from './_mobileComponents/WeChatDialog';

import PageNavgation from './components/PageNavgation';

import './App.css';

const FontFamilies = {
    [I18N.EN]: 'EBGaramond',
    [I18N.ZH]: 'NotoSerifSC',
    [I18N.JP]: 'ShipporiMinchoB1'
}

function mobileCheck () {
    // @ts-ignore
    const ua = navigator.userAgent||navigator.vendor||window.opera
    const regx1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i
    const regx2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i
    
    return regx1.test(ua) || regx2.test(ua.substr(0,4))
}

function App() {
    const lang = useCommonStore(state => state.lang)
    const pcPageOrder = useCommonStore(state => state.pageSectionOrder)
    const fontFamily = FontFamilies[lang]
    const isMobile = mobileCheck()
    const location = useLocation()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (isMobile && !location.pathname.startsWith('/mobile')) {
            window.location.href = `/mobile${location.pathname}`
        } else if (!isMobile && location.pathname.startsWith('/mobile')) {
            window.location.href = location.pathname.replace('/mobile', '')
        }
    }, [isMobile, location.pathname])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 0);
    }, [])

    return (
        <div style={{ fontFamily: `EBGaramond, ${fontFamily}` }}>
            { loading ? null :
                <Routes>
                    <Route path="/" element={<Home />} />
                    
                    {/* details */}
                    <Route path="/muan" element={<Muan />} />
                    <Route path="/arcadia" element={<Arcadia />} />
                    <Route path="/kanrinkyo" element={<Kanrinkyo />} />
                    <Route path="/yukoro" element={<Yukoro />} />
                    <Route path="/newland" element={<NewLand />} />
                    
                    <Route path="/contact" element={<Contact />} />


                    {/* mobiles */}
                    <Route path="/mobile" element={<MobileHome />} />
                    <Route path="/mobile/muan" element={<MobileMuan />} />
                    <Route path="/mobile/arcadia" element={<MobileArcadia />} />
                    <Route path="/mobile/kanrinkyo" element={<MobileKanrinkyo />} />
                    <Route path="/mobile/yukoro" element={<MobileYukoro />} />
                    <Route path="/mobile/newland" element={<MobileNewLand />} />
                    <Route path="/mobile/contact" element={<MobileContact />} />
                </Routes>
            }
            <WeChatDialog />

            { isMobile ? null :
                <PageNavgation lightmode={
                    (location.pathname.startsWith('/muan') && pcPageOrder === 1) ||
                    (location.pathname.startsWith('/muan') && pcPageOrder === 3) ||
                    (location.pathname.startsWith('/arcadia') && pcPageOrder === 1) ||
                    (location.pathname.startsWith('/arcadia') && pcPageOrder === 3) ||
                    (location.pathname.startsWith('/kanrinkyo') && pcPageOrder === 1) ||
                    (location.pathname.startsWith('/kanrinkyo') && pcPageOrder === 3) ||
                    (location.pathname.startsWith('/yukoro') && pcPageOrder === 1) ||
                    (location.pathname.startsWith('/yukoro') && pcPageOrder === 3)
                } />
            }

            <MobileWeChatDialog />
        </div>
    )
}

export default App;
