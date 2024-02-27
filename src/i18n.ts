export enum I18N {
    EN = 'EN',
    ZH = 'ZH',
    JP = 'JP'
}

export const I18N_LABELS = {
    [I18N.EN]: 'ENGLISH',
    [I18N.JP]: '日本語',
    [I18N.ZH]: '中文',
}

type I18NItem = {
    [I18N.EN]: string,
    [I18N.JP]: string,
    [I18N.ZH]: string,
}

type I18NFullData = {
    [key: string]: I18NItem
}

export const I18NS: I18NFullData = {
    // basic words
    'wechat.desc': {
        [I18N.ZH]: '打开微信扫描二维码，关注我们',
        [I18N.EN]: 'Scan the QR code with WeChat to follow us',
        [I18N.JP]: 'WeChatでQRコードをスキャンしてフォローしてください'
    },
    'explore': {
        [I18N.ZH]: '探索',
        [I18N.EN]: 'Explore',
        [I18N.JP]: '探索',
    },
    'reserve': {
        [I18N.ZH]: '预订',
        [I18N.EN]: 'RESERVE',
        [I18N.JP]: '予約',
    },
    'reservebtn': {
        [I18N.ZH]: '预订',
        [I18N.EN]: 'RESERVE',
        [I18N.JP]: '予約',
    },
    'comingbtn': {
        [I18N.ZH]: '即将到来',
        [I18N.EN]: 'Coming Soon',
        [I18N.JP]: '近日公開',
    },
    'detail': {
        [I18N.ZH]: '前往',
        [I18N.EN]: 'GO TO',
        [I18N.JP]: '前往',
    },
    'contactus': {
        [I18N.ZH]: 'CONTACT US',
        [I18N.EN]: 'CONTACT US',
        [I18N.JP]: 'CONTACT US',
    },
// ------------------------------ contact ------------------------------
    'contact.caption': {
        [I18N.ZH]: '联系我们',
        [I18N.EN]: 'Contact Us',
        [I18N.JP]: 'お問い合わせ',
    },
    'contact.address': {
        [I18N.ZH]: '地址：〒044-0036 日本国北海道虻田郡倶知安町南6条西1丁目5番地1',
        [I18N.EN]: 'Add: 5-1, 1-chome, South 6-jo West Kutchan-cho Abuta-Gun Hokkaido, Japan 044-0036',
        [I18N.JP]: '住所: 〒044-0036 北海道虻田郡倶知安町南6条西1丁目5番地',
    },
    'contact.phone': {
        [I18N.ZH]: '电话：+81 136 55 8917',
        [I18N.EN]: 'Tel: +81 136 55 8917',
        [I18N.JP]: '電話: +81 136 55 8917',
    },
    'contact.fax': {
        [I18N.ZH]: '传真：+81 136 55 8927',
        [I18N.EN]: 'Fax: +81 136 55 8927',
        [I18N.JP]: 'ファックス: +81 136 55 8927'
    },
    'contact.email': {
        [I18N.ZH]: '邮箱：',
        [I18N.EN]: 'E-mail: ',
        [I18N.JP]: '電子メール: '
    },
    'contact.emaillink': {
        [I18N.ZH]: 'info@ryowhagroup.com',
        [I18N.EN]: 'info@ryowhagroup.com',
        [I18N.JP]: 'info@ryowhagroup.com'
    },
// ------------------------------ home ------------------------------
    // 梦庵
    'muan.title': {
        [I18N.ZH]: 'MUAN 京都 梦庵',
        [I18N.EN]: 'ISHIBEKOJI MUAN',
        [I18N.JP]: 'MUAN 京都 夢庵',
    },
    'muan.title.firstname': {
        [I18N.ZH]: 'MUAN',
        [I18N.EN]: 'MUAN',
        [I18N.JP]: 'MUAN',
    },
    'muan.title.lastname': {
        [I18N.ZH]: '京都梦庵',
        [I18N.EN]: 'ISHIBEKOJI',
        [I18N.JP]: '京都夢庵',
    },
    'muan.desc1': {
        [I18N.ZH]: '石塀幽径 悠然居所',
        [I18N.EN]: 'A residence nestled in Ishibekoji',
        [I18N.JP]: '石塀小路にひっそりと佇む静かな隠れ宿',
    },
    'muan.desc2': {
        [I18N.ZH]: '纤尘不染中开启心灵对话',
        [I18N.EN]: 'Speaking to your soul in a dust-free space',
        [I18N.JP]: '調和の取れたしつらえに囲まれ、心の対話へいざなおう',
    },
    'muan.desc2.mobile': {
        [I18N.ZH]: '纤尘不染中开启心灵对话',
        [I18N.EN]: 'Speaking to your soul in a dust-free space',
        [I18N.JP]: '調和の取れたしつらえに囲まれ\n心の対話へいざなおう',
    },

    // 二世谷雪屋
    'arcadia.title': {
        [I18N.ZH]: 'ARCADIA 二世谷 雪屋',
        [I18N.EN]: 'ARCADIA Chalet Niseko',
        [I18N.JP]: 'ARCADIA ニセコ雪屋',
    },
    'arcadia.title.firstname': {
        [I18N.ZH]: 'ARCADIA',
        [I18N.EN]: 'ARCADIA',
        [I18N.JP]: 'ARCADIA',
    },
    'arcadia.title.lastname': {
        [I18N.ZH]: '二世谷雪屋',
        [I18N.EN]: 'Chalet Niseko',
        [I18N.JP]: 'ニセコ雪屋',
    },
    'arcadia.desc1': {
        [I18N.ZH]: '滑雪盛揽 银白之梦',
        [I18N.EN]: 'Skiing in a dreamy slivery white view',
        [I18N.JP]: 'スキーを存分に楽しめる 白銀の中に身を委ねる',
    },
    'arcadia.desc1.mobile': {
        [I18N.ZH]: '滑雪盛揽 银白之梦',
        [I18N.EN]: 'Skiing in a dreamy slivery white view',
        [I18N.JP]: 'スキーを存分に楽しめる\n白銀の中に身を委ねる',
    },
    'arcadia.desc2': {
        [I18N.ZH]: '绵延叠嶂中探寻羊蹄山麓',
        [I18N.EN]: 'Explore the Mount Yotei in the rolling mountains',
        [I18N.JP]: '壮大な羊蹄山の山々を探検',
    },

    // 雪屋閑林居
    'kanrinkyo.title': {
        [I18N.ZH]: 'KANRINKYO 雪屋 閑林居',
        [I18N.EN]: 'KANRINKYO Chalet Niseko',
        [I18N.JP]: 'KANRINKYO ニセコ雪屋',
    },
    'kanrinkyo.title.firstname': {
        [I18N.ZH]: 'KANRINKYO',
        [I18N.EN]: 'KANRINKYO',
        [I18N.JP]: 'KANRINKYO',
    },
    'kanrinkyo.title.lastname': {
        [I18N.ZH]: '雪屋閑林居',
        [I18N.EN]: 'Chalet Niseko',
        [I18N.JP]: 'ニセコ雪屋',
    },
    'kanrinkyo.desc1': {
        [I18N.ZH]: '閑庭漫步 踏遍清心',
        [I18N.EN]: 'Stroll around the compound to clear your mind',
        [I18N.JP]: 'のんびりと庭を散策し、心も身体もリフレッシュできる宿',
    },
    'kanrinkyo.desc1.mobile': {
        [I18N.ZH]: '閑庭漫步 踏遍清心',
        [I18N.EN]: 'Stroll around the compound to clear your mind',
        [I18N.JP]: 'のんびりと庭を散策し\n心も身体もリフレッシュできる宿',
    },
    'kanrinkyo.desc2': {
        [I18N.ZH]: '静怡侘寂中品味风雅美学',
        [I18N.EN]: 'Immerse in a wabi-sabi-style aesthetics',
        [I18N.JP]: '侘び寂びと静寂を兼ね揃えた別格な空間',
    },

    // 二世谷 温泉
    'yukoro.title': {
        [I18N.ZH]: 'YUKORO 二世谷 温泉',
        [I18N.EN]: 'YUKORO Spring Niseko',
        [I18N.JP]: 'YUKORO ニセコ 温泉',
    },
    'yukoro.title.firstname': {
        [I18N.ZH]: 'YUKORO',
        [I18N.EN]: 'YUKORO',
        [I18N.JP]: 'YUKORO',
    },
    'yukoro.title.lastname': {
        [I18N.ZH]: '二世谷温泉',
        [I18N.EN]: 'Spring Niseko',
        [I18N.JP]: 'ニセコ 温泉',
    },
    'yukoro.desc1': {
        [I18N.ZH]: '暖意相传 尘埃涤荡',
        [I18N.EN]: 'Let the warmth fill your body, Let the dust be washed off',
        [I18N.JP]: '身体がほっこりと温まる中、疲れまで洗い流す',
    },
    'yukoro.desc1.mobile': {
        [I18N.ZH]: '暖意相传 尘埃涤荡',
        [I18N.EN]: 'Let the warmth fill your body\nLet the dust be washed off',
        [I18N.JP]: '身体がほっこりと温まる中\n疲れまで洗い流す',
    },
    'yukoro.desc2': {
        [I18N.ZH]: '惬意舒缓中体悟亘古文脉',
        [I18N.EN]: 'Enlighten the everlasting culture in comfort',
        [I18N.JP]: '安らぎとぬくもりが受け継がれる',
    },

    // 新大陆
    'newland.title': {
        [I18N.ZH]: 'NEW LAND',
        [I18N.EN]: 'NEW LAND',
        [I18N.JP]: 'NEW LAND',
    },
    'newland.title.firstname': {
        [I18N.ZH]: 'NEW LAND',
        [I18N.EN]: 'NEW LAND',
        [I18N.JP]: 'NEW LAND',
    },
    'newland.title.lastname': {
        [I18N.ZH]: 'COMING SOON',
        [I18N.EN]: 'COMING SOON',
        [I18N.JP]: 'お楽しみに ',
    },
    'newland.desc1': {
        [I18N.ZH]: '举目翘盼 计日呈现',
        [I18N.EN]: 'The much-anticipated magnificence coming soon',
        [I18N.JP]: '近いうちに登場する',
    },
    'newland.desc2': {
        [I18N.ZH]: '隈研吾的美胜巨献',
        [I18N.EN]: 'Presented by Kengo Kuma',
        [I18N.JP]: '隈研吾氏が設計した胸を膨らませるほど美しい施設',
    },

    // Home P2
    'home.2.intro1': {
        [I18N.ZH]: '叹为观止的盛景',
        [I18N.EN]: 'A magnificent landscape',
        [I18N.JP]: '息をのむような絶景',
    },
    'home.2.intro2': {
        [I18N.ZH]: '动人心魄的美学',
        [I18N.EN]: 'The breathtaking aesthetics',
        [I18N.JP]: '洗練された美しいしつらえ',
    },
    'home.2.intro3': {
        [I18N.ZH]: '奢怡精微的体验',
        [I18N.EN]: 'And a luxurious and refined experience',
        [I18N.JP]: 'きめ細やかで極上な体験',
    },
    'home.2.intro4.1': {
        [I18N.ZH]: '稜',
        [I18N.EN]: 'Finding both in RYOWHA',
        [I18N.JP]: 'その両者を融合された素敵なステーを',
    },
    'home.2.intro4.2': {
        [I18N.ZH]: '即两者交织相合',
        [I18N.EN]: '',
        [I18N.JP]: '',
    },
    'home.2.intro5': {
        [I18N.ZH]: '静依稜和',
        [I18N.EN]: 'Living in RYOWHA',
        [I18N.JP]: 'リョーワで満喫',
    },
    'home.2.intro6': {
        [I18N.ZH]: '一瞥一景之间',
        [I18N.EN]: 'to witness the scene and the view',
        [I18N.JP]: 'インテリアやアートに満ちた空間',
    },
    'home.2.intro7.1': {
        [I18N.ZH]: '自然',
        [I18N.EN]: 'Nature',
        [I18N.JP]: '自然と美が互いに調和され',
    },
    'home.2.intro7.2': {
        [I18N.ZH]: '美学',
        [I18N.EN]: 'Aesthetics',
        [I18N.JP]: '',
    },
    'home.2.intro7.3': {
        [I18N.ZH]: '彼此',
        [I18N.EN]: 'Rapport',
        [I18N.JP]: '',
    },
    // 'home.2.intro7.4': {
    //     [I18N.ZH]: '我',
    //     [I18N.EN]: '我',
    //     [I18N.JP]: '我',
    // },
    'home.2.intro8': {
        [I18N.ZH]: '遥相应和于咫尺之间',
        [I18N.EN]: 'Resonate at the close distance',
        [I18N.JP]: '心を解き放ち、満たす時間を ',
    },
    // 'home.2.intro9': {
    //     [I18N.ZH]: '而当这段相合结束',
    //     [I18N.EN]: '而当这段相合结束',
    //     [I18N.JP]: '而当这段相合结束',
    // },
    // 'home.2.intro10': {
    //     [I18N.ZH]: '收获内心的稜和',
    //     [I18N.EN]: '收获内心的稜和',
    //     [I18N.JP]: '收获内心的稜和',
    // },

    // Home P3
    'home.3.tab1': {
        [I18N.ZH]: '森罗景致',
        [I18N.EN]: 'Forest View',
        [I18N.JP]: '自然の美しい景観に溶け込む',
    },
    'home.3.tab1.desc1': {
        [I18N.ZH]: '于每一处驻地',
        [I18N.EN]: 'From every location',
        [I18N.JP]: 'どの地のステーでも',
    },
    'home.3.tab1.desc2': {
        [I18N.ZH]: '体味自然之美伦美幻',
        [I18N.EN]: 'Enjoy the beauty of nature',
        [I18N.JP]: '緑に囲まれて自然の実りを味わい尽くす',
    },

    'home.3.tab2': {
        [I18N.ZH]: '动人美学',
        [I18N.EN]: 'Touching Aesthetics',
        [I18N.JP]: '美へのこだわり',
    },
    'home.3.tab2.desc1': {
        [I18N.ZH]: '人文 艺术 美学',
        [I18N.EN]: 'Humanity Art Aesthetics',
        [I18N.JP]: '館内の至るところに漂う',
    },
    'home.3.tab2.desc2': {
        [I18N.ZH]: '浸润在每一个角落',
        [I18N.EN]: 'Immersed in every corner',
        [I18N.JP]: '文化、アート、美的センス',
    },

    'home.3.tab3': {
        [I18N.ZH]: '奢怡体验',
        [I18N.EN]: 'Luxurious Experience',
        [I18N.JP]: 'ラグジュアリーで快適な体験',
    },
    'home.3.tab3.desc1': {
        [I18N.ZH]: '精洽入微的服务',
        [I18N.EN]: 'Attention-to-detail service',
        [I18N.JP]: 'きめ細やかな気配りを感じるサービス',
    },
    'home.3.tab3.desc2': {
        [I18N.ZH]: '由身至心的怡然自在',
        [I18N.EN]: 'Comfort from body to soul',
        [I18N.JP]: '身体から心まであなたらしく気ままに過ごせる',
    },

    // 'home.ending': {
    //     [I18N.ZH]: '「 每个人都值得一次稜和 」',
    //     [I18N.EN]: '「 每个人都值得一次稜和 」',
    //     [I18N.JP]: '「 每个人都值得一次稜和 」',
    // },

// ------------------------------ detail ------------------------------

    // Muan P2
    'detail.muan.2.intro1': {
        [I18N.ZH]: '信步于悠然小径',
        [I18N.EN]: 'Step into the tranquil path',
        [I18N.JP]: 'のんびりとした小路に散策に出かけて',
    },
    'detail.muan.2.intro2': {
        [I18N.ZH]: '隐入梦庵 体味京都风雅',
        [I18N.EN]: 'Find the secret grace of Kyoto in MUAN',
        [I18N.JP]: '京わしい風情が漂う宿 静寂な夢庵へ',
    },
    'detail.muan.2.intro3': {
        [I18N.ZH]: '透过窗棂',
        [I18N.EN]: 'Behold the long-lasting ancient culture',
        [I18N.JP]: '窓から',
    },
    'detail.muan.2.intro4': {
        [I18N.ZH]: '一睹古韵中文脉绵延',
        [I18N.EN]: 'through the traditional lattice frame',
        [I18N.JP]: '都の風情があふれる',
    },
    'detail.muan.2.intro5': {
        [I18N.ZH]: '浓郁积蕴与惬意体验',
        [I18N.EN]: 'When accumulated culture ',
        [I18N.JP]: '多彩な体験と重厚な歴史',
    },
    'detail.muan.2.intro6': {
        [I18N.ZH]: '在此交融',
        [I18N.EN]: 'meets cozy experience',
        [I18N.JP]: 'ここに融合してが色濃く薫る',
    },
    'detail.muan.2.intro7': {
        [I18N.ZH]: '用心感受这座古都的内敛',
        [I18N.EN]: 'Sense the introversion of the city with your heart',
        [I18N.JP]: '心静かに京都を味わい尽くす',
    },
    'detail.muan.2.intro8': {
        [I18N.ZH]: '赴一场灵与心的对话',
        [I18N.EN]: 'that speaks to your spirit and soul',
        [I18N.JP]: '心がリフレッシュする時間に身を委ねよう ',
    },

    // Muan P3
    'detail.muan.3.caption': {
        [I18N.ZH]: '境·艺',
        [I18N.EN]: 'Locale',
        [I18N.JP]: '境·芸',
    },
    'detail.muan.3.intro1': {
        [I18N.ZH]: '梦庵坐落于石塀小路',
        [I18N.EN]: 'Located in the Ishibekoji',
        [I18N.JP]: '石塀小路に静かに佇む夢庵',
    },
    'detail.muan.3.intro2': {
        [I18N.ZH]: '比邻宁宁之道',
        [I18N.EN]: 'and adjacent to the Path of Nene',
        [I18N.JP]: '寧々の道に隣接する',
    },
    'detail.muan.3.intro3': {
        [I18N.ZH]: '静享京都千载古韵',
        [I18N.EN]: 'MUAN carries the Kyoto\'s grace of centuries',
        [I18N.JP]: '千年の京の風情、美と魅力を存分に味わえる場所',
    },
    'detail.muan.3.intro4': {
        [I18N.ZH]: '兼具现代灵感升华',
        [I18N.EN]: 'and modern inspirations',
        [I18N.JP]: 'モダンなインスピレーションを盛り込んだ空間で',
    },
    'detail.muan.3.intro5': {
        [I18N.ZH]: '聆听千年风雅',
        [I18N.EN]: 'Hear the elegance of thousands of years',
        [I18N.JP]: '千年の都の趣と粋に耳を傾きながら',
    },
    'detail.muan.3.intro6': {
        [I18N.ZH]: '刻写京都之旅的回忆',
        [I18N.EN]: 'Remember every moment of Kyoto',
        [I18N.JP]: '本物の京都を感じる旅の思い出に刻み込む ',
    },

    // Muan P4
    'detail.muan.4.caption': {
        [I18N.ZH]: '知·行',
        [I18N.EN]: 'Activity',
        [I18N.JP]: '知·行'
    },
    'detail.muan.4.img1.caption': {
        [I18N.ZH]: '一期一会',
        [I18N.EN]: 'Once in a lifetime',
        [I18N.JP]: '一期一会'
    },
    'detail.muan.4.img1.desc': {
        [I18N.ZH]: '私享主厨 OMAKASE 每周一会',
        [I18N.EN]: 'A weekly Omakase prepared by private chef',
        [I18N.JP]: 'プライベートシェフによる週替わりおまかせコース'
    },
    'detail.muan.4.img2.caption': {
        [I18N.ZH]: '茶道品韵',
        [I18N.EN]: 'Tea Ceremony',
        [I18N.JP]: '茶道体験'
    },
    'detail.muan.4.img2.desc': {
        [I18N.ZH]: '品茗茶道 和敬清寂',
        [I18N.EN]: 'Appreciation of tea ritual and ceremony',
        [I18N.JP]: '調和と静寂を感じられる、日本伝統なお茶席体験'
    },
    'detail.muan.4.img3.caption': {
        [I18N.ZH]: '京都艺伎',
        [I18N.EN]: 'Kyoto Geisha',
        [I18N.JP]: '京都の芸妓体験'
    },
    'detail.muan.4.img3.desc': {
        [I18N.ZH]: '悬落飘逸 风月无边',
        [I18N.EN]: 'Drifting, floating and timelss',
        [I18N.JP]: '芸妓さんの艶やかな姿とおもてなし文化を楽しむ'
    },
    'detail.muan.4.img4.caption': {
        [I18N.ZH]: '静心禅修',
        [I18N.EN]: 'Meditation',
        [I18N.JP]: '座禅·瞑想体験'
    },
    'detail.muan.4.img4.desc': {
        [I18N.ZH]: '超然物外 平静止水',
        [I18N.EN]: 'Let your mind transcend and calm like still water',
        [I18N.JP]: '自分自身と向き合う、心を静める癒し体験'
    },
    'detail.muan.4.img5.caption': {
        [I18N.ZH]: '徒步赏景',
        [I18N.EN]: 'Walking',
        [I18N.JP]: 'ハイキング体験'
    },
    'detail.muan.4.img5.desc': {
        [I18N.ZH]: '悠然徒步 感受京郊',
        [I18N.EN]: 'A casual walk to landscapes outside of Kyoto',
        [I18N.JP]: 'のんびりと京都の郊外を感じるハイキングをお愉しみください'
    },
    'detail.muan.4.img6.caption': {
        [I18N.ZH]: '专车旅程',
        [I18N.EN]: 'Private Shuttle Tour',
        [I18N.JP]: '専用車サービス'
    },
    'detail.muan.4.img6.desc': {
        [I18N.ZH]: '专车接驳 探秘京都',
        [I18N.EN]: 'Explore Kyoto by private shuttle bus',
        [I18N.JP]: '専用車の送迎で京都を探索しよう'
    },

    // Muan P5
    'detail.muan.5.caption': {
        [I18N.ZH]: '居·所',
        [I18N.EN]: 'Residence',
        [I18N.JP]: '居·所'
    },
    'detail.muan.5.intro1.title': {
        [I18N.ZH]: '传统古韵',
        [I18N.EN]: 'Traditional sensation',
        [I18N.JP]: '伝統な和を取り入れた'
    },
    'detail.muan.5.intro1.desc1': {
        [I18N.ZH]: '典雅传统榻榻米与餐台',
        [I18N.EN]: 'Classic and elegant tatami and dining table',
        [I18N.JP]: '優雅な伝統的なたたみとダイニングテーブル'
    },
    'detail.muan.5.intro1.desc2': {
        [I18N.ZH]: '日式庭院 感悟超然时间的宁静',
        [I18N.EN]: 'Feel the timeless tranquility in Japanese garden',
        [I18N.JP]: '日本庭園にて時を超えた静寂感が溢れている'
    },
    'detail.muan.5.intro1.desc3': {
        [I18N.ZH]: '桧木浴桶 由身至心的舒缓',
        [I18N.EN]: 'Soothe your body and soul in cypress bath tub',
        [I18N.JP]: '檜の風呂で心と体の奥まで癒し'
    },
    'detail.muan.5.intro1.desc4': {
        [I18N.ZH]: '悠享石塀小路的静谧夜色',
        [I18N.EN]: 'Enjoy the silent night in Ishibekoji',
        [I18N.JP]: '石塀小路で静かな夜が優しく包み込んでくれる'
    },
    'detail.muan.5.intro2.title': {
        [I18N.ZH]: '现代灵感',
        [I18N.EN]: 'Modern Inspiration',
        [I18N.JP]: 'モダンなインスピレーションを盛り込んだ'
    },
    'detail.muan.5.intro2.desc1': {
        [I18N.ZH]: '客房均配套备淋浴间与盥洗室',
        [I18N.EN]: 'En-suite with bathroom and toilet',
        [I18N.JP]: '各部屋にシャワーとトイレを完備'
    },
    'detail.muan.5.intro2.desc2': {
        [I18N.ZH]: '含加湿器的空气净化器',
        [I18N.EN]: 'Air purifier and humidifier',
        [I18N.JP]: '加湿機能を備える空気清浄機'
    },
    'detail.muan.5.intro2.desc3': {
        [I18N.ZH]: '现代化便利设施 感受专属放松时刻',
        [I18N.EN]: 'Modern convenient facilities for your “me time”',
        [I18N.JP]: '機能性を揃える充実な客室設備で寛ぎのひと時をご提供'
    },
    'detail.muan.5.intro2.desc4': {
        [I18N.ZH]: '日式酒廊 品赏京都风味',
        [I18N.EN]: 'Find the flavour of Kyoto in Japanese style lounge',
        [I18N.JP]: '京の風情が漂う和風ラウンジ'
    },

    // Muan P6
    'detail.muan.7.address': {
        [I18N.ZH]: '地址：〒605-0825 日本国京都市東山区下河原町463-10',
        [I18N.EN]: 'Add: 463-10, Shimokawara-cho, Higashiyama-ku, Kyoto-shi, Kyoto 605-0825 Japan',
        [I18N.JP]: '住所: 〒605-0825 京都市東山区下河原町463-10'
    },
    'detail.muan.7.tel': {
        [I18N.ZH]: '电话：+81 075 741 8815',
        [I18N.EN]: 'Tel: +81 075 741 8815',
        [I18N.JP]: '電話: +81 075 741 8815'
    },
    'detail.muan.7.email': {
        [I18N.ZH]: '邮箱：info@ishibekojimuan.com',
        [I18N.EN]: 'E-mail: info@ishibekojimuan.com',
        [I18N.JP]: '電子メール: info@ishibekojimuan.com'
    },
    'detail.muan.7.intro1': {
        [I18N.ZH]: 'MUAN 京都梦庵位于京都石塀小路',
        [I18N.EN]: 'MUAN is located at Ishibekoji in Kyoto',
        [I18N.JP]: '京都の石垣小路に佇む MUAN 京都夢庵'
    },
    'detail.muan.7.intro2': {
        [I18N.ZH]: '一条足以体悟京都文化积蕴的幽径',
        [I18N.EN]: 'An alley represents the culture accumulation of Kyoto at its full',
        [I18N.JP]: 'この古都の街並みと趣を感じられるこの静かな小路は'
    },
    'detail.muan.7.intro3': {
        [I18N.ZH]: '现为重要传统建筑群保护区',
        [I18N.EN]: 'It is now a conservation area of key traditional architectural complex',
        [I18N.JP]: '重要伝統的建造物保存地区に指定されており'
    },
    'detail.muan.7.intro4': {
        [I18N.ZH]: '穿梭小巷，漫步于扑面而来的人文气息',
        [I18N.EN]: 'Walk through the alley to sense its humanities vibe',
        [I18N.JP]: '路地をくぐった瞬間、独特な京都の趣や思いに包まれるひと時'
    },
    'detail.muan.7.intro5': {
        [I18N.ZH]: '每至樱花季节，飘落花瓣散布石板和水面',
        [I18N.EN]: 'Falling sakura petals are scattered on the stone blocks over water surface in spring',
        [I18N.JP]: '桜の季節には、石畳や水面に花びらがきれいに舞い散る'
    },
    'detail.muan.7.intro6': {
        [I18N.ZH]: '四季转换，渲染出独属此地的绝美之旅',
        [I18N.EN]: 'The beauty of the journey exclusive to this area changes as four seasons go by',
        [I18N.JP]: '四季の移ろいに、この地でしか味わえない雰囲気で京の旅をご堪能ください'
    },
    'detail.muan.7.mapaddr': {
        [I18N.ZH]: '東山区，下河原町',
        [I18N.EN]: 'Shimokawara-cho, Higashiyama-ku',
        [I18N.JP]: '東山区，下河原町',
    },
    'detail.muan.7.mapaddr.mobile': {
        [I18N.ZH]: '東山区，下河原町',
        [I18N.EN]: 'Shimokawara-cho\nHigashiyama-ku',
        [I18N.JP]: '東山区，下河原町',
    },

    // Arcadia P2
    'detail.arcadia.2.intro1': {
        [I18N.ZH]: '佇立于羊蹄山麓的宅邸',
        [I18N.EN]: 'The villa is standing at the foot of Mount Yotei',
        [I18N.JP]: '羊蹄山の麓に佇むリゾートハウス',
    },
    'detail.arcadia.2.intro2': {
        [I18N.ZH]: '勾勒一段雪的追风逐日',
        [I18N.EN]: 'Beholding the rushing down the snow',
        [I18N.JP]: '冬は上質なパウダースノーを求めてここへ',
    },
    'detail.arcadia.2.intro3': {
        [I18N.ZH]: '登临旷美雪岭',
        [I18N.EN]: 'Up to the astounding snow hill',
        [I18N.JP]: '山頂に登って雄大な美しい稜線',
    },
    'detail.arcadia.2.intro4': {
        [I18N.ZH]: '穿梭雪林 目之所及',
        [I18N.EN]: 'Cross the snow forest\nWithin the reach of your sight',
        [I18N.JP]: '雪林の中を滑りながら見渡す限り',
    },
    'detail.arcadia.2.intro5': {
        [I18N.ZH]: '银装素裹 比比皆是',
        [I18N.EN]: 'Everything glitters in silvery white',
        [I18N.JP]: 'あたり一面を白く覆い隠す銀世界',
    },
    'detail.arcadia.2.intro6': {
        [I18N.ZH]: '穿透无边窗景的光耀',
        [I18N.EN]: 'sparkling through the frameless windows',
        [I18N.JP]: '床から天井まで広がる窓から差し込む光で',
    },
    'detail.arcadia.2.intro7': {
        [I18N.ZH]: '在自然景致的簇拥下',
        [I18N.EN]: 'Immersed in the natural scenery',
        [I18N.JP]: '壮大な自然に囲まれて',
    },
    'detail.arcadia.2.intro8': {
        [I18N.ZH]: '探秘晶莹皎洁的非凡之旅',
        [I18N.EN]: 'a sparkling and marvellous journey awaits you',
        [I18N.JP]: '大地を白く染める雪のなかで旅が広がります',
    },

    // Arcadia P3
    'detail.arcadia.3.caption': {
        [I18N.ZH]: '境·界',
        [I18N.EN]: 'Locale',
        [I18N.JP]: '境·界',
    },
    'detail.arcadia.3.intro1': {
        [I18N.ZH]: '意大利建筑巨匠',
        [I18N.EN]: 'Designed by the Italian master architect,',
        [I18N.JP]: 'イタリア人の建築巨匠',
    },
    'detail.arcadia.3.intro2': {
        [I18N.ZH]: 'RICCARDO RUBELLIA 倾心之作',
        [I18N.EN]: 'Riccardo Rubellia,',
        [I18N.JP]: 'RICCARDO RUBELLIA が手掛けた傑作',
    },
    'detail.arcadia.3.intro3': {
        [I18N.ZH]: '坐落于粉雪天堂二世谷核心比罗夫镇',
        [I18N.EN]: 'Located at Hirafu Town, the core of Niseko, the paradise of powder snow',
        [I18N.JP]: 'パウダースノー聖地ニセコの中心に位置するひらふにある',
    },
    'detail.arcadia.3.intro4': {
        [I18N.ZH]: '透过无边窗景',
        [I18N.EN]: 'Through the frameless windows',
        [I18N.JP]: '床から天井まで広がる窓から',
    },
    'detail.arcadia.3.intro5': {
        [I18N.ZH]: '一览羊蹄山麓雄阔身姿',
        [I18N.EN]: 'Mount Yotei is all in your sight',
        [I18N.JP]: '羊蹄山を一望できる眺め',
    },
    'detail.arcadia.3.intro6': {
        [I18N.ZH]: '心随银白飞雪翩然起舞',
        [I18N.EN]: 'Let the heart dance with the silvery white snow',
        [I18N.JP]: '心は雪とともに踊り出す ',
    },
    // 'detail.arcadia.3.intro7': {
    //     [I18N.ZH]: '重获灵魂平和的瞬息',
    //     [I18N.EN]: '重获灵魂平和的瞬息',
    //     [I18N.JP]: '重获灵魂平和的瞬息',
    // },

    // Arcadia P4
    'detail.arcadia.4.caption': {
        [I18N.ZH]: '知·行',
        [I18N.EN]: 'Activity',
        [I18N.JP]: '知·行'
    },
    'detail.arcadia.4.img1.caption': {
        [I18N.ZH]: '全天专属管家',
        [I18N.EN]: 'All-day exclusive housekeeper',
        [I18N.JP]: '24時間専属バトラーサービス'
    },
    'detail.arcadia.4.img1.desc': {
        [I18N.ZH]: '入微间 尽享怡然舒心',
        [I18N.EN]: 'Attention to details, just relax and enjoy',
        [I18N.JP]: '滞在中の時間を快適にするお手伝いします'
    },
    'detail.arcadia.4.img2.caption': {
        [I18N.ZH]: '私享专车',
        [I18N.EN]: 'Private Chauffeur',
        [I18N.JP]: '専用車'
    },
    'detail.arcadia.4.img2.desc': {
        [I18N.ZH]: '行程无忧 出行尽在掌握',
        [I18N.EN]: 'Enjoy your travel worry-free',
        [I18N.JP]: '専用車でお好みの場所までお迎えに'
    },

    'detail.arcadia.4.img3.caption': {
        [I18N.ZH]: '一站预约',
        [I18N.EN]: 'One-stop reservation',
        [I18N.JP]: 'ワンストップ予約'
    },
    'detail.arcadia.4.img3.desc': {
        [I18N.ZH]: '滑雪私教 雪票 缆车 餐厅',
        [I18N.EN]: 'Ski private coach, snow ticket, cable car and restaurant.',
        [I18N.JP]: 'スキーレッスン、スキーチケットリフト、 レストランなどの手配'
    },
    'detail.arcadia.4.img4.caption': {
        [I18N.ZH]: '专人陪同',
        [I18N.EN]: 'Personal assistance',
        [I18N.JP]: '専門コンシェルジェチーム'
    },
    'detail.arcadia.4.img4.desc': {
        [I18N.ZH]: '租购雪具 当地出行顾问',
        [I18N.EN]: 'Ski equipment rental and local travel advisor',
        [I18N.JP]: 'スキーレンタルと現地旅行ガイドもご対応'
    },
    'detail.arcadia.4.img5.caption': {
        [I18N.ZH]: '私享主厨',
        [I18N.EN]: 'Private Chef',
        [I18N.JP]: 'プライベートシェフ'
    },
    'detail.arcadia.4.img5.desc': {
        [I18N.ZH]: '珍稀食材 享味高定晚宴',
        [I18N.EN]: 'High-end gastronomy with supreme delicacies',
        [I18N.JP]: '最高の食材を用いた極上なディナーコースをお楽しみください'
    },

    // Arcadia P5
    'detail.arcadia.5.caption': {
        [I18N.ZH]: '居·所',
        [I18N.EN]: 'Residence',
        [I18N.JP]: '居·所'
    },
    'detail.arcadia.5.intro1.title': {
        [I18N.ZH]: '独立三层宅邸',
        [I18N.EN]: 'Detached three-floor villa',
        [I18N.JP]: '3階建ての独立なリゾートハウス'
    },
    'detail.arcadia.5.intro1.desc1': {
        [I18N.ZH]: '全屋6间全套房卧室',
        [I18N.EN]: 'Six en-suite bedrooms',
        [I18N.JP]: '全館6室のスイートベッドルーム'
    },
    'detail.arcadia.5.intro1.desc2': {
        [I18N.ZH]: '双层挑高客厅',
        [I18N.EN]: 'Double height living room',
        [I18N.JP]: 'ダブルハイトのリビングスペース'
    },
    'detail.arcadia.5.intro1.desc3': {
        [I18N.ZH]: '全屋地暖 双通道壁炉',
        [I18N.EN]: 'Full underfloor heating. Double-sided Fireplace',
        [I18N.JP]: '全館床暖房と二重通路の暖炉が完備され'
    },
    'detail.arcadia.5.intro1.desc4': {
        [I18N.ZH]: '独享整栋家外之家',
        [I18N.EN]: 'Your home away from home, for you only',
        [I18N.JP]: '非日常の寛ぎをお楽しみください'
    },
    'detail.arcadia.5.intro2.title': {
        [I18N.ZH]: '私享设施',
        [I18N.EN]: 'Private Facilities',
        [I18N.JP]: 'プライベート施設'
    },
    'detail.arcadia.5.intro2.desc1': {
        [I18N.ZH]: '专业级酒窖 窖藏名酒佳酿',
        [I18N.EN]: 'Pro cellar space. With a collection of fine spirits',
        [I18N.JP]: '高級ワイン用のポロワインセラーをご用意'
    },
    'detail.arcadia.5.intro2.desc2': {
        [I18N.ZH]: '温泉SPA房 开启舒缓之境',
        [I18N.EN]: 'Hot spring SPA. A paradise of relaxation',
        [I18N.JP]: '心身を解きほぐす心地よい温泉·スパルーム'
    },
    'detail.arcadia.5.intro2.desc3': {
        [I18N.ZH]: '雪具干燥室 纵享滑雪之旅',
        [I18N.EN]: 'Ski Drying Room. For your ultimate skiing experience',
        [I18N.JP]: 'スキー乾燥室でスキー旅をお手伝いします'
    },
    'detail.arcadia.5.intro2.desc4': {
        [I18N.ZH]: '私享健身房 时刻关注体调',
        [I18N.EN]: 'Fitness Room. Tracking your health all the time',
        [I18N.JP]: 'プライベートジムでいつでも体調を整えます'
    },
    // 'detail.arcadia.5.intro3.title': {
    //     [I18N.ZH]: '滑雪臻选',
    //     [I18N.EN]: '滑雪臻选',
    //     [I18N.JP]: '滑雪臻选'
    // },
    // 'detail.arcadia.5.intro3.desc1': {
    //     [I18N.ZH]: '滑雪用具干燥室',
    //     [I18N.EN]: '滑雪用具干燥室',
    //     [I18N.JP]: '滑雪用具干燥室'
    // },
    // 'detail.arcadia.5.intro3.desc2': {
    //     [I18N.ZH]: '纵享至臻滑雪之旅',
    //     [I18N.EN]: '纵享至臻滑雪之旅',
    //     [I18N.JP]: '纵享至臻滑雪之旅'
    // },

    // Arcadia P6
    'detail.arcadia.6.caption': {
        [I18N.ZH]: '季·转',
        [I18N.EN]: 'Seasons',
        [I18N.JP]: '季·転'
    },
    'detail.arcadia.6.intro1': {
        [I18N.ZH]: '冰雪渐融的时节',
        [I18N.EN]: 'When snow is thawing',
        [I18N.JP]: '雪と氷が解けてくる季節に'
    },
    'detail.arcadia.6.intro2': {
        [I18N.ZH]: '一探茂盛幽深的森林',
        [I18N.EN]: 'Explore the flourishing and deep forest',
        [I18N.JP]: '緑あふれる森への探検'
    },
    'detail.arcadia.6.intro3': {
        [I18N.ZH]: '踏车纵览山顶花田',
        [I18N.EN]: 'Ride to the flower field on the mountain top',
        [I18N.JP]: '丘の上の花畑での爽快なサイクリング'
    },
    'detail.arcadia.6.intro4': {
        [I18N.ZH]: '挥杆畅享高尔夫乐趣',
        [I18N.EN]: 'Or have fun in golfing',
        [I18N.JP]: 'リゾートゴルフなどのアクティビティを満喫できます'
    },
    'detail.arcadia.6.intro5': {
        [I18N.ZH]: '举目皆为羊蹄山麓自然至美',
        [I18N.EN]: 'All the natural beauty of Mount Yotei is in your sight',
        [I18N.JP]: '羊蹄山の麓の自然を存分にお楽しみください'
    },

    // Arcadia P7
    'detail.arcadia.7.address': {
        [I18N.ZH]: '地址：〒044-0089 日本国北海道虻田郡俱知安町二世谷比罗夫镇2条2丁目7番地18号',
        [I18N.EN]: 'Add: 7-18, 2-chome, 2-jo, Nisekohirafu, Kutchan-cho, Abuta-gun, Hokkaido 044-0089 Japan',
        [I18N.JP]: '住所: 〒044-0089 北海道虻田郡倶知安町ニセコひらふ2条2丁目7番地18号'
    },
    'detail.arcadia.7.tel': {
        [I18N.ZH]: '电话：+81 0136 55 7559',
        [I18N.EN]: 'Tel: +81 0136 55 7559',
        [I18N.JP]: '電話: +81 0136 55 7559'
    },
    'detail.arcadia.7.email': {
        [I18N.ZH]: '邮箱：info.arcadia@ryowhagroup.com',
        [I18N.EN]: 'E-mail: info.arcadia@ryowhagroup.com',
        [I18N.JP]: '電子メール: info.arcadia@ryowhagroup.com'
    },
    'detail.arcadia.7.intro1': {
        [I18N.ZH]: 'ARCADIA 位于北海道二世谷地区最富盛名的比罗夫镇',
        [I18N.EN]: 'ARCADIA is located at the renowned Hirafu Town in Niseko, Hokkaido',
        [I18N.JP]: '北海道ニセコ地区で最も有名なひらふに位置する ARCADIA'
    },
    'detail.arcadia.7.intro2': {
        [I18N.ZH]: '四季皆宜的度假圣地，距离札幌两小时车程',
        [I18N.EN]: 'A holiday resort for all seasons with 2-hour drive to Sapporo, Hokkaido',
        [I18N.JP]: '札幌から車で2時間、四季折々の休暇が楽しめるリゾート地'
    },
    'detail.arcadia.7.intro3': {
        [I18N.ZH]: '日本最美的粉雪在此降临，毗邻羊蹄山无限风光',
        [I18N.EN]: 'Covered with the most beautiful powder snow, adjacent to the infinitely beautiful Mount Yotei',
        [I18N.JP]: '日本一美しいパウダースノーがここに降り積もり、羊蹄山の雄大な絶景をご堪能いただきます'
    },
    'detail.arcadia.7.intro4': {
        [I18N.ZH]: '无愧于全球滑雪爱好者的天堂',
        [I18N.EN]: 'A well-deserved paradise for skiing lovers worldwide',
        [I18N.JP]: '正に世界中のスキー愛好家にとっての聖地とも称される'
    },
    // 'detail.arcadia.7.intro5': {
    //     [I18N.ZH]: '伴着远方的羊蹄山风光，享仅属于此地的身心疗愈',
    //     [I18N.EN]: '伴着远方的羊蹄山风光，享仅属于此地的身心疗愈',
    //     [I18N.JP]: '伴着远方的羊蹄山风光，享仅属于此地的身心疗愈'
    // },
    'detail.arcadia.7.mapaddr': {
        [I18N.ZH]: '二世谷，比罗夫镇',
        [I18N.EN]: 'Nisekohirafu',
        [I18N.JP]: 'ニセコひらふ'
    },

    // Kanrinkyo P2
    'detail.kanrinkyo.2.intro1': {
        [I18N.ZH]: '面临银白色羊蹄山麓',
        [I18N.EN]: 'Facing the silvery white Mount Yotei',
        [I18N.JP]: '白銀の羊蹄山の麓に直面する',
    },
    'detail.kanrinkyo.2.intro2': {
        [I18N.ZH]: '隐入静怡之地',
        [I18N.EN]: 'nestled in tranquility',
        [I18N.JP]: '静かなにたたずむ場所',
    },
    'detail.kanrinkyo.2.intro3': {
        [I18N.ZH]: '目光投洒于天地间',
        [I18N.EN]: 'Set your vision to the heaven and the earth',
        [I18N.JP]: '大自然の幻想的な景色に癒されて',
    },
    'detail.kanrinkyo.2.intro4': {
        [I18N.ZH]: '忘却尘世的繁陈杂念',
        [I18N.EN]: 'Discard distractions in your mundane life',
        [I18N.JP]: '世の中の雑念を忘れる',
    },
    'detail.kanrinkyo.2.intro5': {
        [I18N.ZH]: '微醺灯火之中',
        [I18N.EN]: 'Intoxicated under the vibrant lights ',
        [I18N.JP]: '非日常感を醸し出せるライトの中で',
    },
    'detail.kanrinkyo.2.intro6': {
        [I18N.ZH]: '沐浴北国静谧夜色',
        [I18N.EN]: 'Immerse in the tranquil night sky of North Japan',
        [I18N.JP]: '北国の静寂な夜の色を浴びながら',
    },
    'detail.kanrinkyo.2.intro7': {
        [I18N.ZH]: '回归内心的平和',
        [I18N.EN]: 'And find your inner peace again',
        [I18N.JP]: '心安らぐ気分に浸れる',
    },

    // Kanrinkyo P3
    'detail.kanrinkyo.3.caption': {
        [I18N.ZH]: '境·界',
        [I18N.EN]: 'Locale',
        [I18N.JP]: '境·界',
    },
    'detail.kanrinkyo.3.intro1': {
        [I18N.ZH]: '日本建筑大师中山真琴打造',
        [I18N.EN]: 'Designed by Japanese master architect Nakayama Makoto',
        [I18N.JP]: '日本建築巨匠、中山真琴が手掛けた',
    },
    'detail.kanrinkyo.3.intro2': {
        [I18N.ZH]: '遁入自然的避世之所',
        [I18N.EN]: 'A paradise nestled in nature',
        [I18N.JP]: '大自然に囲まれた静かな隠れ宿',
    },
    'detail.kanrinkyo.3.intro3': {
        [I18N.ZH]: '坐落于凛雪皑皑的林间',
        [I18N.EN]: 'Located in the snowy forest',
        [I18N.JP]: '雪に覆われた森の中に位置し',
    },
    'detail.kanrinkyo.3.intro4': {
        [I18N.ZH]: '面向羊蹄山麓 依山而建',
        [I18N.EN]: 'Facing and adjacent to Mount Yotei',
        [I18N.JP]: '壮大な羊蹄山を望む麓に佇む宿',
    },
    'detail.kanrinkyo.3.intro5': {
        [I18N.ZH]: '天高云逸 白峰峥嵘',
        [I18N.EN]: 'Drifting clouds in the high sky\nMajestic white peak standing in the ground',
        [I18N.JP]: '空は高く澄んで、白銀の連峰はそびえている',
    },
    'detail.kanrinkyo.3.intro6': {
        [I18N.ZH]: '远离世间的尘嚣',
        [I18N.EN]: 'Leaving the hustle behind',
        [I18N.JP]: '都会の喧騒から離れて',
    },
    'detail.kanrinkyo.3.intro7': {
        [I18N.ZH]: '体味与自然相融的幽玄心境',
        [I18N.EN]: 'Embrace the nature and the serenity in mind',
        [I18N.JP]: '自然と調和され五感が心地よく癒される',
    },

    // Kanrinkyo P4
    'detail.kanrinkyo.4.caption': {
        [I18N.ZH]: '知·行',
        [I18N.EN]: 'Activity',
        [I18N.JP]: '知·行',
    },
    'detail.kanrinkyo.4.img1.caption': {
        [I18N.ZH]: '全天专属管家',
        [I18N.EN]: 'All-day exclusive housekeeper',
        [I18N.JP]: '24時間専属バトラーサービス',
    },
    'detail.kanrinkyo.4.img1.desc': {
        [I18N.ZH]: '入微间 尽享怡然舒心',
        [I18N.EN]: 'Attention to details, just relax and enjoy',
        [I18N.JP]: '滞在中の時間を快適にするお手伝いします',
    },
    'detail.kanrinkyo.4.img2.caption': {
        [I18N.ZH]: '私享专车',
        [I18N.EN]: 'Private Chauffeur',
        [I18N.JP]: '専用車',
    },
    'detail.kanrinkyo.4.img2.desc': {
        [I18N.ZH]: '专属司机 探秘至美二世谷',
        [I18N.EN]: 'Explore the breathtaking Niseko\nWith your exclusive chauffeur',
        [I18N.JP]: '専属ドライバーでニセコエリアを存分に探索いただけます',
    },
    'detail.kanrinkyo.4.img3.caption': {
        [I18N.ZH]: '私享主厨',
        [I18N.EN]: 'Private Chef',
        [I18N.JP]: 'プライベートシェフ',
    },
    'detail.kanrinkyo.4.img3.desc': {
        [I18N.ZH]: '珍稀食材 享味高定晚宴',
        [I18N.EN]: 'High-end gastronomy with supreme delicacies',
        [I18N.JP]: '最高の食材を用いた極上なディナーコースをお楽しみください',
    },

    // Kanrinkyo P5
    'detail.kanrinkyo.5.caption': {
        [I18N.ZH]: '居·所',
        [I18N.EN]: 'Residence',
        [I18N.JP]: '居·所',
    },
    'detail.kanrinkyo.5.intro1.title': {
        [I18N.ZH]: '独立三层宅邸',
        [I18N.EN]: 'Detached three-floor villa',
        [I18N.JP]: '3階建ての独立なリゾートハウス',
    },
    'detail.kanrinkyo.5.intro1.desc1': {
        [I18N.ZH]: '宽阔尺度的舒适体验',
        [I18N.EN]: 'A spacious living experience',
        [I18N.JP]: '広々とした快適なスペース',
    },
    'detail.kanrinkyo.5.intro1.desc2': {
        [I18N.ZH]: '双层挑高客厅',
        [I18N.EN]: 'Double height living room',
        [I18N.JP]: 'ダブルハイト吹き抜けのリビングルーム',
    },
    'detail.kanrinkyo.5.intro1.desc3': {
        [I18N.ZH]: '全屋地暖 双通道壁炉',
        [I18N.EN]: 'Full underfloor heating\nDouble-sided fireplace',
        [I18N.JP]: '全館床暖房と二重通路の暖炉が完備',
    },
    'detail.kanrinkyo.5.intro1.desc4': {
        [I18N.ZH]: '私人影院 尽享视觉盛宴',
        [I18N.EN]: 'A visually impactful home cinema experience',
        [I18N.JP]: 'プライベートシネマの大迫力で映像体験を味わえる',
    },
    'detail.kanrinkyo.5.intro2.title': {
        [I18N.ZH]: '私享设施',
        [I18N.EN]: 'Private Facilities',
        [I18N.JP]: 'プライベート施設',
    },
    'detail.kanrinkyo.5.intro2.desc1': {
        [I18N.ZH]: '户外按摩浴缸 体味合一境界',
        [I18N.EN]: 'Outdoor jacuzzi. Your body and nature come to one',
        [I18N.JP]: '屋外ジャグジーバスで体のととのうを体感',
    },
    'detail.kanrinkyo.5.intro2.desc2': {
        [I18N.ZH]: '温泉SPA房 开启舒缓之境',
        [I18N.EN]: 'Hot spring SPA. A paradise of relaxation',
        [I18N.JP]: '心身を解きほぐす心地よい温泉・スパルーム',
    },
    'detail.kanrinkyo.5.intro2.desc3': {
        [I18N.ZH]: '专属25米超大泳池 时刻关注体调',
        [I18N.EN]: 'Exclusive 25 meters long swimming pool. Tracking your health all the time',
        [I18N.JP]: '専用25メートルプールでいつでも体調を整えます',
    },
    'detail.kanrinkyo.5.intro2.desc4': {
        [I18N.ZH]: '专业级酒窖 窖藏名酒佳酿',
        [I18N.EN]: 'Pro cellar space. With a collection of fine spirits',
        [I18N.JP]: '高級ワイン用のプロ級ワインセラーをご用意',
    },
    'detail.kanrinkyo.5.intro2.desc5': {
        [I18N.ZH]: '雪具干燥室 纵享滑雪之旅',
        [I18N.EN]: 'Ski Drying Room. For your ultimate skiing experience',
        [I18N.JP]: 'スキー乾燥室でスキー旅をお手伝いします',
    },

    // 'detail.kanrinkyo.5.intro3.title': {
    //     [I18N.ZH]: '滑雪臻选',
    //     [I18N.EN]: '滑雪臻选',
    //     [I18N.JP]: '滑雪臻选',
    // },
    // 'detail.kanrinkyo.5.intro3.desc1': {
    //     [I18N.ZH]: '滑雪用具干燥室',
    //     [I18N.EN]: '滑雪用具干燥室',
    //     [I18N.JP]: '滑雪用具干燥室',
    // },
    // 'detail.kanrinkyo.5.intro3.desc2': {
    //     [I18N.ZH]: '纵享至臻滑雪之旅',
    //     [I18N.EN]: '纵享至臻滑雪之旅',
    //     [I18N.JP]: '纵享至臻滑雪之旅',
    // },

    // Kanrinkyo P6
    'detail.kanrinkyo.7.address': {
        [I18N.ZH]: '地址：〒044-0080 日本国北海道虻田郡倶知安町二世谷比罗夫镇1条1丁目133-13, 133-40, 137-9',
        [I18N.EN]: 'Add: 133-13, 133-40, 137-9, 1-chome, 1-jo, Nisekohirafu, Kutchan-cho, Abuta-gun, Hokkaido 044-0080 Japan',
        [I18N.JP]: '住所: 〒044-0080 北海道虻田郡倶知安町ニセコひらふ1条1丁目133-13, 133-40, 137-9'
    },
    'detail.kanrinkyo.7.tel': {
        [I18N.ZH]: '电话：+81 136 55 8917',
        [I18N.EN]: 'Tel: +81 136 55 8917',
        [I18N.JP]: '電話: +81 136 55 8917'
    },
    'detail.kanrinkyo.7.email': {
        [I18N.ZH]: '邮箱：info@ryowhagroup.com',
        [I18N.EN]: 'E-mail: info@ryowhagroup.com',
        [I18N.JP]: '電子メール: info@ryowhagroup.com'
    },
    'detail.kanrinkyo.7.intro1': {
        [I18N.ZH]: 'KANRINKYO 位于北海道二世谷地区最富盛名的比罗夫镇',
        [I18N.EN]: 'KANRINKYO is located at the renowned Hirafu Town in Niseko, Hokkaido',
        [I18N.JP]: '北海道ニセコ地区で最も有名なひらふに位置する KANRINKYO'
    },
    'detail.kanrinkyo.7.intro2': {
        [I18N.ZH]: '四季皆宜的度假圣地，距离札幌两小时车程',
        [I18N.EN]: 'A holiday resort for all seasons with 2-hour drive to Sapporo, Hokkaido',
        [I18N.JP]: '札幌から車で2時間、四季折々の休暇が楽しめるリゾート地'
    },
    'detail.kanrinkyo.7.intro3': {
        [I18N.ZH]: '日本最美的粉雪在此降临，毗邻羊蹄山无限风光',
        [I18N.EN]: 'Covered with the most beautiful powder snow, adjacent to the infinitely beautiful Mount Yotei',
        [I18N.JP]: '日本一美しいパウダースノーがここに降り積もり、羊蹄山の雄大な絶景をご堪能いただきます'
    },
    'detail.kanrinkyo.7.intro4': {
        [I18N.ZH]: '无愧于全球滑雪爱好者的天堂',
        [I18N.EN]: 'A well-deserved paradise for skiing lovers worldwide',
        [I18N.JP]: '正に世界中のスキー愛好家にとっての聖地とも称される'
    },

    // Yukoro P2
    'detail.yukoro.2.intro1': {
        [I18N.ZH]: '传承百年的天然温泉',
        [I18N.EN]: 'A natural onsen of centuries',
        [I18N.JP]: '百年の間で受け継がれる天然温泉'
    },
    'detail.yukoro.2.intro2': {
        [I18N.ZH]: '日本建筑大师中山真琴倾力巨献',
        [I18N.EN]: 'Presented by Japanese master architect Nakayama Makoto',
        [I18N.JP]: '日本建築巨匠 中山眞琴氏が手がけた傑作 '
    },
    'detail.yukoro.2.intro2.mobile': {
        [I18N.ZH]: '日本建筑大师中山真琴倾力巨献',
        [I18N.EN]: 'Presented by Japanese master architect\nNakayama Makoto',
        [I18N.JP]: '日本建築巨匠 中山眞琴氏が手がけた傑作 '
    },
    'detail.yukoro.2.intro3': {
        [I18N.ZH]: '坐落于粉雪天堂二世谷核心比罗夫镇',
        [I18N.EN]: 'Located at Hirafu Town, the core of Niseko, the paradise of powder snow',
        [I18N.JP]: 'パウダースノー聖地ニセコの中心ひらふに位置する'
    },
    'detail.yukoro.2.intro4': {
        [I18N.ZH]: '浸泡于暖泉之中',
        [I18N.EN]: 'Dip into the hot spring',
        [I18N.JP]: '心地よい湯に浸かりながら'
    },
    'detail.yukoro.2.intro5': {
        [I18N.ZH]: '或耳畔缭绕夏日虫鸣',
        [I18N.EN]: 'Listen to the chirping crickets in summer ',
        [I18N.JP]: '夏は虫のさえずりが耳に響く'
    },
    'detail.yukoro.2.intro6': {
        [I18N.ZH]: '或静观飘落的飞雪',
        [I18N.EN]: 'or watch the falling snow in winter',
        [I18N.JP]: '冬は一面雪化粧'
    },
    'detail.yukoro.2.intro7': {
        [I18N.ZH]: '远眺羊蹄山的雄阔壮美',
        [I18N.EN]: 'Overlook the magnificent Mount Yotei',
        [I18N.JP]: '羊蹄山の雄大な景色を望むこともできる'
    },
    'detail.yukoro.2.intro8': {
        [I18N.ZH]: '热气升腾 暖意相融',
        [I18N.EN]: 'Let the steam rise to keep you warm',
        [I18N.JP]: '漂う湯気の中に、心身ともにほっこり温まる'
    },
    
    // Yukoro P3
    'detail.yukoro.3.caption': {
        [I18N.ZH]: '传·承',
        [I18N.EN]: 'Legacy',
        [I18N.JP]: '伝·承'
    },
    'detail.yukoro.3.intro1': {
        [I18N.ZH]: '传承百年前人经营',
        [I18N.EN]: 'A resort operated for centuries',
        [I18N.JP]: '百年前から受け継がれ'
    },
    'detail.yukoro.3.intro2': {
        [I18N.ZH]: '延续亘古文脉',
        [I18N.EN]: 'A legacy of everlasting culture',
        [I18N.JP]: '古くからの伝承が誇る宿'
    },
    'detail.yukoro.3.intro3': {
        [I18N.ZH]: '守护专为暖意而生的休憩之所',
        [I18N.EN]: 'to keep people warm and relaxed',
        [I18N.JP]: '大自然のぬくもりが楽しめるくつろぎの場を守る'
    },
    'detail.yukoro.3.intro4': {
        [I18N.ZH]: '浸润其中',
        [I18N.EN]: 'Immerse',
        [I18N.JP]: 'お湯につかりながら'
    },
    'detail.yukoro.3.intro5': {
        [I18N.ZH]: '独属此地的体贴暖意',
        [I18N.EN]: 'In the warmth that is exclusive',
        [I18N.JP]: 'この地が醸し出す癒しをご堪能'
    },
    'detail.yukoro.3.intro6': {
        [I18N.ZH]: '润物无声地绵延传承',
        [I18N.EN]: 'and a legacy passing on in subtlety',
        [I18N.JP]: 'この温もりを静かに受け継いでいく'
    },
    // 'detail.yukoro.3.intro7': {
    //     [I18N.ZH]: '独属于此地的非凡意义',
    //     [I18N.EN]: '独属于此地的非凡意义',
    //     [I18N.JP]: '独属于此地的非凡意义'
    // },
    // 'detail.yukoro.3.intro8': {
    //     [I18N.ZH]: '将永远地传承下去',
    //     [I18N.EN]: '将永远地传承下去',
    //     [I18N.JP]: '将永远地传承下去'
    // },

    // Yukoro P4
    'detail.yukoro.4.caption': {
        [I18N.ZH]: '暖·意',
        [I18N.EN]: 'Warmth',
        [I18N.JP]: '暖·意'
    },
    'detail.yukoro.4.intro1': {
        [I18N.ZH]: 'YUKORO 浅绿色的汤泉',
        [I18N.EN]: 'YUKORO, the emerald-colored hot spring',
        [I18N.JP]: 'YUKORO 薄緑色のお湯'
    },
    'detail.yukoro.4.intro2': {
        [I18N.ZH]: '天然 66.4℃ PH值: 6.8',
        [I18N.EN]: 'with a natural 66.4℃ and a PH of 6.8',
        [I18N.JP]: '天然 66.4℃ の温度と 6.8 の PH値'
    },
    'detail.yukoro.4.intro3': {
        [I18N.ZH]: '富含碳酸氢钠盐',
        [I18N.EN]: 'Rich in sodium bicarbonate salt',
        [I18N.JP]: 'ナトリウム炭酸水素塩豊富な湯'
    },
    'detail.yukoro.4.intro4': {
        [I18N.ZH]: '焕美肌肤 葆水湿润',
        [I18N.EN]: 'To revitalize and moisturize your skin',
        [I18N.JP]: '肌がツルツルでなめらかになる美肌効果'
    },
    'detail.yukoro.4.intro5': {
        [I18N.ZH]: '亦可缓解肌肉痛 神经痛',
        [I18N.EN]: 'and relieve your muscular or nervous sore',
        [I18N.JP]: '筋肉痛や神経痛にも効果的'
    },
    'detail.yukoro.4.intro6': {
        [I18N.ZH]: '纵使肌肤处于敏感期或恢复期',
        [I18N.EN]: 'Ideal for sensitive skin or recovering skin',
        [I18N.JP]: '敏感肌や回復期な方でも'
    },
    'detail.yukoro.4.intro7': {
        [I18N.ZH]: '也能放心尽享其中',
        [I18N.EN]: 'Relax and enjoy without hassle',
        [I18N.JP]: '安心して入浴することができます'
    },

    // Yukoro P5
    'detail.yukoro.5.caption': {
        [I18N.ZH]: '悠·行',
        [I18N.EN]: 'Travel',
        [I18N.JP]: '悠·行'
    },
    'detail.yukoro.5.intro1': {
        [I18N.ZH]: '享受温泉暖意之余',
        [I18N.EN]: 'After the hot spring',
        [I18N.JP]: '温泉で身体を温めてくれるほかに'
    },
    'detail.yukoro.5.intro2': {
        [I18N.ZH]: '亦可前往专属餐厅',
        [I18N.EN]: 'Visit our exclusive restaurant',
        [I18N.JP]: '専属レストランへ'
    },
    'detail.yukoro.5.intro3': {
        [I18N.ZH]: '赏味纯正的日式烧鸟',
        [I18N.EN]: 'And taste authentic Japanese yakitori',
        [I18N.JP]: 'こだわりの焼き鳥料理をお楽しみください'
    },
    'detail.yukoro.5.intro4': {
        [I18N.ZH]: '温泉之外',
        [I18N.EN]: 'Besides hot spring',
        [I18N.JP]: '温泉のほか'
    },
    'detail.yukoro.5.intro5': {
        [I18N.ZH]: '乘坐缆车前往羊蹄山顶',
        [I18N.EN]: 'Travel to the top of Mount Yotei',
        [I18N.JP]: 'ゴンドラで羊蹄山頂へ登った先'
    },
    'detail.yukoro.5.intro6': {
        [I18N.ZH]: '一览粉雪胜地',
        [I18N.EN]: 'And visit the paradise of power snow',
        [I18N.JP]: 'パウダースノーの絶景が眼下に広がります'
    },
    'detail.yukoro.5.intro7': {
        [I18N.ZH]: '或是冰雪渐融的时节',
        [I18N.EN]: 'When snow is thawing',
        [I18N.JP]: '雪が溶け始めた季節に'
    },
    'detail.yukoro.5.intro8': {
        [I18N.ZH]: '迈步山顶花田',
        [I18N.EN]: 'Stroll to the flower field on the mountain top',
        [I18N.JP]: '丘の上の花畑での散策や'
    },
    'detail.yukoro.5.intro9': {
        [I18N.ZH]: '挥杆畅享高尔夫乐趣',
        [I18N.EN]: 'Or have fun in golfing',
        [I18N.JP]: 'リゾートゴルフなどのアクティビティをご堪能いただきます'
    },
    
    // Yukoro P6
    'detail.yukoro.7.address': {
        [I18N.ZH]: '〒044-0089 日本国北海道虻田郡倶知安町二世谷比罗夫镇2条1丁目163-53, 163-61, 163-158',
        [I18N.EN]: '163-53, 163-61, 163-158, 1-chome, 2-jo, Nisekohirafu, Kutchan-cho, Abuta-gun, Hokkaido 044-0089 Japan',
        [I18N.JP]: '〒044-0089 北海道虻田郡倶知安町ニセコひらふ2条1丁目163-53, 163-61, 163-158'
    },
    'detail.yukoro.7.tel': {
        [I18N.ZH]: '电话：+81 136 55 8917',
        [I18N.EN]: 'Tel: +81 136 55 8917',
        [I18N.JP]: '電話: +81 136 55 8917'
    },
    'detail.yukoro.7.email': {
        [I18N.ZH]: '邮箱：info@ryowhagroup.com',
        [I18N.EN]: 'E-mail: info@ryowhagroup.com',
        [I18N.JP]: '電子メール: info@ryowhagroup.com'
    },
    'detail.yukoro.7.intro1': {
        [I18N.ZH]: 'YUKORO 位于北海道二世谷地区最富盛名的比罗夫镇',
        [I18N.EN]: 'YUKORO is located at the renowned Hirafu Town in Niseko, Hokkaido',
        [I18N.JP]: '北海道ニセコ地区で最も有名なひらふに位置する YUKORO'
    },
    'detail.yukoro.7.intro2': {
        [I18N.ZH]: '四季皆宜的度假圣地，距离札幌两小时车程',
        [I18N.EN]: 'A holiday resort for all seasons with 2-hour drive to Sapporo, Hokkaido',
        [I18N.JP]: '札幌から車で2時間、四季折々の休暇が楽しめるリゾート地'
    },
    'detail.yukoro.7.intro3': {
        [I18N.ZH]: '日本最美的粉雪在此降临，毗邻羊蹄山无限风光',
        [I18N.EN]: 'Covered with the most beautiful powder snow, adjacent to the infinitely beautiful Mount Yotei',
        [I18N.JP]: '日本一美しいパウダースノーがここに降り積もり、羊蹄山の雄大な絶景をご堪能いただきます'
    },
    'detail.yukoro.7.intro4': {
        [I18N.ZH]: '无愧于全球滑雪爱好者的天堂',
        [I18N.EN]: 'A well-deserved paradise for skiing lovers worldwide',
        [I18N.JP]: '正に世界中のスキー愛好家にとっての聖地とも称される'
    },
    // 'detail.yukoro.7.intro5': {
    //     [I18N.ZH]: '伴着远方的羊蹄山风光，享仅属于此地的身心疗愈',
    //     [I18N.EN]: '伴着远方的羊蹄山风光，享仅属于此地的身心疗愈',
    //     [I18N.JP]: '伴着远方的羊蹄山风光，享仅属于此地的身心疗愈'
    // }
}