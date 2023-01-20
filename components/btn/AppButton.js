import { StyleSheet, TouchableOpacity, } from 'react-native'

import { AppText } from '../txt'
import React from 'react'
import { appRadius } from '../../constant'

const AppButton = ({ label, lblStyle, width, btnStyle, ...props }) => {
    return (
        <TouchableOpacity style={[styles.btnStyle, { width: width }, btnStyle,]} {...props} >
            <AppText label={label} lblStyle={lblStyle} />
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    btnStyle: {
        height: 45,
        borderWidth: 1,
        paddingHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: appRadius.s
    }
})