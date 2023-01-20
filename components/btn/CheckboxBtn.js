import { StyleSheet, TouchableOpacity } from 'react-native'

import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import { appColors, } from '../../constant'

const CheckboxBtn = ({ onPress, item, ...props }) => {
    return (
        <TouchableOpacity
            {...props}
            onPress={onPress}
            activeOpacity={.5}
            style={{ ...styles.container, }}
        >
            {item.isDone && <AntDesign name="check" size={15} color={appColors.black} />}
        </TouchableOpacity>
    )
}

export default CheckboxBtn

const styles = StyleSheet.create({
    container: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: appColors.black
    }
})