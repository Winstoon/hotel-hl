import { useState } from "react"
import Image from "../Image/Image"
import './SwiperImages.css'
import { useCommonStore } from "../../store"


interface IImage {
    src: string
    caption: string
    desc: string
}

interface IProps{
    images: IImage[]
}

export default function SwiperImages2 (props: IProps) {
    const { images } = props
    const ls = useCommonStore(state => state.letterSpacing)
    const [active, setActive] = useState(0) // 0: 0-2, 3: 3-5

    const btnVisible = images.length > 3

    const prevable = images.length > 3 && active === 3
    const nextable = images.length > 3 && active === 0

    const offsetY = images[0].caption && images[0].desc ? -25 : 0

    const onPrev = () => {
        if (prevable) setActive(0)
    }
    
    const onNext = () => {
        if (nextable) setActive(3)
    }

    return (
        <>
            <div className='swiper-images2'>
                { btnVisible &&
                    <Image
                        className={`prev ${prevable ? '' : 'disabled'}`}
                        style={{ top: offsetY }}
                        src="/icons/arrow-left.svg"
                        onClick={onPrev}
                    />
                }
                <div className="images">
                    <div className="wrap" style={{ transform: `translateX(${active === 0 ? 0 : '-100%'})`}}>
                    { images.map((img, idx) =>
                        <div className="img-box" key={idx}>
                            <div className="hover-animate"><Image className="img" src={img.src} /></div>
                            { img.caption ? <div className="img-caption" style={{ letterSpacing: ls.H2 }}>{img.caption}</div> : null }
                            { img.desc ? <div className="img-desc" style={{ letterSpacing: ls.TXT }}>{img.desc}</div> : null }
                        </div>
                    )}
                    </div>
                </div>
                { btnVisible &&
                    <Image
                        className={`next ${nextable ? '' : 'disabled'}`}
                        style={{ top: offsetY }}
                        src="/icons/arrow-right.svg"
                        onClick={onNext}
                    />
                }
            </div>
            { images.length > 3 ?
                <div className={`swiper-imagesbar secondSwiper ${active === 3 ? 'secondpage' : ''}`}>
                    <div className="bar"></div>
                </div> : null
            }
        </>
    )
}
