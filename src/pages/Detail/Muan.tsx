import { useCommonStore } from "../../store"
import Detail from "./Detail"

export default function Muan () {
    const I18N = useCommonStore(state => state.I18N)
    const data = {
        section1: {
            logo: '/logos/muan.svg',
            caption: I18N['muan.title'],
            intros: [I18N['muan.desc1'], I18N['muan.desc2']],
            orderLink: 'https://www.ishibekojimuan.com/',
            gotoLink: 'https://www.ishibekojimuan.com/',
            background: '/detail/muan-1.jpg'
        },
        section2: {
            intros: [
                I18N['detail.muan.2.intro1'],
                I18N['detail.muan.2.intro2'],
                '',
                I18N['detail.muan.2.intro3'],
                I18N['detail.muan.2.intro4'],
                I18N['detail.muan.2.intro5'],
                I18N['detail.muan.2.intro6'],
                I18N['detail.muan.2.intro7'],
                I18N['detail.muan.2.intro8']
            ],
            images: [
                '/detail/muan-2-1.jpg',
                '/detail/muan-2-2.jpg',
                '/detail/muan-2-3.jpg',
                '/detail/muan-2-4.jpg',
                '/detail/muan-2-5.jpg',
                '/detail/muan-2-6.jpg',
                '/detail/muan-2-7.jpg',
                '/detail/muan-2-8.jpg'
            ]
        },
        section3: {
            caption: I18N['detail.muan.3.caption'],
            intros: [
                I18N['detail.muan.3.intro1'],
                I18N['detail.muan.3.intro2'],
                I18N['detail.muan.3.intro3'],
                '',
                I18N['detail.muan.3.intro4'],
                I18N['detail.muan.3.intro5'],
                I18N['detail.muan.3.intro6']
            ],
            images: [
                '/detail/muan-3-1.jpg',
                '/detail/muan-3-2.jpg',
                '/detail/muan-3-3.jpg'
            ]
        },
        section4: {
            caption: I18N['detail.muan.4.caption'],
            intros: [],
            images: [
                {
                    src: '/detail/muan-4-1.jpg',
                    caption: I18N['detail.muan.4.img1.caption'],
                    desc: I18N['detail.muan.4.img1.desc']
                },
                {
                    src: '/detail/muan-4-2.jpg',
                    caption: I18N['detail.muan.4.img2.caption'],
                    desc: I18N['detail.muan.4.img2.desc']
                },
                {
                    src: '/detail/muan-4-3.jpg',
                    caption: I18N['detail.muan.4.img3.caption'],
                    desc: I18N['detail.muan.4.img3.desc']
                },
                {
                    src: '/detail/muan-4-4.jpg',
                    caption: I18N['detail.muan.4.img4.caption'],
                    desc: I18N['detail.muan.4.img4.desc']
                },
                {
                    src: '/detail/muan-4-5.jpg',
                    caption: I18N['detail.muan.4.img5.caption'],
                    desc: I18N['detail.muan.4.img5.desc']
                },
                {
                    src: '/detail/muan-4-6.jpg',
                    caption: I18N['detail.muan.4.img6.caption'],
                    desc: I18N['detail.muan.4.img6.desc']
                }
            ]
        },
        section5: {
            caption: I18N['detail.muan.5.caption'],
            intros: [
                {
                    title: I18N['detail.muan.5.intro1.title'],
                    descs: [
                        I18N['detail.muan.5.intro1.desc1'],
                        I18N['detail.muan.5.intro1.desc2'],
                        I18N['detail.muan.5.intro1.desc3'],
                        I18N['detail.muan.5.intro1.desc4']
                    ]
                },
                {
                    title: I18N['detail.muan.5.intro2.title'],
                    descs: [
                        I18N['detail.muan.5.intro2.desc1'],
                        I18N['detail.muan.5.intro2.desc2'],
                        I18N['detail.muan.5.intro2.desc3'],
                        I18N['detail.muan.5.intro2.desc4']
                    ]
                }
            ],
            images: [
                '/detail/muan-5-1.jpg',
                '/detail/muan-5-2.jpg',
                '/detail/muan-5-3.jpg',
                '/detail/muan-5-4.jpg'
            ]
        },
        section6 : null,
        section7: {
            contact: {
                address: I18N['detail.muan.7.address'],
                phonenumber: '+81 075 741 8815',
                email: 'info@ishibekojimuan.com'
            },
            intros: [
                I18N['detail.muan.7.intro1'],
                I18N['detail.muan.7.intro2'],
                I18N['detail.muan.7.intro3'],
                I18N['detail.muan.7.intro4'],
                I18N['detail.muan.7.intro5'],
                I18N['detail.muan.7.intro6']
            ],
            mapImage: '/detail/muan-map.png',
            mapAddr: I18N['detail.muan.7.mapaddr'],
            mapCoord: { x: 580, y: 532 }
        },

        // same to the section 1
        // section8: {
        //     caption: '',
        //     intros: ['', ''],
        //     orderLink: '',
        //     gotoLink: ''
        // }
    }

    return <Detail data={data} />
}
