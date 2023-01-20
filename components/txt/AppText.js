import { appColors, appFontSize } from '../../constant'

import React from 'react'
import { Text } from 'react-native'

const AppText = ({ label, lblStyle, type, ...props }) => {
    const handleStyling = (type) => {
        switch (type) {
            case 'label':
            case undefined:
                return {
                    'fontSize': appFontSize.m,
                    'color': appColors.txtColor,
                }
            case 'title':
                return {
                    'fontSize': appFontSize.l,
                    'color': appColors.txtColor,
                }
        }
    }

    return <Text {...props} style={[handleStyling(type), lblStyle,]} >{label}</Text>
}

export default AppText