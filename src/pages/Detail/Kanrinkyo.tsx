import { useCommonStore } from "../../store"
import Detail from "./Detail"

export default function Kanrinkyo () {
    const I18N = useCommonStore(state => state.I18N)

    // todo2: replace data.
    const data = {
        section1: {
            // logo: '/logos/kanrinkyo.svg',
            logo: '',
            caption: I18N['kanrinkyo.title'],
            intros: [I18N['kanrinkyo.desc1'], I18N['kanrinkyo.desc2']],
            orderLink: '/',
            gotoLink: '/',
            background: '/detail/kanrinkyo-1.jpg'
        },
        section2: {
            intros: [
                I18N['detail.kanrinkyo.2.intro1'],
                I18N['detail.kanrinkyo.2.intro2'],
                '',
                I18N['detail.kanrinkyo.2.intro3'],
                I18N['detail.kanrinkyo.2.intro4'],
                I18N['detail.kanrinkyo.2.intro5'],
                I18N['detail.kanrinkyo.2.intro6'],
                I18N['detail.kanrinkyo.2.intro7']
            ],
            images: [
                '/detail/kanrinkyo-2-1.jpg',
                '/detail/kanrinkyo-2-2.jpg',
                '/detail/kanrinkyo-2-3.jpg',
                '/detail/kanrinkyo-2-4.jpg',
                '/detail/kanrinkyo-2-5.jpg',
                '/detail/kanrinkyo-2-6.jpg',
                '/detail/kanrinkyo-2-7.jpg',
                '/detail/kanrinkyo-2-8.jpg'
            ]
        },
        section3: {
            caption: I18N['detail.kanrinkyo.3.caption'],
            intros: [
                I18N['detail.kanrinkyo.3.intro1'],
                I18N['detail.kanrinkyo.3.intro2'],
                '',
                I18N['detail.kanrinkyo.3.intro3'],
                I18N['detail.kanrinkyo.3.intro4'],
                I18N['detail.kanrinkyo.3.intro5'],
                I18N['detail.kanrinkyo.3.intro6'],
                I18N['detail.kanrinkyo.3.intro7']
            ],
            images: [
                '/detail/kanrinkyo-3-1.jpg',
                '/detail/kanrinkyo-3-2.jpg',
                '/detail/kanrinkyo-3-3.jpg',
                '/detail/kanrinkyo-3-4.jpg'
            ]
        },
        section4: {
            caption: I18N['detail.kanrinkyo.4.caption'],
            intros: [],
            images: [
                {
                    src: '/detail/kanrinkyo-4-1.jpg',
                    caption: I18N['detail.kanrinkyo.4.img1.caption'],
                    desc: I18N['detail.kanrinkyo.4.img1.desc']
                },
                {
                    src: '/detail/kanrinkyo-4-2.jpg',
                    caption: I18N['detail.kanrinkyo.4.img2.caption'],
                    desc: I18N['detail.kanrinkyo.4.img2.desc']
                },
                {
                    src: '/detail/kanrinkyo-4-3.jpg',
                    caption: I18N['detail.kanrinkyo.4.img3.caption'],
                    desc: I18N['detail.kanrinkyo.4.img3.desc']
                }
            ]
        },
        section5: {
            caption: I18N['detail.kanrinkyo.5.caption'],
            intros: [
                {
                    title: I18N['detail.kanrinkyo.5.intro1.title'],
                    descs: [
                        I18N['detail.kanrinkyo.5.intro1.desc1'],
                        I18N['detail.kanrinkyo.5.intro1.desc2'],
                        I18N['detail.kanrinkyo.5.intro1.desc3'],
                        I18N['detail.kanrinkyo.5.intro1.desc4']
                    ]
                },
                {
                    title: I18N['detail.kanrinkyo.5.intro2.title'],
                    descs: [
                        I18N['detail.kanrinkyo.5.intro2.desc1'],
                        I18N['detail.kanrinkyo.5.intro2.desc2'],
                        I18N['detail.kanrinkyo.5.intro2.desc3'],
                        I18N['detail.kanrinkyo.5.intro2.desc4'],
                        I18N['detail.kanrinkyo.5.intro2.desc5']
                    ]
                },
                // {
                //     title: I18N['detail.kanrinkyo.5.intro3.title'],
                //     descs: [
                //         I18N['detail.kanrinkyo.5.intro3.desc1'],
                //         I18N['detail.kanrinkyo.5.intro3.desc2']
                //     ]
                // }
            ],
            images: [
                '/detail/kanrinkyo-5-1.jpg',
                '/detail/kanrinkyo-5-2.jpg',
                '/detail/kanrinkyo-5-3.jpg',
                '/detail/kanrinkyo-5-4.jpg',
                '/detail/kanrinkyo-5-5.jpg'
            ]
        },
        section6 : null,
        section7: {
            contact: {
                address: I18N['detail.kanrinkyo.7.address'],
                phonenumber: '+81 136 55 8917',
                email: 'info@ryowhagroup.com'
            },
            intros: [
                I18N['detail.kanrinkyo.7.intro1'],
                I18N['detail.kanrinkyo.7.intro2'],
                I18N['detail.kanrinkyo.7.intro3'],
                I18N['detail.kanrinkyo.7.intro4'],
                // I18N['detail.kanrinkyo.7.intro5']
            ],

            // same addr with Arcadia
            mapImage: '/detail/arcadia-map.png',
            mapAddr: I18N['detail.arcadia.7.mapaddr'],
            mapCoord: { x: 635, y: 240 }
        }
    }

    return <Detail data={data} />
}
