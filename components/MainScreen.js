import { StatusBar, StyleSheet, View } from 'react-native'

import React from 'react'
import { appColors } from '../constant'

const MainScreen = ({ children, rootStyle }) => {
    return (
        <View style={{ ...styles.root, ...rootStyle }} >
            <StatusBar hidden={false} barStyle='dark-content' backgroundColor={appColors.primary} />
            {children}
        </View>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: appColors.primary,
    }
})