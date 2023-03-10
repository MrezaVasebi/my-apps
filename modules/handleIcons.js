import {
    AntDesign,
    Entypo,
    Ionicons
} from '@expo/vector-icons';

import { appColors } from "../constant";

export const handleIcons = (iconElement, iconName, size = 30, color = appColors.black) => {
    switch (iconName) {
        case 'menu': {
            if (iconElement === 'Entypo')
                return <Entypo name="menu" size={size} color={color} />
        }
        case 'logout': {
            if (iconElement === 'Ionicons')
                return <Ionicons name="exit-outline" size={size} color={color} />
            else if (iconElement === 'AntDesign')
                return <AntDesign name="logout" size={size} color={color} />
        }
        case 'arrowleft': {
            if (iconElement === 'AntDesign')
                return <AntDesign name="arrowleft" size={size} color={color} />
        }
        default:
            return null
    }
}