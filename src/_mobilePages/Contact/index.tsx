import Header from "../../_mobileComponents/Header"
import Image from "../../_mobileComponents/Image"
import { useCommonStore } from "../../mobileStore"
import './index.css'

export default function MobileContact () {
    const I18N = useCommonStore(state => state.I18N)
    const ls = useCommonStore(state => state.letterSpacing)
    const setWeChatDialogVisible = useCommonStore(state => state.setWeChatDialogVisible)

    return (
        <div className="mobile-container mobile-contact">
            <Header />
            <Image className="contact-bg" src="/mobile/contact-bg.jpg" />
            <div className="content">
                <div style={{ letterSpacing: ls.H1 }} className="caption">{I18N['contact.caption']}</div>
                <div style={{ letterSpacing: ls.TXT }} className='extra address'>{I18N['contact.address']}</div>
                <div style={{ letterSpacing: ls.TXT }} className='extra phone'>{I18N['contact.phone']}</div>
                <div style={{ letterSpacing: ls.TXT }} className='extra fax'>{I18N['contact.fax']}</div>
                <div style={{ letterSpacing: ls.TXT }} className='extra email'>
                    <span>{I18N['contact.email']}</span>
                    <a rel="noreferrer" target='_blank' href={`mailto:${I18N['contact.emaillink']}`}>{I18N['contact.emaillink']}</a>
                </div>
            </div>
            <div className='quicklinks'>
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
            <div className="copyright" style={{ letterSpacing: 1 }}>
                Copyright © 2023 Ryowha group
            </div>
        </div>
    )
}