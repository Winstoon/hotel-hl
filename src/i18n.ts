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
        [I18N.EN]: '打开微信扫描二维码，关注我们',
        [I18N.JP]: '打开微信扫描二维码，关注我们'
    },
    'explore': {
        [I18N.ZH]: '探索',
        [I18N.EN]: 'Exploration',
        [I18N.JP]: '探索',
    },
    'reserve': {
        [I18N.ZH]: '预订',
        [I18N.EN]: 'Reserve',
        [I18N.JP]: '予約',
    },
    'reservebtn': {
        [I18N.ZH]: '预订',
        [I18N.EN]: 'Reserve',
        [I18N.JP]: '予約',
    },
    'comingbtn': {
        [I18N.ZH]: '即将到来',
        [I18N.EN]: 'Coming Soon',
        [I18N.JP]: 'Coming Soon',
    },
    'detail': {
        [I18N.ZH]: '前往',
        [I18N.EN]: 'Detail',
        [I18N.JP]: '詳細',
    },
    'contactus': {
        [I18N.ZH]: 'CONTACT US',
        [I18N.EN]: 'CONTACT US',
        [I18N.JP]: 'CONTACT US',
    },
// ------------------------------ contact ------------------------------
    'contact.caption': {
        [I18N.ZH]: '联系我们',
        [I18N.EN]: 'CONTACT US',
        [I18N.JP]: 'お問い合わせ',
    },
    'contact.address': {
        [I18N.ZH]: '地址：〒044-0036 日本国北海道虻田郡倶知安町南 6 条西 1 丁目 5 番地 1',
        [I18N.EN]: '地址：〒044-0036 日本国北海道虻田郡倶知安町南 6 条西 1 丁目 5 番地 1',
        [I18N.JP]: '地址：〒044-0036 日本国北海道虻田郡倶知安町南 6 条西 1 丁目 5 番地 1',
    },
    'contact.phone': {
        [I18N.ZH]: '电话：+81 136 55 8917',
        [I18N.EN]: '电话：+81 136 55 8917',
        [I18N.JP]: '电话：+81 136 55 8917',
    },
    'contact.fax': {
        [I18N.ZH]: '传真：+81 136 55 8927',
        [I18N.EN]: '传真：+81 136 55 8927',
        [I18N.JP]: '传真：+81 136 55 8927'
    },
    'contact.email': {
        [I18N.ZH]: '邮箱：',
        [I18N.EN]: '邮箱：',
        [I18N.JP]: '邮箱：'
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
        [I18N.EN]: 'MUAN 京都 梦庵',
        [I18N.JP]: 'MUAN 京都 梦庵',
    },
    'muan.title.firstname': {
        [I18N.ZH]: 'MUAN',
        [I18N.EN]: 'MUAN',
        [I18N.JP]: 'MUAN',
    },
    'muan.title.lastname': {
        [I18N.ZH]: '京都梦庵',
        [I18N.EN]: '京都梦庵',
        [I18N.JP]: '京都梦庵',
    },
    'muan.desc1': {
        [I18N.ZH]: '石塀幽径 悠然居所',
        [I18N.EN]: '石塀幽径 悠然居所',
        [I18N.JP]: '石塀幽径 悠然居所',
    },
    'muan.desc2': {
        [I18N.ZH]: '纤尘不染中开启心灵对话',
        [I18N.EN]: '纤尘不染中开启心灵对话',
        [I18N.JP]: '纤尘不染中开启心灵对话',
    },

    // 二世谷雪屋
    'arcadia.title': {
        [I18N.ZH]: 'ARCADIA 二世谷 雪屋',
        [I18N.EN]: 'ARCADIA 二世谷 雪屋',
        [I18N.JP]: 'ARCADIA 二世谷 雪屋',
    },
    'arcadia.title.firstname': {
        [I18N.ZH]: 'ARCADIA',
        [I18N.EN]: 'ARCADIA',
        [I18N.JP]: 'ARCADIA',
    },
    'arcadia.title.lastname': {
        [I18N.ZH]: '二世谷雪屋',
        [I18N.EN]: '二世谷雪屋',
        [I18N.JP]: '二世谷雪屋',
    },
    'arcadia.desc1': {
        [I18N.ZH]: '滑雪盛揽 银白之梦',
        [I18N.EN]: '滑雪盛揽 银白之梦',
        [I18N.JP]: '滑雪盛揽 银白之梦',
    },
    'arcadia.desc2': {
        [I18N.ZH]: '绵延叠嶂中探寻羊蹄山麓',
        [I18N.EN]: '绵延叠嶂中探寻羊蹄山麓',
        [I18N.JP]: '绵延叠嶂中探寻羊蹄山麓',
    },

    // 雪屋閑林居
    'kanrinkyo.title': {
        [I18N.ZH]: 'KANRINKYO 雪屋 閑林居',
        [I18N.EN]: 'KANRINKYO 雪屋 閑林居',
        [I18N.JP]: 'KANRINKYO 雪屋 閑林居',
    },
    'kanrinkyo.title.firstname': {
        [I18N.ZH]: 'KANRINKYO',
        [I18N.EN]: 'KANRINKYO',
        [I18N.JP]: 'KANRINKYO',
    },
    'kanrinkyo.title.lastname': {
        [I18N.ZH]: '雪屋閑林居',
        [I18N.EN]: '雪屋閑林居',
        [I18N.JP]: '雪屋閑林居',
    },
    'kanrinkyo.desc1': {
        [I18N.ZH]: '閑庭漫步 踏遍清心',
        [I18N.EN]: '閑庭漫步 踏遍清心',
        [I18N.JP]: '閑庭漫步 踏遍清心',
    },
    'kanrinkyo.desc2': {
        [I18N.ZH]: '静怡侘寂中品味风雅美学',
        [I18N.EN]: '静怡侘寂中品味风雅美学',
        [I18N.JP]: '静怡侘寂中品味风雅美学',
    },

    // 二世谷 温泉
    'yukoro.title': {
        [I18N.ZH]: 'YUKORO 二世谷 温泉',
        [I18N.EN]: 'YUKORO 二世谷 温泉',
        [I18N.JP]: 'YUKORO 二世谷 温泉',
    },
    'yukoro.title.firstname': {
        [I18N.ZH]: 'YUKORO',
        [I18N.EN]: 'YUKORO',
        [I18N.JP]: 'YUKORO',
    },
    'yukoro.title.lastname': {
        [I18N.ZH]: '二世谷温泉',
        [I18N.EN]: '二世谷温泉',
        [I18N.JP]: '二世谷温泉',
    },
    'yukoro.desc1': {
        [I18N.ZH]: '暖意相传 尘埃涤荡',
        [I18N.EN]: '暖意相传 尘埃涤荡',
        [I18N.JP]: '暖意相传 尘埃涤荡',
    },
    'yukoro.desc2': {
        [I18N.ZH]: '惬意舒缓中体悟亘古文脉',
        [I18N.EN]: '惬意舒缓中体悟亘古文脉',
        [I18N.JP]: '惬意舒缓中体悟亘古文脉',
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
        [I18N.JP]: 'COMING SOON',
    },
    'newland.desc1': {
        [I18N.ZH]: ' 举目翘盼 计日呈现',
        [I18N.EN]: ' 举目翘盼 计日呈现',
        [I18N.JP]: ' 举目翘盼 计日呈现',
    },
    'newland.desc2': {
        [I18N.ZH]: '隈研吾的美胜巨献',
        [I18N.EN]: '隈研吾的美胜巨献',
        [I18N.JP]: '隈研吾的美胜巨献',
    },

    'home.2.intro1': {
        [I18N.ZH]: '叹为观止的盛景',
        [I18N.EN]: '叹为观止的盛景',
        [I18N.JP]: '叹为观止的盛景',
    },
    'home.2.intro2': {
        [I18N.ZH]: '动人心魄的美学',
        [I18N.EN]: '动人心魄的美学',
        [I18N.JP]: '动人心魄的美学',
    },
    'home.2.intro3': {
        [I18N.ZH]: '奢怡精微的体验',
        [I18N.EN]: '奢怡精微的体验',
        [I18N.JP]: '奢怡精微的体验',
    },
    'home.2.intro4.1': {
        [I18N.ZH]: '稜',
        [I18N.EN]: '稜',
        [I18N.JP]: '稜',
    },
    'home.2.intro4.2': {
        [I18N.ZH]: '即两者交织相合',
        [I18N.EN]: '即两者交织相合',
        [I18N.JP]: '即两者交织相合',
    },
    'home.2.intro5': {
        [I18N.ZH]: '静依稜和',
        [I18N.EN]: '静依稜和',
        [I18N.JP]: '静依稜和',
    },
    'home.2.intro6': {
        [I18N.ZH]: '一瞥一景之间',
        [I18N.EN]: '一瞥一景之间',
        [I18N.JP]: '一瞥一景之间',
    },
    'home.2.intro7.1': {
        [I18N.ZH]: '自然',
        [I18N.EN]: '自然',
        [I18N.JP]: '自然',
    },
    'home.2.intro7.2': {
        [I18N.ZH]: '美学',
        [I18N.EN]: '美学',
        [I18N.JP]: '美学',
    },
    'home.2.intro7.3': {
        [I18N.ZH]: '彼此',
        [I18N.EN]: '彼此',
        [I18N.JP]: '彼此',
    },
    // 'home.2.intro7.4': {
    //     [I18N.ZH]: '我',
    //     [I18N.EN]: '我',
    //     [I18N.JP]: '我',
    // },
    'home.2.intro8': {
        [I18N.ZH]: '遥相应和于咫尺之间',
        [I18N.EN]: '遥相应和于咫尺之间',
        [I18N.JP]: '遥相应和于咫尺之间',
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

    'home.3.tab1': {
        [I18N.ZH]: '森罗景致',
        [I18N.EN]: '森罗景致',
        [I18N.JP]: '森罗景致',
    },
    'home.3.tab1.desc1': {
        [I18N.ZH]: '于每一处驻地',
        [I18N.EN]: '于每一处驻地',
        [I18N.JP]: '于每一处驻地',
    },
    'home.3.tab1.desc2': {
        [I18N.ZH]: '体味自然之美伦美幻',
        [I18N.EN]: '体味自然之美伦美幻',
        [I18N.JP]: '体味自然之美伦美幻',
    },

    'home.3.tab2': {
        [I18N.ZH]: '动人美学',
        [I18N.EN]: '动人美学',
        [I18N.JP]: '动人美学',
    },
    'home.3.tab2.desc1': {
        [I18N.ZH]: '人文 艺术 美学',
        [I18N.EN]: '人文 艺术 美学',
        [I18N.JP]: '人文 艺术 美学',
    },
    'home.3.tab2.desc2': {
        [I18N.ZH]: '浸润在每一个角落',
        [I18N.EN]: '浸润在每一个角落',
        [I18N.JP]: '浸润在每一个角落',
    },

    'home.3.tab3': {
        [I18N.ZH]: '奢怡体验',
        [I18N.EN]: '奢怡体验',
        [I18N.JP]: '奢怡体验',
    },
    'home.3.tab3.desc1': {
        [I18N.ZH]: '精洽入微的服务',
        [I18N.EN]: '精洽入微的服务',
        [I18N.JP]: '精洽入微的服务',
    },
    'home.3.tab3.desc2': {
        [I18N.ZH]: '由身至心的怡然自在',
        [I18N.EN]: '由身至心的怡然自在',
        [I18N.JP]: '由身至心的怡然自在',
    },

    // 'home.ending': {
    //     [I18N.ZH]: '「 每个人都值得一次稜和 」',
    //     [I18N.EN]: '「 每个人都值得一次稜和 」',
    //     [I18N.JP]: '「 每个人都值得一次稜和 」',
    // },

// ------------------------------ detail ------------------------------
    'detail.muan.2.intro1': {
        [I18N.ZH]: '信步于悠然小径',
        [I18N.EN]: '信步于悠然小径',
        [I18N.JP]: '信步于悠然小径',
    },
    'detail.muan.2.intro2': {
        [I18N.ZH]: '隐入梦庵 体味京都风雅',
        [I18N.EN]: '隐入梦庵 体味京都风雅',
        [I18N.JP]: '隐入梦庵 体味京都风雅',
    },
    'detail.muan.2.intro3': {
        [I18N.ZH]: '透过窗棂',
        [I18N.EN]: '透过窗棂',
        [I18N.JP]: '透过窗棂',
    },
    'detail.muan.2.intro4': {
        [I18N.ZH]: '一睹古韵中文脉绵延',
        [I18N.EN]: '一睹古韵中文脉绵延',
        [I18N.JP]: '一睹古韵中文脉绵延',
    },
    'detail.muan.2.intro5': {
        [I18N.ZH]: '浓郁积蕴与惬意体验',
        [I18N.EN]: '浓郁积蕴与惬意体验',
        [I18N.JP]: '浓郁积蕴与惬意体验',
    },
    'detail.muan.2.intro6': {
        [I18N.ZH]: '在此交融',
        [I18N.EN]: '在此交融',
        [I18N.JP]: '在此交融',
    },
    'detail.muan.2.intro7': {
        [I18N.ZH]: '用心感受这座古都的内敛',
        [I18N.EN]: '用心感受这座古都的内敛',
        [I18N.JP]: '用心感受这座古都的内敛',
    },
    'detail.muan.2.intro8': {
        [I18N.ZH]: '赴一场灵与心的对话',
        [I18N.EN]: '赴一场灵与心的对话',
        [I18N.JP]: '赴一场灵与心的对话',
    },

    'detail.muan.3.caption': {
        [I18N.ZH]: '境·艺',
        [I18N.EN]: '境·艺',
        [I18N.JP]: '境·艺',
    },
    'detail.muan.3.intro1': {
        [I18N.ZH]: '梦庵坐落于石塀小路',
        [I18N.EN]: '梦庵坐落于石塀小路',
        [I18N.JP]: '梦庵坐落于石塀小路',
    },
    'detail.muan.3.intro2': {
        [I18N.ZH]: '比邻宁宁之道',
        [I18N.EN]: '比邻宁宁之道',
        [I18N.JP]: '比邻宁宁之道',
    },
    'detail.muan.3.intro3': {
        [I18N.ZH]: '静享京都千载古韵',
        [I18N.EN]: '静享京都千载古韵',
        [I18N.JP]: '静享京都千载古韵',
    },
    'detail.muan.3.intro4': {
        [I18N.ZH]: '兼具现代灵感升华',
        [I18N.EN]: '兼具现代灵感升华',
        [I18N.JP]: '兼具现代灵感升华',
    },
    'detail.muan.3.intro5': {
        [I18N.ZH]: '聆听千年风雅',
        [I18N.EN]: '聆听千年风雅',
        [I18N.JP]: '聆听千年风雅',
    },
    'detail.muan.3.intro6': {
        [I18N.ZH]: '刻写京都之旅的回忆',
        [I18N.EN]: '刻写京都之旅的回忆',
        [I18N.JP]: '刻写京都之旅的回忆',
    },

    'detail.muan.4.caption': {
        [I18N.ZH]: '知·行',
        [I18N.EN]: '知·行',
        [I18N.JP]: '知·行'
    },
    'detail.muan.4.img1.caption': {
        [I18N.ZH]: '一期一会',
        [I18N.EN]: '一期一会',
        [I18N.JP]: '一期一会'
    },
    'detail.muan.4.img1.desc': {
        [I18N.ZH]: '私享主厨 OMAKASE 每周一会',
        [I18N.EN]: '私享主厨 OMAKASE 每周一会',
        [I18N.JP]: '私享主厨 OMAKASE 每周一会'
    },
    'detail.muan.4.img2.caption': {
        [I18N.ZH]: '茶道品韵',
        [I18N.EN]: '茶道品韵',
        [I18N.JP]: '茶道品韵'
    },
    'detail.muan.4.img2.desc': {
        [I18N.ZH]: '品茗茶道 和敬清寂',
        [I18N.EN]: '品茗茶道 和敬清寂',
        [I18N.JP]: '品茗茶道 和敬清寂'
    },
    'detail.muan.4.img3.caption': {
        [I18N.ZH]: '京都艺伎',
        [I18N.EN]: '京都艺伎',
        [I18N.JP]: '京都艺伎'
    },
    'detail.muan.4.img3.desc': {
        [I18N.ZH]: '悬落飘逸 风月无边',
        [I18N.EN]: '悬落飘逸 风月无边',
        [I18N.JP]: '悬落飘逸 风月无边'
    },
    'detail.muan.4.img4.caption': {
        [I18N.ZH]: '静心禅修',
        [I18N.EN]: '静心禅修',
        [I18N.JP]: '静心禅修'
    },
    'detail.muan.4.img4.desc': {
        [I18N.ZH]: '超然物外 平静止水',
        [I18N.EN]: '超然物外 平静止水',
        [I18N.JP]: '超然物外 平静止水'
    },
    'detail.muan.4.img5.caption': {
        [I18N.ZH]: '徒步赏景',
        [I18N.EN]: '徒步赏景',
        [I18N.JP]: '徒步赏景'
    },
    'detail.muan.4.img5.desc': {
        [I18N.ZH]: '悠然徒步 感受京郊',
        [I18N.EN]: '悠然徒步 感受京郊',
        [I18N.JP]: '悠然徒步 感受京郊'
    },
    'detail.muan.4.img6.caption': {
        [I18N.ZH]: '专车旅程',
        [I18N.EN]: '专车旅程',
        [I18N.JP]: '专车旅程'
    },
    'detail.muan.4.img6.desc': {
        [I18N.ZH]: '专车接驳 探秘京都',
        [I18N.EN]: '专车接驳 探秘京都',
        [I18N.JP]: '专车接驳 探秘京都'
    },

    'detail.muan.5.caption': {
        [I18N.ZH]: '居·所',
        [I18N.EN]: '居·所',
        [I18N.JP]: '居·所'
    },
    'detail.muan.5.intro1.title': {
        [I18N.ZH]: '传统古韵',
        [I18N.EN]: '传统古韵',
        [I18N.JP]: '传统古韵'
    },
    'detail.muan.5.intro1.desc1': {
        [I18N.ZH]: '典雅传统榻榻米与餐台',
        [I18N.EN]: '典雅传统榻榻米与餐台',
        [I18N.JP]: '典雅传统榻榻米与餐台'
    },
    'detail.muan.5.intro1.desc2': {
        [I18N.ZH]: '日式庭院 感悟超然时间的宁静',
        [I18N.EN]: '日式庭院 感悟超然时间的宁静',
        [I18N.JP]: '日式庭院 感悟超然时间的宁静'
    },
    'detail.muan.5.intro1.desc3': {
        [I18N.ZH]: '桧木浴桶 由身至心的舒缓',
        [I18N.EN]: '桧木浴桶 由身至心的舒缓',
        [I18N.JP]: '桧木浴桶 由身至心的舒缓'
    },
    'detail.muan.5.intro1.desc4': {
        [I18N.ZH]: '悠享石塀小路的静谧夜色',
        [I18N.EN]: '悠享石塀小路的静谧夜色',
        [I18N.JP]: '悠享石塀小路的静谧夜色'
    },
    'detail.muan.5.intro2.title': {
        [I18N.ZH]: '现代灵感',
        [I18N.EN]: '现代灵感',
        [I18N.JP]: '现代灵感'
    },
    'detail.muan.5.intro2.desc1': {
        [I18N.ZH]: '客房均配套备淋浴间与盥洗室',
        [I18N.EN]: '客房均配套备淋浴间与盥洗室',
        [I18N.JP]: '客房均配套备淋浴间与盥洗室'
    },
    'detail.muan.5.intro2.desc2': {
        [I18N.ZH]: '含加湿器的空气净化器',
        [I18N.EN]: '含加湿器的空气净化器',
        [I18N.JP]: '含加湿器的空气净化器'
    },
    'detail.muan.5.intro2.desc3': {
        [I18N.ZH]: '现代化便利设施 感受专属放松时刻',
        [I18N.EN]: '现代化便利设施 感受专属放松时刻',
        [I18N.JP]: '现代化便利设施 感受专属放松时刻'
    },
    'detail.muan.5.intro2.desc4': {
        [I18N.ZH]: '日式酒廊 品赏京都风味',
        [I18N.EN]: '日式酒廊 品赏京都风味',
        [I18N.JP]: '日式酒廊 品赏京都风味'
    },

    'detail.muan.7.address': {
        [I18N.ZH]: '日本国京都市東山区下河原町463-10',
        [I18N.EN]: '日本国京都市東山区下河原町463-10',
        [I18N.JP]: '日本国京都市東山区下河原町463-10'
    },
    'detail.muan.7.intro1': {
        [I18N.ZH]: 'MUAN 京都梦庵位于京都石塀小路',
        [I18N.EN]: 'MUAN 京都梦庵位于京都石塀小路',
        [I18N.JP]: 'MUAN 京都梦庵位于京都石塀小路'
    },
    'detail.muan.7.intro2': {
        [I18N.ZH]: '一条足以体悟京都文化积蕴的幽径',
        [I18N.EN]: '一条足以体悟京都文化积蕴的幽径',
        [I18N.JP]: '一条足以体悟京都文化积蕴的幽径'
    },
    'detail.muan.7.intro3': {
        [I18N.ZH]: '现为重要传统建筑群保护区',
        [I18N.EN]: '现为重要传统建筑群保护区',
        [I18N.JP]: '现为重要传统建筑群保护区'
    },
    'detail.muan.7.intro4': {
        [I18N.ZH]: '穿梭小巷，漫步于扑面而来的人文气息',
        [I18N.EN]: '穿梭小巷，漫步于扑面而来的人文气息',
        [I18N.JP]: '穿梭小巷，漫步于扑面而来的人文气息'
    },
    'detail.muan.7.intro5': {
        [I18N.ZH]: '每至樱花季节，飘落花瓣散布石板和水面',
        [I18N.EN]: '每至樱花季节，飘落花瓣散布石板和水面',
        [I18N.JP]: '每至樱花季节，飘落花瓣散布石板和水面'
    },
    'detail.muan.7.intro6': {
        [I18N.ZH]: '四季转换，渲染出独属此地的绝美之旅',
        [I18N.EN]: '四季转换，渲染出独属此地的绝美之旅',
        [I18N.JP]: '四季转换，渲染出独属此地的绝美之旅'
    },
    'detail.muan.7.mapaddr': {
        [I18N.ZH]: '東山区，下河原町',
        [I18N.EN]: '東山区，下河原町',
        [I18N.JP]: '東山区，下河原町',
    },



    'detail.arcadia.2.intro1': {
        [I18N.ZH]: '佇立于羊蹄山麓的宅邸',
        [I18N.EN]: '佇立于羊蹄山麓的宅邸',
        [I18N.JP]: '佇立于羊蹄山麓的宅邸',
    },
    'detail.arcadia.2.intro2': {
        [I18N.ZH]: '勾勒一段雪的追风逐日',
        [I18N.EN]: '勾勒一段雪的追风逐日',
        [I18N.JP]: '勾勒一段雪的追风逐日',
    },
    'detail.arcadia.2.intro3': {
        [I18N.ZH]: '登临旷美雪岭',
        [I18N.EN]: '登临旷美雪岭',
        [I18N.JP]: '登临旷美雪岭',
    },
    'detail.arcadia.2.intro4': {
        [I18N.ZH]: '穿梭雪林 目之所及',
        [I18N.EN]: '穿梭雪林 目之所及',
        [I18N.JP]: '穿梭雪林 目之所及',
    },
    'detail.arcadia.2.intro5': {
        [I18N.ZH]: '银装素裹 比比皆是',
        [I18N.EN]: '银装素裹 比比皆是',
        [I18N.JP]: '银装素裹 比比皆是',
    },
    'detail.arcadia.2.intro6': {
        [I18N.ZH]: '穿透无边窗景的光耀',
        [I18N.EN]: '穿透无边窗景的光耀',
        [I18N.JP]: '穿透无边窗景的光耀',
    },
    'detail.arcadia.2.intro7': {
        [I18N.ZH]: '在自然景致的簇拥下',
        [I18N.EN]: '在自然景致的簇拥下',
        [I18N.JP]: '在自然景致的簇拥下',
    },
    'detail.arcadia.2.intro8': {
        [I18N.ZH]: '探秘晶莹皎洁的非凡之旅',
        [I18N.EN]: '探秘晶莹皎洁的非凡之旅',
        [I18N.JP]: '探秘晶莹皎洁的非凡之旅',
    },

    'detail.arcadia.3.caption': {
        [I18N.ZH]: '境·界',
        [I18N.EN]: '境·界',
        [I18N.JP]: '境·界',
    },
    'detail.arcadia.3.intro1': {
        [I18N.ZH]: '意大利建筑巨匠',
        [I18N.EN]: '意大利建筑巨匠',
        [I18N.JP]: '意大利建筑巨匠',
    },
    'detail.arcadia.3.intro2': {
        [I18N.ZH]: 'RICCARDO RUBELLIA 倾心之作',
        [I18N.EN]: 'RICCARDO RUBELLIA 倾心之作',
        [I18N.JP]: 'RICCARDO RUBELLIA 倾心之作',
    },
    'detail.arcadia.3.intro3': {
        [I18N.ZH]: '坐落于粉雪天堂二世谷核心比罗夫镇',
        [I18N.EN]: '坐落于粉雪天堂二世谷核心比罗夫镇',
        [I18N.JP]: '坐落于粉雪天堂二世谷核心比罗夫镇',
    },
    'detail.arcadia.3.intro4': {
        [I18N.ZH]: '透过无边窗景',
        [I18N.EN]: '透过无边窗景',
        [I18N.JP]: '透过无边窗景',
    },
    'detail.arcadia.3.intro5': {
        [I18N.ZH]: '一览羊蹄山麓雄阔身姿',
        [I18N.EN]: '一览羊蹄山麓雄阔身姿',
        [I18N.JP]: '一览羊蹄山麓雄阔身姿',
    },
    'detail.arcadia.3.intro6': {
        [I18N.ZH]: '心随银白飞雪翩然起舞',
        [I18N.EN]: '心随银白飞雪翩然起舞',
        [I18N.JP]: '心随银白飞雪翩然起舞',
    },
    // 'detail.arcadia.3.intro7': {
    //     [I18N.ZH]: '重获灵魂平和的瞬息',
    //     [I18N.EN]: '重获灵魂平和的瞬息',
    //     [I18N.JP]: '重获灵魂平和的瞬息',
    // },

    'detail.arcadia.4.caption': {
        [I18N.ZH]: '知·行',
        [I18N.EN]: '知·行',
        [I18N.JP]: '知·行'
    },
    'detail.arcadia.4.img1.caption': {
        [I18N.ZH]: '全天专属管家',
        [I18N.EN]: '全天专属管家',
        [I18N.JP]: '全天专属管家'
    },
    'detail.arcadia.4.img1.desc': {
        [I18N.ZH]: '入微间 尽享怡然舒心',
        [I18N.EN]: '入微间 尽享怡然舒心',
        [I18N.JP]: '入微间 尽享怡然舒心'
    },
    'detail.arcadia.4.img2.caption': {
        [I18N.ZH]: '私享专车',
        [I18N.EN]: '私享专车',
        [I18N.JP]: '私享专车'
    },
    'detail.arcadia.4.img2.desc': {
        [I18N.ZH]: '行程无忧 出行尽在掌握',
        [I18N.EN]: '行程无忧 出行尽在掌握',
        [I18N.JP]: '行程无忧 出行尽在掌握'
    },

    'detail.arcadia.4.img3.caption': {
        [I18N.ZH]: '一站预约',
        [I18N.EN]: '一站预约',
        [I18N.JP]: '一站预约'
    },
    'detail.arcadia.4.img3.desc': {
        [I18N.ZH]: '滑雪私教 雪票 缆车 餐厅',
        [I18N.EN]: '滑雪私教 雪票 缆车 餐厅',
        [I18N.JP]: '滑雪私教 雪票 缆车 餐厅'
    },
    'detail.arcadia.4.img4.caption': {
        [I18N.ZH]: '专人陪同',
        [I18N.EN]: '专人陪同',
        [I18N.JP]: '专人陪同'
    },
    'detail.arcadia.4.img4.desc': {
        [I18N.ZH]: '租购雪具 当地出行顾问',
        [I18N.EN]: '租购雪具 当地出行顾问',
        [I18N.JP]: '租购雪具 当地出行顾问'
    },
    'detail.arcadia.4.img5.caption': {
        [I18N.ZH]: '私享主厨',
        [I18N.EN]: '私享主厨',
        [I18N.JP]: '私享主厨'
    },
    'detail.arcadia.4.img5.desc': {
        [I18N.ZH]: '珍稀食材 享味高定晚宴',
        [I18N.EN]: '珍稀食材 享味高定晚宴',
        [I18N.JP]: '珍稀食材 享味高定晚宴'
    },

    'detail.arcadia.5.caption': {
        [I18N.ZH]: '居·所',
        [I18N.EN]: '居·所',
        [I18N.JP]: '居·所'
    },
    'detail.arcadia.5.intro1.title': {
        [I18N.ZH]: '独立三层宅邸',
        [I18N.EN]: '独立三层宅邸',
        [I18N.JP]: '独立三层宅邸'
    },
    'detail.arcadia.5.intro1.desc1': {
        [I18N.ZH]: '全屋6间全套房卧室',
        [I18N.EN]: '全屋6间全套房卧室',
        [I18N.JP]: '全屋6间全套房卧室'
    },
    'detail.arcadia.5.intro1.desc2': {
        [I18N.ZH]: '双层挑高客厅',
        [I18N.EN]: '双层挑高客厅',
        [I18N.JP]: '双层挑高客厅'
    },
    'detail.arcadia.5.intro1.desc3': {
        [I18N.ZH]: '全屋地暖 双通道壁炉',
        [I18N.EN]: '全屋地暖 双通道壁炉',
        [I18N.JP]: '全屋地暖 双通道壁炉'
    },
    'detail.arcadia.5.intro1.desc4': {
        [I18N.ZH]: '独享整栋家外之家',
        [I18N.EN]: '独享整栋家外之家',
        [I18N.JP]: '独享整栋家外之家'
    },
    'detail.arcadia.5.intro2.title': {
        [I18N.ZH]: '私享设施',
        [I18N.EN]: '私享设施',
        [I18N.JP]: '私享设施'
    },
    'detail.arcadia.5.intro2.desc1': {
        [I18N.ZH]: '专业级酒窖 窖藏名酒佳酿',
        [I18N.EN]: '专业级酒窖 窖藏名酒佳酿',
        [I18N.JP]: '专业级酒窖 窖藏名酒佳酿'
    },
    'detail.arcadia.5.intro2.desc2': {
        [I18N.ZH]: '温泉SPA房 开启舒缓之境',
        [I18N.EN]: '温泉SPA房 开启舒缓之境',
        [I18N.JP]: '温泉SPA房 开启舒缓之境'
    },
    'detail.arcadia.5.intro2.desc3': {
        [I18N.ZH]: '雪具干燥室 纵享滑雪之旅',
        [I18N.EN]: '雪具干燥室 纵享滑雪之旅',
        [I18N.JP]: '雪具干燥室 纵享滑雪之旅'
    },
    'detail.arcadia.5.intro2.desc4': {
        [I18N.ZH]: '私享健身房 时刻关注体调',
        [I18N.EN]: '私享健身房 时刻关注体调',
        [I18N.JP]: '私享健身房 时刻关注体调'
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

    'detail.arcadia.6.caption': {
        [I18N.ZH]: '季·转',
        [I18N.EN]: '季·转',
        [I18N.JP]: '季·转'
    },
    'detail.arcadia.6.intro1': {
        [I18N.ZH]: '冰雪渐融的时节',
        [I18N.EN]: '冰雪渐融的时节',
        [I18N.JP]: '冰雪渐融的时节'
    },
    'detail.arcadia.6.intro2': {
        [I18N.ZH]: '一探茂盛幽深的森林',
        [I18N.EN]: '一探茂盛幽深的森林',
        [I18N.JP]: '一探茂盛幽深的森林'
    },
    'detail.arcadia.6.intro3': {
        [I18N.ZH]: '踏车纵览山顶花田',
        [I18N.EN]: '踏车纵览山顶花田',
        [I18N.JP]: '踏车纵览山顶花田'
    },
    'detail.arcadia.6.intro4': {
        [I18N.ZH]: '挥杆畅享高尔夫乐趣',
        [I18N.EN]: '挥杆畅享高尔夫乐趣',
        [I18N.JP]: '挥杆畅享高尔夫乐趣'
    },
    'detail.arcadia.6.intro5': {
        [I18N.ZH]: '举目皆为羊蹄山麓自然至美',
        [I18N.EN]: '举目皆为羊蹄山麓自然至美',
        [I18N.JP]: '举目皆为羊蹄山麓自然至美'
    },

    'detail.arcadia.7.address': {
        [I18N.ZH]: '〒044-0089 日本国北海道虻田郡俱知安町二世谷比罗夫镇2条2丁目7番地18号',
        [I18N.EN]: '〒044-0089 日本国北海道虻田郡俱知安町二世谷比罗夫镇2条2丁目7番地18号',
        [I18N.JP]: '〒044-0089 日本国北海道虻田郡俱知安町二世谷比罗夫镇2条2丁目7番地18号'
    },
    'detail.arcadia.7.intro1': {
        [I18N.ZH]: 'ARCADIA 位于北海道二世谷地区最富盛名的比罗夫镇',
        [I18N.EN]: 'ARCADIA 位于北海道二世谷地区最富盛名的比罗夫镇',
        [I18N.JP]: 'ARCADIA 位于北海道二世谷地区最富盛名的比罗夫镇'
    },
    'detail.arcadia.7.intro2': {
        [I18N.ZH]: '四季皆宜的度假圣地，距离札幌两小时车程',
        [I18N.EN]: '四季皆宜的度假圣地，距离札幌两小时车程',
        [I18N.JP]: '四季皆宜的度假圣地，距离札幌两小时车程'
    },
    'detail.arcadia.7.intro3': {
        [I18N.ZH]: '日本最美的粉雪在此降临，毗邻羊蹄山无限风光',
        [I18N.EN]: '日本最美的粉雪在此降临，毗邻羊蹄山无限风光',
        [I18N.JP]: '日本最美的粉雪在此降临，毗邻羊蹄山无限风光'
    },
    'detail.arcadia.7.intro4': {
        [I18N.ZH]: '无愧于全球滑雪爱好者的天堂',
        [I18N.EN]: '无愧于全球滑雪爱好者的天堂',
        [I18N.JP]: '无愧于全球滑雪爱好者的天堂'
    },
    // 'detail.arcadia.7.intro5': {
    //     [I18N.ZH]: '伴着远方的羊蹄山风光，享仅属于此地的身心疗愈',
    //     [I18N.EN]: '伴着远方的羊蹄山风光，享仅属于此地的身心疗愈',
    //     [I18N.JP]: '伴着远方的羊蹄山风光，享仅属于此地的身心疗愈'
    // },
    'detail.arcadia.7.mapaddr': {
        [I18N.ZH]: '二世谷，比罗夫镇',
        [I18N.EN]: '二世谷，比罗夫镇',
        [I18N.JP]: '二世谷，比罗夫镇'
    },


    'detail.kanrinkyo.2.intro1': {
        [I18N.ZH]: '面临银白色羊蹄山麓',
        [I18N.EN]: '面临银白色羊蹄山麓',
        [I18N.JP]: '面临银白色羊蹄山麓',
    },
    'detail.kanrinkyo.2.intro2': {
        [I18N.ZH]: '隐入静怡之地',
        [I18N.EN]: '隐入静怡之地',
        [I18N.JP]: '隐入静怡之地',
    },
    'detail.kanrinkyo.2.intro3': {
        [I18N.ZH]: '目光投洒于天地间',
        [I18N.EN]: '目光投洒于天地间',
        [I18N.JP]: '目光投洒于天地间',
    },
    'detail.kanrinkyo.2.intro4': {
        [I18N.ZH]: '忘却尘世的繁陈杂念',
        [I18N.EN]: '忘却尘世的繁陈杂念',
        [I18N.JP]: '忘却尘世的繁陈杂念',
    },
    'detail.kanrinkyo.2.intro5': {
        [I18N.ZH]: '微醺灯火之中',
        [I18N.EN]: '微醺灯火之中',
        [I18N.JP]: '微醺灯火之中',
    },
    'detail.kanrinkyo.2.intro6': {
        [I18N.ZH]: '沐浴北国静谧夜色',
        [I18N.EN]: '沐浴北国静谧夜色',
        [I18N.JP]: '沐浴北国静谧夜色',
    },
    'detail.kanrinkyo.2.intro7': {
        [I18N.ZH]: '回归内心的平和',
        [I18N.EN]: '回归内心的平和',
        [I18N.JP]: '回归内心的平和',
    },

    'detail.kanrinkyo.3.caption': {
        [I18N.ZH]: '境·界',
        [I18N.EN]: '境·界',
        [I18N.JP]: '境·界',
    },
    'detail.kanrinkyo.3.intro1': {
        [I18N.ZH]: '日本建筑大师中山真琴打造',
        [I18N.EN]: '日本建筑大师中山真琴打造',
        [I18N.JP]: '日本建筑大师中山真琴打造',
    },
    'detail.kanrinkyo.3.intro2': {
        [I18N.ZH]: '遁入自然的避世之所',
        [I18N.EN]: '遁入自然的避世之所',
        [I18N.JP]: '遁入自然的避世之所',
    },
    'detail.kanrinkyo.3.intro3': {
        [I18N.ZH]: '坐落于凛雪皑皑的林间',
        [I18N.EN]: '坐落于凛雪皑皑的林间',
        [I18N.JP]: '坐落于凛雪皑皑的林间',
    },
    'detail.kanrinkyo.3.intro4': {
        [I18N.ZH]: '面向羊蹄山麓 依山而建',
        [I18N.EN]: '面向羊蹄山麓 依山而建',
        [I18N.JP]: '面向羊蹄山麓 依山而建',
    },
    'detail.kanrinkyo.3.intro5': {
        [I18N.ZH]: '天高云逸 白峰峥嵘',
        [I18N.EN]: '天高云逸 白峰峥嵘',
        [I18N.JP]: '天高云逸 白峰峥嵘',
    },
    'detail.kanrinkyo.3.intro6': {
        [I18N.ZH]: '远离世间的尘嚣',
        [I18N.EN]: '远离世间的尘嚣',
        [I18N.JP]: '远离世间的尘嚣',
    },
    'detail.kanrinkyo.3.intro7': {
        [I18N.ZH]: '体味与自然相融的幽玄心境',
        [I18N.EN]: '体味与自然相融的幽玄心境',
        [I18N.JP]: '体味与自然相融的幽玄心境',
    },

    'detail.kanrinkyo.4.caption': {
        [I18N.ZH]: '知·行',
        [I18N.EN]: '知·行',
        [I18N.JP]: '知·行',
    },
    'detail.kanrinkyo.4.img1.caption': {
        [I18N.ZH]: '全天专属管家',
        [I18N.EN]: '全天专属管家',
        [I18N.JP]: '全天专属管家',
    },
    'detail.kanrinkyo.4.img1.desc': {
        [I18N.ZH]: '入微间 尽享怡然舒心',
        [I18N.EN]: '入微间 尽享怡然舒心',
        [I18N.JP]: '入微间 尽享怡然舒心',
    },
    'detail.kanrinkyo.4.img2.caption': {
        [I18N.ZH]: '私享专车',
        [I18N.EN]: '私享专车',
        [I18N.JP]: '私享专车',
    },
    'detail.kanrinkyo.4.img2.desc': {
        [I18N.ZH]: '专属司机 探秘至美二世谷',
        [I18N.EN]: '专属司机 探秘至美二世谷',
        [I18N.JP]: '专属司机 探秘至美二世谷',
    },
    'detail.kanrinkyo.4.img3.caption': {
        [I18N.ZH]: '私享主厨',
        [I18N.EN]: '私享主厨',
        [I18N.JP]: '私享主厨',
    },
    'detail.kanrinkyo.4.img3.desc': {
        [I18N.ZH]: '珍稀食材 享味高定晚宴',
        [I18N.EN]: '珍稀食材 享味高定晚宴',
        [I18N.JP]: '珍稀食材 享味高定晚宴',
    },

    'detail.kanrinkyo.5.caption': {
        [I18N.ZH]: '居·所',
        [I18N.EN]: '居·所',
        [I18N.JP]: '居·所',
    },
    'detail.kanrinkyo.5.intro1.title': {
        [I18N.ZH]: '独立三层宅邸',
        [I18N.EN]: '独立三层宅邸',
        [I18N.JP]: '独立三层宅邸',
    },
    'detail.kanrinkyo.5.intro1.desc1': {
        [I18N.ZH]: '宽阔尺度的舒适体验',
        [I18N.EN]: '宽阔尺度的舒适体验',
        [I18N.JP]: '宽阔尺度的舒适体验',
    },
    'detail.kanrinkyo.5.intro1.desc2': {
        [I18N.ZH]: '双层挑高客厅',
        [I18N.EN]: '双层挑高客厅',
        [I18N.JP]: '双层挑高客厅',
    },
    'detail.kanrinkyo.5.intro1.desc3': {
        [I18N.ZH]: '全屋地暖 双通道壁炉',
        [I18N.EN]: '全屋地暖 双通道壁炉',
        [I18N.JP]: '全屋地暖 双通道壁炉',
    },
    'detail.kanrinkyo.5.intro1.desc4': {
        [I18N.ZH]: '私人影院 尽享视觉盛宴',
        [I18N.EN]: '私人影院 尽享视觉盛宴',
        [I18N.JP]: '私人影院 尽享视觉盛宴',
    },
    'detail.kanrinkyo.5.intro2.title': {
        [I18N.ZH]: '私享设施',
        [I18N.EN]: '私享设施',
        [I18N.JP]: '私享设施',
    },
    'detail.kanrinkyo.5.intro2.desc1': {
        [I18N.ZH]: '户外按摩浴缸 体味合一境界',
        [I18N.EN]: '户外按摩浴缸 体味合一境界',
        [I18N.JP]: '户外按摩浴缸 体味合一境界',
    },
    'detail.kanrinkyo.5.intro2.desc2': {
        [I18N.ZH]: '温泉SPA房 开启舒缓之境',
        [I18N.EN]: '温泉SPA房 开启舒缓之境',
        [I18N.JP]: '温泉SPA房 开启舒缓之境',
    },
    'detail.kanrinkyo.5.intro2.desc3': {
        [I18N.ZH]: '专属25米超大泳池 时刻关注体调',
        [I18N.EN]: '专属25米超大泳池 时刻关注体调',
        [I18N.JP]: '专属25米超大泳池 时刻关注体调',
    },
    'detail.kanrinkyo.5.intro2.desc4': {
        [I18N.ZH]: '专业级酒窖 窖藏名酒佳酿',
        [I18N.EN]: '专业级酒窖 窖藏名酒佳酿',
        [I18N.JP]: '专业级酒窖 窖藏名酒佳酿',
    },
    'detail.kanrinkyo.5.intro2.desc5': {
        [I18N.ZH]: '雪具干燥室 纵享滑雪之旅',
        [I18N.EN]: '雪具干燥室 纵享滑雪之旅',
        [I18N.JP]: '雪具干燥室 纵享滑雪之旅',
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

    'detail.kanrinkyo.7.address': {
        [I18N.ZH]: '日本国北海道虻田郡倶知安町二世谷比罗夫镇２条２丁目7番18号',
        [I18N.EN]: '日本国北海道虻田郡倶知安町二世谷比罗夫镇２条２丁目7番18号',
        [I18N.JP]: '日本国北海道虻田郡倶知安町二世谷比罗夫镇２条２丁目7番18号'
    },
    'detail.kanrinkyo.7.addresswrap': {
        [I18N.ZH]: '日本国北海道虻田郡倶知安町\n二世谷比罗夫镇２条２丁目7番18号',
        [I18N.EN]: '日本国北海道虻田郡倶知安町\n二世谷比罗夫镇２条２丁目7番18号',
        [I18N.JP]: '日本国北海道虻田郡倶知安町\n二世谷比罗夫镇２条２丁目7番18号'
    },
    'detail.kanrinkyo.7.intro1': {
        [I18N.ZH]: 'KANRINKYO 位于北海道二世谷地区最富盛名的比罗夫镇',
        [I18N.EN]: 'KANRINKYO 位于北海道二世谷地区最富盛名的比罗夫镇',
        [I18N.JP]: 'KANRINKYO 位于北海道二世谷地区最富盛名的比罗夫镇'
    },
    'detail.kanrinkyo.7.intro2': {
        [I18N.ZH]: '四季皆宜的度假圣地，距离札幌两小时车程',
        [I18N.EN]: '四季皆宜的度假圣地，距离札幌两小时车程',
        [I18N.JP]: '四季皆宜的度假圣地，距离札幌两小时车程'
    },
    'detail.kanrinkyo.7.intro3': {
        [I18N.ZH]: '日本最美的粉雪在此降临，毗邻羊蹄山无限风光',
        [I18N.EN]: '日本最美的粉雪在此降临，毗邻羊蹄山无限风光',
        [I18N.JP]: '日本最美的粉雪在此降临，毗邻羊蹄山无限风光'
    },
    'detail.kanrinkyo.7.intro4': {
        [I18N.ZH]: '无愧于全球滑雪爱好者的天堂',
        [I18N.EN]: '无愧于全球滑雪爱好者的天堂',
        [I18N.JP]: '无愧于全球滑雪爱好者的天堂'
    },



    'detail.yukoro.2.intro1': {
        [I18N.ZH]: '传承百年的天然温泉',
        [I18N.EN]: '传承百年的天然温泉',
        [I18N.JP]: '传承百年的天然温泉'
    },
    'detail.yukoro.2.intro2': {
        [I18N.ZH]: '日本建筑大师中山真琴倾力巨献 ',
        [I18N.EN]: '日本建筑大师中山真琴倾力巨献 ',
        [I18N.JP]: '日本建筑大师中山真琴倾力巨献 '
    },
    'detail.yukoro.2.intro3': {
        [I18N.ZH]: '坐落于粉雪天堂二世谷核心比罗夫镇',
        [I18N.EN]: '坐落于粉雪天堂二世谷核心比罗夫镇',
        [I18N.JP]: '坐落于粉雪天堂二世谷核心比罗夫镇'
    },
    'detail.yukoro.2.intro4': {
        [I18N.ZH]: '浸泡于暖泉之中',
        [I18N.EN]: '浸泡于暖泉之中',
        [I18N.JP]: '浸泡于暖泉之中'
    },
    'detail.yukoro.2.intro5': {
        [I18N.ZH]: '或耳畔缭绕夏日虫鸣',
        [I18N.EN]: '或耳畔缭绕夏日虫鸣',
        [I18N.JP]: '或耳畔缭绕夏日虫鸣'
    },
    'detail.yukoro.2.intro6': {
        [I18N.ZH]: '或静观飘落的飞雪',
        [I18N.EN]: '或静观飘落的飞雪',
        [I18N.JP]: '或静观飘落的飞雪'
    },
    'detail.yukoro.2.intro7': {
        [I18N.ZH]: '远眺羊蹄山的雄阔壮美',
        [I18N.EN]: '远眺羊蹄山的雄阔壮美',
        [I18N.JP]: '远眺羊蹄山的雄阔壮美'
    },
    'detail.yukoro.2.intro8': {
        [I18N.ZH]: '热气升腾 暖意相融',
        [I18N.EN]: '热气升腾 暖意相融',
        [I18N.JP]: '热气升腾 暖意相融'
    },
    
    'detail.yukoro.3.caption': {
        [I18N.ZH]: '传·承',
        [I18N.EN]: '传·承',
        [I18N.JP]: '传·承'
    },
    'detail.yukoro.3.intro1': {
        [I18N.ZH]: '传承百年前人经营',
        [I18N.EN]: '传承百年前人经营',
        [I18N.JP]: '传承百年前人经营'
    },
    'detail.yukoro.3.intro2': {
        [I18N.ZH]: '延续亘古文脉',
        [I18N.EN]: '延续亘古文脉',
        [I18N.JP]: '延续亘古文脉'
    },
    'detail.yukoro.3.intro3': {
        [I18N.ZH]: '守护专为暖意而生的休憩之所',
        [I18N.EN]: '守护专为暖意而生的休憩之所',
        [I18N.JP]: '守护专为暖意而生的休憩之所'
    },
    'detail.yukoro.3.intro4': {
        [I18N.ZH]: '浸润其中',
        [I18N.EN]: '浸润其中',
        [I18N.JP]: '浸润其中'
    },
    'detail.yukoro.3.intro5': {
        [I18N.ZH]: '独属此地的体贴暖意',
        [I18N.EN]: '独属此地的体贴暖意',
        [I18N.JP]: '独属此地的体贴暖意'
    },
    'detail.yukoro.3.intro6': {
        [I18N.ZH]: '润物无声地绵延传承',
        [I18N.EN]: '润物无声地绵延传承',
        [I18N.JP]: '润物无声地绵延传承'
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

    'detail.yukoro.4.caption': {
        [I18N.ZH]: '暖·意',
        [I18N.EN]: '暖·意',
        [I18N.JP]: '暖·意'
    },
    'detail.yukoro.4.intro1': {
        [I18N.ZH]: 'YUKORO 浅绿色的汤泉',
        [I18N.EN]: 'YUKORO 浅绿色的汤泉',
        [I18N.JP]: 'YUKORO 浅绿色的汤泉'
    },
    'detail.yukoro.4.intro2': {
        [I18N.ZH]: '天然 66.4℃ PH值: 6.8',
        [I18N.EN]: '天然 66.4℃ PH值: 6.8',
        [I18N.JP]: '天然 66.4℃ PH值: 6.8'
    },
    'detail.yukoro.4.intro3': {
        [I18N.ZH]: '富含碳酸氢钠盐',
        [I18N.EN]: '富含碳酸氢钠盐',
        [I18N.JP]: '富含碳酸氢钠盐'
    },
    'detail.yukoro.4.intro4': {
        [I18N.ZH]: '焕美肌肤 葆水湿润',
        [I18N.EN]: '焕美肌肤 葆水湿润',
        [I18N.JP]: '焕美肌肤 葆水湿润'
    },
    'detail.yukoro.4.intro5': {
        [I18N.ZH]: '亦可缓解肌肉痛 神经痛',
        [I18N.EN]: '亦可缓解肌肉痛 神经痛',
        [I18N.JP]: '亦可缓解肌肉痛 神经痛'
    },
    'detail.yukoro.4.intro6': {
        [I18N.ZH]: '纵使肌肤处于敏感期或恢复期',
        [I18N.EN]: '纵使肌肤处于敏感期或恢复期',
        [I18N.JP]: '纵使肌肤处于敏感期或恢复期'
    },
    'detail.yukoro.4.intro7': {
        [I18N.ZH]: '也能放心尽享其中',
        [I18N.EN]: '也能放心尽享其中',
        [I18N.JP]: '也能放心尽享其中'
    },

    'detail.yukoro.5.caption': {
        [I18N.ZH]: '悠·行',
        [I18N.EN]: '悠·行',
        [I18N.JP]: '悠·行'
    },
    'detail.yukoro.5.intro1': {
        [I18N.ZH]: '享受温泉暖意之余',
        [I18N.EN]: '享受温泉暖意之余',
        [I18N.JP]: '享受温泉暖意之余'
    },
    'detail.yukoro.5.intro2': {
        [I18N.ZH]: '亦可前往专属餐厅',
        [I18N.EN]: '亦可前往专属餐厅',
        [I18N.JP]: '亦可前往专属餐厅'
    },
    'detail.yukoro.5.intro3': {
        [I18N.ZH]: '赏味纯正的日式烧鸟',
        [I18N.EN]: '赏味纯正的日式烧鸟',
        [I18N.JP]: '赏味纯正的日式烧鸟'
    },
    'detail.yukoro.5.intro4': {
        [I18N.ZH]: '温泉之外',
        [I18N.EN]: '温泉之外',
        [I18N.JP]: '温泉之外'
    },
    'detail.yukoro.5.intro5': {
        [I18N.ZH]: '乘坐缆车前往羊蹄山顶',
        [I18N.EN]: '乘坐缆车前往羊蹄山顶',
        [I18N.JP]: '乘坐缆车前往羊蹄山顶'
    },
    'detail.yukoro.5.intro6': {
        [I18N.ZH]: '一览粉雪胜地',
        [I18N.EN]: '一览粉雪胜地',
        [I18N.JP]: '一览粉雪胜地'
    },
    'detail.yukoro.5.intro7': {
        [I18N.ZH]: '或是冰雪渐融的时节',
        [I18N.EN]: '或是冰雪渐融的时节',
        [I18N.JP]: '或是冰雪渐融的时节'
    },
    'detail.yukoro.5.intro8': {
        [I18N.ZH]: '迈步山顶花田',
        [I18N.EN]: '迈步山顶花田',
        [I18N.JP]: '迈步山顶花田'
    },
    'detail.yukoro.5.intro9': {
        [I18N.ZH]: '挥杆畅享高尔夫乐趣',
        [I18N.EN]: '挥杆畅享高尔夫乐趣',
        [I18N.JP]: '挥杆畅享高尔夫乐趣'
    },
    
    'detail.yukoro.7.address': {
        [I18N.ZH]: '日本国北海道虻田郡倶知安町二世谷比罗夫镇２条２丁目7番18号',
        [I18N.EN]: '日本国北海道虻田郡倶知安町二世谷比罗夫镇２条２丁目7番18号',
        [I18N.JP]: '日本国北海道虻田郡倶知安町二世谷比罗夫镇２条２丁目7番18号'
    },
    'detail.yukoro.7.intro1': {
        [I18N.ZH]: 'YUKORO 位于北海道二世谷地区最富盛名的比罗夫镇',
        [I18N.EN]: 'YUKORO 位于北海道二世谷地区最富盛名的比罗夫镇',
        [I18N.JP]: 'YUKORO 位于北海道二世谷地区最富盛名的比罗夫镇'
    },
    'detail.yukoro.7.intro2': {
        [I18N.ZH]: '四季皆宜的度假圣地，距离札幌两小时车程',
        [I18N.EN]: '四季皆宜的度假圣地，距离札幌两小时车程',
        [I18N.JP]: '四季皆宜的度假圣地，距离札幌两小时车程'
    },
    'detail.yukoro.7.intro3': {
        [I18N.ZH]: '日本最美的粉雪在此降临，毗邻羊蹄山无限风光',
        [I18N.EN]: '日本最美的粉雪在此降临，毗邻羊蹄山无限风光',
        [I18N.JP]: '日本最美的粉雪在此降临，毗邻羊蹄山无限风光'
    },
    'detail.yukoro.7.intro4': {
        [I18N.ZH]: '无愧于全球滑雪爱好者的天堂',
        [I18N.EN]: '无愧于全球滑雪爱好者的天堂',
        [I18N.JP]: '无愧于全球滑雪爱好者的天堂'
    },
    // 'detail.yukoro.7.intro5': {
    //     [I18N.ZH]: '伴着远方的羊蹄山风光，享仅属于此地的身心疗愈',
    //     [I18N.EN]: '伴着远方的羊蹄山风光，享仅属于此地的身心疗愈',
    //     [I18N.JP]: '伴着远方的羊蹄山风光，享仅属于此地的身心疗愈'
    // }
}