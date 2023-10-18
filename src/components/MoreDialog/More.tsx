import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Image from '../Image/Image'
import { useCommonStore } from '../../store'
import { I18N, I18N_LABELS } from '../../i18n'
import './More.css'

interface IProps {
    visible: boolean
    setVisible: (visible: boolean) => void
}

export default function MoreDialog (props: IProps) {
    const { visible, setVisible } = props
    const [zIndex, setZIndex] = useState(-1)
    const params = useLocation()
    const pathname = params.pathname.replace(/^\//, '')
    const ls = useCommonStore(state => state.letterSpacing)
    const [I18N, lang, setLang, setDialogVisible] = useCommonStore(state => [state.I18N, state.lang, state.setLang, state.setWeChatDialogVisible])

    useEffect(() => {
        if (visible) {
            setZIndex(100)
        } else {
            setTimeout(() => {
                setZIndex(-1)
            }, 1000);
        }
    }, [visible])

    return (
        <div className={`more-dialog ${visible ? 'show' : ''}`} style={{ zIndex }}>
            <div className='dialog-close' onClick={() => setVisible(false)}>
                <Image src='/icons/close.svg' />
            </div>
            <div className='dialog-content' style={{ letterSpacing: 1 }}>
                <div className={`navs ${visible ? 'animate' : ''}`}>
                    <Link to='/muan' className={`nav-item ${pathname === 'muan' ? 'active' : ''}`}>{I18N['muan.title.firstname']}</Link>
                    <Link to='/arcadia' className={`nav-item ${pathname === 'arcadia' ? 'active' : ''}`}>{I18N['arcadia.title.firstname']}</Link>
                    <Link to='/kanrinkyo' className={`nav-item ${pathname === 'kanrinkyo' ? 'active' : ''}`}>{I18N['kanrinkyo.title.firstname']}</Link>
                    <Link to='/yukoro' className={`nav-item ${pathname === 'yukoro' ? 'active' : ''}`}>{I18N['yukoro.title.firstname']}</Link>
                    <Link to='/newland' className={`nav-item ${pathname === 'newland' ? 'active' : ''}`}>{I18N['newland.title.firstname']}</Link>
                    <Link to='/contact' className={`nav-item ${pathname === 'contact' ? 'active' : ''}`}>{I18N['contactus']}</Link>
                </div>

                <div className={`langs ${visible ? 'active': ''}`}>
                    { Object.entries(I18N_LABELS).map(([key, label]) =>
                        <div
                            className={`lang-item ${key === lang ? 'active' : ''}`}
                            style={{ letterSpacing: ls.TXT }}
                            onClick={() => setLang(key as I18N)}
                        >{label}</div>
                    )}
                </div>
                
                <div className={`quick-links ${visible ? 'active': ''}`}>
                    <a className='quick-link' onClick={() => setDialogVisible(true)}>
                        <Image src="/icons/wechat.svg" />
                    </a>
                    <a
                        className='quick-link'
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.xiaohongshu.com/user/profile/63656b45000000001f01575f"
                    >
                        <Image src="/icons/redbook.svg" />
                    </a>
                    <a
                        className='quick-link'
                        target="_blank"
                        rel="noreferrer"
                        href="https://instagram.com/ishibekojimuan?igshid=MmIzYWVlNDQ5Yg=="
                    >
                        <Image src="/icons/muan.svg" />
                    </a>
                    <a
                        className='quick-link'
                        target="_blank"
                        rel="noreferrer"
                        href="https://instagram.com/arcadiaryowhajapan?igshid=NTc4MTIwNjQ2YQ=="
                    >
                        <Image src="/icons/arcadia.svg" />
                    </a>
                </div>
            </div>
        </div>
    )
}
