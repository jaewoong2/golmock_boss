import { themeType } from './styles.type';
import '@emotion/react'

declare module '@emotion/react' {
    export interface Theme extends themeType {
    }
}