import { Link } from 'react-router-dom'
import './Button.css'
import { useCommonStore } from '../../store'

interface IProps {
    children: React.ReactNode
    size?: 'default' | 'small'
    to?: string
    href?: string
    disabled?: boolean
    uppercase?: boolean
    onClick?: (e: React.MouseEvent) => void
}

export default function Button (props: IProps) {
    const letterSpacing = useCommonStore(state => state.letterSpacing)
    const { children, size, to, href, uppercase, disabled, onClick } = props
    const classname = `button ${size} ${uppercase ? 'uppercase' : ''} ${disabled ? 'disabled' : ''}`
    const style = { letterSpacing: letterSpacing.H2, textIndent: letterSpacing.H2 }

    if (href) {
        return <a style={style} href={href} rel='noreferrer' target='_blank' className={classname}>{children}</a>
    }

    if (to) {
        return <Link style={style} className={classname} to={to}>{children}</Link>
    }

    return <div style={style} className={classname} onClick={onClick}>{children}</div>
}