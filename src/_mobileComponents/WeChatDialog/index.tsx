import { useEffect, useState } from 'react'
import Image from '../Image'
import { useCommonStore } from '../../mobileStore'

import './index.css'

export default function MobileWeChatDialog () {
    const ls = useCommonStore(state => state.letterSpacing)
    const [I18N, dialogVisible, setDialogVisible] = useCommonStore(state => [state.I18N, state.wechatDialogVisible, state.setWeChatDialogVisible])
    const [zIndex, setZIndex] = useState(-1)

    useEffect(() => {
        if (dialogVisible) {
            setZIndex(100)
        } else {
            setTimeout(() => {
                setZIndex(-1)
            }, 1000);
        }
    }, [dialogVisible])

    return (
        <div className={`mobile-wechat-dialog ${dialogVisible ? 'show' : ''}`} style={{ zIndex }}>
            <div className='dialog-close' onClick={() => setDialogVisible(false)}>
                <Image src='/icons/close.svg' />
            </div>
            <div className='dialog-content'>
                <div className='dialog-qrcode'>
                    <Image src='/jpgs/qrcode.jpg' />
                </div>
                <div className='dialog-desc' style={{ letterSpacing: ls.TXT }}>{I18N['wechat.desc']}</div>
            </div>
        </div>
    )
}
