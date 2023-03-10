import React from 'react'
import { TouchableOpacity } from 'react-native'
import { handleIcons } from '../../modules'

const IconButton = ({ btnStyle, onPress, iconElement, iconName, size = 30, color, ...otherProps }) => {
    return <TouchableOpacity
        {...otherProps}
        onPress={onPress}
        style={[btnStyle]}
    >
        {handleIcons(iconElement, iconName, size, color)}
    </TouchableOpacity>
}

export default IconButton