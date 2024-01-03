import { useCommonStore } from "../../store"
import Detail from "./Detail"

export default function Yukoro () {
    const I18N = useCommonStore(state => state.I18N)

    const data = {
        section1: {
            // logo: '/logos/yukoro.svg',
            logo: '',
            caption: I18N['yukoro.title'],
            intros: [I18N['yukoro.desc1'], I18N['yukoro.desc2']],
            coming: true,
            background: '/detail/yukoro-1.jpg'
        },
        section2: {
            intros: [
                I18N['detail.yukoro.2.intro1'],
                I18N['detail.yukoro.2.intro2'],
                I18N['detail.yukoro.2.intro3'],
                '',
                I18N['detail.yukoro.2.intro4'],
                I18N['detail.yukoro.2.intro5'],
                I18N['detail.yukoro.2.intro6'],
                I18N['detail.yukoro.2.intro7'],
                I18N['detail.yukoro.2.intro8']
            ],
            images: [
                '/detail/yukoro-2-1.jpg',
                '/detail/yukoro-2-2.jpg',
                '/detail/yukoro-2-3.jpg',
                '/detail/yukoro-2-4.jpg',
                '/detail/yukoro-2-5.jpg',
                '/detail/yukoro-2-6.jpg',
                '/detail/yukoro-2-7.jpg',
                '/detail/yukoro-2-8.jpg'
            ]
        },
        section3: {
            caption: I18N['detail.yukoro.3.caption'],
            intros: [
                I18N['detail.yukoro.3.intro1'],
                I18N['detail.yukoro.3.intro2'],
                I18N['detail.yukoro.3.intro3'],
                '',
                I18N['detail.yukoro.3.intro4'],
                I18N['detail.yukoro.3.intro5'],
                I18N['detail.yukoro.3.intro6'],
                // I18N['detail.yukoro.3.intro7'],
                // I18N['detail.yukoro.3.intro8']
            ],
            images: [
                '/detail/yukoro-3-1.jpg',
                '/detail/yukoro-3-2.jpg',
                '/detail/yukoro-3-3.jpg',
                '/detail/yukoro-3-4.jpg'
            ]
        },
        section4: {
            caption: I18N['detail.yukoro.4.caption'],
            intros: [
                I18N['detail.yukoro.4.intro1'],
                I18N['detail.yukoro.4.intro2'],
                '',
                I18N['detail.yukoro.4.intro3'],
                I18N['detail.yukoro.4.intro4'],
                I18N['detail.yukoro.4.intro5'],
                I18N['detail.yukoro.4.intro6'],
                I18N['detail.yukoro.4.intro7'],
            ],
            images: [
                { src: '/detail/yukoro-4-1.jpg' },
                { src: '/detail/yukoro-4-2.jpg' },
                { src: '/detail/yukoro-4-3.jpg' }
            ]
        },
        section5: {
            caption: I18N['detail.yukoro.5.caption'],
            intros: [
                {
                    title: null,
                    descs: [
                        I18N['detail.yukoro.5.intro1'],
                        I18N['detail.yukoro.5.intro2'],
                        I18N['detail.yukoro.5.intro3'],
                        '',
                        I18N['detail.yukoro.5.intro4'],
                        I18N['detail.yukoro.5.intro5'],
                        I18N['detail.yukoro.5.intro6'],
                        I18N['detail.yukoro.5.intro7'],
                        I18N['detail.yukoro.5.intro8'],
                        I18N['detail.yukoro.5.intro9']
                    ]
                }
            ],
            images: [
                '/detail/yukoro-5-1.jpg',
                '/detail/yukoro-5-2.jpg',
                '/detail/yukoro-5-3.jpg',
                '/detail/yukoro-5-4.jpg'
            ]
        },
        section6 : null,
        section7: {
            contact: {
                address: I18N['detail.yukoro.7.address'],
                phonenumber: '+81 136 55 8917',
                email: 'info@ryowhagroup.com'
            },
            intros: [
                I18N['detail.yukoro.7.intro1'],
                I18N['detail.yukoro.7.intro2'],
                I18N['detail.yukoro.7.intro3'],
                I18N['detail.yukoro.7.intro4'],
                // I18N['detail.yukoro.7.intro5']
            ],

            // same addr with Arcadia
            mapImage: '/detail/yukoro-map.png',
            mapAddr: I18N['detail.arcadia.7.mapaddr'],
            mapCoord: { x: 635, y: 240 }
        }
    }

    return <Detail data={data} />
}
