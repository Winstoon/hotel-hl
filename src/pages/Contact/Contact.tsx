import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Image from '../../components/Image/Image'
import { useCommonStore } from '../../store'

import './Contact.css'

export default function Contact () {
    const I18N = useCommonStore(state => state.I18N)
    const ls = useCommonStore(state => state.letterSpacing)

    return (
        <div className="contact-page">
            <Header />
            <div className='container'>
                <div className='left-img'>
                    <Image src='/jpgs/contactbg.jpg' />
                </div>
                <div className='right-cont' style={{ letterSpacing: ls.TXT }}>
                    <div className='caption' style={{ letterSpacing: ls.H1 }}>{I18N['contact.caption']}</div>
                    <div className='extra address'>{I18N['contact.address']}</div>
                    <div className='extra phone'>{I18N['contact.phone']}</div>
                    <div className='extra fax'>{I18N['contact.fax']}</div>
                    <div className='extra email'>
                        <span>{I18N['contact.email']}</span>
                        <a target='_blank' href={`mailto:${I18N['contact.emaillink']}`}>{I18N['contact.emaillink']}</a>
                    </div>
                </div>
            </div>
            <Footer fixed />
        </div>
    )
}
