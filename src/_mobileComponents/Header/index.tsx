import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Image, { AnimateBg } from "../Image"
import { useCommonStore } from "../../mobileStore"
import { I18N } from "../../i18n"
import Language, { RadioLanguage } from "../Language"

import './index.css'

const ROUTERS = [
    { label: 'MUAN', path: '/mobile/muan' },
    { label: 'ARCADIA', path: '/mobile/arcadia' },
    { label: 'KANRINKYO', path: '/mobile/kanrinkyo' },

    { label: 'YUKORO', path: '/mobile/yukoro' },
    { label: 'NEW LAND', path: '/mobile/newland' },
    { label: 'CONTACT US', path: '/mobile/contact' }
]

interface IProps{
    hidden?: boolean
    mask?: boolean
    withbg?: boolean
    lightmode?: boolean
}

export default function Header (props: IProps) {
    const { hidden, lightmode, withbg, mask } = props
    const { pathname } = useLocation()
    
    const [maskVisible, setMaskVisible] = useState(false)
    const lang = useCommonStore(state => state.lang)
    const setDialogVisible = useCommonStore(state => state.setWeChatDialogVisible)
    const isEn = lang === I18N.EN

    const onClose = () => {
        setMaskVisible(false)
    }

    const sameRouterPath = (rp: string, cp: string) => {
        const _rp = rp.endsWith('/') ? rp : rp + '/'
        const _cp = cp.endsWith('/') ? cp : cp + '/'
        return _rp === _cp
    }

    return (
        <>
            <div className={`mobile-header ${hidden ? 'hidden' : ''} ${lightmode ? 'lightmode' : ''} ${mask ? 'mask' : ''} ${withbg ? 'withbg': ''}`}>
                <div className="header-left">
                    <Image
                        className="more"
                        onClick={() => setMaskVisible(true)}
                        src={lightmode ? '/icons/more.black.svg' : '/icons/more.svg'}
                    />
                </div>
                <div className="header-center">
                    <Link to="/mobile/">
                        <Image
                            className="logo"
                            src={lightmode ? '/mobile/logo.black.svg' : '/mobile/logo.svg'}
                        />
                    </Link>
                </div>
                <div className="header-right">
                    <Language lightmode={!!lightmode} />
                    {/* <Button size='small' uppercase onClick={handleOrder}>{I18N['reserve']}</Button> */}
                </div>
            </div>
            <div className={`mobile-header-dialog ${maskVisible ? 'show' : ''}`}>
                <div className='close' onClick={onClose}><Image src='/icons/close.svg' /></div>
                <AnimateBg src="/mobile/menu-bg.jpg" />

                <div className="routers">
                    { ROUTERS.map((router, idx) =>
                        <div
                            key={idx}
                            className={`router-item ${isEn ? 'en' : ''} ${sameRouterPath(router.path, pathname) ? 'active' : ''}`}
                        >
                            <Link to={router.path}>{router.label}</Link>
                        </div>
                    )}
                </div>

                <RadioLanguage onChange={() => setMaskVisible(false)} />

                <div className='quicklinks'>
                    <Image src="/icons/wechat.svg" onClick={() => setDialogVisible(true)} />
                    <a rel="noreferrer" target="_blank" href="https://www.xiaohongshu.com/user/profile/63656b45000000001f01575f">
                        <Image src="/icons/redbook.svg" />
                    </a>
                    <a rel="noreferrer" target="_blank" href="https://instagram.com/ishibekojimuan?igshid=MmIzYWVlNDQ5Yg==">
                        <Image src="/icons/muan.svg" />
                    </a>
                    <a rel="noreferrer" target="_blank" href="https://instagram.com/arcadiaryowhajapan?igshid=NTc4MTIwNjQ2YQ==">
                        <Image src="/icons/arcadia.svg" />
                    </a>
            </div>
            </div>
        </>
    )
}