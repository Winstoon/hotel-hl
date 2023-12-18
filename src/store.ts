// todo: 状态管理

import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { I18N, I18NS } from './i18n'
import { ENLetterSpacingMap, ILetterSpacing, LetterSpacingMap } from './letterSpacings'

type I18NData = {
    [key: string]: string
}

type CommonState = {
    lang: I18N
    I18N: I18NData
    letterSpacing: ILetterSpacing
    pageSectionOrder: number
    wechatDialogVisible: boolean
    swiper: any
}

type CommonActions = {
    setLang: (lang: I18N) => void
    setPageSectionOrder: (order: number) => void
    setWeChatDialogVisible: (visible: boolean) => void
    setSwiper: (swiper: any) => void
}

const getDefaultI18NData = () => {
    let result: I18NData = {}
    Object.entries(I18NS).forEach(([key, value]) => {
        const str = value[I18N.ZH]
        result[key] = str
    })
    return result
}

export const useCommonStore = create(immer<CommonState & CommonActions>((set, get) => ({
    swiper: undefined,
    lang: I18N.ZH,
    I18N: getDefaultI18NData(),
    letterSpacing: LetterSpacingMap,
    pageSectionOrder: 0,
    wechatDialogVisible: false,
    setSwiper: swiper => set({ swiper }),
    setLang: lang => {
        let lsmap = lang === I18N.EN ? ENLetterSpacingMap : LetterSpacingMap
        let result: I18NData = {}
        Object.entries(I18NS).forEach(([key, value]) => {
            const str = value[lang]
            result[key] = str
        })
        set({ lang, I18N: result, letterSpacing: lsmap })
    },
    setPageSectionOrder: order => set({ pageSectionOrder: order }),
    setWeChatDialogVisible: visible => set({ wechatDialogVisible: visible })
})))


type FadeSlideProps = {
    active: number
    setActive: (active: number) => void
    setActiveFn: (fn: (prev: number) => number) => void
}

export const useFadeSlideStore = create(immer<FadeSlideProps>((set, get) => ({
    active: 0,
    setActive: active => set({ active }),
    setActiveFn: fn => set(state => ({ active: fn(state.active) }))
})))

export const useFadeSlide2Store = create(immer<FadeSlideProps>((set, get) => ({
    active: 0,
    setActive: active => set({ active }),
    setActiveFn: fn => set(state => ({ active: fn(state.active) }))
})))

export const useFadeSlide3Store = create(immer<FadeSlideProps>((set, get) => ({
    active: 0,
    setActive: active => set({ active }),
    setActiveFn: fn => set(state => ({ active: fn(state.active) }))
})))
