import { useCommonStore } from "../../store"
import Detail from "./Detail"

export default function Arcadia () {
    const I18N = useCommonStore(state => state.I18N)
    const lang = useCommonStore(state => state.lang)
    const data = {
        section1: {
            logo: '/logos/arcadia.svg',
            caption: I18N['arcadia.title'],
            intros: [I18N['arcadia.desc1'], I18N['arcadia.desc2']],
            orderLink: `http://nisekoarcadia.co.jp/?order=true&lang=${lang}`,
            gotoLink: 'http://nisekoarcadia.co.jp/',
            background: '/detail/arcadia-1.jpg'
        },
        section2: {
            intros: [
                I18N['detail.arcadia.2.intro1'],
                I18N['detail.arcadia.2.intro2'],
                '',
                I18N['detail.arcadia.2.intro3'],
                I18N['detail.arcadia.2.intro4'],
                I18N['detail.arcadia.2.intro5'],
                I18N['detail.arcadia.2.intro6'],
                I18N['detail.arcadia.2.intro7'],
                I18N['detail.arcadia.2.intro8']
            ],
            images: [
                '/detail/arcadia-2-1.jpg',
                '/detail/arcadia-2-2.jpg',
                '/detail/arcadia-2-3.jpg',
                '/detail/arcadia-2-4.jpg',
                '/detail/arcadia-2-5.jpg',
                '/detail/arcadia-2-6.jpg',
                '/detail/arcadia-2-7.jpg',
                '/detail/arcadia-2-8.jpg'
            ]
        },
        section3: {
            caption: I18N['detail.arcadia.3.caption'],
            intros: [
                I18N['detail.arcadia.3.intro1'],
                I18N['detail.arcadia.3.intro2'],
                I18N['detail.arcadia.3.intro3'],
                '',
                I18N['detail.arcadia.3.intro4'],
                I18N['detail.arcadia.3.intro5'],
                I18N['detail.arcadia.3.intro6'],
                // I18N['detail.arcadia.3.intro7']
            ],
            images: [
                '/detail/arcadia-3-1.jpg',
                '/detail/arcadia-3-2.jpg',
                '/detail/arcadia-3-3.jpg',
                '/detail/arcadia-3-4.jpg'
            ]
        },
        section4: {
            caption: I18N['detail.arcadia.4.caption'],
            intros: [],
            images: [
                {
                    src: '/detail/arcadia-4-1.jpg',
                    caption: I18N['detail.arcadia.4.img1.caption'],
                    desc: I18N['detail.arcadia.4.img1.desc']
                },
                {
                    src: '/detail/arcadia-4-2.jpg',
                    caption: I18N['detail.arcadia.4.img2.caption'],
                    desc: I18N['detail.arcadia.4.img2.desc']
                },
                {
                    src: '/detail/arcadia-4-3.jpg',
                    caption: I18N['detail.arcadia.4.img3.caption'],
                    desc: I18N['detail.arcadia.4.img3.desc']
                },
                {
                    src: '/detail/arcadia-4-4.jpg',
                    caption: I18N['detail.arcadia.4.img4.caption'],
                    desc: I18N['detail.arcadia.4.img4.desc']
                },
                {
                    src: '/detail/arcadia-4-5.jpg',
                    caption: I18N['detail.arcadia.4.img5.caption'],
                    desc: I18N['detail.arcadia.4.img5.desc']
                }
            ]
        },
        section5: {
            caption: I18N['detail.arcadia.5.caption'],
            intros: [
                {
                    title: I18N['detail.arcadia.5.intro1.title'],
                    descs: [
                        I18N['detail.arcadia.5.intro1.desc1'],
                        I18N['detail.arcadia.5.intro1.desc2'],
                        I18N['detail.arcadia.5.intro1.desc3'],
                        I18N['detail.arcadia.5.intro1.desc4']
                    ]
                },
                {
                    title: I18N['detail.arcadia.5.intro2.title'],
                    descs: [
                        I18N['detail.arcadia.5.intro2.desc1'],
                        I18N['detail.arcadia.5.intro2.desc2'],
                        I18N['detail.arcadia.5.intro2.desc3'],
                        I18N['detail.arcadia.5.intro2.desc4']
                    ]
                },
                // {
                //     title: I18N['detail.arcadia.5.intro3.title'],
                //     descs: [
                //         I18N['detail.arcadia.5.intro3.desc1'],
                //         I18N['detail.arcadia.5.intro3.desc2']
                //     ]
                // }
            ],
            images: [
                '/detail/arcadia-5-1.jpg',
                '/detail/arcadia-5-2.jpg',
                '/detail/arcadia-5-3.jpg',
                '/detail/arcadia-5-4.jpg',
                '/detail/arcadia-5-5.jpg',
                '/detail/arcadia-5-6.jpg',
            ]
        },
        section6 : {  // 仅 Arcadia 有
            caption: I18N['detail.arcadia.6.caption'],
            intros: [
                I18N['detail.arcadia.6.intro1'],
                I18N['detail.arcadia.6.intro2'],
                I18N['detail.arcadia.6.intro3'],
                I18N['detail.arcadia.6.intro4'],
                I18N['detail.arcadia.6.intro5']
            ],
            images: [
                '/detail/arcadia-6-1.jpg',
                '/detail/arcadia-6-2.jpg',
                '/detail/arcadia-6-3.jpg',
            ]
        },
        section7: {
            contact: {
                address: I18N['detail.arcadia.7.address'],
                phonenumber: I18N['detail.arcadia.7.tel'],
                email: I18N['detail.arcadia.7.email']
            },
            intros: [
                I18N['detail.arcadia.7.intro1'],
                I18N['detail.arcadia.7.intro2'],
                I18N['detail.arcadia.7.intro3'],
                I18N['detail.arcadia.7.intro4']
            ],
            mapAbs: true,
            mapImage: '/detail/arcadia-map.png'
        },

        // same to the section 1
        // section8: {
        //     caption: '',
        //     intros: ['', ''],
        //     orderLink: '',
        //     gotoLink: ''
        // }
    }

    return <Detail className='arcadia' data={data} />
}
