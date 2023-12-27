import { useLocation } from 'react-router-dom'
import { useCommonStore } from '../../mobileStore'
import Button3 from '../Button3'
import Image from '../Image'

import './index.css'

export default function Footer({ background, coming, to }: { coming?: boolean, background?: string, to?: string}) {
    const location = useLocation()
    const I18N = useCommonStore(state => state.I18N)
    const setWeChatDialogVisible = useCommonStore(state => state.setWeChatDialogVisible)
    const isHome = location.pathname === '/mobile/' || location.pathname === '/mobile'

    return (
        <div className='mobile-footer' style={{ paddingBottom: isHome ? 28 : 100, background }}>
            <div className='quick-links'>
                <Image src="/icons/wechat.svg" onClick={() => setWeChatDialogVisible(true)} />
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
            <div className='copyright'>
                Copyright © 2023 Ryowha group
            </div>
            { isHome ? null :
                <div className='footer-btn-group'>
                    <Button3 to={to || '#'} disabled={coming}>
                        {coming ? I18N['comingbtn'] : I18N['reservebtn']}
                        <Image src="/icons/right-arrow.svg" />
                    </Button3>
                </div>
            }
        </div>
    )
}