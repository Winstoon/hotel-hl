
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Image from '../Image/Image'
import Button from '../Button/Button'
import Language from '../Language/Language'
import MoreDialog from '../MoreDialog/More'
import { useCommonStore } from '../../store'

import './Header.css'

interface IProps {
    smallLogo?: boolean
    hidden?: boolean
    lightmode?: boolean
    orderLink?: string
    showOrderBtn?: boolean
    onClickOrder?: () => void
}

export default function Header (props: IProps) {
    const { hidden, smallLogo, lightmode, orderLink, showOrderBtn, onClickOrder } = props
    const [moreVisible, setMoreVisible] = useState(false)
    const I18N = useCommonStore(state => state.I18N)
    const logo = smallLogo ?
        (lightmode ? '/logo.small.black.svg' : '/logo.small.svg') :
        (lightmode ? '/logo.black.svg' : '/logo.svg')

    return (
        <>
            <div className={`header ${hidden ? 'hidden' : ''} ${lightmode ? 'lightmode' : ''}`}>
                <div className='left'>
                    <div
                        className={`more-btn ${moreVisible ? 'hidden' : ''}`}
                        onClick={() => setMoreVisible(true)}
                    >
                        <Image src={lightmode ? '/icons/more.black.svg' : '/icons/more.svg'} />
                    </div>
                </div>
                <div className='center'>    
                    <Link to='/'>
                        <Image className={`ico-logo ${smallLogo ? 'small' : ''}`} src={logo} />
                    </Link>
                </div>
                <div className='right'>
                    <Language lightmode={!!lightmode} />
                    { showOrderBtn ?
                        <Button size='small' href={orderLink} uppercase onClick={onClickOrder}>{I18N['reserve']}</Button> : null
                    }
                </div>
            </div>
            <MoreDialog visible={moreVisible} setVisible={setMoreVisible} />
        </>
    )
}