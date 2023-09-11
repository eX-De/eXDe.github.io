import { defineStore } from 'pinia'

const useLangStore = defineStore('lang_store', {
    state: () => {
        return{
            lang: 'en'
        }
    }
})

const useThemeStore = defineStore('theme_store', {
    state: () => {
        return{
            isLightTheme: true
        }
    }
})

export {
    useLangStore,
    useThemeStore
}