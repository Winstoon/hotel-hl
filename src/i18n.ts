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
        [I18N.EN]: 'Contact Us',
        [I18N.JP]: 'お問い合わせ',
    },
    'contact.address': {
        [I18N.ZH]: '地理位置：北海道虻田郡倶知安町南6条西1丁目5番地1',
        [I18N.EN]: '地理位置：北海道虻田郡倶知安町南6条西1丁目5番地1',
        [I18N.JP]: '地理位置：北海道虻田郡倶知安町南6条西1丁目5番地1',
    },
    'contact.phone': {
        [I18N.ZH]: '联系电话：+81 136 55 8917',
        [I18N.EN]: '联系电话：+81 136 55 8917',
        [I18N.JP]: '联系电话：+81 136 55 8917',
    },
    'contact.fax': {
        [I18N.ZH]: '传真：+81 136 55 8917',
        [I18N.EN]: '传真：+81 136 55 8917',
        [I18N.JP]: '传真：+81 136 55 8917'
    },
    'contact.email': {
        [I18N.ZH]: '电子邮箱：',
        [I18N.EN]: '电子邮箱：',
        [I18N.JP]: '电子邮箱：'
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
        [I18N.ZH]: '在纤尘不染中对话内心',
        [I18N.EN]: '在纤尘不染中对话内心',
        [I18N.JP]: '在纤尘不染中对话内心',
    },

    // 二世古雪屋
    'arcadia.title': {
        [I18N.ZH]: 'ARCADIA 二世古 雪屋',
        [I18N.EN]: 'ARCADIA 二世古 雪屋',
        [I18N.JP]: 'ARCADIA 二世古 雪屋',
    },
    'arcadia.title.firstname': {
        [I18N.ZH]: 'ARCADIA',
        [I18N.EN]: 'ARCADIA',
        [I18N.JP]: 'ARCADIA',
    },
    'arcadia.title.lastname': {
        [I18N.ZH]: '二世古雪屋',
        [I18N.EN]: '二世古雪屋',
        [I18N.JP]: '二世古雪屋',
    },
    'arcadia.desc1': {
        [I18N.ZH]: '滑雪盛揽 银白之梦',
        [I18N.EN]: '滑雪盛揽 银白之梦',
        [I18N.JP]: '滑雪盛揽 银白之梦',
    },
    'arcadia.desc2': {
        [I18N.ZH]: '探寻羊蹄山麓的绵延叠嶂',
        [I18N.EN]: '探寻羊蹄山麓的绵延叠嶂',
        [I18N.JP]: '探寻羊蹄山麓的绵延叠嶂',
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
        [I18N.ZH]: '隐入侘寂静怡的风雅美学',
        [I18N.EN]: '隐入侘寂静怡的风雅美学',
        [I18N.JP]: '隐入侘寂静怡的风雅美学',
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
        [I18N.ZH]: '惬意中体味亘古文脉',
        [I18N.EN]: '惬意中体味亘古文脉',
        [I18N.JP]: '惬意中体味亘古文脉',
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
        [I18N.ZH]: 'Coming Soon',
        [I18N.EN]: 'Coming Soon',
        [I18N.JP]: 'Coming Soon',
    },
    'newland.desc1': {
        [I18N.ZH]: '举目翘盼 计日呈现',
        [I18N.EN]: '举目翘盼 计日呈现',
        [I18N.JP]: '举目翘盼 计日呈现',
    },
    'newland.desc2': {
        [I18N.ZH]: '隈研吾神旷心讴的美胜巨献',
        [I18N.EN]: '隈研吾神旷心讴的美胜巨献',
        [I18N.JP]: '隈研吾神旷心讴的美胜巨献',
    },

    'home.2.intro1': {
        [I18N.ZH]: '为人赞叹之美景',
        [I18N.EN]: '为人赞叹之美景',
        [I18N.JP]: '为人赞叹之美景',
    },
    'home.2.intro2': {
        [I18N.ZH]: '动人神魄的人文美学',
        [I18N.EN]: '动人神魄的人文美学',
        [I18N.JP]: '动人神魄的人文美学',
    },
    'home.2.intro3': {
        [I18N.ZH]: '入微的奢怡体验',
        [I18N.EN]: '入微的奢怡体验',
        [I18N.JP]: '入微的奢怡体验',
    },
    'home.2.intro4.1': {
        [I18N.ZH]: '稜',
        [I18N.EN]: '稜',
        [I18N.JP]: '稜',
    },
    'home.2.intro4.2': {
        [I18N.ZH]: '即两者交错相合',
        [I18N.EN]: '即两者交错相合',
        [I18N.JP]: '即两者交错相合',
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
        [I18N.ZH]: '你',
        [I18N.EN]: '你',
        [I18N.JP]: '你',
    },
    'home.2.intro7.4': {
        [I18N.ZH]: '我',
        [I18N.EN]: '我',
        [I18N.JP]: '我',
    },
    'home.2.intro8': {
        [I18N.ZH]: '遥相应和',
        [I18N.EN]: '遥相应和',
        [I18N.JP]: '遥相应和',
    },
    'home.2.intro9': {
        [I18N.ZH]: '而当这段相合结束',
        [I18N.EN]: '而当这段相合结束',
        [I18N.JP]: '而当这段相合结束',
    },
    'home.2.intro10': {
        [I18N.ZH]: '收获内心的稜和',
        [I18N.EN]: '收获内心的稜和',
        [I18N.JP]: '收获内心的稜和',
    },

    'home.3.tab1': {
        [I18N.ZH]: '森罗景致',
        [I18N.EN]: '森罗景致',
        [I18N.JP]: '森罗景致',
    },
    'home.3.tab1.desc1': {
        [I18N.ZH]: '每一处目的地',
        [I18N.EN]: '每一处目的地',
        [I18N.JP]: '每一处目的地',
    },
    'home.3.tab1.desc2': {
        [I18N.ZH]: '体味自然景致之美',
        [I18N.EN]: '体味自然景致之美',
        [I18N.JP]: '体味自然景致之美',
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
        [I18N.ZH]: '入微恰到的服务',
        [I18N.EN]: '入微恰到的服务',
        [I18N.JP]: '入微恰到的服务',
    },
    'home.3.tab3.desc2': {
        [I18N.ZH]: '由身至心的怡然自在',
        [I18N.EN]: '由身至心的怡然自在',
        [I18N.JP]: '由身至心的怡然自在',
    },

    'home.ending': {
        [I18N.ZH]: '「 每个人都值得一次稜和 」',
        [I18N.EN]: '「 每个人都值得一次稜和 」',
        [I18N.JP]: '「 每个人都值得一次稜和 」',
    },

