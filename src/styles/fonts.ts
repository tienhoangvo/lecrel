import { Bricolage_Grotesque, Playfair_Display } from 'next/font/google'

export const fontBrand = Playfair_Display({
    subsets: ['vietnamese'],
    variable: '--font-brand',
})

export const fontPlain = Bricolage_Grotesque({
    subsets: ['vietnamese'],
    variable: '--font-plain'
})