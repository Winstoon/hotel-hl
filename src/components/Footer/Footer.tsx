import { Link } from "react-router-dom";
import Image from "../Image/Image";
import { useCommonStore } from "../../store";

import './Footer.css'

interface IProps {
    fixed?: boolean
}

export default function Footer (props: IProps) {
    const { fixed } = props
    const setDialogVisible = useCommonStore(state => state.setWeChatDialogVisible)

    return (
        <div className={`footer ${fixed ? 'fixed' : ''}`}>
            <div className="left">
                <a onClick={() => setDialogVisible(true)}><Image src="/icons/wechat.svg" /></a>
                <a rel="noreferrer" target="_blank" href="https://www.xiaohongshu.com/user/profile/63656b45000000001f01575f"><Image src="/icons/redbook.svg" /></a>
                <a rel="noreferrer" target="_blank" href="https://instagram.com/ishibekojimuan?igshid=MmIzYWVlNDQ5Yg=="><Image src="/icons/muan.svg" /></a>
                <a rel="noreferrer" target="_blank" href="https://instagram.com/arcadiaryowhajapan?igshid=NTc4MTIwNjQ2YQ=="><Image src="/icons/arcadia.svg" /></a>
            </div>
            <div className="right"><Link to='/'>Copyright © 2023 Ryowha group</Link></div>
        </div>
    )
}