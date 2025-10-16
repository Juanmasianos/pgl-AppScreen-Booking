import { ImageSourcePropType } from "react-native"

export type FooterItem = {
    key: string,
    icon?: string,
    picture?: ImageSourcePropType
    title: string
}