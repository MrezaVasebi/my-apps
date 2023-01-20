import { StyleSheet, TextInput } from 'react-native'
import { appColors, appRadius } from '../../constant'

import React from 'react'

const AppInput = ({ placeholder, style, onChangeText, ...props }) => {
    return (
        <TextInput
            placeholder={placeholder}
            onChangeText={onChangeText}
            style={{ ...styles.inputStyle, ...style }}
            {...props}
        />
    )
}

export default AppInput

const styles = StyleSheet.create({
    inputStyle: {
        height: 45,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: appRadius.s,
        borderColor: appColors.black,
        backgroundColor: appColors.primary,
    }
})