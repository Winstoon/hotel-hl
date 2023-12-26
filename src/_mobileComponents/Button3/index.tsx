import { Link } from 'react-router-dom'
import { useCommonStore } from '../../mobileStore'

import './index.css'

interface IProps {
    children: React.ReactNode
    to?: string
    href?: string
    dark?: boolean
    disabled?: boolean
    onClick?: (e: React.MouseEvent) => void
}

export default function Button3 (props: IProps) {
    const letterSpacing = useCommonStore(state => state.letterSpacing)
    const { children, dark, to, href, disabled, onClick } = props
    const classname = `mobile-button3 ${dark ? 'dark' : ''} ${disabled ? 'disabled' : ''}`
    const style = { letterSpacing: letterSpacing.TXT, textIndent: letterSpacing.TXT }

    const newChildren = (
        <>
            {children}
            <i className='right-icon' />
        </>
    )

    if (href) {
        return (
            <a style={style} href={href} rel='noreferrer' target='_blank' className={classname}>{newChildren}</a>
        )
    }

    if (to) {
        return (
            <Link style={style} className={classname} to={to}>{newChildren}</Link>
        )
    }

    return <div style={style} className={classname} onClick={onClick}>{newChildren}</div>
}