// ------------------------------ detail ------------------------------
    'detail.muan.2.intro1': {
        [I18N.ZH]: '踱步在悠静的小径',
        [I18N.EN]: '踱步在悠静的小径',
        [I18N.JP]: '踱步在悠静的小径',
    },
    'detail.muan.2.intro2': {
        [I18N.ZH]: '隐入梦庵，体味京都雅致',
        [I18N.EN]: '隐入梦庵，体味京都雅致',
        [I18N.JP]: '隐入梦庵，体味京都雅致',
    },
    'detail.muan.2.intro3': {
        [I18N.ZH]: '透过窗棂',
        [I18N.EN]: '透过窗棂',
        [I18N.JP]: '透过窗棂',
    },
    'detail.muan.2.intro4': {
        [I18N.ZH]: '一睹古韵中人文气息',
        [I18N.EN]: '一睹古韵中人文气息',
        [I18N.JP]: '一睹古韵中人文气息',
    },
    'detail.muan.2.intro5': {
        [I18N.ZH]: '深刻积蕴与惬意体验',
        [I18N.EN]: '深刻积蕴与惬意体验',
        [I18N.JP]: '深刻积蕴与惬意体验',
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
        [I18N.ZH]: '赴一场与内心的对话',
        [I18N.EN]: '赴一场与内心的对话',
        [I18N.JP]: '赴一场与内心的对话',
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
        [I18N.ZH]: '聆听片刻属于自己的呼吸',
        [I18N.EN]: '聆听片刻属于自己的呼吸',
        [I18N.JP]: '聆听片刻属于自己的呼吸',
    },
    'detail.muan.3.intro6': {
        [I18N.ZH]: '刻写京都之旅的记忆',
        [I18N.EN]: '刻写京都之旅的记忆',
        [I18N.JP]: '刻写京都之旅的记忆',
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
        [I18N.ZH]: '米其林三星主厨 Omakase 每周一会',
        [I18N.EN]: '米其林三星主厨 Omakase 每周一会',
        [I18N.JP]: '米其林三星主厨 Omakase 每周一会'
    },
    'detail.muan.4.img2.caption': {
        [I18N.ZH]: '茶道品韵',
        [I18N.EN]: '茶道品韵',
        [I18N.JP]: '茶道品韵'
    },
    'detail.muan.4.img2.desc': {
        [I18N.ZH]: '品茗茶道，和敬清寂',
        [I18N.EN]: '品茗茶道，和敬清寂',
        [I18N.JP]: '品茗茶道，和敬清寂'
    },
    'detail.muan.4.img3.caption': {
        [I18N.ZH]: '书道传艺',
        [I18N.EN]: '书道传艺',
        [I18N.JP]: '书道传艺'
    },
    'detail.muan.4.img3.desc': {
        [I18N.ZH]: '追寻书迹，修身悟道',
        [I18N.EN]: '追寻书迹，修身悟道',
        [I18N.JP]: '追寻书迹，修身悟道'
    },
    'detail.muan.4.img4.caption': {
        [I18N.ZH]: '静心禅修',
        [I18N.EN]: '静心禅修',
        [I18N.JP]: '静心禅修'
    },
    'detail.muan.4.img4.desc': {
        [I18N.ZH]: '超然物外，平静止水',
        [I18N.EN]: '超然物外，平静止水',
        [I18N.JP]: '超然物外，平静止水'
    },
    'detail.muan.4.img5.caption': {
        [I18N.ZH]: '徒步赏景',
        [I18N.EN]: '徒步赏景',
        [I18N.JP]: '徒步赏景'
    },
    'detail.muan.4.img5.desc': {
        [I18N.ZH]: '悠然徒步，感受京郊美盛',
        [I18N.EN]: '悠然徒步，感受京郊美盛',
        [I18N.JP]: '悠然徒步，感受京郊美盛'
    },
    'detail.muan.4.img6.caption': {
        [I18N.ZH]: '专车旅程',
        [I18N.EN]: '专车旅程',
        [I18N.JP]: '专车旅程'
    },
    'detail.muan.4.img6.desc': {
        [I18N.ZH]: '专车接驳，探秘京都古韵',
        [I18N.EN]: '专车接驳，探秘京都古韵',
        [I18N.JP]: '专车接驳，探秘京都古韵'
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
        [I18N.ZH]: '日式传统榻榻米与餐桌',
        [I18N.EN]: '日式传统榻榻米与餐桌',
        [I18N.JP]: '日式传统榻榻米与餐桌'
    },
    'detail.muan.5.intro1.desc2': {
        [I18N.ZH]: '日式庭院，感悟忘却时间的宁静',
        [I18N.EN]: '日式庭院，感悟忘却时间的宁静',
        [I18N.JP]: '日式庭院，感悟忘却时间的宁静'
    },
    'detail.muan.5.intro1.desc3': {
        [I18N.ZH]: '桧木浴缸，由身至心放松',
        [I18N.EN]: '桧木浴缸，由身至心放松',
        [I18N.JP]: '桧木浴缸，由身至心放松'
    },
    'detail.muan.5.intro1.desc4': {
        [I18N.ZH]: '悠享石塀小路的宁静夜晚',
        [I18N.EN]: '悠享石塀小路的宁静夜晚',
        [I18N.JP]: '悠享石塀小路的宁静夜晚'
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
        [I18N.ZH]: '现代化便利设施，感受专属放松时刻',
        [I18N.EN]: '现代化便利设施，感受专属放松时刻',
        [I18N.JP]: '现代化便利设施，感受专属放松时刻'
    },
    'detail.muan.5.intro2.desc4': {
        [I18N.ZH]: '日式酒廊，品赏京都深沉美学',
        [I18N.EN]: '日式酒廊，品赏京都深沉美学',
        [I18N.JP]: '日式酒廊，品赏京都深沉美学'
    },

    'detail.muan.7.address': {
        [I18N.ZH]: '日本国京都市東山区下河原町463-10',
        [I18N.EN]: '日本国京都市東山区下河原町463-10',
        [I18N.JP]: '日本国京都市東山区下河原町463-10'
    },
    'detail.muan.7.intro1': {
        [I18N.ZH]: 'MUAN 京都 梦庵 位于北海道二世古地区最富盛名的比罗夫镇',
        [I18N.EN]: 'MUAN 京都 梦庵 位于北海道二世古地区最富盛名的比罗夫镇',
        [I18N.JP]: 'MUAN 京都 梦庵 位于北海道二世古地区最富盛名的比罗夫镇'
    },
    'detail.muan.7.intro2': {
        [I18N.ZH]: '四季皆宜的度假圣地，距离札幌两小时车程',
        [I18N.EN]: '四季皆宜的度假圣地，距离札幌两小时车程',
        [I18N.JP]: '四季皆宜的度假圣地，距离札幌两小时车程'
    },
    'detail.muan.7.intro3': {
        [I18N.ZH]: '银装素裹下的冬季，日本最美的粉雪在此降临',
        [I18N.EN]: '银装素裹下的冬季，日本最美的粉雪在此降临',
        [I18N.JP]: '银装素裹下的冬季，日本最美的粉雪在此降临'
    },
    'detail.muan.7.intro4': {
        [I18N.ZH]: '无愧于全球滑雪爱好者的天堂',
        [I18N.EN]: '无愧于全球滑雪爱好者的天堂',
        [I18N.JP]: '无愧于全球滑雪爱好者的天堂'
    },
    'detail.muan.7.intro5': {
        [I18N.ZH]: '伴着远方的羊蹄山风光，享仅属于此地的身心疗愈',
        [I18N.EN]: '伴着远方的羊蹄山风光，享仅属于此地的身心疗愈',
        [I18N.JP]: '伴着远方的羊蹄山风光，享仅属于此地的身心疗愈'
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
        [I18N.ZH]: '盛揽一段关于雪的曼妙传说',
        [I18N.EN]: '盛揽一段关于雪的曼妙传说',
        [I18N.JP]: '盛揽一段关于雪的曼妙传说',
    },
    'detail.arcadia.2.intro3': {
        [I18N.ZH]: '登上至美雪岭',
        [I18N.EN]: '登上至美雪岭',
        [I18N.JP]: '登上至美雪岭',
    },
    'detail.arcadia.2.intro4': {
        [I18N.ZH]: '目光所及',
        [I18N.EN]: '目光所及',
        [I18N.JP]: '目光所及',
    },
    'detail.arcadia.2.intro5': {
        [I18N.ZH]: '皆是银白色世外之境',
        [I18N.EN]: '皆是银白色世外之境',
        [I18N.JP]: '皆是银白色世外之境',
    },
    'detail.arcadia.2.intro6': {
        [I18N.ZH]: '透过无边窗景照射而进的光耀',
        [I18N.EN]: '透过无边窗景照射而进的光耀',
        [I18N.JP]: '透过无边窗景照射而进的光耀',
    },
    'detail.arcadia.2.intro7': {
        [I18N.ZH]: '与自然景致呢喃对话',
        [I18N.EN]: '与自然景致呢喃对话',
        [I18N.JP]: '与自然景致呢喃对话',
    },
    'detail.arcadia.2.intro8': {
        [I18N.ZH]: '探秘皎洁晶莹的非凡之旅',
        [I18N.EN]: '探秘皎洁晶莹的非凡之旅',
        [I18N.JP]: '探秘皎洁晶莹的非凡之旅',
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
        [I18N.ZH]: 'Riccardo Rubellia 倾心之作',
        [I18N.EN]: 'Riccardo Rubellia 倾心之作',
        [I18N.JP]: 'Riccardo Rubellia 倾心之作',
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
        [I18N.ZH]: '一览羊蹄山麓雄阔之姿',
        [I18N.EN]: '一览羊蹄山麓雄阔之姿',
        [I18N.JP]: '一览羊蹄山麓雄阔之姿',
    },
    'detail.arcadia.3.intro6': {
        [I18N.ZH]: '心随银白飞雪共舞',
        [I18N.EN]: '心随银白飞雪共舞',
        [I18N.JP]: '心随银白飞雪共舞',
    },
    'detail.arcadia.3.intro7': {
        [I18N.ZH]: '重获灵魂平和的瞬息',
        [I18N.EN]: '重获灵魂平和的瞬息',
        [I18N.JP]: '重获灵魂平和的瞬息',
    },

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
        [I18N.ZH]: '入微间，尽享怡然舒心',
        [I18N.EN]: '入微间，尽享怡然舒心',
        [I18N.JP]: '入微间，尽享怡然舒心'
    },
    'detail.arcadia.4.img2.caption': {
        [I18N.ZH]: '私享专车',
        [I18N.EN]: '私享专车',
        [I18N.JP]: '私享专车'
    },
    'detail.arcadia.4.img2.desc': {
        [I18N.ZH]: '专属司机，探秘至美二世谷',
        [I18N.EN]: '专属司机，探秘至美二世谷',
        [I18N.JP]: '专属司机，探秘至美二世谷'
    },
    'detail.arcadia.4.img3.caption': {
        [I18N.ZH]: '米其林三星私厨',
        [I18N.EN]: '米其林三星私厨',
        [I18N.JP]: '米其林三星私厨'
    },
    'detail.arcadia.4.img3.desc': {
        [I18N.ZH]: '珍稀食材，享味私人高定晚宴',
        [I18N.EN]: '珍稀食材，享味私人高定晚宴',
        [I18N.JP]: '珍稀食材，享味私人高定晚宴'
    },

    'detail.arcadia.5.caption': {
        [I18N.ZH]: '居·所',
        [I18N.EN]: '居·所',
        [I18N.JP]: '居·所'
    },
    'detail.arcadia.5.intro1.title': {
        [I18N.ZH]: '悠然居所',
        [I18N.EN]: '悠然居所',
        [I18N.JP]: '悠然居所'
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
        [I18N.ZH]: '双通道壁炉与专属酒窖',
        [I18N.EN]: '双通道壁炉与专属酒窖',
        [I18N.JP]: '双通道壁炉与专属酒窖'
    },
    'detail.arcadia.5.intro1.desc4': {
        [I18N.ZH]: '如家般惬意周到',
        [I18N.EN]: '如家般惬意周到',
        [I18N.JP]: '如家般惬意周到'
    },
    'detail.arcadia.5.intro2.title': {
        [I18N.ZH]: '内外疗愈',
        [I18N.EN]: '内外疗愈',
        [I18N.JP]: '内外疗愈'
    },
    'detail.arcadia.5.intro2.desc1': {
        [I18N.ZH]: '中西厨兼具，品味全球珍馐',
        [I18N.EN]: '中西厨兼具，品味全球珍馐',
        [I18N.JP]: '中西厨兼具，品味全球珍馐'
    },
    'detail.arcadia.5.intro2.desc2': {
        [I18N.ZH]: '私享健身房，时刻关注体调',
        [I18N.EN]: '私享健身房，时刻关注体调',
        [I18N.JP]: '私享健身房，时刻关注体调'
    },
    'detail.arcadia.5.intro2.desc3': {
        [I18N.ZH]: '温泉SPA房，抚慰身心疲惫',
        [I18N.EN]: '温泉SPA房，抚慰身心疲惫',
        [I18N.JP]: '温泉SPA房，抚慰身心疲惫'
    },
    'detail.arcadia.5.intro3.title': {
        [I18N.ZH]: '滑雪臻选',
        [I18N.EN]: '滑雪臻选',
        [I18N.JP]: '滑雪臻选'
    },
    'detail.arcadia.5.intro3.desc1': {
        [I18N.ZH]: '滑雪用具干燥室',
        [I18N.EN]: '滑雪用具干燥室',
        [I18N.JP]: '滑雪用具干燥室'
    },
    'detail.arcadia.5.intro3.desc2': {
        [I18N.ZH]: '纵享至臻滑雪之旅',
        [I18N.EN]: '纵享至臻滑雪之旅',
        [I18N.JP]: '纵享至臻滑雪之旅'
    },

    'detail.arcadia.6.caption': {
        [I18N.ZH]: '季·转',
        [I18N.EN]: '季·转',
        [I18N.JP]: '季·转'
    },
    'detail.arcadia.6.intro1': {
        [I18N.ZH]: '纵使冰雪渐融的季节',
        [I18N.EN]: '纵使冰雪渐融的季节',
        [I18N.JP]: '纵使冰雪渐融的季节'
    },
    'detail.arcadia.6.intro2': {
        [I18N.ZH]: '一探茂盛幽深的森林',
        [I18N.EN]: '一探茂盛幽深的森林',
        [I18N.JP]: '一探茂盛幽深的森林'
    },
    'detail.arcadia.6.intro3': {
        [I18N.ZH]: '纵览山顶花田',
        [I18N.EN]: '纵览山顶花田',
        [I18N.JP]: '纵览山顶花田'
    },
    'detail.arcadia.6.intro4': {
        [I18N.ZH]: '挥杆畅享高尔夫乐趣',
        [I18N.EN]: '挥杆畅享高尔夫乐趣',
        [I18N.JP]: '挥杆畅享高尔夫乐趣'
    },
    'detail.arcadia.6.intro5': {
        [I18N.ZH]: '举目皆是羊蹄山的自然至美',
        [I18N.EN]: '举目皆是羊蹄山的自然至美',
        [I18N.JP]: '举目皆是羊蹄山的自然至美'
    },

    'detail.arcadia.7.address': {
        [I18N.ZH]: '日本国北海道虻田郡倶知安町二世谷比罗夫２条２丁目7番18号',
        [I18N.EN]: '日本国北海道虻田郡倶知安町二世谷比罗夫２条２丁目7番18号',
        [I18N.JP]: '日本国北海道虻田郡倶知安町二世谷比罗夫２条２丁目7番18号'
    },
    'detail.arcadia.7.intro1': {
        [I18N.ZH]: 'ARCADIA 位于北海道二世古地区最富盛名的比罗夫镇',
        [I18N.EN]: 'ARCADIA 位于北海道二世古地区最富盛名的比罗夫镇',
        [I18N.JP]: 'ARCADIA 位于北海道二世古地区最富盛名的比罗夫镇'
    },
    'detail.arcadia.7.intro2': {
        [I18N.ZH]: '四季皆宜的度假圣地，距离札幌两小时车程',
        [I18N.EN]: '四季皆宜的度假圣地，距离札幌两小时车程',
        [I18N.JP]: '四季皆宜的度假圣地，距离札幌两小时车程'
    },
    'detail.arcadia.7.intro3': {
        [I18N.ZH]: '银装素裹下的冬季，日本最美的粉雪在此降临',
        [I18N.EN]: '银装素裹下的冬季，日本最美的粉雪在此降临',
        [I18N.JP]: '银装素裹下的冬季，日本最美的粉雪在此降临'
    },
    'detail.arcadia.7.intro4': {
        [I18N.ZH]: '无愧于全球滑雪爱好者的天堂',
        [I18N.EN]: '无愧于全球滑雪爱好者的天堂',
        [I18N.JP]: '无愧于全球滑雪爱好者的天堂'
    },
    'detail.arcadia.7.intro5': {
        [I18N.ZH]: '伴着远方的羊蹄山风光，享仅属于此地的身心疗愈',
        [I18N.EN]: '伴着远方的羊蹄山风光，享仅属于此地的身心疗愈',
        [I18N.JP]: '伴着远方的羊蹄山风光，享仅属于此地的身心疗愈'
    },
    'detail.arcadia.7.mapaddr': {
        [I18N.ZH]: '二世谷，比罗夫',
        [I18N.EN]: '二世谷，比罗夫',
        [I18N.JP]: '二世谷，比罗夫'
    },

    // todo1: new i18ns
    'detail.kanrinkyo.2.intro1': {
        [I18N.ZH]: '面朝银白色羊蹄山麓',
        [I18N.EN]: '面朝银白色羊蹄山麓',
        [I18N.JP]: '面朝银白色羊蹄山麓',
    },
    'detail.kanrinkyo.2.intro2': {
        [I18N.ZH]: '隐入静怡之地',
        [I18N.EN]: '隐入静怡之地',
        [I18N.JP]: '隐入静怡之地',
    },
    'detail.kanrinkyo.2.intro3': {
        [I18N.ZH]: '目光投射于天地间',
        [I18N.EN]: '目光投射于天地间',
        [I18N.JP]: '目光投射于天地间',
    },
    'detail.kanrinkyo.2.intro4': {
        [I18N.ZH]: '忘却尘世的繁杂念想',
        [I18N.EN]: '忘却尘世的繁杂念想',
        [I18N.JP]: '忘却尘世的繁杂念想',
    },
    'detail.kanrinkyo.2.intro5': {
        [I18N.ZH]: '在自然中感受四季流转',
        [I18N.EN]: '在自然中感受四季流转',
        [I18N.JP]: '在自然中感受四季流转',
    },
    'detail.kanrinkyo.2.intro6': {
        [I18N.ZH]: '回归内心的平静',
        [I18N.EN]: '回归内心的平静',
        [I18N.JP]: '回归内心的平静',
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
        [I18N.ZH]: '坐落于森绿繁荫的山坡',
        [I18N.EN]: '坐落于森绿繁荫的山坡',
        [I18N.JP]: '坐落于森绿繁荫的山坡',
    },
    'detail.kanrinkyo.3.intro4': {
        [I18N.ZH]: '面朝羊蹄山麓',
        [I18N.EN]: '面朝羊蹄山麓',
        [I18N.JP]: '面朝羊蹄山麓',
    },
    'detail.kanrinkyo.3.intro5': {
        [I18N.ZH]: '远离众人的些许喧嚣',
        [I18N.EN]: '远离众人的些许喧嚣',
        [I18N.JP]: '远离众人的些许喧嚣',
    },
    'detail.kanrinkyo.3.intro6': {
        [I18N.ZH]: '更体味与自然相融的平和心境',
        [I18N.EN]: '更体味与自然相融的平和心境',
        [I18N.JP]: '更体味与自然相融的平和心境',
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
        [I18N.ZH]: '入微间，尽享怡然舒心',
        [I18N.EN]: '入微间，尽享怡然舒心',
        [I18N.JP]: '入微间，尽享怡然舒心',
    },
    'detail.kanrinkyo.4.img2.caption': {
        [I18N.ZH]: '私享专车',
        [I18N.EN]: '私享专车',
        [I18N.JP]: '私享专车',
    },
    'detail.kanrinkyo.4.img2.desc': {
        [I18N.ZH]: '专属司机，探秘至美二世谷',
        [I18N.EN]: '专属司机，探秘至美二世谷',
        [I18N.JP]: '专属司机，探秘至美二世谷',
    },
    'detail.kanrinkyo.4.img3.caption': {
        [I18N.ZH]: '米其林三星私厨',
        [I18N.EN]: '米其林三星私厨',
        [I18N.JP]: '米其林三星私厨',
    },
    'detail.kanrinkyo.4.img3.desc': {
        [I18N.ZH]: '珍稀食材，享味私人高定晚宴',
        [I18N.EN]: '珍稀食材，享味私人高定晚宴',
        [I18N.JP]: '珍稀食材，享味私人高定晚宴',
    },

    'detail.kanrinkyo.5.caption': {
        [I18N.ZH]: '居·所',
        [I18N.EN]: '居·所',
        [I18N.JP]: '居·所',
    },
    'detail.kanrinkyo.5.intro1.title': {
        [I18N.ZH]: '悠然居所',
        [I18N.EN]: '悠然居所',
        [I18N.JP]: '悠然居所',
    },
    'detail.kanrinkyo.5.intro1.desc1': {
        [I18N.ZH]: '感受宽阔尺度的舒适体验',
        [I18N.EN]: '感受宽阔尺度的舒适体验',
        [I18N.JP]: '感受宽阔尺度的舒适体验',
    },
    'detail.kanrinkyo.5.intro1.desc2': {
        [I18N.ZH]: '双层挑高客厅',
        [I18N.EN]: '双层挑高客厅',
        [I18N.JP]: '双层挑高客厅',
    },
    'detail.kanrinkyo.5.intro1.desc3': {
        [I18N.ZH]: '双通道壁炉，专属酒窖',
        [I18N.EN]: '双通道壁炉，专属酒窖',
        [I18N.JP]: '双通道壁炉，专属酒窖',
    },
    'detail.kanrinkyo.5.intro1.desc4': {
        [I18N.ZH]: '私人影院，尽享视觉盛宴',
        [I18N.EN]: '私人影院，尽享视觉盛宴',
        [I18N.JP]: '私人影院，尽享视觉盛宴',
    },
    'detail.kanrinkyo.5.intro2.title': {
        [I18N.ZH]: '内外疗愈',
        [I18N.EN]: '内外疗愈',
        [I18N.JP]: '内外疗愈',
    },
    'detail.kanrinkyo.5.intro2.desc1': {
        [I18N.ZH]: '中西厨兼具，品味全球珍馐',
        [I18N.EN]: '中西厨兼具，品味全球珍馐',
        [I18N.JP]: '中西厨兼具，品味全球珍馐',
    },
    'detail.kanrinkyo.5.intro2.desc2': {
        [I18N.ZH]: '私享健身房，专属25米超大泳池',
        [I18N.EN]: '私享健身房，专属25米超大泳池',
        [I18N.JP]: '私享健身房，专属25米超大泳池',
    },
    'detail.kanrinkyo.5.intro2.desc3': {
        [I18N.ZH]: '时刻关注健康体调',
        [I18N.EN]: '时刻关注健康体调',
        [I18N.JP]: '时刻关注健康体调',
    },
    'detail.kanrinkyo.5.intro2.desc4': {
        [I18N.ZH]: '温泉SPA房，抚慰身心疲惫',
        [I18N.EN]: '温泉SPA房，抚慰身心疲惫',
        [I18N.JP]: '温泉SPA房，抚慰身心疲惫',
    },
    'detail.kanrinkyo.5.intro3.title': {
        [I18N.ZH]: '滑雪臻选',
        [I18N.EN]: '滑雪臻选',
        [I18N.JP]: '滑雪臻选',
    },
    'detail.kanrinkyo.5.intro3.desc1': {
        [I18N.ZH]: '滑雪用具干燥室',
        [I18N.EN]: '滑雪用具干燥室',
        [I18N.JP]: '滑雪用具干燥室',
    },
    'detail.kanrinkyo.5.intro3.desc2': {
        [I18N.ZH]: '纵享至臻滑雪之旅',
        [I18N.EN]: '纵享至臻滑雪之旅',
        [I18N.JP]: '纵享至臻滑雪之旅',
    },

    'detail.kanrinkyo.7.address': {
        [I18N.ZH]: '日本国北海道虻田郡倶知安町二世谷比罗夫２条２丁目7番18号',
        [I18N.EN]: '日本国北海道虻田郡倶知安町二世谷比罗夫２条２丁目7番18号',
        [I18N.JP]: '日本国北海道虻田郡倶知安町二世谷比罗夫２条２丁目7番18号'
    },
    'detail.kanrinkyo.7.intro1': {
        [I18N.ZH]: 'KanRinkyo 雪屋 閑林居 位于北海道二世古地区最富盛名的比罗夫镇',
        [I18N.EN]: 'KanRinkyo 雪屋 閑林居 位于北海道二世古地区最富盛名的比罗夫镇',
        [I18N.JP]: 'KanRinkyo 雪屋 閑林居 位于北海道二世古地区最富盛名的比罗夫镇'
    },
    'detail.kanrinkyo.7.intro2': {
        [I18N.ZH]: '四季皆宜的度假圣地，距离札幌两小时车程',
        [I18N.EN]: '四季皆宜的度假圣地，距离札幌两小时车程',
        [I18N.JP]: '四季皆宜的度假圣地，距离札幌两小时车程'
    },
    'detail.kanrinkyo.7.intro3': {
        [I18N.ZH]: '银装素裹下的冬季，日本最美的粉雪在此降临',
        [I18N.EN]: '银装素裹下的冬季，日本最美的粉雪在此降临',
        [I18N.JP]: '银装素裹下的冬季，日本最美的粉雪在此降临'
    },
    'detail.kanrinkyo.7.intro4': {
        [I18N.ZH]: '无愧于全球滑雪爱好者的天堂',
        [I18N.EN]: '无愧于全球滑雪爱好者的天堂',
        [I18N.JP]: '无愧于全球滑雪爱好者的天堂'
    },
    'detail.kanrinkyo.7.intro5': {
        [I18N.ZH]: '伴着远方的羊蹄山风光，享仅属于此地的身心疗愈',
        [I18N.EN]: '伴着远方的羊蹄山风光，享仅属于此地的身心疗愈',
        [I18N.JP]: '伴着远方的羊蹄山风光，享仅属于此地的身心疗愈'
    },



    'detail.yukoro.2.intro1': {
        [I18N.ZH]: '传承百年的天然温泉',
        [I18N.EN]: '传承百年的天然温泉',
        [I18N.JP]: '传承百年的天然温泉'
    },
    'detail.yukoro.2.intro2': {
        [I18N.ZH]: '日本建筑大师中山真琴倾力巨献',
        [I18N.EN]: '日本建筑大师中山真琴倾力巨献',
        [I18N.JP]: '日本建筑大师中山真琴倾力巨献'
    },
    'detail.yukoro.2.intro3': {
        [I18N.ZH]: '坐落滑雪胜地二世谷核心比罗夫镇',
        [I18N.EN]: '坐落滑雪胜地二世谷核心比罗夫镇',
        [I18N.JP]: '坐落滑雪胜地二世谷核心比罗夫镇'
    },
    'detail.yukoro.2.intro4': {
        [I18N.ZH]: '开辟一片暖意相传的空间',
        [I18N.EN]: '开辟一片暖意相传的空间',
        [I18N.JP]: '开辟一片暖意相传的空间'
    },
    'detail.yukoro.2.intro5': {
        [I18N.ZH]: '此处的片刻停歇',
        [I18N.EN]: '此处的片刻停歇',
        [I18N.JP]: '此处的片刻停歇'
    },
    'detail.yukoro.2.intro6': {
        [I18N.ZH]: '为了更好地迈步难忘之旅',
        [I18N.EN]: '为了更好地迈步难忘之旅',
        [I18N.JP]: '为了更好地迈步难忘之旅'
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
        [I18N.ZH]: '耳畔传来夏日的鸟鸣',
        [I18N.EN]: '耳畔传来夏日的鸟鸣',
        [I18N.JP]: '耳畔传来夏日的鸟鸣'
    },
    'detail.yukoro.3.intro6': {
        [I18N.ZH]: '或静观飘舞的飞雪',
        [I18N.EN]: '或静观飘舞的飞雪',
        [I18N.JP]: '或静观飘舞的飞雪'
    },
    'detail.yukoro.3.intro7': {
        [I18N.ZH]: '独属于此地的非凡意义',
        [I18N.EN]: '独属于此地的非凡意义',
        [I18N.JP]: '独属于此地的非凡意义'
    },
    'detail.yukoro.3.intro8': {
        [I18N.ZH]: '将永远地传承下去',
        [I18N.EN]: '将永远地传承下去',
        [I18N.JP]: '将永远地传承下去'
    },

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
        [I18N.ZH]: '天然 66.4℃，PH值: 6.8',
        [I18N.EN]: '天然 66.4℃，PH值: 6.8',
        [I18N.JP]: '天然 66.4℃，PH值: 6.8'
    },
    'detail.yukoro.4.intro3': {
        [I18N.ZH]: '富含碳酸氢钠盐',
        [I18N.EN]: '富含碳酸氢钠盐',
        [I18N.JP]: '富含碳酸氢钠盐'
    },
    'detail.yukoro.4.intro4': {
        [I18N.ZH]: '焕美肌肤，葆水湿润',
        [I18N.EN]: '焕美肌肤，葆水湿润',
        [I18N.JP]: '焕美肌肤，葆水湿润'
    },
    'detail.yukoro.4.intro5': {
        [I18N.ZH]: '亦可缓解肌肉痛、神经痛',
        [I18N.EN]: '亦可缓解肌肉痛、神经痛',
        [I18N.JP]: '亦可缓解肌肉痛、神经痛'
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
        [I18N.ZH]: '赏味纯正的日式烧鸟风味',
        [I18N.EN]: '赏味纯正的日式烧鸟风味',
        [I18N.JP]: '赏味纯正的日式烧鸟风味'
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
        [I18N.ZH]: '日本国北海道虻田郡倶知安町二世谷比罗夫２条２丁目7番18号',
        [I18N.EN]: '日本国北海道虻田郡倶知安町二世谷比罗夫２条２丁目7番18号',
        [I18N.JP]: '日本国北海道虻田郡倶知安町二世谷比罗夫２条２丁目7番18号'
    },
    'detail.yukoro.7.intro1': {
        [I18N.ZH]: 'Yukoro 二世谷 温泉 位于北海道二世古地区最富盛名的比罗夫镇',
        [I18N.EN]: 'Yukoro 二世谷 温泉 位于北海道二世古地区最富盛名的比罗夫镇',
        [I18N.JP]: 'Yukoro 二世谷 温泉 位于北海道二世古地区最富盛名的比罗夫镇'
    },
    'detail.yukoro.7.intro2': {
        [I18N.ZH]: '四季皆宜的度假圣地，距离札幌两小时车程',
        [I18N.EN]: '四季皆宜的度假圣地，距离札幌两小时车程',
        [I18N.JP]: '四季皆宜的度假圣地，距离札幌两小时车程'
    },
    'detail.yukoro.7.intro3': {
        [I18N.ZH]: '银装素裹下的冬季，日本最美的粉雪在此降临',
        [I18N.EN]: '银装素裹下的冬季，日本最美的粉雪在此降临',
        [I18N.JP]: '银装素裹下的冬季，日本最美的粉雪在此降临'
    },
    'detail.yukoro.7.intro4': {
        [I18N.ZH]: '无愧于全球滑雪爱好者的天堂',
        [I18N.EN]: '无愧于全球滑雪爱好者的天堂',
        [I18N.JP]: '无愧于全球滑雪爱好者的天堂'
    },
    'detail.yukoro.7.intro5': {
        [I18N.ZH]: '伴着远方的羊蹄山风光，享仅属于此地的身心疗愈',
        [I18N.EN]: '伴着远方的羊蹄山风光，享仅属于此地的身心疗愈',
        [I18N.JP]: '伴着远方的羊蹄山风光，享仅属于此地的身心疗愈'
    }
}